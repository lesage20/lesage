import { boot } from "quasar/wrappers";
import VueGtag from "vue-gtag";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  app.use(VueGtag, {
    config: { id: "G-7R1KX6ST9R" },
  });
});
