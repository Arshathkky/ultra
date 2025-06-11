import HomeSlider from '../components/HomePage/HomeSlider';
import ProductGrid from '../components/HomePage/ProductGrid';
import NewsSection from '../components/NewsSection';
import Quality from '../components/Quality';
import AskOrOrderForm from '../components/AskOrderForm';
import ProductionHome from '../components/OurProduction/ProductionHome';


export default function HomePage() {
  return (
    <div className="bg-gray-100 bg-main">
      <HomeSlider />
      <Quality/>
      <ProductGrid />
      <ProductionHome/>
      <AskOrOrderForm/>
      <NewsSection />
    </div>
  );
}