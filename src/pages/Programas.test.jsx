import { describe, it, expect, afterEach, beforeEach, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Programas } from "./Programas";

// jsdom não implementa scrollIntoView.
const rolarAte = vi.fn();
Element.prototype.scrollIntoView = rolarAte;

// Chegando pelo "+" de um card da home, o id vem no state da navegação.
const montarVindoDe = (scrollTo) => {
  const r = render(
    <MemoryRouter initialEntries={[{ pathname: "/programas", state: { scrollTo } }]}>
      <Programas />
    </MemoryRouter>
  );
  act(() => vi.advanceTimersByTime(1100));
  return r;
};

// A página mostra um LoadingScreen por 1s antes de liberar o scroll até a
// âncora; sem adiantar o timer os testes esperariam de verdade.
const montar = () => {
  const r = render(
    <MemoryRouter>
      <Programas />
    </MemoryRouter>
  );
  act(() => vi.advanceTimersByTime(1100));
  return r;
};

describe("Programas", () => {
  beforeEach(() => rolarAte.mockClear());
  afterEach(() => vi.useRealTimers());

  it("define o SEO da própria rota", () => {
    vi.useFakeTimers();
    montar();

    expect(document.title).toBe("Nossos Programas | Instituto Dr. Rocha Lima");
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://www.irl.org.br/programas"
    );
  });

  it("renderiza os três programas com âncora própria", () => {
    vi.useFakeTimers();
    const { container } = montar();

    ["acolhendo-e-convivendo", "agrofloresta", "grupo-de-mulheres-francisca-clotilde"].forEach(
      (id) => expect(container.querySelector(`section#${id}`)).toBeInTheDocument()
    );
  });

  // Só o primeiro programa fica acima da dobra: ele é o LCP da rota.
  it("prioriza apenas a imagem do primeiro programa", () => {
    vi.useFakeTimers();
    const { container } = montar();

    const fotos = [...container.querySelectorAll("section[id] img[alt='Imagem do programa']")];
    const prioritarias = fotos.filter((i) => i.getAttribute("fetchpriority") === "high");
    const adiadas = fotos.filter((i) => i.getAttribute("loading") === "lazy");

    expect(fotos).toHaveLength(3);
    expect(prioritarias).toHaveLength(1);
    expect(adiadas).toHaveLength(2);
  });

  // Fecha o fluxo que começa no "+" do card da home: o id chega pelo state e
  // a página tem que rolar até aquele programa, não parar no topo.
  it("rola até o programa pedido na navegação", () => {
    vi.useFakeTimers();
    montarVindoDe("agrofloresta");

    expect(rolarAte).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("não rola quando a navegação não pede âncora", () => {
    vi.useFakeTimers();
    montarVindoDe(undefined);

    expect(rolarAte).not.toHaveBeenCalled();
  });

  it("ignora âncora inexistente sem quebrar", () => {
    vi.useFakeTimers();
    montarVindoDe("programa-que-nao-existe");

    expect(rolarAte).not.toHaveBeenCalled();
  });

  it("mostra os títulos dos programas", () => {
    vi.useFakeTimers();
    montar();

    expect(screen.getByText("Programa Acolhendo e Convivendo")).toBeInTheDocument();
    expect(screen.getByText("Sistema Agroflorestal - SAF")).toBeInTheDocument();
    expect(screen.getByText("Grupo de Mulheres Francisca Clotilde")).toBeInTheDocument();
  });
});
