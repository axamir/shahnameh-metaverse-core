const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

async function main() {
  const RPC_URL = process.env.RPC_URL || "https://ethereum-sepolia-rpc.publicnode.com";
  const PRIVATE_KEY = process.env.PRIVATE_KEY;

  if (!PRIVATE_KEY) {
    console.error("❌ PRIVATE_KEY not set in .env file.");
    process.exit(1);
  }

  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);
  const deployerAddress = await signer.getAddress();
  console.log("Deploying from:", deployerAddress);

  // بارگذاری آرتیفکت‌ها
  const trArtifact = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "artifacts", "contracts", "TribeRegistry.sol", "TribeRegistry.json"), "utf8"));
  const svArtifact = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "artifacts", "contracts", "SealValidator.sol", "SealValidator.json"), "utf8"));
  const bnArtifact = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "artifacts", "contracts", "BridgeNFT.sol", "BridgeNFT.json"), "utf8"));

  // دیپلوی TribeRegistry
  console.log("📦 Deploying TribeRegistry...");
  const TRFactory = new ethers.ContractFactory(trArtifact.abi, trArtifact.bytecode, signer);
  const tribeRegistry = await TRFactory.deploy();
  await tribeRegistry.waitForDeployment();
  const trAddress = await tribeRegistry.getAddress();
  console.log("✅ TribeRegistry:", trAddress);

  // دیپلوی SealValidator
  console.log("📦 Deploying SealValidator...");
  const SVFactory = new ethers.ContractFactory(svArtifact.abi, svArtifact.bytecode, signer);
  const sealValidator = await SVFactory.deploy();
  await sealValidator.waitForDeployment();
  const svAddress = await sealValidator.getAddress();
  console.log("✅ SealValidator:", svAddress);

  // دیپلوی BridgeNFT
  console.log("📦 Deploying BridgeNFT...");
  const BNFactory = new ethers.ContractFactory(bnArtifact.abi, bnArtifact.bytecode, signer);
  const bridgeNFT = await BNFactory.deploy();
  await bridgeNFT.waitForDeployment();
  const bnAddress = await bridgeNFT.getAddress();
  console.log("✅ BridgeNFT:", bnAddress);

  // ذخیره آدرس‌ها
  const deployed = { tribeRegistry: trAddress, sealValidator: svAddress, bridgeNFT: bnAddress };
  fs.writeFileSync("deployed_addresses.json", JSON.stringify(deployed, null, 2));
  console.log("📄 Addresses saved to deployed_addresses.json");

  // تزریق خودکار به dApp
  let appJs = fs.readFileSync(path.join(__dirname, "..", "dapp", "src", "App.js"), "utf8");
  appJs = appJs.replace(/const TRIBE_REGISTRY_ADDRESS = '.*'/, `const TRIBE_REGISTRY_ADDRESS = '${trAddress}'`);
  appJs = appJs.replace(/const SEAL_VALIDATOR_ADDRESS = '.*'/, `const SEAL_VALIDATOR_ADDRESS = '${svAddress}'`);
  appJs = appJs.replace(/const BRIDGE_NFT_ADDRESS = '.*'/, `const BRIDGE_NFT_ADDRESS = '${bnAddress}'`);
  fs.writeFileSync(path.join(__dirname, "..", "dapp", "src", "App.js"), appJs);
  console.log("📱 dApp updated with deployed addresses");
}

main().catch(console.error);
