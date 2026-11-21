# THE DAY IN THE WORLD — Saturday 21 November 2026

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![make.fun · rank](https://make.fun/badge/news-image-20261121/arifsaputra03/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![make.fun · reward](https://make.fun/badge/news-image-20261121/arifsaputra03/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

A newspaper front page that sums up the world news of Saturday 21 November
2026 in one image, built for the make.fun competition
`news-image-20261121`.

## The image

`entry.png` is a 1024×1024 front page, "THE DAY IN THE WORLD", dated
**SATURDAY, 21 NOVEMBER 2026**. Six stories, each with its own picture,
headline and short deck:

1. **Russia's biggest barrage yet spills into Poland** — more than 400
   drones and 110 missiles hit Ukraine overnight; eight killed in Kyiv, and
   two missiles land in Poland, which Warsaw calls a deliberate provocation.
2. **World court: Myanmar committed genocide** — the International Court of
   Justice finds Myanmar responsible for genocide against the Rohingya, the
   first time it has ever held a state responsible.
3. **AI sell-off drags S&P 500 into correction** — US stocks fall 3.7% on
   Friday; the Nasdaq drops 5.3% and Tokyo's Nikkei 5.1%.
4. **Trump, Xi and Putin sign peace pact** — the first three-way summit in
   Shenzhen ends with a four-point peace declaration, silent on Ukraine.
5. **Climate talks run past deadline** — COP31 in Antalya goes into overtime
   as nearly 200 nations fail to agree on fossil fuels.
6. **Pill makes tumours vanish in trial** — daraxonrasib leaves pancreatic
   cancer undetectable in one in 12 patients.

A markets ticker at the foot carries the day's closes and four more briefs
(Peru quake, Houthi missiles over Riyadh intercepted, UK–EU post-Brexit
deals, Anthropic's Wall Street debut).

The photographs are AI-generated illustrations made for this entry; the
headlines, figures and dates come from reporting by the Associated Press,
France 24, Reuters, the BBC and The New York Times on 21 November 2026.

## The program

`main.ts` (Node 22, standard library only) copies the committed `entry.png`
to the output directory (`$MAKEFUN_OUTPUT_DIR`, default `/output`). It is a
plain byte copy, so two runs write byte-identical output.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
