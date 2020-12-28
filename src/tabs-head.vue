<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "P-tabs-head",
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", (name) => {
      console.log(name);
    });
  },
};
</script>

<style lang="scss" scoped>
.tabs-head {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > .actions {
    margin-left: auto;
  }
}
</style>