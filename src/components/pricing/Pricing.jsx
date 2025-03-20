import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// Import gambar
import img1 from "../../assets/1.png";
import img2 from "../../assets/photo2.png";
import img3 from "../../assets/photo3.png";
import img4 from "../../assets/photo4.png";
import img5 from "../../assets/photo5.png";
import img6 from "../../assets/shopping.png";
import img7 from "../../assets/12.png";
import img8 from "../../assets/13.png";
import img9 from "../../assets/photo9.png";
import img10 from "../../assets/14.png";


const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const LandingPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 font-normal">
      {/* Bagian Atas */}
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl font-bold">Landing Page</h1>
          <p className="mt-2 text-lg">
            Mulai dari <span className="line-through text-gray-900">Rp 2,750,000</span>
          </p>
          <p className="text-3xl font-bold text-black">Rp 1,5 Juta / Tahun</p>
          <p className="text-sm text-gray-500">*konversi per bulan: Rp. 125,000/bulan</p>
          <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg">
            Buat Landingpage sekarang!
          </button>
        </div>
        <div className="relative">
          <span className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-md text-sm">
            <strong>45%</strong> OFF Promo Ramadhan
          </span>
          <p className="text-gray-700 mt-10">
            Paket ini ideal untuk bisnis pemula yang ingin mulai berjualan secara online dengan
            biaya terjangkau...
          </p>
        </div>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Gallery Carousel */}
      <div className="mt-8 overflow-hidden rounded-lg border border-gray-300 p-4 relative">
  <motion.div
    className="flex space-x-4 min-w-[300%] animate-scroll" // Pastikan lebih panjang dari viewport
    animate={{ x: ["0%", "-100%"] }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 15,
      ease: "linear",
    }}
  >
    {[...images, ...images].map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Gallery ${index}`}
        className="w-80 h-56 object-cover rounded-lg"
      />
    ))}
  </motion.div>
</div>

      {/* Section Kanan */}
      <div className="mt-6 p-6 border border-gray-300 rounded-lg">
        <span className="text-2xl font-bold flex items-center">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.293 15.707a1 1 0 001.414 0L15 11.414V14a1 1 0 002 0V9a1 1 0 00-1-1H10a1 1 0 000 2h2.586l-4.293 4.293a1 1 0 000 1.414z"></path>
          </svg>
          Sederhana dan Efektif
        </span>
        <p className="text-gray-600 mt-2">
          Ideal untuk kampanye promosi produk atau layanan tunggal dengan desain yang fokus pada satu tujuan spesifik.
        </p>
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
