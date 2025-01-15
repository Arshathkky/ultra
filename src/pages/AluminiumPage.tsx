import HomeSlider from '../components/HomeSlider';
import ProductGrid from '../components/ProductGrid';
import ProfileSlider from '../components/ProfileSlider';
import NewsSection from '../components/NewsSection';

export default function AluminiumPage() {
  return (
    <div>
      <HomeSlider />
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <ProductGrid />
      </section>
      <ProfileSlider />
      <NewsSection />
    </div>
  );
}