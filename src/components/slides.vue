<template>
  <div
    class="g-slides"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
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
      timeId: undefined,
      startTouch: undefined,
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
      let index = this.names.indexOf(this.selected);
      return index === -1 ? 0 : index;
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
  },
  methods: {
    select(index) {
      if (index === this.names.length) {
        index = 0;
      }
      if (index < 0) {
        index = this.names.length - 1;
      }
      this.lastSelectedIndex = this.selectedIndex;
      this.$emit("update:selected", this.names[index]);
    },
    updateChildren() {
      let selected = this.getSelected();
      this.$children.forEach((vm) => {
        let reverse =
          this.selectedIndex > this.lastSelectedIndex ? false : true;
        if (
          this.lastSelectedIndex === this.$children.length - 1 &&
          this.selectedIndex === 0
        ) {
          reverse = false;
        }
        vm.reverse = reverse;
        this.$nextTick(() => {
          vm.selected = selected;
        });
      });
    },
    playAutomatically() {
      if (this.timeId) {
        return;
      }
      let index = this.names.indexOf(this.getSelected());
      let run = () => {
        // if (index === this.names.length) {
        //   index = 0;
        // }
        this.select(index);
        index++;
        this.timeId = setTimeout(run, 3000);
      };
      run();
    },
    pause() {
      window.clearTimeout(this.timeId);
      this.timeId = undefined;
    },
    onMouseenter() {
      this.pause();
    },
    onMouseleave() {
      this.playAutomatically();
    },
    onTouchStart(e) {
      this.pause();
      if (e.touches.length > 1) {
        return;
      }
      this.startTouch = e.touches[0];
    },
    onTouchMove() {
      // console.log("onTouchMove");
    },
    onTouchEnd(e) {
      let endTouch = e.changedTouches[0];
      let { clientX: x1, clientY: y1 } = this.startTouch;
      let { clientX: x2, clientY: y2 } = endTouch;

      let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      let deltaY = Math.abs(y2 - y1);
      let rate = distance / deltaY;
      if (rate > 2) {
        console.log("在滑我");
        if (x2 > x1) {
          if (this.selectedIndex === 0) {
            this.select(this.selectedIndex);
          }
          this.select(this.selectedIndex - 1);
          console.log(this.selectedIndex);
        } else {
          this.select(this.selectedIndex + 1);
          console.log(this.selectedIndex);
        }
      }
      this.$nextTick(() => {
        this.playAutomatically();
      });
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
    width: 100%;
    padding: 8px 0px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    > span {
      width: 16px;
      height: 16px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #ddd;
      margin: 0 8px;
      font-size: 12px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background-color: black;
        color: #fff;
        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>