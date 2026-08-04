import qrcode from '../assets/img/qrcode.webp';
export const ModalDoacoesDrawer = ({ isOpen }) => {
  return (
    <div
      id="bandeja-pix"
      inert={!isOpen}
      className={`
        fixed top-1/2 right-[168px] -translate-y-1/2 mt-[32px] z-10
        h-[235px] w-[250px] overflow-hidden rounded-l-2xl
        ${isOpen ? 'shadow-xl' : 'pointer-events-none'}
      `}
    >
      <div
        className={`
          h-full w-full bg-radiant-orchid font-nunito
          transition-[translate] rounded-l-2xl pt-[0.1px] duration-[420ms] ease-bandeja
          motion-reduce:transition-none
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
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
