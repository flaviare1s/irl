import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from "./Home";

const montar = () =>
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

describe("Home", () => {
  it("define o SEO da landing page", () => {
    montar();

    expect(document.title).toContain("Instituto Dr. Rocha Lima");
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://www.irl.org.br/"
    );
  });

  it("monta as seções da página na ordem esperada", () => {
    montar();

    // Sessao repete o título (versão mobile + desktop), daí o getAllByText.
    ["Nossa História", "Nossa Missão", "Nossa Equipe"].forEach((titulo) =>
      expect(screen.getAllByText(titulo).length).toBeGreaterThan(0)
    );
    expect(screen.getByText("Nossos Programas")).toBeInTheDocument();
  });

  it("usa <picture> no banner para não baixar as duas versões", () => {
    const { container } = montar();

    const picture = container.querySelector("picture");
    expect(picture).toBeInTheDocument();
    expect(picture.querySelector("source")).toHaveAttribute(
      "media",
      "(min-width: 768px)"
    );
  });

  // O banner é o elemento do LCP: lazy aqui é justamente o que o Lighthouse
  // reclama, e sem prioridade alta ele compete com o resto da página.
  it("prioriza a imagem do banner e nunca a adia", () => {
    montar();

    const banner = screen.getByAltText("Fachada central do IRL");
    expect(banner).toHaveAttribute("fetchpriority", "high");
    expect(banner).not.toHaveAttribute("loading", "lazy");
  });

  it("lista os três programas com link para a página de programas", async () => {
    montar();

    expect(
      await screen.findByRole("button", { name: /Programa Acolhendo e Convivendo/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Grupo de Mulheres Francisca Clotilde/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Sistema Agroflorestal/ })
    ).toBeInTheDocument();
  });

  it("mostra os marcos da história do instituto", () => {
    montar();

    expect(screen.getByText("1913")).toBeInTheDocument();
    expect(screen.getByText("2015")).toBeInTheDocument();
  });

  it("não deixa imagem sem alt em nenhuma seção", () => {
    const { container } = montar();

    container.querySelectorAll("img").forEach((img) => {
      expect(img).toHaveAttribute("alt");
    });
  });
});
