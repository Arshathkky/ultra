import { motion } from "framer-motion";
import { useState } from "react";


export default function UnderConstructions({ onShowMore }: { onShowMore: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center p-6 bg-white rounded-2xl shadow-lg"
      >
        

        <h1 className="text-3xl font-bold text-gray-800">Ultra Aluminium</h1>
        <p className="text-gray-600 mt-2">
         Our website is now live and currently being updated. Stay tuned for the latest features and improvements
        </p>

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-6 text-lg font-semibold text-orange-600"
        >
          press here f
        </motion.div>

        {/* Show More Button */}
        <button
          onClick={onShowMore}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Show More
        </button>
      </motion.div>
    </div>
  );
}
