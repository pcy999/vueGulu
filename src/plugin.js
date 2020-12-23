import Toast from "./toast.vue";
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      let Contructor = Vue.extend(Toast);
      let toast = new Contructor({
        propsData: toastOptions,
      });
      toast.$slots.default = message;
      toast.$mount();
      document.body.appendChild(toast.$el);
    };
  },
};
