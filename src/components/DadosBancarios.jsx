import qrcode from "../assets/img/qrcode.png";

export const DadosBancarios = () => {
  return (
    <section className="bg-primary w-screen">
      <div className=" text-white grid grid-cols-1 md:grid-cols-2 gap-8 py-10 px-4 md:px-10 lg:px-20 xl:px-[200px] items-center">
        <div className="space-y-6 flex flex-col justify-center items-center md:grid">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Faça uma doação</h2>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">Banco do Brasil</h3>
            <p>Agência: 2793-6</p>
            <p>Conta Corrente: 108521-2</p>
            <p>CNPJ: 07.264.138/0001-47</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">Bradesco</h3>
            <p>Agência: 0682</p>
            <p>Conta Corrente: 0011014-0</p>
            <p>CNPJ: 07.264.138/0001-47</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src={qrcode}
            alt="Qrcode do PIX"
            className="w-[200px] h-[200px] object-contain"
          />
          <div className="text-center">
            <p className="text-lg font-semibold">Nosso PIX</p>
            <p>CNPJ: 07.264.138/0001-47</p>
          </div>
        </div>
      </div>
    </section>
  );
};
