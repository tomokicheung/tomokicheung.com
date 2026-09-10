# ADR-0008: Security headers via _headers rather than a Worker script

**Status:** Accepted
**Date:** 2026-09-09

## Context

The site needs security headers, including a Content Security Policy. A previous project's CSP broke a client site a week after launch: Cloudflare injects its own analytics beacon, which was not in the source HTML, so a policy written by reading the source blocked it. The blocked script tripped the page's own failsafe, which concluded the animation library had failed and dropped the site into degraded mode.

## Options considered

1. **A Worker script with a fetch handler** that sets headers on the asset response. Full control, and it means adding a Worker to a site that otherwise has none, plus a compatibility date, a binding, and a script to maintain.
2. **A `_headers` file** in `public/`, consumed by Cloudflare as configuration. Whether Workers static assets honours it was genuinely uncertain and had to be tested rather than assumed.
3. **Meta tags.** Cannot set most headers, and CSP via meta is weaker than via header.

## Decision

`_headers`, after verifying it works.

The verification: all six headers apply at the edge, including on 404 responses, and `_headers` itself returns 404 rather than being served, confirming Cloudflare consumes it as configuration rather than shipping it as a public asset.

The policy shipped as `Content-Security-Policy-Report-Only` first, was checked across all eight pages in a browser console, and only then switched to enforcing. A wrong CSP fails silently, with no error page.

The Cloudflare beacon origins were allowlisted preemptively based on the earlier incident, then removed after confirming with `curl` that Web Analytics is not enabled on this Worker and no beacon is injected. An allowlist entry for an origin that is not used is attack surface accepted for nothing.

## Consequences

Positive: `script-src 'self'` with no exceptions, which the previous stack could never reach. That policy needed `'unsafe-inline'`, cdnjs, and jsdelivr, and still broke on a fourth script nobody accounted for. Here there is nothing external to account for.

Positive: no Worker script, no compatibility flags, no bundle. One file.

Open: `style-src` still permits `'unsafe-inline'` because Astro inlines scoped component styles. Far lower risk than the same allowance in `script-src`, and eliminable via `build: { inlineStylesheets: 'never' }` at the cost of an extra request. Undecided.

Note: HSTS is deliberately set to `max-age=300` rather than a year. HSTS is sticky and browser-enforced, so committing to 31536000 during testing would lock in any mistake with no way to reach affected visitors. Raised at cutover.
