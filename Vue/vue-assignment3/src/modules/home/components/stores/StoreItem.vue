<template>
  <tr class="store--item" :class="status">
    <td class="store--info">
      <img :src="newAvatar" alt="" />
      <div class="store--name">
        <p class="name">{{ name }}</p>
        <p class="email">{{ email }}</p>
      </div>
    </td>
    <td class="store--status">
      <p>{{ status }}</p>
    </td>
    <td class="store--products">
      {{ products }}
    </td>
    <td class="store--actions">
      <button class="btn--options">
        <img src="@/assets/options-button.png" alt="" />
      </button>
      <button class="btn--detail">Detail</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    name: String,
    email: String,
    status: String,
    avatar: String,
    products: Number,
  },
  computed: {
    newAvatar() {
      return require(`@/assets/${this.avatar}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.store--item {
  border-top: 1px solid #e5e8ef;
  td {
    padding: 20px 12px;
  }
  td:first-child {
    padding: 20px 25px;
  }
}
.Live {
  .store--status p {
    background: #c2f2d8;
    color: #35b26f;
    padding: 3px 8px;
  }
}
.Disconnected {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: #f2545d;
    height: 100%;
    width: 4px;
  }
  .store--status p {
    background: #ffe5e6;

    color: #f2545d;
    padding: 3px 13px;
  }
}
.store--status p {
  border-radius: 4px;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  width: fit-content;
}
.store--info {
  display: flex;
  gap: 10px;
  .store--name {
    font-size: 14px;
    line-height: 17px;
    .name {
      font-weight: 700;
    }
    .email {
      font-weight: 400;
      color: #828282;
    }
  }
}
.store--actions {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: end;
  .btn--options {
    height: 35px;
    background: #ffffff;
    border: none;
  }
  .btn--detail {
    background: #ffffff;
    border: 1px solid #e5e8ef;
    border-radius: 4px;
    padding: 8px 21px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
