import React from "react";
import { useParams } from "react-router-dom";

import blogImage from "../../assets/images/landing page picture/blog1.png";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div className="bg-[#f6f4ef] min-h-screen">

      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 pt-8 text-sm text-gray-500">
        Home &gt; Blogs
      </div>

      {/* Content Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left Image */}
          <div className="w-full">
            <img
              src={blogImage}
              alt="Blog"
              className="w-full h-[350px] sm:h-[450px] lg:h-[520px] object-cover rounded-lg shadow-sm"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col">

            <p className="text-xs text-gray-400 mb-4">
              15 May, 2026
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6 leading-snug">
              EcoFlow Battery: Buying Guide and Comparisons
            </h1>

            <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-4">

              <p>
                When traveling on a road trip in a van, campervan or motorhome,
                having a reliable source of energy is essential to recharge
                your devices, power your equipment and fully enjoy your
                adventure in complete autonomy.
              </p>

              <p>
                Whether you’re a fan of vanlife or a wild camping enthusiast,
                choosing the ideal battery (power bank, solar panel, etc.)
                can be complex given the diversity of options available.
              </p>

              <p>
                That’s why we’ve carefully analyzed the characteristics of
                EcoFlow batteries, to guide you toward the energy solution
                best suited to your needs, at home or on the go.
              </p>

              <p>
                EcoFlow has expanded its range over the past year; here is
                our buying guide and comparison of EcoFlow portable batteries
                in 2025.
              </p>

              <p>
                EcoFlow has expanded its range over the past year; here is
                our buying guide and comparison of EcoFlow portable batteries
                in 2025.
              </p>

              <p>
                EcoFlow has expanded its range over the past year; here is
                our buying guide and comparison of EcoFlow portable batteries
                in 2025.
              </p>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default BlogDetails;