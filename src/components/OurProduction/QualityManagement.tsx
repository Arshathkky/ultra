import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardCheck, BadgeCheck, ShieldCheck, LineChart, AlertCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const qualitySteps = [
  {
    title: "Quality Management System Overview",
    description: [
      "Our comprehensive Quality Management System (QMS) is designed to ensure that every product we manufacture meets the highest standards of quality and customer satisfaction. This system is built on a foundation of continuous improvement and rigorous quality control procedures.",
      "The QMS covers all aspects of our operations, from raw material inspection to final product delivery, and is designed to comply with international standards including ISO 9001:2015.",
      "Key Components:",
      "- Documentation of all quality processes and procedures",
      "- Regular internal and external audits",
      "- Continuous monitoring of key performance indicators",
      "- Comprehensive training programs for all staff"
    ],
    image: "https://images.unsplash.com/photo-1588600878108-578307a3cc9b?auto=format&fit=crop&q=80&w=1200",
    icon: ClipboardCheck,
  },
  {
    title: "Quality Control & Inspection",
    description: [
      "Our quality control process begins with incoming raw materials and continues through every stage of production. Each aluminum profile undergoes multiple inspections at critical points in the manufacturing process.",
      "We employ both visual inspections and sophisticated measuring equipment to verify dimensional accuracy, surface finish, and mechanical properties. Our quality inspectors are trained to detect even the smallest defects that might impact product performance.",
      "Inspection Methods:",
      "- Visual inspection by trained quality inspectors",
      "- Dimensional verification using precise measuring equipment",
      "- Non-destructive testing for internal integrity",
      "- Destructive testing on sample pieces for strength verification"
    ],
    image: "https://images.unsplash.com/photo-1581092335397-9fa341d5f512?auto=format&fit=crop&q=80&w=1200",
    icon: ShieldCheck,
  },
  {
    title: "Certification & Compliance",
    description: [
      "Our products and processes meet or exceed all relevant industry standards and certifications. We maintain strict compliance with international quality standards to ensure our aluminum profiles meet the highest requirements for various applications.",
      "Regular third-party audits verify our adherence to these standards and provide independent validation of our quality management system. This commitment to certification gives our customers confidence in the reliability and performance of our products.",
      "Certifications:",
      "- ISO 9001:2015 Quality Management System",
      "- ISO 14001:2015 Environmental Management System",
      "- OHSAS 18001 Occupational Health and Safety Management",
      "- Industry-specific certifications for architectural and structural applications"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    icon: BadgeCheck,
  },
  {
    title: "Continuous Improvement",
    description: [
      "Our commitment to quality extends beyond meeting current standards; we constantly strive to improve our processes, products, and services. This philosophy of continuous improvement is embedded in our company culture and drives innovation throughout our operations.",
      "We regularly analyze quality data to identify trends and potential areas for improvement. Employee feedback is encouraged and valued as an essential component of our continuous improvement initiatives.",
      "Improvement Strategies:",
      "- Regular quality circles and problem-solving sessions",
      "- Statistical process control to identify variation",
      "- Root cause analysis for any quality issues",
      "- Investment in new technologies and equipment"
    ],
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80&w=1200",
    icon: LineChart,
  },
  {
    title: "Non-Conformance Management",
    description: [
      "Despite our rigorous quality controls, occasional non-conformances may occur. When they do, we have a structured system for identifying, documenting, and addressing these issues promptly to minimize any impact on our customers.",
      "Our non-conformance management process includes immediate containment actions, thorough root cause analysis, and implementation of corrective and preventive measures. This systematic approach ensures that we learn from every instance and strengthen our processes to prevent recurrence.",
      "Management Process:",
      "- Immediate identification and containment",
      "- Thorough investigation and root cause analysis",
      "- Implementation of corrective actions",
      "- Verification of effectiveness and preventive measures"
    ],
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=1200",
    icon: AlertCircle,
  },
];

const QualityManagement = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".quality-step");
      const images = gsap.utils.toArray<HTMLElement>(".quality-image");
      const texts = gsap.utils.toArray<HTMLElement>(".quality-content");
      const icons = gsap.utils.toArray<HTMLElement>(".quality-icon");

      // Timeline for each section
      sections.forEach((section, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top center+=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          }
        });

        // Icon animation
        tl.fromTo(icons[index],
          {
            scale: 0,
            rotate: -90,
            opacity: 0
          },
          {
            scale: 1,
            rotate: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
          }
        );

        // Image animations
        tl.fromTo(images[index], 
          { 
            x: index % 2 === 0 ? -100 : 100, 
            opacity: 0,
          },
          { 
            x: 0, 
            opacity: 1,
            duration: 1,
            ease: "power2.out"
          },
          "-=0.4"
        );

        // Text content animations with stagger
        tl.fromTo(texts[index].children,
          { 
            y: 30,
            opacity: 0
          },
          { 
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power1.out"
          },
          "-=0.6"
        );

        // Background gradient shift
        tl.fromTo(section,
          { backgroundPosition: "0% 50%" },
          { 
            backgroundPosition: "100% 50%", 
            duration: 2,
            ease: "sine.inOut" 
          },
          "<"
        );
      });

      // Parallax effect for images
      images.forEach((image) => {
        gsap.to(image, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-white pb-20">
      {/* Intro section */}
      <div className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Quality Management System</h1>
          <p className="text-xl md:text-2xl max-w-3xl opacity-90">
            Excellence is not a skill, it's an attitude. Our comprehensive Quality Management System 
            ensures every product we deliver meets the highest standards of performance and reliability.
          </p>
        </div>
      </div>

      {/* Quality steps */}
      {qualitySteps.map((step, index) => {
        const Icon = step.icon;
        return (
          <section
            key={index}
            className={`
              quality-step relative w-full py-20 md:py-28
              flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
              items-center justify-between gap-8 md:gap-12 px-6 md:px-10 lg:px-20
              transition-all duration-500 bg-gradient-to-r 
              ${index % 2 === 0 ? 'from-blue-50 via-white to-blue-50' : 'from-gray-50 via-white to-gray-50'}
            `}
          >
            {/* Icon floating element */}
            <div className="quality-icon absolute top-12 left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0 md:top-1/2 md:-translate-y-1/2 md:right-[45%] z-10 bg-white rounded-full p-5 shadow-lg">
              <Icon className="w-10 h-10 text-blue-600" />
            </div>

            {/* Image container */}
            <div className="quality-image w-full md:w-5/12 h-[350px] md:h-[500px] relative overflow-hidden rounded-xl shadow-xl">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Content container */}
            <div className="quality-content w-full md:w-6/12 py-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                {step.title}
              </h2>
              
              <div className="space-y-4">
                {step.description.map((para, pIndex) => (
                  <p
                    key={pIndex}
                    className={`
                      text-lg leading-relaxed
                      ${para.startsWith('Key') || para.startsWith('Certification') || para.startsWith('Inspection') || para.startsWith('Improvement') || para.startsWith('Management') 
                        ? 'font-semibold text-gray-900 mt-6' 
                        : 'text-gray-700'}
                      ${para.startsWith('-') ? 'pl-4 text-gray-600' : ''}
                    `}
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
  );
};

export default QualityManagement;