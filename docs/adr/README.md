# Decision records

Short records of significant decisions: the context, the options that were considered, what was chosen, and what it cost.

The format is deliberately plain. Six months from now the decision itself is usually remembered and the reasoning is not, and the rejected options are the part that matters when someone proposes reopening a settled question.

| # | Decision | Status |
|---|---|---|
| [0001](0001-astro-over-single-file-html.md) | Astro over a single-file HTML build | Accepted |
| [0002](0002-workers-over-pages.md) | Cloudflare Workers static assets over Pages or GitHub Pages | Accepted |
| [0003](0003-public-repo-private-playbook.md) | Public site repository, private operations playbook | Accepted |
| [0004](0004-no-client-infrastructure-published.md) | No client infrastructure detail in public writing | Accepted |
| [0005](0005-explicit-order-field.md) | Explicit order field rather than filesystem sort | Accepted |
| [0006](0006-semantic-colour-layer.md) | Semantic colour layer, added under constraint | Accepted |
| [0007](0007-self-hosted-fonts.md) | Self-hosted fonts via the Astro Fonts API | Accepted |
| [0008](0008-headers-file-over-worker.md) | Security headers via _headers rather than a Worker script | Accepted |
| [0009](0009-utc-pinned-dates.md) | Dates formatted in UTC rather than local time | Accepted |
| [0010](0010-editorial-index-over-cards.md) | Editorial index rather than a card grid | Accepted |
| [0011](0011-license-split.md) | Licensing for code and content | Open |

## Still open

Beyond ADR-0011: whether the material-derived palette carries site-wide or stays scoped to the travel piece it came from, and whether `style-src 'unsafe-inline'` is removed by disabling inlined stylesheets.
