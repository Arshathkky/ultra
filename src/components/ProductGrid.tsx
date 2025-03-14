import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Package2, Shield, Award, MoveRight } from 'lucide-react';
import { sampleImages } from '../data/sampleImages';

gsap.registerPlugin(ScrollTrigger);

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
  features: string[];
  icon: keyof typeof featureIcons;
}

const featureIcons = {
  package: Package2,
  shield: Shield,
  award: Award,
};

export default function ProductGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const products: Product[] = [
    {
      id: 1,
      title: "Aluminum Extrusion Profiles",
      image: sampleImages.extrusionProfiles,
      description: "Premium quality aluminum profiles engineered for architectural and industrial applications, delivering unmatched durability and precision.",
      link: "/profiles",
      features: ["Custom Designs", "High Strength", "Precision Engineering"],
      icon: "package"
    },
    {
      id: 2,
      title: "Aluminum Net",
      image: sampleImages.aluminumNet,
      description: "Advanced aluminum mesh solutions providing optimal security and ventilation, perfect for both residential and commercial applications.",
      link: "/net",
      features: ["Durable Mesh", "Weather Resistant", "Easy Installation"],
      icon: "shield"
    },
    {
      id: 3,
      title: "Solar Accessories",
      image: sampleImages.solarAccessories,
      description: "Comprehensive range of aluminum mounting solutions designed specifically for solar installations, ensuring maximum efficiency and longevity.",
      link: "/solar",
      features: ["UV Resistant", "Quick Mount", "Certified Quality"],
      icon: "award"
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animate the heading
    gsap.fromTo(
      ".product-heading",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".product-heading",
          start: "top bottom-=100",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="product-heading text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-customBlue to-indigo-600 mb-6">
            Our Solutions, Your Success
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our premium range of aluminum solutions crafted with precision and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = featureIcons[product.icon];
            return (
              <div
                key={product.id}
                ref={el => el && (cardsRef.current[index] = el)}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-blue-600" />
                </div>

                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-fit transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {product.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link 
                    to={product.link}
                    className="group/button inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-gradient-to-r from-blue-900 to-indigo-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:from-blue-800 hover:to-indigo-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Learn More
                    <MoveRight className="w-5 h-5 transform transition-transform duration-300 group-hover/button:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}