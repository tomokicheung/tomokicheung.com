# ADR-0009: Dates formatted in UTC rather than local time

**Status:** Accepted
**Date:** 2026-09-09

## Context

Writing entries carry a `date` field parsed by `z.coerce.date()`. A date written as `2026-09-08` parses to UTC midnight.

The author is in Hawaii, UTC-10. Formatting that value with `toLocaleDateString()` in local time renders **September 7**.

## Options considered

1. **Format in local time.** Renders the wrong date on the author's machine and the right one on a UTC build server.
2. **Store dates as strings and never parse them.** Avoids the problem and gives up sorting, `datetime` attributes, and validation.
3. **Pin the formatting timezone to UTC.**

## Decision

`timeZone: "UTC"` passed explicitly to every date format call, and `toISOString()` for the machine-readable `datetime` attribute.

## Consequences

Positive: a date renders identically regardless of where the build runs.

Positive, and the reason it is worth an ADR: this bug disagrees with itself depending on environment. It would have shown September 7 locally and September 8 in CI, which is harder to diagnose than a bug that is simply wrong everywhere.

Negative: every new date format call must remember the argument. A shared formatting helper would enforce it; deferred until there is a third caller.
