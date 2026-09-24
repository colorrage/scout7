---
name: scout-cost
description: >
  Costs a candidate: direct inputs, execution time, contribution margin, and contribution per
  bottleneck unit against the order floor and incumbent prices.
user-invocable: false
worker_version: 2
---

# scout-cost

Produce the §0.5 unit economics table. **State physical/execution complexity before throughput.**

Read `.scout/context/capability.md` first for the project's specific cost baselines (hourly bottleneck
rates, material/input prices, failure rates, shipping costs, and minimum order floor).

## Step 1 — physical/execution complexity, first, always

```
For physical parts: Is the part genuinely volumetric, or a flat base with thin walls? What is the wall thickness?
For digital/services: What is the processing complexity, API cost, or human intervention per unit?
```

| Geometry / Work Type | Throughput Baseline |
|---|---:|
| Chunky volumetric — boxes, brackets, organisers | High throughput (~49.5 g/h for 3D FDM) |
| Hollow thin-walled shells | Medium throughput (~20 g/h) |
| Thin-edged parts — cutters, fine detail | Low throughput (~14 g/h) |
| Flat sheets / simple 2D shapes | Poor for FDM; laser/die-cutting beats FDM outright |

⚠️ Never quote throughput or capacity before stating geometry or task complexity. Assuming high
throughput on thin-walled or intricate parts produces disastrously distorted economics.

## Step 2 — the cost model

Compute per unit using values from `.scout/context/capability.md`:

```
Direct Inputs / Materials    unit × price per unit
Bottleneck Resource / Power  time × power/compute rate
Failure / Scrap Allowance    e.g. 3–5% of production cost
Packaging & Handling         packaging unit cost
Courier / Delivery           shipping cost to threshold weight
Payment & Platform Fees      payment fee (~2%) + channel commissions
                             ─────────────────────────
Variable Cost                = sum of above
Contribution Margin          = selling price − variable cost
```

## Step 3 — the two tests, both must pass

```
A. Contribution per bottleneck unit (e.g. machine-hour, labor-hour), at a price
   that remains competitive or undercuts the incumbent.
   (e.g. 3D printing benchmark: 36 lei/h).

B. Does a REALISTIC order clear the minimum order value?
   "Realistic" means what one household/customer actually buys in a normal purchase —
   not the inflated basket quantity needed artificially to hit the floor.
```

**No variant satisfies both → reject.** If a product yields a high hourly rate but a household
only ever buys a single 15 lei piece, it fails the order floor test.

## Step 4 — the three addenda

**Marketplace logistics.** If incumbents sell below the order floor on a marketplace with
subsidised shipping (e.g. eMAG Genius / Amazon Prime: free delivery from low threshold), they have
*no floor*. Matching them means selling on that marketplace and paying commission (~11.9%–15% effective).
Recompute *with* marketplace commission.

**Bundling.** Only helps if the incumbent does not already bundle. Check before relying on it.

**Capacity versus demand.** If demand sits well below capacity, a lower bottleneck contribution may
be acceptable — the asset would otherwise be idle. State this **explicitly** as a documented
exception, and note that it ceases to be acceptable the moment volume grows.

## Return

The unit economics table, both tests answered, and every estimated input flagged `ESTIMATED`.
