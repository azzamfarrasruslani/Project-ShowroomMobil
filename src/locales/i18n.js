import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import idTranslation from "./id.json";

const resources = {
  en: { translation: enTranslation },
  id: { translation: idTranslation },
};

// Ambil dari localStorage, kalau tidak ada pakai 'id'
const savedLang = localStorage.getItem("language") || "id";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang,
  fallbackLng: "id",
  interpolation: { escapeValue: false },
});

export default i18n;
