import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BotaoDoacoes } from "./BotaoDoacoes";

const abrir = (user) =>
  user.click(screen.getByRole("button", { name: /Faça Parte Do IRL/ }));

describe("BotaoDoacoes", () => {
  it("não mostra o modal do PIX antes do clique", () => {
    render(<BotaoDoacoes />);

    expect(screen.queryByAltText("Qr Code")).not.toBeInTheDocument();
  });

  it("abre o modal do PIX com QR code e CNPJ", async () => {
    const user = userEvent.setup();
    render(<BotaoDoacoes />);

    await abrir(user);

    expect(await screen.findByAltText("Qr Code")).toBeInTheDocument();
    expect(screen.getByText(/07\.264\.138\/0001-47/)).toBeInTheDocument();
  });

  it("fecha o modal pelo botão de fechar", async () => {
    const user = userEvent.setup();
    render(<BotaoDoacoes />);

    await abrir(user);
    await user.click(await screen.findByRole("button", { name: "Fechar" }));

    expect(screen.queryByAltText("Qr Code")).not.toBeInTheDocument();
  });

  it("aceita cor de fundo customizada", () => {
    render(<BotaoDoacoes bgColor="bg-greenery" />);

    expect(
      screen.getByRole("button", { name: /Faça Parte Do IRL/ }).className
    ).toContain("bg-greenery");
  });
});
