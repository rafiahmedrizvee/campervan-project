import React from "react";
import { Check } from "lucide-react";

import img1 from "../../assets/images/landing page picture/w1.png";
import img2 from "../../assets/images/landing page picture/w2.png";
import img3 from "../../assets/images/landing page picture/w3.png";
import img4 from "../../assets/images/landing page picture/w4.png";

const WhyChoose = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* LEFT CONTENT */}
        <div className="why-left">
          <h2>
            Why Choose Campers store <br />
            <span>for Campervan Accessories</span>
          </h2>

          <p className="why-description">
            Buy camper van accessories with confidence on Campersstore.
            We keep van life shopping simple with clear categories,
            reliable quality, and EU-focused delivery.
          </p>

          <button className="explore-btn">
            Explore Products →
          </button>

          <ul className="why-list">
            <li><Check size={16} /> Curated selection of premium products</li>
            <li><Check size={16} /> Expert advice from real van lifers</li>
            <li><Check size={16} /> Fast shipping across Europe</li>
            <li><Check size={16} /> Dedicated customer support</li>
          </ul>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="why-right">
          <div className="grid-item w-[304px] h-[364px] ">
            <img src={img1} alt="Camper 1" />
          </div>
          <div className="grid-item w-[304px] h-[264px]">
            <img src={img2} alt="Camper 2" />
          </div>
          <div className="grid-item w-[304px] h-[264px]">
            <img src={img4} alt="Camper 3" />
          </div>
          <div className="grid-item w-[304px] h-[364px] -mt-[100px] ">
            <img src={img3} alt="Camper 4" />
          </div>
        </div>

      </div>

      {/* BOTTOM STRIP */}
      <div className="why-bottom">
        <div>
          <h4>24–48h</h4>
          <p>Dispatch (Selected Items)</p>
        </div>
        <div>
          <h4>30-Day</h4>
          <p>Easy Returns</p>
        </div>
        <div>
          <h4>256-bit</h4>
          <p>Secure Checkout</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;