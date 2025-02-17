import { useState } from "react";

type Dealer = {
  id: number;
  name: string;
  image: string;
  description: string;
  location: string;
  contact: string;
};

const dealers: Dealer[] = [
  {
    id: 1,
    name: "John's Auto",
    image: "images/logo1.png",
    description: "Authorized dealer of premium cars.",
    location: "New York, USA",
    contact: "johnsauto@example.com",
  },
  {
    id: 2,
    name: "Speed Motors",
    image: "images/logo1.png",
    description: "Luxury car dealership with global brands.",
    location: "Los Angeles, USA",
    contact: "speedmotors@example.com",
  },
  {
    id: 3,
    name: "Elite Cars",
    image: "images/logo1.png",
    description: "High-end cars and excellent service.",
    location: "Miami, USA",
    contact: "elitecars@example.com",
  },
];

export default function BranchCard() {
  const [selectedDealer, setSelectedDealer] = useState<Dealer | null>(null);

  return (
    <div className="py-12 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Dealers</h2>

        {/* Dealers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dealers.map((dealer) => (
            <div
              key={dealer.id}
              className="group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden"
              onClick={() => setSelectedDealer(dealer)}
            >
              <div className="relative">
                <img
                  src={dealer.image}
                  alt={dealer.name}
                  className="w-full h-48 object-contain transform transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{dealer.name}</h3>
                <p className="text-gray-600">{dealer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedDealer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-lg">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{selectedDealer.name}</h2>
              <p className="text-gray-600 mb-4">{selectedDealer.description}</p>
              <p className="text-gray-500">
                📍 {selectedDealer.location} <br />
                📧 {selectedDealer.contact}
              </p>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={() => setSelectedDealer(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
