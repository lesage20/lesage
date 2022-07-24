const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        name: "home",
        meta: { label: "Accueil", icon: "home" },
      },
      {
        path: "exps",
        component: () => import("pages/ExpPage.vue"),
        name: "experiences",
        meta: { label: "Expériences", icon: "history" },
      },
      {
        path: "projets",
        component: () => import("pages/ProjectPage.vue"),
        name: "projects",
        meta: { label: "Projets", icon: "work" },
      },
      {
        path: "contacts",
        component: () => import("pages/ContactPage.vue"),
        name: "contacts",
        meta: { label: "Contacts", icon: "contacts" },
      },
      {
        path: "resume",
        name: "resume",
        component: () => import("pages/ResumeGenerator.vue"),
        meta: { label: "Resume", icon: "mdi-file-account" },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
    name: "NotFound",
  },
];

export default routes;
