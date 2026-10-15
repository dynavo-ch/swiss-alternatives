# Logos

Product and company logos, normalised to 256×256 PNG tiles by
`npm run logos` (`scripts/fetch-logos.mjs`).

- `<product-slug>.png` — product logo
- `company--<company-slug>.png` — company logo (fallback for its products)
- `manual/` — official files supplied by vendors or contributors; these always
  take precedence (SVG preferred, otherwise a square PNG ≥ 256 px)
- `exclude.txt` — keys to skip when the website icon is not a usable logo
- `sources.json` — where every logo came from and when

## Guidelines

Logos identify the vendor or product they belong to. They are shown beside the
product, at icon size, separate from this site's own branding, and never in a
way that suggests the vendor endorses or sponsors the directory. Logos are not
recoloured or redrawn — only trimmed, scaled and placed on a white tile.

Logos and product names are trademarks of their owners and are **not** covered
by this repository's licences. Vendors who prefer a different file — or no logo
at all — can write to the contact address on the website.
