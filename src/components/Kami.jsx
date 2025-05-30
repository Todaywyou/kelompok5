import React from "react";

function Kami() {
  return (
    <div className="bg-white text-gray-800 py-12 px-4 md:px-20">
      {/* Judul Tengah */}
      <div className="text-center mb-10">
        <h3 className="text-xs uppercase text-red-500 tracking-wider font-medium">
          Sejarah Singkat
        </h3>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-1">
          Profil Kantin HMJ MI
        </h2>
        <p className="text-gray-600 text-sm md:text-base mt-2 max-w-xl mx-auto leading-relaxed">
          Tempat kuliner favorit mahasiswa dengan suasana modern dan menu yang
          lezat, sehat, dan terjangkau.
        </p>
      </div>

      {/* Konten Gambar dan Deskripsi */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Gambar */}
        <div className="md:w-1/3 w-full flex justify-center">
          <img
            src="/ntin.png"
            alt="Kantin HMJ MI"
            className="w-48 md:w-56 rounded-xl shadow-md object-contain"
          />
        </div>

        {/* Deskripsi */}
        <div className="md:w-2/3 w-full">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Kantin HMJ MI adalah pusat kuliner kampus yang menawarkan berbagai
            pilihan makanan berkualitas. Mengusung konsep modern, tempat ini
            menjadi ruang bersantai yang nyaman bagi mahasiswa. Dengan harga
            terjangkau dan pelayanan ramah, kantin ini berkomitmen menyajikan
            menu yang tak hanya enak tapi juga mendukung gaya hidup sehat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Kami;
