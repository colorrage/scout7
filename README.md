# Scout7

Scout7 is a disk-backed Agent Skills research harness for **product discovery and market validation**. It screens candidate territories, investigates real customer problems, performs commercial licensing sweeps, models unit economics, and produces evidence-backed go/no-go verdicts.

It is part of the "7" suite of autonomous workflows:
* **Hyper** — software development, technical implementation, and adaptive OODA cycles.
* **Signal7** — GTM, marketing copy, content generation, and multi-channel publication.
* **Marketer7** — growth strategy, falsifiable marketing experiments, and metric evaluation.
* **Scout7** — product discovery, territory screening, unit economics, and viability validation.

Signal7-shaped: disk state, gate/verdict protocol, skill dispatch. No database, no server, no runtime. Everything is markdown and YAML on disk.

---

## What is shipped

| Capability | Status |
| --- | --- |
| Project-local `.scout/` state: context, capability envelope, checks log, prompts, batches | Shipped |
| Fast screening protocol (`scout-screen` with stop-at-first-reject) | Shipped |
| Problem-first candidate discovery (`scout-discover`) | Shipped |
| Commercial rights & IP sweep (`scout-licence`) | Shipped |
| Bottleneck unit economics & order floor analysis (`scout-cost`) | Shipped |
| Isolated sub-agent adversarial challenge pass (`scout-challenge`) | Shipped |
| Permanent audit logging and rule evolution (`scout-log`) | Shipped |
| Multi-agent installer (`scripts/install.sh`) supporting Claude, Codex, Agent-common, Pi | Shipped |
| Package & state validation scripts | Shipped |

---

## Installation

Clone this repository and run the installer:

```bash
cd scout7
bash scripts/install.sh install
```

The installer detects existing agent directories and creates safe symlinks pointing back to this checkout:
* `~/.claude/skills/` (Claude Code)
* `~/.codex/skills/` (Codex)
* `~/.agents/skills/` (agent-common)
* `~/.pi/agent/skills/` (PI)

### Management commands

```bash
bash scripts/install.sh status      # inspect installed links
bash scripts/install.sh uninstall   # remove symlinks created by this checkout
bash scripts/install.sh install     # refresh or install links
```

---

## Usage in a project

Initialize a `.scout/` directory in your project root with your operational context:

```text
your-project/
  .scout/
    context/
      capability.md              # equipment, materials, cost baselines, hourly bottleneck rate
      checks.md                  # domain-specific fatal checks (or use built-in reference)
      territory-checks-log.md    # append-only log of every screened territory
    batches/
      R<N>-<slug>/
        batch.md                 # batch state, phase, and gate awaiting
        frame.md                 # question, quota, and stop conditions
        prompts/                 # prompt provenance
        candidates/              # candidate worksheets
```

### Invocations

```text
/scout screen <territory>        cheap — fatal checks, minutes, usually a reject
/scout batch <territory>         expensive — runs only after a territory passes screening
```

**Screen before batching, always.** The system's value is in killing unviable territories in minutes before expensive research or CAD/prototyping spend.

---

## The skills

| Skill | Does |
|---|---|
| `scout` | Orchestrator. Owns phase and gate state on `batch.md`. Routes to workers. |
| `scout-screen` | Fatal checks against one territory. Stops at the first hard reject. |
| `scout-discover` | Problem-first discovery. Identifies recurring customer pain and repair needs. |
| `scout-licence` | Commercial rights sweep. Verifies explicit commercial grants vs personal/NC terms. |
| `scout-cost` | Unit economics vs order floor and bottleneck throughput. Geometry before throughput. |
| `scout-challenge` | Adversarial pass. **Runs in an isolated sub-agent context, never inline.** |
| `scout-log` | Writes the permanent record to `territory-checks-log.md` and proposes new rules. |

---

## Core rules

1. **Screen before you batch.** One search per fatal check beats days of deep batch research.
2. **A well-evidenced "no" is a good result.** The value is in killing things cheaply. Do not stretch to find a survivor.
3. **Complexity before throughput.** In physical manufacturing, state geometry and wall thickness before throughput. In software/services, state workflow complexity and human bottlenecks first.
4. **Adversarial challenge in isolation.** An author reviewing their own candidate finds what they already believe. Run `scout-challenge` in a sub-agent.
5. **Prompt provenance is non-negotiable.** Every research call must save its prompt and hash to `prompts/` before writing any finding.
6. **Preserve uncertainty.** Mark claims `VERIFIED`, `REPORTED`, `ESTIMATED`, or `UNKNOWN`. `UNKNOWN` is an acceptable and valuable answer.

---

## Verification commands

```bash
# Validate the Scout7 skill package and required templates:
node scripts/validate-scout-package.mjs

# Validate a consuming project's .scout state directory:
node scripts/validate-scout-state.mjs /path/to/project/.scout
```
