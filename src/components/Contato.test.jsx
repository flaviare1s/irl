import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { Contato } from "./Contato";

vi.mock("emailjs-com", () => ({ default: { send: vi.fn() } }));
vi.mock("react-hot-toast", () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

const navegar = vi.fn();
vi.mock("react-router-dom", async (original) => ({
  ...(await original()),
  useNavigate: () => navegar,
}));

const montar = () =>
  render(
    <MemoryRouter>
      <Contato />
    </MemoryRouter>
  );

const preencher = async (user) => {
  await user.type(screen.getByLabelText("Nome"), "Flávia");
  await user.type(screen.getByLabelText("Email"), "flavia@exemplo.com");
  await user.type(screen.getByLabelText("Mensagem"), "Gostaria de ser voluntária.");
};

const enviar = (user) => user.click(screen.getByRole("button", { name: "Enviar" }));

describe("Contato", () => {
  beforeEach(() => vi.clearAllMocks());

  it("bloqueia o envio e aponta cada campo obrigatório", async () => {
    const user = userEvent.setup();
    montar();

    await enviar(user);

    expect(await screen.findByText("Nome é obrigatório")).toBeInTheDocument();
    expect(screen.getByText("Email é obrigatório")).toBeInTheDocument();
    expect(screen.getByText("Mensagem é obrigatória")).toBeInTheDocument();
    expect(emailjs.send).not.toHaveBeenCalled();
  });

  it("envia os dados do formulário quando tudo está preenchido", async () => {
    const user = userEvent.setup();
    emailjs.send.mockResolvedValue({ status: 200 });
    montar();

    await preencher(user);
    await enviar(user);

    await waitFor(() => expect(emailjs.send).toHaveBeenCalledTimes(1));
    expect(emailjs.send.mock.calls[0][2]).toEqual({
      nome: "Flávia",
      email: "flavia@exemplo.com",
      mensagem: "Gostaria de ser voluntária.",
    });
  });

  it("avisa e leva para /obrigado quando o envio dá certo", async () => {
    const user = userEvent.setup();
    emailjs.send.mockResolvedValue({ status: 200 });
    montar();

    await preencher(user);
    await enviar(user);

    await waitFor(() => expect(navegar).toHaveBeenCalledWith("/obrigado"));
    expect(toast.success).toHaveBeenCalledWith("Mensagem enviada com sucesso!");
  });

  // O usuário não pode ser levado para a página de agradecimento se o e-mail
  // não saiu — ele acharia que a mensagem chegou.
  it("mantém o usuário no formulário quando o envio falha", async () => {
    const user = userEvent.setup();
    emailjs.send.mockRejectedValue(new Error("rede caiu"));
    montar();

    await preencher(user);
    await enviar(user);

    await waitFor(() => expect(toast.error).toHaveBeenCalled());
    expect(navegar).not.toHaveBeenCalled();
    expect(toast.success).not.toHaveBeenCalled();
  });
});
