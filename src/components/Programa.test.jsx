import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Programa } from "./Programa";

const base = {
  id: "acolhendo",
  img: "/acolhendo.webp",
  titulo: "Programa Acolhendo e Convivendo",
  paragrafos: ["Primeiro parágrafo.", "Segundo parágrafo."],
  bgColor: "primary",
  color: "white",
};

const fotoDo = (container) => container.querySelector("img[src='/acolhendo.webp']");

describe("Programa", () => {
  // Os dois atributos são mutuamente exclusivos: lazy no elemento do LCP é
  // justamente o que o Lighthouse reclama, e prioridade alta nos de baixo da
  // página rouba banda do que está visível.
  it("com prioridade: pede prioridade alta e nunca lazy", () => {
    const { container } = render(<Programa {...base} prioridade />);

    const img = fotoDo(container);
    expect(img).toHaveAttribute("fetchpriority", "high");
    expect(img).not.toHaveAttribute("loading");
  });

  it("sem prioridade: entra em lazy e nunca com prioridade alta", () => {
    const { container } = render(<Programa {...base} />);

    const img = fotoDo(container);
    expect(img).toHaveAttribute("loading", "lazy");
    expect(img).not.toHaveAttribute("fetchpriority");
  });

  it("renderiza o título e todos os parágrafos", () => {
    const { getByText } = render(<Programa {...base} />);

    expect(getByText(base.titulo)).toBeInTheDocument();
    base.paragrafos.forEach((p) => expect(getByText(p)).toBeInTheDocument());
  });

  it("expõe o id na seção para a navegação por âncora", () => {
    const { container } = render(<Programa {...base} />);

    expect(container.querySelector("section#acolhendo")).toBeInTheDocument();
  });

  it("marca os elementos gráficos como decorativos", () => {
    const { container } = render(
      <Programa {...base} elementoGrafico1="/x.webp" elementoGrafico2="/y.webp" />
    );

    ["/x.webp", "/y.webp"].forEach((src) => {
      const el = container.querySelector(`img[src='${src}']`);
      expect(el.getAttribute("alt")).toBe("");
    });
  });
});
