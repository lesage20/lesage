<template>
  <q-page class="hide-scrollbar" padding>
    <hero-comp></hero-comp>
    <about-me
      v-if="anchors.about || $q.platform.is.mobile"
      v-motion-slide-visible-bottom
    ></about-me>
  </q-page>
</template>

<script setup>
import { provide, reactive, ref } from "vue";
import HeroComp from "src/components/HeroComp.vue";
import AboutMe from "src/components/AboutMe.vue";

const anchors = reactive({
  hero: true,
  about: false,
});
provide("anchors", anchors);
</script>
