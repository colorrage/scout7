---
name: scout-discover
description: >
  Finds real customer problems inside an approved territory and turns them into candidate
  worksheets. Problems first, never products.
user-invocable: false
worker_version: 1
---

# scout-discover

Only runs on a territory that **passed screening**. Save the prompt first, per
`../scout/reference/provenance.md`.

## The research unit

```
PROBLEM → CANDIDATE → EVIDENCE → DECISION
```

Not `PRODUCT IDEA → OPINION → PRINT IT`. Start from what broke or what is missing, never from
what would be fun to print.

## Sources, in rough order of value

| Source | Looking for |
|---|---|
| Local forums, Facebook groups, Reddit | "can't find it", repair threads, complaints |
| Local marketplaces | what is actually sold, price, delivery, by whom |
| Trade and repair firms | which parts they replace most, what they call unobtainable |
| Manufacturer catalogues | part naming, system families, sold separately or not |
| Search autocomplete, local language | real query language |
| Model repositories | free models, licences, download counts |
| Repair video comments | failure modes, frequency |

⚠️ **Search in the local language and in English.** Trade terminology is often mixed — Romanian
window installers use German and Turkish brand terms alongside Romanian.

⚠️ **Search tooling reaches commercial SEO pages far more easily than community content.** If
every result is a shop, you have found the market, not the customer. Say so rather than
inferring demand from what is on sale — that is the confirmation-bias trap.

## What every candidate worksheet must carry

A candidate missing any of these is not cleared:

- **Problem** — what broke, why it matters, what the customer tried, in their words
- **Evidence** — each with source, URL, date, directness, supports/refutes, **source cluster**
  (three syndicated listings from one supplier are one signal), confidence
- **A deliberately sought disconfirming signal** — searched for, not stumbled on. *"None
  sought" is not acceptable.* This rule has caught four separate errors.
- **Competitors** — price, delivery, lead time, compatibility clarity, weaknesses
- **Incumbent check** — sold separately? price? lead time? obligation status?
- **Repository check** — free model? licence? downloads? price-ceiling effect?
- **Economics** — VAT-exclusive, using measured capability figures
- **Technical** — CAD difficulty, printability, material, tolerance sensitivity
- **Risk** — safety, IP, trademark, design rights, regulatory
- **Unknowns** — listed explicitly, never silently filled

## Stop conditions

Per candidate: enough evidence to reject → `reject`; enough to clear → `pass`; one critical
unknown → structured `hold` with a named blocker and a review date.

For the batch: it closes when its time budget is spent, whatever count was reached. **If the
territory yields six good candidates instead of twelve, that is a finding — report it rather
than padding.**

## Return

Candidate worksheets, plus a discovery findings document.
