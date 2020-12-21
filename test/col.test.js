const expect = chai.expect;
import Vue from "vue";
import Col from "../src/col.vue";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Col", () => {
  it("存在.", () => {
    expect(Col).to.exist;
  });
  it("接受 span 属性.", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        span: 1,
      },
    }).$mount(div);
    const element = vm.$el;
    expect(element.classList.contains("col-1")).to.eq(true);
    div.remove();
    vm.$destroy();
  });
  it("接受 offset 属性.", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        offset: 1,
      },
    }).$mount(div);
    const element = vm.$el;
    expect(element.classList.contains("offset-1")).to.eq(true);
    div.remove();
    vm.$destroy();
  });
  it("接受 pc 属性.", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Col);
    const vm = new Constructor({
      propsData: {
        pc: { span: 1, offset: 2 },
      },
    }).$mount(div);
    const element = vm.$el;
    expect(element.classList.contains("col-pc-1")).to.eq(true);
    expect(element.classList.contains("offset-pc-2")).to.eq(true);
    div.remove();
    vm.$destroy();
  });
});
