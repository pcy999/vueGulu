<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span
        v-for="n in childrenLength"
        :key="n"
        :class="{ active: selectedIndex === n - 1 }"
        @click="select(n - 1)"
      >
        {{ n - 1 }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "p-slider",
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
    };
  },
  props: {
    selected: {
      type: String,
    },
    enableAutoPlay: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected);
    },
    names() {
      return this.$children.map((vm) => vm.name);
    },
  },
  mounted() {
    this.updateChildren();
    this.enableAutoPlay && this.playAutomatically();
    this.childrenLength = this.$children.length;
    this.lastSelectedIndex = this.selectedIndex;
  },
  updated() {
    this.updateChildren();
    console.log(`this.lastSelectedIndex`, this.lastSelectedIndex);
    console.log(`this.selectedIndex`, this.selectedIndex);
  },
  methods: {
    select(index) {
      this.lastSelectedIndex = this.selectedIndex;
      this.$emit("update:selected", this.names[index]);
    },
    updateChildren() {
      let selected = this.getSelected();
      this.$children.forEach((vm) => {
        vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true;
        this.$nextTick(() => {
          vm.selected = selected;
        });
      });
    },
    playAutomatically() {
      let index = this.names.indexOf(this.getSelected());
      let run = () => {
        if (index === this.names.length) {
          index = 0;
        }
        this.select(index);
        index++;
        setTimeout(run, 3000);
      };
      run();
    },
    getSelected() {
      let first = this.$children[0];
      return this.selected || first.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.g-slides {
  &-wrapper {
    position: relative;
  }
  &-window {
    overflow: hidden;
  }
  &-dots {
    & > span {
      &.active {
        background-color: red;
      }
    }
  }
}
</style>