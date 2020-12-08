import Vue from "vue";
import Button from "./button.vue";
Vue.component("g-button", Button);
console.log(Button);
new Vue({
  el: "#app",
});
