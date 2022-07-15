<template>
  <q-page id="about" class="flex flex-center">
    <div class="row justify-around items-center">
      <div
        v-motion-slide-visible-bottom
        class="col-12 text-center"
        v-if="$q.platform.is.mobile"
      >
        <h2 class="text-h4 text-bold text-uppercase">A propos de moi</h2>
      </div>
      <div class="col-xs-12 col-md-3">
        <q-card
          flat
          bordered
          class="q-pa-sm border-green"
          v-motion-slide-visible-bottom
        >
          <q-img contain src="~/assets/lesage.png"></q-img>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-6">
        <q-card flat>
          <div
            v-motion-slide-visible-bottom
            class="col-12 text-center"
            v-if="$q.platform.is.desktop"
          >
            <h2 class="text-h4 text-grey-4 q-my-md text-bold text-uppercase">
              A propos de moi<span class="text-bold text-green">.</span>
            </h2>
          </div>
          <q-card-section
            v-motion-slide-visible-bottom
            class="text-body1 text-grey q-pa-none"
          >
            Je suis <span class="text-blue">Ange Aymar Zanou</span> à l'etat
            civil et mon nom de éveloppeur est
            <span class="text-green">Le Sage</span>. Je suis passioné de la
            programmation depuis la classe de 1ère. Mais c'est 3 ans après que
            jaurai mon premier ordinateur ou je commence par
            <span class="text-blue">
              la cybersecurité et l'ethical hacking
            </span>
            dans lequel j'étais plutôt bon et dans le but de créer mes propres
            outils de
            <span class="text-green">pentest</span> j'ai commencer
            l'apprentissage du code un an après mon initiation à
            <span class="text-blue">l'ethical hacking</span>. Aujourd'hui je
            suis
            <span class="text-pink">
              développeur fullstack en django et vuejs </span
            >.
          </q-card-section>

          <q-card-section class="q-px-none">
            <h3 class="text-h5 bg-dark-6 text-green q-my-sm text-center">
              <q-icon
                style="display: inline-block !important"
                class="text-bold"
                name="keyboard_arrow_right_double"
                color="green"
                size="md"
              ></q-icon>
              Mes compétences
            </h3>
            <transition-group :css="false" @enter="onEnter" appear>
              <div
                v-for="(skill, i) in skills"
                :key="skill.name"
                :data-index="i"
              >
                <template v-if="skill.name != 'Django'">
                  <h4 :class="'text-h6 q-my-sm text-' + skill.color">
                    <q-icon :name="skill.icon"></q-icon> {{ skill.name }}
                  </h4>
                  <q-linear-progress
                    :track-color="skill.color + '-3'"
                    :buffer="skill.value + 0.1"
                    :color="skill.color"
                    :value="skill.value"
                  >
                  </q-linear-progress>
                </template>
                <template v-else>
                  <h4 :class="'text-h6 q-my-sm text-teal'">
                    <DjangoIcon style="margin-bottom: -5px"></DjangoIcon> Django
                  </h4>
                  <q-linear-progress
                    track-color="teal'"
                    :buffer="0.8"
                    color="teal"
                    :value="0.7"
                  >
                  </q-linear-progress>
                </template>
              </div>
            </transition-group>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import DjangoIcon from "./DjangoIcon.vue";

const skills = ref([
  { name: "VueJs", value: 0.9, color: "teal", icon: "mdi-vuejs" },
  {
    name: "Javascript",
    value: 0.9,
    color: "orange",
    icon: "mdi-language-javascript",
  },
  { name: "Python", value: 0.8, color: "blue", icon: "mdi-language-python" },
  { name: "Django", value: 0.8, color: "teal", icon: "mdi-django" },
  { name: "HTML/CSS", value: 0.7, color: "pink", icon: "mdi-language-html5" },
]);
skills.value.sort((a, b) => {
  if (a.value > b.value) return 1;
  else if (a.value == b.value) return 0;
  else return -1;
});
function onEnter(el, done) {
  el.style.animationDelay = `${el.dataset.index * 0.2}s`;
  el.classList.add("animated");
  el.classList.add("fadeInUp");
}
</script>

<style lang="scss">
.border-green {
  border-color: $teal-4;
}
</style>
