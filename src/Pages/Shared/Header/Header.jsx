
import React, { useContext, useState } from "react";
import {
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../../assets/images/landing page picture/image 3.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../../../cart/CartContext";

const Header = () => {
  const { cart, subtotal } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [currency, setCurrency] = useState("EUR");
  const [language, setLanguage] = useState("en");

  const navigate = useNavigate();

  const navLinkClass = ({ isActive }) =>
    `transition hover:text-green-600 ${
      isActive ? "text-green-600 font-semibold" : ""
    }`;

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/shop?search=${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="w-full bg-[#FAF8F5] sticky top-0 z-50 shadow-sm">
      
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-2 text-xs sm:text-sm border-b">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Currency / Language */}
        <div className="flex gap-3 sm:gap-4 text-gray-600">

          {/* Currency Selector */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-transparent border rounded px-2 py-1 text-xs sm:text-sm outline-none cursor-pointer hover:border-green-500"
          >
            <option value="EUR">€ Euro</option>
            <option value="USD">$ USD</option>
            <option value="GBP">£ Pound</option>
            <option value="BDT">৳ BDT</option>
          </select>

          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent border rounded px-2 py-1 text-xs sm:text-sm outline-none cursor-pointer hover:border-green-500"
          >
            <option value="en">English</option>
            <option value="bn">Bangla</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>

        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-4">

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <NavLink to="/home" className={navLinkClass}>Home</NavLink>
          <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
          <NavLink to="/contact-us" className={navLinkClass}>Contact Us</NavLink>
        </nav>

        {/* Search + Icons */}
        <div className="flex items-center gap-4 sm:gap-6 text-gray-700">

          {/* Search Bar */}
          <div className="hidden sm:flex items-center border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-2 py-1 outline-none text-sm"
            />

            <button onClick={handleSearch} className="px-2">
              <FaSearch className="cursor-pointer hover:text-green-600" />
            </button>
          </div>

          {/* User */}
          <Link to="/login">
            <FaUser className="cursor-pointer hover:text-green-600 transition" />
          </Link>

          {/* Wishlist */}
          <FaHeart className="cursor-pointer hover:text-green-600 transition" />

          {/* Cart */}
          <Link
            to="/cart"
            className="hidden sm:flex items-center gap-2 cursor-pointer hover:text-green-600 transition"
          >
            <FaShoppingCart />
            <span className="text-sm">
              Cart ({cart.length}) - ${subtotal}
            </span>
          </Link>

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
          
          <NavLink to="/home" className={navLinkClass} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/shop" className={navLinkClass} onClick={() => setIsOpen(false)}>
            Shop
          </NavLink>

          <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>
            About
          </NavLink>

          <NavLink to="/blog" className={navLinkClass} onClick={() => setIsOpen(false)}>
            Blog
          </NavLink>

          <NavLink to="/contact-us" className={navLinkClass} onClick={() => setIsOpen(false)}>
            Contact Us
          </NavLink>

          {/* Mobile Cart */}
          <div className="flex items-center gap-2 pt-4 border-t">
            <FaShoppingCart />
            <span className="text-sm">
              Cart ({cart.length}) - ${subtotal}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


