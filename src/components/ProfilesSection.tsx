import { useNavigate } from 'react-router-dom';

const profiles = [
  {
    id: 'mill-finish',
    title: 'Mill Finish',
    image: 'images/logo1.png',
    description: 'Natural aluminum finish straight from the extrusion process',
  },
  {
    id: 'powder-coat',
    title: 'Powder Coat',
    image: 'images/logo1.png',
    description: 'Durable and decorative coating available in various colors',
  },
  {
    id: 'natural-anodized',
    title: 'Natural Anodized',
    image: 'images/logo1.png',
    description: 'Protective oxide layer with natural metallic appearance',
  },
  {
    id: 'bright-anodized',
    title: 'Bright Anodized',
    image: 'images/logo1.png',
    description: 'Highly reflective finish with enhanced corrosion resistance',
  },
];

export default function ProfilesSection() {
  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    navigate(`/profiles/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-[#1a0179] dark:text-white mb-12 tracking-wide">PERFECT PICKS, JUST FOR YOU
          
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="group cursor-pointer"
              onClick={() => handleNavigation(profile.id)}
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
                    <p className="text-gray-200 text-sm">{profile.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
