import React from "react";
import { Heart, Star, Book, Cookie, Package, Printer } from "lucide-react";

function Card() {
    const items = [
      {
        title: "Jajanan",
        description:
          "Berbagai makanan dan minuman ringan tersedia di kantin HMJ.",
        icon: <Cookie className="w-8 h-8 text-white" />,
        image: "/public/jajanan.jpg",
      },
      {
        title: "Peralatan Kampus",
        description: "Tersedia alat tulis, map, dan kebutuhan kampus lainnya.",
        icon: <Package className="w-8 h-8 text-white" />,
        image: "/public/alattulis.jpg",
      },
      {
        title: "Layanan Print",
        description: "Cetak tugas dan dokumen langsung dari HMJ dengan mudah.",
        icon: <Printer className="w-8 h-8 text-white" />,
        image: "/public/print.jpg",
      },
    ];

    return (
      <section className="px-6 py-16 bg-gradient-to-b from-white via-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 text-black drop-shadow">
            Apa Saja yang Tersedia?
          </h2>
          <p className="text-lg text-orange-800">
            Kantin HMJ MI menghadirkan jajanan lezat, perlengkapan kuliah, dan layanan print berkualitas untuk mendukung aktivitasmu setiap hari.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative h-64 rounded-2xl overflow-hidden shadow-xl bg-cover bg-center group"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-orange-400/60 via-orange-500/50 to-transparent group-hover:from-red-700/70 transition duration-300" />
              <div className="absolute bottom-0 p-6 text-white z-10">
                <div className="mb-2">{item.icon}</div>
                <h3 className="text-2xl font-semibold drop-shadow">{item.title}</h3>
                <p className="text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <p className="text-lg text-orange-900 font-semibold">
            Nikmati kemudahan, kenyamanan, dan layanan terbaik hanya di Kantin HMJ MI. Semua kebutuhanmu, satu tempat penuh kehangatan!
          </p>
        </div>
      </section>
    );
}

export default Card;
