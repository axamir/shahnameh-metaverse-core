# The Living Signal — Whitepaper
## Section 21: Proof of Resonance — Weekly Distribution Formula

**Author:** Amir Ahmadi (@x@)  
**ORCID:** 0009-0000-0614-6869  
**Date:** June 3, 2026  
**Status:** Final — Immutable

---

### 21.1 The Distribution Principle

Every week, the Empathy Pool releases a fixed amount of TAP into the ecosystem. This amount is distributed among all active members — those who have earned a Loyalty Score above zero through verifiable contribution.

The distribution follows a simple principle: **those who contribute more, earn more.**

---

### 21.2 The Formula

```
Reward_i = (L_i / Σ L_j) × W
```

Where:
- `Reward_i` = TAP earned by member i this week
- `L_i` = Loyalty Score of member i (0–100)
- `Σ L_j` = Sum of Loyalty Scores of all active members
- `W` = Weekly reward pool (determined by the current halving epoch)

---

### 21.3 Example Calculation

Suppose:
- The weekly reward pool is 3,846,153,846,153,846 TAP
- There are 1,000 active members
- The sum of all Loyalty Scores is 50,000
- Alice has a Loyalty Score of 85

Alice's reward:
```
Reward_Alice = (85 / 50,000) × 3,846,153,846,153,846
             = 0.0017 × 3,846,153,846,153,846
             ≈ 6,538,461,538,462 TAP
```

A member with a Loyalty Score of 10 would earn approximately 769,230,769,231 TAP — about 1/8.5 of Alice's reward.

A member with zero activity (Loyalty Score = 0) earns nothing.

---

### 21.4 Weekly Reset

Loyalty Scores are recalculated every 7 days based on the most recent data. A member who was highly active last week but inactive this week will see their score decline and their reward diminish. This ensures that rewards reflect **current contribution**, not historical reputation alone.

---

*In the next section, we describe the Loyalty Score calculation in detail.*
