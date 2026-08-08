import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Blog } from "./Blog";
import { listarPosts } from "../api/cms";

vi.mock("../api/cms", () => ({ listarPosts: vi.fn() }));

const montar = () =>
  render(
    <MemoryRouter>
      <Blog />
    </MemoryRouter>
  );

const post = (id, titulo) => ({
  id,
  titulo,
  slug: `post-${id}`,
  resumo: `Resumo do ${titulo}`,
  publicadoEm: "2026-03-10T12:00:00.000Z",
  capa: { url: "/f.webp", alt: "Capa" },
});

describe("Blog", () => {
  beforeEach(() => vi.clearAllMocks());

  it("define o SEO da rota", async () => {
    listarPosts.mockResolvedValue([]);
    montar();

    expect(document.title).toBe("Blog | Instituto Dr. Rocha Lima");
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://www.irl.org.br/blog"
    );
  });

  it("avisa enquanto está buscando", () => {
    listarPosts.mockReturnValue(new Promise(() => {}));
    montar();

    expect(screen.getByText(/Carregando os posts/)).toBeInTheDocument();
  });

  it("lista os posts publicados", async () => {
    listarPosts.mockResolvedValue([post(1, "Mutirão"), post(2, "Formatura")]);
    montar();

    expect(await screen.findByText("Mutirão")).toBeInTheDocument();
    expect(screen.getByText("Formatura")).toBeInTheDocument();
  });

  // Blog novo começa vazio: a tela precisa explicar isso em vez de parecer
  // quebrada para o visitante.
  it("explica quando ainda não há nada publicado", async () => {
    listarPosts.mockResolvedValue([]);
    montar();

    expect(await screen.findByText(/Ainda não há posts publicados/)).toBeInTheDocument();
  });

  it("mostra recado de falha quando o CMS não responde", async () => {
    listarPosts.mockRejectedValue(new Error("fora do ar"));
    montar();

    expect(
      await screen.findByText(/Não conseguimos carregar o blog agora/)
    ).toBeInTheDocument();
  });

  // Sem aria-busy o leitor de tela anuncia a região como vazia e não avisa
  // quando o conteúdo chega.
  it("marca a região como ocupada enquanto carrega", () => {
    listarPosts.mockReturnValue(new Promise(() => {}));
    const { container } = montar();

    expect(container.querySelector('[aria-busy="true"]')).toBeInTheDocument();
  });

  it("usa um h1 único na página", async () => {
    listarPosts.mockResolvedValue([post(1, "Mutirão")]);
    montar();

    await screen.findByText("Mutirão");
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });
});
