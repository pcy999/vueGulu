import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import ButtonGroup from "./button-group.vue";
import Input from "./input.vue";
import Row from "./row.vue";
import Col from "./col.vue";
import Layout from "./layout.vue";
import Header from "./header.vue";
import Content from "./content.vue";
import Side from "./side.vue";
import Footer from "./footer.vue";
import plugin from "./plugin";
Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-input", Input);
Vue.component("g-row", Row);
Vue.component("g-col", Col);
Vue.component("g-layout", Layout);
Vue.component("g-header", Header);
Vue.component("g-content", Content);
Vue.component("g-side", Side);
Vue.component("g-footer", Footer);
Vue.use(plugin);
new Vue({
  el: "#app",
  data: {
    loading1: false,
    message: "测试双向绑定",
  },
  methods: {
    showToast() {
      this.$toast("<h1>我是message</h1>", {
        // enableHtml: true,
        autoCloseDelay: 50000,
        closeButton: {
          text: "知道了",
          callback(a) {
            console.log("hahahah");
          },
        },
      });
    },
  },
});
