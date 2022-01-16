import { ethers } from "ethers";
import { InfuraProvider } from "@ethersproject/providers";
import { ThirdwebSDK } from "@3rdweb/sdk";

// Create provider by specifying API keys
const provider = new InfuraProvider("maticmum", {
  projectId: process.env.INFURA_PROJECT_ID,
  projectSecret: process.env.INFURA_PROJECT_SECRET,
});

if (
  process.env.ADMIN_WALLET_PRIVATE_KEY == undefined ||
  process.env.APP_MODULE_ADDRESS == undefined ||
  process.env.NFT_MARKETPLACE_ADDRESS == undefined ||
  process.env.NFT_COLLECTION_ADDRESS == undefined ||
  process.env.NFT_TEST_COLLECTION_ADDRESS == undefined
) {
  console.error(
    "Missing ADMIN_WALLET_PRIVATE_KEY or APP_MODULE_ADDRESS environment variable"
  );
  process.exit(1);
}

// Create wallet by specifying private key
const wallet = new ethers.Wallet(
  process.env.ADMIN_WALLET_PRIVATE_KEY,
  provider
);

// Create 3rdweb SDK instance
const sdk = new ThirdwebSDK(wallet);
const app = sdk.getAppModule(process.env.APP_MODULE_ADDRESS);

const nft = sdk.getNFTModule(process.env.NFT_COLLECTION_ADDRESS);
const nftTest = sdk.getNFTModule(process.env.NFT_TEST_COLLECTION_ADDRESS);

const marketplace = sdk.getMarketplaceModule(
  process.env.NFT_MARKETPLACE_ADDRESS
);

export { app, sdk, nft, nftTest, marketplace };
