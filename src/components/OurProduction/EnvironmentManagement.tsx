import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Recycle, Leaf, Droplets, Wind, Sun } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const environmentInitiatives = [
  {
    title: "Sustainable Aluminum Recycling",
    description: [
      "Aluminum recycling is at the heart of our environmental commitment. Recycling aluminum requires only 5% of the energy needed to produce primary aluminum, making it one of the most environmentally beneficial recycling processes.",
      "Our state-of-the-art recycling facility processes thousands of tons of aluminum scrap annually, significantly reducing the demand for primary aluminum production and its associated environmental impacts.",
      "Environmental Benefits:",
      "- 95% energy savings compared to primary aluminum production",
      "- Reduction of greenhouse gas emissions by over 9 tons per ton of recycled aluminum",
      "- Conservation of natural resources and reduction of mining impacts",
      "- Diversion of aluminum waste from landfills"
    ],
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200",
    icon: Recycle,
    color: "#34D399"
  },
  {
    title: "Energy Efficiency Programs",
    description: [
      "Energy efficiency is a key focus of our environmental management system. We continuously invest in technologies and processes that reduce energy consumption while maintaining or improving production efficiency.",
      "Our comprehensive energy management program includes regular energy audits, implementation of energy-saving technologies, and employee awareness initiatives to promote energy conservation throughout our operations.",
      "Key Initiatives:",
      "- Installation of high-efficiency melting furnaces with heat recovery systems",
      "- LED lighting upgrades across all facilities",
      "- Variable frequency drives on motors and pumps",
      "- Energy management systems to optimize consumption",
      "- Renewable energy integration with solar panels on facility rooftops"
    ],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
    icon: Sun,
    color: "#FBBF24"
  },
  {
    title: "Water Conservation & Treatment",
    description: [
      "Water is a precious resource, and our water management program focuses on both conservation and responsible treatment of process water. We have implemented a closed-loop water system that significantly reduces our freshwater consumption.",
      "All process water is treated in our on-site wastewater treatment facility to remove contaminants before reuse or discharge, ensuring that we maintain or improve local water quality.",
      "Water Management Approaches:",
      "- Closed-loop cooling water systems",
      "- Advanced wastewater treatment technologies",
      "- Rainwater harvesting for non-production uses",
      "- Regular monitoring of water quality parameters",
      "- Employee training on water conservation practices"
    ],
    image: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&q=80&w=1200",
    icon: Droplets,
    color: "#60A5FA"
  },
  {
    title: "Air Quality Management",
    description: [
      "Maintaining air quality is a priority in our aluminum production facilities. We have invested in advanced air pollution control equipment to minimize emissions from our production processes and ensure compliance with all applicable air quality regulations.",
      "Regular monitoring and maintenance of this equipment ensures optimal performance and minimizes our environmental footprint. We also conduct regular air quality testing both within our facilities and at our property boundaries.",
      "Emission Control Methods:",
      "- High-efficiency dust collection systems",
      "- Low-NOx burners in all combustion equipment",
      "- Thermal oxidizers for VOC reduction",
      "- Continuous emissions monitoring systems",
      "- Regular stack testing and reporting"
    ],
    image: "https://images.unsplash.com/photo-1603475207221-89268d577da0?auto=format&fit=crop&q=80&w=1200",
    icon: Wind,
    color: "#A78BFA"
  },
  {
    title: "Biodiversity & Ecosystem Protection",
    description: [
      "Beyond our immediate production environment, we recognize our responsibility to protect and enhance local biodiversity. Our facilities are designed and operated with consideration for local ecosystems, and we actively participate in habitat restoration projects in our communities.",
      "We have implemented green spaces within our industrial sites and support local conservation efforts through partnerships with environmental organizations and community groups.",
      "Biodiversity Initiatives:",
      "- Native plant landscaping around all facilities",
      "- Support for local wildlife habitat restoration projects",
      "- Green roof installations on select buildings",
      "- Employee volunteer programs for environmental conservation",
      "- Educational partnerships with local schools and universities"
    ],
    image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&q=80&w=1200",
    icon: Leaf,
    color: "#10B981"
  }
];

const EnvironmentManagement = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero animation
      gsap.from(".env-hero-content", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });

      // Stat counters
      const statsElements = gsap.utils.toArray<HTMLElement>(".stat-value");
      statsElements.forEach(stat => {
        const target = parseInt(stat.dataset.value || "0");

        gsap.from(stat, {
          innerText: 0,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 80%"
          },
          onUpdate: function () {
            stat.innerText = Math.round(this.targets()[0].innerText).toString() + (stat.dataset.suffix || "");
          }
        });
      });

      // Initiative animations
      const initiatives = gsap.utils.toArray<HTMLElement>(".env-initiative");

      initiatives.forEach((initiative) => {
        const icon = initiative.querySelector(".env-icon");
        const content = initiative.querySelector(".env-content");
        const image = initiative.querySelector(".env-image");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: initiative,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        // Icon
        if (icon) {
          tl.fromTo(
            icon,
            {
              scale: 0,
              opacity: 0,
              rotate: -45
            },
            {
              scale: 1,
              opacity: 1,
              rotate: 0,
              duration: 0.8,
              ease: "back.out(1.7)"
            }
          );
        }

        // Content
        if (content && content.children.length > 0) {
          const childrenArray = Array.from(content.children);
          tl.fromTo(
            childrenArray,
            {
              y: 40,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              stagger: 0.1,
              duration: 0.6,
              ease: "power1.out"
            },
            "-=0.4"
          );
        }

        // Image
        if (image) {
          tl.fromTo(
            image,
            {
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
              opacity: 0
            },
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              opacity: 1,
              duration: 1,
              ease: "power2.inOut"
            },
            "-=0.6"
          );
        }
      });

      return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-white">
      {/* Hero Section */}
      <div className="env-hero-content relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1472201248592-1241c92256b4?auto=format&fit=crop&q=80&w=1200"
            alt="Environmental sustainability"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-800/60 to-green-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Environmental Management System</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Our commitment to environmental stewardship goes beyond compliance. 
            We strive to minimize our ecological footprint and contribute to a more sustainable future.
          </p>
          <div className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <Leaf className="w-6 h-6 text-green-300" />
            <span className="text-xl">ISO 14001:2015 Applied</span>
          </div>
        </div>
      </div>
      
      {/* Environmental Impact Stats */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">Our Environmental Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-md transform transition-transform hover:scale-105">
              <h3 className="stat-value text-4xl font-bold text-green-600 mb-2" data-value="75" data-suffix="%">0%</h3>
              <p className="text-gray-700">Reduction in Carbon Emissions Since 2018</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-md transform transition-transform hover:scale-105">
              <h3 className="stat-value text-4xl font-bold text-green-600 mb-2" data-value="95" data-suffix="%">0%</h3>
              <p className="text-gray-700">Water Recycling Rate</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-md transform transition-transform hover:scale-105">
              <h3 className="stat-value text-4xl font-bold text-green-600 mb-2" data-value="40000" data-suffix="+">0+</h3>
              <p className="text-gray-700">Trees Planted Through Our Reforestation Program</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-md transform transition-transform hover:scale-105">
              <h3 className="stat-value text-4xl font-bold text-green-600 mb-2" data-value="100" data-suffix="%">0%</h3>
              <p className="text-gray-700">Waste Recovery Rate</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Environmental Initiatives */}
      <div className="py-20">
        {environmentInitiatives.map((initiative, index) => {
          const Icon = initiative.icon;
          return (
            <section 
              key={index}
              className={`
                env-initiative max-w-7xl mx-auto mb-24 
                flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
                px-6 gap-10 lg:gap-16
              `}
            >
              <div className="lg:w-1/2">
                <div className="relative">
                  <div 
                    className="env-icon absolute -top-10 -left-10 z-10 rounded-full p-5"
                    style={{ backgroundColor: initiative.color + '20', color: initiative.color }}
                  >
                    <Icon className="w-10 h-10" />
                  </div>
                  
                  <div className="env-image w-full h-[400px] overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 env-content">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: initiative.color }}>
                  {initiative.title}
                </h2>
                
                <div className="space-y-4">
                  {initiative.description.map((para, pIndex) => (
                    <p
                      key={pIndex}
                      className={`
                        text-lg leading-relaxed
                        ${para.startsWith('Environmental') || para.startsWith('Key') || para.startsWith('Water') || para.startsWith('Emission') || para.startsWith('Biodiversity') 
                          ? 'font-semibold text-gray-900 mt-6' 
                          : 'text-gray-700'}
                        ${para.startsWith('-') ? 'pl-6 border-l-2 py-1 ml-2' : ''}
                      `}
                      style={para.startsWith('-') ? { borderColor: initiative.color } : {}}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
      
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-800 to-green-900 text-white py-16">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Our Environmental Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Our commitment to environmental stewardship is a journey, not a destination. 
            We continuously seek new ways to reduce our impact and contribute positively to our planet.
          </p>
          <div className="inline-flex items-center justify-center gap-3 bg-white text-green-800 px-8 py-3 rounded-full font-bold text-lg">
            <Leaf className="w-5 h-5" />
            <span>Sustainability Report 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentManagement;
