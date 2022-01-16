import { NFTMetadata } from "@3rdweb/sdk";
import type { NextApiRequest, NextApiResponse } from "next";

import { nft } from "../../util/thirdweb";

type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NFTMetadata[] | Error>
) {
  let account = <string>req.query.address;

  try {
    // Get all NFTs
    let nftMetadata;
    if (account == undefined) {
      nftMetadata = await nft.getAll();
    } else {
      nftMetadata = await nft.getOwned(account);
    }
    res.status(200).json(nftMetadata);
  } catch (error) {
    console.error("Failed to fetch all NFTS", error);
    res.status(500).json({ error: "Failed to fetch all NFTs" });
  }
}
