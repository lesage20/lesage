<template>
  <q-page>
    <q-dialog maximized v-model="view">
      <q-card class="">
        <div class="col-xs-12 col-md-10">
          <q-toolbar>
            <q-btn @click="view = false" icon="arrow_back"></q-btn>
          </q-toolbar>
        </div>
        <div
          style="width: 100%"
          class="row flex flex-centerbg-transparent justify-center"
        >
          <div class="col-xs-12 col-md-10">
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
          Projet Réalisé
        </h1>
        <div class="row justify-center">
          <div class="col-xs-12 col-md-7">
            <p class="text-center text-grey text-body2">
              Ici je vous présente la liste des projets auquels j'ai participé
              ou que j'ai construit tout seul. je ne citerai pas les projets
              privés pour les entreprises question de confidentialité. Merci de
              me comprendre
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-center">
        <div
          class="col-xs-12 col-md-7 q-pa-sm"
          v-for="(proj, i) in projects"
          :key="proj.name"
        >
          <q-card class="bg-dark-4">
            <q-img
              class="grow"
              @click="
                selectedImg = proj.img;
                view = true;
              "
              :src="proj.img"
            >
            </q-img>
            <q-badge
              :class="
                'bg-dark-2 text-body1 rounded-borders text-' + proj.labelColor
              "
              floating
              v-if="proj.label"
            >
              <q-icon left :name="proj.labelIcon"></q-icon>
              {{ proj.label }}
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
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    name: "paradisias",
    img: new URL("../assets/paradisias-web.png", import.meta.url).href,
    type: "Application de gestion d'hotel",
    description: `Paradisias hotel man est un motel situé à man non loin du lycée moderne qui recoit des clients pour des séjours.
    Passez là bas quand vous faite un tour à man ou quand vous faite escale à man durant votre trajet`,
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
    img: new URL("../assets/sagecoders.png", import.meta.url).href,
    type: "Site web landing page",
    description: `Sagecoders est une startup qui offre des service informatiques notamment en developpement web et web marketing afin d'accompagner les startup.`,
    tags: ["VueJS", "Vuetify", "Material Design"],
    lien: "https://lesage20.github.io",
  },
  {
    name: "djinana",
    img: new URL("../assets/djinana.png", import.meta.url).href,
    type: "Application de recolte d'info",
    description: `Vous n'avez pas d'eau chez vous visitez le site de djinana et signalez votre problème et la sodeci va vous visitez.`,
    tags: ["Python", "Django", "VueJS", "Vuetify", "Material Design"],
    lien: "https://djinana.netlify.app",
    label: "compétion",
    labelColor: "pink",
    labelIcon: "mdi-school",
  },
  {
    name: "sagetodo",
    img: new URL("../assets/sagetodo.png", import.meta.url).href,
    type: "Application de gestion d'hotel",
    description: `gérez vos taches de la journée en toute simplicité grace à sage todo assez simple et facile d'utilisation avec une interface intuitive`,
    tags: ["Python", "Django", "VueJS", "Vuetify", "Material Design"],
    lien: "https://github.com/lesage20/todo",
  },
  {
    name: "transaction",
    img: new URL("../assets/transaction-desktop-app.png", import.meta.url).href,
    type: "Application de gestion de transaction",
    description: `Application desktop de gestion de transaction plus axé sur les vendeur de produit agricoles`,
    tags: ["ElectronJS", "VueJS", "Bootstrap", "Javascript"],
    lien: "https://github.com/lesage20/transactions",
    label: "sur commande",
    labelColor: "green",
    labelIcon: "task",
  },
]);
const view = ref(false);
</script>
<style>
.grow {
  transition: transform 0.3s;
  opacity: 0.9;
}
.grow:hover {
  transition: all 0.3s;
  opacity: 1;
}
</style>
