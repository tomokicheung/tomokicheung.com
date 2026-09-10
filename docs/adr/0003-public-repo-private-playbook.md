# ADR-0003: Public site repository, private operations playbook

**Status:** Accepted
**Date:** 2026-09-09

## Context

The stated goal was a single public repository documenting everything learned across several client projects: structure, security, setup, and the reasoning behind each decision.

Much of that material is not publishable. Client repositories are private and client-owned. Runbooks contain DNS records, registrar history, and billing detail. One engagement has unresolved import questions attached to it. The account architecture, which address controls which service, is a map of the infrastructure.

## Options considered

1. **One public repository containing everything.** Matches the stated goal and publishes client infrastructure detail under a real name, permanently.
2. **Everything private.** Safe and defeats the purpose, since nothing demonstrates anything.
3. **Split: public site repository, private operations playbook.** Generalized lessons are published; client specifics and account topology are not.

## Decision

Split.

This repository is public and contains the site, its decision records, and generalized technical lessons. A separate private repository holds runbooks, client specifics, and operational detail.

Published ADRs are the generalized form of private lessons. Same reasoning, no client data, no infrastructure map.

A related decision followed: the account-to-address mapping is not written down in either repository. The value of a layered address scheme is that no single place holds the index; recording it anywhere concentrates the risk into whatever protects that file, and private repositories get cloned, backed up, and occasionally shared. A password manager is the correct home.

## Consequences

Positive: the public repository can be shown to anyone without a review pass. Client confidentiality is structural rather than dependent on remembering.

Negative: two places to maintain. Some of the most interesting material, the actual incident detail, stays private, so the public version is less vivid than the truth.

Negative: discipline is required at every commit. The check is in the pre-launch audit: nothing describing which email controls which account, no DNS records, no registrar or billing detail.
