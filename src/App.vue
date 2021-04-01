<template>
  <div>
    <slides>
      <slides-item>
        <div class="box">1</div>
      </slides-item>
      <slides-item>
        <div class="box">2</div>
      </slides-item>
      <slides-item>
        <div class="box">3</div>
      </slides-item>
    </slides>
  </div>
</template>

<script>
import slides from "./components/slides.vue";
import slidesItem from "./components/slides-item";

export default {
  name: "App",
  data() {
    return {
      loading: false,
      icon: "info",
    };
  },
  components: {
    slides: slides,
    "slides-item": slidesItem,
  },
  methods: {},
};
</script>

<style lang="scss">
.box {
  border: 1px solid #000;
  width: 200px;
  height: 150px;
  background: #ddd;
}
</style>
