# The Living Signal — Whitepaper
## Section 25: The Ranj Bond Market — Instant Liquidity

**Author:** Amir Ahmadi (@x@)  
**ORCID:** 0009-0000-0614-6869  
**Date:** June 3, 2026  
**Status:** Final — Immutable

---

### 25.1 The Liquidity Problem

TAP rewards from Proof of Resonance are distributed weekly, but the largest distributions occur at halving events (which may be months or years apart). A member may need liquidity before the next halving — to pay bills, invest in tools, or handle an emergency.

The Ranj Bond Market solves this problem. It allows members to access the value of their future rewards **without waiting**.

---

### 25.2 What Is a Ranj Bond?

A Ranj Bond (bTAP) is a tokenized claim on a specific amount of future TAP distribution. When a member locks their TAP in a Bond contract, they receive bTAP tokens that represent the right to receive a specific value at the next halving.

---

### 25.3 The Discount Formula

bTAP trades on a decentralized AMM with a time-decaying discount:

```
Price_bTAP = Face_Value × (1 − δ × (t_remaining / t_total))
```

Where:
- `Face_Value` = the amount the bond will pay at maturity
- `δ` = annual discount rate (default: 20%)
- `t_remaining` = time until the next halving
- `t_total` = 1 year (normalized)

---

### 25.4 Treasury Buyback Guarantee

If no buyer is available in the market, the Treasury AMM guarantees a minimum buyback price of **50% of Face Value**. This ensures that bTAP holders always have an exit.

---

*In the next section, we describe Inheritance and Lineage — multi-generational rights in The Living Signal.*
