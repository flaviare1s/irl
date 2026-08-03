import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { Numero } from "./Numero";

// A animação dura 2s com passo de 10ms. Sem timer falso o teste levaria
// 2 segundos reais por caso.
const rodarAnimacao = () => act(() => vi.advanceTimersByTime(2100));

describe("Numero", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("começa em zero e termina no valor exato", () => {
    render(<Numero numero="238" descricao="Pessoas beneficiadas" />);
    expect(screen.getByText("0")).toBeInTheDocument();

    rodarAnimacao();

    expect(screen.getByText("238")).toBeInTheDocument();
  });

  // O componente troca a vírgula do en-US por ponto para o padrão brasileiro.
  it("formata milhar com ponto", () => {
    render(<Numero numero="19028" descricao="Refeições servidas" />);

    rodarAnimacao();

    expect(screen.getByText("19.028")).toBeInTheDocument();
    expect(screen.queryByText("19,028")).toBeNull();
  });

  it("nunca ultrapassa o valor final", () => {
    render(<Numero numero="58" descricao="Famílias" />);

    // Muito além da duração: o clearInterval tem que ter parado o contador.
    act(() => vi.advanceTimersByTime(10000));

    expect(screen.getByText("58")).toBeInTheDocument();
  });

  it("renderiza a descrição", () => {
    render(<Numero numero="73" descricao="Encontros do Grupo de Mulheres" />);

    expect(screen.getByText("Encontros do Grupo de Mulheres")).toBeInTheDocument();
  });

  it("limpa o intervalo ao desmontar", () => {
    const limpar = vi.spyOn(globalThis, "clearInterval");
    const { unmount } = render(<Numero numero="100" descricao="x" />);

    unmount();

    expect(limpar).toHaveBeenCalled();
  });
});
