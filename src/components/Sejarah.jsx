import React from "react";
import { motion } from "framer-motion";
import { BookOpen, CalendarDays } from "lucide-react";

const sejarahData = [
  {
    tahun: "2019",
    judul: "Awal Berdiri",
    deskripsi:
      "Kantin HMJ MI resmi berdiri pada tahun 2019 sebagai inisiatif mahasiswa untuk mendukung kebutuhan konsumsi harian.",
  },
  {
    tahun: "2020",
    judul: "Pengembangan Menu",
    deskripsi:
      "Menambahkan variasi menu makanan dan minuman, serta fokus pada makanan sehat dan terjangkau.",
  },
  {
    tahun: "2021",
    judul: "Perluasan Ruang",
    deskripsi:
      "Ruang kantin diperluas untuk menampung lebih banyak mahasiswa dan suasana yang lebih nyaman.",
  },
  {
    tahun: "2022",
    judul: "Digitalisasi Layanan",
    deskripsi:
      "Memperkenalkan sistem pemesanan online dan metode pembayaran non-tunai untuk efisiensi layanan.",
  },
  {
    tahun: "2023",
    judul: "Peningkatan Pelayanan",
    deskripsi:
      "Peningkatan kualitas pelayanan dan kolaborasi dengan vendor lokal untuk menambah ragam pilihan menu.",
  },
];

function Sejarah() {
  return (
    <div className="p-6 md:p-12 bg-gradient-to-br from-green-50 to-green-100 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-8">
        Timeline Sejarah Kantin HMJ MI
      </h1>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-400 h-full" />
        <div className="flex flex-col gap-10">
          {sejarahData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex items-center justify-center bg-green-500 text-white rounded-full w-10 h-10 z-10">
                <CalendarDays size={20} />
              </div>
              <div
                className={`bg-white rounded-lg shadow-md p-4 w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                }`}
              >
                <h2 className="text-xl font-semibold text-green-700">
                  {item.tahun} - {item.judul}
                </h2>
                <p className="text-gray-600 mt-2">{item.deskripsi}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-green-800 font-medium border border-green-400 px-4 py-2 rounded-full cursor-pointer shadow hover:bg-green-100 transition"
        >
          <BookOpen size={18} />
          Baca Selengkapnya
        </motion.div>
      </div>
    </div>
  );
}

export default Sejarah;
