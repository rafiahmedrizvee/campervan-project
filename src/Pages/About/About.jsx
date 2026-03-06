import React from "react";

import hero from "../../assets/images/about/about-hero.png";
import vanCamp from "../../assets/images/about/about1.png";
import vanInterior from "../../assets/images/about/about2.png";
import vanKitchen from "../../assets/images/about/about3.png";
import couple from "../../assets/images/about/about4.png";
import rv from "../../assets/images/about/about5.png";

const About = () => {
  return (
    <div className="w-full bg-[#f7f7f5]">

      {/* HERO SECTION */}

      <div className="relative w-full h-[420px] md:h-[520px]">
        <img
          src={hero}
          className="w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
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

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src={vanCamp}
            className="rounded-lg w-full"
            alt=""
          />

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Our Story
            </h2>

            <p className="text-gray-600 mb-6">
              Camperstore started with a simple problem: finding the
              right campervan accessories often took too many options,
              unclear product details, and no real guidance for what
              actually works on the road.
            </p>

            <p className="text-gray-600">
              Camperstore is built for practical van life. From small
              upgrades to full setup improvements, we offer reliable,
              proven smart accessories with a clean shopping experience
              and helpful support.
            </p>

            {/* STATS */}

            <div className="grid grid-cols-3 mt-8 gap-6 text-sm">

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

      {/* MISSION VISION */}

      <section className="bg-[#f0efec] py-14">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold">
              Making Campervan Life Easier with Practical Accessories,
              Clear Choices, and EU-Wide Delivery.
            </h2>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Our Mission</h3>

            <p className="text-gray-600 text-sm">
              To make buying campervan accessories simple across
              Europe with reliable products, clear insights, and
              friendly support so vanlife lovers can focus on
              enjoying the road.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Our Vision</h3>

            <p className="text-gray-600 text-sm">
              To become Europe’s most trusted campervan accessories
              store through quality products, easy shopping, and
              reliable EU-wide service.
            </p>
          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-2xl font-semibold mb-4">
              Why Choose Camperstore for Campervan Accessories
            </h2>

            <p className="text-gray-600 mb-6">
              Buy practical campervan gear with confidence.
              Carefully selected products designed for real vanlife
              across Europe.
            </p>

            <button className="bg-green-700 text-white px-5 py-2 rounded-md">
              Explore Products →
            </button>

            <div className="flex gap-8 mt-10 text-sm text-gray-600">

              <div>
                <h4 className="font-semibold">24–48h</h4>
                Dispatch Speed
              </div>

              <div>
                <h4 className="font-semibold">30-Day</h4>
                Easy Return
              </div>

              <div>
                <h4 className="font-semibold">256-bit</h4>
                Secure Checkout
              </div>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <img src={vanInterior} className="rounded-md" />
            <img src={vanKitchen} className="rounded-md" />
          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section className="max-w-6xl mx-auto px-6 pb-16">

        <h2 className="text-xl font-semibold mb-8">
          Life on the road, beautifully set up
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <img src={rv} className="rounded-md w-full" />

          <img src={couple} className="rounded-md w-full" />

        </div>

      </section>

    </div>
  );
};

export default About;