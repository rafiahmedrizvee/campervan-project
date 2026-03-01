import React from "react";
import { ArrowRight } from "lucide-react";

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
  return (
    <section className="blogs-section">
      <div className="blogs-header">
        <div>
          <p className="blogs-subtitle">Our Blogs</p>
          <h2>
            Campervan <span>Knowledge Hub</span>
          </h2>
        </div>

        <a href="#" className="view-all">
          View All Blogs <ArrowRight size={16} />
        </a>
      </div>

      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />

            <div className="blog-content">
              <span className="blog-date">{blog.date}</span>
              <h4>{blog.title}</h4>
              <p>{blog.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;