import { createI18n } from "vue-i18n";
import en from "./locales/en.json";

// setup localization
const i18n = createI18n({
  legacy: false, // use the new composition api
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
  },
});

export default i18n;
