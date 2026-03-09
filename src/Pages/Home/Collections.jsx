import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import products from "../data/products";
import { Link } from "react-router-dom";

const Collection = () => {
  const sectionRef = useRef(null);

  // number of products shown
  const [visibleProducts, setVisibleProducts] = useState(16);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".product-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 80,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      }
    );
  }, [visibleProducts]);

  // show more products
  const handleSeeMore = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div ref={sectionRef} className="max-w-[1440px] mx-auto px-6 py-16">
      
      {/* Heading */}
      <div className="mb-12 flex justify-between items-end">
        <div>
          <p className="text-green-600 font-semibold tracking-wide uppercase text-sm">
            Our Collection
          </p>
          <h2 className="text-4xl font-bold">
            Best Selling <span className="italic text-green-600">Van Products</span>
          </h2>
        </div>

      <Link to="/shop" >
        <button className="hidden md:flex items-center gap-2 text-sm font-semibold border border-gray-300 px-5 py-2 rounded-full hover:bg-green-600 hover:text-white hover:border-green-600 transition">
          View All Products →
        </button></Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.slice(8, visibleProducts).map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-card group bg-white border rounded-2xl p-4 transition duration-300 hover:shadow-xl hover:-translate-y-2"
          > <div
            key={product.id}
            className="product-card bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 p-5 group"
          >

            {/* Image */}
            <div className="relative bg-gray-100 rounded-xl h-[220px] flex items-center justify-center overflow-hidden">

              {product.oldPrice && (
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-md">
                  SALE
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="h-full object-contain group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Info */}
            <div className="mt-5">

              <p className="text-xs text-gray-400 uppercase tracking-wide">
                {product.brand}
              </p>

              <h3 className="text-sm font-semibold mt-1 group-hover:text-green-600 transition">
                {product.name}
              </h3>

              {/* Price */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-lg font-bold text-gray-900">
                  {product.price}
                </span>

                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>

          </div></Link>
        ))}

      </div>

      {/* See More Button */}
      {visibleProducts < products.length && (
        <div className="flex justify-center mt-12">
          <button
            onClick={handleSeeMore}
            className="text-sm font-semibold border border-gray-300 px-6 py-3 rounded-full hover:bg-green-600 hover:text-white hover:border-green-600 transition"
          >
            See More Products
          </button>
        </div>
      )}

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 border-t pt-12 text-center">

        <div>
          <h4 className="font-semibold text-lg">7 Days Returns</h4>
          <p className="text-sm text-gray-500 mt-1">
            We make exchanging and returning simple.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">Superb Quality</h4>
          <p className="text-sm text-gray-500 mt-1">
            Our commitment is always the best quality.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">Free Delivery</h4>
          <p className="text-sm text-gray-500 mt-1">
            Free next day delivery over £50.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg">Free Shipping</h4>
          <p className="text-sm text-gray-500 mt-1">
            Orders over €50 delivered within Europe.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Collection;