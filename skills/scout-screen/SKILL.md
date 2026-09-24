---
name: scout-screen
description: >
  Screens one product territory against §0 fatal checks and returns a verdict.
  Cheap — about one search per check. Stops at the first hard reject. Run before any batch work.
user-invocable: false
worker_version: 2
---

# scout-screen

Screen **one** territory. Return `pass` or `reject` and which check killed it.

First read the consuming project's:
1. `.scout/context/checks.md` (or the project's domain-specific checks; fallback: `../scout/reference/checks.md`)
2. `.scout/context/capability.md` (the operational and economic constraints)
3. `../scout/reference/lessons.md` (historical failure modes)

## Before you start — save the prompt

Per `../scout/reference/provenance.md`, write `prompts/<territory>-r0-scout-screen.md` before
producing any finding.

## Stance

**A well-evidenced "no" is the expected result and a valuable one. Do not stretch to find a survivor.**
The system's entire value is in killing unviable territories in minutes before expensive research.

## Order of work

Run checks in order and **stop at the first hard reject.** Do not complete the remaining checks for
completeness — the point is cheapness.

```
0.1   incumbent & aftermarket supply        ← most kills: availability gap already closed by distributors
0.1b  existing niche / local alternatives   ← check if someone already offers it locally; read absence correctly
0.5   order floor vs incumbent shelf price  ← cheapest check: one price + one realistic order unit
0.6   capability & execution envelope       ← technical, size, material, or infrastructure limits
0.2   free / open-source / DIY saturation   ← buyer self-solves, or free tools collapse competitor margins to zero
0.3   fragmentation & standard maturity     ← §0.3a: mature standards mean incumbents already tool up
0.4   execution method reality & WTP        ← does willingness-to-pay attach to form/customisation or material/brand?
```

⚠️ 0.5 and 0.6 sit early deliberately. Both need almost no research and both kill
territories independently of supply.

## Mandatory statements

Your report must contain these explicitly, not by implication:

1. **Physical/Execution reality before throughput.** For physical products, state geometry and wall
   thickness before quoting throughput. For digital/services, state complexity and bottlenecks.
2. **Does the incumbent bundle?** If yes, bundling gains nothing and raises cost.
3. **§0.1b read correctly.** If nobody offers it locally, evaluate whether that is an opening or
   evidence that the price ceiling kills it (empty because unprofitable, not because overlooked).
4. **What the WTP attaches to** — shape/convenience/customisation, or a property/material that
   your declared capability cannot deliver.
5. **Any compliance / regulatory regime triggered** — e.g. FCM (Food Contact), GPSR, CE, toys (EN71), electrical.

## Evidence discipline

Mark every claim `VERIFIED` (page opened and read), `REPORTED` (search snippet), `ESTIMATED`
(your arithmetic) or `UNKNOWN`. **Never invent a price, market size or search volume.** Cite
real URLs. A verdict resting on snippets is weaker than one resting on read pages, and the
report must make that visible.

## Report

```
1. VERDICT — pass or reject, and which check killed it
2. Each check run, with evidence and URLs
3. Physical / execution reality statement per candidate, before any throughput figure
4. If pass: 3–5 candidates with unit cost, production/execution time, local price, contribution margin
5. Local retailers/competitors, prices, communities with URLs and size figures
6. What you could NOT verify (preserves uncertainty)
```

## Return

`pass` · `reject` — then hand to `scout-log`.
