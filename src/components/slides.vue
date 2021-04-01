<template>
  <div class="g-sliders">
    <div class="g-sliders-window"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "p-slider",
  mounted() {
    console.log(this);
  },
};
</script>

<style lang="scss" scoped>
</style>