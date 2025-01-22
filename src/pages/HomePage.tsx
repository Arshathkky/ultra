import HomeSlider from '../components/HomeSlider';
import ProductGrid from '../components/ProductGrid';
import ProfilesSection from '../components/ProfilesSection';
import NewsSection from '../components/NewsSection';
import Certification from '../components/Certification';

export default function HomePage() {
  return (
    <div>
      <HomeSlider />
      <ProductGrid />
      <ProfilesSection />
      <Certification/>
      <NewsSection />
    </div>
  );
}