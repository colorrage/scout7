# The territory checks — `RULES.md` §0

Six checks plus addenda. **Run in order, stop at the first hard reject.** Each costs about one
search. Together they have rejected twenty-two of twenty-four territories, most in minutes.

---

## 0.1 Aftermarket supply

> Does a distributor already stock this class at component granularity, with national delivery?

```
YES → the availability gap is closed. REJECT the territory, unless the
      differentiator is price, speed, or a system the distributor does not cover.
NO  → proceed.
```

Search `"<category> piese componente distribuitor"` and the category's specialist retailers.
**Most efficient filter in the set.**

⚠️ The exception must be *evidenced*, not assumed. In the sim-racing screen the "uncovered
system" exception mapped exactly onto parts already hard-excluded — the exception was unusable.

## 0.1b Is someone already 3D-printing and selling it?

**Run this early. It killed five consecutive territories.**

Check the local marketplace (review counts are the best sales proxy), OLX, Etsy, and local
3D-print shops. An incumbent already running FDM into your market with a deeper catalogue is a
reject.

⚠️ **And read an *absence* correctly.** Twice now, nobody printed it locally and that was
evidence *against*: Etsy proved the product against £/$ incumbents while the local shelf proved
the price ceiling kills it. **Empty because unprofitable, not because overlooked.**

## 0.2 Free-model saturation

Two questions, not one.

```
(a) Does the BUYER own a printer?
      yes → consumer price ceiling collapsed. REJECT consumer channel.
      no  → ceiling holds, but NO technical moat.

(b) Does a free GENERATOR collapse every COMPETITOR's design cost to zero?
      yes → it sets the market price floor. This is why bespoke cookie cutters
            sell for 11.99 lei. The saturation destroys the margin, not the demand.
```

Search in **German and English as well as the local language** — the German maker community has
already published most European hardware.

## 0.3 Fragmentation

```
Standard exists  → one design serves many customers. Proceed.
Per-manufacturer → one design serves one customer. REJECT unless one system
                   demonstrably dominates the local installed base.
```

## 0.3a Read fragmentation in both directions

**Fired correctly in five consecutive screens.**

> A strongly *passing* §0.3 in a **mature** category predicts full incumbent coverage, not
> opportunity. The standardisation that would have been your moat is what made it worth an
> incumbent's while to tool up and stock every size.

```
Standard + young or niche category → genuine opportunity
Standard + mature category         → re-check 0.1 HARDER, expect full coverage
```

Astronomy passed 0.3 outright and was comprehensively served. Dacia's YouClip was a real
cross-model standard — and OEM, four printers and AliExpress all got there first.

## 0.4 Manufacturing-method reality

```
Already injection moulded at volume and distributed → no price gap. REJECT.
```

FDM wins on four things only, and one must be true:

1. the part is not manufactured at all
2. manufactured but not distributed in this market
3. volumes too low to justify tooling
4. needs per-customer customisation

**Cheapness is not one of them.**

### And check what the willingness to pay attaches to

| Category | WTP attaches to | FDM can deliver? |
|---|---|---|
| Record clamps | **mass** — 190–1030 g of metal | ❌ PLA is 1.24 g/cm³ |
| Isolation feet | damping loss tangent | ❌ and PLA creeps |
| Alignment protractors | sub-0.1 mm precision | ❌ ±0.1–0.2 mm |
| Bahtinov masks | flat, stiff | ❌ laser-cut acrylic wins on cost *and* quality |
| Rodent hides | **breathable wood** — plastic condenses and moulds | ❌ |
| Puzzle trays | **tight nesting** | ❌ 1.6 mm walls cannot nest |

> A high-WTP category is only an opportunity if the willingness to pay attaches to **shape**.
> Where it attaches to a **material property**, the printed part is a degraded substitute, not
> a cheaper one.

## 0.5 Order floor versus incumbent shelf price

**Cheapest check in the set. Run it early — it needs one incumbent price and one size estimate.**

```
For each variant compute BOTH:
  A. contribution per printer-hour at a price undercutting the incumbent
  B. whether a REALISTIC order clears the minimum order value

No variant satisfies A and B together → REJECT.
```

The classic trap, seen three times: **the variants that clear the printer-hour benchmark are
the ones whose incumbent price sits below the order floor.** An 80 mm Bahtinov mask returns
68 lei/h — against an incumbent selling at 80 lei. A 45 rpm adapter returns 89 lei/h — and a
household needs one.

### Addendum — marketplace logistics can defeat the order floor entirely

Marketplaces with subsidised shipping (eMAG Genius: free from 30 lei) give incumbents **no
order floor at all**. Matching them means selling *on* the marketplace and paying commission
(~11.9 % effective). Recompute *with* commission before proceeding.

### Addendum — bundling only helps if the incumbent does not bundle

Failed twice. Clementoni sells sorting trays in sets of six; eMAG sells guinea-pig accessory
kits. Where the incumbent bundles, bundling raises your cost without raising your ceiling.

### Addendum — throughput is not constant

| Geometry | Throughput |
|---|---:|
| Chunky volumetric — boxes, organisers, brackets | ~49.5 g/h |
| **Hollow thin-walled shells** — hides, enclosures | ~20 g/h |
| **Thin-edged parts** — cutters, blades | ~14 g/h |
| Flat plates | poor, and laser cutting beats FDM outright |

⚠️ **State wall thickness and whether the part is genuinely volumetric BEFORE quoting a
throughput figure.** A sorting tray "sounds chunky" and is a large flat base with thin walls —
FDM's worst case. Assuming otherwise produced the worst result in the project.

## 0.6 Build volume

```
Bambu A1       256 × 256 × 256 mm
Bambu A1 Mini  180 × 180 × 180 mm

Larger than the bed → split and jointed: weaker, slower, needs assembly, and
                      competes with a one-piece incumbent. REJECT unless the
                      joint is a feature.
```

Decisive three times: a 232 mm Bahtinov mask, a 302 mm LP, a Ø30 cm hamster wheel.

## Equipment limits are part of the filter

The A1 is **open-frame**. Bambu's own docs advise against ASA/ABS on it and note they *"release
harmful and irritating gases."*

```
PLA   Tg 55–65 °C     unusable above ~50 °C ambient; brittle when chewed
PETG  HDT ~71.8 °C    shade only; dishwasher-rated to 60 °C
ASA   Tg ~105 °C      required for sun-exposed parts — NOT printable on the A1
```

Any territory needing sustained heat resistance above ~70 °C, or ASA-grade toughness, is out on
**equipment**, not merely on material choice.

## Hard exclusions

load-bearing or structural · anything a person's or animal's weight rests on · security-critical ·
food or drinking-water contact · mains voltage even indirectly · sustained heat above ~60 °C ·
medical or mobility aids · anything whose failure could cause serious injury · visible must-match
vehicle body panels

**Compliance regimes that have killed a territory on their own:**

- **EU FCM (1935/2004, 10/2011)** — a cookie cutter is in scope. Intended use is objective; a
  "not food safe" disclaimer does not remove it. The printer operator is the **converter**,
  owing a Declaration of Compliance, migration testing, GMP and traceability. Certified filament
  does not discharge it.
- **EN71 / Toy Safety Directive 2009/48/EC** — anything sold onto a children's-toy shelf.
- **GPSR (2023/988)** — printing and selling makes you the manufacturer: technical file,
  batch marking on the product, address on product or packaging, warnings in the local language,
  and Art. 19 obligations on the online offer itself.
