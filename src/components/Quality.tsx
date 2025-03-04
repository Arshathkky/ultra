import React, { useEffect } from "react";
import { gsap } from "gsap";
import { FaAngleDoubleRight } from "react-icons/fa"; // Importing React Icon
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".animated-heading",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="flex items-center justify-center w-full">
        {/* Left Image */}
        <div className="w-1/5 h-full py-4 hidden sm:block">
          <img src="/images/logo1.png" alt="Left Side" className="w-full h-full object-contain" />
        </div>

        {/* Centered Text Content */}
        <div className="w-full sm:w-3/5 text-center px-6 md:px-12">
          <h2 className="text-2xl sm:text-5xl md:text-4xl font-bold leading-tight ">
            Manufacturing Aluminium Extrusion Profiles in&nbsp;
            <span className="animated-heading" style={{ color: "#1a0179" }}>
              Sri Lanka
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-stone-900 text-justify">
            We are ULTRA ALUMINIUM. We manufacture aluminium products and provide aluminium
            solutions while ensuring the quality expectations of our valued customers.
          </p>
          
        </div>

        {/* Right Image */}
        <div className="w-1/5 h-full py-4 hidden sm:block">
          <img src="/images/logo1.png" alt="Right Side" className="w-full h-full object-contain" />
        </div>
      </div>

      <button className="mt-8 flex items-center justify-center gap-3 px-6 py-3 text-white text-lg sm:text-xl font-semibold bg-[#1a0179] rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
            <FaAngleDoubleRight className="text-xl animate-spin-slow" /> <Link to={'/about'}> Read More </Link>
           
          </button>
      
    </section>
  );
};

export default HeroSection;
