import { Shield, Droplets, Sun, Wind } from 'lucide-react';

export default function RoofFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Durability",
      description: "Long-lasting amona sheets resistant to extreme weather conditions"
    },
    {
      icon: Droplets,
      title: "Water Resistant",
      description: "Superior waterproofing capabilities for maximum protection"
    },
    {
      icon: Sun,
      title: "Heat Reflective",
      description: "Advanced coating technology for better temperature control"
    },
    {
      icon: Wind,
      title: "Wind Resistant",
      description: "Engineered to withstand high wind speeds and pressure"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Amona Sheets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}