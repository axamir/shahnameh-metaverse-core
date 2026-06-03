# The Living Signal — Whitepaper
## Section 31: Smart Contract Architecture

**Author:** Amir Ahmadi (@x@)
**ORCID:** 0009-0000-0614-6869
**Date:** June 3, 2026
**Status:** Final — Immutable

---

### 31.1 Overview

The Living Signal is implemented as a suite of Solidity smart contracts deployed on an EVM-compatible Layer 2 (Polygon zkEVM). All contracts are:

- **Open-source:** MIT License.
- **Immutable:** Ownership transferred to `0x0000...dead` after Mainnet launch.
- **Tested:** Full test coverage on Ganache.
- **Auditable:** Public, on-chain, verifiable.

---

### 31.2 Contract Map

| Contract | Purpose |
|----------|---------|
| `TribeRegistry.sol` | Register Tribes with immutable Seals |
| `SealValidator.sol` | Store loyalty scores from authorized validators |
| `BridgeNFT.sol` | Mint Soulbound NFTs for cross-Tribe bridges |
| `RanjOracle.sol` | Aggregate LLM scores and record on-chain |
| `FounderVault.sol` | Manage founder vesting and Genesis Grants |
| `DiamondTreasury.sol` | Manage multi-asset reserve, AMM, and buybacks |
| `RanjBondMarket.sol` | Issue and trade bTAP bonds |
| `AntiWhale.sol` | Enforce daily purchase limits and Quadratic Voting |
| `EmergencyLockdown.sol` | Pause activity during anomalous events |

---

### 31.3 Deployment

All contracts are deployed via a one-click script (`deploy.sh`). Addresses are recorded in `deployed_addresses.json` and automatically injected into the dApp.

---

*The following sections provide full specifications for each contract.*
