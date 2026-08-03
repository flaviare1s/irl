import { describe, it, expect, beforeEach, vi } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";

// jsdom não implementa window.scrollTo — sem o stub ele lança "Not implemented".
const scrollTo = vi.fn();
window.scrollTo = scrollTo;

const montarEm = (entrada) =>
  render(
    <MemoryRouter initialEntries={[entrada]}>
      <ScrollToTop />
    </MemoryRouter>
  );

describe("ScrollToTop", () => {
  beforeEach(() => scrollTo.mockClear());

  it("sobe para o topo ao entrar numa rota", () => {
    montarEm("/programas");

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });

  // ProgramaComponente navega para /programas com state.scrollTo para rolar
  // até um programa específico. Subir ao topo aqui cancelaria esse scroll.
  it("não sobe quando a navegação pede scroll para uma âncora", () => {
    montarEm({ pathname: "/programas", state: { scrollTo: "agrofloresta" } });

    expect(scrollTo).not.toHaveBeenCalled();
  });

  it("não renderiza nada no DOM", () => {
    const { container } = montarEm("/");

    expect(container).toBeEmptyDOMElement();
  });
});
