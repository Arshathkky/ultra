import { useEffect, useState } from 'react';
import { sampleImages } from '../../data/sampleImages';

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
  }
];

export default function CustomFramedSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [autoplayPaused, setAutoplayPaused] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind sm breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || autoplayPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isMobile, autoplayPaused]);

  // Resume autoplay after 5 seconds of inactivity
  useEffect(() => {
    if (!autoplayPaused) return;
    
    const timeout = setTimeout(() => {
      setAutoplayPaused(false);
    }, 5000);
    
    return () => clearTimeout(timeout);
  }, [autoplayPaused]);

  const getImage = (offset: number) => {
    const index = (currentIndex + offset + slides.length) % slides.length;
    return slides[index];
  };

  const handleImageClick = (offset: number) => {
    if (isMobile) return;
    
    setCurrentIndex((prev) => (prev + offset + slides.length) % slides.length);
    setAutoplayPaused(true);
  };

  return (
    <div className="w-full flex justify-center items-center gap-4 py-10 px-4 transition-all duration-500">
      {/* Left Frame - hidden on mobile */}
      {!isMobile && (
        <div 
          className="w-[14.5%] h-[250px] sm:h-[300px] overflow-hidden rounded-xl shadow-md transition-all duration-500 cursor-pointer hover:opacity-90 hover:shadow-lg"
          onClick={() => handleImageClick(-1)}
          title={`View ${getImage(-1).title}`}
        >
          <img
            src={getImage(-1).image}
            alt={getImage(-1).title}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
      )}

      {/* Center Frame - always shown */}
      <div className={`${isMobile ? 'w-full' : 'w-[75%]'} h-[350px] sm:h-[400px] overflow-hidden rounded-2xl shadow-lg border-4 border-blue-500 transition-all duration-500`}>
        <img
          src={getImage(0).image}
          alt={getImage(0).title}
          className="w-full h-full object-fill transition-all duration-500"
        />
        <div className="text-center mt-2 font-medium text-gray-700">
          {getImage(0).title}
        </div>
      </div>

      {/* Right Frame - hidden on mobile */}
      {!isMobile && (
        <div 
          className="w-[14.5%] h-[250px] sm:h-[300px] overflow-hidden rounded-xl shadow-md transition-all duration-500 cursor-pointer hover:opacity-90 hover:shadow-lg"
          onClick={() => handleImageClick(1)}
          title={`View ${getImage(1).title}`}
        >
          <img
            src={getImage(1).image}
            alt={getImage(1).title}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
      )}
    </div>
  );
}