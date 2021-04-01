<template>
  <div class="g-sliders-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "p-slides-item",
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>