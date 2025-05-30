import React, { useState } from "react";
import { GraduationCap, X } from "lucide-react";
import NavBar from "../components/NavBar";
import AlatKuliah from "../components/AlatKuliah";
import Footer from "../components/Footer";

export default function Katalog() {
  const [showPrintForm, setShowPrintForm] = useState(false);

  return (
    <>
      <NavBar />
      <AlatKuliah />
      <div className="relative min-h-screen bg-white py-20 px-6 flex flex-col items-center justify-center">
        

        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-4xl w-full flex flex-col md:flex-row items-center justify-between hover:scale-[1.01] transition duration-300 z-10">
          <div className="flex-1 mb-6 md:mb-0 md:mr-6 text-center md:text-left">
            <GraduationCap className="text-orange-500 w-14 h-14 mb-4 mx-auto md:mx-0" />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Jasa Print & Antar
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Kami menyediakan layanan print dokumen dengan kualitas terbaik dan
              pengantaran langsung ke tempatmu!
            </p>
            <button
              className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition"
              onClick={() => setShowPrintForm(true)}
            >
              Gunakan Jasa Print
            </button>
          </div>
          <div className="flex-1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
              alt="Print Illustration"
              className="w-64 h-auto mx-auto"
            />
          </div>
        </div>

        {/* Modal Form Print */}
        {showPrintForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-6 relative">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                onClick={() => setShowPrintForm(false)}
              >
                <X />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-orange-600">
                Form Layanan Print & Antar
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Jenis File
                  </label>
                  <input
                    type="file"
                    className="mt-1 block w-full border rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Jumlah Halaman
                  </label>
                  <input
                    type="number"
                    className="mt-1 block w-full border rounded-lg p-2"
                    placeholder="Masukkan jumlah halaman"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Alamat Pengantaran
                  </label>
                  <textarea
                    className="mt-1 block w-full border rounded-lg p-2"
                    placeholder="Masukkan alamat lengkap"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 transition"
                >
                  Kirim Permintaan
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}
