# Provenance

**This was skipped for twenty-four screens. Do not skip it again.**

Every research call saves its prompt **before** writing any finding.

```
.scout/batches/<batch>/prompts/<unit>-r<revision>-<worker>.md
```

Create `prompts/` lazily with `mkdir -p`. Nothing pre-creates it.

## What the prompt file holds

```markdown
---
unit: C7                    # or the territory name for a screen
revision: 0
worker: scout-evidence
model: <resolved model id, not the alias>
run_at: 2026-08-19T14:22:00
prompt_hash: sha256:<hex>
---

<the exact prompt text sent>
```

## What the finding records back

Append to the artifact's `generation_log`:

```yaml
generation_log:
  - date: 2026-08-19
    worker: scout-evidence
    worker_version: 1
    model: <resolved id>
    prompt_path: prompts/C7-r0-scout-evidence.md
    prompt_hash: sha256:<hex>
    content_hash: sha256:<hex>
```

`generation_log` is **append-only by convention**. Append; never rewrite history.

## Worker versioning

Every worker declares `worker_version: <int>` in its own frontmatter and **increments it when
generation behaviour changes**. Without this you cannot tell whether candidate quality moved
because the market moved or because you edited a prompt.

## Why it matters here specifically

Twenty-four screens produced good findings that are reproducible only because the briefs were
written by hand in a conversation transcript. That is not provenance — it is luck. The moment a
prompt changes, there is no way to tell whether a different verdict reflects the market or the
edit.
