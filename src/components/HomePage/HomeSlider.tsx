import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { sampleImages } from '../../data/sampleImages';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: sampleImages.extrusion,
    title: "Precision Aluminum Extrusion",
    subtitle: "State-of-the-art technology for complex profiles and architectural excellence."
  },
  {
    image: sampleImages.casting,
    title: "High-Quality Aluminum Casting",
    subtitle: "Superior casting processes ensuring durability and strength for industrial needs."
  },
  {
    image: "/images/Banner2.jpeg",
    title: "Eco-Friendly Innovation",
    subtitle: "Committed to sustainable manufacturing and environmental stewardship."
  }
];

export default function HomeSlider() {
  return (
    <div className="w-full relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-[500px] md:h-[650px] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl text-white"
                  >
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="flex gap-4">
                      <button className="px-8 py-3 bg-[#39b54a] hover:bg-[#2e943c] text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg">
                        Explore Products
                      </button>
                      <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold rounded-lg transition-all transform hover:scale-105">
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev !text-white !w-12 !h-12 after:!text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="swiper-button-next !text-white !w-12 !h-12 after:!text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Swiper>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}
