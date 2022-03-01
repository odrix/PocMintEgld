<template>
  <div class="range">
    <label>Already minted</label>
    <span>{{ qtyAlreadyMint }}</span
    >/
    <span>{{ qtyTotal }}</span>
  </div>
</template>

<script>
import config from "../config.js";

export default {
  data() {
    return {
      qtyTotal: 100,
      qtyAlreadyMint: 0,
    };
  },
  mounted() {
    this.refreshQty();
    setInterval(this.refreshQty, 1000 * 60 * 15);
  },
  methods: {
    async refreshQty() {
      this.qtyAlreadyMint = 100 - await config.getTotalTokensLeft(this.$erd.proxy);
    },
  },
};
</script>

<style scoped>
.range {
  display: flex;
  align-content: end;
  width: 120px;
  flex-wrap: wrap;
  justify-content: center;
}
label {
  display: block;
  margin: 3px;
}
</style>