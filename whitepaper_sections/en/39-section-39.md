# The Living Signal — Whitepaper
## Section 39: AntiWhale.sol — Purchase Caps and Quadratic Voting

**Author:** Amir Ahmadi (@x@) · **Date:** June 3, 2026 · **Status:** Final

---

### 39.1 Purpose
`AntiWhale.sol` enforces structural defenses against governance attacks.

### 39.2 Core Functions
```solidity
function checkPurchaseLimit(address _buyer, uint256 _amount) external view returns (bool);
function getVotingPower(address _member, string memory _tribeSymbol) external view returns (uint256);
```

### 39.3 Limits
- Daily purchase cap: 100 TAP
- Voting power = sqrt(TAP held × Loyalty Score)