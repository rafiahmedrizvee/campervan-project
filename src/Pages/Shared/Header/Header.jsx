import React from "react";
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../../../assets/images/landing page picture/image 3.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-[#FAF8F5] ">
      <div className="flex justify-between items-center px-8 py-2 text-sm border-b  ">
        
          <div>
            <img src={logo} alt="" />
          </div>

          <div className="flex gap-6 text-gray-600">
            <span>€ Euro</span>
            <span>English</span>
          </div>
     
      </div>
      <div className="flex justify-between items-center px-8 py-4">
        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">

                <NavLink to="/home" >Home</NavLink>
                <NavLink to="/shop" >Shop</NavLink>
                <NavLink to="/brands" >Brands</NavLink>
                <NavLink to="/blog" >Blog</NavLink>
                <NavLink to="/contact-us" >Contact Us</NavLink>
         
        </div>

        {/* Icons */}
        <div className="flex gap-6 text-gray-700 text-lg">
          <FaSearch />
          <FaUser />
          <FaHeart />
          <div className="flex items-center gap-1">
            <FaShoppingCart />
            <span className="text-sm">Cart ($0)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
