import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FacaParte } from "./FacaParte";

vi.mock("emailjs-com", () => ({ default: { send: vi.fn() } }));

const montar = () =>
  render(
    <MemoryRouter>
      <FacaParte />
    </MemoryRouter>
  );

describe("FacaParte", () => {
  it("define o SEO da própria rota", () => {
    montar();

    expect(document.title).toBe("Faça parte | Instituto Dr. Rocha Lima");
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://www.irl.org.br/participe"
    );
  });

  it("traz o formulário de contato com os três campos rotulados", () => {
    montar();

    expect(screen.getByLabelText("Nome")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Mensagem")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Enviar" })).toBeInTheDocument();
  });

  it("mostra os dados bancários para doação", () => {
    montar();

    expect(screen.getByText("Faça uma doação")).toBeInTheDocument();
    expect(screen.getByText("Banco do Brasil")).toBeInTheDocument();
    expect(screen.getByText("Bradesco")).toBeInTheDocument();
  });

  it("descreve o QR code do PIX para leitor de tela", () => {
    montar();

    expect(screen.getByAltText("Qrcode do PIX")).toBeInTheDocument();
  });
});
