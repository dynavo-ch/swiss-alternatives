# Templates

Complete examples of every content type, showing **all supported fields with
their defaults**. Copy one into `src/content/…`, or let the importer draft an
entry for you:

```bash
npm run new -- https://example.ch --github https://github.com/example/app
```

| Template           | Copy to                                |
| ------------------ | -------------------------------------- |
| `product.md`       | `src/content/products/<slug>.md`       |
| `company.yaml`     | `src/content/companies/<slug>.yaml`    |
| `alternative.yaml` | `src/content/alternatives/<slug>.yaml` |
| `category.yaml`    | `src/content/categories/<slug>.yaml`   |

Field definitions: [docs/CONTENT.md](../docs/CONTENT.md). JSON Schemas for
editor autocompletion and validation: [schemas/](../schemas/).
