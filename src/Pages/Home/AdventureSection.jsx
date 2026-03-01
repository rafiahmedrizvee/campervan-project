import React from "react";
import layoutImg from "../../assets/images/landing page picture/ad1.png";
import insideImg from "../../assets/images/landing page picture/ad2.png";
import outsideImg from "../../assets/images/landing page picture/ad3.png";
import techImg from "../../assets/images/landing page picture/ad4.png";

import backgroundimg from "../../assets/images/landing page picture/bg.png";
const categories = [
  {
    title: "Layout",
    products: 28,
    image: layoutImg,
  },
  {
    title: "Inside",
    products: 35,
    image: insideImg,
  },
  {
    title: "Outside",
    products: 40,
    image: outsideImg,
  },
  {
    title: "Vehicle and Hi-Tech",
    products: 12,
    image: techImg,
  },
];

const AdventureSection = () => {
  return (
  <div className="relative bg-[#e9e6df] ">
          <section className="py-10 px-5 md:px-5"   
     
    >
      {/* Top Text */}
      <div className="text-center mb-16">
        <p className="text-green-600 font-medium mb-2">
          Explore Categories
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Gear for Every Adventure
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Welcome To Camperstore, Your EU-Focused Store For Campervan <br />
          Accessories And Van Life Essentials, Delivered Across Europe.
        </p>
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden lg:grid grid-cols-4 justify-center gap-6 max-w-[1440px] mx-auto">

        {/* Card 1 */}
        <div className="relative group rounded-[5px] overflow-hidden cursor-pointer w-[280px] h-[448px] ms-2">
          <img
            src={layoutImg}
            alt="Layout"
            className=" w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-lg font-semibold">Layout</h3>
            <p className="text-sm opacity-90">Products (28)</p>
          </div>
        </div>

        {/* Card 2 (Lowered) */}
        <div className="relative group rounded-[5px] overflow-hidden cursor-pointer w-[280px] h-[364px] mb-[84px]">
          <img
            src={insideImg}
            alt="Inside"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute top-6 left-6 text-white">
            <h3 className="text-lg font-semibold">Inside</h3>
            <p className="text-sm opacity-90">Products (35)</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group rounded-[5px] overflow-hidden cursor-pointer w-[280px] h-[448px]">
          <img
            src={outsideImg}
            alt="Outside"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-lg font-semibold">Outside</h3>
            <p className="text-sm opacity-90">Products (40)</p>
          </div>
        </div>

        {/* Card 4 (Lowered) */}
        <div className="relative group rounded-[5px] overflow-hidden cursor-pointer w-[280px] h-[364px] mb-[84px]">
          <img
            src={techImg}
            alt="Vehicle and Hi-Tech"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute top-6 left-6 text-white">
            <h3 className="text-lg font-semibold">Vehicle and Hi-Tech</h3>
            <p className="text-sm opacity-90">Products (12)</p>
          </div>
        </div>

      </div>

      {/* ================= MOBILE / TABLET ================= */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden cursor-pointer h-[380px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm opacity-90">
                Products ({item.products})
              </p>
            </div>
          </div>
        ))}
      </div>
     
      

      

    </section>
    <div className=" w-full h-[300px] -mt-60  "
          style={{
            backgroundImage: `url(${backgroundimg})`,
          }}>
                </div>
    
  </div>
  );
};

export default AdventureSection;