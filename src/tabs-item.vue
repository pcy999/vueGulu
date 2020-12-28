<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "P-tabs-item",
  data() {
    return {
      active: false,
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String | Number,
      require: true,
    },
  },
  inject: ["eventBus"],
  computed: {
    classes() {
      return { active: this.active };
    },
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name;
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-item {
  display: flex;
  flex-shrink: 0;
  padding: 0 2em;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &.active {
    background: red;
  }
}
</style>