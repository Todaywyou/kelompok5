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
    countdown: 864000,
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
              className="bg-white rounded-lg shadow border border-orange-300 p-4 text-center"
            >
              <img
                src={promo.image}
                alt={promo.name}
                className="w-32 h-32 object-contain mx-auto"
              />
              <div className="bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded mt-2 inline-block">
                {promo.discount} HEMAT
              </div>

              <h2 className="text-lg font-bold text-gray-800 mt-3">
                {promo.name}
              </h2>

              <div className="flex justify-center items-center space-x-2 mt-1">
                <span className="text-orange-600 font-semibold text-base">
                  Rp{promo.price}
                </span>
                <span className="line-through text-gray-400 text-xs">
                  Rp{promo.originalPrice}
                </span>
              </div>

              <div className="text-xs text-gray-500 mt-1">
                Tersedia: {promo.available} | Terjual: {promo.sold}
              </div>

              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div
                  className="bg-orange-500 h-1.5 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Promo;
