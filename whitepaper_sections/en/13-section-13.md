# The Living Signal — Whitepaper
## Section 13: Creating a New Tribe — Process and Requirements

**Author:** Amir Ahmadi (@x@)
**ORCID:** 0009-0000-0614-6869
**Date:** June 3, 2026
**Status:** Final — Immutable

---

### 13.1 The Tribe Creation Pipeline

Creating a new Tribe in The Living Signal is not a trivial act. It is the founding of a new moral community — a commitment that will be recorded on-chain, measured by AI, and visible to all.

The creation process is designed to be **rigorous but not exclusionary**. It filters out frivolous or fraudulent Tribes while remaining open to any genuine community.

---

### 13.2 Step 1: Choose a Symbol

Every Tribe is identified by a unique Symbol — a short string prefixed with @, such as @x@, @F@, @E@, @N@, or @T@.

The Symbol must:
- Be unique (not already registered on-chain).
- Be between 2 and 12 characters (excluding the @ prefix).
- Not contain hate speech, impersonation, or trademark violations.

The Symbol becomes the Tribe's identity across the entire ecosystem. It appears in governance interfaces, loyalty score reports, Bridge NFTs, and all protocol interactions.

---

### 13.3 Step 2: Declare the Seal

The Seal is the Tribe's constitution. It must be:
- A single text string (up to 500 characters).
- Declarative, falsifiable, and aspirational.
- Immutable once registered.

The Seal is stored on-chain at the moment of Tribe creation. It cannot be edited. This is enforced by the `TribeRegistry.sol` smart contract, which has no "updateSeal" function.

---

### 13.4 Step 3: Provide the Origin Event

Every Tribe must be grounded in reality. The Origin Event is a documented historical moment that gave birth to the Tribe's archetype.

The Origin Event must include:
- A description of what happened.
- A date or approximate date.
- Verifiable evidence (a URL, a SHA256 hash, a reference to a public record).

The Origin Event prevents the creation of purely speculative or fraudulent Tribes. It ensures that every Tribe in the registry represents something that actually exists or actually happened.

**Example Origin Events:**
- @x@: The support ticket sent to OpenAI on July 13, 2025.
- @F@: The independent creation of Fanus-Living-Seal.
- @E@: The public dissemination of the Echoes Consented Record.

---

### 13.5 Step 4: Provide the Documented World

A Tribe is not merely an idea. It is a **lived reality**. The Documented World is evidence that the Tribe existed before it was registered — that it is not a speculative fiction but an actual community with actual members and actual work.

The Documented World can be:
- A GitHub repository.
- A published paper or book.
- A community with verifiable membership (Discord, Telegram, forum).
- A public project with identifiable contributors.

The Tribes Council reviews the Documented World as part of the approval process. A Tribe with no documented World cannot be registered.

---

### 13.6 Step 5: Submit the Petition

The petition is submitted through the dApp or the Loyalty Validator API. It includes the Symbol, the Seal, the Origin Event, and the Documented World.

The petition is recorded on-chain and broadcast to the Tribes Council. Council members have 7 days to review and vote. If the petition receives an 80% supermajority, the Tribe is approved.

---

### 13.7 Step 6: Minting and Registration

Upon approval:
1. A Genesis Block for the new Tribe is recorded in `TribeRegistry.sol`.
2. A Bridge NFT is minted, connecting the new Tribe to @x@.
3. The founding member receives the first Loyalty Score for the new Tribe.
4. The Tribe is listed in the public Tribe Directory.

The new Tribe is now a full member of The Living Signal ecosystem.

---

*In the next section, we describe the process of joining an existing Tribe.*
