<template>
  <div class="side-bar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="main--menu">
      <nav class="main--menu--link">
        <router-link :to="{ name: 'dashboard' }"
          ><img src="@/assets/dashboard.svg" alt="" />Dashboard</router-link
        >
        <router-link :to="{ name: 'products' }"
          ><img src="@/assets/product-widget.svg" alt="" />
          Products</router-link
        >
        <router-link :to="{ name: 'stores' }"
          ><img src="@/assets/productcenter.svg" alt="" />Stores</router-link
        >
        <router-link :to="{ name: 'setting' }"
          ><img src="@/assets/setting.svg" alt="" />Setting</router-link
        >
      </nav>
    </div>
    <div class="sub--menu">
      <button><img src="@/assets/helpcenter.svg" alt="" /></button>
      <button><img src="@/assets/chat.svg" alt="" /></button>
      <button><img src="@/assets/apps-more.svg" alt="" /></button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.side-bar {
  position: fixed;
  height: 100%;
  width: 300px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-right: 1px solid #e2e2e2;
  .logo {
    padding: 14px 16px;
    img {
      width: 165px;
    }
  }
  .main--menu {
    flex: 1;
    &--link {
      display: flex;
      flex-direction: column;
      a {
        position: relative;
        padding: 12px 16px;
        display: flex;
        align-items: center;
        gap: 14px;
        text-decoration: none;
        font-weight: 400;
        line-height: 20px;
        font-size: 16px;
        color: #4f4f4f;
      }
      .router-link-active {
        background: #ebf1ff;
        color: #5b86e5;
        img {
          filter: invert(53%) sepia(40%) saturate(1222%) hue-rotate(193deg)
            brightness(90%) contrast(99%);
        }
        &::before {
          content: "";
          position: absolute;
          width: 4px;
          height: 100%;
          background: #5b86e5;
          border-radius: 0px 6px 6px 0px;
          top: 0;
          left: 0;
        }
      }
    }
  }
  .sub--menu {
    display: flex;
    justify-content: space-around;
    button {
      border: none;
      background: #ffffff;
    }
  }
}
</style>
