<template>
  <div class="gulu-table-wrapper">
    <table class="gulu-table" :class="{ bordered, compact, striped }">
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              @change="onChangeAllItems"
              ref="allChecked"
              :checked="areAllItemsSelected"
            />
          </th>
          <th v-if="numberVisible">#</th>
          <th v-for="column in columns" :key="column.field">
            <div class="gulu-table-header">
              {{ column.text }}
              <span class="gulu-table-sorter">
                <g-icon name="up"></g-icon>
                <g-icon name="down2"></g-icon>
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataSource" :key="item.id">
          <td>
            <input
              type="checkbox"
              @change="onChangeItem(item, index, $event)"
              :checked="inSelectedItems(item)"
            />
          </td>
          <td v-if="numberVisible">{{ index + 1 }}</td>
          <template v-for="column in columns">
            <td :key="column.field">{{ item[column.field] }}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import GIcon from "../components/icon";
export default {
  name: "p-table",
  components: { GIcon },
  props: {
    orderBy: {
      type: Object,
      default: () => ({}),
    },
    striped: {
      type: Boolean,
      default: true,
    },
    selectedItems: {
      type: Array,
      default: () => [],
      validator(array) {
        return !(array.filter((item) => item.id === undefined).length > 0);
      },
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
  computed: {
    areAllItemsSelected() {
      const a = this.dataSource.map((item) => item.id).sort();
      const b = this.selectedItems.map((item) => item.id).sort();
      if (a.length !== b.length) {
        return false;
      }
      let equal = true;
      for (let i = 0; i < a.length; i++)
        if (a[i] !== b[i]) {
          equal = false;
          break;
        }
      return equal;
    },
  },
  watch: {
    selectedItems() {
      if (this.selectedItems.length === this.dataSource.length) {
        this.$refs.allChecked.indeterminate = false;
      } else if (this.selectedItems.length === 0) {
        this.$refs.allChecked.indeterminate = false;
      } else {
        this.$refs.allChecked.indeterminate = true;
      }
    },
  },
  methods: {
    onChangeItem(item, index, e) {
      let copy = JSON.parse(JSON.stringify(this.selectedItems));
      if (e.target.checked) {
        copy.push(item);
      } else {
        copy = copy.filter((i) => i.id !== item.id);
      }
      this.$emit("update:selectedItems", copy);
    },
    onChangeAllItems(e) {
      this.$emit(
        "update:selectedItems",
        e.target.checked ? this.dataSource : []
      );
    },
    inSelectedItems(item) {
      return this.selectedItems.some((i) => i.id === item.id);
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
  &-header {
    display: flex;
    align-items: center;
  }
  &-sorter {
    display: inline-flex;
    flex-direction: column;
    margin: 0 4px;
    cursor: pointer;
    svg {
      width: 10px;
      height: 10px;
      fill: $grey;
    }
    &.active {
      fill: red;
    }
    &:first-child {
      position: relative;
      bottom: -1px;
    }
    &:nth-child(2) {
      position: relative;
      top: -1px;
    }
  }
}
</style>