import React, { useRef, useEffect } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../../assets/images/landing page picture/w1.png";
import img2 from "../../assets/images/landing page picture/w2.png";
import img3 from "../../assets/images/landing page picture/w3.png";
import img4 from "../../assets/images/landing page picture/w4.png";

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const listRef = useRef([]);
  const imgRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Left content animation
      gsap.from(leftRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      // List animation
      gsap.from(listRef.current, {
        x: -30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      // Image grid animation
      gsap.from(imgRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.9,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      // Floating/parallax effect
      imgRef.current.forEach((img, i) => {
        gsap.to(img, {
          y: i % 2 === 0 ? -15 : 15,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="why-section">
      <div className="why-container">

        {/* LEFT CONTENT */}
        <div ref={leftRef} className="why-left">
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
            {[
              "Curated selection of premium products",
              "Expert advice from real van lifers",
              "Fast shipping across Europe",
              "Dedicated customer support"
            ].map((item, i) => (
              <li
                key={i}
                ref={(el) => (listRef.current[i] = el)}
              >
                <Check size={16} /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="why-right grid grid-cols-2 gap-6">

          <div
            ref={(el) => (imgRef.current[0] = el)}
            className="grid-item w-[304px] h-[364px]"
          >
            <img src={img1} alt="Camper 1" />
          </div>

          <div
            ref={(el) => (imgRef.current[1] = el)}
            className="grid-item w-[304px] h-[264px]"
          >
            <img src={img2} alt="Camper 2" />
          </div>

          <div
            ref={(el) => (imgRef.current[2] = el)}
            className="grid-item w-[304px] h-[264px]"
          >
            <img src={img4} alt="Camper 3" />
          </div>

          <div
            ref={(el) => (imgRef.current[3] = el)}
            className="grid-item w-[304px] h-[364px] -mt-[100px]"
          >
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