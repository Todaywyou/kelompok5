import React, { useState, useRef } from "react";
import {
  MessageCircle,
  User,
  CalendarDays,
  Megaphone,
  BarChart2,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const dataSejarah = [
  {
    nomor: "01",
    icon: <MessageCircle size={20} />,
    judul: "Awal Berdiri",
    deskripsi:
      "Kantin HMJ MI resmi berdiri tahun 2019 sebagai inisiatif mahasiswa untuk konsumsi harian.",
    warna: "bg-yellow-400",
    warnaAktif: "bg-yellow-600",
  },
  {
    nomor: "02",
    icon: <User size={20} />,
    judul: "Pengembangan Menu",
    deskripsi: "Menambahkan variasi menu sehat dan terjangkau pada tahun 2020.",
    warna: "bg-indigo-400",
    warnaAktif: "bg-indigo-600",
  },
  {
    nomor: "03",
    icon: <CalendarDays size={20} />,
    judul: "Perluasan Ruang",
    deskripsi: "Perluasan ruang kantin untuk kenyamanan mahasiswa di 2021.",
    warna: "bg-green-400",
    warnaAktif: "bg-green-600",
  },
  {
    nomor: "04",
    icon: <Megaphone size={20} />,
    judul: "Digitalisasi Layanan",
    deskripsi: "Pemesanan online dan pembayaran digital diperkenalkan di 2022.",
    warna: "bg-cyan-400",
    warnaAktif: "bg-cyan-600",
  },
  {
    nomor: "05",
    icon: <BarChart2 size={20} />,
    judul: "Peningkatan Pelayanan",
    deskripsi: "Kolaborasi vendor lokal & peningkatan pelayanan pada 2023.",
    warna: "bg-blue-400",
    warnaAktif: "bg-blue-600",
  },
];

const Card = ({ nomor, icon, judul, deskripsi, warna, warnaAktif, index }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        onClick={handleClick}
        whileTap={{ scale: 1.05 }}
        className={`relative bg-white rounded-full px-6 py-4 flex items-center gap-4 w-full max-w-3xl mx-auto shadow-md cursor-pointer transition-all duration-300 transform ${
          isActive ? "scale-105 shadow-lg" : ""
        }`}
      >
        <div
          className={`w-10 h-10 text-white rounded-full flex items-center justify-center shadow transition-colors duration-300 ${
            isActive ? warnaAktif : warna
          }`}
        >
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-sm md:text-base font-semibold text-gray-700">
            {nomor} — {judul}
          </h4>
          <p className="text-xs md:text-sm text-gray-500 mt-1 leading-relaxed">
            {deskripsi}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SejarahInfografis = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Infografis Sejarah Kantin HMJ MI
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-2">
            Perjalanan singkat dari awal berdiri hingga inovasi layanan.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {dataSejarah.map((item, index) => (
            <Card key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SejarahInfografis;
