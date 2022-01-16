import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import {
  Button,
  Display,
  Grid,
  Input,
  Text,
  Toggle,
  Spacer,
} from "@geist-ui/react";
import { useWeb3 } from "@3rdweb/hooks";
import { useEffect, useState } from "react";

import Navbar from "../util/navbar";

const CodeEditor = dynamic(() => import("../util/code-editor"), {
  ssr: false,
});

const Mint: NextPage = () => {
  const router = useRouter();
  const { address, provider, connectWallet } = useWeb3();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [width, setWidth] = useState("500");
  const [height, setHeight] = useState("500");
  const [showSnippet, setShowSnippet] = useState(false);
  const [language, setLanguage] = useState("html");
  const [code, setCode] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (address == undefined) {
      connectWallet("injected");
    }
  }, []);

  const mintNFT = async () => {
    setShowLoading(true);
    await fetch("/api/mint", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address,
        name,
        description,
        width,
        height,
        showSnippet,
        language: language,
        code: btoa(code),
      }),
    });
    router.push("my_nfts");
  };

  return (
    <div>
      <Head>
        <title>Mint | CodeDiamonds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Spacer h={3} />
      <Grid.Container justify="center" gap={0}>
        <Text h2>💰 Mint Your Own NFT!</Text>
        <Grid xs={24} justify="center" direction="column" alignItems="center">
          {address == undefined ? (
            <>
              <Spacer h={2} />
              <Text p>⚠️ Connect your Metamask wallet to mint NFT</Text>
            </>
          ) : (
            <>
              <Spacer h={2} />
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                scale={1.5}
                width="400px"
                placeholder="Name"
              />
              <Spacer h={1} />
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                scale={1.5}
                width="400px"
                placeholder="Description"
              />
              <Spacer h={1} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Input
                  htmlType="number"
                  min="250"
                  max="1000"
                  label="Width"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  scale={1.5}
                  width="190px"
                  placeholder="Width"
                />
                <Spacer w={1} />
                <Input
                  htmlType="number"
                  min="250"
                  max="1000"
                  label="Height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  scale={1.5}
                  width="190px"
                  placeholder="Height"
                />
              </div>
              <Spacer h={1} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "400px",
                  padding: "0 10px",
                  border: "1px solid #eaeaea",
                  borderRadius: "5px",
                }}
              >
                <Text p>Show Rendering</Text>
                <Spacer w={1} />
                <Toggle
                  checked={showSnippet}
                  onChange={(e: any) => setShowSnippet(e.target.checked)}
                />
                <Spacer w={1} />
                <Text p>Show Code Snippet</Text>
              </div>
              <Spacer h={2} />
              <CodeEditor
                mode={language}
                width={width + "px"}
                height={height + "px"}
                readOnly={false}
                value={code}
                onChange={(newValue: any) => setCode(newValue)}
                onModeChange={(newMode: any) => setLanguage(newMode)}
              />
              {showSnippet ? (
                <></>
              ) : (
                <Display shadow caption="Rendering of above code snippet">
                  <iframe
                    width={width}
                    height={height}
                    srcDoc={code}
                    style={{ border: 0, margin: "30px" }}
                  ></iframe>
                </Display>
              )}
              <Button
                loading={showLoading}
                scale={1.5}
                type="success-light"
                style={{ marginTop: "30px", marginBottom: "50px" }}
                onClick={mintNFT}
              >
                <Text b>MINT IT!</Text>
              </Button>
            </>
          )}
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Mint;
