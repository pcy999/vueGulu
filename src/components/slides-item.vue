<template>
  <transition name="slide">
    <div class="g-slides-item" :class="{ reverse }" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "p-slides-item",
  data() {
    return {
      selected: undefined,
      reverse: false,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    visible() {
      return this.selected == this.name;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.g-slides-item {
}
.slide-leave-active {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s;
}
.slide-enter {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter.reverse {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-leave-to.reverse {
  transform: translateX(100%);
  opacity: 0;
}
</style>