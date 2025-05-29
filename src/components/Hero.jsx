import React from 'react';

function Hero() {
    return (
      <div>
        <section className="relative bg-gradient-to-b from-orange-100 to-red-100 py-12 pt-28 z-0 ">
          {/* Blurred background image */}
          <img
            src="/bg.png"
            alt="University Canteen"
            className="absolute inset-0 w-full h-full object-cover filter blur-lg opacity-60"
            style={{ zIndex: 0 }}
          />
          {/* Overlay content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
              <div className="w-full lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
                  Welcome to UniCanteen!
                </h1>
                <p className="mb-6 text-base md:text-lg text-orange-50 drop-shadow">
                  Enjoy delicious, affordable meals and a vibrant atmosphere at
                  your university canteen. Fresh food, friendly faces, and a
                  place to connect with friends between classes!
                </p>
                <button className="rounded-full px-8 py-2 shadow-lg transition-transform hover:scale-105 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold">
                  See Today's Menu
                </button>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center gap-6">
                {/* Two images side by side, smaller size for logo space */}
                <img
                  src="/Logo.png"
                  alt="University Canteen 1"
                  className="w-30 h-30 "
                />
                <img
                  src="/ntin.png"
                  alt="University Canteen 1"
                  className="w-30 h-30 "
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Hero;