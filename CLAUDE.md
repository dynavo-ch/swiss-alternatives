# Instructions for Claude

This repository is **Swiss Alternatives**, a static Astro directory of Swiss
software and cloud services. Most contributions are content entries; treat
them as fact-checking work, not copywriting.

## Content rules (read docs/CONTENT.md first)

- One file per product (`src/content/products/<slug>.md`) and per company
  (`src/content/companies/<slug>.yaml`). Templates with every field are in
  `templates/`. `npm run new -- <website> [--github <repo>]` drafts both from
  the website, the imprint, the Swiss commercial register (Zefix) and GitHub.
- **Never invent facts.** If something cannot be confirmed from a source, set it
  to `unknown` or leave it out. Unknown is better than wrong.
- Every claim about ownership, development, hosting and infrastructure needs
  `basis` (verified | vendor | inferred) and a `source` id from the file's
  `sources` list. Use `verified` only for registry or independent confirmation.
- Headquarters, ownership and jurisdiction are company facts; development,
  hosting, data locations and infrastructure are product facts. A Swiss company
  on a foreign cloud is not "hosted in Switzerland".
- Check 2024–2026 news for acquisitions: record foreign parents honestly
  (`swissOwned: no`, `parent`, `parentCountry`).
- A product is only listed if it meets one of the tiers on `/methodology/`
  (Swiss-headquartered and registered company, Swiss-developed open source, or
  Swiss-hosted foreign service). The build enforces this.
- Neutral, factual tone. No marketing language, no superlatives. Tagline ≤ 90
  characters, description 120–160 characters, body 2–3 short paragraphs.
- The site is bilingual (English, German at `/de/`). When adding an entry, also
  add the `i18n.de` block (see "Translations" in docs/CONTENT.md) in Swiss
  Standard German (`ss`, never `ß`). Translate only; never add facts.

## Before opening a pull request

Run `npm run verify` (types, lint, content lint, build with relational
validation, link check). It must pass. Summarise in the PR which facts are
verified, which are vendor claims, and what remains unknown.

## Code

Astro 7, TypeScript (strictest), hand-written CSS with tokens in
`src/styles/tokens.css`, minimal client JavaScript in `src/scripts/`. UI
strings live in `src/i18n/ui/en.ts` and `de.ts` — add every new key to both. Keep pages useful without JavaScript.
