import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

import blog1 from "../../assets/images/landing page picture/blog1.png";
import blog2 from "../../assets/images/landing page picture/blog2.png";
import blog3 from "../../assets/images/landing page picture/blog3.png";




const blogs = [
  {
    id: 1,
    image: blog1,
    date: "15 May, 2026",
    title: "Storing your Campervan over Winter",
    desc: "Storing a campervan for winter requires draining all water systems to prevent freezing",
  },
  {
    id: 2,
    image: blog2,
    date: "07 Sept, 2026",
    title: "Storing your Campervan over Winter",
    desc: "Storing a campervan for winter requires draining all water systems to prevent freezing",
  },
  {
    id: 3,
    image: blog3,
    date: "22 Dec, 2026",
    title: "Storing your Campervan over Winter",
    desc: "Storing a campervan for winter requires draining all water systems to prevent freezing",
  },
];

const Blogs = () => {
  const sliderRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const wrapper = wrapperRef.current;

    const animation = gsap.to(slider, {
      x: "-50%",
      duration: 25,
      ease: "none",
      repeat: -1,
    });

    const pause = () => animation.pause();
    const play = () => animation.play();

    wrapper.addEventListener("mouseenter", pause);
    wrapper.addEventListener("mouseleave", play);

    return () => {
      wrapper.removeEventListener("mouseenter", pause);
      wrapper.removeEventListener("mouseleave", play);
      animation.kill();
    };
  }, []);

  return (
  <div>
      <section className="blogs-section">
      <div className="container">

        <div className="blogs-header">
          <div>
            <p className="blogs-subtitle">Our Blogs</p>
            <h2>
              Campervan <span>Knowledge Hub</span>
            </h2>
          </div>

          <a href="#" className="view-all">
            View All Blogs <ArrowRight size={18} />
          </a>
        </div>

        <div className="blogs-wrapper" ref={wrapperRef}>
          <div className="blogs-slider" ref={sliderRef}>
            {[...blogs, ...blogs].map((blog, index) => (
              <div className="blog-card" key={index}>
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                </div>

                <div className="blog-content">
                  <span className="blog-date">{blog.date}</span>
                  <h4>{blog.title}</h4>
                  <p>{blog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
     
    </section>
    
  </div>
  );
};

export default Blogs;