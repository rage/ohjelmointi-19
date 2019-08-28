import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import courseSettings from "./course-settings"
import commonEN from "./public/locales/en/common"
import pointsBalloonEN from "./public/locales/en/points-balloon"
import userEN from "./public/locales/en/user"
import commonFI from "./public/locales/fi/common"
import pointsBalloonFI from "./public/locales/fi/points-balloon"
import userFI from "./public/locales/fi/user"

const resources = {
  en:{
    common: commonEN,
    "points-balloon": pointsBalloonEN,
    user: userEN
  },
  fi: {
    common: commonFI,
    "points-balloon": pointsBalloonFI,
    user:userFI
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    ns: ["common", "user", "points-balloon"],
    defaultNS: "common",
    react: {
      wait: true,
    },
    lng: courseSettings.language,


  })
export default i18n
