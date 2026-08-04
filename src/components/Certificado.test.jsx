import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Certificado } from "./Certificado";

const props = { bgColor: "bg-living-coral", nome: "CEBAS", img: ["/cebas1.webp"] };

describe("Certificado", () => {
  it("nomeia o botão com o documento, não com o ícone", () => {
    render(<Certificado {...props} />);

    expect(
      screen.getByRole("button", { name: "Ver documento: CEBAS" })
    ).toBeInTheDocument();
  });

  it("mantém o modal fechado até o clique", () => {
    render(<Certificado {...props} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("abre o modal do documento ao clicar", async () => {
    const user = userEvent.setup();
    render(<Certificado {...props} />);

    await user.click(screen.getByRole("button", { name: "Ver documento: CEBAS" }));

    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Fechar" })).toBeInTheDocument();
  });

  it("fecha o modal pelo botão de fechar", async () => {
    const user = userEvent.setup();
    render(<Certificado {...props} />);

    await user.click(screen.getByRole("button", { name: "Ver documento: CEBAS" }));
    await user.click(await screen.findByRole("button", { name: "Fechar" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("revela o cartão ao entrar na viewport", () => {
    const { container } = render(<Certificado {...props} />);

    expect(container.firstChild.className).toContain("revelar");
  });
});
