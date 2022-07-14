<template>
  <q-page padding>
    <q-dialog maximized v-model="view">
      <q-card>
        <div class="row">
          <div class="col-12">
            <q-toolbar>
              <q-btn @click="view = false" icon="arrow_back"></q-btn>
            </q-toolbar>
          </div>
          <div class="col-12">
            <q-img :src="selectedImg"> </q-img>
          </div>
        </div>
      </q-card>
    </q-dialog>
    <div class="row justify-center">
      <div class="col-xs-12 col-md-12">
        <h1
          class="text-center q-my-md"
          :class="$q.screen.lt.md ? 'text-h5' : 'text-h3'"
        >
          Ce que j'ai construit
        </h1>
        <p class="text-center text-grey text-body2">
          Ici je vous présente la liste des projets auquels j'ai participé ou
          que j'ai construit tout seul. je ne citerai pas les projets privés
          pour les entreprises question de confidentialité. Merci de me
          comprendre
        </p>
        <div class="row">
          <div
            class="col-xs-12 col-md-4 q-pa-sm"
            v-for="(proj, i) in projects"
            :key="proj.name"
          >
            <q-card class="bg-dark-4">
              <q-img
                @click="
                  selectedImg = proj.img;
                  view = true;
                "
                :src="proj.img"
              >
              </q-img>
              <q-badge
                class="text-body2 rounded-borders"
                floating
                v-if="proj.label"
                >{{ proj.label }}
                <q-tooltip class="text-body2">
                  L'application répond aux besoin spécifique du client
                </q-tooltip>
              </q-badge>

              <q-card-section>
                <div class="text-h6 text-grey-4">
                  <q-btn color="green" flat :href="proj.lien">
                    {{ i + 1 }}. {{ proj.name.toLocaleUpperCase() }}
                  </q-btn>
                </div>
                <q-badge class="bg-dark-1 text-subtitle1 text-blue">
                  {{ proj.type }}
                </q-badge>
                <div class="text-body2">
                  Tags:
                  <q-badge
                    class="q-ma-sm bg-dark-3 text-pink-4"
                    v-for="tag in proj.tags"
                    :key="tag"
                  >
                    {{ tag }}
                  </q-badge>
                </div>
                <div class="text-grey-4 q-py-md text-body2">
                  {{ proj.description }}
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    name: "paradisias",
    img: "src/assets/paradisias-web.png",
    type: "Application de gestion d'hotel",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur at beatae inventore ea temporibus officiis nulla illo, pariatur magni saepe asperiores adipisci eveniet ab! Officia quibusdam minus laudantium soluta!`,
    tags: [
      "Python",
      "Django",
      "VueJS",
      "Quasar",
      "Material Design",
      "electronJS",
      "PWA",
      "Rest API",
    ],
    lien: "https://paradisias.netlify.app",
  },
  {
    name: "sagecoders",
    img: "src/assets/sagecoders.png",
    type: "Application de gestion d'hotel",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur at beatae inventore ea temporibus officiis nulla illo, pariatur magni saepe asperiores adipisci eveniet ab! Officia quibusdam minus laudantium soluta!`,
    tags: ["VueJS", "Vuetify", "Material Design"],
    lien: "https://lesage20.github.io",
  },
  {
    name: "djinana",
    img: "src/assets/djinana.png",
    type: "Application de gestion d'hotel",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur at beatae inventore ea temporibus officiis nulla illo, pariatur magni saepe asperiores adipisci eveniet ab! Officia quibusdam minus laudantium soluta!`,
    tags: ["Python", "Django", "VueJS", "Vuetify", "Material Design"],
    lien: "https://djinana.netlify.app",
  },
  {
    name: "sagetodo",
    img: "src/assets/sagetodo.png",
    type: "Application de gestion d'hotel",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur at beatae inventore ea temporibus officiis nulla illo, pariatur magni saepe asperiores adipisci eveniet ab! Officia quibusdam minus laudantium soluta!`,
    tags: ["Python", "Django", "VueJS", "Vuetify", "Material Design"],
    lien: "https://github.com/lesage20/todo",
  },
  {
    name: "transaction",
    img: "src/assets/transaction-desktop-app.png",
    type: "Application de gestion de transaction",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequuntur at beatae inventore ea temporibus officiis nulla illo, pariatur magni saepe asperiores adipisci eveniet ab! Officia quibusdam minus laudantium soluta!`,
    tags: ["ElectronJS", "VueJS", "Bootstrap", "Javascript"],
    lien: "https://github.com/lesage20/transactions",
    label: "sur commande",
  },
]);
const view = ref(false);
</script>
