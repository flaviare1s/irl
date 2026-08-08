// Cliente do Sanity (API de consulta GROQ).
//
// O blog é conteúdo público de leitura, então o dataset fica público e
// NENHUM token vai para o frontend. Token em código de navegador é público na
// prática: qualquer pessoa lê no bundle.
//
// Usa o domínio apicdn (cache na borda) em vez de api: é mais rápido e não
// consome a cota de requisições não-cacheadas.
const projeto = () => import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = () => import.meta.env.VITE_SANITY_DATASET || "production";

// Versão da API fixada: o Sanity exige data explícita para o comportamento
// não mudar sozinho quando eles lançam uma versão nova.
const VERSAO = "v2024-01-01";

export class CmsIndisponivel extends Error {}

// Campos pedidos em toda consulta. O -> resolve a referência do asset da
// imagem para a URL final no CDN do Sanity.
const CAMPOS = `
  _id,
  titulo,
  "slug": slug.current,
  resumo,
  conteudo,
  autor,
  publishedAt,
  "capa": capa{ "url": asset->url, "alt": alt }
`;

const consultar = async (groq, parametros = {}) => {
  const id = projeto();

  if (!id) {
    throw new CmsIndisponivel(
      "VITE_SANITY_PROJECT_ID não configurada: o blog não tem de onde ler os posts."
    );
  }

  // Valores vão como parâmetros ($nome), nunca concatenados na consulta — o
  // equivalente a query parametrizada. O Sanity espera cada um em JSON.
  const query = Object.entries(parametros)
    .map(([nome, valor]) => `&$${nome}=${encodeURIComponent(JSON.stringify(valor))}`)
    .join("");

  const url =
    `https://${id}.apicdn.sanity.io/${VERSAO}/data/query/${dataset()}` +
    `?query=${encodeURIComponent(groq)}${query}`;

  const resposta = await fetch(url);

  if (!resposta.ok) {
    throw new CmsIndisponivel(`Sanity respondeu ${resposta.status}`);
  }

  const { result } = await resposta.json();
  return result;
};

const normalizar = (post) => ({
  id: post._id,
  titulo: post.titulo,
  slug: post.slug,
  resumo: post.resumo ?? "",
  conteudo: post.conteudo ?? [],
  autor: post.autor ?? "",
  publicadoEm: post.publishedAt,
  capa: post.capa?.url ? { url: post.capa.url, alt: post.capa.alt ?? "" } : null,
});

export const listarPosts = async () => {
  // defined(slug.current) descarta rascunhos sem endereço, que quebrariam o
  // link do card.
  const result = await consultar(
    `*[_type == "post" && defined(slug.current)]|order(publishedAt desc)[0...50]{${CAMPOS}}`
  );
  return (result ?? []).map(normalizar);
};

export const buscarPostPorSlug = async (slug) => {
  const result = await consultar(
    `*[_type == "post" && slug.current == $slug][0]{${CAMPOS}}`,
    { slug }
  );
  return result ? normalizar(result) : null;
};
