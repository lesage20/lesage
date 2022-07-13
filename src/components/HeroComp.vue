<template>
  <q-page class="full-height flex flex-center full-width vertical-middle">
    <div id="hero" class="row justify-between">
      <div style="width: 1.5%" class="col-1" v-if="$q.platform.is.desktop">
        <div style="height: calc(100%)" class="column justify-between">
          <transition-group
            :css="false"
            @before-enter="onBeforeEnter"
            @enter="onEnter"
            @leave="onLeave"
            appear
          >
            <q-btn
              class="left-side-btn"
              v-for="(soc, index) in socials"
              :key="soc.name"
              color="teal"
              flat
              round
              :data-index="index"
              :icon="soc.icon"
            ></q-btn>
          </transition-group>
        </div>
      </div>
      <div class="col-xs-12 col-md-8 col-lg-6 col-xl-5">
        <span class="text-green text-body1">Salut je suis,</span>

        <my-name></my-name>
        <h2
          class="text-bold q-my-md text-grey-5"
          :class="{
            'text-h2': $q.screen.gt.sm,
            'text-h4': $q.screen.lt.md,
          }"
        >
          Dévéloppeur web Fullstack
        </h2>
        <p class="text-body1 text-grey-5">
          J'aime résoudre des problèmes de la vie courante grâce aux
          algorithmes. Je crée des sites, des applications web de qualité qui
          offrent un confort quelque soit l'appareil utilisé pour les visiter.
          Je fais également des applications de bureau.
        </p>
        <div class="q-px-none">
          <div class="row">
            <div>
              <q-badge class="bg-dark-1 q-mx-xs text-primary"> Vue </q-badge>
              <q-badge class="bg-dark-1 q-mr-xs text-primary">
                Javascript
              </q-badge>
              <q-badge class="bg-dark-1 q-mx-xs text-primary">
                Electon
              </q-badge>
              <q-badge class="bg-dark-1 q-mx-xs text-primary"> Python </q-badge>
              <q-badge class="bg-dark-1 q-mx-xs text-primary"> Django </q-badge>
              <q-badge class="bg-dark-1 q-mx-xs text-primary">
                API Rest
              </q-badge>
              <q-badge class="bg-dark-1 q-mx-xs text-primary"> SQL </q-badge>
            </div>
          </div>
        </div>
        <div class="q-py-md">
          <q-btn
            :size="$q.screen.lt.md ? 'md' : 'lg'"
            color="teal"
            label=" Télécharger mon cv"
            icon="download"
            outline
            :class="{ 'full-width': $q.platform.is.mobile }"
          ></q-btn>
        </div>
      </div>
      <div v-if="$q.platform.is.desktop" class="col-md-1 text-center column">
        <div
          style="height: calc(100%)"
          class="column justify-between items-center content-center"
        >
          <transition-group
            :css="false"
            @before-enter="onBeforeEnter"
            @enter="onEnter"
            @leave="onLeave"
            appear
          >
            <div
              class="col"
              v-for="(techno, index) in technos"
              :data-index="socials.length + index"
              :key="techno.name"
            >
              <!-- :size="techno.name == 'javascript' ? 'xl' : 'md'" -->
              <q-btn
                :icon="techno.icon"
                flat
                round
                class="right-side-btn"
                color="primary"
              >
              </q-btn>
            </div>

            <div
              class="col"
              :data-index="socials.length + technos.length"
              key="django"
            >
              <q-btn class="right-side-btn" color="primary" flat round>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style="fill: #1976d2"
                >
                  <path
                    d="M 11 3 L 11 8.1582031 C 10.653 8.0172031 9.9041562 8 9.5351562 8 C 6.7591563 8 4.1894531 9.306 4.1894531 13 C 4.1894531 17.42 7.67 18 10 18 C 10.92 18 13 17.909141 14 17.619141 L 14 3 L 11 3 z M 16 3 L 16 6 L 19 6 L 19 3 L 16 3 z M 16 8 L 16 16.701172 C 16 18.217172 15.078 19.795172 13 20.701172 L 15.859375 21.996094 C 18.765375 20.996094 19 17.701172 19 16.701172 L 19 8 L 16 8 z M 9.9707031 10.550781 C 10.290703 10.550781 10.65 10.609453 11 10.689453 L 11 15.392578 C 10.65 15.472578 10.290703 15.533203 9.9707031 15.533203 C 8.6607031 15.533203 7.390625 15.12 7.390625 13 C 7.390625 10.88 8.6607031 10.550781 9.9707031 10.550781 z"
                  ></path>
                </svg>
              </q-btn>
            </div>
          </transition-group>
        </div>
      </div>
      <div class="col-xs-12 justify-center items-center text-center">
        <scroll-btn> </scroll-btn>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from "vue";
import ScrollBtn from "src/components/ScrollBtn.vue";
import MyName from "src/components/MyName.vue";
const socials = ref([
  {
    name: "linkedin",
    icon: "mdi-linkedin",
    link: "https://linkedin.com/bypassingit",
    color: "blue-8",
  },

  {
    name: "github",
    icon: "mdi-github",
    link: "https://github.com/lesage20",
    color: "",
  },
  // {
  //   name: "codingame",
  //   icon: "mdi-codingame",
  //   link: "https://codingame.com/bypassingit",
  //   color: "blue",
  // },
  // {
  //   name: "upwork",
  //   icon: "mdi-upwork",
  //   link: "https://upwork.com/bypassingit",
  //   color: "green",
  // },
  {
    name: "facebook",
    icon: "mdi-facebook",
    link: "https://facebook.com/bypassingit",
    color: "blue",
  },
  {
    name: "twitter",
    icon: "mdi-twitter",
    link: "https://twitter.com/bypassingit",
    color: "info",
  },
]);
const technos = ref([
  { name: "javascript", icon: "mdi-language-javascript" },
  { name: "vuejs", icon: "mdi-vuejs" },
  { name: "electron", icon: "mdi-electron-framework" },
  { name: "python", icon: "mdi-language-python" },
  { name: "sql", icon: "mdi-database" },
]);

function onEnter(el, done) {
  el.style.animationDelay = `${el.dataset.index * 0.2}s`;
  el.classList.add("animated");
  if (el.dataset.index < socials.value.length) {
    el.classList.add("fadeInRight");
  } else {
    el.classList.add("fadeInLeft");
  }
}
</script>
<style lang="scss">
.bg-dark-1 {
  background: $dark-1;
}
.right-side-btn:hover,
.left-side-btn:hover {
  transition: transform 0.3s;
  color: $blue-1 !important;
}
.left-side-btn:hover {
  transform: translateX(50%);
}
.right-side-btn:hover {
  transform: translateX(-50%);
}
</style>
