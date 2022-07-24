<template>
  <q-page padding>
    <!-- content -->
    <div class="row justify-center">
      <div class="col-9" style="border: 1px solid transparent">
        <pdf-generator title="cv_ange_zanou">
          <template #content>
            <div class="row justify-around">
              <div class="col-4">
                <q-card flat class="text-body2">
                  <q-card-section class="text-center">
                    <q-avatar
                      style="z-index: 100; border: 1px solid lightseagreen"
                      size="150px"
                    >
                      <q-img src="~/assets/lesage.png"></q-img>
                    </q-avatar>
                  </q-card-section>
                  <q-card-section
                    class="text-center rounded-borders"
                    style="top: -40px; border-radius: 10px"
                  >
                    <h3 class="text-subtitle2 q-my-sm text-teal-7">
                      Ange Aymar Zanou
                    </h3>
                    <div>Dévéloppeur Fullstack Django et VueJS</div>
                  </q-card-section>
                  <q-card-section
                    class="q-my-lg"
                    style="top: -40px; font-size: 12px; border-radius: 10px"
                  >
                    <div
                      class="text-subtitle1 text-teal-7 text-center text-uppercas"
                    >
                      A propos de moi
                    </div>
                    Avec 1 an d'expérience en tant que Développeur Web Full
                    Stack en django et VueJS dans le domaine de la conception et
                    du développement d'applications Web, j'ai également quelques
                    connaissances sur le modèle architectural MVC Mes
                    compétences professionnelles incluent : Vuejs, Django, HTML,
                    CSS3, JavaScript et Python. En plus d'être programmeur, je
                    participe également à la conception de processus d'affaires
                    qui contribuent à améliorer l'efficacité et à accroître la
                    rentabilité.
                  </q-card-section>
                  <q-card-section
                    class="q-my-lg"
                    style="top: -40px; font-size: 12px; border-radius: 10px"
                  >
                    <div
                      class="text-subtitle1 text-teal-7 text-center text-uppercas"
                    >
                      Mes réalisations
                    </div>
                    <q-list class="q-px-none">
                      <q-item
                        style="font-size: 12px"
                        class="q-px-none"
                        v-for="i in 5"
                        :key="i"
                      >
                        <q-item-section class="q-px-none">
                          <q-item-label> Paradisias </q-item-label>
                          <a
                            style="text-decoration: none; font-size: 12px"
                            href="https://paradisias.netlify.app"
                            no-caps
                            class="q-px-none text-left text-start"
                            flat
                            size="sm"
                          >
                            https://paradisias.netlify.app
                          </a>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-card-section>

                  <q-card-section
                    class="q-my-lg"
                    style="top: -40px; font-size: 12px; border-radius: 10px"
                  >
                    <div
                      class="text-subtitle1 text-teal-7 text-center text-uppercas"
                    >
                      Me Contacter
                    </div>
                    <q-list>
                      <q-item
                        v-for="contact in contacts"
                        :key="contact.name"
                        class="q-px-none q-py-xs"
                      >
                        <q-item-section
                          style="font-size: 12px"
                          class="q-px-none"
                        >
                          <q-item-label> {{ contact.name }} </q-item-label>
                          <div class="">{{ contact.value }}</div>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-8 q-pa-md">
                <q-card flat>
                  <experiences></experiences>
                  <school-comp class="q-pt-1"></school-comp>
                  <div>
                    <q-card flat class="bg-transparent text-body2">
                      <q-card-section class="q-py-none">
                        <q-toolbar class="q-py-none">
                          Langues Parlées
                        </q-toolbar>
                        <q-list>
                          <q-item class="q-py-none">
                            <q-item-section>
                              <q-item-label>
                                Francais : lu et parlé
                                <q-badge class="bg-teal-1 text-teal" align="top"
                                  >natif
                                </q-badge>
                              </q-item-label>
                            </q-item-section>
                          </q-item>
                          <q-item class="q-py-none">
                            <q-item-label>
                              Anglais : lu et parlé
                              <q-badge
                                class="bg-orange-1 text-orange"
                                align="top"
                              >
                                Intermediaire
                              </q-badge>
                            </q-item-label>
                          </q-item>
                        </q-list>
                      </q-card-section>
                      <q-card-section class="q-py-none">
                        Autre
                        <q-list>
                          <q-item class="q-py-none">
                            <q-item-section>
                              <q-item-label>
                                Francais : lu et parlé
                                <q-badge class="bg-teal-1 text-teal" align="top"
                                  >natif
                                </q-badge>
                              </q-item-label>
                            </q-item-section>
                          </q-item>
                          <q-item class="q-py-none">
                            <q-item-label>
                              Anglais : lu et parlé
                              <q-badge
                                class="bg-orange-1 text-orange"
                                align="top"
                              >
                                Intermediaire
                              </q-badge>
                            </q-item-label>
                          </q-item>
                        </q-list>
                      </q-card-section>
                    </q-card>
                  </div>
                </q-card>
              </div>
            </div>
          </template>
        </pdf-generator>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import AboutMe from "src/components/AboutMe.vue";
import PdfGenerator from "src/components/PdfGenerator.vue";
import Experiences from "src/components/ExperiencesComp.vue";
import { ref } from "vue";
import html2pdf from "html2pdf.js";
import { useQuasar } from "quasar";
import SchoolComp from "../components/SchoolComp.vue";

const $q = useQuasar();
$q.dark.toggle();
const contacts = ref([
  {
    name: "Portable",
    value: "+2250555884378",
  },
  {
    name: "Whatsapp",
    value: "+2250787572030",
  },
  {
    name: "Email",
    value: "angezanou00@gmail.com",
  },
  {
    name: "github",
    value: "https://github.com/lesage20",
  },
  {
    name: "LinkedIn",
    value: "https://www.linkedin.com/in/ange-aymar-zanou-0b6165183",
  },
]);
</script>
<style scoped>
.q-timeline__title {
  margin: 0 0 5px !important;
}
.q-timeline__content {
  padding: 0 0 10px !important;
}
</style>
