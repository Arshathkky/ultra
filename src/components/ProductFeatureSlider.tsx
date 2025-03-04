// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const features = [
//   {
//     id: 1,
//     title: "Standard Profiles",
//     image: "/images/extrusion-profiles.jpg",
//     description: "Wide range of standard aluminum profiles for various applications"
//   },
//   {
//     id: 2,
//     title: "Custom Profiles",
//     image: "/images/casting.jpg",
//     description: "Customized aluminum profiles designed to your specifications"
//   },
//   {
//     id: 3,
//     title: "Architectural Profiles",
//     image: "/images/extrusion.jpg",
//     description: "Specialized profiles for modern architectural solutions"
//   },
//   {
//     id: 4,
//     title: "Industrial Profiles",
//     image: "/images/anodizing.jpg",
//     description: "Heavy-duty profiles for industrial applications"
//   }
// ];

// export default function ProductFeatureSlider() {
//   return (
//     <div className="bg-white py-12">
//       <h3 className="text-2xl font-semibold mb-8 text-center">Featured Profiles</h3>
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         navigation
//         autoplay={{ delay: 3000 }}
//         direction="vertical"
//         slidesPerView={2}
//         spaceBetween={20}
//         className="h-[400px]"
//       >
//         {features.map((feature) => (
//           <SwiperSlide key={feature.id}>
//             <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md flex">
//               <img
//                 src={feature.image}
//                 alt={feature.title}
//                 className="w-1/2 h-48 object-cover"
//               />
//               <div className="p-4 w-1/2">
//                 <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
//                 <p className="text-gray-600 text-sm">{feature.description}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }