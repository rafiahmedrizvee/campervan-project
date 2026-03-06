import chair from "../../assets/images/landing page picture/chair.png"
import wheel from "../../assets/images/landing page picture/wheel.png"
import portable from "../../assets/images/landing page picture/portable.png"
import land from "../../assets/images/landing page picture/land.png"
import multi from "../../assets/images/landing page picture/multi-lamp.png"
import card from "../../assets/images/landing page picture/card.png"


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
    <div className="max-w-[1440px] mx-auto px-6 py-12">

      {/* Heading */}
      <div className="mb-10">
        <p className="text-green-600 font-medium">Our Collection</p>
        <h2 className="text-3xl font-bold">
          Best Selling <span className="italic">Van Products</span>
        </h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">

            <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center h-[220px]">
              <img
                src={product.image}
                alt={product.name}
                className="h-full object-contain group-hover:scale-105 transition"
              />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium">{product.name}</h3>

              <p className="text-gray-500 text-sm">{product.brand}</p>

              <div className="flex gap-2 items-center mt-1">
                <span className="font-semibold">{product.price}</span>

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

      {/* View All */}
      <div className="flex justify-end mt-10">
        <button className="flex items-center gap-2 text-sm font-medium hover:text-green-600">
          View All Products →
        </button>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 border-t pt-10">

        <div>
          <h4 className="font-semibold">7 Days Returns</h4>
          <p className="text-sm text-gray-500">
            We make exchanging and returning simple.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Superb Quality</h4>
          <p className="text-sm text-gray-500">
            Our commitment is always the best quality.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Free Delivery</h4>
          <p className="text-sm text-gray-500">
            Free next day delivery over £50.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Free Shipping</h4>
          <p className="text-sm text-gray-500">
            Orders over €50 delivered within Europe.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Collection;