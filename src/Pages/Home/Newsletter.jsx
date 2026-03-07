import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../../assets/images/landing page picture/news1.png";
import img2 from "../../assets/images/landing page picture/news2.png";
import img3 from "../../assets/images/landing page picture/news3.png";
import img4 from "../../assets/images/landing page picture/news4.png";

gsap.registerPlugin(ScrollTrigger);

const Newsletter = () => {
  const sectionRef = useRef(null);
  const leftImages = useRef([]);
  const rightImages = useRef([]);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      tl.from(leftImages.current, {
        x: -120,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      })

      .from(rightImages.current, {
        x: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      }, "-=0.8")

      .from(contentRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.6");


      // Floating animation
      gsap.to(".floating-img", {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="newsletter-section py-32 overflow-hidden">
      <div className="newsletter-container flex items-center justify-between">

        {/* LEFT IMAGES */}
        <div className="newsletter-images left">
          <img
            ref={(el) => (leftImages.current[0] = el)}
            className="floating-img w-[308px] h-[204px]"
            src={img1}
            alt=""
          />
          <img
            ref={(el) => (leftImages.current[1] = el)}
            className="floating-img w-[308px] h-[204px] ms-24 mt-10"
            src={img2}
            alt=""
          />
        </div>

        {/* CONTENT */}
        <div ref={contentRef} className="newsletter-content text-center max-w-xl">

          <span className="newsletter-badge bg-black text-white px-5 py-2 rounded-full text-sm">
            Subscribe To Our Newsletter !
          </span>

          <h2 className="text-4xl font-bold mt-5">
            And receive €5 off for your <br /> first order!
          </h2>

          <p className="mt-4 text-gray-500">
            Every month, we share practical advice for traveling in a van and
            our new products! (offer valid from 50€ purchase)
          </p>

          <div className="newsletter-form flex mt-6 justify-center">

            <input
              className="px-5 py-3 w-[280px] border rounded-l-lg outline-none"
              type="email"
              placeholder="Enter your email address"
            />

            <button className="subscribe-btn bg-black text-white px-6 rounded-r-lg">
              Subscribe
            </button>

          </div>

          <small className="text-gray-400 block mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </small>

        </div>

        {/* RIGHT IMAGES */}
        <div className="newsletter-images right">
          <img
            ref={(el) => (rightImages.current[0] = el)}
            className="floating-img w-[308px] h-[204px]"
            src={img3}
            alt=""
          />
          <img
            ref={(el) => (rightImages.current[1] = el)}
            className="floating-img w-[309px] h-[204px] -ms-24 mt-10"
            src={img4}
            alt=""
          />
        </div>

      </div>
    </section>
  );
};

export default Newsletter;