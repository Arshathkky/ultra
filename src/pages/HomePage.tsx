import HomeSlider from '../components/HomePage/HomeSlider';
import ProductGrid from '../components/HomePage/ProductGrid';
import NewsSection from '../components/HomePage/NewsSection';
import Quality from '../components/HomePage/Quality';
import AskOrOrderForm from '../components/AskOrderForm';
import ProductionHome from '../components/OurProduction/ProductionHome';
import Features from '../components/HomePage/Features';


export default function HomePage() {
  return (
    <div className="bg-gray-50 font-sans overflow-x-hidden">
      <HomeSlider />
      <Features />
      <Quality/>
      <ProductGrid />
      <ProductionHome/>
      <NewsSection />
      <div className="bg-white py-10">
        <div className="max-w-[1440px] mx-auto px-4">
          <AskOrOrderForm/>
        </div>
      </div>
    </div>
  );
}