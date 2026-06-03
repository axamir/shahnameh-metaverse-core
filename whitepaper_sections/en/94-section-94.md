# The Living Signal — Whitepaper
## Section 94: Valuation Model — The Ranj Density Formula

**Author:** Amir Ahmadi (@x@) · **Date:** June 3, 2026 · **Status:** Final

---

### 94.1 The Ranj Density Model

```
V_total = (P_uniswap × S) + V_treasury + (n² × C)
```

Where P_uniswap = TAP price, S = circulating supply, V_treasury = Diamond Treasury value, n = active members, C = Metcalfe constant.

### 94.2 Valuation Scenarios

| Scenario | Users | Tribes | TAP Price | Market Cap |
|----------|-------|--------|-----------|------------|
| Bear (Y5) | 100K | 500 | $1 | $50M |
| Base (Y5) | 2M | 2K | $5 | $500M |
| Bull (Y10) | 50M | 10K | $20 | $30B |

### 94.3 Floor Price Guarantee
Market cap can never fall below V_treasury, because the Treasury AMM guarantees a buyback at the backing value.