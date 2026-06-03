# The Living Signal — Whitepaper
## Section 41: Loyalty Validator API (RANJ-1 Standard)

**Author:** Amir Ahmadi (@x@) · **Date:** June 3, 2026 · **Status:** Final

---

### 41.1 Endpoint
`POST /v1/validate`

### 41.2 Request
```json
{
  "user_address": "0x...",
  "action_type": "github_commit",
  "action_data": { … },
  "tribe_symbol": "@x@"
}
```

### 41.3 Response
```json
{
  "status": "approved",
  "ranj_score": 85,
  "tap_earned": 425,
  "certificate_nft": "0x..."
}
```