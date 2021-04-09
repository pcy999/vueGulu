<template>
  <div class="g-nav" :class="{ vertical }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "p-nav",
  provide() {
    return {
      root: this,
      vertical: this.vertical,
    };
  },
  props: {
    selected: {
      type: String,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: [],
      namePath: [],
    };
  },
  mounted() {
    this.updateChildren();
    this.listenToChildren();
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    addItem(vm) {
      this.items.push(vm);
    },
    updateChildren() {
      this.items.forEach((vm) => {
        if (this.selected === vm.name) {
          vm.selected = true;
        } else {
          vm.selected = false;
        }
      });
    },
    listenToChildren() {
      this.items.forEach((vm) => {
        vm.$on("update:selected", (name) => {
          this.$emit("update:selected", name);
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.g-nav {
  display: flex;
}
</style>