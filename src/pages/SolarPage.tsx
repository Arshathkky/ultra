import { useEffect } from 'react';
import { sampleImages } from '../data/sampleImages';

export default function SolarPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      title: "Mid Clamp",
      image: "/solar_images/mid_clamp.png",
      description: "Aluminium alloy clamp for panel middle fixing",
      features: [
        "Material: Aluminium Alloy 6063, Temper T5",
        "Bolt Sizes: 45mm, 50mm, 55mm, 60mm",
        "Allen Bolt SUS 304",
        "Codes: 50SM02 45N / 50N / 55N / 60N"
      ]
    },
    {
      title: "Solar Rail",
      image: "/solar_images/solar_rail.png",
      description: "Durable aluminum rail for solar panel mounting",
      features: [
        "Available Lengths: 6100mm (20') / 4200mm (14')",
        "Material: Aluminium Alloy 6063, Anodized",
        "Codes: 55SM01 200N / 140N"
      ]
    },
    {
      title: "Rail Connector",
      image: "/solar_images/rail_connector.png",
      description: "Joins two solar rails together securely",
      features: [
        "Material: Aluminium Alloy 6063, Temper T5",
        "Code: 50SM04 150N"
      ]
    },
    {
      title: "End Clamp",
      image: "/solar_images/end_clamp.png",
      description: "Clamp for end fixation of panels",
      features: [
        "Material: Aluminium Alloy 6063, Temper T5",
        "Height: 35mm, 40mm",
        "Allen Bolt SUS 304",
        "Codes: 50SM03 35N / 40N"
      ]
    },
    {
      title: "Height Adjustable Plate",
      image: "/solar_images/height_adjustable_plate.png",
      description: "Adjustable mounting base for structure leveling",
      features: [
        "Material: Aluminium Alloy 6063",
        "Allen Bolt SUS 304",
        "Code: 50SM11 150N"
      ]
    },
    {
      title: "Serrated Angle Clamp",
      image: "/solar_images/serrated_angle_clamp.png",
      description: "Adjustable clamp with angular positioning",
      features: [
        "Material: Aluminium Alloy 6063",
        "Allen Bolt SUS 304",
        "Code: 50SM01 06N"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Solar Mounting Solutions</h1>
          <p className="text-xl text-gray-600">
            Complete range of aluminum accessories for solar installations
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src="/solar_images/Solar_head.png"
            alt="Solar Mounting Solutions"
            className="w-full h-full object-cover"
          />
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-2 bg-blue-600 rounded-full shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
