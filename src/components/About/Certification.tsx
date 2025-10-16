import { useState } from "react";

type CertificateType = {
  id: string;
  title: string;
  image: string;
  description: string;
};

const certificates: CertificateType[] = [
  {
    id: "iso9001",
    title: "ISO 9001:2015 Certificate",
    image: "images/certificate.jpg",
    description: "Start the new year with ISO 9001:2015 certification.",
  },
  {
    id: "iso14001",
    title: "ISO 14001 Certificate",
    image: "images/ISO 14001.jpg",
    description: "Environmental Management System certification.",
  },
  {
    id: "iso45001",
    title: "SLS 1410 Certification Mark",
    image: "images/SLS 1410.jpeg",
    description: "Our profiles are certified with the SLS trademark.",
  },
];

export default function Certification() {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateType | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Close modal or zoom-out when clicking outside
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      if (isZoomed) setIsZoomed(false);
      else setSelectedCertificate(null);
    }
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-[#1a0179] mb-12 tracking-wide uppercase">
          Our Certificates
        </h2>

        {/* Certificate Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {certificates.map((profile) => (
            <div
              key={profile.id}
              className="group cursor-pointer w-80"
              onClick={() => setSelectedCertificate(profile)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={profile.image}
                  alt={profile.title}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {profile.title}
                    </h3>
                    <p className="text-gray-200 text-sm">{profile.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4 z-50"
          onClick={handleOverlayClick}
        >
          <div
            className={`bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-lg transition-transform duration-300 ${
              isZoomed ? "scale-105" : "scale-100"
            }`}
          >
            <div className="p-6 relative">
              <h2 className="text-2xl font-semibold text-gray-800 text-center">
                {selectedCertificate.title}
              </h2>

              <div className="mt-4 flex justify-center">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className={`rounded-lg cursor-zoom-in transition-transform duration-300 bg-gray-100 ${
                    isZoomed ? "scale-125" : "scale-100"
                  }`}
                  style={{
                    maxHeight: isZoomed ? "90vh" : "24rem",
                    objectFit: "contain",
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); // prevent closing modal
                    setIsZoomed(!isZoomed);
                  }}
                />
              </div>

              <p className="text-gray-600 mt-4 text-center">
                {selectedCertificate.description}
              </p>

              <div className="text-center mt-6">
                <button
                  className="px-6 py-2 bg-[#1a0179] text-white rounded-lg hover:bg-[#2b099f] transition"
                  onClick={() => setSelectedCertificate(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
