# ADR-0001: Astro over a single-file HTML build

**Status:** Accepted
**Date:** 2026-09-09

## Context

Three sites had already been shipped as single-file HTML: one `.html` containing markup, styles, and scripts, deployed directly. The approach works and is fast to start. It also means a navigation change is edited once per page, and there is no build step, so no asset pipeline, no component reuse, and no way to separate content from presentation.

The source material for this site is a 5,529,152 byte single file. Of that, 73,408 bytes is actual code. The rest is sixteen base64-encoded images.

## Options considered

1. **Continue with single-file HTML.** Familiar, no new concepts, zero build risk. Does not solve any of the problems above.
2. **Separate HTML, CSS, and JS files, no framework.** A real middle path, and one initially omitted from the option set. Improves organization but still requires editing shared markup in every page by hand.
3. **Vite with vanilla JS.** Provides a build step and a dev server, but leaves layout composition and content structure entirely undecided.
4. **A SPA framework (React, Vue).** Ships a client-side runtime to render text that never changes. Wrong tool for a content site.
5. **Astro.** Component composition and layouts, content collections with schema validation, an asset pipeline, and zero client-side JavaScript by default.

## Decision

Astro, with static output.

The deciding factor was not any single feature but that the problems on the list are the problems Astro is designed for. A second consideration: this is a personal site, so a broken build costs no client anything, making it the correct place to take on an unfamiliar build pipeline.

The decision was independently reviewed by a second model working without access to the project history, which reached the same conclusion from different reasoning. That is roughly the most validation a decision of this kind can get, and reopening it would cost days.

## Consequences

Positive: components and layouts eliminate duplicated markup. Content collections give schema-validated, typed content. The image pipeline converts and hashes automatically; a 138kB PNG became a 42kB WebP with no manual step.

Positive, and unanticipated: the exposure model improves. On Workers static assets every repository file is public by default, which is why an `.assetsignore` was needed previously. Astro serves only `dist/`, so the README, `docs/`, and configuration cannot be reached. The danger moves from the repository root to `public/`, which ships verbatim.

Negative: a build step is a thing that can fail. Dependencies now exist and must be maintained. Astro conventions must be learned, and the version installed (7.3.2) is newer than the assistant's training data, so version-specific guidance has to be checked against documentation rather than recalled.
