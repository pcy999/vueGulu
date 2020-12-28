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
$height: 40px;
.tabs-head {
  display: flex;
  height: $height;
  justify-content: flex-start;
  & > .actions {
    margin-left: auto;
  }
}
</style>