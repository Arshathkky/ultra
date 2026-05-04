import React from "react";
import { motion } from "framer-motion";
import { MoveRight, Award, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import iso1 from "/images/ISO14001.jpg"
import iso2 from "/images/ISO9001.jpg"

interface Certification {
  title: string;
  desc: string;
  type: "image" | "icon";
  img?: string;
  icon?: any;
}

const Quality: React.FC = () => {
  const certifications: Certification[] = [
    {
      img: iso1,
      title: "ISO 14001:2015",
      desc: "International standard for Environmental Management Systems, reflecting our commitment to sustainability.",
      type: "image"
    },
    {
      img: iso2,
      title: "ISO 9001:2015",
      desc: "Global benchmark for Quality Management Systems, ensuring excellence in every production phase.",
      type: "image"
    },
    {
      icon: Award,
      title: "SLS 1410 Certified",
      desc: "Proudly achieving local quality standards, setting benchmarks for the aluminium industry.",
      type: "icon"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      desc: "Rigorous laboratory testing and quality control processes meeting international specifications.",
      type: "icon"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Our Commitment to <br/>
                <span className="text-[#05af28]">Manufacturing Excellence</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                ULTRA ALUMINIUM delivers premium quality solutions, setting new standards
                in Sri Lanka's manufacturing industry through innovation and precision.
              </p>
              <ul className="space-y-4 mb-10">
                {["Advanced Extrusion Technology", "Sustainable Production Processes", "International Quality Benchmarks"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-[#39b54a]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#05af28] text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl hover:bg-[#049422] transition-all duration-300"
              >
                Learn More About Our Quality <MoveRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="mb-6">
                    {cert.type === "image" ? (
                      <img src={cert.img} alt={cert.title} className="h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                    ) : (
                      Icon && <Icon className="w-12 h-12 text-[#39b54a]" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cert.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;