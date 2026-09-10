# ADR-0002: Cloudflare Workers static assets over Pages or GitHub Pages

**Status:** Accepted
**Date:** 2026-09-09

## Context

The site needs hosting. Three prior sites are already on Cloudflare Workers, and the domain is registered through Cloudflare on a personal account kept separate from the business account.

## Options considered

1. **GitHub Pages.** Free, integrated with the repository, and already in use for a coursework portfolio. Jekyll-based, less control over headers, and a separate hosting story from every other site.
2. **Cloudflare Pages.** Purpose-built for static sites. Cloudflare has been steering new projects toward Workers, and the Pages creation flow is no longer offered on newer accounts.
3. **Cloudflare Workers with static assets.** Same platform as the existing sites, same tooling, full control over headers.

## Decision

Cloudflare Workers with static assets, configured with the minimal form:

```jsonc
{
  "name": "tomokicheung-com",
  "compatibility_date": "2026-09-09",
  "assets": { "directory": "./dist" }
}
```

No `main`, no `nodejs_compat`, no `@astrojs/cloudflare` adapter. The build reports `output: "static"`, so there is no Worker script to point at. Cloudflare's documentation shows a longer configuration for sites that render on demand; copying it would mean maintaining a Worker that exists for no reason.

`account_id` is deliberately absent from the committed configuration. It is not a credential, but it is an identifier, and keeping it out of a public repository costs nothing. It lives in `CLOUDFLARE_ACCOUNT_ID` in the environment instead.

## Consequences

Positive: one platform for every site. `_headers` is honoured at the edge, which made an enforced CSP straightforward. Deployment is a single command.

Negative: `workers.dev` is not a zone in the dashboard, so zone-level settings such as Always Use HTTPS cannot be applied to it. Plain HTTP returns 200 on the preview host and this is not fixable at that layer; it is resolved at the custom domain.

Negative: the `workers.dev` subdomain is derived from the account name and therefore publishes it. This conflicts with a deliberate practice of holding accounts under non-guessable addresses. Resolved at cutover with `"workers_dev": false`.
