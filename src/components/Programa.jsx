import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export const Programa = ({ nome, texto, imagens }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4">{nome}</h2>
      <p className="text-center mb-4">{texto}</p>

      {/* Carrossel */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="w-full"
      >
        {imagens.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              className="w-full h-auto object-contain rounded-lg"
              alt={`Imagem ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
