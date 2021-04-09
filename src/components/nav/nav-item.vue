<template>
  <div
    class="g-nav-item"
    :class="{ selected, vertical }"
    @click="onClick"
    :data-name="name"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "p-nav-item",
  inject: ["root", "vertical"],
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: false,
    };
  },
  created() {
    this.root.addItem(this);
  },
  methods: {
    onClick() {
      this.root.namePath = [];
      this.$parent.updateNamePath && this.$parent.updateNamePath();
      this.$emit("update:selected", this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.g-nav-item {
  padding: 10px 20px;
}
</style>