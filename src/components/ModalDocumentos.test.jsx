import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ModalDocumentos } from "./ModalDocumentos";

const abrir = (props) =>
  render(<ModalDocumentos isOpen closeModal={vi.fn()} nome="CEBAS" {...props} />);

const spinner = (container) => container.querySelector(".animate-spin");

describe("ModalDocumentos", () => {
  it("não renderiza nada enquanto fechado", () => {
    render(
      <ModalDocumentos isOpen={false} closeModal={vi.fn()} nome="CEBAS" img="/a.webp" />
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("mostra uma única página quando recebe uma imagem só", () => {
    abrir({ img: "/cmas.webp" });

    const foto = screen.getByAltText("CEBAS");
    expect(foto).toHaveAttribute("src", "/cmas.webp");
  });

  it("vira carrossel numerado quando recebe várias imagens", () => {
    abrir({ img: ["/cebas1.webp", "/cebas2.webp"] });

    expect(screen.getByAltText("CEBAS página 1")).toBeInTheDocument();
    expect(screen.getByAltText("CEBAS página 2")).toBeInTheDocument();
    expect(screen.queryByAltText("CEBAS")).not.toBeInTheDocument();
  });

  it("troca o spinner pela imagem quando ela termina de carregar", () => {
    const { baseElement } = abrir({ img: "/cmas.webp" });

    expect(spinner(baseElement)).toBeInTheDocument();
    const foto = screen.getByAltText("CEBAS");
    expect(foto.className).toContain("hidden");

    fireEvent.load(foto);

    expect(spinner(baseElement)).not.toBeInTheDocument();
    expect(foto.className).toContain("block");
  });

  it("dá nome ao botão de fechar, que só tem 'X'", () => {
    abrir({ img: "/cmas.webp" });

    expect(screen.getByRole("button", { name: "Fechar" })).toBeInTheDocument();
  });

  it("chama closeModal ao clicar em fechar", () => {
    const fechar = vi.fn();
    render(
      <ModalDocumentos isOpen closeModal={fechar} nome="CEBAS" img="/cmas.webp" />
    );

    fireEvent.click(screen.getByRole("button", { name: "Fechar" }));

    expect(fechar).toHaveBeenCalled();
  });
});
