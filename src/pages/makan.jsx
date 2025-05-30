import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Utensils, CupSoda, ShoppingCart, Plus, Minus } from "lucide-react";
import Promo from "../components/Promo";

const menuData = {
  makanan: [
    { name: "Nasi Goreng", img: "/nasi-goreng.jpg" },
    { name: "Sate Ayam", img: "/sate-ayam.jpg" },
  ],
  minuman: [
    { name: "Es Teh", img: "/es-teh.jpg" },
    { name: "Jus Alpukat", img: "/jus-alpukat.jpg" },
  ],
};

export default function Makan() {
  const [kategori, setKategori] = useState("makanan");
  const [cart, setCart] = useState({});

  const handleAdd = (itemName) => {
    setCart((prev) => ({
      ...prev,
      [itemName]: (prev[itemName] || 0) + 1,
    }));
  };

  const handleRemove = (itemName) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[itemName] > 1) {
        updated[itemName] -= 1;
      } else {
        delete updated[itemName];
      }
      return updated;
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const menus = menuData[kategori];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-red-100 relative overflow-x-hidden">
      <NavBar />
      <div className="mt-4 mb-8 px-4">
        <Promo />
      </div>

      {/* Floating Cart */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 transition">
          <ShoppingCart className="w-5 h-5 mr-2" />
          <span className="font-semibold">Pesan Sekarang</span>
          {totalItems > 0 && (
            <span className="ml-2 bg-red-600 text-xs px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Decorative wave background */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fb923c"
            fillOpacity="0.4"
            d="M0,160L60,138.7C120,117,240,75,360,64C480,53,600,75,720,101.3C840,128,960,160,1080,149.3C1200,139,1320,85,1380,58.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-700 mb-6 text-center sm:text-left">
          Pilih Kategori
        </h1>
        <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-4 mb-8">
          <button
            onClick={() => setKategori("makanan")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition font-semibold shadow-md
              ${
                kategori === "makanan"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-800 border"
              }`}
          >
            <Utensils className="w-5 h-5" />
            <span>Makanan</span>
          </button>
          <button
            onClick={() => setKategori("minuman")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition font-semibold shadow-md
              ${
                kategori === "minuman"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-800 border"
              }`}
          >
            <CupSoda className="w-5 h-5" />
            <span>Minuman</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {menus.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-4 border border-orange-200 hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 sm:h-48 object-cover rounded-xl mb-3"
              />
              <h2 className="text-lg sm:text-xl font-bold text-orange-700">
                {item.name}
              </h2>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleRemove(item.name)}
                    className="p-1 bg-red-200 rounded-full text-red-600 hover:bg-red-300"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-semibold text-lg">
                    {cart[item.name] || 0}
                  </span>
                  <button
                    onClick={() => handleAdd(item.name)}
                    className="p-1 bg-orange-300 rounded-full text-white hover:bg-orange-400"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
