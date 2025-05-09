import { Banner } from "../components/Banner"
import { Depoimentos } from "../components/Depoimentos"
import { Equipe } from "../components/Equipe"
import { Historia } from "../components/Historia"
import { Missao } from "../components/Missao"
import { Programas } from "./Programas"

export const Home = () => {
  return (
    <div>
      <Banner />
      <Historia />
      <Missao />
      <Programas />
      <Equipe />
      <Depoimentos />
    </div>
  )
}
