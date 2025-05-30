import React from "react";
import { motion } from "framer-motion";

function Visi() {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-20 text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase text-red-500 tracking-widest"
        >
          Visi & Misi
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 mt-2"
        >
          Tujuan Kantin HMJ MI
        </motion.h2>
      </div>

      {/* Konten Visi dan Misi */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card Visi */}
        <motion.div
          whileHover={{
            scale: 1.03,
            backgroundColor: "#fee2e2",
            color: "#b91c1c",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl shadow-md p-6 cursor-pointer transition-all duration-300"
        >
          <h3 className="text-lg font-semibold mb-2">Visi</h3>
          <p className="text-sm leading-relaxed">
            Menjadi kantin unggulan yang mendukung kesejahteraan mahasiswa
            melalui penyediaan makanan sehat, terjangkau, dan lingkungan yang
            nyaman untuk bersosialisasi.
          </p>
        </motion.div>

        {/* Card Misi */}
        <motion.div
          whileHover={{
            scale: 1.03,
            backgroundColor: "#fee2e2",
            color: "#b91c1c",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl shadow-md p-6 cursor-pointer transition-all duration-300"
        >
          <h3 className="text-lg font-semibold mb-2">Misi</h3>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Menyediakan menu makanan yang bergizi dan bervariasi.</li>
            <li>Menjaga kualitas dan kebersihan dalam setiap penyajian.</li>
            <li>Membangun suasana yang ramah, nyaman, dan bersih.</li>
            <li>
              Mendukung kegiatan mahasiswa melalui layanan yang cepat dan
              efisien.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Visi;
