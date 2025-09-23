import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#root');

export const ModalDocumentos = ({ isOpen, closeModal, img, nome }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal de Doações"
      className="bg-primary py-4 rounded-lg shadow-xl w-[95%] max-w-md mx-auto font-nunito"
      overlayClassName="fixed inset-0 flex justify-center items-center z-50"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
      }}
    >
      <div className='flex flex-row-reverse items-start justify-start '>
        <div className='relative'>
          <button
            onClick={closeModal}
            className="text-white text-2xl font-bold rounded-full hover:text-living-coral transition duration-300 cursor-pointer absolute top-2 right-4 "
          >
            X
          </button>
        </div>
        <div className='flex flex-col justify-center items-center px-4 mt-5 mx-auto'>
          <h2 className="text-xl font-bold mb-4 text-white text-center">
            {nome}
          </h2>

          {isImageLoading && (
            <div className="w-[250px] h-[250px] flex items-center justify-center">
              <div className="w-8 h-8 border-t-4 border-white border-solid rounded-full animate-spin"></div>
            </div>
          )}

          <img
            className={`${isImageLoading ? "hidden" : "block"}`}
            src={img}
            alt={nome}
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </Modal>
  );
};
