import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BotaoDoacoesFixed } from "./BotaoDoacoesFixed";

const bandeja = () => document.getElementById("bandeja-pix");
const botao = () => screen.getByRole("button", { name: /Faça Parte Do IRL/ });

describe("BotaoDoacoesFixed + bandeja do PIX", () => {
  it("começa fechada, anunciada como recolhida e fora do alcance do teclado", () => {
    render(<BotaoDoacoesFixed />);

    expect(botao()).toHaveAttribute("aria-expanded", "false");
    expect(botao()).toHaveAttribute("aria-controls", "bandeja-pix");
    expect(bandeja()).toHaveAttribute("inert");
  });

  it("abre ao clicar", async () => {
    const user = userEvent.setup();
    render(<BotaoDoacoesFixed />);

    await user.click(botao());

    expect(botao()).toHaveAttribute("aria-expanded", "true");
    expect(bandeja()).not.toHaveAttribute("inert");
  });

  it("fecha ao clicar de novo", async () => {
    const user = userEvent.setup();
    render(<BotaoDoacoesFixed />);

    await user.click(botao());
    await user.click(botao());

    expect(botao()).toHaveAttribute("aria-expanded", "false");
    expect(bandeja()).toHaveAttribute("inert");
  });

  // Fechada ela ocupa a mesma área da tela; sem isto engoliria cliques
  // destinados ao que está atrás.
  it("não intercepta cliques enquanto está fechada", () => {
    render(<BotaoDoacoesFixed />);

    expect(bandeja().className).toContain("pointer-events-none");
  });

  // O ganho de performance da troca: `right` é propriedade de layout e forçava
  // recálculo a cada frame; translate e opacity rodam no compositor.
  it("anima translate e opacity, não propriedade de layout", () => {
    render(<BotaoDoacoesFixed />);

    const classes = bandeja().className;
    expect(classes).not.toMatch(/transition-all|right-\[100px\]/);
  });

  it("mostra o QR code e o CNPJ para doação", () => {
    render(<BotaoDoacoesFixed />);

    expect(screen.getByAltText("Qr Code")).toBeInTheDocument();
    expect(screen.getByText(/07\.264\.138\/0001-47/)).toBeInTheDocument();
  });
});
