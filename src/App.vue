<template>
  <div>
    <p-button :icon="icon" @click="a" :loading="loading">测试</p-button>
  </div>
</template>

<script>
import button from "./components/button.vue";

export default {
  name: "App",
  data() {
    return {
      loading: false,
      icon: "info",
    };
  },
  components: {
    "p-button": button,
  },
  methods: {
    a() {
      this.loading = !this.loading;
    },
  },
};
</script>

<style lang="scss">
</style>
