import { useEffect, useRef } from "react";
import hero from "../../assets/images/landing page picture/hero.png";
import { ArrowDown, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import * as THREE from "three";

import AdventureSection from "./AdventureSection";
import PopularProducts from "./PopularProducts";
import CamperCatalog from "./CamperCatalog";
import WhyChoose from "./WhyChoose";
import Newsletter from "./Newsletter";
import Blogs from "./Blogs";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
import Collection from "./Collections";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const particleRef = useRef(null);
  const spotlightRef = useRef(null);
  const threeCanvasRef = useRef(null);

  useEffect(() => {

    const heroEl = heroRef.current;

    if (!heroEl) return;

    const split = new SplitType(titleRef.current, { types: "chars" });

    /* HERO INTRO ANIMATION */

    const tl = gsap.timeline();

    tl.from(split.chars, {
      y: 120,
      opacity: 0,
      stagger: 0.03,
      duration: 1,
      ease: "power4.out"
    })
      .from(
        subtitleRef.current,
        { y: 40, opacity: 0, duration: 1 },
        "-=0.6"
      )
      .from(
        buttonRef.current,
        { scale: 0.8, opacity: 0, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.5"
      );

    /* SCROLL TEXT EFFECT */

    gsap.to(titleRef.current, {
      y: -100,
      opacity: 0.6,
      scrollTrigger: {
        trigger: heroEl,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    /* HERO IMAGE PARALLAX */

    gsap.to(imageRef.current, {
      scale: 1.2,
      scrollTrigger: {
        trigger: heroEl,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    /* FLOATING PARTICLES */

    if (particleRef.current) {
      const particles = particleRef.current.children;

      gsap.to(particles, {
        y: "-=80",
        repeat: -1,
        yoyo: true,
        duration: 6,
        stagger: 0.4,
        ease: "sine.inOut"
      });
    }

    /* MOUSE SPOTLIGHT */

    const moveSpotlight = (e) => {

      if (!spotlightRef.current) return;

      gsap.to(spotlightRef.current, {
        x: e.clientX - 300,
        y: e.clientY - 300,
        duration: 0.4
      });

    };

    /* 3D PARALLAX */

    const handleMouseMove = (e) => {

      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          x,
          y,
          duration: 1,
          ease: "power3.out"
        });
      }

    };

    heroEl.addEventListener("mousemove", moveSpotlight);
    heroEl.addEventListener("mousemove", handleMouseMove);

    /* THREE JS BACKGROUND */

    let renderer;

    if (threeCanvasRef.current) {

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      threeCanvasRef.current.appendChild(renderer.domElement);

      const geometry = new THREE.IcosahedronGeometry(2, 1);

      const material = new THREE.MeshBasicMaterial({
        color: 0x10b981,
        wireframe: true
      });

      const mesh = new THREE.Mesh(geometry, material);

      scene.add(mesh);

      camera.position.z = 6;

      const animate = () => {
        mesh.rotation.x += 0.002;
        mesh.rotation.y += 0.004;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      animate();
    }

    /* CLEANUP */

    return () => {

      split.revert();

      ScrollTrigger.getAll().forEach(t => t.kill());

      if (heroEl) {
        heroEl.removeEventListener("mousemove", moveSpotlight);
        heroEl.removeEventListener("mousemove", handleMouseMove);
      }

      if (renderer) {
        renderer.dispose();
      }

    };

  }, []);

  /* MAGNETIC BUTTON */

  const handleMagnet = (e) => {

    const btn = buttonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.3
    });

  };

  const resetMagnet = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, { x: 0, y: 0, duration: 0.3 });
  };

  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO */}

      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      >

        {/* VIDEO BACKGROUND */}

        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* GRADIENT */}

        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-400/20 to-transparent blur-3xl" />

        {/* HERO IMAGE */}

        <img
          ref={imageRef}
          src={hero}
          alt="Campervan setup"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* THREE JS */}

        <div
          ref={threeCanvasRef}
          className="absolute inset-0 pointer-events-none"
        />

        {/* SPOTLIGHT */}

        <div
          ref={spotlightRef}
          className="absolute w-[600px] h-[600px] bg-green-400/20 blur-[160px] rounded-full pointer-events-none"
        />

        {/* PARTICLES */}

        <div
          ref={particleRef}
          className="absolute inset-0 pointer-events-none"
        >
          {Array.from({ length: 15 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        {/* CONTENT */}

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">

          <h1
            ref={titleRef}
            className="font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Build Your Dream
            <span className="block bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              Campervan Setup
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Shop essential campervan accessories for comfort, cooking,
            power, storage and outdoor living delivered across Europe.
          </p>

          <div className="mt-10 flex justify-center">

            <Link to="/shop">

              <button
                ref={buttonRef}
                onMouseMove={handleMagnet}
                onMouseLeave={resetMagnet}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-white text-lg font-medium shadow-xl transition"
              >
                Shop Now
                <ArrowRight size={20} />
              </button>

            </Link>

          </div>

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
      <Collection></Collection>

      <WhyChoose />
      <Newsletter />
      <Blogs />
      <Testimonials />

    </div>
  );
};

export default Home;