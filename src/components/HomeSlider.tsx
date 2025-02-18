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
          <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  bg-opacity-40 flex items-end justify-center ">
              <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold">{slide.title}</h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
