import Vue from 'vue'
import App from './App.vue'
import VueErdJsPlugin from 'vue-erdjs'
// import { Address } from "@elrondnetwork/erdjs";

// const minterAddress = new Address("erd1qqqqqqqqqqqqqpgqctpl54xnmlj0j3sy6033jnyhy4rhtry287ns4kl8mn");

Vue.use(VueErdJsPlugin)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')