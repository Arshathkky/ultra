import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HardHat, Shield, Heart, Brain, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const safetySteps = [
  {
    title: "Safety Management Framework",
    description: [
      "Our Safety Management System (SMS) provides a structured framework for ensuring the safety of all employees, contractors, and visitors. It is designed to systematically address workplace hazards and implement protective measures to prevent accidents and injuries.",
      "The system is built around the principle of continuous improvement and is regularly updated to reflect changes in best practices, regulatory requirements, and our operational environment.",
      "Framework Components:",
      "- Safety policies and procedures",
      "- Risk assessment methodologies",
      "- Emergency response planning",
      "- Regular safety audits and inspections"
    ],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
    icon: Shield,
    color: "from-yellow-500 to-orange-600"
  },
  {
    title: "Personal Protective Equipment",
    description: [
      "Personal Protective Equipment (PPE) is a critical component of our safety system. We provide comprehensive training on the proper use and maintenance of all required PPE, ensuring that all personnel are adequately protected against workplace hazards.",
      "Our PPE program includes regular inspections to verify that equipment is in good condition and properly used. We also continuously evaluate new PPE technologies to improve comfort and protection for our workers.",
      "Standard PPE Requirements:",
      "- Safety helmets in all production areas",
      "- Safety glasses with side shields",
      "- Heat-resistant gloves for casting and extrusion areas",
      "- Steel-toed safety boots",
      "- Hearing protection in high-noise areas"
    ],
    image: "https://images.unsplash.com/photo-1488454869677-95fcf4f2f5e8?auto=format&fit=crop&q=80&w=1200",
    icon: HardHat,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Health & Wellness Programs",
    description: [
      "Our commitment to safety extends beyond physical hazards to include the overall health and wellness of our employees. We recognize that a healthy workforce is a safer workforce, and we have implemented various programs to support employee wellbeing.",
      "These programs include regular health screenings, fitness initiatives, and mental health resources. By taking a holistic approach to employee health, we aim to reduce fatigue-related incidents and improve overall workforce resilience.",
      "Program Elements:",
      "- Regular health screenings and monitoring",
      "- Ergonomic workstation evaluations",
      "- Mental health support resources",
      "- Fitness challenges and incentives",
      "- Stress management workshops"
    ],
    image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?auto=format&fit=crop&q=80&w=1200",
    icon: Heart,
    color: "from-red-500 to-pink-600"
  },
  {
    title: "Safety Training & Education",
    description: [
      "Comprehensive safety training is provided to all employees, contractors, and visitors. This training ensures that everyone understands the potential hazards in our facility and knows how to protect themselves and others.",
      "Our training programs are regularly updated to incorporate lessons learned from incidents, near misses, and industry best practices. We emphasize practical, hands-on training whenever possible to reinforce safety concepts.",
      "Training Program:",
      "- Initial safety orientation for all new personnel",
      "- Job-specific safety training",
      "- Regular safety refresher courses",
      "- Emergency response drills",
      "- Leadership safety training for supervisors and managers"
    ],
    image: "https://images.unsplash.com/photo-1522881193457-37ae97c905bf?auto=format&fit=crop&q=80&w=1200",
    icon: Brain,
    color: "from-green-500 to-teal-600"
  },
  {
    title: "Incident Investigation & Prevention",
    description: [
      "Despite our best preventive efforts, incidents can still occur. When they do, we conduct thorough investigations to identify root causes and implement corrective actions to prevent recurrence.",
      "Our incident investigation process involves a team approach with representatives from management, safety personnel, and workers. This collaborative approach ensures that all perspectives are considered and that the most effective solutions are implemented.",
      "Investigation Process:",
      "- Immediate incident response and reporting",
      "- Thorough root cause analysis",
      "- Development of corrective and preventive actions",
      "- Implementation tracking and verification",
      "- Sharing of lessons learned across the organization"
    ],
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1200",
    icon: Sparkles,
    color: "from-purple-500 to-violet-600"
  },
];

const SafetyManagement = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".safety-step");
      const cards = gsap.utils.toArray<HTMLElement>(".safety-card");
      const icons = gsap.utils.toArray<HTMLElement>(".safety-icon-container");
      
      // Animate header on page load
      gsap.from(".safety-header", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
      
      // Animate stats on page load
      gsap.from(".stat-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
      });

      // Timeline for each section
      sections.forEach((section, index) => {
        // Card entrance animation
        gsap.fromTo(cards[index],
          {
            y: 100,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "bottom 70%",
              toggleActions: "play none none reverse",
            }
          }
        );
        
        // Icon pulse animation
        gsap.to(icons[index], {
          scale: 1.1,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play pause resume reverse",
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-white">
      {/* Hero section */}
      <div className="safety-header w-full bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Safety Management System</h1>
          <p className="text-xl md:text-2xl max-w-3xl opacity-90">
            Safety isn't just a priority—it's a core value that guides everything we do. 
            Our comprehensive Safety Management System ensures that every employee returns home safely every day.
          </p>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="stat-item bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold text-orange-600 mb-2">99.8%</h3>
              <p className="text-gray-700">Safety Compliance Rate</p>
            </div>
            <div className="stat-item bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold text-orange-600 mb-2">450+</h3>
              <p className="text-gray-700">Days Without Incidents</p>
            </div>
            <div className="stat-item bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold text-orange-600 mb-2">100%</h3>
              <p className="text-gray-700">Staff Safety Certified</p>
            </div>
            <div className="stat-item bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold text-orange-600 mb-2">24/7</h3>
              <p className="text-gray-700">Safety Monitoring</p>
            </div>
          </div>
        </div>
      </div>

      {/* Safety steps */}
      <div className="py-16">
        {safetySteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <section key={index} className="safety-step max-w-7xl mx-auto px-6 md:px-10 mb-20">
              <div className="safety-card rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-64 md:h-80">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-60`}></div>
                  
                  {/* Icon overlay */}
                  <div className="safety-icon-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-5 shadow-lg">
                    <Icon className="w-12 h-12 text-gray-800" />
                  </div>
                  
                  <h2 className="absolute bottom-0 left-0 w-full p-6 text-3xl md:text-4xl font-bold text-white">
                    {step.title}
                  </h2>
                </div>
                
                <div className="bg-white p-6 md:p-10 space-y-4">
                  {step.description.map((para, pIndex) => (
                    <p
                      key={pIndex}
                      className={`
                        text-lg leading-relaxed
                        ${para.startsWith('Framework') || para.startsWith('Standard') || para.startsWith('Program') || para.startsWith('Training') || para.startsWith('Investigation') 
                          ? 'font-semibold text-gray-900 mt-6' 
                          : 'text-gray-700'}
                        ${para.startsWith('-') ? 'pl-6 border-l-4 border-orange-500 ml-4 text-gray-600' : ''}
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
    </div>
  );
};

export default SafetyManagement;