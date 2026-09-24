---
name: scout-licence
description: >
  Sweeps published digital assets, 3D models, or design files for commercial rights and IP clearance.
  Reports which, if any, permit commercial sale, and checks trademarks.
user-invocable: false
worker_version: 2
---

# scout-licence

Find design assets or models, **read every licence at source**, and report which permit commercial
use or sale of physical/digital parts.

## The only acceptable commercial licences

```
✅ Explicit Commercial Grant   explicit commercial-use license (e.g. Cults CU, vendor merchant grant)
✅ CC BY                        commercial permitted; attribution REQUIRED
✅ Permissive Open Source       MIT, BSD, Apache 2.0 (for code/hardware)
✅ Written Designer Grant       a designer's or creator's own documented commercial/merchant license

❌ Personal Use Only            Cults PU, personal grants
❌ Non-Commercial               CC BY-NC, CC BY-NC-SA, CC BY-NC-ND
❌ Copyleft / Share-Alike       if requiring open hardware/source release that conflicts with business model
```

**Modification does not cure a non-commercial licence.** Neither does remixing, repainting, or
"rebuilding from scratch."

**Paying for a file is not buying commercial rights.** A paid download often grants only a personal
license. Always verify the explicit commercial terms.

## Method

1. **Find candidates across repositories.** For 3D printing: Cults3D, Printables, MakerWorld,
   Thingiverse, MyMiniFactory, Thangs, LayerUp. For software/hardware: GitHub, HuggingFace, open hardware hubs.
2. **Sweep at least five sources per candidate.** Checking only the top result is not a sweep.
   (Historically, only ~1 in 8 models carries a usable commercial license).
3. **Open each at source.** Avoid snippet inferences; inspect the actual license terms on the provider page.
4. **Record metadata:** Asset URL, author/designer, license name, license URL, verification date, price/fee.

## ⚠️ Derivative chains

If an asset says it was *"based on"* or *"remixed from"* another, **read the parent's licence too.**
"Rebuilt from scratch" is the author's characterisation, not legal clearance. If the parent is NC
or Share-Alike, those terms follow into derivatives.

## Trademark and Nominative Fair Use

```
✅ Nominative reference: "compatible with <brand> <model>", "fits <game/system>"
❌ Infringing name: "<Brand> clip", using OEM logos, box art, official graphics, maker typography
❌ Modelling an OEM logo or mark into geometry/product, even if original carried one
```

## When nothing is usable

1. **Contact creators directly.** Many creators welcome commercial licensing for an upfront fee or royalty.
2. **Merchant subscriptions / system licenses.** One merchant license covering a modular system beats hunting individual files.
3. **Commission or create in-house originals.** Viable for simple geometries or components.

## Return

A table of every asset read with its license status and verdict (`pass` / `reject`), plus a recommendation.
