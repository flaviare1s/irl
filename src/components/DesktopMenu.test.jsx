import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { DesktopMenu } from "./DesktopMenu";

const montarEm = (rota) =>
  render(
    <MemoryRouter initialEntries={[rota]}>
      <DesktopMenu />
    </MemoryRouter>
  );

const link = (nome) => screen.getByRole("link", { name: nome });

describe("DesktopMenu", () => {
  it.each([
    ["/", "Home"],
    ["/programas", "Programas"],
    ["/transparencia", "Transparência"],
    ["/participe", "Faça parte"],
  ])("marca %s como rota atual", (rota, nome) => {
    montarEm(rota);

    expect(link(nome)).toHaveAttribute("aria-current", "page");
  });

  it("marca apenas um link por vez", () => {
    const { container } = montarEm("/programas");

    expect(container.querySelectorAll('[aria-current="page"]')).toHaveLength(1);
  });

  it("não deixa a Home ativa fora da raiz", () => {
    montarEm("/transparencia");

    expect(link("Home")).not.toHaveAttribute("aria-current");
  });

  it("mantém a classe do traço em todos os links", () => {
    montarEm("/");

    ["Home", "Programas", "Transparência", "Faça parte"].forEach((nome) =>
      expect(link(nome).className).toContain("link-nav")
    );
  });
});
