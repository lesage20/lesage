<template>
  <q-page padding v-scroll="checkScroll">
    <div class="row justify-center">
      <div class="col-xs-12 col-md-10">
        <div class="row">
          <q-timeline
            :layout="$q.screen.lt.sm ? 'dense' : 'comfortable'"
            color="secondary"
          >
            <q-timeline-entry heading>
              Mon Expérience Professionnel
            </q-timeline-entry>

            <transition-group
              :css="false"
              @before-enter="onBeforeEnter"
              @enter="onEnter"
              @leave="onLeave"
              appear
            >
              <q-timeline-entry
                icon="work"
                v-for="(exp, i) in experiences"
                :key="exp.titre"
                :heading="exp.type ? true : false"
                :data-index="i"
              >
                <span v-if="exp.type">{{ exp.titre }}</span>
                <template v-slot:title v-if="!Boolean(exp.type)">
                  {{ exp.titre }}
                </template>
                <template v-slot:subtitle v-if="!Boolean(exp.type)">
                  de {{ exp.debut }} à {{ exp.fin }}
                </template>

                <q-card flat v-if="!Boolean(exp.type)">
                  <q-card-section>
                    <div class="text-subtitle1">
                      <q-chip class="bg-dark-1 text-blue">
                        Entreprise : {{ exp.entreprise }}
                      </q-chip>
                      <q-chip class="bg-dark-1 text-grey-3">
                        Début: {{ exp.debut }}
                      </q-chip>
                      <q-chip class="bg-dark-1 text-pink">
                        Fin: {{ exp.fin }}
                      </q-chip>
                    </div>
                  </q-card-section>
                  <q-card-section class="text-body1 text-grey-5">
                    Techno Utilisées: <br v-if="$q.platform.is.mobile" />
                    <q-badge
                      class="q-ma-sm bg-dark-1 text-green text-body2"
                      v-for="techno in exp.technos"
                      :key="techno"
                    >
                      {{ techno }}
                    </q-badge>
                  </q-card-section>
                  <q-card-section class="text-body1">
                    {{ exp.description }} <br />
                  </q-card-section>
                </q-card>
              </q-timeline-entry>
            </transition-group>
          </q-timeline>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const experiences = ref([
  {
    titre: "Freelancer à UpWork",
    debut: "juillet 2022",
    fin: "Maintenant",
    description:
      "Actuellement je suis freelancer à Upwork. Des personnes ou entreprises de partout dans le monde proposent des travaux et nous proposons de résoudre leur problème après interview celui qui est réténu resous le problème et recoit le montant prévu",
    entreprise: "Freelance",
    technos: [
      "Python",
      "Django",
      "Javascript",
      "VueJS",
      "Quasar",
      "HTML",
      "CSS",
    ],
  },
  {
    titre: "Dévéloppeur Frontend Hackathon Meetaf",
    debut: "19 mars 2022",
    fin: "19 mars 2022",
    description: "Actuellement je suis freelancer à ",
    entreprise: "Meetaf",
    technos: [
      "Javascript",
      "VueJs",
      "Vuetify",
      "Matérial Design",
      "HTML",
      "CSS",
    ],
  },
  { titre: "2022", type: "heading" },

  {
    titre: "Développeur Fullstack à Sogemex Industry",
    debut: "juin 2021",
    fin: "novembre 2021",
    description:
      "Après mon stage à Ivoire Datanet. J'ai été embauché à sogemex industry en tant que dévéloppeur fullstack. Labas j'ai travaillé avec des collègue sympa et compétent. J'ai aussi appris plein de chose grâce à mon supérieur qui est un crack. J'ai beaucoup aimé travaillé avec lui.",
    entreprise: "Sogemex Industry",
    technos: [
      "Python",
      "Django",
      "Javascript",
      "VueJS",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
  },
  {
    titre: "Stagiaire Développeur Fullstack à Ivoire-datanet",
    debut: "mars 2021",
    fin: "mai 2021",
    description:
      "Ce fut  mon premier stage juste après ma formation à NAN Not a Number. j'ai dévélopper le site web de la société.",
    entreprise: "Ivoire Datanet",
    technos: ["Python", "Django", "Bootstrap", "HTML", "CSS"],
  },
  { titre: "2021", type: "heading" },
]);
const tab = ref(experiences.value[0].entreprise);
function onEnter(el, done) {
  el.style.animationDelay = `${el.dataset.index * 0.2}s`;
  el.style.animationDuration = "1s";
  el.classList.add("animated");
  el.classList.add("fadeInUp");
}
function checkScroll(el) {
  console.log(el);
}
</script>
