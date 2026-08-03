import { lazy, Suspense } from "react"
import { Banner } from "../components/Banner"
import { Equipe } from "../components/Equipe"
import { Historia } from "../components/Historia"
import { Missao } from "../components/Missao"
import { ODS } from "../components/ODS"
import { ProgramasSection } from "../components/ProgramasSection"
import { useSeo } from "../hooks/useSeo"

// Único componente que puxa o swiper (~115KB) e fica no fim da página:
// vira chunk separado para não pesar no carregamento inicial da home.
const Depoimentos = lazy(() =>
  import("../components/Depoimentos").then((m) => ({ default: m.Depoimentos }))
)

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
      {/* Altura reservada = altura do card (h-[530px]) + título e paddings da
          seção, para o Footer não pular quando o chunk chegar. */}
      <Suspense fallback={<div className="h-[700px]" />}>
        <Depoimentos />
      </Suspense>
    </div>
  )
}
