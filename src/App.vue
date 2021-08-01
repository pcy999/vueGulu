<template>
  <div>
    <g-sticky><div style="border: 1px solid red">sticky内容</div></g-sticky>
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
    <p>段落7</p>
    <p>段落8</p>
    <p>段落9</p>
  </div>
</template>

<script>
import GSticky from './components/sticky.vue';
export default {
  name: 'App',
  components: {
    GSticky,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss"></style>
