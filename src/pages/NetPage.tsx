import { sampleImages } from '../data/sampleImages';

export default function NetPage() {
  const features = [
    {
      title: "Security",
      description: "Enhanced protection for windows and ventilation systems"
    },
    {
      title: "Durability",
      description: "Weather-resistant aluminum construction for long-lasting performance"
    },
    {
      title: "Ventilation",
      description: "Optimal airflow while maintaining security"
    },
    {
      title: "Easy Installation",
      description: "Simple mounting system for quick and secure installation"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Aluminum Net Solutions</h1>
          <p className="text-xl text-gray-600">High-quality aluminum mesh for security and ventilation</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={sampleImages.aluminumNet}
            alt="Aluminum Net"
            className="w-full h-96 object-contain"
          />
          
          <div className="p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6">Premium 2x2 Aluminum Net</h2>
              <p className="text-gray-600 mb-8">
                Our aluminum nets provide the perfect balance of security and functionality.
                Manufactured using high-grade aluminum, these nets are designed to withstand
                various weather conditions while maintaining their structural integrity.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Custom Solutions</h3>
                <p className="text-gray-600">
                  Need a specific size or configuration? We offer custom manufacturing
                  services to meet your exact requirements. Contact our team to discuss
                  your project needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}