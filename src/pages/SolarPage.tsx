import { sampleImages } from '../data/sampleImages';

export default function SolarPage() {
  const products = [
    {
      title: "Mounting Rails",
      description: "High-strength aluminum rails for secure panel mounting",
      features: ["Corrosion resistant", "Easy installation", "Adjustable positioning"]
    },
    {
      title: "Clamps and Brackets",
      description: "Premium quality fastening solutions for solar panels",
      features: ["Universal compatibility", "Weather-proof", "Quick assembly"]
    },
    {
      title: "Support Structures",
      description: "Robust aluminum frameworks for ground-mounted systems",
      features: ["Heavy-duty construction", "Modular design", "Wind resistant"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Solar Mounting Solutions</h1>
          <p className="text-xl text-gray-600">Complete range of aluminum accessories for solar installations</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={sampleImages.solarAccessories}
            alt="Solar Mounting Solutions"
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6">Our Solar Products</h2>
              <p className="text-gray-600 mb-8">
                We offer a comprehensive range of aluminum mounting solutions designed
                specifically for solar installations. Our products are engineered for
                durability, ease of installation, and optimal performance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <ul className="space-y-2">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}