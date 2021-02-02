<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
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
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  methods: {
    checkChildren() {
      if (this.$children.length === 0) {
        console &&
          console.warn &&
          console.warn(
            "tabs的子组件应该是tabs-head,tabs-body,但是你没有写子组件！"
          );
      }
    },
    selectTab() {
      this.$children.forEach((vm) => {
        if (vm.$options.name && vm.$options.name === "P-tabs-head") {
          vm.$children.forEach((child) => {
            if (child.name && child.name === this.selected) {
              this.eventBus.$emit("update:selected", this.selected, child);
            }
          });
        }
      });
    },
  },
  mounted() {
    this.checkChildren();
    this.selectTab();
  },
};
</script>

<style lang="scss" scoped>
</style>