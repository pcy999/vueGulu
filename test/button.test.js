const expect = chai.expect;
import Vue from "vue";
import Button from "../src/button";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Button", () => {
  //BDD 行为驱动测试

  it("存在.", () => {
    expect(Button).to.exist;
  });
  it("可以设置icon.", () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: "setting",
      },
    }).$mount();
    const useElement = vm.$el.querySelector("use");
    expect(useElement.getAttribute("xlink:href")).to.equal("#isetting");
    vm.$destroy();
  });
  it("可以设置loading.", () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: "setting",
        loading: true,
      },
    }).$mount();
    const useElements = vm.$el.querySelectorAll("use");
    expect(useElements.length).to.equal(1);
    expect(useElements[0].getAttribute("xlink:href")).to.equal("#iloading");
    vm.$destroy();
  });
  it("icon 默认的 order 是 1", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: "setting",
      },
    }).$mount(div);
    const icon = vm.$el.querySelector("svg");
    expect(getComputedStyle(icon).order).to.eq("1");
    vm.$el.remove();
    vm.$destroy();
  });
  it("设置 iconPosition 可以改变 order", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: "setting",
        iconPosition: "right",
      },
    }).$mount(div);
    const icon = vm.$el.querySelector("svg");
    expect(getComputedStyle(icon).order).to.eq("2");
    vm.$el.remove();
    vm.$destroy();
  });
  it("点击 button 触发 click 事件", () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: "setting",
      },
    }).$mount();

    const callback = sinon.fake();
    vm.$on("click", callback);
    vm.$el.click();
    expect(callback).to.have.been.called;
  });
});
