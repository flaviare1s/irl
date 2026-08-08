import { Link, useParams } from "react-router-dom";
import { ConteudoRico } from "../components/ConteudoRico";
import { formatarData } from "../utils/data";
import { usePost } from "../hooks/usePosts";
import { useSeo } from "../hooks/useSeo";

const Aviso = ({ titulo, texto }) => (
  <div className="text-center py-20 px-4 max-w-[600px] mx-auto">
    <h1 className="text-2xl md:text-3xl font-bold text-primary mb-3">{titulo}</h1>
    <p className="text-gray-700 leading-relaxed mb-8">{texto}</p>
    <Link
      to="/blog"
      className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-full hover:brightness-120"
    >
      Voltar para o blog
    </Link>
  </div>
);

export const Post = () => {
  const { slug } = useParams();
  const { post, carregando, erro } = usePost(slug);

  useSeo({
    title: post ? `${post.titulo} | Blog do IRL` : "Blog | Instituto Dr. Rocha Lima",
    description: post?.resumo || "Notícias e histórias do Instituto Dr. Rocha Lima.",
    path: `/blog/${slug}`,
    noIndex: !post,
  });

  if (carregando) {
    return <Aviso titulo="Carregando o post..." texto="Só um instante." />;
  }

  if (erro) {
    return (
      <Aviso
        titulo="Não conseguimos carregar este post"
        texto="Tente novamente em alguns minutos."
      />
    );
  }

  if (!post) {
    return (
      <Aviso
        titulo="Post não encontrado"
        texto="Ele pode ter sido removido ou o endereço está incorreto."
      />
    );
  }

  return (
    <article className="py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-[760px] mx-auto">
        <Link to="/blog" className="text-primary font-bold hover:underline">
          ← Voltar para o blog
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold text-primary mt-6 mb-3 leading-tight">
          {post.titulo}
        </h1>

        <p className="text-gray-600 mb-8">
          {post.publicadoEm && (
            <time dateTime={post.publicadoEm}>{formatarData(post.publicadoEm)}</time>
          )}
          {post.autor && <span> · por {post.autor}</span>}
        </p>

        {post.capa && (
          <img
            src={post.capa.url}
            alt={post.capa.alt}
            fetchPriority="high"
            decoding="async"
            className="w-full rounded-2xl mb-10 object-cover"
          />
        )}

        <div className="text-gray-800 text-lg">
          <ConteudoRico blocos={post.conteudo} />
        </div>
      </div>
    </article>
  );
};
