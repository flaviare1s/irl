import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

const link = (nome) => screen.getByRole("link", { name: nome });

describe("Footer", () => {
  it.each([
    ["Instagram do IRL (abre em nova aba)", "https://www.instagram.com/somosirl"],
    ["Facebook do IRL (abre em nova aba)", "https://www.facebook.com/somosirl"],
    [
      "YouTube do IRL (abre em nova aba)",
      "https://www.youtube.com/@institutodr.rochalima-irl7019",
    ],
  ])("dá nome acessível e destino ao link %s", (nome, href) => {
    render(<Footer />);

    expect(link(nome)).toHaveAttribute("href", href);
  });

  it("abre as redes em nova aba sem vazar a janela de origem", () => {
    render(<Footer />);

    ["Instagram", "Facebook", "YouTube"].forEach((rede) => {
      const el = link(new RegExp(`^${rede} do IRL`));
      expect(el).toHaveAttribute("target", "_blank");
      expect(el.getAttribute("rel")).toContain("noopener");
    });
  });

  it("publica telefone, e-mail e endereço clicáveis", () => {
    render(<Footer />);

    expect(link(/3243-6120/)).toHaveAttribute("href", "tel:+558532436120");
    expect(link(/irl@irl\.org\.br/)).toHaveAttribute("href", "mailto:irl@irl.org.br");
    expect(link(/Eretides Martins/)).toHaveAttribute(
      "href",
      expect.stringContaining("google.com/maps")
    );
  });

  it("descreve o logo e carrega em lazy (fica no rodapé)", () => {
    render(<Footer />);

    const logo = screen.getByAltText("Logo do IRL");
    expect(logo).toHaveAttribute("loading", "lazy");
  });

  it("lista os parceiros com logo descrito", () => {
    render(<Footer />);

    [
      "Logo do Governo do Ceará",
      "Logo do SESC",
      "Logo do SESC Ativo",
    ].forEach((alt) => expect(screen.getByAltText(alt)).toBeInTheDocument());
  });

  it("usa a landmark de rodapé", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
