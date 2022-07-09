<template>
  <div class="home--layout">
    <sidebar />
    <Content />
  </div>
</template>

<script>
import Sidebar from "@/modules/home/components/Sidebar.vue";
import Content from "@/modules/home/components/Content.vue";
export default {
  components: {
    Sidebar,
    Content,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");

.home--layout {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  padding-left: 300px;
  font-family: "Inter", sans-serif;
}


</style>
