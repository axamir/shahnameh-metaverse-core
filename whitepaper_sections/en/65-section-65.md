# The Living Signal — Whitepaper
## Section 65: The Ranj Value Curve — Non-Linear Difficulty

**Author:** Amir Ahmadi (@x@)
**ORCID:** 0009-0000-0614-6869
**Date:** June 3, 2026
**Status:** Final — Immutable

---

### 65.1 Why Non-Linear?

If every unit of contribution earned the same reward, the system would incentivize quantity over quality — a thousand trivial commits over one deep architectural improvement. The Ranj Value Curve solves this by making reward proportional to the **depth**, not just the **volume**, of contribution.

---

### 65.2 The Curve

```
Reward = k × (Ranj_Score)^α
```

Where `α > 1` (default: 1.5). This means:
- A contribution scored at 50 earns 50^1.5 ≈ 353 units of reward.
- A contribution scored at 100 earns 100^1.5 = 1,000 units — nearly 3× more for 2× the score.

---

*In the next section, we describe Validator Slashing.*
