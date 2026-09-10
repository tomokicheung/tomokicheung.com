---
title: "Pacific Consulting Hawaiʻi"
order: 1
role: "Sole developer"
status: "Shipped"
liveUrl: "https://pacificconsultinghawaii.com/"
description: "Migrated a Honolulu events and logistics company off Shopify to a bilingual static site on Cloudflare, with no downtime and no change of domain."
---

Pacific Consulting Hawaiʻi is a Honolulu events and logistics company. They plan events, staff crews, run trucking, and handle inter-island freight. They are a service business, not a retailer.

Their website was running on Shopify, which meant they were paying a monthly e-commerce platform fee to operate a storefront for a company with no products to sell. What they needed instead was a site that explained their services clearly and gave a visitor an obvious way to reach a contact form. A number of their clients speak Japanese, so the site also has a toggle that switches the whole page between English and Japanese.

I was the sole developer on the project, working with Claude throughout. I rebuilt the site as a static build served through Cloudflare, keeping their existing domain so their web address never changed and there was no downtime during the cutover. Rather than maintain two parallel sites, I built a single codebase with an internationalization layer, so the English and Japanese content lives side by side and stays in sync. The contact form runs through Formspree, which removed the need for a backend entirely. I handled DNS, TLS, and the security headers on the production domain, and wrote a migration runbook and plain-language handoff documentation so the client knows where every account lives and who to call.

Source is a private repository. Ownership was transferred to the client at handover, and I remain a collaborator for ongoing maintenance. This project is written about here with the client's permission.
