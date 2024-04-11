import { BigNumber } from "ethers";
import { MOTE_RATE } from "../../constants";
import Big from "big.js";
import { CasperClient, CasperServiceByJsonRPC } from "casper-js-sdk";

export const toMotes = (amount: number) => {
  try {
    const bigAmount = Big(amount)
      .times(MOTE_RATE)
      .round(0, Big.roundDown)
      .toString();
    return BigNumber.from(bigAmount);
  } catch (error) {
    return "-";
  }
};

export const fromMotes = (amount: number) => {
  try {
    const bigAmount = Big(amount).div(MOTE_RATE).toString();

    return bigAmount;
  } catch (error) {
    return "-";
  }
};
