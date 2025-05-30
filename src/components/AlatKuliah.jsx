import React, { useState, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const products = [
  {
    id: 1,
    name: "Buku Tulis A5 40 Lembar",
    price: 5000,
    description: "Buku tulis dengan kertas berkualitas untuk catatan kuliah.",
    image: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
  },
  {
    id: 2,
    name: "Pulpen Hitam 0.5mm",
    price: 3000,
    description: "Pulpen gel hitam, nyaman untuk menulis cepat dan rapi.",
    image: "https://cdn-icons-png.flaticon.com/512/5239/5239060.png",
  },
  {
    id: 3,
    name: "Stabilo Warna (1 Set)",
    price: 18000,
    description: "6 warna stabilo terang untuk highlight materi penting.",
    image: "https://cdn-icons-png.flaticon.com/512/2620/2620493.png",
  },
  {
    id: 4,
    name: "Binder + Isi Kertas",
    price: 25000,
    description: "Binder ukuran A5 lengkap dengan isi kertas dan sekat.",
    image: "https://cdn-icons-png.flaticon.com/512/3771/3771524.png",
  },
  {
    id: 5,
    name: "Penggaris Transparan 30cm",
    price: 4000,
    description: "Penggaris panjang akurat dan tahan lama.",
    image: "https://cdn-icons-png.flaticon.com/512/5951/5951723.png",
  },
  {
    id: 6,
    name: "Map Kertas A4",
    price: 2000,
    description: "Map kertas warna-warni untuk menyimpan dokumen rapi.",
    image: "https://cdn-icons-png.flaticon.com/512/2301/2301123.png",
  },
];

function AlatKuliah() {
  const [cartCounts, setCartCounts] = useState({});
  const [receipt, setReceipt] = useState("");
  const receiptRef = useRef();

  const handleIncrease = (id) => {
    setCartCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrease = (id) => {
    setCartCounts((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  const totalItems = Object.values(cartCounts).reduce((a, b) => a + b, 0);

  const handleCheckout = () => {
    if (totalItems === 0) return;
    const queueNumber = Math.floor(Math.random() * 1000) + 1;
    let total = 0;
    let lines = `📄 Struk Belanja\nAntrian ke: ${queueNumber}\n\n`;
    Object.keys(cartCounts).forEach((id) => {
      const item = products.find((p) => p.id === parseInt(id));
      const count = cartCounts[id];
      const price = item.price * count;
      total += price;
      lines += `${item.name} x${count} = Rp ${price.toLocaleString()}\n`;
    });
    lines += `\nTotal: Rp ${total.toLocaleString()}\n\n`;
    lines += `📌 Silakan berikan struk ini ke kantin atau kirim screenshot ke CP kami untuk pengantaran.`;
    setReceipt(lines);
  };

  const handleDownload = async () => {
    if (!receiptRef.current) {
      alert("Struk belum siap. Silakan klik Belanja Sekarang dulu.");
      return;
    }

    try {
      // Beri jeda supaya elemen benar-benar render
      await new Promise((res) => setTimeout(res, 500));

      const canvas = await html2canvas(receiptRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff", // ini penting agar PDF tidak transparan
      });

      const imgData = canvas.toDataURL("image/png");
      const pdfHeight = (canvas.height * 80) / canvas.width;

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [80, pdfHeight],
      });

      pdf.addImage(imgData, "PNG", 0, 0, 80, pdfHeight);
      pdf.save(`struk-belanja-${Date.now()}.pdf`);
    } catch (error) {
      console.error("Gagal membuat PDF:", error);
      alert("❌ Gagal membuat PDF. Coba reload halaman atau periksa koneksi.");
    }
  };
  

  return (
    <div className="min-h-screen bg-orange-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-10">
        Daftar Alat Kuliah
      </h1>

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
              <p className="text-orange-500 font-bold mb-2">
                Rp {item.price.toLocaleString()}
              </p>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="bg-orange-400 text-white px-3 py-1 rounded-full hover:bg-orange-500 transition"
                >
                  -
                </button>
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

      {/* Tombol dan keranjang di bagian bawah */}
      <div className="mt-12 flex justify-center items-center gap-4">
        <div className="relative">
          <ShoppingCart className="w-10 h-10 text-orange-600" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
        <button
          onClick={handleCheckout}
          className="bg-orange-600 text-white px-6 py-2 rounded-xl shadow hover:bg-orange-700 transition"
        >
          Belanja Sekarang
        </button>
      </div>

      {receipt && (
        <div className="mt-8 flex flex-col items-center">
          <div
            ref={receiptRef}
            className="bg-white p-4 rounded shadow text-[12px] font-mono w-[260px] whitespace-pre-line text-black"
            style={{
              backgroundColor: "#ffffff", 
              color: "#000000",
              fontFamily: "monospace",
            }}
          >
            {receipt}
          </div>
          <button
            onClick={handleDownload}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Download Struk
          </button>
        </div>
      )}
    </div>
  );
}

export default AlatKuliah;
