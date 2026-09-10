# ADR-0011: Licensing for code and content

**Status:** Open
**Date:** 2026-09-09

## Context

The repository is public. It contains build configuration, layouts, and styles, alongside personal essays and project write-ups.

With no license file, all rights are reserved by default.

## Options considered

1. **MIT across the whole repository.** Conventional and permissive, and it licenses the essays for republication, which is probably not intended.
2. **No license.** All rights reserved. Safe, and unhelpful to anyone who wants to borrow the Workers configuration or the fonts setup.
3. **Split:** a permissive license for code, a restrictive or reserved one for prose and images.

## Decision

Undecided.

The split is most likely correct, but it requires deciding what counts as code and what counts as content, and where the boundary falls for things like ADRs, which are prose about code.

## Consequences

Until resolved, all rights are reserved and nothing here is licensed for reuse. That is the safe default rather than a chosen position, and stating it plainly is better than a README that quietly implies otherwise.
