<template>
  <div id="stores--content">
    <div class="content--title">
      <p class="name">Stores</p>
      <button>+ Add new store</button>
    </div>

    <div class="content__body--content">
      <table class="table--products-list">
        <thead>
          <tr>
            <th>Store name</th>
            <th>Status</th>
            <th>Products</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <store-item
            v-for="store in stores"
            :key="store.name"
            v-bind="store"
          ></store-item>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import StoreItem from "../components/stores/StoreItem.vue";
export default {
  components: {
    StoreItem,
  },
  created() {
    this.fetchData();
  },
  computed: {
    ...mapGetters({
      stores: "stores/getStores",
    }),
  },
  methods: {
    ...mapActions({
      fetchData: "stores/fetchData",
    }),
  },
};
</script>

<style lang="scss" scoped>
#stores--content {
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
  .content--title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
    .name {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: #252627;
    }
    button {
      background: #5b86e5;
      border-radius: 4px;
      font-family: "Inter";
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
      padding: 12px 16px;
      border: none;
    }
  }
  .content__body--content {
    background: #ffffff;
    border: 1px solid #e5e8ef;
    border-radius: 3px;
    .table--products-list {
      border-collapse: collapse;
      table-layout: auto;
      width: 100%;

      th {
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        padding: 30px 12px;
        text-align: left;
        &:first-child {
          padding-left: 25px;
        }
      }
    }
  }
}
</style>
