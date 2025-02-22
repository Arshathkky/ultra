import { Link } from 'react-router-dom';
import { sampleImages } from '../data/sampleImages';

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
}

export default function ProductGrid() {
  const products: Product[] = [
    {
      id: 1,
      title: "Aluminum Extrusion Profiles",
      image: sampleImages.extrusionProfiles,
      description: "Premium quality aluminum profiles for architectural and industrial applications",
      link: "/profiles"
    },
    {
      id: 2,
      title: "Aluminum Net",
      image: sampleImages.aluminumNet,
      description: "High-grade aluminum mesh solutions for security and ventilation needs",
      link: "/net"
    },
    {
      id: 3,
      title: "Solar Accessories",
      image: sampleImages.solarAccessories,
      description: "Comprehensive range of aluminum mounting solutions for solar installations",
      link: "/solar"
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-[#1a0179] dark:text-white mb-12 tracking-wide">
          OUR SOLUTION , FOR YOUR NEED
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={product.link}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden 2"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-fill transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#1a0179] dark:text-white group-hover:text-blue-600 transition-colors font-extrabold">
                  {product.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
