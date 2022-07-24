<template>
  <q-card style="border-radius: none" flat>
    <q-timeline class="q-my-none" dense :layout="'dense'" color="blue">
      <h1 class="text-h4 q-mt-xl q-mb-sm">Mes Formations</h1>

      <q-timeline-entry
        icon="school"
        v-for="(exp, i) in experiences"
        :key="exp.titre"
        :data-index="i"
      >
        <template v-slot:title v-if="!Boolean(exp.type)">
          {{ exp.titre }}
        </template>
        <template v-slot:subtitle v-if="!Boolean(exp.type)">
          de {{ exp.debut }} à {{ exp.fin }}
        </template>

        <q-card flat v-if="!Boolean(exp.type)">
          <q-card-section style="font-size: 12px" class="q-pa-none text-grey-8">
            Techno Utilisées: <br v-if="$q.platform.is.mobile" />
            <q-badge
              class="q-ma-sm bg-blue-1 text-blue"
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
    titre: "Développeur Junior Backend Python/Django",
    debut: "décembre 2019",
    fin: "décembre 2020",
    description:
      "Quand j'ai arreté à l'uvci j'ai validé mon concours d'entré à NAN Digital Academy. De là bas j'ai été certifié dévéloppeur backend junior en python django",
    school: "NAN Digital Academy",
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
    titre: "Réseau Sécurité Informatique",
    debut: "novembre 2017",
    fin: "octobre 2019",
    description:
      "Après mon BAC j'ai été orienté à l'université virtuel de Cote d'Ivoire en Réseau et Sécurité Informatique. J'y ai été pendant 2 ans",
    school: "Université Virtuelle de Cote d'Ivoire ( UVCI )",
    technos: ["Kali Linux", "Pentesting", "Algorithmique", "HTML", "CSS"],
  },
]);
</script>
