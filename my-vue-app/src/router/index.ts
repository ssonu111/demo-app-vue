import { createRouter, createWebHistory } from "vue-router";

import App1Layout from "@/views/App1/App1Layout.vue";
import DashboardView from "@/views/App1/pages/DashboardView.vue";
import ListView from "@/views/App1/pages/ListView.vue";
import App2View from "@/views/App2/App2View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: App1Layout,
      children: [
        {
          path: "",
          name: "dashboard",
          component: DashboardView,
        },
        {
          path: "list",
          name: "list",
          component: ListView,
        },
      ],
    },
    {
      path: "/app2",
      name: "app2",
      component: App2View,
    },
  ],
});

export default router;
