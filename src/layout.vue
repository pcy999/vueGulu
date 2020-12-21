<template>
  <div class="layout" :class="layoutClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "P-layout",
  data() {
    return {
      layoutClasses: {
        hasSide: false,
      },
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "P-side") {
        this.layoutClasses.hasSide = true;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  &.hasSide {
    flex-direction: row;
  }
}
</style>