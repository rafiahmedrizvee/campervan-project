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
    <section ref={sectionRef} className="why-section py-16 px-4 lg:px-10">
  <div className="why-container max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div ref={leftRef} className="why-left">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        Why Choose Campers store <br />
        <span className="text-primary">for Campervan Accessories</span>
      </h2>

      <p className="why-description mt-4 text-gray-600 max-w-lg">
        Buy camper van accessories with confidence on Campersstore.
        We keep van life shopping simple with clear categories,
        reliable quality, and EU-focused delivery.
      </p>

      <button className="explore-btn mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
        Explore Products →
      </button>

      <ul className="why-list mt-6 space-y-3">
        {[
          "Curated selection of premium products",
          "Expert advice from real van lifers",
          "Fast shipping across Europe",
          "Dedicated customer support"
        ].map((item, i) => (
          <li
            key={i}
            ref={(el) => (listRef.current[i] = el)}
            className="flex items-center gap-2 text-gray-700"
          >
            <Check size={16} className="text-green-500" />
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT IMAGE GRID */}
    <div className="why-right grid grid-cols-2 gap-4 md:gap-6">

      <div
        ref={(el) => (imgRef.current[0] = el)}
        className="grid-item rounded-xl overflow-hidden"
      >
        <img src={img1} alt="Camper 1" className="w-full h-full object-cover" />
      </div>

      <div
        ref={(el) => (imgRef.current[1] = el)}
        className="grid-item rounded-xl overflow-hidden"
      >
        <img src={img2} alt="Camper 2" className="w-full h-full object-cover" />
      </div>

      <div
        ref={(el) => (imgRef.current[2] = el)}
        className="grid-item rounded-xl overflow-hidden"
      >
        <img src={img4} alt="Camper 3" className="w-full h-full object-cover" />
      </div>

      <div
        ref={(el) => (imgRef.current[3] = el)}
        className="grid-item rounded-xl overflow-hidden md:-mt-10"
      >
        <img src={img3} alt="Camper 4" className="w-full h-full object-cover" />
      </div>

    </div>
  </div>

  {/* BOTTOM STRIP */}
  <div className="why-bottom mt-16 grid grid-cols-1 md:grid-cols-3 text-center gap-6 bg-gray-100 py-8">
    <div>
      <h4 className="text-2xl font-bold">24–48h</h4>
      <p className="text-gray-600">Dispatch (Selected Items)</p>
    </div>

    <div>
      <h4 className="text-2xl font-bold">30-Day</h4>
      <p className="text-gray-600">Easy Returns</p>
    </div>

    <div>
      <h4 className="text-2xl font-bold">256-bit</h4>
      <p className="text-gray-600">Secure Checkout</p>
    </div>
  </div>
</section>
  );
};

export default WhyChoose;