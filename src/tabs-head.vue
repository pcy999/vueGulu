<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
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
    this.eventBus.$on("update:selected", (item, name) => {
      console.log(item, name);
    });
  },
};
</script>

<style lang="scss" scoped>
$blue: blue;
$height: 40px;
.tabs-head {
  position: relative;
  display: flex;
  height: $height;
  justify-content: flex-start;
  & > .line {
    width: 100px;
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
  }
  & > .actions {
    margin-left: auto;
  }
}
</style>