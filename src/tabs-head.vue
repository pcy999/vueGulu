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
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.transform = `translateX(${left}px)`;
    });
  },
};
</script>

<style lang="scss" scoped>
$blue: blue;
$border-color: #ddd;
$height: 40px;
.tabs-head {
  position: relative;
  display: flex;
  height: $height;
  justify-content: flex-start;
  border-bottom: 1px solid $border-color;
  & > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }
  & > .actions {
    display: flex;
    align-items: center;
    margin-left: auto;
    padding: 0 1em;
  }
}
</style>