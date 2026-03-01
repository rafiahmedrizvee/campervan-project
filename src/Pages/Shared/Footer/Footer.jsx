import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">

        <div className="footer-col">
          <h2>Campers Store</h2>
          <p>EU-focused campervan accessories with EU-wide delivery.</p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: (hello@Campersstore.com)</p>
          <p>Phone: (01234 666999)</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <p>About us</p>
          <p>Shop</p>
          <p>Blog</p>
          <p>Contact Us</p>
          <p>FAQ</p>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <p>Brands</p>
          <p>My Account</p>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div className="footer-col">
          <h4>Social Media</h4>
          <div className="social-icons">
            <Facebook size={18} />
            <Twitter size={18} />
            <Instagram size={18} />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© Campersstore 2025 - All rights reserved.</p>
      </div>

      <div className="footer-bg-text">
        Campers Store
      </div>
    </footer>
  );
};

export default Footer;