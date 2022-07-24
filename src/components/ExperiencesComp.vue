<template>
  <q-card style="border-radius: none" flat>
    <q-timeline class="q-my-none" dense :layout="'dense'" color="secondary">
      <h1 class="text-h4 text-grey-8 q-my-none">
        Mon Expérience Professionnel
      </h1>

      <q-timeline-entry
        icon="work"
        v-for="(exp, i) in experiences"
        :key="exp.titre"
        :data-index="i"
      >
        <template v-slot:title v-if="!Boolean(exp.type)">
          <h2 class="text-grey-8 text-subtitle2">
            {{ exp.titre }}
          </h2>
        </template>
        <template v-slot:subtitle v-if="!Boolean(exp.type)">
          de {{ exp.debut }} à {{ exp.fin }}
        </template>

        <q-card flat v-if="!Boolean(exp.type)">
          <q-card-section style="font-size: 12px" class="q-pa-none text-grey-7">
            Techno Utilisées: <br v-if="$q.platform.is.mobile" />
            <q-badge
              class="q-ma-sm bg-teal-1 text-teal"
              v-for="techno in exp.technos"
              :key="techno"
            >
              {{ techno }}
            </q-badge>
          </q-card-section>
          <q-card-section style="font-size: 13px" class="text-bod q-pa-none">
            {{ exp.description }} <br />
          </q-card-section>
        </q-card>
      </q-timeline-entry>
    </q-timeline>
  </q-card>
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
]);
</script>
