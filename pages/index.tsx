import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

import applyLandingPageBackground from "../util/landing-page";
import { Text, Grid, Link, Spacer, Button } from "@geist-ui/react";
import Navbar from "../util/navbar";

const Home: NextPage = () => {
  useEffect(() => {
    applyLandingPageBackground({ el: "background" });
  }, []);

  return (
    <>
      <canvas id="background"></canvas>
      <div>
        <Head>
          <title>CodeDiamonds</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Grid.Container justify="center" gap={2}>
          <Spacer h={8} />
          <Grid xs={24} justify="center">
            <Text h1 style={{ fontSize: "55px" }}>
              💎 CodeDiamonds
            </Text>
          </Grid>
          <Grid xs={24} justify="center">
            <Text p style={{ fontSize: "25px", color: "#444" }}>
              An NFT Marketplace for artwork made with code!
            </Text>
          </Grid>
          <Grid xs={24} justify="center">
            <Button shadow type="secondary-light">
              <Link href="explore">Explore</Link>
            </Button>
            <Spacer w={2} />
            <Button shadow type="secondary-light">
              <Link href="mint">Mint Your Own NFT</Link>
            </Button>
          </Grid>
        </Grid.Container>
      </div>
    </>
  );
};

export default Home;
