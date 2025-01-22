import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { sampleImages } from '../data/sampleImages';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HomeSlider() {
  const slides = [
    {
      image: sampleImages.casting,
      title: "Aluminum Casting"
    },
    {
      image: sampleImages.extrusion,
      title: "Aluminum Extrusion"
    },
    {
      image: sampleImages.airPollution,
      title: "Air Pollution Control"
    },
    {
      image: sampleImages.powderCoating,
      title: "Powder Coating"
    },
    {
      image: sampleImages.anodizing,
      title: "Anodizing"
    }
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-fit"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-5xl font-bold">{slide.title}</h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
