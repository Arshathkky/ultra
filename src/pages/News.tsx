import { useEffect } from "react";
import NewsSection from "../components/HomePage/NewsSection";

export default function NewsPage() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on component mount
      }, []);
  return (
    <div>
      <NewsSection showAllInitially={true} />
    </div>
  );
}
