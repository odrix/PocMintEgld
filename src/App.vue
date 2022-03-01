<template>
  <div id="app">
    <header>
      <img alt="Vue logo" src="./assets/logo.png" />
      <h1>1, 2, 3 my nft</h1>
      <div>
        <span v-if="$erd.logged">{{ $erd.obfuscatedWalletAddress }}</span>
        <button v-if="$erd.logged" @click="$erd.logout()">logout</button>
        <button v-else @click="openConnect">Connect</button>
      </div>
    </header>
    <div class="modalBackground" v-show="modalConnect"></div>
    <div class="modal" v-show="modalConnect">
      <vue-erdjs-connect></vue-erdjs-connect>
    </div>
    <main>
      <randomnft></randomnft>
      <qty></qty>
      <mint></mint>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import mint from "./components/Minter.vue";
import randomnft from "./components/RandomNFT.vue";
import qty from "./components/RangeQuantity.vue";

export default {
  name: "App",
  components: {
    mint,
    randomnft,
    qty,
  },
  data() {
    return {
      modalConnect: false,
    };
  },
  methods: {
    openConnect() {
      this.modalConnect = !this.modalConnect;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

header {
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 12px 56px 12px;
  margin-bottom: 50px;
  border-bottom: solid 1px #666;
}

header img {
  height: 100%;
}

header button {
  padding: 6px 16px;
}

header div {
  display: flex;
  flex-direction: column;
}

.modal {
  position: absolute;
  background-color: #ccc;
  left: 25%;
  width: 50%;
  padding: 32px 16px;
}

.modalBackground {
  position: absolute;
  padding: 16px;
  width: 100%;
  height: calc(100vh - 114px);
  background-color: black;
  opacity: 0.76;
  top: 114px;
  box-sizing: border-box;
}

main {
  display: flex;
  width: 80%;
  max-width: 1200px;
  padding: 32px 12px;
  margin: 0 auto;
  justify-content: space-around;
  /* background-color:  #6ee; */
}
</style>
