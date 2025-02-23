import HomeSlider from '../components/HomeSlider';
import ProductGrid from '../components/ProductGrid';
import ProfilesSection from '../components/ProfilesSection';
import NewsSection from '../components/NewsSection';
import Quality from '../components/Quality';


export default function HomePage() {
  return (
    <div className="bg-gray-100">
      <HomeSlider />
      <Quality/>
      <ProductGrid />
      <ProfilesSection />
      <NewsSection />
    </div>
  );
}