export const Programa = ({ id, img, titulo, paragrafos, bgColor }) => {
  return (
    <section
      id={id}
      className={`bg-${bgColor} text-white grid grid-cols-1 md:grid-cols-2 p-10 md:px-44 md:py-20 items-center scroll-mt-20`}
    >
      <div className="w-[80%]">
        <img src={img} alt="Imagem do programa" />
      </div>
      <div>
        <h2 className="text-3xl md:text-5xl font-bold mb-5">{titulo}</h2>
        {paragrafos.map((texto, index) => (
          <p key={index} className="mb-4">{texto}</p>
        ))}
      </div>
    </section>
  );
};
