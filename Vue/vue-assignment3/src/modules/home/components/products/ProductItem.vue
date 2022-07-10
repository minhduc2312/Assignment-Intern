<template>
  <tr class="product--item">
    <td>
      <input type="checkbox" name="" id="" />
    </td>
    <td class="product--info">
      <img :src="image" class="product-img" alt="" />
      <div class="product-title">
        <p class="product-name">{{ name }}</p>
        <p class="product-id">Shopify ID: {{ id }}</p>
      </div>
    </td>
    <td class="product--status" :class="status">
      {{ status }}
    </td>
    <td class="product--quantity">
      <p>
        <span>{{ quantity.amount }}</span> in stock for
      </p>
      <p>
        <span>{{ quantity.variants }}</span> variants
      </p>
    </td>
    <td class="product--options">
      {{ options }}
    </td>
    <td class="product--profile">
      <select name="profile" id="profile">
        <option v-for="item in profile" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
    </td>
    <td class="product--shipping">
      <select name="shipping" id="shipping">
        <option v-for="item in shipping" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
    </td>
    <td class="product--button">
      <button>Push to Etsy</button>
    </td>
    <td>
      <button class="product--actions">
        <img src="@/assets/options-button.png" alt="" />
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    image: String,
    status: String,
    quantity: Object,
    options: Number,
    profile: Array,
    shipping: Array,
  },
};
</script>

<style lang="scss" scoped>
tbody tr td {
  padding: 20px 12px;
  &:first-child {
    padding-left: 25px;
  }
}
.product--item {
  border-top: 1px solid #e5e8ef;
}
.product--info {
  display: flex;
  gap: 10px;
  width: 250px;

  color: #252627;
  .product-img {
    width: 40px;
    object-fit: contain;
    height: 40px;
    border-radius: 3px;
    border: 1px solid #cecece;
  }
  .product-title {
    width: 100%;
  }
  .product-name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  .product-id {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #828282;
  }
}
.product--status {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  &.Active {
    color: #35b26f;
  }
  &.Draft {
    color: #768188;
  }
  &::before {
    content: "\2022";
  }
}
.product--quantity {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: #828282;
  p span {
    color: #252627;
    font-weight: 600;
  }
}
.product--options {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-decoration-line: underline;
  color: #f2545d;
}
.product--profile,
.product--shipping {
  select {
    background: #ffffff;
    border: 1px solid #e5e8ef;
    border-radius: 4px;
    padding: 8px;
    outline: none;
  }
}
.product--button {
  button {
    padding: 8px;
    background: #ffffff;
    border: 1px solid #5b86e5;
    border-radius: 4px;
    color: #5b86e5;
    &:hover {
      color: #ffffff;
      background: #5b86e5;
    }
  }
}
.product--actions {
  border: none;
  border-radius: 4px;
  background: #ffffff;
}
</style>
