import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { useRevelar } from "./useRevelar";

// jsdom não traz IntersectionObserver: este dublê guarda o callback para o
// teste decidir quando o elemento "entra" na viewport.
const criarObserverFalso = () => {
  const instancias = [];
  const Falso = vi.fn(function (callback) {
    this.callback = callback;
    this.observe = vi.fn();
    this.disconnect = vi.fn();
    instancias.push(this);
  });
  return { Falso, instancias };
};

// O hook só observa se a ref estiver num elemento real, então o teste precisa
// montar um componente de verdade em vez de usar renderHook.
const Alvo = () => {
  const revelar = useRevelar();
  return <div data-testid="alvo" ref={revelar.ref} className={revelar.className} />;
};

const classes = () => screen.getByTestId("alvo").className;

describe("useRevelar", () => {
  let original;

  beforeEach(() => {
    original = globalThis.IntersectionObserver;
  });

  afterEach(() => {
    globalThis.IntersectionObserver = original;
  });

  it("começa oculto enquanto o elemento não entrou na viewport", () => {
    const { Falso } = criarObserverFalso();
    globalThis.IntersectionObserver = Falso;

    render(<Alvo />);

    expect(classes()).toBe("revelar");
  });

  it("passa a observar o elemento montado", () => {
    const { Falso, instancias } = criarObserverFalso();
    globalThis.IntersectionObserver = Falso;

    render(<Alvo />);

    expect(instancias[0].observe).toHaveBeenCalledWith(screen.getByTestId("alvo"));
  });

  it("revela quando o elemento entra na viewport", () => {
    const { Falso, instancias } = criarObserverFalso();
    globalThis.IntersectionObserver = Falso;

    render(<Alvo />);
    act(() => instancias[0].callback([{ isIntersecting: true }]));

    expect(classes()).toBe("revelar revelar-visivel");
  });

  it("continua oculto em interseção negativa", () => {
    const { Falso, instancias } = criarObserverFalso();
    globalThis.IntersectionObserver = Falso;

    render(<Alvo />);
    act(() => instancias[0].callback([{ isIntersecting: false }]));

    expect(classes()).toBe("revelar");
  });

  it("desconecta após revelar, para não reanimar a cada scroll", () => {
    const { Falso, instancias } = criarObserverFalso();
    globalThis.IntersectionObserver = Falso;

    render(<Alvo />);
    act(() => instancias[0].callback([{ isIntersecting: true }]));

    expect(instancias[0].disconnect).toHaveBeenCalled();
  });

  // Modo de falha mais grave: .revelar começa em opacity 0, então sem esta
  // saída o site inteiro ficaria invisível num navegador sem a API.
  it("mostra o conteúdo quando o navegador não tem IntersectionObserver", () => {
    globalThis.IntersectionObserver = undefined;

    render(<Alvo />);

    expect(classes()).toContain("revelar-visivel");
  });
});
