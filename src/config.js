import {
    Address,
    SmartContract,
    ContractFunction,
    Balance,
} from "@elrondnetwork/erdjs";

import BigNumber from 'bignumber.js';

export default {

    minterAddress: new Address(
        "erd1qqqqqqqqqqqqqpgqctpl54xnmlj0j3sy6033jnyhy4rhtry287ns4kl8mn"
    ),
    contract: new SmartContract({ address: new Address("erd1qqqqqqqqqqqqqpgqctpl54xnmlj0j3sy6033jnyhy4rhtry287ns4kl8mn") }),
    getTotalTokensLeft: async function(proxy) {
        let scFct = new ContractFunction("getTotalTokensLeft");
        let res = await this.contract.runQuery(proxy, { func: scFct });

        const resultBuff = Buffer.from(res.returnData[0], "base64").toString("hex");
        return new BigNumber(resultBuff, 16).toString(10);
    },
    getNftPrice: async function(proxy) {
        let scFct = new ContractFunction("getNftPrice");
        let res = await this.contract.runQuery(proxy, { func: scFct });

        const resultBuff = Buffer.from(res.returnData[0], "base64").toString("hex");
        return Balance.fromString(new BigNumber(resultBuff, 16).toString(10)).toCurrencyString();
    }
}