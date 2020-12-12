<template>
  <div class="wrapper" :class="{ error: error }">
    <input
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      type="text"
    />
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="error-meassage">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon.vue";
export default {
  components: { Icon },
  name: "P-Input",
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  display: inline-flex;
  align-items: center;
  font-size: $font-size;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    &:hover {
      border: 1px solid $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0px 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border: 1px solid $red;
    }
  }
  > .icon-error {
    fill: $red;
  }
  > .error-meassage {
    color: $red;
  }
}
</style>