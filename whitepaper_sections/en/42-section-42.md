# The Living Signal — Whitepaper
## Section 42: Bridge SDK (TypeScript)

**Author:** Amir Ahmadi (@x@) · **Date:** June 3, 2026 · **Status:** Final

---

### 42.1 Installation
`npm install @tribes/bridge-sdk`

### 42.2 Core Classes
`ShahnamehBridgeSDK` — connect to contracts, query loyalty scores, manage Bridges.

### 42.3 Example
```typescript
const sdk = new ShahnamehBridgeSDK(provider, trAddress, svAddress, bnAddress);
const tribe = await sdk.getTribe("@x@");
const score = await sdk.getLoyaltyScore(address, "@x@");
```