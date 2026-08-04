import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("monta o esqueleto do site: header, main e footer", () => {
    render(<App />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("abre na Home", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /Instituto Dr\. Rocha Lima/, level: 1 })
    ).toBeInTheDocument();
  });

  it("mantém o main com altura mínima reservada", () => {
    render(<App />);

    expect(screen.getByRole("main").className).toContain("min-h-screen");
  });

  it("expõe os atalhos fixos de doação e WhatsApp", () => {
    render(<App />);

    expect(
      screen.getAllByRole("link", { name: /WhatsApp/ }).length
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("button", { name: /Faça Parte Do IRL/ }).length
    ).toBeGreaterThan(0);
  });

  it("navega para Programas pelo menu e carrega o chunk da rota", async () => {
    const user = userEvent.setup();
    render(<App />);

    const menu = within(screen.getByRole("banner"));
    await user.click(menu.getAllByRole("link", { name: "Programas" })[0]);

    expect(
      await screen.findByRole("heading", { name: /Programa Acolhendo e Convivendo/ })
    ).toBeInTheDocument();
  });

  // Cada rota é um chunk lazy próprio; entrar direto na URL exercita o
  // import dinâmico de cada uma.
  it.each([
    ["/transparencia", /Certificados e Certidões/],
    ["/participe", /Como nos encontrar/],
    ["/obrigado", /Mensagem enviada com sucesso/],
  ])("carrega a rota %s ao entrar direto pela URL", async (rota, texto) => {
    window.history.pushState({}, "", rota);
    render(<App />);

    expect(await screen.findByText(texto)).toBeInTheDocument();
    window.history.pushState({}, "", "/");
  });

  it("cai no 404 em rota inexistente", async () => {
    window.history.pushState({}, "", "/rota-que-nao-existe");
    render(<App />);

    expect(await screen.findByText("404")).toBeInTheDocument();
    window.history.pushState({}, "", "/");
  });
});
