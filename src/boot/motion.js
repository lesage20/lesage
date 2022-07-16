import { boot } from "quasar/wrappers";
import { MotionPlugin } from "@vueuse/motion";
import VueGtag from "vue-gtag";
import router from "src/router";
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  app.use(MotionPlugin);
  app.use(
    VueGtag,
    {
      config: { id: "G-7R1KX6ST9R" },
    },
    router()
  );
});
