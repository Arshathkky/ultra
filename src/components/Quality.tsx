import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MoveRight, Factory, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import iso from "/images/ISO_9001-20151.png"

const HeroSection: React.FC = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    timelineRef.current = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    timelineRef.current
      .fromTo(".hero-title", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .fromTo(".hero-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(".feature-card",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(".cta-button",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 },
        "-=0.2"
      );

    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

  <div className="relative z-10 w-full">
    {/* Main Content */}
    <div className="text-center mb-16 w-full">
      <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-customBlue to-indigo-600">
        Manufacturing Excellence in
        <span className="block mt-2">Aluminium Extrusion</span>
      </h1>
      <p className="hero-subtitle text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        ULTRA ALUMINIUM delivers premium quality aluminium solutions, setting new standards
        in Sri Lanka's manufacturing industry through innovation and precision.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="grid md:grid-cols-3 gap-8 mb-16 w-full px-4 md:px-8">
      <div className="feature-card bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img src={iso} className="w-15 h-14 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">ISO 9001:2015 Certified</h3>
        <p className="text-gray-600">Our best QMS achieved this certification, setting a new benchmark for our operational excellence</p>
      </div>
      <div className="feature-card bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
        <Award className="w-12 h-12 text-customBlue mb-4" />
        <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
        <p className="text-gray-600">Rigorous quality control processes meeting international standards.</p>
      </div>
      <div className="feature-card bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
        <Shield className="w-12 h-12 text-customBlue mb-4" />
        <h3 className="text-xl font-semibold mb-2">Customer Trust</h3>
        <p className="text-gray-600">Building lasting relationships through reliability and excellence.</p>
      </div>
    </div>

    {/* CTA Button */}
    <div className="text-center w-full">
      <Link to="/about" className="cta-button inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-900 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
        Discover More <MoveRight className="w-5 h-5 animate-pulse" />
      </Link>
    </div>
  </div>

  {/* Decorative Elements */}
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100 to-transparent"></div>
</section>

  );
};

export default HeroSection;