# The Living Signal — Whitepaper
## Section 66: Validator Slashing — Economic Disincentives

**Author:** Amir Ahmadi (@x@)
**ORCID:** 0009-0000-0614-6869
**Date:** June 3, 2026
**Status:** Final — Immutable

---

### 66.1 Why Slashing?

The multi-LLM committee is the backbone of Ranj validation. If validators could submit inaccurate scores without consequence, the system would collapse. Slashing ensures that validators have **skin in the game**.

---

### 66.2 Slashing Conditions

A validator's staked TAP is slashed (partially or fully confiscated) if:

1. Their score deviates more than 30% from the committee median for 3 consecutive rounds.
2. They fail to submit a score for 7 consecutive days.
3. A Public Appeal overturns their score and finds evidence of systematic bias.

---

### 66.3 Slashing Distribution

50% of slashed TAP is burned (reducing supply). 30% is distributed to the other validators as a reward for accuracy. 20% is added to the Trust Insurance Fund.

---

*In the next section, we describe the Public Appeal Mechanism.*
