<template>
  <div>
    <slides
      class="wrapper"
      :selected.sync="selected"
      width="300px"
      height="200px"
    >
      <slides-item name="1">
        <div class="box">1</div>
      </slides-item>
      <slides-item name="2">
        <div class="box">2</div>
      </slides-item>
      <slides-item name="3">
        <div class="box">3</div>
      </slides-item>
    </slides>
  </div>
</template>

<script>
import slides from "./components/slides/slides";
import slidesItem from "./components/slides/slides-item";

export default {
  name: "App",
  data() {
    return {
      loading: false,
      icon: "info",
      selected: "1",
    };
  },
  created() {},
  components: {
    slides: slides,
    "slides-item": slidesItem,
  },
  methods: {},
};
</script>

<style lang="scss">
.wrapper {
  .box {
    width: 100%;
    height: 150px;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
}
</style>
