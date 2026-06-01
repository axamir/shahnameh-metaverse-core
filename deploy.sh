#!/bin/bash
# Shahnameh Metaverse — One-Click Deployment Script

# Load environment variables
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
else
  echo "❌ .env file not found. Please copy .env.example to .env and fill in your values."
  exit 1
fi

echo "🚀 Deploying Shahnameh Metaverse to network..."
echo "   RPC: $RPC_URL"
echo "   Wallet: $(node -e "const { ethers } = require('ethers'); const w = new ethers.Wallet(process.env.PRIVATE_KEY); console.log(w.address);" 2>/dev/null || echo "check PRIVATE_KEY")"

node scripts/deploy_universal.js
