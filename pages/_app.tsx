import type { AppProps } from "next/app";

import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { GeistProvider, CssBaseline } from "@geist-ui/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  // Supported ethereum chains
  const supportedChainIds = [80001];

  // Connector support: metamask and wallet connect
  const connectors = {
    injected: {},
  };

  return (
    <GeistProvider>
      <ThirdwebWeb3Provider
        connectors={connectors}
        supportedChainIds={supportedChainIds}
      >
        <CssBaseline />
        <Component {...pageProps} />
      </ThirdwebWeb3Provider>
    </GeistProvider>
  );
}

export default MyApp;
