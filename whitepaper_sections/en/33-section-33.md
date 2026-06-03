# The Living Signal — Whitepaper
## Section 33: SealValidator.sol — Full Specification

**Author:** Amir Ahmadi (@x@)
**ORCID:** 0009-0000-0614-6869
**Date:** June 3, 2026
**Status:** Final — Immutable

---

### 33.1 Purpose

`SealValidator.sol` stores loyalty scores assigned by authorized validators (the multi-LLM committee).

---

### 33.2 Core Functions

```solidity
function addValidator(address _validator) external onlyOwner;
function removeValidator(address _validator) external onlyOwner;
function setScore(address _member, string memory _tribeSymbol, uint256 _score) external onlyValidator;
function getScore(address _member, string memory _tribeSymbol) external view returns (uint256);
```

---

### 33.3 Score Storage

Scores are stored in a nested mapping: `loyaltyScores[member][tribeSymbol]`. Each member can have different scores for different Tribes.

---

### 33.4 Access Control

- `onlyOwner`: Controls adding/removing validators.
- `onlyValidator`: Controls setting scores (scores must be 0–100).

---

*In the next section, we specify BridgeNFT.sol.*
