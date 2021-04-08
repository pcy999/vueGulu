<template>
  <div class="g-nav-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "p-nav-item",
  props: {
    name: {
      type: String,
      require: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.g-nav-item {
  padding: 10px 20px;
}
</style>