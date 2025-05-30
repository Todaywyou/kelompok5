import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const promos = [
  {
    name: "Beng-Beng",
    price: 2000,
    originalPrice: 2500,
    discount: "20%",
    available: 100,
    sold: 50,
    image: "/bengbeng.jpg",
    countdown: 864000, // 10 hari
  },
  {
    name: "Cokelatos",
    price: 1500,
    originalPrice: 2000,
    discount: "25%",
    available: 80,
    sold: 40,
    image: "/cokelatos.jpg",
    countdown: 864000,
  },
  {
    name: "Aqua",
    price: 5000,
    originalPrice: 6000,
    discount: "15%",
    available: 200,
    sold: 30,
    image: "/aqua.jpg",
    countdown: 864000,
  },
];

const Promo = () => {
  const settings = {
    dots: true, // titik di bawah
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // aktifkan auto geser
    autoplaySpeed: 3000, // 3 detik
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 px-2">
      <h2 className="text-xl font-bold text-orange-600 mb-4 text-center">
        Promo Hari Ini
      </h2>
      <Slider {...settings}>
        {promos.map((promo, idx) => {
          const progress = (promo.sold / (promo.available + promo.sold)) * 100;
          return (
            <div
              key={idx}
              className="bg-white rounded-lg shadow border border-orange-300 p-4 flex items-center space-x-4"
            >
              <div className="flex-shrink-0">
                <img
                  src={promo.image}
                  alt={promo.name}
                  className="w-24 h-24 object-contain"
                />
                <div className="bg-orange-500 text-white text-xs px-1 py-0.5 rounded mt-1 text-center">
                  {promo.discount} HEMAT
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-gray-800">
                  {promo.name}
                </h2>
                <div className="flex items-center space-x-1 mt-1">
                  <span className="text-orange-600 font-semibold text-base">
                    Rp{promo.price}
                  </span>
                  <span className="line-through text-gray-400 text-xs">
                    Rp{promo.originalPrice}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  Tersedia: {promo.available} | Terjual: {promo.sold}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1 my-1">
                  <div
                    className="bg-orange-500 h-1 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Promo;
