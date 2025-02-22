import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";

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
      image: "images/logo.png",
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
      image: "images/logo.png",
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
      image: "images/logo.png",
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
      image: "images/logo.png",
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
      image: "images/logo.png",
      animation: "fade-in-scale",
    },
];

const ProductionCycle = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".step");
  
      sections.forEach((section, index) => {
        const animationType = steps[index].animation as keyof typeof animationTypes; // 👈 Ensuring valid key type
        const animationTypes = {
          "fade-in": { opacity: 0, y: 50 },
          "slide-in-left": { opacity: 0, x: -100 },
          "slide-in-right": { opacity: 0, x: 100 },
          "parallax": { opacity: 0, y: 100, scale: 0.95 },
          "pulse": { opacity: 0, scale: 1.2, ease: "power1.inOut" },
        };
  
        // Ensure `animationType` exists in animationTypes, fallback if not found
        const animationProps = animationTypes[animationType] ?? { opacity: 0, y: 50 };
  
        gsap.fromTo(
          section,
          animationProps, // ✅ Type-safe lookup
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 2.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "center center",
              scrub: 2,
            },
          }
        );
      });
    }, containerRef);
  
    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={containerRef} className="bg-white text-black w-full max-w-full mx-auto">
      {steps.map((step, index) => (
        <section
          key={index}
          className="step min-h-screen flex flex-col justify-center items-center w-full opacity-0 relative overflow-hidden px-4 sm:px-8 lg:px-16"
        >
          {/* Title */}
          <h2 className="title text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 text-center">
            {step.title}
          </h2>

          {/* Image Wrapper (Full width on mobile, fixed on desktop) */}
          <div className="w-full max-w-4xl h-52 sm:h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
            <img
              src={step.image}
              alt={step.title}
              className="image w-full h-full object-contain"
            />
          </div>

          {/* Description (Wider on desktop, stacked on mobile) */}
          <div className="text w-full max-w-4xl mt-4 text-center sm:text-left">
            {step.description.map((para, pIndex) => (
              <p 
                key={pIndex} 
                className="mb-3 text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 font-medium text-justify"
              >
                {para}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductionCycle;
