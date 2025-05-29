import { useState } from "react";
import { FaStore, FaCamera, FaUtensils, FaCog } from "react-icons/fa";

const Mitra = () => {
  const [activeMitra, setActiveMitra] = useState(null);

  const mitraList = [
    {
      name: "Mitra A",
      icon: <FaCamera size={20} />,
      description: "Menjual jasa dokumentasi dan cetak foto.",
    },
    {
      name: "Mitra B",
      icon: <FaUtensils size={20} />,
      description: "Menjual nasi kotak dan lauk pauk.",
    },
    {
      name: "Mitra C",
      icon: <FaCog size={20} />,
      description: "Jasa servis alat elektronik ringan.",
    },
    {
      name: "Mitra D",
      icon: <FaStore size={20} />,
      description: "Menjual alat tulis dan perlengkapan belajar.",
    },
    {
      name: "Mitra E",
      icon: <FaCamera size={20} />,
      description: "Fotografi dan videografi acara kampus.",
    },
    {
      name: "Mitra F",
      icon: <FaUtensils size={20} />,
      description: "Menjual nasi uduk dan jajanan pasar.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-100 via-orange-200 to-pink-200 py-10 px-6 min-h-6">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Kiri: Judul & Deskripsi */}
        <div className="flex-1 text-gray-800">
          <h2 className="text-3xl font-bold mb-4">MITRA KAMI</h2>
          <p className="text-gray-700 mb-6 max-w-md">
            Daftar mitra yang bekerja sama dengan Kantin HMJ MI. Mereka
            mendukung kami dengan layanan terbaik untuk mahasiswa.
          </p>
          {activeMitra !== null && (
            <div className="bg-white rounded-xl p-4 shadow text-gray-700 w-full max-w-sm">
              <div className="flex items-center gap-3 mb-2">
                {mitraList[activeMitra].icon}
                <h3 className="font-semibold">{mitraList[activeMitra].name}</h3>
              </div>
              <p className="text-sm">{mitraList[activeMitra].description}</p>
            </div>
          )}
        </div>

        {/* Kanan: Icon Mitra */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
          {mitraList.map((mitra, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-3 w-20 h-20 cursor-pointer"
              onMouseEnter={() => setActiveMitra(index)}
              onClick={() => setActiveMitra(index)}
            >
              {mitra.icon}
              <p className="mt-1 text-xs font-medium text-gray-700 text-center">
                {mitra.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mitra;
