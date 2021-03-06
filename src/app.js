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
import Tabs from "./tabs.vue";
import TabsBody from "./tabs-body.vue";
import TabsHead from "./tabs-head.vue";
import TabsItem from "./tabs-item.vue";
import TabsPane from "./tabs-pane.vue";
import popover from "./popover.vue";
import Collapse from "./collapse.vue";
import CollapseItem from "./collapse-item.vue";
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
Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-body", TabsBody);
Vue.component("g-tabs-head", TabsHead);
Vue.component("g-tabs-item", TabsItem);
Vue.component("g-tabs-pane", TabsPane);
Vue.component("g-popover", popover);
Vue.component("g-collapse", Collapse);
Vue.component("g-collapse-item", CollapseItem);
Vue.use(plugin);
new Vue({
  el: "#app",
  data() {
    return {
      selectedTab: '1'
    }
  },
  methods: {},
});
