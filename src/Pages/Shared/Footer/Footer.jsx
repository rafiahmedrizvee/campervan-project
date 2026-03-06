import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../../assets/images/landing page picture/logo-footer.png"; // change if needed
import master from "../../../assets/images/landing page picture/Group 1.png"
import visa from "../../../assets/images/landing page picture/Group 2.png"
import google from "../../../assets/images/landing page picture/Group 3.png"
import apple from "../../../assets/images/landing page picture/Group 4.png"

const Footer = () => {
  return (
    <footer className="bg-[#5FA87A] text-white">

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-4 md:grid-cols-2 gap-10">

        {/* LOGO + DESCRIPTION */}
        <div>
          <img
            src={logo}
            alt="Campers Store"
            className="w-[200px] mb-4 bg-white p-2"
          />

          <p className="text-sm text-gray-100 leading-relaxed">
            EU-focused campervan accessories with EU-wide delivery.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <p className="text-sm text-gray-100 mb-2">
            Email:
            <br />
            <span className="font-semibold">(rizvirafi7@gmail.com)</span>
          </p>

          <p className="text-sm text-gray-100">
            Phone:
            <br />
            <span className="font-semibold">(01865192440)</span>
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm text-gray-100">

            <li className="hover:underline cursor-pointer">About us</li>
            <li className="hover:underline cursor-pointer">Shop</li>
            <li className="hover:underline cursor-pointer">Blog</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
            <li className="hover:underline cursor-pointer">FAQ</li>

          </ul>
        </div>

        {/* RESOURCES + SOCIAL */}
        <div>

          <h3 className="text-lg font-semibold mb-4">Resources</h3>

          <ul className="space-y-2 text-sm text-gray-100 mb-6">
            <li className="hover:underline cursor-pointer">Brands</li>
            <li className="hover:underline cursor-pointer">My Account</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Refund Policy</li>
            <li className="hover:underline cursor-pointer">Terms & Conditions</li>
          </ul>

          {/* SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Social Media</h3>

            <div className="flex gap-4 text-lg">
              <FaFacebookF className="cursor-pointer hover:opacity-80" />
              <FaTwitter className="cursor-pointer hover:opacity-80" />
              <FaInstagram className="cursor-pointer hover:opacity-80" />
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-green-400 py-4">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-100">
            © Rafi Ahmed Rizvee 2026 - All rights reserved.
          </p>

          {/* PAYMENT ICONS */}
          <div className="flex items-center gap-3">

            <img
              src={master}
              alt="mastercard"
              className="w-12 bg-white p-1 rounded"
            />

            <img
              src={visa}
              alt="visa"
              className="w-12 bg-white p-1 rounded"
            />

            <img
              src={google}
              alt="gpay"
              className="w-12 bg-white p-1 rounded"
            />

            <img
              src={apple}
              alt="applepay"
              className="w-10 bg-white p-1 rounded"
            />

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;