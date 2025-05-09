import { Banner } from "../components/Banner"
import { Depoimentos } from "../components/Depoimentos"
import { Equipe } from "../components/Equipe"
import { Historia } from "../components/Historia"
import { Missao } from "../components/Missao"
import { ODS } from "../components/ODS"
import { ProgramasSection } from "../components/ProgramasSection"

export const Home = () => {
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
