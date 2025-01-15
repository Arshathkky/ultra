interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export default function NewsSection() {
  const news: NewsItem[] = [
    {
      id: 1,
      title: "New Sustainable Aluminum Production Method",
      excerpt: "Breakthrough in eco-friendly aluminum manufacturing process...",
      image: "/images/casting.jpg",
      date: "2024-03-15"
    },
    {
      id: 2,
      title: "Award-Winning Project Completion",
      excerpt: "Our latest commercial project receives industry recognition...",
      image: "/images/extrusion.jpg",
      date: "2024-03-10"
    },
    {
      id: 3,
      title: "Expanding Our Product Line",
      excerpt: "Introducing new aluminum profile designs for modern architecture...",
      image: "/images/powder-coating.jpg",
      date: "2024-03-05"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/news"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Read More News
          </a>
        </div>
      </div>
    </div>
  );
}