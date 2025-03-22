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
import imgA from "../../assets/1.png";
import imgB from "../../assets/photo2.png";
import imgC from "../../assets/photo3.png";
import imgD from "../../assets/photo4.png";
import imgE from "../../assets/photo5.png";
import imgF from "../../assets/shopping.png";
import imgG from "../../assets/12.png";
import imgH from "../../assets/13.png";
import imgI from "../../assets/photo9.png";
import imgJ from "../../assets/14.png";

const whatsappLink = (type) => {
  const message = encodeURIComponent(`Halo, saya ingin membuat ${type}. Bisa dibantu?`);
  return `https://wa.me/6282275373233?text=${message}`;
};
const images1 = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const images2 = [imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH, imgI, imgJ];

const LandingPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 font-normal">
      {/* Landing Page Biasa */}
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl font-bold">Landing <span className="text-blue-600">Page</span></h1>
          <p className="mt-2 text-lg">
            Mulai dari <span className="line-through text-gray-900">Rp 1.000.000</span>
          </p>
          <p className="text-3xl font-bold text-blue-600">Start Form Rp 150.000</p>
          <p className="text-sm text-gray-500">*Hingga Rp 400.000 Free domain hosting .com</p>
          <a href={whatsappLink("Landing Page")} className="mt-4 bg-blue-500 hover:bg-blue-900 text-white px-6 py-3 rounded-lg inline-block">
            Buat Landingpage sekarang!
          </a>
        </div>
        <div className="relative">
          <span className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-md text-sm">
            <strong>70%</strong> OFF Promo Ramadhan
          </span>
          <p className="text-gray-700 mt-10">
            Paket ini ideal untuk bisnis pemula yang ingin mulai berjualan secara online dengan
            biaya terjangkau...
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mt-8 overflow-hidden rounded-lg border border-gray-300 p-4 relative">
          <motion.div
            className="flex space-x-4 min-w-[300%] animate-scroll"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            }}
          >
            {[...images1, ...images1].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index}`}
                className="w-80 h-56 object-cover rounded-lg"
              />
            ))}
          </motion.div>
        </div>
        <div className="mt-6 p-6 border border-gray-300 rounded-lg">
          <span className="text-2xl font-bold flex items-center">
            Sederhana dan Efektif
          </span>
          <p className="text-gray-600 mt-2">
            Ideal untuk kampanye promosi produk atau layanan tunggal dengan desain yang fokus pada satu tujuan spesifik.
          </p>
        </div>
      </div>
      {/* Landing Page Website Dinamis */}
      <div className="grid md:grid-cols-2 gap-6 items-center mt-12">
        <div>
          <h1 className="text-4xl font-bold">Website <span className="text-blue-600">Dinamis</span></h1>
          <p className="mt-2 text-lg">
            Mulai dari <span className="line-through text-gray-900">Rp 1.500.000</span>
          </p>
          <p className="text-3xl font-bold text-blue-600">Start From Rp 300.000</p>
          <p className="text-sm text-gray-500">*Hingga Rp 1.000.000 Free domain .com + Maintenance 1 bulan</p>
          <a href={whatsappLink("Landing Page")} className="mt-4 bg-blue-500 hover:bg-blue-900 text-white px-6 py-3 rounded-lg inline-block">
            Buat Landingpage sekarang!
          </a>
        </div>
        <div className="relative">
          <span className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-md text-sm">
            <strong>Diskon</strong> Spesial Ramadhan
          </span>
          <p className="text-gray-700 mt-10">
            Paket ini cocok untuk bisnis yang membutuhkan sistem manajemen berbasis website dengan dashboard admin yang fleksibel...
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mt-8 overflow-hidden rounded-lg border border-gray-300 p-4 relative">
          <motion.div
            className="flex space-x-4 min-w-[300%] animate-scroll"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            }}
          >
            {[...images2, ...images2].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index}`}
                className="w-80 h-56 object-cover rounded-lg"
              />
            ))}
          </motion.div>
        </div>
        <div className="mt-6 p-6 border border-gray-300 rounded-lg">
          <span className="text-2xl font-bold flex items-center">
            Dashboard Admin Lengkap
          </span>
          <p className="text-gray-600 mt-2">
            Dengan dashboard admin interaktif, Anda dapat dengan mudah mengelola konten, pengguna, transaksi, dan statistik dalam satu tempat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
