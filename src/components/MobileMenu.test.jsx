import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

const montar = () =>
  render(
    <MemoryRouter>
      <div data-testid="fora">área fora do menu</div>
      <MobileMenu />
    </MemoryRouter>
  );

const painel = () => document.getElementById("menu-mobile");

describe("MobileMenu", () => {
  it("começa fechado, anunciado e sem foco alcançável", () => {
    montar();

    const botao = screen.getByRole("button", { name: "Abrir menu" });
    expect(botao).toHaveAttribute("aria-expanded", "false");
    expect(botao).toHaveAttribute("aria-controls", "menu-mobile");
    expect(painel()).toHaveAttribute("inert");
  });

  it("abre ao clicar, atualizando rótulo e estado", async () => {
    const user = userEvent.setup();
    montar();

    await user.click(screen.getByRole("button", { name: "Abrir menu" }));

    const botao = screen.getByRole("button", { name: "Fechar menu" });
    expect(botao).toHaveAttribute("aria-expanded", "true");
    expect(painel()).not.toHaveAttribute("inert");
  });

  it("fecha ao clicar de novo no botão", async () => {
    const user = userEvent.setup();
    montar();

    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    await user.click(screen.getByRole("button", { name: "Fechar menu" }));

    expect(screen.getByRole("button", { name: "Abrir menu" })).toHaveAttribute(
      "aria-expanded",
      "false"
    );
    expect(painel()).toHaveAttribute("inert");
  });

  it("fecha ao clicar fora", async () => {
    const user = userEvent.setup();
    montar();

    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    await user.click(screen.getByTestId("fora"));

    expect(screen.getByRole("button", { name: "Abrir menu" })).toBeInTheDocument();
    expect(painel()).toHaveAttribute("inert");
  });

  it("fecha ao navegar por um link do menu", async () => {
    const user = userEvent.setup();
    montar();

    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    await user.click(screen.getByRole("link", { name: "Programas" }));

    expect(painel()).toHaveAttribute("inert");
  });

  it("lista as quatro rotas do site", () => {
    montar();

    ["Home", "Programas", "Transparência", "Faça parte"].forEach((nome) =>
      expect(screen.getByRole("link", { name: nome })).toBeInTheDocument()
    );
  });

  // Mesmo traço permanente do menu desktop: quem escreve o aria-current é o
  // NavLink, e o CSS pendura o sublinhado nele.
  it("marca a rota atual no menu", () => {
    montar();

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "aria-current",
      "page"
    );
    expect(screen.getByRole("link", { name: "Programas" })).not.toHaveAttribute(
      "aria-current"
    );
  });
});
