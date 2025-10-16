import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface ProfileType {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
}

export default function ProfileSlider() {
  const profiles: ProfileType[] = [
    {
      id: 1,
      name: "Industrial Profiles",
      image: "/images/extrusion-profiles.jpg",
      description: "Heavy-duty aluminum profiles for industrial applications",
      features: ["High strength", "Corrosion resistant", "Custom lengths"]
    },
    {
      id: 2,
      name: "Security Nets",
      image: "/images/aluminum-net.jpg",
      description: "2x2 aluminum security nets for windows and ventilation",
      features: ["Durable mesh", "Weather resistant", "Easy installation"]
    },
    {
      id: 3,
      name: "Solar Mounting",
      image: "/images/solar-accessories.jpg",
      description: "Aluminum components for solar panel installations",
      features: ["UV resistant", "Lightweight", "Quick assembly"]
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          spaceBetween={30}
          className="profile-slider"
        >
          {profiles.map((profile) => (
            <SwiperSlide key={profile.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
                  <p className="text-gray-600 mb-4">{profile.description}</p>
                  <ul className="space-y-2">
                    {profile.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}