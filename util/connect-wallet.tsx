import { Button, ButtonGroup, Tooltip } from "@geist-ui/react";
import { useWeb3 } from "@3rdweb/hooks";

const ConnectWallet = () => {
  const { address, chainId, balance, connectWallet, disconnectWallet } =
    useWeb3();

  return address ? (
    <ButtonGroup type="success-light" style={{ margin: "20px" }}>
      <Button>
        <Tooltip text={address} placement="bottomEnd">
          {address.substring(0, 5) +
            "xxx" +
            address.substring(address.length - 5, address.length)}
        </Tooltip>
      </Button>
      <Button>{balance?.formatted + " MATIC"}</Button>
    </ButtonGroup>
  ) : (
    <Button
      auto
      type="success-light"
      style={{ margin: "20px" }}
      onClick={() => connectWallet("injected")}
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectWallet;
