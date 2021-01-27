<template>
  <div class="popover" @click="xxx">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
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
          let eventHandle = () => {
            this.visible = false;
            console.log('visible 变成false');
            document.removeEventListener('click', eventHandle);
          };
          document.addEventListener('click', eventHandle);
        }, 0);
      }
    },
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
