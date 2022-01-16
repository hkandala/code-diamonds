import type { NextPage } from "next";
import Head from "next/head";
import { Grid, Spacer, Spinner, Text } from "@geist-ui/react";

import Navbar from "../util/navbar";
import { useEffect, useState } from "react";
import NftCard from "../util/nft-card";

const Explore: NextPage = () => {
  const [nftList, setNftList] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  const fetchAllNfts = async () => {
    const rawResponse = await fetch("/api/get_all_nfts");
    const response = await rawResponse.json();
    setNftList(response);
    setShowLoading(false);
  };

  useEffect(() => {
    fetchAllNfts();
  }, []);

  return (
    <div>
      <Head>
        <title>Explore | CodeDiamonds</title>
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
        <Text h2>🔍 Explore!</Text>
        <Spacer h={2} />
        {showLoading ? (
          <>
            <Spacer h={2} />
            <Spinner scale={4} />
            <Spacer h={1} />
          </>
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
      </Grid.Container>
      <Spacer h={10} />
    </div>
  );
};

export default Explore;
