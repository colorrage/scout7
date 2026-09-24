# Scout7 — Agent Instructions

Scout7 is a skill-based product discovery and market validation research harness. Skills live below `skills/`; `README.md` is the source of truth for shipped capabilities.

## State and ownership

- **Runtime state belongs in the consuming project's `.scout/` directory**, never in this repository or in a skill directory.
- Scout7 owns territory screening, problem-first discovery, commercial licensing sweeps, unit economics analysis, adversarial challenges, and research audit logging.
- Hyper owns technical execution and software build.
- Signal7 owns GTM assets, publication, and brand review.
- Marketer7 owns growth experiments, campaign measurement, and learning rerouting.
- An AI research finding in `.scout/` is evidence for human decisions, not an automatic commercial commitment.

## Working rules

- **Asymmetry is the core rule:** Screen cheaply before batching deeply. A well-evidenced "no" is an expected and valuable result.
- **Stop at the first hard reject:** In screening, stop immediately upon a failed check; do not pad research for completeness.
- **Problem-first discovery:** Start with real customer problems, complaints, and repair threads — never from "fun things to produce".
- **Physical/Complexity reality before throughput:** Always declare geometry, wall thickness, or execution complexity before quoting capacity or throughput.
- **Adversarial challenge in isolation:** `scout-challenge` must always execute in a dedicated, isolated sub-agent context to eliminate author confirmation bias.
- **Provenance:** Every research worker must save its invocation prompt and hash to `prompts/` before writing findings.
- **Preserve uncertainty:** Use explicit evidence tags (`VERIFIED`, `REPORTED`, `ESTIMATED`, `UNKNOWN`). Never fabricate prices, volumes, or market sizes.
