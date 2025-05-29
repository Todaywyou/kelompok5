import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Kami() {
  return (
    <div className="bg-white text-gray-800 py-12 px-4 md:px-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Gambar Kantin */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="/kantin.png" // Ganti dengan path foto kantin
            alt="Kantin HMJ MI"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Konten */}
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4 text-red-600">
            Profil Kantin HMJ MI
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Kantin HMJ MI adalah pusat kuliner di kampus yang menyediakan
            berbagai makanan lezat dan terjangkau bagi mahasiswa. Dengan suasana
            yang nyaman dan modern, kantin ini menjadi tempat favorit untuk
            bersantai dan menikmati hidangan berkualitas. Kami berkomitmen
            menghadirkan pilihan menu sehat, enak, dan bervariasi demi
            kenyamanan Anda.
          </p>

          {/* Tombol */}
          <Link
            to="/TentangKami"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-5 py-3 rounded-full shadow transition-all duration-300"
          >
            Selengkapnya Tentang Kami
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Kami;
