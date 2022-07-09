<template>
  <div class="loading">
    <span></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background: rgba(189, 195, 199, 0.4);
  &::before {
    content: "";
    position: absolute;
    width: 36px;
    height: 36px;
    border: 4px solid #5b86e5;
    border-radius: 50%;
    border-top-color: transparent;
    animation: spinner 0.8s linear infinite;
  }
  /* span {
    width: 36px;
    height: 36px;
    border: 4px solid #5b86e5;
    border-radius: 50%;
    border-top-color: transparent;
    transform: translate(-50%, -50%);
  } */
}
@keyframes spinner {
  0% {
    transform: translateY(-100%) rotate(0deg);
  }
  100% {
    transform: translateY(-100%) rotate(360deg);
  }
}
</style>
