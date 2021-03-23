<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "P-tabs-body",
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", (name) => {
      // console.log(name);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>