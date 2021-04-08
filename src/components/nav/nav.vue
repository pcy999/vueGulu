<template>
  <div class="g-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "p-nav",
  props: {
    selected: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.items.forEach((element) => {
      if (this.selected.indexOf(element.name) > -1) {
        element.selected = true;
      } else {
        element.selected = false;
      }
    });
  },
  computed: {
    items() {
      return this.$children.filter((vm) => vm.$options.name === "p-nav-item");
    },
  },
};
</script>

<style lang="scss" scoped>
.g-nav {
  display: flex;
}
</style>