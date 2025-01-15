export default function RoofHero() {
  return (
    <div className="relative h-[600px]">
      <img
        src="/images/extrusion.jpg"
        alt="Industrial Roofing"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Ultra Roof</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Premium Amona Sheet Roofing Solutions for Industrial and Commercial Applications
          </p>
        </div>
      </div>
    </div>
  );
}