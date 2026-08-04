import { useEffect, useRef, useState } from "react";

// Revela um elemento quando ele entra na viewport.
//
// Devolve ref + className para serem aplicados no elemento que JÁ existe, em
// vez de um componente que envolve os filhos: um <div> a mais quebraria os
// flex/grid do layout atual.
export const useRevelar = () => {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Navegador sem IntersectionObserver mostraria a página em branco, já que
    // .revelar começa em opacity 0. Melhor entregar sem animação.
    if (typeof IntersectionObserver === "undefined") {
      setVisivel(true);
      return;
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        setVisivel(true);
        observador.disconnect(); // anima uma vez só, não a cada scroll
      },
      // Adianta um pouco: o elemento termina de aparecer perto de entrar
      // de fato na tela, em vez de animar já visível.
      { rootMargin: "0px 0px -12% 0px" }
    );

    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  return { ref, className: visivel ? "revelar revelar-visivel" : "revelar" };
};
