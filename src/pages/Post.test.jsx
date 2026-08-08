import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Post } from "./Post";
import { buscarPostPorSlug } from "../api/cms";

vi.mock("../api/cms", () => ({ buscarPostPorSlug: vi.fn() }));

const montar = (slug = "mutirao") =>
  render(
    <MemoryRouter initialEntries={[`/blog/${slug}`]}>
      <Routes>
        <Route path="/blog/:slug" element={<Post />} />
      </Routes>
    </MemoryRouter>
  );

const post = {
  id: 1,
  titulo: "Mutirão na agrofloresta",
  slug: "mutirao",
  resumo: "Um sábado de plantio.",
  autor: "Equipe IRL",
  publicadoEm: "2026-03-10T12:00:00.000Z",
  capa: { url: "/f.webp", alt: "Crianças plantando" },
  conteudo: [{ _type: "block", children: [{ _type: "span", text: "Foi um dia bonito." }] }],
};

describe("Post", () => {
  beforeEach(() => vi.clearAllMocks());

  it("busca pelo slug da URL", async () => {
    buscarPostPorSlug.mockResolvedValue(post);
    montar("mutirao");

    await screen.findByText(post.titulo);
    expect(buscarPostPorSlug).toHaveBeenCalledWith("mutirao");
  });

  it("mostra título, data, autor, capa e conteúdo", async () => {
    buscarPostPorSlug.mockResolvedValue(post);
    montar();

    expect(await screen.findByRole("heading", { name: post.titulo, level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/10 de março de 2026/)).toBeInTheDocument();
    expect(screen.getByText(/Equipe IRL/)).toBeInTheDocument();
    expect(screen.getByAltText("Crianças plantando")).toBeInTheDocument();
    expect(screen.getByText("Foi um dia bonito.")).toBeInTheDocument();
  });

  // A capa é o maior elemento acima da dobra do post: é ela o LCP da rota.
  it("prioriza o carregamento da capa", async () => {
    buscarPostPorSlug.mockResolvedValue(post);
    montar();

    expect(await screen.findByAltText("Crianças plantando")).toHaveAttribute(
      "fetchpriority",
      "high"
    );
  });

  it("usa o título do post no SEO e o resumo como description", async () => {
    buscarPostPorSlug.mockResolvedValue(post);
    montar();

    await screen.findByText(post.titulo);
    expect(document.title).toBe("Mutirão na agrofloresta | Blog do IRL");
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
      "content",
      "Um sábado de plantio."
    );
  });

  it("avisa enquanto carrega", () => {
    buscarPostPorSlug.mockReturnValue(new Promise(() => {}));
    montar();

    expect(screen.getByText(/Carregando o post/)).toBeInTheDocument();
  });

  it("mostra recado de falha quando o CMS não responde", async () => {
    buscarPostPorSlug.mockRejectedValue(new Error("fora do ar"));
    montar();

    expect(
      await screen.findByText(/Não conseguimos carregar este post/)
    ).toBeInTheDocument();
  });

  it("mostra 'não encontrado' para slug inexistente", async () => {
    buscarPostPorSlug.mockResolvedValue(null);
    montar("nao-existe");

    expect(await screen.findByText("Post não encontrado")).toBeInTheDocument();
  });

  // Slug inválido não pode virar página indexável, senão o Google guarda uma
  // URL que só mostra erro.
  it("marca noindex quando o post não existe", async () => {
    buscarPostPorSlug.mockResolvedValue(null);
    montar("nao-existe");

    await screen.findByText("Post não encontrado");
    expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute(
      "content",
      "noindex, follow"
    );
  });

  it("oferece caminho de volta para o blog em todos os estados", async () => {
    buscarPostPorSlug.mockResolvedValue(null);
    montar();

    expect(
      await screen.findByRole("link", { name: /Voltar para o blog/ })
    ).toHaveAttribute("href", "/blog");
  });

  it("aceita post sem capa e sem autor", async () => {
    buscarPostPorSlug.mockResolvedValue({ ...post, capa: null, autor: "" });
    montar();

    await screen.findByText(post.titulo);
    expect(screen.queryByAltText("Crianças plantando")).not.toBeInTheDocument();
    expect(screen.queryByText(/por /)).not.toBeInTheDocument();
  });
});
