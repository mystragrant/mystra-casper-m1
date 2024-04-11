import { createRecipientAddress } from "casper-js-client-helper/dist/helpers/lib";
import { contractHashToByteArray } from "casper-js-client-helper/dist/helpers/utils";
import {
  CLPublicKey,
  CLValueBuilder,
  DeployUtil,
  RuntimeArgs,
} from "casper-js-sdk";
import { DEPLOY_TTL_MS, NETWORK_NAME } from "../../constants";
import { toMotes } from "../../helpers/misc";
import { Buffer } from "buffer";

export enum CASPER_NFT_TYPES {
  CEP47,
  CEP78,
}

export const getTransferDeploy = (
  publicKey: string,
  recipient: string,
  nftContract: string,
  tokenId: string,
  type: CASPER_NFT_TYPES,
) => {
  try {
    console.log(recipient, typeof recipient);

    const recipientPK = CLPublicKey.fromHex(recipient);
    console.log(recipientPK, typeof recipientPK);

    const pbKey = CLPublicKey.fromHex(publicKey);
    const mapping: any = {
      recipient: createRecipientAddress(recipientPK),
    };

    let entryPoint = "transfer";
    if (type == CASPER_NFT_TYPES.CEP47) {
      mapping["token_ids"] = CLValueBuilder.list([
        CLValueBuilder.u256(tokenId),
      ]);
    } else {
      entryPoint = "transfer_token";
      mapping["token_id"] = CLValueBuilder.string(tokenId);
    }

    console.log(mapping);
    const addr = createRecipientAddress(recipientPK);

    console.log(addr, typeof addr);

    const runtimeArgs = RuntimeArgs.fromMap({
      recipient: addr,
      token_ids: CLValueBuilder.list([CLValueBuilder.u256(tokenId)]),
    } as any);

    console.log("args", runtimeArgs);

    const deployParams = new DeployUtil.DeployParams(
      pbKey,
      NETWORK_NAME,
      1,
      DEPLOY_TTL_MS,
    );

    const payment = DeployUtil.standardPayment(toMotes(2.5));

    console.log(deployParams);
    console.log(runtimeArgs);
    console.log(payment);
    console.log(
      Uint8Array.from(Buffer.from(nftContract.replace("hash-", ""), "hex")),
    );

    const res = DeployUtil.makeDeploy(
      deployParams,
      DeployUtil.ExecutableDeployItem.newStoredContractByHash(
        Uint8Array.from(Buffer.from(nftContract.replace("hash-", ""), "hex")),
        entryPoint,
        runtimeArgs,
      ),
      payment,
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};
