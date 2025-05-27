import HomeSlider from '../components/HomePage/HomeSlider';
import ProductGrid from '../components/ProductGrid';
import ProfilesSection from '../components/ProfilesSection';
import NewsSection from '../components/NewsSection';
import Quality from '../components/Quality';
import AskOrOrderForm from '../components/AskOrderForm';


export default function HomePage() {
  return (
    <div className="bg-gray-100 bg-main">
      <HomeSlider />
      <Quality/>
      <ProductGrid />
      <ProfilesSection />
      <AskOrOrderForm/>
      <NewsSection />
    </div>
  );
}