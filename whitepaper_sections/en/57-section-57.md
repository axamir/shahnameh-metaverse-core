# The Living Signal — Whitepaper
## Section 57: Anti-Whale Mechanisms — Quadratic Voting and Caps

**Author:** Amir Ahmadi (@x@)
**ORCID:** 0009-0000-0614-6869
**Date:** June 3, 2026
**Status:** Final — Immutable

---

### 57.1 The Whale Problem

In token-weighted voting systems, a single entity holding a large percentage of tokens can control governance outcomes. This is the "whale problem."

The Living Signal implements multiple structural defenses to prevent whale dominance.

---

### 57.2 Quadratic Voting

Voting power is not proportional to token holdings. It is proportional to the **square root** of token holdings multiplied by Loyalty Score:

```
Voting Power = sqrt(TAP held × Loyalty Score)
```

This means:
- To double your voting power, you must quadruple your TAP holdings.
- A whale with 1,000,000 TAP has only 10× the voting power of a member with 10,000 TAP (not 100×).

---

### 57.3 Daily Purchase Cap

The `AntiWhale.sol` contract enforces a **daily purchase limit** of 100 TAP per address from the open market. This prevents rapid accumulation for governance attacks.

---

### 57.4 Flash Loan Resistance

Voting power is calculated based on the **minimum** TAP balance held over the preceding 7 days, not the instantaneous balance. This makes flash loan attacks useless for governance manipulation.

---

*In the next section, we describe the Random Audit system.*
