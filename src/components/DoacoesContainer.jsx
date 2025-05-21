import { BotaoDoacoesFixed } from "./BotaoDoacoesFixed"
import { BotaoWhatsappDesktop } from "./BotaoWhatsappDesktop"

export const DoacoesContainer = () => {
  return (
    <div className='fixed hidden lg:block right-[1px] top-1/2 z-50'>
      <div className="flex flex-col items-center">
        <BotaoDoacoesFixed />
        <div className="mt-[120px]">
          <BotaoWhatsappDesktop />
        </div>
      </div>
    </div>
  )
}
