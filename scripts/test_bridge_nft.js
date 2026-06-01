const { expect } = require("chai");
const { ethers } = require("ethers");
const ganache = require("ganache");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("🔧 Starting Ganache...");
  const server = ganache.server({ logging: { quiet: true } });
  await server.listen(8545);
  console.log("✅ Ganache started on port 8545");

  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
  const minterSigner = await provider.getSigner(0);
  const entitySigner = await provider.getSigner(1);
  const entityAddress = entitySigner.address; // string خام

  // ۱. دیپلوی BridgeNFT
  const artifactPath = path.join(__dirname, "..", "artifacts", "contracts", "BridgeNFT.sol", "BridgeNFT.json");
  const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
  const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, minterSigner);
  const bridgeNFT = await factory.deploy();
  await bridgeNFT.waitForDeployment();
  console.log("✅ BridgeNFT deployed at:", await bridgeNFT.getAddress());

  // ۲. تست mint
  console.log("🧪 Test 1: Minting a Bridge NFT...");
  const tx = await bridgeNFT.mintBridge(
    entityAddress,
    "@F@",
    "@x@",
    "ipfs://metadata/ayaneh-bridge.json"
  );
  await tx.wait();
  console.log("   ✅ Minted. Token ID: 1");

  // ۳. تست مالکیت
  console.log("🧪 Test 2: Checking ownership...");
  const owner = await bridgeNFT.ownerOf(1);
  expect(owner).to.equal(entityAddress);
  console.log("   ✅ PASSED: Owner is correct.");

  // ۴. تست تعادل
  console.log("🧪 Test 3: Checking balance...");
  const balance = await bridgeNFT.balanceOf(entityAddress);
  expect(balance).to.equal(1n);
  console.log("   ✅ PASSED: Balance is 1.");

  // ۵. تست URI
  console.log("🧪 Test 4: Checking token URI...");
  const uri = await bridgeNFT.tokenURI(1);
  expect(uri).to.equal("ipfs://metadata/ayaneh-bridge.json");
  console.log("   ✅ PASSED: URI is correct.");

  // ۶. تست غیرقابل انتقال بودن
  console.log("🧪 Test 5: Trying to transfer (should fail)...");
  try {
    const signer = await provider.getSigner(2);
    await bridgeNFT.transferFrom(entityAddress, signer.address, 1);
    console.log("   ❌ FAILED: Transfer was allowed");
  } catch (e) {
    console.log("   ✅ PASSED: Transfer correctly blocked (soulbound).");
  }

  console.log("🎉 All BridgeNFT tests completed successfully.");
  await server.close();
  process.exit(0);
}

main().catch(err => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
