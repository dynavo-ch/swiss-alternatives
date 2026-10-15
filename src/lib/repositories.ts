/**
 * GitHub statistics for open-source repositories, synced by
 * `npm run sync:repos` (scripts/sync-repos.mjs) into src/data/repositories.json.
 * The build never calls the GitHub API — it only reads this committed file.
 */
import data from '~/data/repositories.json';

export interface RepositoryStats {
  url: string;
  kind: 'repository' | 'organisation';
  name: string;
  description?: string | null;
  stars?: number;
  forks?: number;
  openIssues?: number;
  license?: string | null;
  language?: string | null;
  topics?: string[];
  archived?: boolean;
  publicRepos?: number;
  lastPush?: string | null;
  fetchedAt: string;
}

const repos = (data as { repos: Record<string, RepositoryStats> }).repos;

const normalise = (url: string) => url.replace(/\/+$/, '').toLowerCase();
const index = new Map(Object.entries(repos).map(([url, stats]) => [normalise(url), stats]));

export function repositoryFor(url: string | undefined): RepositoryStats | undefined {
  return url ? index.get(normalise(url)) : undefined;
}
