import { useEffect, useRef } from "react";
import hero from "../../assets/images/landing page picture/hero.png";
import { ArrowDown, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import AdventureSection from "./AdventureSection";
import PopularProducts from "./PopularProducts";
import CamperCatalog from "./CamperCatalog";
import WhyChoose from "./WhyChoose";
import Newsletter from "./Newsletter";
import Blogs from "./Blogs";
import Testimonials from "./Testimonials";
import Collection from "./Collection";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {

    const split = new SplitType(titleRef.current, { types: "chars" });

    const tl = gsap.timeline();

    /* TEXT ANIMATION */
    tl.fromTo(
      split.chars,
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 1,
        ease: "power4.out"
      }
    )
      .fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.6"
      )
      .fromTo(
        buttonRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      );

    /* HERO IMAGE PARALLAX */
    gsap.to(imageRef.current, {
      scale: 1.2,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    /* 3D MOUSE PARALLAX */
    const hero = heroRef.current;

    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 30;
      const y = (window.innerHeight / 2 - e.clientY) / 30;

      gsap.to(imageRef.current, {
        x: x,
        y: y,
        duration: 1,
        ease: "power3.out"
      });
    };

    hero.addEventListener("mousemove", handleMouseMove);

    return () => {
      split.revert();
      hero.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  /* MAGNETIC BUTTON */
  const handleMagnet = (e) => {

    const btn = buttonRef.current;
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3
    });
  };

  const resetMagnet = () => {
    gsap.to(buttonRef.current, { x: 0, y: 0, duration: 0.3 });
  };

  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center overflow-hidden"
      >

        {/* IMAGE */}
        <img
          ref={imageRef}
          src={hero}
          alt="Campervan setup"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center">

          {/* TITLE */}
          <h1
            ref={titleRef}
            className="
            font-extrabold
            leading-tight
            tracking-tight
            text-white
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl"
          >
            Build Your Dream
            <span className="block bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              Campervan Setup
            </span>
          </h1>

          {/* SUBTITLE */}
          <p
            ref={subtitleRef}
            className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Shop essential campervan accessories for comfort, cooking,
            power, storage and outdoor living delivered across Europe.
          </p>

          {/* BUTTON */}
          <div className="mt-10 flex justify-center">
            <Link to="/shop" >
            <button
              ref={buttonRef}
              onMouseMove={handleMagnet}
              onMouseLeave={resetMagnet}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-white text-lg font-medium shadow-xl transition"
            >
              Shop Now
              <ArrowRight size={20} />
            </button></Link>
          </div>

          {/* SCROLL */}
          <div className="mt-16 flex justify-center items-center gap-2 text-white animate-bounce">
            <span>Scroll Down</span>
            <ArrowDown size={18} />
          </div>

        </div>
      </section>

      {/* OTHER SECTIONS */}
      <AdventureSection />
      <PopularProducts />
      <CamperCatalog />
      <Collection />
      <WhyChoose />
      <Newsletter />
      <Blogs />
      <Testimonials />

    </div>
  );
};

export default Home;