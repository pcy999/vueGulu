import Vue from "vue";
import button from "./button.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(button),
}).$mount("#app");
