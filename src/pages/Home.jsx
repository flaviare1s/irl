import { Banner } from "../components/Banner"
import { Depoimentos } from "../components/Depoimentos"
import { Equipe } from "../components/Equipe"
import { Historia } from "../components/Historia"
import { Missao } from "../components/Missao"
import { ODS } from "../components/ODS"
import { ProgramasSection } from "../components/ProgramasSection"
import { useSeo } from "../hooks/useSeo"

export const Home = () => {
  useSeo({
    title: "Instituto Dr. Rocha Lima de Proteção e Assistência à Infância",
    description: "Programas sociais que transformam a vida de crianças e adolescentes por meio de educação, cultura e acolhimento. Conheça o IRL, em Fortaleza (CE).",
    path: "/",
  })

  return (
    <div>
      <Banner />
      <Historia />
      <Missao />
      <ProgramasSection />
      <ODS />
      <Equipe />
      <Depoimentos />
    </div>
  )
}
