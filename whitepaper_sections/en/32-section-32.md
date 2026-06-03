# The Living Signal — Whitepaper
## Section 32: TribeRegistry.sol — Full Specification

**Author:** Amir Ahmadi (@x@)
**ORCID:** 0009-0000-0614-6869
**Date:** June 3, 2026
**Status:** Final — Immutable

---

### 32.1 Purpose

`TribeRegistry.sol` is the foundational contract of The Living Signal. It stores all registered Tribes and their immutable Seals.

---

### 32.2 Core Functions

```solidity
function createTribe(string memory _symbol, string memory _seal) external;
function getTribe(string memory _symbol) external view returns (Tribe memory);
function getTribeCount() external view returns (uint256);
```

---

### 32.3 The Tribe Struct

```solidity
struct Tribe {
    string symbol;      // @x@, @F@, etc.
    string seal;        // Immutable textual oath
    address founder;    // Creator's address
    bool exists;
}
```

---

### 32.4 Key Properties

- **Seal Immutability:** No `updateSeal` function exists. Once created, a Tribe's Seal can never be changed.
- **Symbol Uniqueness:** The contract enforces unique Symbols. Duplicate registration attempts revert.
- **Event Emission:** `TribeCreated` event is emitted on successful creation, enabling off-chain indexing.

---

*In the next section, we specify SealValidator.sol.*
