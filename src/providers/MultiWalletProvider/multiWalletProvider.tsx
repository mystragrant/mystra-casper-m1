import { CLPublicKey, DeployUtil } from "casper-js-sdk";
import { Wallet } from "ethers";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { casperClient } from "../../constants";
import { IParent } from "../../shared/types";
import { useCasperWallet } from "../CasperWalletProvider/casperWalletProvider";
import {
  checkCasperSignerInstalled,
  checkCasperWalletInstalled,
  checkMetamaskInstalled,
} from "./helpers";
import { emptyState, IState, Reducer } from "./reducer";
import {
  CasperDashConnector,
  CasperSignerConnector,
  CasperWalletConnector,
  useAccount,
  useConnect,
  useDisconnect,
  useSign,
  useSignMessage,
} from "@casperdash/usewallet";

interface IContext extends IState {
  signCasper: (deployJson: any) => any;
  signMessageCasper: (message: any, pubKey: string) => any;
  getCasperKey: () => Promise<string>;
  requestConnection: () => any;
  selectCasperProvider: (provider: WalletProvider | null) => any;
  putDeployUniversal: (
    signRes: any,
    deploy: any,
    publicKey: string,
  ) => Promise<any>;
}

const emptyContext: IContext = {
  ...emptyState,
  signCasper: (deployJson: string) => {},
  signMessageCasper: (message: string) => {},
  requestConnection: () => {},
  selectCasperProvider: (provider: WalletProvider | null) => {},
  getCasperKey: async () => new Promise(() => {}),
  putDeployUniversal: (signRes: any, deploy: any, publicKey: string) =>
    new Promise(() => {}),
};

const Context = createContext(emptyContext);

export enum WalletProvider {
  CASPER_SIGNER,
  CASPER_WALLET,
  METAMASK,
  CASPER_DASH,
}

export const MultiWalletProvider = ({ children }: IParent) => {
  const [state, dispatch] = useReducer(Reducer, emptyContext);

  const {
    sign: signCasperWallet,
    signMessage: signMessageCasperWallet,
    activeKey: casperWalletKey,
    isConnected: isCasperWalletConnected,
    requestConnection: requestCasperWalletConnection,
  } = useCasperWallet();

  const { signMessageAsync } = useSignMessage({});
  const { signAsync } = useSign({});

  const { publicKey: casperDashPublicKey } = useAccount();

  // Check for installed wallets
  useEffect(() => {
    window.addEventListener("load", checkWalletsInstalled);
    return () => {
      window.removeEventListener("load", checkWalletsInstalled);
    };
  }, []);

  const signMessageCasper = (message: string, pubKey: string) => {
    if (state.selectedCasperProvider == WalletProvider.CASPER_SIGNER) {
      return window.casperlabsHelper.signMessage(message, pubKey);
    } else if (state.selectedCasperProvider == WalletProvider.CASPER_WALLET) {
      return signMessageCasperWallet(message, pubKey);
    } else if (state.selectedCasperProvider == WalletProvider.CASPER_DASH) {
      return signMessageAsync({
        message: message,
        signingPublicKeyHex: casperDashPublicKey ?? "",
      });
    }
  };

  const signCasper = (deployJson: any) => {
    return signAsync({
      deploy: deployJson,
      signingPublicKeyHex: casperDashPublicKey ?? "",
      targetPublicKeyHex: casperDashPublicKey ?? "",
    });
  };

  const getCasperKey = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      resolve(casperDashPublicKey ?? "");
    });
  };

  const selectCasperProvider = (provider: WalletProvider | null) => {
    dispatch({
      selectedCasperProvider: provider,
    });
  };

  const checkWalletsInstalled = () => {
    dispatch({
      metamaskInstalled: checkMetamaskInstalled(),
      casperWalletInstalled: checkCasperWalletInstalled(),
      casperSignerInstalled: checkCasperSignerInstalled(),
    });
  };

  useEffect(() => {
    if (state.selectedCasperProvider == WalletProvider.CASPER_SIGNER) {
      window.casperlabsHelper.getActivePublicKey().then((res) => {
        dispatch({
          selectedCasperPublicKey: res,
        });
      });
    } else if (state.selectedCasperProvider == WalletProvider.CASPER_WALLET) {
      (window as any)
        .CasperWalletProvider()
        .getActivePublicKey()
        .then((res: string) => {
          dispatch({
            selectedCasperPublicKey: res,
          });
        });
    } else if (state.selectedCasperProvider == WalletProvider.CASPER_DASH) {
      dispatch({
        selectedCasperPublicKey: casperDashPublicKey,
      });
    }
  }, [state.selectedCasperProvider]);

  useEffect(() => {
    const wallets = [];
    // if (state.casperWalletInstalled)
    wallets.push(WalletProvider.CASPER_WALLET);
    //if (state.casperSignerInstalled)
    wallets.push(WalletProvider.CASPER_SIGNER);

    dispatch({
      installedCasperWallets: wallets,
    });
  }, [state.casperSignerInstalled, state.casperWalletInstalled]);

  useEffect(() => {
    if (state.installedCasperWallets.length == 1) {
      dispatch({
        selectedCasperProvider: state.installedCasperWallets[0],
      });
    } else {
      dispatch({
        selectedCasperProvider: null,
      });
    }
  }, [state.installedCasperWallets]);

  useEffect(() => {
    console.log("prov", state.selectedCasperProvider);
  }, [state.selectedCasperProvider]);

  const { connect: connectWithCasperDash } = useConnect({
    connector: new CasperDashConnector(),
  });

  const { connect: connectWithCasperWallet } = useConnect({
    connector: new CasperWalletConnector(),
  });

  const requestConnection = () => {
    if (
      state.selectedCasperProvider == WalletProvider.CASPER_SIGNER ||
      (state.installedCasperWallets.length == 1 &&
        state.installedCasperWallets[0] == WalletProvider.CASPER_SIGNER)
    ) {
      return window.casperlabsHelper.requestConnection();
    } else if (
      state.selectedCasperProvider == WalletProvider.CASPER_WALLET ||
      (state.installedCasperWallets.length == 1 &&
        state.installedCasperWallets[0] == WalletProvider.CASPER_WALLET)
    ) {
      return connectWithCasperWallet();
    } else if (
      state.selectedCasperProvider == WalletProvider.CASPER_DASH ||
      (state.installedCasperWallets.length == 1 &&
        state.installedCasperWallets[0] == WalletProvider.CASPER_DASH)
    ) {
      return connectWithCasperDash();
    }
  };

  const putDeployUniversal = (signRes: any, deploy: any, publicKey: string) => {
    if (signRes.deploy) {
      const deployObject = DeployUtil.deployFromJson(signRes);
      console.log(deployObject);

      return casperClient.putDeploy(deployObject.val as any);
    } else if (signRes.signature) {
      const signedDeploy = DeployUtil.setSignature(
        deploy,
        signRes.signature,
        CLPublicKey.fromHex(publicKey),
      );

      return casperClient.putDeploy(signedDeploy);
    } else {
      return new Promise(() => {});
    }
  };

  return (
    <Context.Provider
      value={{
        ...state,
        signCasper,
        getCasperKey,
        selectCasperProvider,
        putDeployUniversal,
        signMessageCasper,
        requestConnection,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useMultiWalletProvider = () => useContext(Context);
