import { useEffect } from 'react';
import Certification from '../components/Certification';
import { sampleImages } from '../data/sampleImages';


export default function AboutPage() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We are ULTRA ALUMINIUM. We manufacture aluminium products and provide aluminium
          solutions while ensuring the quality expectations of our valued customers.
          </p>
        </div>
        

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            {/* Story */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ultra Aluminum (Pvt) Ltd has been established with the view of Manufacturing Aluminums profiles 
                with the identification of its Local Market as well as Global Market. 

              </p>
            </div>

            {/* Mission */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the most innovative and fastest complete solutions provider for All
                Types of Construction Materials locally and globally. 

              </p>
            </div>
            {/* Vission */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver the high quality and innovative product ranges that always exceed the expectation of 
                the consumers by presenting the goods and services timely with high standards 
 

              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">Quality First</h4>
                <p className="text-gray-600">
                  Premium materials and unmatched craftsmanship.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">Innovation</h4>
                <p className="text-gray-600">
                  Embracing cutting-edge technology and processes.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">Sustainability</h4>
                <p className="text-gray-600">
                  Environmentally friendly materials and methods.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">Customer Focus</h4>
                <p className="text-gray-600">
                  Tailored solutions for every need.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={sampleImages.aboutHero}
                alt="About Our Company"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-75"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-semibold">Our Factory</h3>
                <p className="text-sm">Where innovation meets excellence.</p>
              </div>
            </div>
          </div>
        </div>
        <Certification/>
        {/* Timeline Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <p className="text-gray-600 text-lg">
                <span className="font-semibold">2018:</span> Founded with a vision to innovate aluminum manufacturing.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <p className="text-gray-600 text-lg">
                <span className="font-semibold">2022:</span> Expanded operations globally, serving multiple industries.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <p className="text-gray-600 text-lg">
                <span className="font-semibold">2024:</span> Achieved ISO 9001-2015 Certification By SLSI.
              </p>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  );
}
