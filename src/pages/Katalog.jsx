import React from "react";
import { UtensilsCrossed, GraduationCap } from "lucide-react";
import NavBar from "../components/NavBar";

export default function Katalog() {
  return (
    <>
      <NavBar /> {/* Tambahkan ini di atas */}
      <div className="relative min-h-screen bg-gradient-to-br from-orange-200 to-red-300 py-16 px-4 flex flex-col items-center justify-center">
        {/* Gelombang atas */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative block w-full h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M321.39 56.24C189.91 74.53 0 120 0 120V0h1200v120s-180.91-48.09-338.19-64.81C725.18 39.42 601.66 75.28 474.14 90.88c-130.75 16.1-253.88-15.83-318.15-34.64z"
              fill="#fb923c"
            ></path>
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-12 z-10 text-center">
          Pilih Kategori
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-10 z-10">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-80 h-80 flex flex-col items-start justify-between hover:scale-105 transition transform duration-300 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 bg-red-100 rounded-full w-36 h-36"></div>
            <UtensilsCrossed className="text-red-500 w-12 h-12 mb-2 z-10" />
            <h2 className="text-2xl font-semibold mb-1 z-10">
              Makanan & Minuman
            </h2>
            <p className="text-gray-600 mb-4 z-10">
              Temukan berbagai pilihan kuliner lezat dan minuman menyegarkan.
            </p>
            <button className="mt-auto bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 z-10">
              Lihat Menu
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-80 h-80 flex flex-col items-start justify-between hover:scale-105 transition transform duration-300 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 bg-orange-100 rounded-full w-36 h-36"></div>
            <GraduationCap className="text-orange-500 w-12 h-12 mb-2 z-10" />
            <h2 className="text-2xl font-semibold mb-1 z-10">
              Kebutuhan Kuliah
            </h2>
            <p className="text-gray-600 mb-4 z-10">
              Dapatkan perlengkapan dan alat belajar untuk mendukung
              perkuliahanmu.
            </p>
            <button className="mt-auto bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 z-10">
              Lihat Produk
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
