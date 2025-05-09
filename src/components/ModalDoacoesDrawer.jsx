import qrcode from '../assets/img/qrcode.png';

export const ModalDoacoesDrawer = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed top-1/2 transform -translate-y-1/2 z-10
        h-[235px] w-[250px] rounded-l-2xl shadow-xl font-nunito
        bg-radiant-orchid overflow-hidden transition-all duration-300 mt-[33px]
        ${isOpen ? 'right-[168px]' : '-right-[-106px]'}
      `}
    >
      <div className="flex flex-row-reverse items-start justify-start h-full">
        <div className="flex flex-col justify-center items-center mt-5 w-full">
          <h2 className="text-xs font-bold mb-4 text-white text-center">
            Doe via PIX pelo aplicativo do seu banco!
          </h2>

          <img
            className="w-[130px]"
            src={qrcode}
            alt="Qr Code"
          />

          <p className="mt-6 text-white text-sm">CNPJ | 07.264.138/0001-47</p>
        </div>
      </div>
    </div>
  );
};
