import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string[];
  image: string;
  date: string;
}

interface NewsSectionProps {
  showAllInitially?: boolean;
}

export default function NewsSection({ showAllInitially = false }: NewsSectionProps) {
  const navigate = useNavigate();

  const news: NewsItem[] = [
      {
  "id": 1,
  "title": "A Proud Moment for ULTRA ALUMINIUM PVT LTD 🌿",
  "excerpt": [
    "We are truly honored to be recognized at the Presidential Environment Awards Ceremony 2025, held today, 23rd October 2025, at the Bandaranaike Memorial International Conference Hall (BMICH), under the distinguished patronage of Hon. Anura Kumara Dissanayake, President of the Democratic Socialist Republic of Sri Lanka.",
    "Our company’s Chairman, Mr. A. M. Unais, received this award from Hon. Anura Kumara Dissanayake, marking a proud achievement for the entire Ultra Aluminium team.",
    "This prestigious recognition reflects Ultra Aluminium’s unwavering commitment to environmental sustainability, innovation, and responsible manufacturing practices that contribute to a cleaner and greener Sri Lanka.",
    "We extend our sincere acknowledgment to the Ministry of Environment, Hon. (Dr.) Dhammika Patabendi, Minister of Environment, and Hon. Anton Jayakody, Deputy Minister of Environment, for their valuable participation in this national event.",
    "🌱 At Ultra Aluminium, we remain dedicated to advancing sustainable solutions and creating a lasting positive impact on our environment."
  ],
  "image": "/images/environment_award.jpg",
 
  "date": "2025-10-23"
},
    // {
    //   id: 2,
    //   title: "Ultra Aluminium (Pvt) Ltd Proudly Celebrates Key Milestones!",
    //   excerpt: [
    //     "On 04th October 2025, Ultra Aluminium (Pvt) Ltd proudly celebrated significant milestones at its factory premises, marking a new chapter of growth and excellence.",
    //     "The event highlighted the company’s achievement of the SLS 1410 Product Certification, reaffirming our commitment to the highest quality standards and industry excellence.",
    //     "The ceremony also featured key leadership appointments, with Mr. Priyantha Kumara officially appointed as Chief Executive Officer (CEO) and five new members joining the Board of Directors: Mr. Priyantha Kumara, Mr. K.L.M. Asmal, Mr. M.U.M. Yahya, Mr. S.M. Muslih, and Mr. A.A. Alfar, effective from 1st October 2025.",
    //     "These appointments were made in the presence of existing board members, Mr. M.I.M. Jawfer and Mr. M.J.M. Jeslan, under the leadership of Hon. A.M. Unais, Chairman of Ultra Aluminium, with the esteemed presence of our Founder, Hon. I.L. Akbar Hajiyar.",
    //     "The celebration also recognized major company achievements, including ISO 9001, ISO 14001, and SLS 1410 Certifications, as well as selection for the Presidential Environmental Award 2025 — reflecting our dedication, teamwork, and vision for sustainable growth.",
    //     "Together We Achieved, Together We Celebrate – and Together We Will Grow!"
    //   ],
    //   image: "/images/appointment.jpg",
    //   date: "2025-10-04"
    // },
    {
      id: 5,
      title: "Ultra Aluminium (Pvt) Ltd Achieves ISO 14001:2015 Certification!",
      excerpt: [
        "Ultra Aluminium (Pvt) Ltd, based in Batticaloa, has been awarded the ISO 14001:2015 Environmental Management System Certification by the Sri Lanka Standards Institution (SLSI).",
        "The certificate was officially presented by Director General of SLSI, Dr. Siddhika G. Senaratne, to the Chairman of Ultra Aluminium (Pvt) Ltd, Mr. A.M. Unais.",
        "This recognition reflects our strong commitment to environmental sustainability, responsible business practices, and setting new standards in the aluminium industry."
      ],
      image: "/images/Banner2.jpeg",
      date: "2025-08-01"
    },
    {
      id: 3,
      title: "Ultra Aluminium (Pvt) Ltd Achieves ISO 9001:2015 Certification!",
      excerpt: [
        "Ultra Aluminium (Pvt) Ltd Achieves ISO 9001:2015 Certification!",
        "We are proud to announce that Ultra Aluminium (Pvt) Ltd is the first company in Batticaloa District to achieve ISO 9001:2015 certification, a global standard for quality management systems.",
        "This milestone reflects our unwavering commitment to delivering high-quality products and consistently exceeding customer expectations."
      ],
      image: "/images/banner.jpg",
      date: "2025-01-15"
    },
    {
      id: 4,
      title: "Award-Winning Project Completion",
      excerpt: [
        "The inaugural event for connecting 2 megawatts of electricity to the national power grid was held on Tuesday (7th) at the Ultra Aluminium Private Limited premises in Arayampathi.",
        "The event was led by the Chairman of Ultra Aluminium Private Limited, Alhaj A.M. Unais...",
        "Ultra Aluminium Private Limited is the first company in the Batticaloa District to receive ISO 9001 certification and the second company in the Eastern Province to do so."
      ],
      image: "/images/opening.jpg",
      date: "2024-12-17"
    },
    
  ];

  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(showAllInitially ? 4 : 2);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const openModal = (newsItem: NewsItem) => setSelectedNews(newsItem);
  const closeModal = () => setSelectedNews(null);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("modal-backdrop")) {
      closeModal();
    }
  };

  const loadMore = () => {
    if (!showAllInitially) {
      navigate("/news");
    } else {
      setVisibleCount((prev) => prev + 2);
    }
  };

  return (
    <div className="py-20 bg-gray-50/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center text-[#05af28] mb-16 tracking-tight"
        >
          Latest News & Updates
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {news.slice(0, visibleCount).map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div
                className="relative w-full h-72 overflow-hidden bg-gray-100 cursor-pointer"
                onClick={() => setZoomedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-px bg-[#39b54a]" />
                  <span className="text-xs font-bold text-[#39b54a] uppercase tracking-widest">{item.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#05af28] transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600 line-clamp-3 leading-relaxed">
                  {item.excerpt.join(" ")}
                </p>
                <div className="mt-8 pt-6 border-t border-gray-50">
                  <button
                    onClick={() => openModal(item)}
                    className="inline-flex items-center text-[#05af28] font-bold group/btn"
                  >
                    Read Full Story
                    <svg className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < news.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {selectedNews && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 modal-backdrop"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
            >
              ✕
            </button>
            <div className="flex flex-col items-center">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-64 object-contain rounded-md"
              />
              <h2 className="text-2xl font-bold mt-4">{selectedNews.title}</h2>
              <span className="text-sm text-gray-500">{selectedNews.date}</span>
              <div className="mt-4 text-gray-700 max-h-[50vh] overflow-y-auto px-4">
                {selectedNews.excerpt.map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60]"
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg object-contain"
          />
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
