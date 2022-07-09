<template>
  <div id="products--content">
    <div class="content--title">
      <p class="name">Products</p>
      <button>+ Add new store</button>
    </div>
    <div class="content__body--actions">
      <div class="action--search">
        <img src="@/assets/icon-search.svg" alt="" />
        <input type="text" placeholder="Search product" />
      </div>
      <div class="action--filters">
        <div class="select--filter">
          <select name="status">
            <option value="">Status</option>
          </select>
        </div>
        <div class="select--filter">
          <select name="quantity">
            <option value="">Quantity</option>
          </select>
        </div>
        <div class="select--filter">
          <select name="shipping">
            <option value="">Shipping</option>
          </select>
        </div>
        <div class="select--filter">
          <select name="profile">
            <option value="">Profile</option>
          </select>
        </div>
        <div class="select--filter">
          <select name="push">
            <option value="">Ready to push</option>
          </select>
        </div>
      </div>

      <label class="action--sort">
        <input type="checkbox" name="sort" id="" />
        <img src="@/assets/sort.svg" alt="" class="sort--desc" />
        Sort
      </label>
    </div>
    <div class="content__body--content">
      <table class="table--products-list">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Product</th>
            <th><img src="@/assets/App-shopify.svg" alt="" /> Status</th>
            <th>Quantity</th>
            <th>Options</th>
            <th>Profile</th>
            <th>Shipping</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #cecece;
  opacity: 1; /* Firefox */
}
#products--content {
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
  .content__body--actions {
    display: flex;
    gap: 15px;
    .action--search {
      padding: 12px 16px;
      display: flex;
      gap: 12px;
      background: #ffffff;
      border: 1px solid #e5e8ef;
      border-radius: 4px;
      flex: 1;
      input {
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #4e4e4e;
        border: none;
        outline: none;
        flex: 1;
      }
    }
    .action--filters {
      display: flex;
      .select--filter {
        padding: 12px 14px;
        background: #ffffff;
        border: 1px solid #e5e8ef;
        border-radius: 4px 0px 0px 4px;
        select {
          border: none;
          outline: none;
          font-weight: 600;
          font-size: 14px;
          line-height: 16px;
          color: #4f4f4f;
          cursor: url("@/assets/hand_cursor.png"), auto;
        }
      }
    }
    .action--sort {
      padding: 12px 14px;
      background: #ffffff;
      border: 1px solid #e5e8ef;
      border-radius: 4px 0px 0px 4px;
      transition: 0.5s rotate;
      cursor: url("@/assets/hand_cursor.png"), auto;

      input {
        appearance: none;
      }
      .sort--desc {
        transform: rotate(180deg);
      }
    }
  }
  .content__body--content {
    background: #ffffff;
    border: 1px solid #e5e8ef;
    border-radius: 3px;
    flex: 1;
    .table--products-list {
      border-collapse: collapse;
      table-layout: auto;
      width: 100%;
      th {
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        color: #828282;
        display: inline-flex;
        align-items: center;
        flex-direction: row;
      }
    }
  }
}
</style>
