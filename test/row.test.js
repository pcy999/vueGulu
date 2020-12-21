const expect = chai.expect;
import Vue from "vue";
import Row from "../src/row.vue";
import Col from "../src/col.vue";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Row", () => {
  it("存在.", () => {
    expect(Row).to.exist;
  });
  it("接受 gutter 属性.", (done) => {
    Vue.component("g-row", Row);
    Vue.component("g-col", Col);
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
      <g-row gutter='20'>
        <g-col span='12'></g-col>
        <g-col span='12'></g-col>
      </g-row> 
    `;
    const vm = new Vue({
      el: div,
    });
    setTimeout(() => {
      const row = vm.$el.querySelector(".row");
      expect(getComputedStyle(row).marginRight).to.equal("-10px");
      expect(getComputedStyle(row).marginLeft).to.equal("-10px");
      const cols = vm.$el.querySelectorAll(".col");
      expect(getComputedStyle(cols[0]).paddingLeft).to.equal("10px");
      expect(getComputedStyle(cols[1]).paddingRight).to.equal("10px");
      done();
      vm.$el.remove();
      vm.$destroy();
    });
  });
  it("接受 align 属性", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Row);
    const vm = new Constructor({
      propsData: {
        align: "center",
      },
    }).$mount(div);
    const element = vm.$el;
    expect(getComputedStyle(element).justifyContent).to.equal("center");
    div.remove();
    vm.$destroy();
  });
});
