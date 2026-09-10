---
title: "The bug I could not have found alone"
date: 2026-09-08
description: "A Content Security Policy I wrote broke a client's site a week after launch, and what that taught me about the gap between building and understanding."
---

## Building faster than I was learning

Over the past several months I have built and launched a handful of websites, including one for a paying client. I worked with large language models throughout the process. They helped me turn ideas into working sites, but as I kept building I started noticing a gap between what I could produce and what I actually understood.

I knew what I wanted each site to do, how it should feel to use, and what the business needed. But I could not always explain the code behind it. I could describe what a page was supposed to do without fully understanding how it did it. That bothered me, especially with a client relying on something I had built.

## What I was paying attention to

I was not ignoring security. I knew public repositories were accessible to anyone, and that anything pushed to one could remain accessible even after deletion. I asked for security reviews and pushed back when something looked wrong. I paid attention to API keys, credentials, and anything that could give someone access to my account or a client's. Those were risks I knew to check for.

What concerned me was everything I did not know enough to recognize. I could ask whether I had exposed a secret key. It was harder to ask useful questions about parts of the system I did not understand. Having a working website did not tell me whether I had accounted for the ways it could fail.

## When the gallery broke

I check the websites I have built every morning. It usually takes a couple of minutes. About a week after launching my client's site I found the services gallery broken. Cards that were supposed to move horizontally as you scrolled were stacked vertically, and the images were not showing. I had not deployed anything since the day before, and on my own machine the page still looked normal.

My first thought was that something had gone wrong with the CSS. The layout was broken, so that is where I focused. I asked Claude to help diagnose it, and we worked through possibilities until we opened the browser console and found an error saying a Content Security Policy was blocking a script.

I had added that policy a few days earlier. A CSP sets rules for what the browser is allowed to load or execute. I had put it together by checking the resources referenced in my HTML, but I had not fully accounted for what happened when the site was served through Cloudflare. Cloudflare's features can affect what reaches the browser, including adding scripts that are not in the files I edit. That was a part of the setup I had not understood.

I made a change that morning and the gallery worked again. Then I told the client what had happened.

I still need to be precise about the diagnosis. Finding a blocked script and getting the gallery working again did not mean I had fully traced how the two were connected. I had restored the page, but I still had more to understand.

## Why I am studying computer science

That experience gave me a specific example of the gap I had been noticing. I had been looking at the files in my editor without fully understanding everything involved in delivering the site to a visitor. The browser, hosting setup, scripts, and security settings were all part of the system I was responsible for.

That is part of why I am pursuing a computer science degree. I want a stronger understanding of how these pieces work together so I can make better decisions and troubleshoot with more confidence. The coursework will not do that for me on its own. I will need to keep applying what I learn to the things I build.

Working with LLMs has helped me build more than I could have managed on my own at this stage, and I am going to keep using them. But I would like to get better at reading their output, questioning it, and understanding what I am putting into production. I do not expect to know everything. I do want my understanding to keep up with the responsibility I am taking on.
