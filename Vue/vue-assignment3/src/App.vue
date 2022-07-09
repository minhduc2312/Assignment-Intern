<template>
  <div id="app">
    <loading v-if="isLoading"></loading>
    <vue-extend-layouts />
  </div>
</template>

<script>
import VueExtendLayouts from "vue-extend-layout";
import Loading from "@/components/Loading";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: { VueExtendLayouts, Loading },
  computed: {
    ...mapGetters({
      isLoading: "isLoading",
    }),
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
button,
a {
  cursor: pointer;
}
body {
  transform: 1.3;
}
button,
a {
  cursor: url("@/assets/hand_cursor.png"), auto;
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>
