<template>
  <div class="popover" @click.stop="xxx">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      v-if="visible"
      @click.stop
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'P-popover',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    xxx() {
      this.visible = !this.visible;
      if (this.visible === true) {
        setTimeout(() => {
          document.body.appendChild(this.$refs.contentWrapper);
          let {
            width,
            height,
            top,
            left,
          } = this.$refs.triggerWrapper.getBoundingClientRect();
          this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
          this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
          let eventHandle = () => {
            this.visible = false;
            document.removeEventListener('click', eventHandle);
          };
          document.addEventListener('click', eventHandle);
        }, 0);
      }
    },
  },
  mounted() {
    console.log(this.$refs);
  },
};
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>
