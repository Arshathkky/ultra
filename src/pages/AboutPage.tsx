import { sampleImages } from '../data/sampleImages';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Leading manufacturer of premium aluminum solutions</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Since our establishment, we have been at the forefront of aluminum manufacturing,
                providing innovative solutions for various industries. Our commitment to quality
                and customer satisfaction has made us a trusted name in the industry.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To deliver exceptional aluminum solutions that meet the highest standards of
                quality while maintaining sustainable practices and fostering innovation.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Quality First</h4>
                  <p className="text-gray-600 text-sm">
                    Premium materials and rigorous quality control
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Innovation</h4>
                  <p className="text-gray-600 text-sm">
                    Cutting-edge technology and processes
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Sustainability</h4>
                  <p className="text-gray-600 text-sm">
                    Eco-friendly practices and materials
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Customer Focus</h4>
                  <p className="text-gray-600 text-sm">
                    Dedicated support and solutions
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px]">
              <img
                src={sampleImages.aboutHero}
                alt="Our Factory"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}