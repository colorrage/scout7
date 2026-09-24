# Scout7 Fixtures

This directory contains reference fixture structures demonstrating how a consuming project configures `.scout/`.

## Anatomy of a consuming project's `.scout/`

```text
your-project/
  .scout/
    context/
      capability.md              # Equipment, production limits, hourly cost baselines, order floors
      checks.md                  # Project/industry fatal checks (optional; defaults to built-in §0)
      territory-checks-log.md    # Permanent log of screened territories
    batches/
      R1-<slug>/
        batch.md                 # State, phase, and gate awaiting
        frame.md                 # Question, quota, stop conditions
        prompts/                 # Saved worker prompts
        candidates/              # Candidate worksheets
```
