import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { ProgramaComponente } from "./ProgramaComponente";

const navegar = vi.fn();
vi.mock("react-router-dom", async (original) => ({
  ...(await original()),
  useNavigate: () => navegar,
}));

const props = {
  id: "agrofloresta",
  img: "/figura4.webp",
  nome: "Sistema Agroflorestal - SAF",
  texto: "Incentivo a uma vida sustentável.",
};

const montar = () =>
  render(
    <MemoryRouter>
      <ProgramaComponente {...props} />
    </MemoryRouter>
  );

describe("ProgramaComponente", () => {
  it("nomeia o botão '+' pelo programa de destino", () => {
    montar();

    expect(
      screen.getByRole("button", { name: `Ir para o programa ${props.nome}` })
    ).toBeInTheDocument();
  });

  it("navega levando o id do programa no state", async () => {
    const user = userEvent.setup();
    navegar.mockClear();
    montar();

    await user.click(screen.getByRole("button", { name: /Ir para o programa/ }));

    expect(navegar).toHaveBeenCalledWith("/programas", {
      state: { scrollTo: "agrofloresta" },
    });
  });

  it("mostra nome, texto e imagem do card", () => {
    montar();

    expect(screen.getByRole("heading", { name: props.nome })).toBeInTheDocument();
    expect(screen.getByText(props.texto)).toBeInTheDocument();
    expect(screen.getByAltText(props.nome)).toHaveAttribute("loading", "lazy");
  });

  it("revela o card ao entrar na viewport", () => {
    const { container } = montar();

    expect(container.firstChild.className).toContain("revelar");
  });
});
