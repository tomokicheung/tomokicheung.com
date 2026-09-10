# ADR-0006: Semantic colour layer, added under constraint rather than in advance

**Status:** Accepted
**Date:** 2026-09-09

## Context

The design tokens were lifted verbatim from an earlier build: 24 CSS custom properties named for materials. `--washi` for paper, `--vermilion` for a torii, `--sumi`-adjacent `--ink`, `--river-stone`, `--lantern`.

A more mature token system has two layers: primitives holding values, and semantic roles pointing at them. The question was when to introduce the second layer.

## Options considered

1. **Build the semantic layer immediately.** Standard practice, and with zero components there was no second consumer to justify the indirection. Role names invented before the roles exist are guesses.
2. **Never.** Components reference primitives directly and every component has to know which palette it is in.
3. **Defer until a real requirement appears** that the primitive layer cannot express.

## Decision

Deferred, twice, on the explicit grounds that no second consumer existed.

It was then added when a measured requirement arrived. Metadata text had been set in `--river-stone` on `--washi`, chosen because it looked like a muted text colour. Measured, it is **1.58:1**. WCAG AA requires 4.5:1 for body text and 3:1 for large text, so it failed both. `--vermilion` measures **4.07:1**, passing large text only, and was being used on an 11px footer link.

The fix was not to retune the primitives. At 1.11:1 and 1.58:1, `--washi-deep` and `--river-stone` are rule colours being used as text colours. Three semantic tokens were added: `--text-muted` (#6E655B, 4.75:1), `--rule`, and `--rule-strong`.

## Consequences

Positive: every colour reference in a template now states its purpose rather than its appearance. "Muted text" and "hairline rule" are separately nameable and can no longer be confused.

Positive: the abstraction was designed by a constraint rather than by taste. The role names came from a real distinction the primitive layer could not make.

Negative: two layers to understand. Mitigated by the primitives being unchanged and the semantic layer being three lines.

Note: the deferral was correct and the failure was independent. Choosing a rule colour for text without measuring it would have happened regardless of how the tokens were structured.
