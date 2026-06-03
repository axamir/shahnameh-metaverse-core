# The Living Signal — Whitepaper
## Section 19: Total Supply and Allocation

**Author:** Amir Ahmadi (@x@)
**ORCID:** 0009-0000-0614-6869
**Date:** June 3, 2026
**Status:** Final — Immutable

---

### 19.1 Total Supply

The total supply of TAP is fixed and immutable:

**Total Supply:** 1,000,000,000,000,000,000 TAP (one quintillion).

This is equivalent to 1 NAFAS = 10¹⁸ TAP.

The total supply was chosen to be large enough to accommodate billions of users and trillions of micro-transactions over a century of operation, while remaining conceptually unified as a single "breath."

No additional TAP can ever be minted beyond this initial allocation. The supply is fixed at the protocol level by the `TokenMinter.sol` smart contract, which has no `mint` function accessible after the initial distribution.

---

### 19.2 Supply Allocation

The total supply is allocated across four primary pools:

| Pool | Percentage | Amount (TAP) | Purpose |
|------|------------|--------------|---------|
| **Empathy Pool** | 40% | 400,000,000,000,000,000 | Rewards for active Ranj (Proof of Resonance) |
| **Genesis Reserve** | 30% | 300,000,000,000,000,000 | Founders, early supporters, and Welcome Gifts |
| **Foundation & Development** | 20% | 200,000,000,000,000,000 | Protocol development, audits, legal, operations |
| **Diamond Treasury** | 10% | 100,000,000,000,000,000 | Perpetual reserve backing the TAP floor price |

---

### 19.3 The Empathy Pool (40%)

The Empathy Pool is the engine of the Ranj Economy. It contains 400 quadrillion TAP designated for distribution to active members through the Proof of Resonance mechanism.

- **Weekly Distribution:** The pool releases tokens on a weekly schedule, with the release rate halving as the number of verified Tribes reaches predefined thresholds (see Section 20).
- **No Pre-Mine for Insiders:** The Empathy Pool is entirely reserved for future contributors. Founders receive no allocation from this pool.
- **Convergence:** The pool is designed to converge toward a total distribution of 400 quadrillion TAP over approximately 100 years, with the rate asymptotically approaching zero.

---

### 19.4 The Genesis Reserve (30%)

The Genesis Reserve serves multiple purposes:

- **Founder Allocation:** A portion is allocated to the founders (@x@, @F@, and early co-creators) as compensation for the historical Ranj that created the protocol. Founder allocations are subject to a **4-year linear vesting schedule** (25% per year) and are **Soulbound** during the vesting period.
- **Welcome Gifts:** New members receive a Fixed-Value Welcome Gift of $100 worth of TAP from the Genesis Reserve. This ensures that every new member starts with a meaningful stake, regardless of when they join.
- **Genesis Grants for Births:** When a new entity is born in the Metaverse (through the co-creation of two members), a Genesis Grant of 1,000 TAP is awarded from the Genesis Reserve.

The Genesis Reserve is a **finite pool**. As more members join and more births occur, the reserve gradually depletes. This creates a natural transition from founder-funded growth to community-sustained growth.

---

### 19.5 The Foundation & Development Pool (20%)

This pool funds the ongoing development, security, and operation of the protocol:

- **Development:** Smart contract development, dApp maintenance, API infrastructure.
- **Security:** Regular audits, bug bounty programs, post-quantum cryptography upgrades.
- **Legal & Compliance:** Regulatory strategy, AML/KYC infrastructure, intellectual property protection.
- **Operations:** Community management, marketing, partnerships, and ecosystem growth.

The Foundation pool is managed by the Tribes Council through the standard proposal-vote-timelock process, ensuring community oversight of all expenditures.

---

### 19.6 The Diamond Treasury (10%)

The Diamond Treasury is the **perpetual reserve** of the protocol. It is:

- **Permanently Locked:** The Treasury's principal can never be withdrawn. Only the **yield** generated from staking, lending, and liquidity provision is accessible.
- **Multi-Asset:** The Treasury automatically converts inflows into a diversified basket of the top 10 cryptocurrencies (BTC, ETH, USDC, BNB, XRP, ADA, SOL, DOGE, MATIC, DOT).
- **Yield Distribution:** 50% of the Treasury's annual yield is distributed to all active members (Loyalty Score > 10) at each halving event.
- **Floor Price Guarantee:** The Treasury's Automated Market Maker (AMM) guarantees a floor price for TAP by buying back tokens whenever the market price drops below the Treasury's per-token backing value.

The Diamond Treasury is the economic foundation of the protocol's long-term sustainability. It ensures that TAP always has real, verifiable backing — a claim that most tokens cannot make.

---

### 19.7 Allocation Summary Table

| Pool | Amount (TAP) | Purpose | Access |
|------|--------------|---------|--------|
| Empathy Pool | 400,000,000,000,000,000 | Rewards for active contributors | Weekly distribution via Proof of Resonance |
| Genesis Reserve | 300,000,000,000,000,000 | Founders + Welcome Gifts + Birth Grants | 4-year vesting for founders; on-demand for gifts/grants |
| Foundation & Development | 200,000,000,000,000,000 | Development, security, legal, operations | Council-managed with community oversight |
| Diamond Treasury | 100,000,000,000,000,000 | Perpetual reserve | Yield only; principal permanently locked |

---

*In the next section, we describe the halving mechanism — how scarcity is tied to the growth of verified Tribes.*
