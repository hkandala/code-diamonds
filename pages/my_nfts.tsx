import type { NextPage } from "next";
import Head from "next/head";
import { Grid, Link, Spinner, Spacer, Text } from "@geist-ui/react";
import { useWeb3 } from "@3rdweb/hooks";
import { useEffect, useState } from "react";

import Navbar from "../util/navbar";
import NftCard from "../util/nft-card";

const MyNFTs: NextPage = () => {
  const { address, provider, connectWallet } = useWeb3();
  const [nftList, setNftList] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  const fetchAllNfts = async () => {
    const rawResponse = await fetch("/api/get_all_nfts?address=" + address);
    const response = await rawResponse.json();
    setNftList(response);
    setShowLoading(false);
  };

  useEffect(() => {
    if (address == undefined) {
      connectWallet("injected");
    }
  }, []);

  useEffect(() => {
    if (address != undefined) {
      fetchAllNfts();
    }
  }, [address]);

  return (
    <div>
      <Head>
        <title>My NFTs | CodeDiamonds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Spacer h={3} />
      <Grid.Container
        justify="center"
        direction="column"
        alignItems="center"
        gap={2}
      >
        <Text h2>🎨 My NFTs!</Text>
        <Spacer h={2} />
        {address == undefined ? (
          <Text p>⚠️ Connect your Metamask wallet to view your NFTs</Text>
        ) : (
          <>
            {showLoading ? (
              <>
                <Spacer h={2} />
                <Spinner scale={4} />
                <Spacer h={1} />
              </>
            ) : (
              <>
                {nftList.length == 0 ? (
                  <Text p>
                    😞 No NFTs available in your account, create one by clicking{" "}
                    <Link href="mint" color>
                      here
                    </Link>
                  </Text>
                ) : (
                  <Grid xs={24} md={20} justify="center">
                    <Grid.Container
                      justify="flex-start"
                      gap={2}
                      style={{ padding: "0 30px" }}
                    >
                      {nftList.map((nft: any) => (
                        <NftCard
                          key={nft.id}
                          name={nft.name}
                          description={nft.description}
                          width={nft.properties.width}
                          height={nft.properties.height}
                          cardWidth={300}
                          cardHeight={300}
                          showSnippet={nft.properties.showSnippet}
                          language={nft.properties.language}
                          code={nft.code}
                          style={{ width: "340px", height: "340px" }}
                        />
                      ))}
                    </Grid.Container>
                  </Grid>
                )}
              </>
            )}
          </>
        )}
      </Grid.Container>
      <Spacer h={10} />
    </div>
  );
};

export default MyNFTs;
