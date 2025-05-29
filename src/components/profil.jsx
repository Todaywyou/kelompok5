import React from "react";
import { Utensils, Headphones, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

function Profil() {
    const items = [
        {
            icon: <Headphones className="w-8 h-8 text-white" />,
            title: "24/7 Support",
            desc: "Kami siap membantu kapan pun Anda butuh, setiap hari.",
        },
        {
            icon: <Users className="w-8 h-8 text-white" />,
            title: "Tim Mahasiswa Terlatih",
            desc: "Dikelola oleh mahasiswa dengan pengalaman dan semangat tinggi.",
        },
        {
            icon: <BookOpen className="w-8 h-8 text-white" />,
            title: "Menu & Pelayanan Terbaik",
            desc: "Kualitas makanan dan pelayanan yang terus ditingkatkan.",
        },
    ];

    return (
        <section
            className="relative bg-gradient-to-b from-orange-100 via-rose-50 to-white py-20 px-4 sm:px-10 lg:px-20"
            id="profil"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-14 mb-16">
                {/* Gambar */}
                <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-white/30 backdrop-blur-lg bg-white/50">
                        <img
                            src="/ntin.png"
                            alt="Kantin HMJ MI"
                            className="w-full h-[340px] object-cover"
                        />
                    </div>
                </div>

                {/* Konten */}
                <div className="relative z-10">
                    <div className="mb-5 inline-flex items-center gap-2 text-orange-600 font-medium">
                        <Utensils className="w-6 h-6" />
                        <span>Kantin HMJ MI</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5">
                        Menghadirkan Cita Rasa{" "}
                        <span className="text-orange-600">di Tengah Kampus</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 mb-5">
                        Dikelola langsung oleh mahasiswa HMJ MI POLSRI, kantin ini tak hanya
                        menjual makanan — tapi juga menghadirkan semangat kolaborasi,
                        kemandirian, dan inovasi di lingkungan kampus.
                    </p>
                    <div className="text-sm text-gray-500 mb-5">
                        📍 Terletak strategis di kampus POLSRI — nyaman untuk nongkrong,
                        diskusi, dan recharge energi sebelum kelas.
                    </div>
                    {/* Tambah button ke Tentang Kami */}
                    <Link
                        to="/TentangKami"
                        className="inline-block bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold shadow hover:bg-orange-700 transition"
                    >
                        Tentang Kami
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Profil;
