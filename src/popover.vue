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
          console.log(this.$refs.contentWrapper);
          document.body.appendChild(this.$refs.contentWrapper);
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
  bottom: 100%;
  left: 0;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>
