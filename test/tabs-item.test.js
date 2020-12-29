const expect = chai.expect;
import Vue from "vue";
import Tabs from "../src/tabs.vue";
import TabsBody from "../src/tabs-body.vue";
import TabsHead from "../src/tabs-head.vue";
import TabsItem from "../src/tabs-item.vue";
import TabsPane from "../src/tabs-pane.vue";
Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-item", TabsItem);
Vue.component("g-tabs-pane", TabsPane);
Vue.component("g-tabs-body", TabsBody);
Vue.component("g-tabs-head", TabsHead);
Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("TabsItem", () => {
  it("存在.", () => {
    expect(TabsItem).to.exist;
  });
  it("接受 name 属性", () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        name: "xxx",
      },
    }).$mount();
    expect(vm.$el.getAttribute("data-name")).to.eq("xxx");
    vm.$el.remove();
    vm.$destroy();
  });
  it("接受 isShow 属性", () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        isShow: false,
      },
    }).$mount();
    // expect(vm.$el).to.not.exist;
    vm.$el.remove();
    vm.$destroy();
  });
});
