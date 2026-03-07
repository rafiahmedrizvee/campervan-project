import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import hero from "../../assets/images/about/about-hero.png";
import vanCamp from "../../assets/images/about/about1.png";
import vanInterior from "../../assets/images/about/about2.png";
import vanKitchen from "../../assets/images/about/about3.png";
import couple from "../../assets/images/about/about4.png";
import rv from "../../assets/images/about/about5.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const chooseRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // HERO animation
      gsap.from(".hero-text", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      // STORY animation
      gsap.from(".story-item", {
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });

      // MISSION animation
      gsap.from(".mission-item", {
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.25,
        duration: 0.9,
      });

      // WHY CHOOSE animation
      gsap.from(".choose-item", {
        scrollTrigger: {
          trigger: chooseRef.current,
          start: "top 80%",
        },
        x: -60,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
      });

      // GALLERY animation
      gsap.from(".gallery-img", {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
      });

      // Parallax images
      gsap.to(".parallax-img", {
        y: 40,
        scrollTrigger: {
          trigger: ".parallax-img",
          scrub: true,
        },
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-[#f7f7f5]">

      {/* HERO */}

      <div ref={heroRef} className="relative w-full h-[420px] md:h-[520px]">
        <img src={hero} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white hero-text">
            <h1 className="text-3xl md:text-4xl font-semibold mb-3">
              About Us
            </h1>

            <p className="max-w-md text-sm md:text-base">
              Camperstore is an EU-focused campervan accessories store
              for vanlife lovers, weekend trips, and long journeys.
            </p>
          </div>
        </div>
      </div>

      {/* OUR STORY */}

      <section ref={storyRef} className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src={vanCamp}
            className="rounded-lg w-full story-item parallax-img"
          />

          <div className="story-item">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>

            <p className="text-gray-600 mb-6">
              Camperstore started with a simple problem: finding the
              right campervan accessories often took too many options,
              unclear product details, and no real guidance for what
              actually works on the road.
            </p>

            <p className="text-gray-600">
              Camperstore is built for practical van life. From small
              upgrades to full setup improvements, we offer reliable,
              proven smart accessories with a clean shopping experience.
            </p>

            {/* STATS */}

            <div className="grid grid-cols-3 mt-8 gap-6 text-sm story-item">

              <div>
                <h3 className="text-xl font-semibold">10,000+</h3>
                <p className="text-gray-500">Customers Loved</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Europe</h3>
                <p className="text-gray-500">Wide Delivery</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">10x</h3>
                <p className="text-gray-500">Fast Support</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MISSION */}

      <section ref={missionRef} className="bg-[#f0efec] py-14">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div className="mission-item md:col-span-1">
            <h2 className="text-xl font-semibold">
              Making Campervan Life Easier with Practical Accessories.
            </h2>
          </div>

          <div className="mission-item">
            <h3 className="font-semibold mb-2">Our Mission</h3>

            <p className="text-gray-600 text-sm">
              To make buying campervan accessories simple across
              Europe with reliable products and friendly support.
            </p>
          </div>

          <div className="mission-item">
            <h3 className="font-semibold mb-2">Our Vision</h3>

            <p className="text-gray-600 text-sm">
              To become Europe’s most trusted campervan accessories
              store through quality products and reliable service.
            </p>
          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}

      <section ref={chooseRef} className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="choose-item">

            <h2 className="text-2xl font-semibold mb-4">
              Why Choose Camperstore
            </h2>

            <p className="text-gray-600 mb-6">
              Buy practical campervan gear with confidence.
            </p>

            <button className="bg-green-700 text-white px-5 py-2 rounded-md">
              Explore Products →
            </button>

          </div>

          <div className="grid grid-cols-2 gap-4 choose-item">

            <img src={vanInterior} className="rounded-md parallax-img" />
            <img src={vanKitchen} className="rounded-md parallax-img" />

          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section ref={galleryRef} className="max-w-6xl mx-auto px-6 pb-16">

        <h2 className="text-xl font-semibold mb-8">
          Life on the road
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <img src={rv} className="rounded-md w-full gallery-img" />
          <img src={couple} className="rounded-md w-full gallery-img" />

        </div>

      </section>

    </div>
  );
};

export default About;