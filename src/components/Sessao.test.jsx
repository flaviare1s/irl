import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Sessao } from "./Sessao";

describe("Sessao", () => {
  it("renderiza <img> quando o arquivo é imagem", () => {
    render(<Sessao title="Nossa Equipe" img="/equipe.webp" descricao="Equipe reunida" />);

    const img = screen.getByAltText("Equipe reunida");
    expect(img.tagName).toBe("IMG");
    expect(img).toHaveAttribute("src", "/equipe.webp");
  });

  it.each(["/video.mp4", "/video.webm", "/video.ogg"])(
    "renderiza <video> para %s",
    (arquivo) => {
      const { container } = render(<Sessao title="Nossa Missão" img={arquivo} />);

      const video = container.querySelector("video");
      expect(video).toBeInTheDocument();
      expect(container.querySelector("img[src='" + arquivo + "']")).toBeNull();
    }
  );

  // alt={undefined} não renderiza o atributo, e o Lighthouse acusa image-alt.
  // O default '' garante que a imagem sempre declare se é decorativa.
  it("sempre emite o atributo alt, mesmo sem descricao", () => {
    const { container } = render(<Sessao title="Nossa Equipe" img="/equipe.webp" />);

    const img = container.querySelector("img[src='/equipe.webp']");
    expect(img).toHaveAttribute("alt");
    expect(img.getAttribute("alt")).toBe("");
  });

  it("usa o title como nome acessível do vídeo quando não há descricao", () => {
    const { container } = render(<Sessao title="Nossa Missão" img="/video.mp4" />);

    expect(container.querySelector("video")).toHaveAttribute("aria-label", "Nossa Missão");
  });

  it("prefere a descricao ao title no nome acessível do vídeo", () => {
    const { container } = render(
      <Sessao title="Nossa Missão" img="/video.mp4" descricao="Crianças na horta" />
    );

    expect(container.querySelector("video")).toHaveAttribute(
      "aria-label",
      "Crianças na horta"
    );
  });

  // O vídeo tem 12,5MB: preload='auto' faria o navegador puxar tudo no load.
  it("não deixa o vídeo pré-carregar o arquivo inteiro", () => {
    const { container } = render(<Sessao title="Nossa Missão" img="/video.mp4" />);

    expect(container.querySelector("video")).toHaveAttribute("preload", "metadata");
  });

  it("carrega a imagem de conteúdo em lazy (fica fora da dobra)", () => {
    const { container } = render(<Sessao title="Nossa Equipe" img="/equipe.webp" />);

    expect(container.querySelector("img[src='/equipe.webp']")).toHaveAttribute(
      "loading",
      "lazy"
    );
  });

  it("marca os elementos gráficos como decorativos", () => {
    const { container } = render(
      <Sessao title="Nossa Equipe" img="/equipe.webp" elementoGrafico1="/x.webp" />
    );

    const decorativos = container.querySelectorAll("img[src='/x.webp']");
    expect(decorativos.length).toBeGreaterThan(0);
    decorativos.forEach((el) => expect(el.getAttribute("alt")).toBe(""));
  });
});
