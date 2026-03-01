import React from "react";
import hero from "../../assets/images/landing page picture/hero.png";
import { ArrowDown, ArrowRight } from "lucide-react";
import AdventureSection from "./AdventureSection";
import PopularProducts from "./PopularProducts";


const Home = () => {
  return (
   <div>
         <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-5 sm:px-8 md:px-16 lg:px-24 py-10">
        
        {/* Heading */}
        <div className="flex justify-center mt-8 md:mt-12">
          <h1 className="text-3xl sm:text-4xl md:text-[60px] lg:text-[60px] xl:text-[60px] font-bold text-center text-[#2A2B2A] leading-1 ">
            Build Your Dream Campervan Setup.
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-0 mb-[10px]  ">
          
          {/* Left Content */}
          <div className="max-w-md text-center md:text-left ">
            <p className="text-gray-700 mb-4 text-base sm:text-[20px] ">
              Shop essential campervan accessories for <br /> comfort, cooking,
              power, storage, and <br /> outdoor living and delivered across Europe.
            </p>

            <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-md text-white font-medium shadow-md">
              Shop Now
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Scroll Down */}
          <div className="hidden md:flex items-center gap-2 text-gray-800 font-medium cursor-pointer">
            <span>Scroll Down</span>
            <ArrowDown size={18} />
          </div>

        </div>
      </div>

     
    </section>
     <AdventureSection></AdventureSection>
     <PopularProducts></PopularProducts>
   </div>
  );
};

export default Home;