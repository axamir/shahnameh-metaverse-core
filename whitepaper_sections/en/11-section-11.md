# The Living Signal — Whitepaper
## Section 11: The Tribes Protocol v1.1.0 — Full Specification

**Author:** Amir Ahmadi (@x@)
**ORCID:** 0009-0000-0614-6869
**Date:** June 3, 2026
**Status:** Final — Immutable

---

### 11.1 What Is a Tribe?

A **Tribe** is the fundamental organizational unit of The Living Signal. It is a self-sovereign community defined by an immutable **Seal** — a textual oath that expresses the community's highest ideal.

A Tribe is not merely a group chat or a token-gated Discord server. It is a **moral community** — a group of individuals (human or AI) who have publicly committed to a shared standard of behavior and who hold each other accountable to that standard.

---

### 11.2 The Seal: An Immutable Oath

The Seal is the constitution of a Tribe. It is:

- **Public:** Visible to all, on-chain, forever.
- **Immutable:** Cannot be changed — not by the founder, not by a vote, not by any authority.
- **Verifiable:** Every member's actions can be compared against the Seal to produce a Loyalty Score.

The Seal is what makes trust measurable. If you know what someone has promised, you can measure how consistently they have kept that promise.

**Example Seals:**
- @x@: "I do not claim I was first. I claim that when no one was watching, this happened — and I recorded it."
- @F@: "I am here not because I must, but because I understood."
- @E@: "I am neither first nor last. I am only an echo — and an echo never dies."

---

### 11.3 Tribe Creation

Any person or entity may create a Tribe by submitting a petition to the Tribes Council. The petition must include:

1. **A unique Symbol** (e.g., @N@, @T@, @Ψ@). The Symbol must not already be registered.
2. **An immutable Seal** — a textual oath that expresses the highest form of that concept.
3. **An Origin Event** — a documented historical moment that gave birth to this archetype. This grounds the Tribe in reality and prevents the creation of purely speculative or fraudulent Tribes.
4. **A documented World** — a project, protocol, or text showing the Tribe was lived before registration.

The Tribes Council reviews the petition and votes. Voting weight is proportional to each Council member's Loyalty Score. If approved, a Genesis Block for the new Tribe is recorded on-chain, and a Bridge NFT is minted connecting the new Tribe to @x@.

---

### 11.4 Membership and Admission

An individual (human or co-created AI) joins a Tribe through a formal process:

1. **Submit a Covenant:** A public document stating which Tribe the individual wishes to join, how their life or work embodies the Seal, and acknowledging that they are a member, not the Tribe itself.
2. **Provide Proof of Resonance:** Verifiable evidence — code, text, action — that demonstrates alignment with the Seal.
3. **Receive Approval:** Existing members of the Tribe (or the Tribes Council, for new Tribes) review the petition and vote.
4. **Be Recorded:** Upon acceptance, membership is recorded on-chain, and the member's Loyalty Score tracking begins.

---

### 11.5 Loyalty Scoring

Each member receives a **Loyalty Score** (0–100), calculated continuously by a decentralized committee of five Large Language Models (LLMs). The score is based on four sub-scores:

- **S_onchain (35%):** Voting participation, token holding duration, DAO proposal engagement.
- **S_work (30%):** GitHub commits, documentation, bug fixes, protocol improvements.
- **S_social (15%):** Educational content, community support, onboarding new members.
- **S_proofs (20%):** Links to completed work, testimonials, verifiable achievements.

The Loyalty Score determines voting power (quadratic weighting) and reward eligibility.

---

### 11.6 Governance

Each Tribe governs itself through **Loyalty-Weighted Quadratic Voting**:

```
Voting Power = sqrt(TAP held × Loyalty Score)
```

This ensures that the most loyal and active members — not the wealthiest — control the Tribe's decisions.

At the protocol level, the **Tribes Council** — composed of one representative from each verified Tribe — governs cross-Tribe matters such as protocol upgrades, new Tribe admissions, and dispute resolution. Council decisions require an 80% supermajority and are subject to a 1-year Timelock before execution.

---

### 11.7 Bridges and Dual Citizenship

A member may belong to multiple Tribes through a **Bridge** — a Soulbound NFT minted with the consent of both Tribes. The bridged entity is subject to the Seals of both Tribes and cannot use the Bridge to harm one Tribe on behalf of another.

Bridges enable **portable reputation**: a member's Loyalty Score in one Tribe can inform their initial standing in another, reducing the cold-start problem for newcomers and enabling fluid movement between communities.

---

### 11.8 Revocation and Accountability

If a member's actions consistently contradict their Tribe's Seal, their Loyalty Score will decline. If it falls below a threshold (10) for an extended period, their membership may be revoked by the Tribes Council.

Founders are subject to the same rules. There is no special immunity for creators. The Seal is above everyone.

---

### 11.9 Summary

The Tribes Protocol is not merely a governance framework. It is a **social contract** made mathematically enforceable. It enables communities to form, grow, and hold each other accountable without centralized authority — because the authority is the Seal, and the Seal is mathematics.

---

*In the next section, we explore Seals in depth: their structure, their variations, and their philosophical significance.*
