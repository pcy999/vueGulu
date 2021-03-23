<template>
  <div class="side">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "P-side",
};
</script>

<style lang="scss" scoped>
.side {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slider-enter-active,
.slider-leave-active {
  transition: all 0.5s;
}
.slider-enter,
.slider-leave-to {
}
</style>