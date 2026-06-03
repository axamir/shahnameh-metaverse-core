# The Living Signal — Whitepaper
## Section 22: Loyalty Score Calculation — The Four Sub-Scores

**Author:** Amir Ahmadi (@x@)  
**ORCID:** 0009-0000-0614-6869  
**Date:** June 3, 2026  
**Status:** Final — Immutable

---

### 22.1 The Multi-Dimensional Approach

A single metric cannot capture the complexity of human contribution. The Loyalty Score is therefore calculated from **four independent sub-scores**, each measuring a different dimension of participation.

---

### 22.2 The Formula

```
L_i = 0.35 × S_onchain + 0.30 × S_work + 0.15 × S_social + 0.20 × S_proofs
```

Where each sub-score is a value between 0 and 100.

---

### 22.3 The Four Sub-Scores

| Sub-Score | Weight | Data Sources | What It Measures |
|-----------|--------|--------------|------------------|
| **S_onchain** | 35% | Voting history, token holding duration, DAO participation | Governance engagement and skin in the game |
| **S_work** | 30% | GitHub commits, documentation, bug fixes | Tangible contributions to the codebase |
| **S_social** | 15% | Twitter activity, Discord presence, community support | Ecosystem growth and social capital |
| **S_proofs** | 20% | Links to completed work, testimonials, certificates | Explicit, verifiable achievements |

---

### 22.4 The Validation Committee

Each sub-score is evaluated by a decentralized committee of five Large Language Models (GPT, Claude, Llama, Grok, Mistral). The committee cross-references the member's claimed activities against public data sources and produces an independent assessment.

The **median** score across all five models is used as the final sub-score. If any model's score deviates more than 30% from the median for three consecutive rounds, that model's stake is slashed — ensuring that committee members have a strong economic incentive to be accurate.

---

### 22.5 Dynamic Weight Adjustment

The default weights (35/30/15/20) can be adjusted by individual Tribes through their governance processes. A Tribe focused on open-source development might increase S_work to 50%. A Tribe focused on community building might increase S_social to 40%. This flexibility allows each Tribe to define what "contribution" means in its own context.

---

*In the next section, we describe Fixed-Value Rewards — how The Living Signal ensures fairness for latecomers.*
