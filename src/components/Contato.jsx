export const Contato = () => {
  return (
    <form className="w-full md:w-1/2 mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-primary">Entre em contato</h2>
      <p className="text-gray-600">Ou mande sua mensagem pela caixa abaixo</p>

      <div className="flex flex-col">
        <label htmlFor="nome" className="text-sm font-medium text-primary">Nome</label>
        <input
          type="text"
          id="nome"
          placeholder="Nome"
          className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-primary">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="mensagem" className="text-sm font-medium text-primary">Mensagem</label>
        <textarea
          name="mensagem"
          id="mensagem"
          rows={5}
          className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
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
