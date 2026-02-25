import { useEffect, useState } from 'react';
import { sampleImages } from '../../data/sampleImages';

const slides = [
  {
    image: sampleImages.extrusion,
    title: "Aluminum Extrusion"
  },
  {
    image: sampleImages.casting,
    title: "Aluminum Casting"
  },
  // {
  //   image: sampleImages.airPollution,
  //   title: "Air Pollution Control"
  // }
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

  // Pick a static image for mobile view (e.g., always show the first one)
  const mobileImage = slides[0];

  return (
    <div className="w-full flex justify-center items-center gap-4 py-10 px-4 transition-all duration-500">
      {isMobile ? (
        // Mobile View: Show single static image
        <div className="w-full h-[200px] overflow-hidden rounded-2xl shadow-lg border-4 border-blue-500 flex flex-col items-center">
          <img
            src={mobileImage.image}
            alt={mobileImage.title}
            className="w-full h-full object-cover"
          />
          <div className="mt-2 text-center font-medium text-gray-700 text-sm">
            {mobileImage.title}
          </div>
        </div>
      ) : (
        // Desktop View: Show full slider
        <>
          {/* Left Frame */}
          <div
            className="w-[14.5%] h-[250px] sm:h-[300px] overflow-hidden rounded-xl shadow-md cursor-pointer hover:opacity-90 hover:shadow-lg"
            onClick={() => handleImageClick(-1)}
            title={`View ${getImage(-1).title}`}
          >
            <img
              src={getImage(-1).image}
              alt={getImage(-1).title}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          {/* Center Frame */}
          <div className="flex flex-col items-center w-[75%] h-[400px] overflow-hidden rounded-2xl shadow-lg border-4 border-blue-500 transition-all duration-500">
            <img
              src={getImage(0).image}
              alt={getImage(0).title}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="mt-2 text-center font-medium text-gray-700 text-base">
              {getImage(0).title}
            </div>
          </div>

          {/* Right Frame */}
          <div
            className="w-[14.5%] h-[250px] sm:h-[300px] overflow-hidden rounded-xl shadow-md cursor-pointer hover:opacity-90 hover:shadow-lg"
            onClick={() => handleImageClick(1)}
            title={`View ${getImage(1).title}`}
          >
            <img
              src={getImage(1).image}
              alt={getImage(1).title}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        </>
      )}
    </div>
  );
}
