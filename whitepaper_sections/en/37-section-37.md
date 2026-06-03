# The Living Signal — Whitepaper
## Section 37: DiamondTreasury.sol — Reserve Management

**Author:** Amir Ahmadi (@x@) · **Date:** June 3, 2026 · **Status:** Final

---

### 37.1 Purpose
`DiamondTreasury.sol` manages the protocol's perpetual reserve, converting inflows into a diversified 10-asset basket and executing automated buybacks.

### 37.2 Core Functions
```solidity
function deposit() external payable;
function rebalance() external;
function buyback(uint256 _tapAmount) external;
function getBackingValue() external view returns (uint256);
```

### 37.3 Automation
Rebalancing and buyback functions are triggered by a decentralized keeper network (Keep3r or similar).