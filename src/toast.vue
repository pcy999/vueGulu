<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "P-toast",
  methods: {},
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: $font-size;
  line-height: 1.8;
  height: $toast-height;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  display: flex;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
}
</style>
