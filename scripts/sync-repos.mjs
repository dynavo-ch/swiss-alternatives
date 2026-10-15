#!/usr/bin/env node
/**
 * Fetches GitHub statistics (stars, forks, licence, language, last push …)
 * for every product whose `openSource.repository` points to GitHub, and
 * writes them to src/data/repositories.json. Commit the result.
 *
 *   npm run sync:repos                 # unauthenticated: 60 requests/hour
 *   GITHUB_TOKEN=… npm run sync:repos  # authenticated: 5000 requests/hour
 *
 * A scheduled workflow (.github/workflows/sync-repos.yml) runs this weekly.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { parse } from 'yaml';

const root = new URL('../', import.meta.url);
const out = new URL('src/data/repositories.json', root);
const token = process.env.GITHUB_TOKEN;

async function gh(path) {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'swiss-alternatives-sync',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`GitHub ${path}: ${response.status} ${await response.text()}`);
  return response.json();
}

const urls = new Set();
const dir = new URL('src/content/products/', root);
for (const file of readdirSync(dir)) {
  const text = readFileSync(new URL(file, dir), 'utf8');
  const match = /^---\n([\s\S]*?)\n---/.exec(text);
  const repo = match ? parse(match[1])?.openSource?.repository : undefined;
  if (typeof repo === 'string' && /^https:\/\/github\.com\/[^/]+/.test(repo))
    urls.add(repo.replace(/\/+$/, ''));
}

const fetchedAt = new Date().toISOString();
const repos = {};
for (const url of [...urls].sort()) {
  const [owner, name] = new URL(url).pathname.split('/').filter(Boolean);
  try {
    if (name) {
      const r = await gh(`/repos/${owner}/${name}`);
      if (!r) throw new Error('not found');
      repos[url] = {
        url,
        kind: 'repository',
        name: r.full_name,
        description: r.description,
        stars: r.stargazers_count,
        forks: r.forks_count,
        openIssues: r.open_issues_count,
        license:
          r.license?.spdx_id && r.license.spdx_id !== 'NOASSERTION' ? r.license.spdx_id : null,
        language: r.language,
        topics: r.topics ?? [],
        archived: r.archived,
        lastPush: r.pushed_at,
        fetchedAt,
      };
    } else {
      const org = (await gh(`/orgs/${owner}`)) ?? (await gh(`/users/${owner}`));
      if (!org) throw new Error('not found');
      const [latest] = (await gh(`/orgs/${owner}/repos?sort=pushed&per_page=1`)) ?? [];
      repos[url] = {
        url,
        kind: 'organisation',
        name: org.name ?? org.login,
        description: org.description ?? org.bio ?? null,
        publicRepos: org.public_repos,
        lastPush: latest?.pushed_at ?? null,
        fetchedAt,
      };
    }
    console.log(`✓ ${url}`);
  } catch (error) {
    console.warn(`✗ ${url}: ${error.message}`);
  }
}

writeFileSync(out, JSON.stringify({ fetchedAt, repos }, null, 2) + '\n');
console.log(
  `Wrote ${Object.keys(repos).length} of ${urls.size} repositories to src/data/repositories.json`,
);
