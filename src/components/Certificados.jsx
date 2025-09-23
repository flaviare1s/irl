import pattern from '../assets/img/elementos/elemento-amarelo3.png'
import { Certificado } from './Certificado'
import { BotaoDoacoes } from './BotaoDoacoes'

import docMunicipal from '../assets/img/documentos/up-municipal.jpg'
import docEstadual from '../assets/img/documentos/up-estadual.jpg'
import docCmas from '../assets/img/documentos/cmas.jpg'
import docCebas1 from '../assets/img/documentos/cebas1.jpg'
import docCebas2 from '../assets/img/documentos/cebas2.jpg'

export const Certificados = () => {
  return (
    <div className="bg-primary flex flex-col justify-center items-center py-10 px-4 md:px-10">
      <div className="flex justify-center items-center gap-1 sm:gap-3 mb-10">
        <img className="w-10" src={pattern} />
        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl text-center font-bold">
          Certificados e Certidões
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:min-h-[400px]">
          <Certificado bgColor="bg-living-coral" nome="Utilidade Publica Municipal" img={docMunicipal} />
          <Certificado bgColor="bg-freesia" nome="CMAs" img={docCmas} />
          <Certificado bgColor="bg-radiant-orchid" nome="Utilidade Publica Estadual" img={docEstadual} />
          <Certificado bgColor="bg-greenery" nome="CEBAS" img={[docCebas1, docCebas2]} />
        </div>
        <div className="mt-10">
          <BotaoDoacoes />
        </div>
      </div>
    </div>
  )
}

