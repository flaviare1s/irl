import { useSeo } from "../hooks/useSeo";

export const Obrigado = () => {
  useSeo({
    title: "Mensagem enviada | Instituto Dr. Rocha Lima",
    description: "Recebemos seu contato. Em breve retornaremos a sua mensagem.",
    path: "/obrigado",
    noIndex: true,
  });

  return (
    <div className="min-h-screen flex items-center justify-center text-primary px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-2xl md:text-4xl font-bold">Mensagem enviada com sucesso!</h1>
        <p className="text-lg">
          Agradecemos pelo seu contato. Em breve retornaremos a sua mensagem.
        </p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-primary text-white font-semibold rounded shadow hover:bg-white hover:text-primary border border-primary transition-colors"
        >
          Voltar para o início
        </a>
      </div>
    </div>
  );
};
