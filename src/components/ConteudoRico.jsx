// Renderiza o Portable Text do Sanity, que chega como JSON.
//
// Nada de dangerouslySetInnerHTML: cada bloco vira componente React, então
// texto colado no editor nunca é interpretado como HTML. É imune a XSS por
// construção, o que importa aqui porque quem escreve são pessoas da ONG e não
// desenvolvedores.

const MARCAS = {
  strong: ({ children }) => <strong>{children}</strong>,
  em: ({ children }) => <em>{children}</em>,
  underline: ({ children }) => <u>{children}</u>,
  "strike-through": ({ children }) => <s>{children}</s>,
  code: ({ children }) => <code className="bg-gray-100 px-1 rounded">{children}</code>,
};

// Um span traz as marcas como lista de nomes; as de link são chaves que
// apontam para markDefs, onde mora a URL.
const Span = ({ span, markDefs }) => {
  let conteudo = span.text ?? "";

  for (const marca of span.marks ?? []) {
    const Simples = MARCAS[marca];
    if (Simples) {
      conteudo = <Simples>{conteudo}</Simples>;
      continue;
    }

    const def = markDefs?.find((d) => d._key === marca);
    if (def?._type === "link" && def.href) {
      const externo = /^https?:\/\//.test(def.href);
      conteudo = (
        <a
          href={def.href}
          className="text-primary font-bold underline"
          {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {conteudo}
        </a>
      );
    }
  }

  return conteudo;
};

const filhos = (bloco) =>
  bloco.children?.map((span, i) => (
    <Span key={span._key ?? i} span={span} markDefs={bloco.markDefs} />
  ));

// O schema não oferece "Título 1" justamente porque o título do post já é o h1
// da página. Então o nível escolhido no editor é usado como está: rebaixar
// aqui faria h1 -> h3 e pularia o h2, que é a quebra de hierarquia que a
// restrição do schema existe para evitar. O piso em h2 protege contra
// conteúdo antigo que tenha h1 salvo.
const TAMANHOS = {
  h2: "text-3xl md:text-4xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
  h5: "text-lg md:text-xl",
  h6: "text-lg",
};

const Paragrafo = ({ bloco }) => {
  const estilo = bloco.style ?? "normal";

  if (/^h[1-6]$/.test(estilo)) {
    const nivel = Math.min(Math.max(Number(estilo[1]), 2), 6);
    const Tag = `h${nivel}`;
    return (
      <Tag className={`${TAMANHOS[`h${nivel}`]} font-bold text-primary mt-8 mb-3`}>
        {filhos(bloco)}
      </Tag>
    );
  }

  if (estilo === "blockquote") {
    return (
      <blockquote className="border-l-2 border-living-coral pl-4 italic text-gray-700 my-6">
        {filhos(bloco)}
      </blockquote>
    );
  }

  return <p className="mb-4 leading-relaxed">{filhos(bloco)}</p>;
};

const Imagem = ({ bloco }) => (
  <img
    src={bloco.asset?.url ?? bloco.url}
    alt={bloco.alt ?? ""}
    loading="lazy"
    className="rounded-lg my-6 max-w-full h-auto"
  />
);

// No Portable Text os itens de lista são blocos irmãos marcados com listItem,
// e não filhos de um bloco de lista. Aqui eles são reagrupados para virar um
// <ul>/<ol> de verdade, senão cada item sairia solto e o leitor de tela não
// anunciaria "lista de N itens".
const agrupar = (blocos) => {
  const grupos = [];

  for (const bloco of blocos) {
    const tipoLista = bloco.listItem;
    const ultimo = grupos[grupos.length - 1];

    if (tipoLista && ultimo?.lista === tipoLista) {
      ultimo.itens.push(bloco);
    } else if (tipoLista) {
      grupos.push({ lista: tipoLista, itens: [bloco] });
    } else {
      grupos.push({ bloco });
    }
  }

  return grupos;
};

export const ConteudoRico = ({ blocos }) => {
  if (!Array.isArray(blocos)) return null;

  return (
    <>
      {agrupar(blocos).map((grupo, i) => {
        if (grupo.lista) {
          const Tag = grupo.lista === "number" ? "ol" : "ul";
          return (
            <Tag
              key={i}
              className={`${grupo.lista === "number" ? "list-decimal" : "list-disc"} pl-6 mb-4 space-y-1`}
            >
              {grupo.itens.map((item, j) => (
                <li key={item._key ?? j}>{filhos(item)}</li>
              ))}
            </Tag>
          );
        }

        const bloco = grupo.bloco;
        if (bloco._type === "image") {
          return <Imagem key={bloco._key ?? i} bloco={bloco} />;
        }
        return <Paragrafo key={bloco._key ?? i} bloco={bloco} />;
      })}
    </>
  );
};
