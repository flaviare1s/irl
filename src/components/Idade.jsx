import SeloIdade from '../assets/img/selo-de-idade.png'

export const Idade = () => {
  return (
    <div className="h-[100px] w-[100px] lg:h-[120px] lg:w-[120px] rounded-full bg-white flex justify-center items-center p-1">
      <a href='https://www.instagram.com/somosirl?igsh=aG94aHBkcnVrcWts' target="_blank" className='block'>
        <img className='w-full h-full object-cover' src={SeloIdade} alt="Selo com a idade do IRL - 110 anos" />
      </a>
    </div>
  )
}
