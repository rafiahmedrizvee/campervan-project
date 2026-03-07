import chair from "../../assets/images/landing page picture/chair.png";
import wheel from "../../assets/images/landing page picture/wheel.png";
import portable from "../../assets/images/landing page picture/portable.png";
import land from "../../assets/images/landing page picture/land.png";
import multi from "../../assets/images/landing page picture/multi-lamp.png";
import card from "../../assets/images/landing page picture/card.png";

const products = [
  {
    id: 1,
    name: "Sunset folding chair - Forest Green",
    brand: "Helinox",
    price: "€89,90",
    oldPrice: "€99,90",
    image: chair,
  },
  {
    id: 2,
    name: "Wheel chocks and storage bag",
    brand: "Thule",
    price: "€204,80",
    image: wheel,
  },
  {
    id: 3,
    name: "Stopovers & Debates Card Game",
    brand: "Bivvy Loo",
    price: "€73,00",
    image: card,
  },
  {
    id: 4,
    name: "Pixapresso Pack - Portable Electric",
    brand: "Wacaco",
    price: "€204,80",
    image: portable,
  },
  {
    id: 5,
    name: "Clipsy Lantern (set of 2)",
    brand: "Lovolk",
    price: "€73,00",
    image: land,
  },
  {
    id: 6,
    name: "Multifunction lamp - 7 in 1 camper",
    brand: "Lovork",
    price: "€149,00",
    image: multi,
  },
];

const Collection = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-16">

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

        <button className="hidden md:flex items-center gap-2 text-sm font-semibold border border-gray-300 px-5 py-2 rounded-full hover:bg-green-600 hover:text-white hover:border-green-600 transition">
          View All Products →
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 p-5 group"
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

          </div>
        ))}

      </div>

      {/* Mobile Button */}
      <div className="flex justify-center mt-12 md:hidden">
        <button className="text-sm font-semibold border border-gray-300 px-6 py-3 rounded-full hover:bg-green-600 hover:text-white hover:border-green-600 transition">
          View All Products →
        </button>
      </div>

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