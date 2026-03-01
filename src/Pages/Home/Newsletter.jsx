import React from "react";

import img1 from "../../assets/images/landing page picture/news1.png";
import img2 from "../../assets/images/landing page picture/news2.png";
import img3 from "../../assets/images/landing page picture/news3.png";
import img4 from "../../assets/images/landing page picture/news4.png";

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">

        {/* LEFT IMAGES */}
        <div className="newsletter-images left">
          <img className="w-[308px] h-[204] " src={img1} alt="Van 1" />
          <img className="w-[308px] h-[204]  ms-24 mt-10" src={img2} alt="Van 2" />
        </div>

        {/* CENTER CONTENT */}
        <div className="newsletter-content">
          <span className="newsletter-badge">
            Subscribe To Our Newsletter !
          </span>

          <h2>
            And receive €5 off for your <br />
            first order!
          </h2>

          <p>
            Every month, we share practical advice for traveling in a van and
            our new products! (offer valid from 50€ purchase)
          </p>

          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
            />
            <button>Subscribe</button>
          </div>

          <small>
            No spam, unsubscribe anytime. We respect your privacy.
          </small>
        </div>

        {/* RIGHT IMAGES */}
        <div className="newsletter-images right">
          <img className="w-[308px] h-[204] " src={img3} alt="Van 3" />
          <img className=" w-[309px] h-[204]  -ms-24 mt-10" src={img4} alt="Van 4" />
        </div>

      </div>
    </section>
  );
};

export default Newsletter;