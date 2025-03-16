import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, MapPin, Mail, X, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Dealer = {
  id: number;
  name: string;
  image: string;
  description: string;
  location: string;
  district: string;
  contact: string;
  phone: string;
};

const dealers: Dealer[] = [
  {
    id: 1,
    name: "H2 FABRICATE",
    image: "images/logo1.png",
    description: "Premier authorized dealer specializing in custom aluminum solutions.",
    location: "42 Main Street, Colombo 03",
    district: "Colombo",
    contact: "colombo.aluminum@example.com",
    phone: "+94 11 234 5678"
  },
  {
    id: 2,
    name: "Kandy Metal Works",
    image: "images/logo1.png",
    description: "Expert aluminum fabrication and installation services.",
    location: "15 Temple Road, Kandy",
    district: "Kandy",
    contact: "kandy.metalworks@example.com",
    phone: "+94 81 234 5678"
  },
  {
    id: 3,
    name: "Galle Aluminum Solutions",
    image: "images/logo1.png",
    description: "Specialized in architectural aluminum applications.",
    location: "78 Fort Road, Galle",
    district: "Galle",
    contact: "galle.aluminum@example.com",
    phone: "+94 91 234 5678"
  },
  {
    id: 4,
    name: "Jaffna Metal Craft",
    image: "images/logo1.png",
    description: "Quality aluminum products and expert consultation.",
    location: "25 Hospital Road, Jaffna",
    district: "Jaffna",
    contact: "jaffna.metalcraft@example.com",
    phone: "+94 21 234 5678"
  }
];

export default function BranchCard() {
  const [selectedDealer, setSelectedDealer] = useState<Dealer | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDealers, setFilteredDealers] = useState(dealers);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const filtered = dealers.filter(dealer =>
      dealer.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dealer.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDealers(filtered);
  }, [searchTerm]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredDealers]);

  const groupedDealers = filteredDealers.reduce((acc, dealer) => {
    if (!acc[dealer.district]) {
      acc[dealer.district] = [];
    }
    acc[dealer.district].push(dealer);
    return acc;
  }, {} as Record<string, Dealer[]>);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className=" px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by district, name, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Dealers Grid Grouped by District */}
        {Object.entries(groupedDealers).map(([district, dealers]) => (
          <div key={district} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">{district}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {dealers.map((dealer, index) => (
                <div
                  key={dealer.id}
                  ref={el => cardsRef.current[index] = el}
                  className="group cursor-pointer bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  onClick={() => setSelectedDealer(dealer)}
                >
                  <div className="relative">
                    <img src={dealer.image} alt={dealer.name} className="w-full h-48 object-contain p-4" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{dealer.name}</h3>
                    <p className="text-gray-600 mb-4">{dealer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
