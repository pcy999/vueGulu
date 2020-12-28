<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "P-tabs",
  props: {
    selected: {
      type: String,
      require: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  created() {
    // this.$emit("updata:selected", "xx");
  },
};
</script>

<style lang="scss" scoped>
</style>