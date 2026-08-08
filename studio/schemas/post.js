// Modelo do post do blog. Os nomes dos campos estão em português porque quem
// preenche é a equipe do Instituto, não desenvolvedores.
export const post = {
  name: "post",
  title: "Post do blog",
  type: "document",
  fields: [
    {
      name: "titulo",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().max(120),
    },
    {
      name: "slug",
      title: "Endereço da página",
      type: "slug",
      description: "Gerado a partir do título. É o que aparece na URL do post.",
      options: { source: "titulo", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Data de publicação",
      type: "datetime",
      description: "Os posts aparecem no site do mais recente para o mais antigo.",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: "resumo",
      title: "Resumo",
      type: "text",
      rows: 3,
      description:
        "Aparece no cartão da listagem e no Google. Duas ou três linhas bastam.",
      validation: (Rule) => Rule.max(300),
    },
    {
      name: "capa",
      title: "Imagem de capa",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Descrição da imagem",
          type: "string",
          description:
            "Descreva o que aparece na foto. É lido por quem usa leitor de tela.",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "autor",
      title: "Autor",
      type: "string",
      description: 'Opcional. Ex.: "Equipe IRL".',
    },
    {
      name: "conteudo",
      title: "Conteúdo",
      type: "array",
      of: [
        {
          type: "block",
          // Sem H1: o título do post já é o h1 da página. Deixar um segundo
          // h1 no corpo quebra a hierarquia de cabeçalhos.
          styles: [
            { title: "Parágrafo", value: "normal" },
            { title: "Título", value: "h2" },
            { title: "Subtítulo", value: "h3" },
            { title: "Citação", value: "blockquote" },
          ],
          lists: [
            { title: "Lista", value: "bullet" },
            { title: "Lista numerada", value: "number" },
          ],
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Descrição da imagem",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: { title: "titulo", subtitle: "publishedAt", media: "capa" },
  },
};
