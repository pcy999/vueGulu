<template>
  <div>
    <g-paper :totalPage="10" :currentPage="2"></g-paper>
  </div>
</template>

<script>
import GPaper from "./components/paper";

export default {
  name: "App",
  components: {
    GPaper,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>
