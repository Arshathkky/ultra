import { Link } from 'react-router-dom';

const profiles = [
  {
    id: 'mill-finish',
    title: 'Mill Finish',
    image: 'images/logo1.png',
    description: 'Natural aluminum finish straight from the extrusion process'
  },
  {
    id: 'powder-coat',
    title: 'Powder Coat',
    image: 'images/logo1.png',
    description: 'Durable and decorative coating available in various colors'
  },
  {
    id: 'natural-anodized',
    title: 'Natural Anodized',
    image: 'images/logo1.png',
    description: 'Protective oxide layer with natural metallic appearance'
  },
  {
    id: 'bright-anodized',
    title: 'Bright Anodized',
    image: 'images/logo1.png',
    description: 'Highly reflective finish with enhanced corrosion resistance'
  }
];

export default function ProfilesSection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Aluminium</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile) => (
            <Link
              key={profile.id}
              to={`/profiles/${profile.id}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={profile.image}
                  alt={profile.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {profile.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {profile.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}