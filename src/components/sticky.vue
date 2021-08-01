<template>
  <div class="gulu-sticky-wrapper" ref="wrapper" :style="{ height }">
    <div class="gulu-sticky" :class="classes" :style="{ left, width }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'p-sticky',
  props: {
    distance: { type: Number },
  },
  data() {
    return {
      sticky: false,
      left: undefined,
      width: undefined,
      height: undefined,
    };
  },
  computed: {
    classes() {
      return {
        sticky: this.sticky,
      };
    },
  },
  created() {},
  mounted() {
    let top = this.top();
    window.addEventListener('scroll', () => {
      if (window.scrollY > top) {
        console.log('滚过了元素顶部');
        let {
          height,
          width,
          left,
        } = this.$refs.wrapper.getBoundingClientRect();
        this.height = height + 'px';
        this.width = width + 'px';
        this.left = left + 'px';
        this.sticky = true;
      } else {
        console.log('没有滚过');
        this.sticky = false;
      }
    });
  },
  methods: {
    //获取wrapper距离文档顶部的高度
    top() {
      let { top } = this.$refs.wrapper.getBoundingClientRect();
      return top + window.scrollY;
    },
  },
};
</script>

<style lang="scss" scoped>
.gulu-sticky {
  &.sticky {
    position: fixed;
    top: 0;
  }
}
</style>
