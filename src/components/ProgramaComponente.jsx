export const ProgramaComponente = ({ img, nome, descricao }) => {
  return (
    <section className="flex flex-col items-center justify-center p-10 lg:p-4 h-full">
      <img className="mb-5" src={img} />
      <div className="flex-grow flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-5">{nome}</h3>
        <p className="text-lg font-medium text-center">{descricao}</p>
      </div>
      <button className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary flex justify-center items-center text-white text-2xl md:text-3xl font-bold mt-5">+</button>
    </section>
  )
}
