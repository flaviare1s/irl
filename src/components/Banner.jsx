import Background from '../assets/img/banner.jpg'
import BackgroundMobile from '../assets/img/banner-mobile.jpg'
import Pattern from '../assets/img/x.png' 
import { Button } from './Button'
import { Idade } from './Idade'

export const Banner = () => {
  return (
    <div>
      <div className="relative w-full h-[600px] sm:h-[650px] flex flex-col justify-center items-center m-auto">
        <img className='h-[150px] w-[150px] xl:h-[300px] xl:w-[300px] absolute top-[-40px] right-0 xl:top-[-70px] xl:right-[250px] -z-10' src={Pattern} />
        <img className="absolute md:hidden w-full h-full object-cover -z-40" src={BackgroundMobile} alt="Fachada central do IRL" />
        <img className="hidden md:block absolute top-0 left-0 w-full h-full object-cover -z-40" src={Background} alt="Fachada central do IRL" />
        <h1 className='text-white text-3xl md:text-4xl lg:text-6xl font-bold w-[80%] md:w-[60%] text-center leading-[1.3] mb-14' style={{ textShadow: '0 0 5px rgba(0, 0, 0, 0.5)' }}>Instituto Dr. Rocha Lima de Proteção e Assistência à Infância</h1>
        <Button rota='/programas' text='Conheça nossos projetos' bgColor='bg-primary' />
        <div className='absolute bottom-6 left-6 md:bottom-14 md:left-14'>
          <Idade />
        </div>
      </div>
    </div>
  )
}
