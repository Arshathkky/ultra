import { useParams } from 'react-router-dom';
import { sampleImages } from '../data/sampleImages';
import { useEffect } from 'react';

const profiles = {
  'mill-finish': {
    title: 'Mill Finish Profiles',
    description: 'Our mill finish aluminum profiles offer the natural beauty of aluminum straight from the extrusion process. This finish is ideal for industrial applications where aesthetics are secondary to cost-effectiveness.',
    features: [
      'Cost-effective solution',
      'Natural aluminum appearance',
      'Suitable for industrial applications',
      'Good thermal conductivity'
    ],
    image: sampleImages.millFinish
  },
  'powder-coat': {
    title: 'Powder Coated Profiles',
    description: 'Our powder coated profiles provide superior durability and are available in an extensive range of colors. This finish offers excellent resistance to weathering, corrosion, and UV exposure.',
    features: [
      'Wide range of colors',
      'Excellent durability',
      'UV resistant',
      'Environmentally friendly'
    ],
    image: sampleImages.powderCoated
  },
  'natural-anodized': {
    title: 'Natural Anodized Profiles',
    description: 'Natural anodized profiles feature a protective oxide layer that enhances durability while maintaining a metallic appearance. Perfect for architectural applications requiring a modern look.',
    features: [
      'Enhanced corrosion resistance',
      'Metallic appearance',
      'Architectural grade finish',
      'Low maintenance'
    ],
    image: sampleImages.naturalAnodized
  },
  'bright-anodized': {
    title: 'Bright Anodized Profiles',
    description: 'Our bright anodized profiles offer a highly reflective finish with superior corrosion resistance. This premium finish is perfect for high-end architectural applications.',
    features: [
      'Highly reflective surface',
      'Premium appearance',
      'Superior corrosion resistance',
      'Ideal for luxury projects'
    ],
    image: sampleImages.brightAnodized
  }
};

export default function ProfileTypePage() {
   useEffect(() => {
      window.scrollTo(0, 0);
    },);
  const { id } = useParams();
  
  if (!id) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-center text-[#1a0179] dark:text-white mb-12 tracking-wide uppercase">Our Profiles</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(profiles).map(([key, profile]) => (
              <a
                key={key}
                href={`/profiles/${key}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <img
                    src={profile.image}
                    alt={profile.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 p-6">
                      <h2 className="text-2xl font-bold text-white mb-2">{profile.title}</h2>
                      <p className="text-gray-200">{profile.description}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const profile = profiles[id as keyof typeof profiles];

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Profile Not Found</h1>
          <p className="text-gray-600">The profile you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-center text-[#1a0179] dark:text-white mb-12 tracking-wide uppercase">
      Our Aluminium
      
    </h1>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={profile.image}
              alt={profile.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="absolute bottom-0 p-8">
                <h1 className="text-4xl font-bold text-white mb-4">{profile.title}</h1>
              </div>
            </div>
          </div>
          <div className="p-8">
            <p className="text-xl text-gray-700 mb-8">{profile.description}</p>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {profile.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}