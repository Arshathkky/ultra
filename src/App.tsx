import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProfilesPage from "./pages/ProfilesPage";
import NetPage from "./pages/NetPage";
import SolarPage from "./pages/SolarPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
//import ProfileTypePage from "./pages/ProfileTypePage";
//import BranchCard from "./components/Dealers";
import ManagementSystems from "./components/OurProduction/ManagementSystems";
import NewsPage from "./pages/News";

export default function App() {
  useEffect(() => {
    alert("⚡ Our website is live and currently being updated. Stay tuned for new features!");
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-main">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilesPage />} />
            <Route path="/system" element={<ManagementSystems />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/systems/:system" element={<ManagementSystems />} />
            {/* <Route path="/profiles/:id" element={<ProfileTypePage />} /> */}
            <Route path="/net" element={<NetPage />} />
            <Route path="/solar" element={<SolarPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* <Route path="/dealers" element={<BranchCard />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
