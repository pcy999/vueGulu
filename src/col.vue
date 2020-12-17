<template>
  <div
    class="col"
    :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{ paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "P-Col",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  width: 50%;
  $clo-prefix: col-;
  $offset-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$clo-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  @for $n from 1 through 24 {
    &.#{$offset-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>