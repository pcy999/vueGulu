const expect = chai.expect;
import Vue from "vue";
import Input from "../src/input.vue";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Input", () => {
  //BDD 行为驱动测试
  it("存在", () => {
    expect(Input).to.exist;
  });

  describe("props", () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(function() {
      vm.$destroy();
    });
    it("接收 value", () => {
      vm = new Constructor({
        propsData: {
          value: "1234",
        },
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.value).to.equal("1234");
    });

    it("接收 disabled", () => {
      vm = new Constructor({
        propsData: {
          disabled: true,
        },
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.disabled).to.equal(true);
    });

    it("接收 readOnly", () => {
      vm = new Constructor({
        propsData: {
          readOnly: true,
        },
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.readOnly).to.equal(true);
    });

    it("接收 error", () => {
      vm = new Constructor({
        propsData: {
          error: "错误信息",
        },
      }).$mount();
      const useElement = vm.$el.querySelector("use");
      expect(useElement.getAttribute("xlink:href")).to.equal("#ierror");
      const erroeMessage = vm.$el.querySelector(".error-meassage");
      expect(erroeMessage.innerText).to.equal("错误信息");
    });
  });

  describe("事件", () => {
    const Constructor = Vue.extend(Input);
    let vm;
    afterEach(function() {
      vm.$destroy();
    });
    it("支持 change/input/focus/blur 事件", () => {
      ["change", "input", "focus", "blue"].forEach((eventName) => {
        vm = new Constructor({}).$mount();
        const callback = sinon.fake();
        vm.$on(eventName, callback);
        let event = new Event(eventName);
        let inputElement = vm.$el.querySelector(eventName);
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith(event);
      });
    });
  });
});
