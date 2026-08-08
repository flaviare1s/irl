import { Link } from "react-router-dom";
import { useRevelar } from "../hooks/useRevelar";
import { formatarData } from "../utils/data";

const CORES = ["bg-living-coral", "bg-freesia", "bg-greenery", "bg-radiant-orchid"];

export const PostCard = ({ post, indice = 0 }) => {
  const revelar = useRevelar();
  const cor = CORES[indice % CORES.length];

  return (
    <article
      ref={revelar.ref}
      className={`${revelar.className} bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300`}
    >
      <div className={`${cor} h-2`} />

      {post.capa && (
        <img
          src={post.capa.url}
          alt={post.capa.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-[200px] object-cover"
        />
      )}

      <div className="flex flex-col flex-grow p-6">
        {post.publicadoEm && (
          <time dateTime={post.publicadoEm} className="text-sm text-gray-600 mb-2">
            {formatarData(post.publicadoEm)}
          </time>
        )}

        <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">
          <Link to={`/blog/${post.slug}`} className="hover:underline">
            {post.titulo}
          </Link>
        </h2>

        {post.resumo && (
          <p className="text-gray-700 leading-relaxed flex-grow">{post.resumo}</p>
        )}

        <Link
          to={`/blog/${post.slug}`}
          className="mt-4 font-bold text-primary hover:underline self-start"
          aria-label={`Ler o post ${post.titulo}`}
        >
          Ler mais →
        </Link>
      </div>
    </article>
  );
};
