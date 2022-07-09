<template>
  <div class="auth-layout">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="auth-layout-content">
      <router-view></router-view>
      <div class="banner">
        <img src="@/assets/art_work.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
.auth-layout {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  background: #f6f8ff;
  &-content {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    padding: 30px;
    gap: 200px;
    height: 100%;
    align-items: center;
    margin-top: -100px;
  }
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 33%;
    right: 0;
    background-image: url("@/assets/bg.png");
    background-size: cover;
    z-index: 0;
  }
  .logo {
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 1;
  }
  .form {
    width: 350px;
  }
  .form--title {
    font-size: 38px;
    font-weight: 700;
    line-height: 55px;
    color: #5b86e5;
    margin-bottom: 20px;
  }
  .form-section {
    z-index: 1;
  }
  .form-section .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 1;
    .form--field,
    .field--checkbox {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 7px;
    }
    .form--field {
      gap: 15px;
    }
    .field--input {
      width: 100%;
      background: #ffffff;
      border: 1px solid #ebebf0;
      border-radius: 2px;
      display: flex;
      gap: 10px;
      padding: 10px 14px;
      input {
        position: relative;
        border: none;
        background: transparent;
        font-weight: 300;
        font-size: 14px;
        line-height: 21px;
        color: #828282;
        flex: 1;
        &:focus {
          outline: none;
          border: none;
        }
      }
      button {
        background: transparent;
        border: none;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #4f4f4f;
        font-family: "Poppins", sans-serif;
      }
    }
  }

  .field--link {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #5b86e5;
    text-decoration: none;
  }
  .field--text {
    display: flex;
    width: 100%;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #4f4f4f;
    span {
      border: 0.5px solid #ebebf0;
      flex: 1;
      height: 1px;

      &:nth-child(1) {
        margin-right: 10px;
      }
      &:nth-child(2) {
        margin-left: 10px;
      }
    }
  }
  .btn--submit {
    width: 100%;
    background: #5b86e5;
    border-radius: 2px;
    border: none;
    /* border-color: #5b86e5; */
    padding: 8px 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    font-family: "Poppins", sans-serif;
  }
  .banner {
    z-index: 1;
  }
  .btn--login-google,
  .btn--login-facebook {
    border: 2px;
    background: #ffffff;
    border: 1px solid #ebebf0;

    width: 50%;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
    font-family: "Poppins", sans-serif;
    padding: 11px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
}
@media screen and (max-width: 1380px) {
  .auth-layout::after {
    width: 100%;
  }

  .auth-layout-content {
    justify-content: center;
    gap: 10px;
    margin-top: 0px;
    padding: 0;
  }
}
</style>
