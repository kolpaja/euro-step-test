import i18n from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["en", "sq", "it", "ar"],
    fallbackLng: "en",
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie', 'localStorage'],
    },
  });
export default i18n;
