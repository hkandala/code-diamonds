import { Grid, Link } from "@geist-ui/react";
import { useRouter } from "next/router";

import ConnectWallet from "../util/connect-wallet";

const Navbar = () => {
  const router = useRouter();

  return (
    <Grid.Container>
      <Grid
        xs={24}
        justify="flex-end"
        alignItems="center"
        style={{ padding: "10px" }}
      >
        <Link
          href="explore"
          underline
          style={{ margin: "20px" }}
          className={router.pathname == "/explore" ? "active" : ""}
        >
          Explore
        </Link>
        <Link
          href="my_nfts"
          underline
          style={{ margin: "20px" }}
          className={router.pathname == "/my_nfts" ? "active" : ""}
        >
          My NFTs
        </Link>
        <Link
          href="mint"
          underline
          style={{ margin: "20px" }}
          className={router.pathname == "/mint" ? "active" : ""}
        >
          Mint
        </Link>
        <ConnectWallet />
      </Grid>
    </Grid.Container>
  );
};

export default Navbar;
