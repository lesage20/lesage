<template>
  <q-btn
    color="green"
    class="btn-scroll"
    flat
    round
    outline
    size="lg"
    :href="'#' + to"
    @click="emits('move', to)"
  >
    <q-icon name="keyboard_arrow_down"> </q-icon>
  </q-btn>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    require: true,
  },
});

const emits = defineEmits(["move"]);
</script>
<style lang="scss">
.btn-scroll {
  opacity: 1;
  transition: all 0.3s;
  transform: translateY(0%);
  animation: fadeInDown 3s infinite; /* referring directly to the animation's @keyframe declaration */
}
@keyframes fadeInDown {
  0%,
  100% {
    transform: translateY(30%);
    opacity: 1;
  }
  50% {
    opacity: 1;
    transform: translateY(-30%);
  }
}
</style>
