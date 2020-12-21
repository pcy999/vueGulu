<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach((key) => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};

export default {
  name: "P-Col",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    ipad: {
      type: Object,
      validator,
    },
    narrowPc: {
      type: Object,
      validator,
    },
    pc: {
      type: Object,
      validator,
    },
    widePc: {
      type: Object,
      validator,
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  methods: {
    creatClasses(obj, str = "") {
      if (!obj) {
        return [];
      }
      let array = [];
      if (obj.span) {
        array.push(`col-${str}${obj.span}`);
      }
      if (obj.offset) {
        array.push(`offset-${str}${obj.offset}`);
      }
      return array;
    },
  },
  computed: {
    colClass() {
      let { span, offset, ipad, narrowPc, pc, widePc } = this;
      let creatClasses = this.creatClasses;
      return [
        ...creatClasses({ span, offset }),
        ...creatClasses(ipad, "iPad-"),
        ...creatClasses(narrowPc, "narrow-pc-"),
        ...creatClasses(pc, "pc-"),
        ...creatClasses(widePc, "wide-pc-"),
      ];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.col {
  // width: 50%;
  @for $n from 1 through 24 {
    &.col-#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  @for $n from 1 through 24 {
    &.offset-#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  @media (min-width: 577px) {
    @for $n from 1 through 24 {
      &.col-iPad-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.offset-iPad-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 769px) {
    @for $n from 1 through 24 {
      &.col-narrow-pc-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.offset-narrow-pc-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 993px) {
    @for $n from 1 through 24 {
      &.col-pc-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.offset-pc-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    @for $n from 1 through 24 {
      &.col-wide-pc-#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.offset-wide-pc-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>