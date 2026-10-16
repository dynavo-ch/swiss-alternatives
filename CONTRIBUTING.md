# Contributing

Thank you for helping make Swiss software easier to find.

## Suggest a product or report an error

- **No Git needed:** use the [suggestion form](https://swiss-alternatives.ch/suggest/) or the
  "Report an error" link on any product page. Both prepare a GitHub issue or an email for you.
- **GitHub issues:** use the _Suggest a product_ or _Report an error_ issue forms.

Please include sources. We publish only facts we can verify, and we mark each fact as _verified_,
_vendor claim_ or _inferred_.

## Looking for something to research?

[docs/backlog.md](docs/backlog.md) lists Swiss software companies that have not been researched yet
(leads from the public swiss made software member list). Pick one, check it against the listing
criteria and open a pull request.

## Add or edit entries yourself

1. Read [docs/CONTENT.md](docs/CONTENT.md) and the [listing criteria](https://swiss-alternatives.ch/methodology/).
2. Run `npm install` once, then draft an entry from the product's website:
   `npm run new -- https://example.ch [--github https://github.com/example/app]`.
   It fills in what it can read (name, languages, legal pages, commercial-register data, GitHub
   facts) and leaves the rest as `unknown`. Alternatively copy a file from `templates/`.
3. Verify and complete the entry from sources — especially ownership, development and hosting.
4. Optionally run `npm run logos -- <slug>` to fetch and normalise the logo.
5. Run `npm run verify`. The build validates every reference and explains what to fix.
6. Open a pull request. The checklist in the template covers the essentials.

Maintainers can add the `research` label to a suggestion issue to have Claude draft the entry as a
pull request (see "Automation with Claude" in the README). Every automated draft is reviewed by a
human before merging.

### Editorial rules

- Neutral, factual, concise. No marketing language, no superlatives, no political rhetoric.
- Unknown is better than wrong — omit or mark `unknown` rather than guessing.
- Keep company facts (headquarters, ownership) in the company file; product facts in the product file.
- Vendors are welcome to submit corrections about their own products. Please disclose the relationship.

## Code contributions

Run `npm run verify` before opening a pull request (formatting, lint, types, build, link check).
Keep JavaScript minimal and progressive: pages must stay useful without it.
