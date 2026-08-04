import qrcode from '../assets/img/qrcode.webp';
export const ModalDoacoesDrawer = ({ isOpen }) => {
  return (
    <div
      id="bandeja-pix"
      inert={!isOpen}
      className={`
        fixed top-1/2 right-[168px] z-10 mt-[32px]
        h-[235px] w-[250px] rounded-l-2xl shadow-xl font-nunito
        bg-radiant-orchid overflow-hidden
        transition-[translate,opacity] duration-300 ease-out
        motion-reduce:transition-none
        ${isOpen
          ? 'translate-x-0 -translate-y-1/2 opacity-100'
          : 'translate-x-[68px] -translate-y-1/2 opacity-0 pointer-events-none'}
      `}
    >
      <div className="flex flex-row-reverse items-start justify-start h-full">
        <div className="flex flex-col justify-center items-center mt-5 w-full">
          <h2 className="text-xs font-bold mb-4 text-white text-center">
            Doe via PIX pelo aplicativo do seu banco!
          </h2>
          <img className="w-[130px]" src={qrcode} alt="Qr Code" loading="lazy" />
          <p className="mt-6 text-white text-sm">CNPJ | 07.264.138/0001-47</p>
        </div>
      </div>
    </div>
  );
};
