<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "p-slider",
  props: {
    selected: {
      type: String,
    },
  },
  mounted() {
    this.updateChildren();
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    updateChildren() {
      let first = this.$children[0];
      let selected = this.selected || first.name;
      this.$children.forEach((vm) => {
        vm.selected = selected;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.g-slides {
  display: inline-flex;
  &-wrapper {
    position: relative;
  }
}
</style>