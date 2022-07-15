<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
<style lang="scss">
* {
  scroll-behavior: smooth !important;
  scroll-padding: 20px !important;
}
</style>
