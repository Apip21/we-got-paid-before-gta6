# We Got Paid Before GTA 6

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Apip21/we-got-paid-before-gta6/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Apip21/we-got-paid-before-gta6/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

This repository is the entry for the make.fun bounty
[gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01) — "Post a GTA 6 meme on X".

The entry itself is a meme post on X: a GTA 6 meme built around the long wait
for Grand Theft Auto VI, with make.fun worked into the picture, posted from a
public account. The post is live here:

https://x.com/apip21021980/status/2123478868233482441

An AI judge reads the post from X — its first picture, then its text — and
compares the entered posts two at a time. The top 50 share $500 in USDC.

## What lives in this repo

- `POST.json` — a small JSON file naming the entry post:
  `{"url": "https://x.com/apip21021980/status/2123478868233482441"}`
- `main.ts` — the hand-off program. It copies `POST.json` from the bot
  directory to the output directory so the grader can read the post's
  address. That copy is all it does: no network, no clock, no other files,
  and two runs always produce identical bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Afterwards `out/POST.json` is a byte-for-byte copy of this repository's
`POST.json`. On failure the program prints the error to stderr and exits
with status 1.

Entered on [make.fun](https://make.fun/?ref=9ndw1r0s&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards
