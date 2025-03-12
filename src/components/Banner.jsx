import Background from '../assets/img/banner.jpg'
import BackgroundMobile from '../assets/img/banner-mobile.jpg'

export const Banner = () => {
  return (
    <div>
      <div className="relative w-full h-[650px] flex flex-col justify-center items-center m-auto">
        <img className="absolute md:hidden w-full h-full object-cover -z-40" src={BackgroundMobile} alt="Fachada central do IRL" />
        <img className="hidden md:block absolute top-0 left-0 w-full h-full object-cover -z-40" src={Background} alt="Fachada central do IRL" />
        <h1 className='text-white text-3xl md:text-4xl lg:text-6xl font-bold w-[80%] md:w-[60%] text-center leading-[1.3]' style={{ textShadow: '0 0 5px rgba(0, 0, 0, 0.5)' }}>Instituto Dr. Rocha Lima de Proteção e Assistência à Infância</h1>
      </div>
    </div>
  )
}
