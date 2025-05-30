import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Kontak() {
  return (
    <div>
      <NavBar />
      <div className="bg-white min-h-screen py-8 px-4 font-sans">
        {/* Judul */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-red-400">Contact Us</h1>
          <p className="text-gray-500 mt-2">
            Hubungi kami jika ada pertanyaan atau kebutuhan lainnya.
          </p>
        </div>

        {/* 4 Card Kontak */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 flex-wrap">
          {/* Fajar */}
          <div className="bg-blue-100 text-blue-800 p-6 rounded-lg shadow-md w-full md:w-1/4 text-center">
            <h2 className="text-xl font-semibold mb-2">Fajar</h2>
            <p className="text-sm mb-1">Nomor: ‪(+62) 896-8782-0402‬</p>
            <p className="text-sm">Hubungi untuk bagian makanan.</p>
            <a
              href="https://wa.me/6289687820402"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-500 hover:text-blue-700 font-medium"
            >
              Hubungi Sekarang →
            </a>
          </div>

          {/* Naziel */}
          <div className="bg-blue-100 text-blue-800 p-6 rounded-lg shadow-md w-full md:w-1/4 text-center">
            <h2 className="text-xl font-semibold mb-2">Naziel</h2>
            <p className="text-sm mb-1">Nomor: ‪(+62) 819-9744-7392‬</p>
            <p className="text-sm">Hubungi untuk bagian minuman.</p>
            <a
              href="https://wa.me/6281997447392"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-500 hover:text-blue-700 font-medium"
            >
              Hubungi Sekarang →
            </a>
          </div>

          {/* Abror */}
          <div className="bg-blue-100 text-blue-800 p-6 rounded-lg shadow-md w-full md:w-1/4 text-center">
            <h2 className="text-xl font-semibold mb-2">Abror</h2>
            <p className="text-sm mb-1">Nomor: ‪(+62) 857-8356-5731‬</p>
            <p className="text-sm">Hubungi untuk bagian kebersihan.</p>
            <a
              href="https://wa.me/6285783565731"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-500 hover:text-blue-700 font-medium"
            >
              Hubungi Sekarang →
            </a>
          </div>

          {/* Ayu */}
          <div className="bg-blue-100 text-blue-800 p-6 rounded-lg shadow-md w-full md:w-1/4 text-center">
            <h2 className="text-xl font-semibold mb-2">Ayu</h2>
            <p className="text-sm mb-1">Nomor: ‪(+62) 895-6046-50739‬</p>
            <p className="text-sm">Hubungi untuk bagian kasir.</p>
            <a
              href="https://wa.me/62895604650739"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-500 hover:text-blue-700 font-medium"
            >
              Hubungi Sekarang →
            </a>
          </div>
        </div>

        {/* Peta & Lokasi */}
        <div className="mt-10">
          <h3 className="text-3xl font-semibold text-red-400 mb-4 text-center">
            Our Location
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.424643110478!2d104.72855657478246!3d-2.9795623969965344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75eb0503a7c3%3A0x28ea9ddd3efd54fd!2sManajemen%20informatika%20D4%20POLITEKNIK%20NEGERI%20SRIWIJAYA!5e0!3m2!1sid!2sid!4v1748593436876!5m2!1sid!2sid"
            className="w-full h-64 rounded shadow"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Manajemen Informatika D4 POLSRI"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kontak;
