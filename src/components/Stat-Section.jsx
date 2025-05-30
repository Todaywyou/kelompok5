import { Star } from "lucide-react";
import React from "react";

function StatSection() {
  return (
    <section className="py-16">
      <div className="bg-[url(/bg.png)] bg-fixed">
        <div className="grid grid-cols-2 md:grid-cols-4 items-center text-center bg-black/70 mx-auto py-16 backdrop-blur-sm">
          <div className="font-bold text-white">
            <h1 className="text-5xl">50+</h1>
            <p>Menu Tersedia</p>
          </div>
          <div className="font-bold text-white">
            <h1 className="text-5xl">200+</h1>
            <p>Pelanggan Puas</p>
          </div>
          <div className="font-bold text-white">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl flex items-center gap-2">
                4.9 <Star />
              </h1>
            </div>
            <p>Rating Kantin</p>
          </div>
          <div className="font-bold text-white">
            <h1 className="text-5xl">10+</h1>
            <p>Mitra Penjual</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatSection;
