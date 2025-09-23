import Modal from 'react-modal';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

Modal.setAppElement('#root');

export const ModalDocumentos = ({ isOpen, closeModal, img, nome }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleImageLoad = () => setIsImageLoading(false);

  const imagens = Array.isArray(img) ? img : [img];
  const useSwiper = imagens.length > 1;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={`Modal ${nome}`}
      className="bg-primary py-4 rounded-lg shadow-xl w-[95%] max-w-md mx-auto font-nunito"
      overlayClassName="fixed inset-0 flex justify-center items-center z-50"
      style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}
    >
      <div className="relative flex flex-col items-center px-3">
        <button
          onClick={closeModal}
          className="text-white text-2xl font-bold rounded-full hover:text-living-coral transition duration-300 cursor-pointer absolute top-2 right-4"
        >
          X
        </button>

        <h2 className="text-xl font-bold mb-4 text-white text-center mt-5">{nome}</h2>

        {isImageLoading && (
          <div className="w-[250px] h-[250px] flex items-center justify-center">
            <div className="w-8 h-8 border-t-4 border-white border-solid rounded-full animate-spin"></div>
          </div>
        )}

        {useSwiper ? (
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={0}
            slidesPerView={1}
            className="w-full"
            style={{ maxHeight: 'auto' }}
          >
            {imagens.map((src, idx) => (
              <SwiperSlide key={idx} className="flex justify-center">
                <img
                  src={src}
                  alt={`${nome} página ${idx + 1}`}
                  onLoad={handleImageLoad}
                  className="block max-w-full h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img
            src={imagens[0]}
            alt={nome}
            onLoad={handleImageLoad}
            className={`${isImageLoading ? 'hidden' : 'block'} max-w-full h-auto`}
          />
        )}
      </div>
    </Modal>
  );
};
