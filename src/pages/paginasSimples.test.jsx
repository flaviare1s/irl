import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Obrigado } from "./Obrigado";
import { NotFound } from "./NotFound";

const montar = (Pagina) =>
  render(
    <MemoryRouter>
      <Pagina />
    </MemoryRouter>
  );

const robots = () =>
  document.head.querySelector('meta[name="robots"]').getAttribute("content");

describe("Obrigado", () => {
  it("confirma o envio e oferece caminho de volta", () => {
    montar(Obrigado);

    expect(
      screen.getByRole("heading", { name: "Mensagem enviada com sucesso!" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Voltar para o início/ })).toHaveAttribute(
      "href",
      "/"
    );
  });

  // Página de pós-envio não deve aparecer na busca: quem chega nela pelo
  // Google vê uma confirmação de algo que nunca enviou.
  it("fica fora do índice de busca", () => {
    montar(Obrigado);

    expect(document.title).toBe("Mensagem enviada | Instituto Dr. Rocha Lima");
    expect(robots()).toBe("noindex, follow");
  });
});

describe("NotFound", () => {
  it("mostra o 404 e explica o que aconteceu", () => {
    montar(NotFound);

    expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
    expect(screen.getByText(/não foi encontrada/)).toBeInTheDocument();
  });

  it("fica fora do índice de busca", () => {
    montar(NotFound);

    expect(document.title).toBe("Página não encontrada | Instituto Dr. Rocha Lima");
    expect(robots()).toBe("noindex, follow");
  });
});
