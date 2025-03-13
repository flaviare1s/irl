import Modal from 'react-modal';
import qrcode from '../assets/img/qrcode.png'

Modal.setAppElement('#root');

export const ModalDoacoes = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal de Doações"
      className="bg-radiant-orchid py-4 rounded-lg shadow-xl w-[95%] max-w-md mx-auto font-nunito"
      overlayClassName="fixed inset-0 flex justify-center items-center"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
      }}
    >
      <div className='flex flex-row-reverse items-start justify-start '>
        <button
          onClick={closeModal}
          className="text-white text-2xl font-bold pr-4 rounded-full hover:text-primary transition duration-300 cursor-pointer"
        >
          X
        </button>
        <div className='flex flex-col justify-center items-center py-4 pl-4 mt-5'>
          <h2 className="text-xl font-bold mb-4 text-white">Doe via PIX pelo aplicativo do seu banco!</h2>
          <img className='w-[250px]' src={qrcode} alt="Qr Code" />
          <p className="mt-6 text-white">CNPJ</p>
          <p className="text-lg mb-6 text-white font-bold">07.264.138/0001-47</p>
        </div>
      </div>
    </Modal>
  );
};
