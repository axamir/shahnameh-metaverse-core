# Loyalty Score Specification v1.0

## Abstract
This document defines how a member's **Loyalty Score** (0–100) is computed within The Living Signal protocol.

## Data Sources
Loyalty is assessed from publicly available actions:
- **On-chain:** voting history, token holding duration, participation in DAO proposals.
- **Off-chain:** GitHub commits, Twitter posts, Discord/Telegram activity.
- **Explicit proofs:** links to work, testimonials, or attested contributions.

## Scoring Formula (Baseline)
Each data source produces a sub-score (0–100). The overall Loyalty Score is a weighted average:

Loyalty = (w1 × S_onchain + w2 × S_github + w3 × S_social + w4 × S_proofs) / (w1 + w2 + w3 + w4)



Default weights (adjustable by Tribe via governance):
- w1 = 0.35 (on-chain)
- w2 = 0.30 (code & work)
- w3 = 0.15 (social presence)
- w4 = 0.20 (explicit proofs)

## Penalties
- **Sybil flags:** if an address is flagged by Gitcoin Passport or similar, score is capped at 10.
- **Negative actions:** hate speech, rug pulls, or DAO attacks reduce score to 0 and trigger review.

## Seal Alignment
The final score is multiplied by a **Seal Alignment Factor** (0.0–1.0) determined by the LLM committee based on how well the member's actions match the literal text of the Tribe's Seal.

## Update Frequency
Scores are recalculated every 7 days, or on-demand when a member requests a review.

## Transparency
All scores are public on-chain. Any member can audit the data sources and challenge a score via the Historian Oracle.
