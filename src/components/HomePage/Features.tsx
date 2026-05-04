import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Leaf, Award, Users, Headset } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: "Unmatched Quality",
    description: "ISO 9001 & SLS 1410 certified processes ensuring every profile meets international standards."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Utilizing state-of-the-art extrusion technology to deliver complex and precise aluminum solutions."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Proud winners of the Presidential Environment Award, committed to eco-friendly manufacturing."
  },
  {
    icon: Award,
    title: "Industry Leader",
    description: "Over a decade of excellence in aluminum casting and extrusion in Sri Lanka."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals committed to delivering excellence from design to delivery."
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "Continuous customer support and technical assistance for all your aluminum needs."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Why Choose <span className="text-[#39b54a]">Ultra Aluminium</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We combine decades of experience with modern technology to provide the best aluminum solutions in the industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-[#39b54a]/30 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#39b54a]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#39b54a] transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-[#39b54a] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
