import { useState } from "react";

type CertificateType = {
  id: string;
  title: string;
  image: string;
  description: string;
};

const certificates: CertificateType[] = [
  {
    id: "iso",
    title: "ISO 9001:2015 Certificate",
    image: "images/certificate.jpg",
    description: "Start the new year with ISO 9001:2015 certification.",
  },
];

export default function Certification() {
  // Explicitly define state type as `CertificateType | null`
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateType | null>(null);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-[#1a0179] dark:text-white mb-12 tracking-wide uppercase">Our Certificates</h2>

        {/* Certificate Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {certificates.map((profile) => (
            <div
              key={profile.id}
              className="group cursor-pointer"
              onClick={() => setSelectedCertificate(profile)} // ✅ No more TypeScript error
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={profile.image}
                  alt={profile.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{selectedCertificate.title}</h2>
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-96 object-contain rounded-lg mt-4"
              />
              <p className="text-gray-600 mt-4">{selectedCertificate.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={() => setSelectedCertificate(null)}
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
