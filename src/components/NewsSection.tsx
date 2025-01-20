import { useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export default function NewsSection() {
  const news: NewsItem[] = [
    {
      id: 1,
      title: "Ultra Aluminium (Pvt) Ltd Achieves ISO 9001:2015 Certification!",
      excerpt: "Ultra Aluminium (Pvt) Ltd Achieves ISO 9001:2015 Certification! We are proud to announce that Ultra Aluminium (Pvt) Ltd is the first company in Batticaloa District to achieve ISO 9001:2015 certification, a global standard for quality management systems. This milestone reflects our unwavering commitment to delivering high-quality products and consistently exceeding customer expectations.",
      image: "/images/banner.jpg",
      date: "2024-03-15"
    },
    {
      id: 2,
      title: "Award-Winning Project Completion",
      excerpt: "The inaugural event for connecting 2 megawatts of electricity to the national power grid The event was held on Tuesday (7th) at the Ultra Aluminium Private Limited premises in Arayampathi, located in the Manmunai Patru area under the Batticaloa District, to mark the commencement of producing 2 megawatts of electricity from solar energy and connecting it to the national power grid. The event was led by the Chairman of Ultra Aluminium Private Limited, Alhaj A.M. Unais. The Chief Guest, Mr. W.L.S.A. Wijethunga, the Deputy General Manager of the Ceylon Electricity Board (Eastern Province), hoisted the national flag. The company's flag was hoisted by the Founder and Chairman of Ultra Aluminium Private Limited, Alhaj I.L.A. Akbar. Following the flag-raising ceremony, the project was officially launched by the Chief Guest and Mr. M.M. Abdullah, the liaison secretary to the Governor of the Eastern Province. Afterward, the Chief Guest and other dignitaries toured the company's facilities. The aim of the company is to produce electricity using solar energy in an environmentally friendly manner to meet the energy requirements for the company's machinery and connect 2 megawatts of electricity to the national power grid. The company, which started with 20 employees, has grown into a large organization with over 240 employees in just two years. Initially, the production was only 30-40 tons per month, but it has now increased to 180-200 tons.Ultra Aluminium Private Limited offers employment without discrimination based on ethnicity or religion. The company has prioritized providing jobs to women, particularly those heading households, to improve their lives in the local area. The company also awards scholarships to students taking the Advanced Level Examination in the area. During natural disasters, it provides prepared meals and dry rations to the local community, and the company's machinery has been used to improve the local infrastructure. All employees are provided with personal protective equipment, and anyone who does not wear it is not allowed to enter the factory premises. The company operates with the goal of ensuring that no employee is injured. Ultra Aluminium Private Limited is the first company in the Batticaloa District to receive ISO 9001 certification and the second company in the Eastern Province to do so",
      image: "/images/opening.jpg",
      date: "2024-03-10"
    },
    
  ];

  const [showFullNews, setShowFullNews] = useState<number | null>(null);

  const toggleNews = (id: number) => {
    setShowFullNews(showFullNews === id ? null : id);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>

        <div className="space-y-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md w-full">
              {/* Center the image and set fixed height and width */}
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-150 h-96 object-fit"  // Set width and height to 240px (60rem in Tailwind)
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                {/* Truncated or full content */}
                <p className={`mt-2 text-gray-600 ${showFullNews === item.id ? "" : "line-clamp-3"}`}>
                  {item.excerpt}
                </p>

                {/* Read More button inside each news item */}
                <div className="mt-4">
                  <button
                    onClick={() => toggleNews(item.id)}
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {showFullNews === item.id ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
