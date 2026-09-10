# ADR-0004: No client infrastructure detail in public writing

**Status:** Accepted
**Date:** 2026-09-09

## Context

Permission to write publicly about two client engagements has been granted. Permission to describe a client's website is not permission to publish their infrastructure.

## Options considered

1. **Publish everything permitted, interpreted broadly.** Richer case studies, and exposes clients to detail they did not evaluate when granting permission.
2. **A written permission audit, one row per piece of evidence,** recording status, who granted permission, and specifically what may be published.

## Decision

A permission audit written before any page. Each project has an explicit publishable scope.

Shipped and permissioned work may name the live URL, the outcome, and generalized technical lessons. It may not include DNS records, billing history, or registrar detail. An in-progress engagement gets existence and scope only while open items remain, with no supplier, import, or logistics detail.

Applied in practice: a phrase describing one client's inventory location was cut from a project write-up before publishing, because inventory logistics falls outside the granted scope while an import question is open.

## Consequences

Positive: the boundary is written down rather than judged per sentence. A future contributor, including a future version of the author, inherits the rule rather than the instinct.

Positive: it catches overclaiming in the other direction. Two entries in the audit are template sources rather than client engagements, and presenting them as clients would collapse under one follow-up question.

Negative: the write-ups are less specific than they could be.
