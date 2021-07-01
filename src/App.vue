<template>
  <div>
    <div style="margin: 20px">
      <g-table
        :columns="columns"
        :dataSource="dataSource"
        bordered
        :striped="false"
        :selected-items.sync="selected"
        :order-by="orderBy"
      ></g-table>
    </div>
    <div style="margin: 20px">
      <g-table
        :columns="columns"
        :dataSource="dataSource"
        bordered
        compact
      ></g-table>
    </div>
    <div style="margin: 20px">
      <g-paper :total-page="10" :current-page.sync="currentPage"></g-paper>
    </div>
  </div>
</template>

<script>
import GTable from "./components/table";
import GPaper from "./components/paper";
export default {
  name: "App",
  components: {
    GTable,
    GPaper,
  },
  data() {
    return {
      currentPage: 1,
      selected: [],
      columns: [
        { text: "姓名", field: "name" },
        { text: "分数", field: "score" },
      ],
      orderBy: {
        name: "asc",
        score: "desc",
      },
      dataSource: [
        { id: 1, name: "pcy", score: 100 },
        { id: 2, name: "yy", score: 98 },
        { id: 3, name: "hh", score: 97 },
        { id: 4, name: "qq", score: 96 },
        { id: 5, name: "ww", score: 95 },
        { id: 6, name: "ee", score: 94 },
        { id: 7, name: "rr", score: 93 },
        { id: 8, name: "gg", score: 90 },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
</style>
