# ADR-0010: Editorial index rather than a card grid

**Status:** Accepted
**Date:** 2026-09-09

## Context

The work and writing indexes list several entries each. The default pattern is a grid of cards with rounded corners, a border, and a soft shadow.

A separate open question exists about whether the material-derived palette carries site-wide or stays scoped to the travel piece it came from. That decision should not block building pages.

## Options considered

1. **Card grid.** Familiar and immediately legible, and the single most recognizable default in portfolio design. It signals template rather than judgment.
2. **An editorial index:** horizontal rules rather than boxes, large display serif titles, small uppercase sans metadata, generous whitespace.

## Decision

Editorial index.

The available typography argued for it. A high-contrast display serif paired with a geometric sans is a print vocabulary, and boxing that into cards fights the type rather than using it.

The layout is deliberately built so the palette is not doing the distinguishing work. Typography, spacing, and rules carry the page, so if the palette question resolves toward scoping washi and vermilion back to the travel piece, the result is a recolour rather than a rebuild.

## Consequences

Positive: does not read as a template. Uses the typography that already exists rather than working around it.

Positive: an undecided question is not load-bearing.

Negative: less immediately scannable than cards for a reader skimming quickly. Mitigated by metadata sitting on the same line as each title.

Negative: it depends on the type rendering correctly, so a font-loading failure degrades this design more than it would degrade a card grid. The metrics-matched fallbacks in ADR-0007 mitigate that.
