<template>
  <div class="wrapper" :class="positionClasses">
    <div class="toast" ref="toastWrapper">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default"></div>
      <span
        class="close"
        v-if="closeButton"
        @click="closeButtonClick"
        ref="closeSpan"
      >
        {{ closeButton.text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "P-toast",
  props: {
    // autoClose: {
    //   type: Boolean,
    //   default: true,
    // },
    autoClose: {
      type: Number,
      default: 5000,
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
    enableHtml: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      defualt: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      },
    },
  },
  mounted() {
    this.updateStyles();
    this.execAutoClose();
  },
  computed: {
    positionClasses() {
      return {
        [`position-${this.position}`]: true,
      };
    },
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose);
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.closeSpan.style.height =
          this.$refs.toastWrapper.getBoundingClientRect().height + "px";
        this.$refs.closeSpan.style.lineHeight = this.$refs.closeSpan.style.height;
      });
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    closeButtonClick() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function")
        this.closeButton.callback(this);
    },
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$animation-duration: 500ms;
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .toast {
      animation: slide-down $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      animation: slide-up $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    .toast {
      animation: slide-down $animation-duration;
    }
  }
  .toast {
    font-size: $font-size;
    line-height: 1.8;
    min-height: $toast-min-height;
    color: white;
    display: flex;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    padding: 0.5em 16px;
    .close {
      padding-left: 16px;
      border-left: 1px solid #666;
      margin-left: 16px;
      flex-shrink: 0;
    }
  }
}
</style>
