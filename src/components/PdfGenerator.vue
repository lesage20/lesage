<template>
  <div id="container">
    <div id="content" ref="content">
      <slot name="content"></slot>
    </div>
    <div class="footer">
      <q-toolbar>
        <q-space></q-space>
        <q-btn color="primary" @click="generate">
          Télécharger le pdf
          <q-tooltip class="text-body2">
            Télécharge directement le fichier
          </q-tooltip>
        </q-btn>
        <q-btn
          color="primary q-mx-md"
          label="appercu pdf"
          @click="preview = true"
        >
          <q-tooltip class="text-body2">
            Affiche un apperçu avant de télécharger le fichier
          </q-tooltip>
        </q-btn>

        <q-dialog
          v-model="preview"
          :maximized="$q.platform.is.mobile"
          transition-show="slide-up"
          transition-hide="slide-down"
        >
          <q-card style="max-width: 800px">
            <div v-html="content.innerHTML"></div>
            <q-toolbar>
              <div class="row justify-between full-width">
                <div v-show="progress" class="col-xs-8">
                  <span class="q-my-lg"> Téléchargement en cour........ </span>
                  <q-linear-progress indeterminate rounded> </q-linear-progress>
                </div>
                <q-space></q-space>
                <div class="col-xs-4 q-pl-md">
                  <q-btn
                    color="negative"
                    label="Annuler"
                    flat
                    @click="preview = false"
                  >
                    <q-tooltip> Ne pas télécharger le fichier </q-tooltip>
                  </q-btn>
                  <q-btn
                    color="primary"
                    label="Télecharger"
                    flat
                    @click="generate"
                  >
                    <q-tooltip> Télécharge le fichier </q-tooltip>
                  </q-btn>
                </div>
              </div>
            </q-toolbar>
          </q-card>
        </q-dialog>
      </q-toolbar>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import html2pdf from "html2pdf.js";
import { useQuasar } from "quasar";
const $q = useQuasar();
const content = ref();
onMounted(() => {
  content.value;
});
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const preview = ref(false);
const progress = ref(0);
const toPrint = ref("");
function generate() {
  progress.value = 25;
  if (!$q.platform.is.desktop) {
    $q.dialog({
      title: "Avertissement",
      message:
        "Vous êtes sur le point de générer un rapport depuis un appareil mobile. l'affichage ne sera pas agréable mais une fois le rapport téléchargé vous aurez un fichier format A4 ",
      ok: "Continuer",
      cancel: "Annuler",
    })
      .onOk((data) => {
        const options = {
          margin: [5, 5],
          filename: props.title + ".pdf",
          image: { type: "jpeg", quality: 1.0 },
          html2canvas: { dpi: 75, scale: 2, letterRendering: true },
          pagebreak: { mode: ["avoid-all", "css", "legacy"] },
          jsPDF: {
            orientation: "portrait",
            unit: "mm",
            format: "a4",
          },
        };
        html2pdf()
          .from(content.value)
          .set(options)
          .toPdf()
          .get("pdf")
          .then(
            (pdf) => {
              console.log("getHeight:", content.value);
              var totalPages = pdf.internal.getNumberOfPages();

              for (let i = 1; i <= totalPages; i++) {
                // set footer to every page
                pdf.setPage(i);
                // set footer font
                pdf.setFontSize(100);
                pdf.setTextColor(150);
                // this example gets internal pageSize just as an example to locate your text near the borders in case you want to do something like "Page 3 out of 4"
                pdf.setFontSize(10);
                pdf.text("Le Sage Developer Fullstack", 10, 290);
                pdf.text("Contact: +225 0787572030", 157, 290);
              }
              progress.value = 75;
            },
            (err) => {
              console.log(err);
            }
          )
          .save()
          .then(() => {
            progress.value = 0;
            $q.notify("Fichier Téléchargé avec succès");
          });
      })
      .onCancel(() => {
        $q.notify("Téléchargement annulé");
      });
  } else {
    const options = {
      margin: [5, 5],
      filename: props.title + ".pdf",
      image: { type: "jpeg", quality: 1.0 },
      html2canvas: { dpi: 75, scale: 2, letterRendering: true },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      jsPDF: {
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      },
    };
    console.log(content.value);
    html2pdf()
      .from(content.value)
      .set(options)
      .toPdf()
      .get("pdf")
      .then(
        (pdf) => {
          // pdf.setTextColor("grey");
          // pdf.setFillColor("#020c1b");
          // pdf.setDrawColor("0.1", "0.3", "0.5");

          var totalPages = pdf.internal.getNumberOfPages();

          for (let i = 1; i <= totalPages; i++) {
            // set footer to every page
            pdf.setPage(i);
            // set footer font
            pdf.setTextColor("gray");
            // this example gets internal pageSize just as an example to locate your text near the borders in case you want to do something like "Page 3 out of 4"
            pdf.setFontSize(9);

            pdf.text(
              "Tel: +225 0555884378 Whatsapp: +225 0787572030 ",
              130,
              290
            );
          }
          progress.value = 75;
        },
        (err) => {
          console.log(err);
        }
      )

      .save()
      .then(() => {
        progress.value = 0;
        $q.notify("Fichier Téléchargé avec succès");
      });
  }
}
function addHeaderFooter(pdf) {
  var numberOfPages = pdf.internal.getNumberOfPages();
  var pdfPages = pdf.internal.pages;
  const myFooter = "Le Sage Developeur Fullstack";
  for (var i = 1; i < pdfPages.length; i++) {
    // We are telling our pdf that we are now working on this page
    pdf.setPage(i);
    // The 10,200 value is only for A4 landscape. You need to define your own for other page sizes
    pdf.text(myFooter, 10, 200);
    pdf.text("Le sage", 10, 10);
  }
}
</script>
