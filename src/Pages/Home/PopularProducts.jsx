import { Heart, ShoppingBag, Star } from "lucide-react";
import products from "../data/products";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PopularProducts = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 bg-gray-50">

      {/* Header */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-widest">
            Our Collection
          </p>

          <h2 className="text-3xl font-bold">
            Popular Camper <span className="text-green-600">Van Products</span>
          </h2>
        </div>

        <a
          href="#"
          className="text-green-600 font-medium hover:underline"
        >
          View All Products →
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((product) => (

          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-card group bg-white border rounded-2xl p-4 transition duration-300 hover:shadow-xl hover:-translate-y-2"
          >

            {/* Image */}
            <div className="relative h-[200px] flex items-center justify-center overflow-hidden">

              <img
                src={product.image}
                alt={product.name}
                className="h-[160px] object-contain transition-transform duration-500 group-hover:scale-110"
              />

              {/* Wishlist Button */}
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:text-red-500 transition">
                <Heart size={16} />
              </button>

            </div>

            {/* Brand */}
            <p className="text-xs text-gray-400 mt-2">
              {product.brand}
            </p>

            {/* Name */}
            <h3 className="font-semibold text-sm mt-1 line-clamp-2">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Price + Cart */}
            <div className="flex items-center justify-between mt-3">

              <div className="flex items-center gap-2">
                <p className="font-bold text-lg">
                  ${product.price}
                </p>

                {product.oldPrice && (
                  <p className="text-sm text-gray-400 line-through">
                    ${product.oldPrice}
                  </p>
                )}
              </div>

              <button className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition">
                <ShoppingBag size={16} />
              </button>

            </div>

          </Link>

        ))}

      </div>

      {/* See More */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 border rounded-full hover:bg-black hover:text-white transition">
          See More Products ↓
        </button>
      </div>

    </section>
  );
};

export default PopularProducts;