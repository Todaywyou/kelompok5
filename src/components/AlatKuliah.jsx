import React, { useState } from "react";
import { ShoppingCart } from "lucide-react"; // pastikan install lucide-react

const products = [
  {
    id: 1,
    name: "Buku Tulis A5 40 Lembar",
    price: "Rp 5.000",
    description: "Buku tulis dengan kertas berkualitas untuk catatan kuliah.",
    image: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
  },
  {
    id: 2,
    name: "Pulpen Hitam 0.5mm",
    price: "Rp 3.000",
    description: "Pulpen gel hitam, nyaman untuk menulis cepat dan rapi.",
    image: "https://cdn-icons-png.flaticon.com/512/5239/5239060.png",
  },
  {
    id: 3,
    name: "Stabilo Warna (1 Set)",
    price: "Rp 18.000",
    description: "6 warna stabilo terang untuk highlight materi penting.",
    image: "https://cdn-icons-png.flaticon.com/512/2620/2620493.png",
  },
  {
    id: 4,
    name: "Binder + Isi Kertas",
    price: "Rp 25.000",
    description: "Binder ukuran A5 lengkap dengan isi kertas dan sekat.",
    image: "https://cdn-icons-png.flaticon.com/512/3771/3771524.png",
  },
  {
    id: 5,
    name: "Penggaris Transparan 30cm",
    price: "Rp 4.000",
    description: "Penggaris panjang akurat dan tahan lama.",
    image: "https://cdn-icons-png.flaticon.com/512/5951/5951723.png",
  },
  {
    id: 6,
    name: "Map Kertas A4",
    price: "Rp 2.000",
    description: "Map kertas warna-warni untuk menyimpan dokumen rapi.",
    image: "https://cdn-icons-png.flaticon.com/512/2301/2301123.png",
  },
];

function AlatKuliah() {
  const [cartCounts, setCartCounts] = useState({});
  const totalItems = Object.values(cartCounts).reduce(
    (total, count) => total + count,
    0
  );

  const handleIncrease = (id) => {
    setCartCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleDecrease = (id) => {
    setCartCounts((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  return (
    <div className="relative min-h-screen bg-orange-50 py-12 px-6">
      {/* Judul */}
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-10">
        Daftar Alat Kuliah
      </h1>

      {/* Daftar Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-contain bg-orange-100 p-4"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {item.name}
              </h2>
              <p className="text-orange-500 font-bold mb-2">{item.price}</p>
              <p className="text-gray-600 text-sm">{item.description}</p>

              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="bg-orange-400 text-white px-3 py-1 rounded-full hover:bg-orange-500 transition"
                >
                  -
                </button>
                {/* Tampilkan angka hitam pekat dan tebal */}
                <span className="px-3 font-bold text-black">
                  {cartCounts[item.id] || 0}
                </span>
                <button
                  onClick={() => handleIncrease(item.id)}
                  className="bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600 transition"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Keranjang & Tombol Belanja di Bawah */}
      <div className="mt-12 flex flex-col items-center justify-center">
        <div className="relative mb-3">
          <ShoppingCart className="w-10 h-10 text-orange-600" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
        <button className="bg-orange-600 text-white px-6 py-2 rounded-xl shadow hover:bg-orange-700 transition">
          Belanja Sekarang
        </button>
      </div>
    </div>
  );
}

export default AlatKuliah;
