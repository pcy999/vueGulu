import Toast from "./toast.vue";

let currentToast;

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions) {
      if (currentToast) {
        currentToast.close();
      }
      currentToast = creatToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null;
        },
      });
    };
  },
};

function creatToast({ Vue, message, propsData, onClose }) {
  let Contructor = Vue.extend(Toast);
  let toast = new Contructor({ propsData });
  toast.$slots.default = message;
  toast.$mount();
  toast.$on("close", onClose);
  document.body.appendChild(toast.$el);
  return toast;
}
