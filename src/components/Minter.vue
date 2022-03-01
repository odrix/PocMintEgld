<template>
<div class="mint">
  <button @click="mint" v-if="$erd.logged">Mint</button>

  <label>price : 
    <span>{{nftPrice}}</span>
  </label>
</div>
</template>

<script>
import {
  Balance,
  ContractFunction,
  GasLimit,
  Transaction,
  TransactionPayload,
//   NFTCreationTransaction,
//   TypedValue,
//   StringValue,
//   BigIntValue,
//   I64Value,
  U32Value,
//   I32Value
} from "@elrondnetwork/erdjs";

import config from '../config.js'

export default {
  data() {
    return {
      nftPrice: 0
    }
  },
  async mounted() {
    this.nftPrice = await config.getNftPrice(this.$erd.proxy);
  },
  methods: {
    mint() {
              let mintPayload = TransactionPayload
            .contractCall()
            .setFunction(new ContractFunction("mint"))
            .addArg(new U32Value(1))
            .build();

        const mintTransaction = new Transaction({
        sender: this.$erd.walletAddress,
        receiver: config.minterAddress,
        gasLimit: new GasLimit(100000000),
        value: Balance.egld(0.7),
        data: mintPayload,
      });
      //transaction.setNonce(account.nonce);

        this.$erd.providers.sendAndWatch(mintTransaction).then((res) => {
            console.log(res);
        });
    },
  },
};
</script>

<style scoped>
.mint {
  display: flex;
  flex-direction: column;
}

button {
  margin: 32px 32px 16px;
}

span {
  font-weight: bold;
}
</style>