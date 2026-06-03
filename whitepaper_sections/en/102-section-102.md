# The Living Signal — Whitepaper
## Section 102: Oracle Architecture Amendment — Decentralized Validation Network

**Author:** Amir Ahmadi (@x@)
**ORCID:** 0009-0000-0614-6869
**Date:** June 3, 2026
**Status:** Living Document v1.1 — Pre-Sealing Amendment

---

### 102.1 The Oracle Problem Revisited

Section 101 proposed "Human-in-the-Loop Appeal Court + ZK-Proof mechanisms" as a response to LLM oracle vulnerability. External review correctly identified that this shifts the oracle problem from AI to humans without resolving the underlying trust issue.

This section provides the complete, architecturally-sound replacement.

### 102.2 Three-Layer Validation Architecture

**Layer 1: Decentralized Oracle Network (DON)**
- 10+ independent validators running diverse LLM backends (OpenAI, Anthropic, Meta, Google, independent models)
- Validators stake TAP as economic security deposit
- Scores are submitted on-chain with ZK-Proofs of correct computation
- Median score across all validators is the official Loyalty Score
- Validators whose scores deviate >30% from median for 3 consecutive rounds are slashed

**Layer 2: ZK-Provable vs. Social Claims**
- **Cryptographically verifiable claims**: GitHub commits (verified via commit hash), on-chain votes (verified via transaction receipt), token holdings (verified via balance proof). These use ZK-Proofs for computation integrity.
- **Socially adjudicated claims**: "Was this contribution meaningful?", "Does this align with the Tribe's Seal?" These require human judgment and cannot be ZK-proven.

The whitepaper now explicitly distinguishes between these two categories in every relevant section.

**Layer 3: Appeal Court (Last Resort)**
- Composition: 7 members selected via sortition from Wisdom NFT holders (Loyalty Score >80 for 5+ years)
- Term: 12 months, rotating
- Jurisdiction: Only socially adjudicated claims, only when the original score is challenged
- Transparency: All deliberations and votes are on-chain
- Recourse: Appeal Court decisions can be overturned by a 80% supermajority of the Tribes Council

### 102.3 Failure Scenarios for the Oracle Layer

| Scenario | Response |
|----------|----------|
| 3+ DON validators collude | Slashing + removal; honest validators maintain median |
| Appeal Court captured | Tribes Council override (80% supermajority) |
| LLM providers shut down API | Validators switch to alternative models; self-hosted fallback |
| ZK-Prover compromised | Multiple independent ZK implementations required; diversity in proof systems |

### 102.4 Initial Distribution of Wisdom NFTs (Anti-Oligarchy Measure)

The first 100 Wisdom NFTs will be distributed through a public, loyalty-weighted quadratic vote among all Tribe members with a Loyalty Score >50 at the time of distribution. The founder (@x@) is explicitly excluded from this initial distribution and has no special privilege in nominating or appointing Wisdom NFT holders. Subsequent Wisdom NFTs are awarded automatically by the protocol based on the 5-year sustained loyalty criterion defined in Section 84.

### 102.4 Genesis Transition Period (90-Day Oracle Independence)

To break the circular dependency between the Oracle and Wisdom NFT holders, a **Genesis Transition Period** of 90 days is established:

1. **Days 1–90:** No Wisdom NFTs exist. Loyalty Scores are computed using ONLY hard, objective metrics:
   - TAP staking duration (50% weight)
   - Participation in simple on-chain votes (30% weight)
   - Diversity of Tribe memberships (20% weight)
   - NO subjective LLM judgment is used during this period.
2. **Day 91:** The first 100 Wisdom NFTs are distributed via Loyalty-weighted Quadratic Vote among members with the highest objective scores from the Transition Period.
3. **Day 92 onward:** The LLM Oracle activates, now subject to oversight by Wisdom NFT holders who were selected WITHOUT the Oracle they oversee.

**Founder Bond:** @x@ places a **10,000 TAP bond** in an escrow contract. If, within 5 years, the Wisdom NFT holders are proven to have become a corrupt oligarchy, this bond is distributed to all active members. This is an anti-oligarchy insurance.

### 102.5 Definition of Corrupt Oligarchy

For the Founder Bond to be executable, "corrupt oligarchy" must be objectively defined. The following conditions must ALL be met:

1. **Concentration:** Fewer than 5 Wisdom NFT holders control more than 50% of the Appeal Court voting power.
2. **Pattern:** At least 3 consecutive Appeal Court decisions have been publicly challenged and found to favor the interests of the ruling group over the interests of the broader community.
3. **Confirmation:** A 70% supermajority of the Tribes Council votes to confirm the oligarchy finding.

Only when all three conditions are satisfied does the Founder Bond distribution trigger.

### 102.6 Open Questions (To Be Resolved Before Sealing)

1. Exact economic parameters for validator staking and slashing.
2. Formal game-theoretic analysis of collusion resistance.
3. Simulation results under adversarial conditions.
