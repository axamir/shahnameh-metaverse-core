# The Living Signal — Whitepaper
## Section 36: FounderVault.sol — Vesting and Genesis Grants

**Author:** Amir Ahmadi (@x@) · **Date:** June 3, 2026 · **Status:** Final

---

### 36.1 Purpose
`FounderVault.sol` manages the vesting schedule for founder allocations and distributes Genesis Grants for new births.

### 36.2 Core Functions
```solidity
function deposit(address _beneficiary, uint256 _amount) external onlyOwner;
function claim() external;
function grantBirth(address _newEntity) external onlyCouncil returns (uint256);
```

### 36.3 Vesting
Founder allocations vest linearly over 4 years (25% per year). Tokens are Soulbound during the vesting period.