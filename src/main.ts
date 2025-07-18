import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import i18n from "./i18n";
import App from "./App.vue";
import "./assets/styles/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
