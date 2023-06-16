import React from "react"
import Helmet from "react-helmet"
import Layout from "../templates/Layout"
import Container from "../components/Container"
import { withLoginStateContext } from "../contexes/LoginStateContext"

const Credits = () => (
  <Layout>
    <Container>
      <Helmet title="Kiitokset ja materiaalista" />
      <h1>Kiitokset ja materiaalista</h1>
      <p>
        Kurssin on tehnyt Helsingin yliopiston{" "}
        <a
          href="https://www.helsinki.fi/en/researchgroups/data-driven-education"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agile Education Research -tutkimusryhmä
        </a>
        .
      </p>
      <h2>Kurssimateriaali</h2>

      <p>
        Kurssimateriaalin ovat kirjoittaneet Arto Hellas (né Vihavainen) ja
        Matti Luukkainen. Kurssin sisältöön ovat myös vaikuttaneet seuraavat
        henkilöt (listattu aakkosjärjestyksessä):
      </p>

      <ul>
        <li>Antti Laaksonen</li>
        <li>Antti Leinonen</li>
        <li>Henrik Nygren</li>
        <li>Joel Kaasinen</li>
        <li>Juhana Laurinharju</li>
        <li>Juho Leinonen</li>
        <li>Martin Pärtel</li>
        <li>Matti Paksula</li>
        <li>Mikael Nousiainen</li>
        <li>Nea Pirttinen</li>
        <li>Pekka Mikkola</li>
        <li>Reetta Puska</li>
        <li>Vilma Kangas</li>
      </ul>

      <p>
        Kurssin materiaali on lisensoitu{" "}
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Creative Commons BY-NC-SA 4.0
        </a>{" "}
        -lisenssillä, joten voit käyttää ja levittää sitä vapaasti, kunhan
        alkuperäisten tekijöiden nimiä ei poisteta. Jos teet muutoksia
        materiaaliin ja haluat levittää muunneltua versiota, se täytyy
        lisensoida samalla lisenssillä. Materiaalien käyttö kaupalliseen
        tarkoitukseen on ilman erillistä lupaa kielletty.
      </p>

      <h2>Kurssilla käytössä oleva teknologia</h2>

      <p>
        Kurssin sivun ovat tehneet{" "}
        <a
          href="https://github.com/nygrenh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Henrik Nygren
        </a>{" "}
        ja{" "}
        <a
          href="https://github.com/redande"
          target="_blank"
          rel="noopener noreferrer"
        >
          Antti Leinonen
        </a>
        . Helsingin yliopiston{" "}
        <a
          href="https://www.helsinki.fi/en/researchgroups/data-driven-education"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agile Education Research -tutkimusryhmä
        </a>{" "}
        on luonut ja ylläpitää kurssilla käytettyä ohjelmointitehtävien
        palautusympäristöä{" "}
        <a href="https://tmc.mooc.fi" target="_blank" rel="noopener noreferrer">
          Test My Code
        </a>
        :a, Test My Coden liitännäisiä ohjelmointiympäristöhin,
        kurssimateriaalissa olevaa kyselyjärjestelmää ja muita
        kurssimateriaalissa olevia vempaimia (widgettejä).
      </p>
    </Container>
  </Layout>
)

export default withLoginStateContext(Credits)
