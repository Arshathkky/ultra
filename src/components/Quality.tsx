import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const HeroSection: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".animated-heading",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="animated-heading" style={{ color: "#1a0179" }}>
            ULTRA ALUMINIUM 
          </span> 
           sets the benchmark for Aluminum Extrusion in Sri Lanka.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-stone-900" >
          We are at ULTRA ALUMINIUM PVT LTD. Manufacturing of Aluminium products and providing aluminium solutions continuously strive to ensure the Quality expectation of our valued customers.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
