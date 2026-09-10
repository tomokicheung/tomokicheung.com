# tomokicheung.com

Personal portfolio and record for Tomoki Cheung, built as a static Astro site on Cloudflare Workers, with the reasoning behind every significant decision written down.

<!-- Add a screenshot here once the custom domain is live: docs/screenshot.png -->

![Astro](https://img.shields.io/badge/Astro-7.3.2-BC52EE)
![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers%20static%20assets-F38020)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6)
![CSP](https://img.shields.io/badge/CSP-script--src%20'self'-2E7D32)

**Live:** not yet public. The custom domain cutover is the first item on the roadmap.

## What this is

A portfolio and personal record. Client work, ventures, writing, and travel, plus a running record of what broke along the way.

It is also the artifact it describes. This repository is meant to be read, not just deployed. The [decision records](docs/adr/) explain why each choice was made and what was rejected, because six months from now the reasoning is the part nobody remembers.

## Quick start

```bash
git clone https://github.com/tomokicheung/tomokicheung.com.git
cd tomokicheung.com
nvm use            # Node 22, pinned in .nvmrc
npm install
npm run dev        # http://localhost:4321
```

To preview the way production actually serves it, through the Workers runtime rather than the Astro dev server:

```bash
npm run build
npx wrangler dev   # http://localhost:8787
```

The difference matters. `wrangler dev` serves out of `dist/` and applies `public/_headers`, so it catches asset-path and header problems the Astro dev server hides.

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Astro 7.3.2, static output | [ADR-0001](docs/adr/0001-astro-over-single-file-html.md) |
| Host | Cloudflare Workers, static assets | [ADR-0002](docs/adr/0002-workers-over-pages.md) |
| Language | TypeScript, strict | Catches route and collection type errors at build |
| Content | Astro content collections, Zod schemas | [ADR-0005](docs/adr/0005-explicit-order-field.md) |
| Fonts | Self-hosted via the Astro Fonts API | [ADR-0007](docs/adr/0007-self-hosted-fonts.md) |
| Styling | CSS custom properties, no framework | [ADR-0006](docs/adr/0006-semantic-colour-layer.md) |
| Security | `_headers` at the edge, CSP enforced | [ADR-0008](docs/adr/0008-headers-file-over-worker.md) |

No adapter is installed. The site is fully static, so `@astrojs/cloudflare` would add a Worker script with nothing to do.

## Structure

```
src/
  assets/          images processed by the build pipeline
  content/
    work/          project write-ups, one markdown file each
    writing/       essays
  layouts/         Base.astro: head, nav, footer
  pages/           routes; [id].astro files generate one page per entry
  styles/
    tokens.css     design token values, no opinions
    base.css       how those values apply to elements
public/
  _headers         security headers, consumed by Cloudflare as config
docs/adr/          decision records
```

Anything in `public/` ships verbatim to the served directory. Images belong in `src/assets/`, where the build optimizes them.

## Decisions

Eleven records so far, in [`docs/adr/`](docs/adr/). The ones worth reading first:

- [ADR-0005](docs/adr/0005-explicit-order-field.md) — why project order is an explicit field rather than filesystem order
- [ADR-0006](docs/adr/0006-semantic-colour-layer.md) — why the semantic colour layer was deferred, and what forced it
- [ADR-0003](docs/adr/0003-public-repo-private-playbook.md) — what is published and what deliberately is not

## Verification

Checks run against every deployment. Each one is written so it is capable of failing.

```bash
curl -sI https://<host>/            | head -3    # 200
curl -sI https://<host>/README.md   | head -3    # 404: repo contents are not served
curl -sI http://<host>/             | head -3    # 301 to https
curl -sI https://<host>/ | grep -i content-security
```

The third exists because an earlier project served plain HTTP for weeks. Every check anyone ran specified `https://` and therefore could not observe the failure it was meant to catch.

Deployments take time to propagate. A check run immediately after `wrangler deploy` can return the previous configuration, so wait or verify twice.

## Roadmap

- [ ] Custom domain cutover, HSTS raised from its testing value, workers.dev route disabled
- [ ] GitHub Actions deploy with a scoped Cloudflare token
- [ ] Port the 2026 Japan retrospective: 15 JS systems, 16 images currently base64-inlined in a 5.5MB single file
- [ ] Japanese content, written natively rather than translated
- [ ] Mana Hawaiʻi project page once the engagement completes
- [ ] Resolve the open decisions: palette scope, `style-src 'unsafe-inline'`, license

## License

Undecided, and deliberately so. In the absence of a license, all rights are reserved. See [ADR-0011](docs/adr/0011-license-split.md) for the open question: the code here is worth sharing, the essays are not obviously worth relicensing.
