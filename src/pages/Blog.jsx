import pattern from "../assets/img/elementos/elemento-verde1.webp";
import { PostCard } from "../components/PostCard";
import { usePosts } from "../hooks/usePosts";
import { useSeo } from "../hooks/useSeo";

const Aviso = ({ titulo, texto }) => (
  <div className="text-center py-16 px-4 max-w-[600px] mx-auto">
    <h2 className="text-2xl font-bold text-primary mb-3">{titulo}</h2>
    <p className="text-gray-700 leading-relaxed">{texto}</p>
  </div>
);

export const Blog = () => {
  const { posts, carregando, erro } = usePosts();

  useSeo({
    title: "Blog | Instituto Dr. Rocha Lima",
    description:
      "Notícias, histórias e novidades do Instituto Dr. Rocha Lima: o dia a dia dos programas, das crianças e adolescentes e das famílias atendidas.",
    path: "/blog",
  });

  return (
    <div>
      <div className="bg-primary flex flex-col justify-center items-center py-10 px-4 md:px-10">
        <div className="flex justify-center items-center gap-1 sm:gap-3">
          <img className="w-10" src={pattern} alt="" />
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl text-center font-bold">
            Blog
          </h1>
        </div>
        <p className="text-white text-center mt-4 max-w-[600px] font-medium">
          Notícias e histórias de quem faz o IRL acontecer todos os dias.
        </p>
      </div>

      <section className="py-12 px-4 md:px-10 lg:px-20 xl:px-[150px]">
        <div aria-busy={carregando} aria-live="polite">
          {carregando && <Aviso titulo="Carregando os posts..." texto="Só um instante." />}

          {!carregando && erro && (
            <Aviso
              titulo="Não conseguimos carregar o blog agora"
              texto="Tente novamente em alguns minutos. Se o problema continuar, fale com a gente pelo WhatsApp ou pelo formulário da página Faça parte."
            />
          )}

          {!carregando && !erro && posts.length === 0 && (
            <Aviso
              titulo="Ainda não há posts publicados"
              texto="Estamos preparando os primeiros conteúdos. Volte em breve para acompanhar as novidades do Instituto."
            />
          )}

          {!carregando && !erro && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <PostCard key={post.id} post={post} indice={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
