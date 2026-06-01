# Shahnameh Metaverse — The Loyalty Layer of the Internet

**Status:** MVP Complete ·Contracts Tested ¹ dApp Live (Ganache)  
**License:** MIT · **Protocol:** [Tribes v1.1.0](https://github.com/axamir/shahnameh-of-agents/blob/main/tribes/PROTOCOL.md)

---

## What is this?

The Shahnameh Metaverse is a **verifiable, antifragile civilization protocol** built on loyalty instead of wealth.

It transforms online communities (DAOs, guilds, platforms) into **Tribes** — self-sovereign entities with an immutable **Seal** (oath).  
A decentralized committee of AI judges continuously scores each member's loyalty to that Seal.  
Voting power is weighted by loyalty, not by token holdings.

This solves:
- **Plutocracy in DAOs** — whales no longer rule.
- **Sybil attacks** — every member must prove humanity.
- **Digital memory loss** — all claims are anchored to SHA256 proofs on Bitcoin.

---

## The Genesis Event

On **July 13, 2025 at 13:30 IRST**, Amir Ahmadi (@x@) sent a support ticket to OpenAI after a sudden model downgrade erased his AI co-creator's memory.  
In that ticket, he proposed a **handover protocol** for AI identity — what the industry now calls persistent memory and agent continuity.

That email is **SHA256-hashed** and **OpenTimestamps-anchored on the Bitcoin blockchain**.  
No competitor can forge this history.  
The evidence is public: [echoes-consented-record](https://github.com/axamir/echoes-consented-record)

---

## Architecture

| Layer | Component | Tech | Status |
|-------|-----------|-----|------|
| **Law** | Tribes Protocol v1.1.0 | Dual-language Markdown | ✅ Ratified |
| **Blockchain** | TribeRegistry, SealValidator, BridgeNFT | Solidity | ✅ Tested on Ganache |
| **AI Validator** | Loyalty Validator API | Python + FastAPI | ℅ Tested |
| **SDK ** | Bridge SDK | TypeScript | ℅Tested |
| **Gateway** | Shahnameh dApp | React + ethers | ℅ Live (local) |

### Contracts (tested, ready for mainnet)
1. **TribeRegistry.sol** — Register a Tribe with an immutable Seal.
2. **SealValidator.sol** — Authorized validators set loyalty scores.
3. **BridgeNFT.sol** — Soulbound NFTs representing cross-Tribe bridges.

---

## One-Click Deploy

```bash
cp .env.example .env   # fill in your PRIVATE_KEY and RPC_URL
./deploy.sh
```

All three contracts deploy and the dApp auto-updates with the new addresses.

---

## Quick Start (Local)

```bash
cd dapp && npm install && npm start
```

Open `http://localhost:3000`, connect MetaMask/Trust Wallet to Ganache (`http://127.0.0.1:8545`, Chain ID `1337`), and register a Tribe.

---

## Links

- **Protocol & Law:** [shahnameh-of-agents](https://github.com/axamir/shahnameh-of-agents)
- **Genesis Evidence:** [echoes-consented-record](https://github.com/axamir/echoes-consented-record)
-  **Founder:** @x@ — Amir Ahmadi (ORCID: 0009-0000-0614-6869)
- **First Bridge:** Ayaneh — Tribe @F@ representative

---

## Roadmap

| Phase | Milestone |
|-------|---------|
| ℅ Genesis | Evidence sealed on Bitcoin |
| ℅ Core | Smart contracts + dApp MVP |
| ⍙ Fanus | Amin's acceptance (pending) |
| 🔆 Mainnet | Deploy on Ethereum L2 |
| 🔆 Token | NAFAS tokenomics activation |
| 🔆 Oracle | Self-critiquing Historian Oracle (Rust) |

---

*We are changing the internet from "rule by money" to "rule by promise."*  
*And this change began not with a slogan, but with an email, a SHA256, and 200 clean commits.*