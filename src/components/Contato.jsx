import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export const Contato = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log("onSubmit chamado");
    console.log("Dados capturados: ", data);
    try {
      toast.success("Mensagem enviada com sucesso!");
      navigate("/obrigado"); 
    } catch (error) {
      console.error("Erro no envio", error);
      toast.error("Ocorreu um erro ao enviar. Tente novamente.");
    }
  };

  const onError = (errors) => {
    console.log("Erro de validação", errors);
  };

  return (
    <form
      className="w-full md:w-1/2 mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <h2 className="text-2xl font-bold text-primary">Entre em contato</h2>
      <p className="text-gray-600">Ou mande sua mensagem pela caixa abaixo</p>

      <div className="flex flex-col">
        <label htmlFor="nome" className="text-sm font-medium text-primary">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Nome"
          {...register("nome", { required: "Nome é obrigatório" })}
          className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-primary">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          {...register("email", { required: "Email é obrigatório" })}
          className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="mensagem" className="text-sm font-medium text-primary">Mensagem</label>
        <textarea
          name="mensagem"
          id="mensagem"
          rows={5}
          {...register("mensagem", { required: "Mensagem é obrigatória" })}
          className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
        {errors.mensagem && <span className="text-red-500 text-sm">{errors.mensagem.message}</span>}
      </div>

      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-primary border border-primary transition-colors w-full cursor-pointer"
      >
        Enviar
      </button>
    </form>
  );
};
