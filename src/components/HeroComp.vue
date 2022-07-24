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
              :href="soc.link"
            >
              <q-tooltip class="text-body2">
                {{ soc.name }}
              </q-tooltip>
            </q-btn>
          </transition-group>
        </div>
      </div>
      <div class="col-xs-12 col-md-8 col-lg-6 col-xl-5">
        <span
          class="text-green text-body1"
          v-motion-slide-top
          v-motion-slide-visible-top
        >
          Salut je suis,
        </span>

        <my-name v-motion-slide-top v-motion-slide-visible-top></my-name>
        <h2
          class="text-bold q-my-md text-grey-5"
          :class="{
            'text-h2': $q.screen.gt.sm,
            'text-h4': $q.screen.lt.md,
          }"
          v-motion-slide-top
          v-motion-slide-visible-top
        >
          Dévéloppeur web Fullstack
        </h2>
        <p
          class="text-body1 text-grey-4"
          v-motion-slide-top
          v-motion-slide-visible-top
        >
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
            @click="analyse"
            :size="$q.screen.lt.md ? 'md' : 'lg'"
            :color="$q.screen.lt.md ? 'green' : 'teal'"
            label=" Télécharger mon cv"
            icon="download"
            :outline="$q.platform.is.mobile ? true : false"
            :class="{ 'full-width': $q.platform.is.mobile }"
            :href="myResume"
            download
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
                <q-tooltip class="text-body2">{{ techno.name }}</q-tooltip>
              </q-btn>
            </div>

            <div
              class="col"
              :data-index="socials.length + technos.length"
              key="django"
            >
              <q-btn class="right-side-btn" color="primary" flat round>
                <django-icon></django-icon>
                <q-tooltip
                  anchor="bottom left "
                  position="left"
                  class="text-body2"
                >
                  django
                </q-tooltip>
              </q-btn>
            </div>
          </transition-group>
        </div>
      </div>
      <div
        class="col-xs-12 desktop-only justify-center items-center text-center"
      >
        <scroll-btn @move="move" to="about"> </scroll-btn>
      </div>
      <q-page-sticky :offset="[18, 20]" class="mobile-only">
        <scroll-btn class="bg-dark-3" @move="move" to="about"> </scroll-btn>
      </q-page-sticky>
    </div>
  </q-page>
</template>
<script setup>
import { ref, inject } from "vue";
import ScrollBtn from "src/components/ScrollBtn.vue";
import MyName from "src/components/MyName.vue";
import DjangoIcon from "./DjangoIcon.vue";
import { event } from "vue-gtag";

const myResume = new URL("../assets/cv_ange_aymar_zanou.pdf", import.meta.url)
  .href;
const anchors = inject("anchors");
const emits = defineEmits(["move"]);
const socials = ref([
  {
    name: "linkedin",
    icon: "mdi-linkedin",
    link: "https://www.linkedin.com/in/ange-aymar-zanou-0b6165183",
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
    link: "https://facebook.com/thehrcker",
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
  el.style.animationDelay = `${el.dataset.index * 0.1}s`;
  el.classList.add("animated");
  if (el.dataset.index < socials.value.length) {
    el.classList.add("fadeInRight");
  } else {
    el.classList.add("fadeInLeft");
  }
}

function move(value) {
  console.log(value);
  anchors.about = true;
  console.log(anchors);
}
const analyticCount = ref(1);
function analyse() {
  analyticCount.value += 1;
  event("test-analytics-click", {
    event_category: "FirstAnalytic",
    event_label: "TestAnalytics",
    value: analyticCount.value,
  });
}
</script>
<style lang="scss">
// .right-side-btn:hover,
// .left-side-btn:hover {
//   transition: transform 0.3s;
//   color: $blue-1 !important;
// }
// .left-side-btn:hover {
//   transform: translateX(50%);
// }
// .right-side-btn:hover {
//   transform: translateX(-50%);
// }
</style>
