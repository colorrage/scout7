---
id: <C|A|B><N>
batch: R<N>
title: <name>
status: draft          # draft | candidate | approved | hold | rejected
created: <YYYY-MM-DD>
rules_version: <x.y.z>

# --- exclusions, all must be false ---
load_bearing: null
security_relevant: null
food_water_contact: null
mains_voltage: null
sustained_heat_over_60c: null

# --- incumbent ---
incumbent: null
incumbent_price: null
incumbent_lead_time: null
incumbent_bundles: null        # if true, bundling gains nothing

# --- model and licence ---
stl_source: null
stl_licence: UNVERIFIED        # CULTS CU | CC BY | written grant | PU | NC
stl_commercial_ok: null
stl_parent_licence: null       # derivative chains — read the parent too
licence_checked_at: null

# --- geometry, BEFORE throughput ---
geometry: null                 # volumetric | thin-walled shell | thin-edged | flat plate
wall_thickness_mm: null
est_filament_g: null
est_print_hours: null
fits_bed: null

# --- economics ---
price: null
variable_cost: null
contribution: null
contribution_per_printer_hour: null
clears_order_floor: null

derived_confidence: null       # min() of input confidences — never authored

decision: null
blocking_unknown: null
resolution_action: null
review_by: null
on_expiry: REJECTED_STALE

generation_log: []
---

# <id> — <title>

## Problem
## Evidence
| # | Type | Source | Date | Directness | Supports/Refutes | Cluster | Confidence | Observation |
|---|---|---|---|---|---|---|---|---|

## Disconfirming signal — sought and found
_"None sought" is not acceptable._

## Competitors
## Economics
## Technical
## Risk
## Unknowns
## Decision
_Which rule fired, and why._
