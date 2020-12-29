<template>
  <div
    class="tabs-item"
    v-if="isShow"
    @click="onClick"
    :class="classes"
    :data-name="name"
  >
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
    isShow: {
      type: Boolean,
      default: true,
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
    this.eventBus &&
      this.eventBus.$on("update:selected", (name) => {
        this.active = name === this.name;
      });
  },
  methods: {
    onClick() {
      this.eventBus.$emit("update:selected", this.name, this);
    },
  },
};
</script>

<style lang="scss" scoped>
$blue: blue;
.tabs-item {
  display: flex;
  flex-shrink: 0;
  padding: 0 2em;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &.active {
    color: $blue;
    font-weight: bold;
  }
}
</style>