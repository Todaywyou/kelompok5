import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { Utensils, CupSoda, ShoppingCart, Plus, Minus, X } from "lucide-react";
import Promo from "../components/Promo";
import Footer from "../components/Footer";
import jsPDF from "jspdf";

const promoItems = [
  { name: "Beng-Beng", price: 2000, originalPrice: 2500, discount: "20%" },
  { name: "Cokelatos", price: 1500, originalPrice: 2000, discount: "20%" },
  { name: "aqua", price: 5000, originalPrice: 6000, discount: "20%" },
];

const menuData = {
  makanan: [
    { name: "Beng-Beng", img: "/bengbeng.jpg", price: 2500 },
    { name: "Cokelatos", img: "/cokelatos.jpg", price: 15000 },
    { name: "Basreng", img: "/basreng.jpg", price: 15000 },
    { name: "Beng-Beng", img: "/bengbeng.jpg", price: 2500 },
    { name: "Cokelatos", img: "/cokelatos.jpg", price: 15000 },
    { name: "Basreng", img: "/basreng.jpg", price: 15000 },
  ],
  minuman: [
    { name: "Teh Pucuk", img: "/teh.jpg", price: 5000 },
    { name: "Jus Alpukat", img: "/jus.jpg", price: 10000 },
    { name: "aqua", img: "/aqua.jpg", price: 10000 },
  ],
};

export default function Makan() {
  const [kategori, setKategori] = useState("makanan");
  const [cart, setCart] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleAdd = (itemName) => {
    setCart((prev) => ({ ...prev, [itemName]: (prev[itemName] || 0) + 1 }));
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
  const getPromo = (name) => promoItems.find((p) => p.name === name);

  const totalHarga = Object.entries(cart).reduce((total, [name, qty]) => {
    const item =
      menuData.makanan.find((m) => m.name === name) ||
      menuData.minuman.find((m) => m.name === name);
    const promo = getPromo(name);
    const unitPrice = promo ? promo.price : item.price;
    return total + qty * unitPrice;
  }, 0);

  const formatCurrency = (num) => "Rp" + num.toLocaleString("id-ID");

  const generateStruk = () => {
    try {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [80, 200],
      });

      const date = new Date();

      doc.setFont("courier", "normal");
      doc.setFontSize(10);

      let y = 10;

      doc.text("KANTIN POLSRI", 40, y, { align: "center" });
      y += 5;
      doc.text("Jl. Srijaya Negara, Palembang", 40, y, {
        align: "center",
      });
      y += 5;
      doc.text("Tanggal: " + date.toLocaleDateString("id-ID"), 10, y);
      y += 5;
      doc.text("----------------------------------------", 10, y);
      y += 5;

      let total = 0;
      Object.entries(cart).forEach(([name, qty]) => {
        const item =
          menuData.makanan.find((m) => m.name === name) ||
          menuData.minuman.find((m) => m.name === name);
        const promo = getPromo(name);
        const unitPrice = promo ? promo.price : item.price;
        const subtotal = qty * unitPrice;
        total += subtotal;

        doc.text(name, 10, y);
        y += 5;
        doc.text(
          `${qty} x ${formatCurrency(unitPrice)} = ${formatCurrency(subtotal)}`,
          10,
          y
        );
        y += 5;
      });

      doc.text("----------------------------------------", 10, y);
      y += 5;
      doc.text(`TOTAL: ${formatCurrency(total)}`, 10, y);
      y += 5;
      doc.text("----------------------------------------", 10, y);
      y += 10;

      doc.setFontSize(9);
      doc.text("Terima kasih telah berbelanja!", 40, y, {
        align: "center",
      });
      y += 5;
      doc.text("~ Kantin POLSRI ~", 40, y, { align: "center" });

      doc.save("struk-kantin.pdf");
    } catch (error) {
      alert("❌ Gagal membuat struk.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-red-100 relative">
      <NavBar />
      <div className="mt-4 mb-8 px-4">
        <Promo />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-700 mb-6 text-center sm:text-left">
          Pilih Kategori
        </h1>

        <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-4 mb-8">
          <button
            onClick={() => setKategori("makanan")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition font-semibold shadow-md ${
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
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition font-semibold shadow-md ${
              kategori === "minuman"
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-800 border"
            }`}
          >
            <CupSoda className="w-5 h-5" />
            <span>Minuman</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {menus.map((item, index) => {
            const promo = getPromo(item.name);
            const finalPrice = promo ? promo.price : item.price;

            return (
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

                <div className="mt-1">
                  {promo ? (
                    <>
                      <p className="text-sm text-orange-600 font-semibold">
                        Rp{promo.price.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500 line-through">
                        Rp{promo.originalPrice.toLocaleString()}
                      </p>
                      <span className="text-[10px] bg-orange-400 text-white px-2 py-0.5 rounded-full">
                        {promo.discount} OFF
                      </span>
                    </>
                  ) : (
                    <p className="text-sm text-gray-700">
                      Rp{item.price.toLocaleString()}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleRemove(item.name)}
                      className="p-1 bg-red-200 rounded-full text-red-600 hover:bg-red-300"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-extrabold text-lg text-black">
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
            );
          })}
        </div>

        <div className="flex justify-end mb-10">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center bg-orange-500 text-white px-5 py-3 rounded-xl shadow-lg hover:bg-orange-600 transition"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            <span className="font-semibold">Pesan Sekarang</span>
            {totalItems > 0 && (
              <span className="ml-2 bg-red-600 text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold mb-4 text-orange-600">
              Konfirmasi Pesanan
            </h2>
            <p className="text-gray-700 mb-2">
              Total yang harus dibayar:{" "}
              <span className="font-semibold">
                {formatCurrency(totalHarga)}
              </span>
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Harap kirim struk ke kontak person yang tersedia di area kantin.
            </p>
            <button
              onClick={() => {
                generateStruk();
                setShowModal(false);
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition w-full"
            >
              Unduh Struk
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
