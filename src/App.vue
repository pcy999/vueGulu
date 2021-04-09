<template>
  <div>
    <g-nav :selected="selected" :multiple="false">
      <g-nav-item name="home">首页</g-nav-item>
      <g-sub-nav>
        <template>关于</template>
        <g-nav-item name="culture">企业文化</g-nav-item>
        <g-nav-item name="developers">开发团队</g-nav-item>
        <g-nav-item name="contacts">联系电话</g-nav-item>
      </g-sub-nav>
      <g-nav-item name="about">关于</g-nav-item>
      <g-nav-item name="hire">招聘</g-nav-item>
    </g-nav>
  </div>
</template>

<script>
import GNav from "./components/nav/nav";
import GSubNav from "./components/nav/sub-nav";
import GNavItem from "./components/nav/nav-item";

export default {
  name: "App",
  components: {
    GNav,
    GSubNav,
    GNavItem,
  },
  data() {
    return {
      selected: "home",
    };
  },
};
</script>

<style lang="scss">
</style>
