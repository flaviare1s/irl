import { useEffect, useState } from "react";
import { listarPosts, buscarPostPorSlug } from "../api/cms";

const useBusca = (buscar, dependencias) => {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let ativo = true;
    setCarregando(true);
    setErro(null);

    buscar()
      .then((resultado) => {
        if (ativo) setDados(resultado);
      })
      .catch((e) => {
        if (ativo) setErro(e);
      })
      .finally(() => {
        if (ativo) setCarregando(false);
      });

    return () => {
      ativo = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencias);

  return { dados, carregando, erro };
};

export const usePosts = () => {
  const { dados, carregando, erro } = useBusca(listarPosts, []);
  return { posts: dados ?? [], carregando, erro };
};

export const usePost = (slug) => {
  const { dados, carregando, erro } = useBusca(
    () => buscarPostPorSlug(slug),
    [slug]
  );
  return { post: dados, carregando, erro };
};
