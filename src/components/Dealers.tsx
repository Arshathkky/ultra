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
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Filter dealers by search term
  useEffect(() => {
    const filtered = dealers.filter(dealer =>
      dealer.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dealer.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDealers(filtered);
  }, [searchTerm]);

  // Animate dealer cards on scroll
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

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedDealer(null);
      }
    };

    if (selectedDealer) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedDealer]);

  const groupedDealers = filteredDealers.reduce((acc, dealer) => {
    if (!acc[dealer.district]) {
      acc[dealer.district] = [];
    }
    acc[dealer.district].push(dealer);
    return acc;
  }, {} as Record<string, Dealer[]>);

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedDealer(null);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="px-4 sm:px-6 lg:px-8">
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

<<<<<<< HEAD
      {/* Dealer Details Modal */}
      {selectedDealer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div className="bg-white rounded-lg p-8 w-96 max-w-full">
            <button
              onClick={() => setSelectedDealer(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedDealer.image}
              alt={selectedDealer.name}
              className="w-full h-48 object-contain mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedDealer.name}</h3>
            <p className="text-gray-600 mb-4">{selectedDealer.description}</p>
            <p className="text-gray-600 mb-2">
              <strong>Location:</strong> {selectedDealer.location}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>District:</strong> {selectedDealer.district}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Contact:</strong> {selectedDealer.contact}
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> {selectedDealer.phone}
            </p>
=======
      {/* Modal for Dealer Details */}
      {selectedDealer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div
            ref={modalRef}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedDealer(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center">
              <img src={selectedDealer.image} alt={selectedDealer.name} className="h-32 object-contain mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedDealer.name}</h2>
              <p className="text-gray-600 mb-4 text-center">{selectedDealer.description}</p>
              <div className="w-full text-left space-y-2">
                <p className="flex items-center text-gray-700"><MapPin className="w-5 h-5 mr-2" /> {selectedDealer.location}</p>
                <p className="flex items-center text-gray-700"><Mail className="w-5 h-5 mr-2" /> {selectedDealer.contact}</p>
                <p className="flex items-center text-gray-700"><Phone className="w-5 h-5 mr-2" /> {selectedDealer.phone}</p>
              </div>
            </div>
>>>>>>> 6578d63e620d8b9c15abbfd6411325f2e9d47c74
          </div>
        </div>
      )}
    </div>
  );
}
