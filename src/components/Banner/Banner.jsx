import React from "react";
import logo from "../../assets/logo.png";
import website from "../../assets/website.png";
import desain from "../../assets/desain.png";
import { MdComputer } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { AiOutlineHighlight } from "react-icons/ai";
import "../../global.css";

const AboutSection = ({ title, description1, image }) => (
  <div className="flex flex-col md:flex-row items-center gap-6 my-12 font-normal">
    {/* Gambar di kiri dengan efek hover */}
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="relative group">
        <img
          src={image}
          alt="Service Image"
          className="max-w-[300px] w-full rounded-lg shadow-xl shadow-blue-700 transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
        />
        <div className="absolute inset-0 rounded-lg shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/50 transition-all duration-300"></div>
      </div>
    </div>

    {/* Teks di kanan */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      {/* Menggunakan dangerouslySetInnerHTML agar <span> bisa bekerja */}
      <h1 className="text-3xl font-bold" dangerouslySetInnerHTML={{ __html: title }} />

      <p className="text-sm text-gray-500 tracking-wide leading-5 my-4">{description1}</p>

      {/* Ikon */}
      <div className="flex gap-4 justify-center md:justify-start mt-6">
        <div className="p-4 rounded-full bg-purple-100 text-purple-500">
          <MdComputer size={24} />
        </div>
        <div className="p-4 rounded-full bg-orange-100 text-orange-500">
          <BiWorld size={24} />
        </div>
        <div className="p-4 rounded-full bg-green-100 text-green-500">
          <AiOutlineHighlight size={24} />
        </div>
      </div>

      {/* Tombol WhatsApp */}
      <button
        className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg shadow-lg hover:bg-blue-900 transition duration-300"
        onClick={() => {
          window.open(
            "https://wa.me/6285835116946?text=Halo!%20Saya%20ingin%20memesan.",
            "_blank"
          );
        }}
      >
        Order Now
      </button>
    </div>
  </div>
);

const Banner = () => {
  const sections = [
    {
      title: `Jasa Desain <span class="text-yellow-300">Logo</span> Branding.`,
      description1:
        "Kami menawarkan jasa pembuatan logo custom yang unik dan profesional untuk menunjang identitas Anda...",
      image: logo,
    },
    {
      title: `Jasa Pembuatan <span class="text-blue-600">Website</span>.`,
      description1:
        "Kami menawarkan jasa pembuatan website profesional yang dirancang khusus untuk kebutuhan Anda...",
      image: website,
    },
    {
      title: `Jasa Desain <span class="text-indigo-600">Flyer</span> Medsos.`,
      description1:
        "Kami menawarkan jasa desain flyer media sosial profesional yang kreatif dan berkualitas...",
      image: desain,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {sections.map((section, index) => (
        <AboutSection key={index} {...section} />
      ))}
    </div>
  );
};

export default Banner;
