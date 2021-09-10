<template>
  <div style="border: 1ox solid">
    <g-popover position="bottom">
      <g-Input type="text" />
      <template slot="content">
        <div class="gulu-date-picker-pop">
          <div class="gulu-date-picker-nav">
            <span><g-icon name="setting" /></span>
            <span><g-icon name="setting" /></span>
            <span @click="onClickYear">2021年</span>
            <span @click="onClickMonth">7月</span>
            <span><g-icon name="setting" /></span>
            <span><g-icon name="setting" /></span>
          </div>
          <div class="gulu-date-picker-pannels">
            <div v-if="mode === 'years'" class="gulu-date-picker-content">
              年
            </div>
            <div v-else-if="mode === 'months'" class="gulu-date-picker-content">
              月
            </div>
            <div v-else class="gulu-date-picker-content">
              <div :class="pre('weekdays')">
                <span v-for="i in helper.range(0, 6)" :key="i">
                  <template>{{ weekdays[i] }}</template>
                </span>
              </div>
              <div :class="pre('row')" v-for="i in helper.range(0, 5)" :key="i">
                <span
                  :class="pre('col')"
                  v-for="j in helper.range(0, 6)"
                  :key="j"
                >
                  {{ visibleDays[i * 7 + j].getDate() }}
                </span>
              </div>
            </div>
          </div>
          <div class="gulu-date-picker-actions">
            <g-button>清除</g-button>
          </div>
        </div>
      </template>
    </g-popover>
  </div>
</template>

<script>
import GInput from "../input.vue";
import GIcon from "../icon.vue";
import GPopover from "../popover.vue";
import GButton from "../button/button.vue";
import ClickOutside from "../click-outside";
import helper from "./helper";
export default {
  name: "GDateInput",
  components: { GButton, GInput, GIcon, GPopover },
  directives: { ClickOutside },
  data() {
    return {
      mode: "days",
      value: new Date(),
      helper,
      weekdays: ["一", "二", "三", "四", "五", "六", "日"],
    };
  },
  computed: {
    visibleDays() {
      let date = this.value;
      let first = helper.firstDayOfMonth(date);
      let last = helper.lastDayOfMonth(date);
      let [year, month, day] = helper.getYearMonthDate(date);
      let array1 = [];
      for (let i = first.getDate(); i <= last.getDate(); i++) {
        array1.push(new Date(year, month, i));
      }
      let n = first.getDay() === 0 ? 6 : first.getDay() - 1;
      let array2 = [];
      for (let i = 0; i < n; i++) {
        array2.unshift(new Date(year, month, -i));
      }
      let m = 42 - array1.length - array2.length;
      let array3 = [];
      for (let i = 1; i <= m; i++) {
        array3.push(new Date(year, month + 1, i));
      }
      let array4 = [...array2, ...array1, ...array3];
      return array4;
    },
  },
  mounted() {},
  methods: {
    pre(className) {
      return "gulu-date-picker-" + className;
    },
    onFocusInput() {
      this.popVisible = true;
    },
    onBlurInput() {
      this.popVisible = false;
    },
    onClickMonth() {
      this.mode = "months";
    },
    onClickYear() {
      this.mode = "years";
    },
  },
};
</script>

<style>
</style>