# ADR-0011: Licensing for code and content

**Status:** Accepted
**Date:** 2026-09-09
**Resolved:** 2026-09-16

## Context

The repository is public. It contains build configuration, layouts, and styles, alongside personal essays and project write-ups.

With no license file, all rights are reserved by default.

## Options considered

1. **MIT across the whole repository.** Conventional and permissive, and it licenses the essays for republication, which is probably not intended.
2. **No license.** All rights reserved. Safe, and unhelpful to anyone who wants to borrow the Workers configuration or the fonts setup.
3. **Split:** a permissive license for code, a restrictive or reserved one for prose and images.

## Decision

The split, as described in option 3.

MIT covers the Astro configuration, components, styles, and build setup. Written content is reserved: essays, project write-ups, and the ADRs.

The boundary case flagged when this was opened was the ADRs, which are prose about code. They are excluded from the MIT grant. Someone adapting the Workers configuration gets more use out of the record explaining why it is shaped that way than out of the configuration alone, which is a real argument for licensing both together. The decision goes the other way because these are written in a particular voice and carry a record of specific errors and corrections, and republication under another name would misrepresent whose record it is. The file extension does not decide this; whether the artifact is writing does.

Client logos, screenshots, and copy fall outside the question entirely. Those rights were never held here and cannot be granted.

## Consequences

The code is reusable without asking. The prose is readable, quotable under the usual terms, and not republishable.

Reserving rights on the ADRs is the cost of this decision, and it is a real one. It is accepted because the alternative is worse.

Two conventions follow. New files land under the MIT grant only if they are code; prose goes in reserved regardless of location. And anything added that carries client material needs checking against the third clause before it is committed, since that is the one where the rights are not mine to reconsider later.
