import { NFTMetadata } from "@3rdweb/sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import { Blob, NFTStorage } from "nft.storage";

import { nft } from "../../util/thirdweb";

type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NFTMetadata | Error>
) {
  if (process.env.NFT_STORAGE_API_KEY == undefined) {
    res.status(500).json({
      error: "Missing NFT_STORAGE_API_KEY environment variable",
    });
    return;
  }

  let account = req.body.address;
  let name = req.body.name;
  let description = req.body.description;
  let code = req.body.code;
  let width = req.body.width;
  let height = req.body.height;
  let language = req.body.language;
  let showSnippet = req.body.showSnippet;

  try {
    // Initialise nft.storage
    const nftStorageClient = new NFTStorage({
      token: process.env.NFT_STORAGE_API_KEY,
    });

    // Prepare NFT data
    const nftData = {
      name,
      description,
      properties: {
        width,
        height,
        language,
        showSnippet,
      },
      code,
    };

    // Persist NFT Data to nft.storage
    const cid = await nftStorageClient.storeBlob(
      new Blob([JSON.stringify(nftData)])
    );

    // Mint NFT
    const nftMetadata = await nft.mintTo(account, "ipfs://" + cid);

    res.status(200).json(nftMetadata);
  } catch (error) {
    console.error("Failed to mint NFT", error);
    res.status(500).json({ error: "Failed to mint NFT" });
  }
}
