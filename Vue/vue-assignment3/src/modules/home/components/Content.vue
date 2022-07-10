<template>
  <div class="main--content">
    <div class="main--content--header">
      <div class="content__header--menu">
        <img src="@/assets/bars.svg" alt="" />
      </div>
      <div class="content__header--store">
        <img src="@/assets/Avatar.png" alt="" />
        <select name="shop" id="">
          <option value="">Lotusprayer</option>
        </select>
      </div>
      <div class="content__header--user">
        <img src="@/assets/Avatar-user.png" alt="" />
        <div class="user--options">
          <router-link :to="{ name: 'logout' }">Log Out</router-link>
        </div>
      </div>
    </div>
    <div class="main--content--body">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main--content {
  background: #f7f8fa;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  &--header {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0px 15px 0 20px;
    background: #ffffff;
    .content__header--menu {
      flex: 1;
    }
  }
  &--body {
    padding: 30px 55px;
    flex: 1;
  }
  .content__header--store {
    padding: 8px 12px;
    border-right: 1px solid #f3f3f3;
    border-left: 1px solid #f3f3f3;
    display: flex;
    align-items: center;
    gap: 10px;

    select {
      border: none;
      outline: none;
      option {
        font-weight: 400;
        line-height: 17px;
        color: #252627;
      }
    }
  }
  .content__header--user {
    position: relative;
    .user--options {
      visibility: hidden;
      position: absolute;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0px 2px 5px #33333359;
      padding:8px 14px;
      right: 0;
      /* bottom: 5px; */
      a {
        white-space: nowrap;
        color: #5b86e5;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;

      }
    }
    &:hover .user--options {
      visibility: inherit;
    }
  }
}
</style>
