import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { listarPosts, buscarPostPorSlug, CmsIndisponivel } from "./cms";

const PROJETO = "abc123";

const responder = (result) =>
  vi.fn().mockResolvedValue({ ok: true, json: async () => ({ result }) });

const urlChamada = () => globalThis.fetch.mock.calls[0][0];

const postCru = {
  _id: "post-1",
  titulo: "Mutirão na agrofloresta",
  slug: "mutirao-na-agrofloresta",
  resumo: "Um sábado de plantio.",
  conteudo: [{ _type: "block", children: [{ _type: "span", text: "Oi" }] }],
  autor: "Equipe IRL",
  publishedAt: "2026-03-10T12:00:00.000Z",
  capa: { url: "https://cdn.sanity.io/f.webp", alt: "Crianças plantando" },
};

describe("cliente do CMS (Sanity)", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_SANITY_PROJECT_ID", PROJETO);
    vi.stubEnv("VITE_SANITY_DATASET", "production");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("lista os posts já normalizados", async () => {
    globalThis.fetch = responder([postCru]);

    const [post] = await listarPosts();

    expect(post).toMatchObject({
      id: "post-1",
      titulo: "Mutirão na agrofloresta",
      slug: "mutirao-na-agrofloresta",
      autor: "Equipe IRL",
      publicadoEm: "2026-03-10T12:00:00.000Z",
    });
    expect(post.capa).toEqual({
      url: "https://cdn.sanity.io/f.webp",
      alt: "Crianças plantando",
    });
  });

  it("pede os posts do mais recente para o mais antigo", async () => {
    globalThis.fetch = responder([]);

    await listarPosts();

    expect(decodeURIComponent(urlChamada())).toContain("order(publishedAt desc)");
  });

  // O apicdn é cache de borda: mais rápido e não consome a cota de requisições
  // não-cacheadas do plano.
  it("consulta o domínio com cache do projeto e dataset certos", async () => {
    globalThis.fetch = responder([]);

    await listarPosts();

    expect(urlChamada()).toContain(`https://${PROJETO}.apicdn.sanity.io/`);
    expect(urlChamada()).toContain("/data/query/production");
  });

  it("usa 'production' como dataset padrão", async () => {
    vi.stubEnv("VITE_SANITY_DATASET", "");
    globalThis.fetch = responder([]);

    await listarPosts();

    expect(urlChamada()).toContain("/data/query/production");
  });

  it("aceita post sem capa, sem resumo e sem autor", async () => {
    globalThis.fetch = responder([{ _id: "p2", titulo: "T", slug: "t" }]);

    const [post] = await listarPosts();

    expect(post.capa).toBeNull();
    expect(post.resumo).toBe("");
    expect(post.autor).toBe("");
    expect(post.conteudo).toEqual([]);
  });

  it("busca um post pelo slug", async () => {
    globalThis.fetch = responder(postCru);

    const post = await buscarPostPorSlug("mutirao-na-agrofloresta");

    expect(post.titulo).toBe("Mutirão na agrofloresta");
  });

  // O slug vai como parâmetro $slug, nunca concatenado na consulta. Sem isso um
  // slug com aspas poderia reescrever o GROQ e vazar outros documentos.
  it("passa o slug como parâmetro, não concatenado na consulta", async () => {
    globalThis.fetch = responder(null);

    await buscarPostPorSlug('" || _type == "secreto');

    const url = urlChamada();
    expect(decodeURIComponent(url)).toContain("slug.current == $slug");
    expect(url).toContain("&$slug=");
    // A aspa do ataque some da parte da consulta e fica confinada no parâmetro.
    const [consulta] = url.split("&$slug=");
    expect(decodeURIComponent(consulta)).not.toContain("secreto");
  });

  it("devolve null quando o slug não existe", async () => {
    globalThis.fetch = responder(null);

    expect(await buscarPostPorSlug("nao-existe")).toBeNull();
  });

  it("falha de forma reconhecível quando o Sanity responde com erro", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({ ok: false, status: 500 });

    await expect(listarPosts()).rejects.toBeInstanceOf(CmsIndisponivel);
  });

  // Sem a variável, o site é publicado e o blog fica em branco sem explicação.
  // Melhor falhar com mensagem clara, que a página traduz para o visitante.
  it("avisa quando VITE_SANITY_PROJECT_ID não está configurada", async () => {
    vi.stubEnv("VITE_SANITY_PROJECT_ID", "");
    globalThis.fetch = responder([]);

    await expect(listarPosts()).rejects.toThrow(/VITE_SANITY_PROJECT_ID/);
    expect(globalThis.fetch).not.toHaveBeenCalled();
  });
});
