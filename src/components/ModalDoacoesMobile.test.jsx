import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ModalDoacoesMobile } from "./ModalDoacoesMobile";

const spinner = (base) => base.querySelector(".animate-spin");

describe("ModalDoacoesMobile", () => {
  it("fica fora do DOM enquanto fechado", () => {
    render(<ModalDoacoesMobile isOpen={false} closeModal={vi.fn()} />);

    expect(screen.queryByAltText("Qr Code")).not.toBeInTheDocument();
  });

  it("mostra a instrução de pagamento e o CNPJ", () => {
    render(<ModalDoacoesMobile isOpen closeModal={vi.fn()} />);

    expect(screen.getByText(/Doe via PIX pelo aplicativo do seu banco/)).toBeInTheDocument();
    expect(screen.getByText(/07\.264\.138\/0001-47/)).toBeInTheDocument();
  });

  it("segura o QR code atrás do spinner até a imagem carregar", () => {
    const { baseElement } = render(<ModalDoacoesMobile isOpen closeModal={vi.fn()} />);

    const qr = screen.getByAltText("Qr Code");
    expect(qr.className).toContain("hidden");
    expect(spinner(baseElement)).toBeInTheDocument();

    fireEvent.load(qr);

    expect(qr.className).toContain("block");
    expect(spinner(baseElement)).not.toBeInTheDocument();
  });

  it("chama closeModal pelo botão de fechar", () => {
    const fechar = vi.fn();
    render(<ModalDoacoesMobile isOpen closeModal={fechar} />);

    fireEvent.click(screen.getByRole("button", { name: "Fechar" }));

    expect(fechar).toHaveBeenCalled();
  });
});
