import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import vanImage from "../../assets/images/landing page picture/campervan.png";

gsap.registerPlugin(ScrollTrigger);

const labels = [
  { id: 1, text: "Solar Panel (200—300 W)\n€160 — €300", top: "8%", left: "18%" },
  { id: 2, text: "Roof Rack\n€250 — €500", top: "10%", right: "18%" },
  { id: 3, text: "Solar Panel (200—300 W)\nPrice: €160 — €300", top: "28%", right: "8%" },
  { id: 4, text: "Overhead Storage\n€300 — €6000", top: "40%", left: "6%" },
  { id: 5, text: "2-Burner Gas Stove\n€150 — €300", top: "52%", left: "40%" },
  { id: 6, text: "Wooden Floor Platform\n€300 — €6000", top: "70%", left: "12%" },
  { id: 7, text: "Leisure Battery\n€200 — €400", bottom: "10%", left: "28%" },
  { id: 8, text: "External Power Socket\n€50 — €100", bottom: "8%", right: "25%" },
  { id: 9, text: "Portable Toilet\n€100 — €150", top: "70%", right: "8%" },
];

const CamperCatalog = () => {
  const sectionRef = useRef(null);
  const labelRefs = useRef([]);
  const vanRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Section entrance animation
      gsap.from(".catalog-header > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Van image animation
      gsap.from(vanRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Floating animation
      gsap.to(vanRef.current, {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Labels stagger animation
      gsap.from(labelRefs.current, {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Pulsing "+" icons
      gsap.to(".plus-icon", {
        scale: 1.25,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="catalog-section">

      <div className="catalog-header">
        <p className="subtitle">Explore Camper Van</p>
        <h2>Take Look at Our Catelog</h2>
        <p className="description">
          Explore The Camperstore Catalogue For Essential Campervan
          Accessories And Van Life Upgrades—Available With EU-Wide Delivery.
        </p>
      </div>

      <div className="catalog-image-wrapper">

        <img
          ref={vanRef}
          src={vanImage}
          alt="Camper Van"
          className="van-image"
        />

        {labels.map((label, index) => (
          <div
            key={label.id}
            ref={(el) => (labelRefs.current[index] = el)}
            className="catalog-label"
            style={label}
          >
            <div className="plus-icon">+</div>

            <div className="tooltip">
              {label.text.split("\n").map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default CamperCatalog;