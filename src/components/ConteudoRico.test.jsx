import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ConteudoRico } from "./ConteudoRico";

const bloco = (texto, extra = {}) => ({
  _type: "block",
  _key: Math.random().toString(36).slice(2),
  children: [{ _type: "span", text: texto, marks: [], ...extra }],
});

const item = (texto, listItem) => ({ ...bloco(texto), listItem });

describe("ConteudoRico", () => {
  it("renderiza parágrafos", () => {
    render(<ConteudoRico blocos={[bloco("Primeiro"), bloco("Segundo")]} />);

    expect(screen.getByText("Primeiro")).toBeInTheDocument();
    expect(screen.getByText("Segundo")).toBeInTheDocument();
  });

  // "Título" no editor é h2 e precisa sair como h2. Rebaixar faria a página ir
  // do h1 do post direto para h3, pulando nível — a quebra de hierarquia que a
  // ausência de h1 no schema existe justamente para evitar.
  it.each([
    ["h2", 2],
    ["h3", 3],
  ])("mantém o nível de %s escolhido no editor", (estilo, nivel) => {
    render(<ConteudoRico blocos={[{ ...bloco("Seção"), style: estilo }]} />);

    expect(screen.getByRole("heading", { name: "Seção", level: nivel })).toBeInTheDocument();
  });

  // Conteúdo antigo pode ter h1 salvo; o piso impede dois h1 na mesma página.
  it("rebaixa h1 herdado para h2", () => {
    render(<ConteudoRico blocos={[{ ...bloco("Antigo"), style: "h1" }]} />);

    expect(screen.getByRole("heading", { name: "Antigo", level: 2 })).toBeInTheDocument();
  });

  it("não passa do h6", () => {
    render(<ConteudoRico blocos={[{ ...bloco("Fundo"), style: "h6" }]} />);

    expect(screen.getByRole("heading", { name: "Fundo", level: 6 })).toBeInTheDocument();
  });

  // No Portable Text os itens vêm como blocos irmãos com listItem. Sem
  // reagrupar, cada um sairia solto e o leitor de tela não anunciaria a lista.
  it("agrupa itens soltos numa única lista não ordenada", () => {
    const { container } = render(
      <ConteudoRico blocos={[item("Um", "bullet"), item("Dois", "bullet")]} />
    );

    expect(container.querySelectorAll("ul")).toHaveLength(1);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("usa <ol> para lista numerada", () => {
    const { container } = render(<ConteudoRico blocos={[item("Um", "number")]} />);

    expect(container.querySelector("ol")).toBeInTheDocument();
  });

  it("separa listas de tipos diferentes que estão coladas", () => {
    const { container } = render(
      <ConteudoRico blocos={[item("A", "bullet"), item("B", "number")]} />
    );

    expect(container.querySelectorAll("ul")).toHaveLength(1);
    expect(container.querySelectorAll("ol")).toHaveLength(1);
  });

  it("volta ao parágrafo depois que a lista termina", () => {
    const { container } = render(
      <ConteudoRico blocos={[item("Item", "bullet"), bloco("Depois")]} />
    );

    expect(container.querySelectorAll("ul")).toHaveLength(1);
    expect(container.querySelector("p")).toHaveTextContent("Depois");
  });

  it("renderiza citação", () => {
    const { container } = render(
      <ConteudoRico blocos={[{ ...bloco("Citação"), style: "blockquote" }]} />
    );

    expect(container.querySelector("blockquote")).toHaveTextContent("Citação");
  });

  it("renderiza imagem com texto alternativo", () => {
    render(
      <ConteudoRico
        blocos={[
          {
            _type: "image",
            _key: "i1",
            alt: "Crianças na horta",
            asset: { url: "https://cdn.test/f.webp" },
          },
        ]}
      />
    );

    expect(screen.getByAltText("Crianças na horta")).toHaveAttribute(
      "src",
      "https://cdn.test/f.webp"
    );
  });

  it.each([
    ["strong", "strong"],
    ["em", "em"],
    ["underline", "u"],
    ["strike-through", "s"],
    ["code", "code"],
  ])("aplica a marca %s", (marca, tag) => {
    const { container } = render(
      <ConteudoRico blocos={[bloco("Destaque", { marks: [marca] })]} />
    );

    expect(container.querySelector(tag)).toHaveTextContent("Destaque");
  });

  // Link no Portable Text é uma marca cuja chave aponta para markDefs.
  it("resolve link a partir de markDefs e abre externo em nova aba", () => {
    render(
      <ConteudoRico
        blocos={[
          {
            ...bloco("Site", { marks: ["k1"] }),
            markDefs: [{ _key: "k1", _type: "link", href: "https://exemplo.test" }],
          },
        ]}
      />
    );

    const link = screen.getByRole("link", { name: "Site" });
    expect(link).toHaveAttribute("href", "https://exemplo.test");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link.getAttribute("rel")).toContain("noopener");
  });

  it("mantém link interno na mesma aba", () => {
    render(
      <ConteudoRico
        blocos={[
          {
            ...bloco("Doar", { marks: ["k1"] }),
            markDefs: [{ _key: "k1", _type: "link", href: "/participe" }],
          },
        ]}
      />
    );

    expect(screen.getByRole("link", { name: "Doar" })).not.toHaveAttribute("target");
  });

  it("ignora marca sem definição correspondente", () => {
    render(<ConteudoRico blocos={[bloco("Texto", { marks: ["fantasma"] })]} />);

    expect(screen.getByText("Texto")).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  // A proteção que importa: quem escreve são pessoas da ONG, e texto colado do
  // Word ou de um site pode conter HTML. Sem dangerouslySetInnerHTML ele vira
  // texto literal em vez de marcação executada.
  it("trata HTML colado no editor como texto, não como marcação", () => {
    const { container } = render(
      <ConteudoRico blocos={[bloco('<img src=x onerror="alert(1)">')]} />
    );

    expect(container.querySelector("img")).toBeNull();
    expect(screen.getByText('<img src=x onerror="alert(1)">')).toBeInTheDocument();
  });

  it.each([undefined, null, "texto solto"])("não quebra com conteúdo %s", (valor) => {
    const { container } = render(<ConteudoRico blocos={valor} />);

    expect(container).toBeEmptyDOMElement();
  });
});
