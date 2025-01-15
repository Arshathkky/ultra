import ProductGrid from '../components/ProductGrid';
import ProfileSlider from '../components/ProfileSlider';

export default function ProductsPage() {
  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
      <ProductGrid />
      <div className="mt-16 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Profiles</h2>
          <ProfileSlider />
        </div>
      </div>
    </div>
  );
}