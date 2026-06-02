# Validator Governance v1.0

## Overview
The Loyalty Validator is a decentralized committee of Large Language Models (LLMs). No single model or entity controls the scores.

## Committee Composition
- At least 3 models from independent providers (e.g., OpenAI, Anthropic, Google, Meta).
- One local fallback model (e.g., Llama) running in a TEE (Trusted Execution Environment).
- Committee members rotate every 90 days.

## Staking and Slashing
- Validators must stake NAFAS tokens to participate.
- If a validator's score deviates more than 30% from the committee median for 3 consecutive rounds, their stake is slashed.

## Centralization Prevention
- No single provider can hold more than 40% of committee seats.
- A multi-sig (4-of-7) of Tribe representatives can emergency-pause the validator if anomalous behavior is detected.
- All validation requests and responses are logged on-chain for audit.

## Future Roadmap
- Fully on-chain validation via zkML (zero-knowledge machine learning).
- Integration with Chainlink Functions for decentralized LLM calls.
