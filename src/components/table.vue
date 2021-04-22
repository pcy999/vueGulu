<template>
  <div class="gulu-table-wrapper">
    <table class="gulu-table" :class="{ bordered, compact, striped }">
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th v-if="numberVisible">#</th>
          <th v-for="(column, index) in columns" :key="index">
            {{ column.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataSource" :key="index">
          <td>
            <input
              type="checkbox"
              @change="onChangeItem(item, index, $event)"
            />
          </td>
          <td v-if="numberVisible">{{ index + 1 }}</td>
          <template v-for="(column, index) in columns">
            <td :key="index">{{ item[column.field] }}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "p-table",
  props: {
    striped: {
      type: Boolean,
      default: true,
    },
    compact: {
      type: Boolean,
      default: false,
    },
    columns: {
      type: Array,
      require: true,
    },
    dataSource: {
      type: Array,
      require: true,
    },
    numberVisible: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChangeItem(item, index, e) {
      this.$emit("changeItem", { selected: e.target.checked, item, index });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/_var.scss";
$grey: darken($grey, 10%);
.gulu-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-bottom: 1px solid $grey;
  &.bordered {
    border: 1px solid $grey;
    td,
    th {
      border: 1px solid $grey;
    }
  }
  &.compact {
    td,
    th {
      padding: 4px;
    }
  }
  td,
  th {
    border-bottom: 1px solid $grey;
    text-align: left;
    padding: 8px;
  }
  &.striped {
    tbody {
      > tr {
        &:nth-child(odd) {
          background: white;
        }
        &:nth-child(even) {
          background: lighten($grey, 10%);
        }
      }
    }
  }
}
</style>