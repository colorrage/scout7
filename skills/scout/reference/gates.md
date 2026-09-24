# Gates and verdicts

## Verdict vocabulary

| Verdict | `scout` does |
|---|---|
| `pass` | Record, advance to the next phase |
| `reject` | Record which check killed it, write the screen file, log it, stop |
| `hold` | Require a named blocking unknown, a resolution action and a `review_by` date |
| `awaiting-approval` | Set `awaiting: user-approval`, stop |
| `awaiting-input` | Set `awaiting: user-input`, ask one question, stop |

## Human gates — only a person clears these

- **frame** — the batch contract: question, quota, stop conditions
- **challenge** — the adversarial pass, before any spend
- **export** — approving findings as content, before they leave the harness

## Structured HOLD

A hold without a named blocking unknown is a reject with better manners. Record it as a reject.

```yaml
blocking_unknown:   exactly one, named
resolution_action:  the specific cheap thing that would settle it
review_by:          a date
on_expiry:          REJECTED_STALE
```

## Dispatch modes

| Call site | Mode | Why |
|---|---|---|
| `scout` → phase skills | inline | conversational context matters |
| `scout` → `scout-challenge` | **sub-agent, never inline** | independence from the author is the point |
| `scout-screen` per territory | sub-agent | parallel screening; they do not interact |
