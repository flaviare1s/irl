// Ficam em public/ com nome estável (sem hash do Vite) para poderem ser
// pré-carregadas no index.html. Sem isso o navegador só descobre a imagem
// do LCP depois de baixar e executar o bundle.
const Background = '/banner.webp'
const BackgroundMobile = '/banner-mobile.webp'
import Pattern from '../assets/img/elementos/x.webp'
import { Button } from './Button'

export const Banner = () => {
  return (
    <div>
      <div className="relative w-full h-[88vh] flex flex-col justify-center items-center m-auto">
        <img className='h-[150px] w-[150px] xl:h-[300px] xl:w-[300px] absolute top-[-40px] right-0 xl:top-[-70px] xl:right-[250px] -z-10' src={Pattern} alt="" />
        {/* Um <picture> em vez de dois <img> com hidden/block: display:none não
            impede o download, então as duas versões vinham sempre (209KB para
            mostrar uma). Aqui o navegador baixa só a que vai usar. */}
        {/* O posicionamento fica no <picture>: ele é o filho do flex, e sem
            position:absolute aqui ele entra no fluxo e estica o container. */}
        <picture className="absolute top-0 left-0 w-full h-full -z-40">
          <source media="(min-width: 768px)" srcSet={Background} />
          <img
            className="w-full h-full object-cover"
            src={BackgroundMobile}
            alt="Fachada central do IRL"
            fetchPriority="high"
          />
        </picture>
        <h1 className='text-white text-3xl md:text-4xl lg:text-6xl font-bold w-[80%] md:w-[60%] text-center leading-[1.3] mb-14' style={{ textShadow: '0 0 5px rgba(0, 0, 0, 0.9)' }}>Instituto Dr. Rocha Lima de Proteção e Assistência à Infância</h1>
        <Button rota='/programas' text='Conheça Nossos Programas' bgColor='bg-primary' />
        <div className='absolute bottom-6 left-6 md:bottom-14 md:left-14'>
        </div>
      </div>
    </div>
  )
}
