import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import idTranslation from "./id.json";

const resources = {
  en: { translation: enTranslation },
  id: { translation: idTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "id", // Bahasa default Indonesia
  fallbackLng: "id", // Jika bahasa tidak tersedia, pakai bahasa Indonesia
  interpolation: { escapeValue: false },
});

export default i18n;
