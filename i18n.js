
import i18n from "i18next"
import Backend from "i18next-xhr-backend"
import { initReactI18next } from "react-i18next"
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    ns: ["common", "user", "points-balloon"],
    defaultNS: "common",
    debug: true,
    react: {
      wait: true,
    },
    lng:"fi",


  })
export default i18n
