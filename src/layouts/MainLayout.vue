<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      dark
      unelevated
      class="q-ma-none q-pa-none"
      :class="{
        'bg-dark': $q.dark.mode,
        'bg-white text-dark': !$q.dark.mode,
      }"
    >
      <transition
        appear
        enter-active-class="animated slideInDown"
        leave-active-class="animated slideOutUp"
        mode="out-in"
      >
        <q-tabs
          v-show="scrollPosition <= 40"
          v-scroll="onscroll"
          class="q-ma-none q-pa-none text-center"
          dense
          v-if="$q.platform.is.mobile"
          :dark="$q.dark.mode"
          :class="{
            'bg-dark': $q.dark.mode,
            'bg-white text-dark': !$q.dark.mode,
          }"
        >
          <q-tab
            class="text-center"
            v-for="social in socials"
            :key="social.name"
            round
            flat
            :color="social.color"
            :icon="social.icon"
            :href="social.link"
          ></q-tab>
        </q-tabs>
      </transition>
      <q-toolbar
        :dark="$q.dark.mode"
        class="q-ma-none q-py-none"
        :class="{
          'bg-dark': $q.dark.mode,
          'bg-white text-dark': !$q.dark.mode,
        }"
      >
        <q-toolbar-title class="q-ml-sm">
          <span class="text-green">Le</span>
          <span class="text-blue">Sage</span>
        </q-toolbar-title>
        <div class="q-pr-md" v-if="$q.platform.is.desktop">
          <q-btn
            v-for="route in $router"
            :key="route"
            no-caps
            dense
            flat
            class="text-grey"
          >
            <span class="text-green q-mr-xs">01. </span> Accueil
          </q-btn>
          <q-btn no-caps dense flat class="text-grey">
            <span class="text-green q-mr-xs">01. </span> Accueil
          </q-btn>
          <q-btn class="text-grey" dense no-caps flat>
            <span class="text-green q-mr-xs">02. </span> Expériences
          </q-btn>
          <q-btn class="text-grey" dense no-caps flat>
            <span class="text-green q-mr-xs">03. </span> Projets
          </q-btn>
          <q-btn class="text-grey" dense no-caps flat>
            <span class="text-green q-mr-xs">04. </span> Contact
          </q-btn>
        </div>
        <q-btn
          no-caps
          label="Mon CV"
          outline
          :size="$q.screen.name"
          color="green"
        >
        </q-btn>
        <!-- <q-btn dense no-caps @click="$q.dark.toggle" flat icon="more_vert">
        </q-btn> -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      v-if="$q.platform.is.mobile"
      :class="{
        'bg-white text-grey-7': !$q.dark.mode,
        'bg-dark text-grey-7': $q.dark.mode,
      }"
      dense
      reveal
    >
      <!-- <q-toolbar class="q-ma-none q-pa-none q-pt-xs">
        <q-btn-group flat active-class="text-green">
          <q-btn dense no-caps icon="home" flat label="Accueil"></q-btn>
          <q-btn
            dense
            no-caps
            icon="check_circle"
            flat
            label="Réalisations"
          ></q-btn>
          <q-btn dense no-caps icon="contacts" flat label="Contact"></q-btn>
          <q-btn dense no-caps icon="history" flat label="Histoire"></q-btn>
        </q-btn-group>
      </q-toolbar> -->
      <q-btn-toggle
        v-model="selected"
        spread
        no-caps
        toggle-color="transparent"
        :options="[
          { value: 'home', slot: 'home' },
          { value: 'experience', slot: 'experience' },
          { value: 'projects', slot: 'projects' },
          { value: 'contact', slot: 'contact' },
          { value: 'history', slot: 'history' },
        ]"
      >
        <template #home>
          <q-btn
            dense
            no-caps
            :class="selected == 'home' ? 'text-teal bg-transparent' : ''"
            icon="home"
            flat
            label="Accueil"
          ></q-btn>
        </template>
        <template #contact>
          <q-btn
            dense
            no-caps
            icon="contacts"
            flat
            label="Contact"
            :class="selected == 'contact' ? 'text-teal bg-transparent' : ''"
          ></q-btn>
        </template>
        <template #projects>
          <q-btn
            dense
            no-caps
            icon="check_circle"
            flat
            label="Projets"
            :class="selected == 'projects' ? 'text-teal bg-transparent' : ''"
          ></q-btn>
        </template>
        <template #history>
          <q-btn
            dense
            no-caps
            icon="history"
            flat
            label="Histoire"
            :class="selected == 'history' ? 'text-teal bg-transparent' : ''"
          ></q-btn>
        </template>
        <template #experience>
          <q-btn
            dense
            no-caps
            icon="history"
            flat
            label="Expériences"
            :class="selected == 'experience' ? 'text-teal bg-transparent' : ''"
          ></q-btn>
        </template>
      </q-btn-toggle>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const router = useRouter();
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
]);
const $q = useQuasar();
$q.dark.set(true);
const linksList = ref([
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
]);

const scrollPosition = ref(0);
function onscroll(position) {
  console.log(position);
  scrollPosition.value = position;
}
const selected = ref("");
</script>
