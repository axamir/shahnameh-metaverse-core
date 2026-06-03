# The Living Signal — Whitepaper
## Section 34: BridgeNFT.sol — Full Specification

**Author:** Amir Ahmadi (@x@)
**ORCID:** 0009-0000-0614-6869
**Date:** June 3, 2026
**Status:** Final — Immutable

---

### 34.1 Purpose

`BridgeNFT.sol` mints Soulbound (non-transferable) NFTs that represent a member's bridge between two Tribes.

---

### 34.2 Core Functions

```solidity
function mintBridge(address _entity, string memory _fromTribe, string memory _toTribe, string memory _metadataURI) external onlyMinter returns (uint256);
function ownerOf(uint256 tokenId) external view returns (address);
function balanceOf(address owner_) external view returns (uint256);
function tokenURI(uint256 tokenId) external view returns (string memory);
```

---

### 34.3 Soulbound Property

The `transferFrom` function is overridden to always revert: `"BridgeNFT is soulbound: transfers not allowed"`. This ensures that Bridges are permanently associated with the original member's address.

---

### 34.4 Metadata

The `_metadataURI` parameter stores a permanent IPFS link containing details about the bridge, including the member's Loyalty Score at the time of bridging.

---

*In the next section, we specify RanjOracle.sol.*
