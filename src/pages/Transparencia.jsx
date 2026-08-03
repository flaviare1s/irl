import { Certificados } from "../components/Certificados"
import { Numeros } from "../components/Numeros"
import { useSeo } from "../hooks/useSeo"

export const Transparencia = () => {
  useSeo({
    title: "Transparência | Instituto Dr. Rocha Lima",
    description: "Certificados, certidões e números de impacto do Instituto Dr. Rocha Lima: famílias atendidas, aulas, atividades e refeições servidas.",
    path: "/transparencia",
  })

  return (
    <div>
      <Certificados />
      <Numeros />
    </div>
  )
}
