import { Star } from "lucide-react";
import React from "react";

function StatSection() {
  return (
    <div className="not-prose" data-theme="light">
      <section className="py-16">
        <div className="bg-[url(/bg.png)] bg-fixed">
          <div className="grid grid-cols-2 md:grid-cols-4 items-center text-center bg-black/70 mx-auto py-16 backdrop-blur-sm">
            <div className="font-bold text-white">
              <h1 className="text-5xl">90+</h1>
              <p>Pembeli</p>
            </div>
            <div className="font-bold text-white">
              <h1 className="text-5xl">8+</h1>
              <p>penjualan</p>
            </div>
            <div className="font-bold text-white">
              <div className=" flex items-center justify-center">
                <h1 className=" text-5xl flex items-center gap-2">
                  5 <Star />
                </h1>
              </div>
              <p>Review & Ulasan</p>
            </div>
            <div className="font-bold text-white">
              <h1 className="text-5xl">100+</h1>
              <p>layanan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StatSection;
