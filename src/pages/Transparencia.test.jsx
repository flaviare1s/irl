import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Transparencia } from "./Transparencia";

const montar = () =>
  render(
    <MemoryRouter>
      <Transparencia />
    </MemoryRouter>
  );

describe("Transparencia", () => {
  afterEach(() => vi.useRealTimers());

  it("define o SEO da própria rota", () => {
    montar();

    expect(document.title).toBe("Transparência | Instituto Dr. Rocha Lima");
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://www.irl.org.br/transparencia"
    );
  });

  it("lista os certificados com nome acessível no botão", () => {
    montar();

    ["Utilidade Pública Municipal", "CMAS", "Utilidade Pública Estadual", "CEBAS"].forEach(
      (nome) =>
        expect(
          screen.getByRole("button", { name: `Ver documento: ${nome}` })
        ).toBeInTheDocument()
    );
  });

  it("mostra os números de impacto ao fim da contagem", () => {
    vi.useFakeTimers();
    montar();

    act(() => vi.advanceTimersByTime(2100));

    expect(screen.getByText("58")).toBeInTheDocument();
    expect(screen.getByText("238")).toBeInTheDocument();
  });

  it("traz os dois títulos de seção", () => {
    montar();

    expect(screen.getByText("Certificados e Certidões")).toBeInTheDocument();
    expect(screen.getByText(/Números de impacto/)).toBeInTheDocument();
  });
});
