---
title: "A defect I wrote down and didn't fix"
date: 2026-09-11
description: "A second model identified a problem with my configuration. I recorded the correction, but two days later the unchanged setting caused a deployment to the wrong account."
---

Earlier this week, I set an environment variable to solve a problem. An environment variable is a named value that programs can inherit from the shell that starts them. I was deploying a site to Cloudflare, where I hold more than one account, and I wanted to be certain the deployment went to the right one. Adding the account identifier to my shell profile seemed like a convenient way to avoid specifying it each time.

```bash
export CLOUDFLARE_ACCOUNT_ID="<personal-account-id>"
```

A few hours later, I asked a second model to review my build documentation. It pointed out that other projects deployed from shells with that setting would inherit the same account identifier. It recommended setting the account per project or per command instead. I added the feedback to a list of corrections, but I did not change the configuration.

Two days later, I deployed a different site from the same machine. The output read:

```text
✨ Success! Uploaded 20 files (1.14 sec)
Uploaded ourcradle-site (4.17 sec)

✘ [ERROR] Could not find zone for `ourcradle.com`.
```

A zone is Cloudflare's term for a domain managed within an account. The files uploaded and the Worker deployed, but the domain configuration failed because the selected account did not hold `ourcradle.com`. I had created a duplicate deployment in the wrong account without the intended domain attached.

Before doing anything else, I checked the live site:

```bash
curl -sI https://ourcradle.com/ | head -3
# HTTP/2 200

curl -s https://ourcradle.com/about | grep -c 'AI tools'
# 0
```

The first request showed that the homepage was responding successfully. The second found no lines containing a phrase from my updated About text. Those checks were consistent with the live site still serving the previous version, though they were not a complete check of the site. I deleted the stray deployment and investigated the cause.

The project already had the correct account stored in a local cache file, and had since August. With identifying details replaced, it looked like this:

```bash
cat .wrangler/cache/wrangler-account.json
```

```json
{
  "account": {
    "id": "<correct-project-account-id>",
    "name": "<account-name>"
  }
}
```

The environment variable took priority over that cache. The global setting had overridden an account selection that was already correct. The configuration I added to prevent the mistake was the thing that caused it.

I had been given the correct diagnosis two days earlier and recorded it accurately. What I had not done was apply the correction and verify it. Writing a problem down creates a record. It doesn't create a fix.

What I keep returning to is the order of the output: twenty files, a success message, then an error. If I had stopped reading after the upload, I could have mistaken it for a completed deployment. It reminded me of three other problems from the same week. A site had served unencrypted HTTP for weeks because every check I ran specified `https://` and could not reveal the missing redirect. I caught a branch named `master` on a project whose deployment workflow watched `main`, which would have prevented the workflow from running on pushes to that branch. A `git push` reported "everything up-to-date" because I had never committed the changes before pushing.

Another example involved the page itself. While building the site, I picked a grey for small text by eye. It looked fine to me. Measured against its background, it had a contrast ratio of 1.58:1, below the accessibility requirement of 4.5:1 for normal text. It had already shipped to five pages.

These problems were easy to miss when I checked only part of the result. Uploading files did not mean the domain was configured correctly. A successful push did not mean I had committed my changes. Loading a page over HTTPS told me nothing about how it handled HTTP.

I need to ask whether the intended result happened and choose a check that can reveal when it did not. Sometimes that is a request to the live site. Other times it means checking the deployment account, the workflow history, or a measured contrast ratio.

The same applies to my documentation. Recording a correction is useful, but it needs to stay open until I have applied it and verified the result.

*I drafted this with Claude and revised it with editing assistance from ChatGPT. The incident and decisions described are my own.*
