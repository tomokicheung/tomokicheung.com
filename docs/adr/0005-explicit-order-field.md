# ADR-0005: Explicit order field rather than filesystem sort

**Status:** Accepted
**Date:** 2026-09-09

## Context

Three project write-ups live as markdown files in a content collection. The index page and the home page both list them.

Astro's documentation states that the sort order returned by `getCollection()` is non-deterministic and platform-dependent.

## Options considered

1. **Rely on the returned order.** Correct locally, until a build runs on a different filesystem.
2. **Sort by title or filename.** Deterministic, and alphabetical order has nothing to do with which project should lead.
3. **Sort by date.** Correct for writing, which has a natural chronology. A portfolio has no such key; the first client project is not necessarily the newest.
4. **An explicit integer `order` field in the schema.**

## Decision

An explicit `order` field, required by the Zod schema, with every query sorting on it.

Writing is handled differently and sorts by date descending, because writing does have a natural key.

## Consequences

Positive: order is deliberate and stated in the data. Adding a project means choosing where it goes rather than discovering where it landed.

Positive, and the reason this matters: without it, the site would look correct on the development machine and reorder itself on the CI runner, with nothing erroring. That is the worst class of bug, and the same shape as a branch rename that silently prevents a workflow from firing.

Negative: inserting a project between two others means renumbering. Acceptable at this scale.
