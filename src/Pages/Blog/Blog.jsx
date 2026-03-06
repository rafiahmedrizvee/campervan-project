import React from "react";
import { Link } from "react-router-dom";

import blog1 from "../../assets/images/landing page picture/blog1.png";
import blog2 from "../../assets/images/landing page picture/blog2.png";
import blog3 from "../../assets/images/landing page picture/blog3.png";

const blogs = [
  {
    id: 1,
    title: "Storing your Campervan over Winter",
    date: "15 May, 2026",
    image: blog1,
    description:
      "Storing a campervan for winter requires draining all water systems to prevent freezing.",
  },
  {
    id: 2,
    title: "Storing your Campervan over Winter",
    date: "07 Sept, 2026",
    image: blog2,
    description:
      "Storing a campervan for winter requires draining all water systems to prevent freezing.",
  },
  {
    id: 3,
    title: "Storing your Campervan over Winter",
    date: "22 Dec, 2026",
    image: blog3,
    description:
      "Storing a campervan for winter requires draining all water systems to prevent freezing.",
  },
  // Repeat or dynamically map from backend later
];

const Blog = () => {
  return (
    <div className="bg-[#f6f4ef] min-h-screen">

      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 pt-8 text-sm text-gray-500">
        Home &gt; Blogs
      </div>

      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Our Latest Blogs
        </h1>
        <p className="text-gray-600 max-w-xl text-sm md:text-base">
          Stay updated with fresh insights on volleyball gear, accessories,
          training tools designed to elevate your game, one post at a time.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {blogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="bg-white rounded-lg shadow-sm border hover:shadow-md transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-gray-400 mb-2">{blog.date}</p>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {blog.description}
                </p>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Blog;