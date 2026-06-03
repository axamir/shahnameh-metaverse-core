# The Living Signal — Whitepaper
## Section 35: RanjOracle.sol — Full Specification

**Author:** Amir Ahmadi (@x@)
**ORCID:** 0009-0000-0614-6869
**Date:** June 3, 2026
**Status:** Final — Immutable

---

### 35.1 Purpose

`RanjOracle.sol` is the on-chain interface between the Loyalty Validator API (multi-LLM committee) and the protocol's smart contracts. It receives, validates, and records Ranj scores.

---

### 35.2 Core Functions

```solidity
function submitScore(address _member, string memory _tribeSymbol, uint256 _score, bytes memory _signature) external;
function getMedianScore(address _member, string memory _tribeSymbol) external view returns (uint256);
function challengeScore(address _member, string memory _tribeSymbol) external payable;
```

---

### 35.3 Multi-Model Consensus

The `submitScore` function accepts scores from authorized validators. The contract stores the last 5 scores for each member-tribe pair and uses the **median** as the official Loyalty Score.

---

### 35.4 Slashing

If a validator's score deviates more than 30% from the median for 3 consecutive rounds, their staked TAP is slashed. This ensures validators have a strong economic incentive to be accurate.

---

### 35.5 Public Challenge

Any member can challenge a score by staking 1,000 TAP. A random jury of 7 high-loyalty members reviews the case. If upheld, the challenger's stake is returned and erroneous validators are penalized.

---

*In the next section, we begin Part IV: The Defenses.*
