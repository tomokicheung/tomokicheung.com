# ADR-0007: Self-hosted fonts via the Astro Fonts API

**Status:** Accepted
**Date:** 2026-09-09

## Context

The source build loaded Cormorant Garamond, Space Grotesk, and Noto Serif JP from Google Fonts, contributing two of five external origins and sending every visitor's request to Google.

## Options considered

1. **Keep the Google Fonts link.** Simple, cached across sites, and two external origins plus a third party seeing every visitor.
2. **Download the files manually and write `@font-face` by hand.** Self-hosted, and every fallback metric and preload hint is written and maintained by hand.
3. **The Astro Fonts API,** which downloads at build time and generates the CSS.

## Decision

The Fonts API, stable in Astro 7 as top-level `fonts` configuration.

Weights were taken from the original Google Fonts request rather than accepting defaults: 400 and 500, with italic for Cormorant only. Astro's default is weight 400 alone, which would have left thirteen `font-weight: 500` rules synthesized by the browser.

`fallbacks` is set per family rather than left at the `sans-serif` default, so the generated metrics-matched fallback for the display serif is Times New Roman rather than a sans-shaped placeholder.

`preload` is restricted to `style: "normal"`. The default preloads every file in a family, which put a 39K italic on the critical path for two rules below the fold.

Noto Serif JP is deferred until Japanese content exists.

## Consequences

Positive: two external origins removed. Visitors no longer contact Google. `font-src 'self'` became possible in the CSP.

Positive: three woff2 files totalling 98K cover ten declared faces, because both families are served as variable fonts.

Positive: Astro generates a metrics-matched fallback with `size-adjust`, `ascent-override`, and `descent-override` computed per family, eliminating layout shift on font swap. This is not something anyone writes by hand.

Negative: fonts are fetched at build time, so a first build requires network access.
