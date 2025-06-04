import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Baling Aluminium Waste",
    description: [
      "The aluminum recycling process begins with the collection of aluminum waste from various sources, including industrial scrap, used beverage cans, and old aluminum structures. Once collected, the waste undergoes a rigorous sorting process to remove any impurities such as plastic, paper, and other non-aluminum materials.",
      "After sorting, the aluminum waste is compressed into dense bales. This step is crucial because it reduces the volume of the material, making it easier to transport and handle during the next stages of production.",
      "Key Points:",
      "- Collection from multiple sources.",
      "- Sorting and removal of non-aluminum materials.",
      "- Compression into compact bales for efficiency."
    ],
    image: "https://images.unsplash.com/photo-1558640476-437a2b9438a2?auto=format&fit=crop&q=80&w=1200",
    animation: "fade-in",
  },
  {
    title: "Casting Billets",
    description: [
      "Once the aluminum waste has been baled, it is transported to the casting facility. The bales are fed into a high-temperature furnace where they are melted down into a liquid state. This melting process is carefully controlled to ensure that any remaining impurities are separated from the molten aluminum.",
      "After melting, the pure aluminum is cast into cylindrical molds to form billets. These billets vary in size depending on their intended use. The cooling process that follows is equally important, as it determines the internal structure and strength of the aluminum billets.",
      "Key Points:",
      "- Melting at high temperatures to remove impurities.",
      "- Casting into cylindrical molds to create billets.",
      "- Controlled cooling for optimal strength and quality."
    ],
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=1200",
    animation: "slide-in-left",
  },
  {
    title: "Extrusion Process",
    description: [
      "The aluminum billets are then prepared for extrusion. This involves heating the billets to a specific temperature where they become soft enough to be forced through a shaped die under high pressure. The die determines the cross-sectional profile of the final product.",
      "During extrusion, the aluminum profiles emerge in long continuous lengths and must be carefully stretched and straightened to remove any internal stresses. Once the desired shape and length are achieved, the profiles are cooled and cut into manageable sections for further processing.",
      "Key Points:",
      "- Heating billets to make them malleable.",
      "- Pushing through a die to form desired profiles.",
      "- Stretching and straightening to remove internal stresses."
    ],
    image: "https://images.unsplash.com/photo-1563456161948-5847b88c2f48?auto=format&fit=crop&q=80&w=1200",
    animation: "slide-in-right",
  },
  {
    title: "Powder Coating",
    description: [
      "After extrusion, aluminum profiles undergo a powder coating process to enhance their durability and aesthetic appeal. First, the surfaces of the profiles are thoroughly cleaned to remove any dirt, grease, or oxidation.",
      "A fine powder coating material is then electrostatically applied to the aluminum surface. This powder adheres to the metal and is subsequently cured in a high-temperature oven, where it melts and forms a uniform, durable finish.",
      "Powder-coated aluminum is highly resistant to corrosion, UV rays, and scratches, making it ideal for outdoor applications.",
      "Key Points:",
      "- Cleaning the surface to ensure proper adhesion.",
      "- Electrostatic application of powder.",
      "- Oven curing for a long-lasting, durable finish."
    ],
    image: "https://images.unsplash.com/photo-1589792923962-537704632910?auto=format&fit=crop&q=80&w=1200",
    animation: "parallax",
  },
  {
    title: "Anodizing Process",
    description: [
      "The anodizing process involves submerging aluminum profiles into an electrolytic bath, where an electric current is passed through the metal to create a thick oxide layer. This oxide layer enhances the corrosion resistance of the aluminum while also allowing for additional color customization.",
      "The process includes multiple stages such as pre-treatment, anodizing, coloring (if required), and sealing. Anodized aluminum is widely used in architectural and industrial applications due to its superior durability and sleek appearance.",
      "Key Points:",
      "- Electrochemical oxidation for corrosion resistance.",
      "- Option to add color through dyeing processes.",
      "- Final sealing for long-lasting protection."
    ],
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=1200",
    animation: "fade-in-scale",
  },
];

const ProductionCycle = () => {
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

      const sections = gsap.utils.toArray<HTMLElement>(".step");
      const images = gsap.utils.toArray<HTMLElement>(".step-image");
      const texts = gsap.utils.toArray<HTMLElement>(".step-content");

      // Timeline for each section
      sections.forEach((section, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
            scrub: 1,
          }
        });

        // Image animations
        tl.fromTo(images[index], 
          { 
            scale: 0.8, 
            opacity: 0,
            rotateY: -30,
          },
          { 
            scale: 1, 
            opacity: 1,
            rotateY: 0,
            duration: 1,
            ease: "power2.out"
          }
        );

        // Text content animations with stagger
        tl.fromTo(texts[index].children,
          { 
            y: 50,
            opacity: 0
          },
          { 
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
          },
          "-=0.5"
        );

        // Background color transition
        tl.fromTo(section,
          { backgroundColor: "rgba(255, 255, 255, 0)" },
          { backgroundColor: "rgba(249, 250, 251, 0.8)", duration: 1 },
          "<"
        );
      });

      // Parallax effect for images
      images.forEach((image) => {
        gsap.to(image, {
          yPercent: 20, // Reduced from 30 to 20 for less extreme parallax
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            // Ensure ScrollTrigger cleanup
            onLeave: () => gsap.set(image, { clearProps: "all" }),
            onLeaveBack: () => gsap.set(image, { clearProps: "all" })
          }
        });
      });

      // Cleanup function for ScrollTrigger
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-white">
      {/* Scroll indicator - Only visible for first section */}
      <div 
        ref={scrollIndicatorRef}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-gray-600"
      >
        <ArrowDownCircle className="w-8 h-8 animate-bounce" />
      </div>

      {steps.map((step, index) => (
        <section
          key={index}
          className={`
            step relative min-h-screen w-full 
            flex flex-col lg:flex-row items-center justify-center
            px-4 sm:px-8 lg:px-16 py-20 transition-colors duration-500
            ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
            ${index === steps.length - 1 ? 'mb-0' : 'mb-8'}
          `}
        >
          {/* Image container */}
          <div className="step-image w-full lg:w-1/2 h-[400px] lg:h-[600px] relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Content container */}
          <div className="step-content w-full lg:w-1/2 px-6 lg:px-12 mt-8 lg:mt-0">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              {step.title}
            </h2>
            
            <div className="space-y-4">
              {step.description.map((para, pIndex) => (
                <p
                  key={pIndex}
                  className={`
                    text-lg leading-relaxed
                    ${para.startsWith('Key Points:') ? 'font-semibold text-gray-900 mt-6' : 'text-gray-700'}
                    ${para.startsWith('-') ? 'pl-4 text-gray-600' : ''}
                  `}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductionCycle;