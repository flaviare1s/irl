import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Depoimentos } from "./Depoimentos";

describe("Depoimentos", () => {
  it("anuncia a seção com um cabeçalho", () => {
    render(<Depoimentos />);

    expect(
      screen.getByRole("heading", { name: "O que dizem sobre nós" })
    ).toBeInTheDocument();
  });

  it("traz os depoimentos com nome e relação com o IRL", () => {
    render(<Depoimentos />);

    expect(screen.getAllByText("Inaê").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Criança Participante do A&C").length).toBeGreaterThan(0);
  });

  it("mantém o fundo colorido fora da animação de revelação", () => {
    const { container } = render(<Depoimentos />);

    const faixa = container.firstChild;
    expect(faixa.className).toContain("bg-living-coral");
    expect(faixa.className).not.toContain("revelar");
  });

  it("revela o conteúdo interno, não a faixa", () => {
    const { container } = render(<Depoimentos />);

    expect(container.querySelectorAll(".revelar").length).toBeGreaterThan(0);
  });

  it("usa a foto de cada depoente como avatar descrito pelo nome", () => {
    render(<Depoimentos />);

    expect(screen.getAllByAltText("Inaê").length).toBeGreaterThan(0);
  });
});
