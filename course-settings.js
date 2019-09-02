const courseSettings = {
  language: "fi",
  name: "Ohjelmoinnin MOOC 2019",
  subtitle: "Ohjelmoinnin alkeet kaikille, ilmaiseksi",
  slug: "ohjelmoinnin-mooc-2019",
  bannerPath: "banner.svg",
  sidebarEntries: [
    {
      title: "Tietoa kurssista",
      path: "/",
    },
    {
      title: "Osaamistavoitteet",
      path: "/osaamistavoitteet",
    },
    {
      title: "Arvostelu ja kokeet",
      path: "/arvostelu-ja-kokeet",
    },
    {
      title: "Mahdollisuus opinto-oikeuteen",
      path: "/opinto-oikeus",
    },
    { title: "Tukiväylät", path: "/tukivaylat" },
    {
      title: "Opettajille ja opinto-ohjaajille",
      path: "/opettajille",
    },
    {
      title: "Usein kysytyt kysymykset",
      path: "/usein-kysytyt-kysymykset",
    },
    { separator: true, title: "Ohjelmoinnin perusteet" },
  ],
}

module.exports = {
  default: courseSettings,
}
