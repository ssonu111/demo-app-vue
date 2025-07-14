import { describe, it, expect } from "vitest";
import { createRouter, createMemoryHistory } from "vue-router";
import DashboardView from "@/views/App1/pages/DashboardView.vue";
import ListView from "@/views/App1/pages/ListView.vue";
import App1Layout from "@/views/App1/App1Layout.vue";

const routes = [
  {
    path: "/",
    component: App1Layout,
    children: [
      { path: "", name: "dashboard", component: DashboardView },
      { path: "list", name: "list", component: ListView },
    ],
  },
];

describe("Application Routing", () => {
  it('renders the DashboardView for the root "/" route', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: routes,
    });

    await router.push("/");
    await router.isReady();

    const matchedComponents = router.currentRoute.value.matched;
    expect(matchedComponents.some((record) => record.name === "dashboard")).toBe(true);
  });

  it('renders the ListView for the "/list" route', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: routes,
    });

    await router.push("/list");
    await router.isReady();

    const matchedComponents = router.currentRoute.value.matched;
    expect(matchedComponents.some((record) => record.name === "list")).toBe(true);
  });
});
