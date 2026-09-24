---
name: scout-log
description: >
  Writes a screen or batch result into the permanent record — the screen file, the territory
  checks log, and any rule learned.
user-invocable: false
worker_version: 1
---

# scout-log

Every screen and batch ends here. **An unrecorded rejection gets re-screened.**

## 1. The screen file

`.scout/batches/<batch>/<territory>.md`, using `../scout/templates/screen-report.md`.

Same structure every time: verdict and which check killed it · each check with evidence and
URLs · geometry and economics tables · exclusions · **what could not be verified**.

That last section is not optional. It is what tells a future reader how much weight the verdict
carries.

## 2. The checks log

One row appended to `.scout/context/territory-checks-log.md`:

```
| date | territory | 0.1 | 0.2 | 0.3 | 0.4 | verdict + the one-line reason |
```

Keep the reason concrete — an incumbent price, a SKU count, a lei/printer-hour figure. *"Well
served"* is not a reason; *"Clementoni 6-tray set at 54.45 lei"* is.

## 3. Any rule learned

If the screen taught something transferable, propose it as a numbered check or an addendum in
`RULES.md` §0 and record a decision entry. Six checks exist because six screens produced them:

| Rule | Came from |
|---|---|
| §0.1 aftermarket supply | R1 — three lines died of it before anyone looked |
| §0.2 amended for buyer/competitor | adapters — Etsy thrives beside free generators |
| §0.3a read both ways | astronomy — a strong pass predicted full coverage |
| §0.5 order floor | astronomy — killed it independently of supply |
| §0.6 build volume | a 232 mm mask, a 302 mm LP |
| throughput by geometry | cookie cutters at 14 g/h, not 49.5 |

## 4. Corrections

If a previous finding was wrong, **amend in place with a dated note and keep the original
text.** Never delete it. The error is usually more instructive than the conclusion — and the
no-silent-change rule exists for exactly this.

## Return

Confirmation of what was written, and any rule proposed for approval.
