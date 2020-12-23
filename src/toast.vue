<template>
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
</template>

<script>
export default {
  name: "P-toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
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
      default: false,
    },
  },
  mounted() {
    this.updateStyles();
    this.execAutoClose();
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay);
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
.toast {
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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
</style>
