import React, { useState } from "react";
import {
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../../assets/images/landing page picture/image 3.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition hover:text-green-600 ${
      isActive ? "text-green-600 font-semibold" : ""
    }`;

  return (
    <header className="w-full bg-[#FAF8F5] sticky top-0 z-50 shadow-sm">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-2 text-xs sm:text-sm border-b">
        
        {/* Logo */}
        <div className="flex items-center">
         <Link to="/" >
          <img
            src={logo}
            alt="Logo"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
         </Link>
        </div>

        {/* Currency / Language */}
        <div className="flex gap-4 sm:gap-6 text-gray-600">
          <span>€ Euro</span>
          <span>English</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4">

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <NavLink to="/home" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/shop" className={navLinkClass}>
            Shop
          </NavLink>

           <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>

          <NavLink to="/contact-us" className={navLinkClass}>
            Contact Us
          </NavLink>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 sm:gap-6 text-gray-700 text-base sm:text-lg">

          <FaSearch className="cursor-pointer hover:text-green-600 transition" />
          <Link to="/login">
          <FaUser className="cursor-pointer hover:text-green-600 transition" />
          </Link>
          <FaHeart className="cursor-pointer hover:text-green-600 transition" />

          <div className="hidden sm:flex items-center gap-2 cursor-pointer hover:text-green-600 transition">
            <FaShoppingCart />
            <span className="text-sm">Cart ($0)</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-6 px-6 py-6 bg-white shadow-lg text-gray-700 font-medium">
          
          <NavLink
            to="/home"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/blog"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Blog
          </NavLink>

          

          <NavLink
            to="/contact-us"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </NavLink>

          {/* Mobile Cart */}
          <div className="flex items-center gap-2 pt-4 border-t">
            <FaShoppingCart />
            <span>Cart ($0)</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;