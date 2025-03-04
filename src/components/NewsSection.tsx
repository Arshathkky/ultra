import { useState } from "react";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string[]; // Change from string to string[]
  image: string;
  date: string;
}

export default function NewsSection() {
  const news: NewsItem[] = [
    {
      id: 1,
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
      id: 2,
      title: "Award-Winning Project Completion",
      excerpt: [
        "The inaugural event for connecting 2 megawatts of electricity to the national power grid was held on Tuesday (7th) at the Ultra Aluminium Private Limited premises in Arayampathi.",
        "The event was led by the Chairman of Ultra Aluminium Private Limited, Alhaj A.M. Unais. The Chief Guest, Mr. W.L.S.A. Wijethunga, the Deputy General Manager of the Ceylon Electricity Board (Eastern Province), hoisted the national flag.",
        "The company's flag was hoisted by the Founder and Chairman of Ultra Aluminium Private Limited, Alhaj I.L.A. Akbar. Following the flag-raising ceremony, the project was officially launched by the Chief Guest and Mr. M.M. Abdullah, the liaison secretary to the Governor of the Eastern Province.",
        "Ultra Aluminium Private Limited is the first company in the Batticaloa District to receive ISO 9001 certification and the second company in the Eastern Province to do so."
      ],
      image: "/images/opening.jpg",
      date: "2024-12-17"
    }
  ];

  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const openModal = (newsItem: NewsItem) => {
    setSelectedNews(newsItem);
  };

  const closeModal = () => {
    setSelectedNews(null);
  };

  return (
    <div className="py-16">
      <div className="w-full px-4">
        <h2 className="text-5xl font-extrabold text-center text-[#1a0179] dark:text-white mb-12 tracking-wide uppercase">
          Latest News
        </h2>

        <div className="space-y-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md w-full">
              {/* Image Container with Fixed Size */}
              <div className="w-full h-64 overflow-hidden flex justify-center items-center bg-gray-200">
                <img src={item.image} alt={item.title} className="w-full h-96 object-cover" />
              </div>

              <div className="p-6">
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                <p className="mt-2 text-gray-600 line-clamp-3">{item.excerpt.join(" ")}</p>

                {/* Read More button */}
                <div className="mt-4">
                  <button
                    onClick={() => openModal(item)}
                    className="inline-block px-6 py-2 bg-[#1a0179] text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedNews && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative max-h-[80vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
            >
              ✕
            </button>

            {/* Scrollable Content */}
            <div className="flex flex-col items-center">
              <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-64 object-cover rounded-md" />
              <h2 className="text-2xl font-bold mt-4">{selectedNews.title}</h2>
              <span className="text-sm text-gray-500">{selectedNews.date}</span>
              
              {/* Scrollable Text */}
              <div className="mt-4 text-gray-700 max-h-[50vh] overflow-y-auto px-4">
                {selectedNews.excerpt.map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
