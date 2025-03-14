import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const profiles = [
  {
    id: 'mill-finish',
    title: 'Mill Finish',
    image: 'https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?auto=format&fit=crop&q=80&w=1200',
    description: 'Natural aluminum finish straight from the extrusion process. Experience the raw beauty and durability of pure aluminum.',
    features: [
      'Cost-effective solution',
      'Natural metallic appearance',
      'Excellent heat conductivity',
      'Fully recyclable'
    ]
  },
  {
    id: 'powder-coat',
    title: 'Powder Coat',
    image: 'https://images.unsplash.com/photo-1589792923962-537704632910?auto=format&fit=crop&q=80&w=1200',
    description: 'Durable and decorative coating available in various colors. Perfect for both indoor and outdoor applications.',
    features: [
      'Wide range of colors',
      'Excellent durability',
      'UV resistant',
      'Environmentally friendly'
    ]
  },
  {
    id: 'natural-anodized',
    title: 'Natural Anodized',
    image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=1200',
    description: 'Protective oxide layer with natural metallic appearance. Combines aesthetics with superior protection.',
    features: [
      'Enhanced corrosion resistance',
      'Maintains metallic look',
      'Scratch resistant',
      'Long-lasting finish'
    ]
  },
  {
    id: 'bright-anodized',
    title: 'Bright Anodized',
    image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=1200',
    description: 'Highly reflective finish with enhanced corrosion resistance. The premium choice for architectural applications.',
    features: [
      'Mirror-like finish',
      'Superior protection',
      'Architectural grade',
      'Weather resistant'
    ]
  },
];

const ProfilesSection = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Scroll indicator animation
      gsap.to(scrollIndicatorRef.current, {
        y: 20,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      // Profile cards animation
      const cards = gsap.utils.toArray<HTMLElement>('.profile-card');
      cards.forEach((card, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "center center",
            toggleActions: "play none none reverse",
          }
        });

        // Staggered animation for each card
        tl.fromTo(card,
          {
            y: 100,
            opacity: 0,
            rotateX: -15,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out"
          }
        );

        // Animate features list
        const features = card.querySelectorAll('.feature-item');
        tl.fromTo(features,
          {
            x: -20,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out"
          },
          "-=0.4"
        );
      });

      // Parallax effect for images
      const images = gsap.utils.toArray<HTMLElement>('.profile-image');
      images.forEach((image) => {
        gsap.to(image, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleNavigation = (id: string) => {
    navigate(`/profiles/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      {/* Scroll indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-gray-600"
      >
        <ArrowDownCircle className="w-8 h-8" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-customBlue to-indigo-600">
          Aluminum Finishing Solutions
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Discover our premium range of aluminum finishes, each crafted to perfection for your specific needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {profiles.map((profile, index) => (
            <div
              key={profile.id}
              className="profile-card group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
              onClick={() => handleNavigation(profile.id)}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={profile.image}
                    alt={profile.title}
                    className="profile-image w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h2 className="absolute bottom-4 left-6 text-3xl font-bold text-white">
                    {profile.title}
                  </h2>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 text-lg mb-4">
                    {profile.description}
                  </p>
                  
                  <div className="space-y-2">
                    {profile.features.map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className="feature-item flex items-center text-gray-600 opacity-0"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilesSection;