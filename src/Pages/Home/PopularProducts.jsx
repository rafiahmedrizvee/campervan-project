import { Heart, ShoppingBag, Star } from "lucide-react";

import huricans from "../../assets/images/landing page picture/hurricans.png";
import baker from "../../assets/images/landing page picture/roadbaker.png";
import sound from "../../assets/images/landing page picture/sound.png";
import stover from "../../assets/images/landing page picture/stover.png";
import clipsi from "../../assets/images/landing page picture/clipsi.png";
import bank from "../../assets/images/landing page picture/bank.png";
import sound2 from "../../assets/images/landing page picture/sound2.png";
import lamp from "../../assets/images/landing page picture/lamp.png";

const products = [
  {
    id: 1,
    name: "Hurricane Evolution+ Lantern",
    brand: "Lovork",
    price: 73,
    image: huricans,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Road Baker Camping Oven",
    brand: "Lovork",
    price: 89.9,
    oldPrice: 99.9,
    discount: "15% Off",
    image: baker,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Pixapresso Pack - Portable Electric",
    brand: "Wacaco",
    price: 204.8,
    image: sound,
    rating: 4.5,
  },
  {
    id: 4,
    name: "Stopovers & Debates Card Game",
    brand: "Aventura Edition",
    price: 12.9,
    image: stover,
    rating: 4.5,
  },
  {
    id: 5,
    name: "Clipsy Lantern (set of 2)",
    brand: "Lovork",
    price: 37,
    image: clipsi,
    rating: 4.5,
  },
  {
    id: 6,
    name: "Magnetic Power Bank 10000mAh",
    brand: "EcoFlow",
    price: 89.9,
    image: bank,
    rating: 4.5,
  },
  {
    id: 7,
    name: "Pixapresso - Portable Electric",
    brand: "Wacaco",
    price: 169.9,
    oldPrice: 199.9,
    discount: "13% Off",
    image: sound2,
    rating: 4.5,
  },
  {
    id: 8,
    name: "Multifunction lamp - 7 in 1 camper",
    brand: "Lovork",
    price: 149,
    image: lamp,
    rating: 4.5,
  },
];

const PopularProducts = () => {
  return (
    <section className="products-section">
      <div className="products-header">
        <div>
          <p className="collection-text">Our Collection</p>
          <h2>
            Popular Camper <span>Van Products</span>
          </h2>
        </div>
        <a href="#" className="view-all">
          View All Products →
        </a>
      </div>

      <div className="products  md:grid grid-cols-4 md:gap-5 ">
        {products.map((product) => (
          <div className="product-card w-full mt-2" key={product.id}>
            {product.discount && (
              <span className="discount-badge">{product.discount}</span>
            )}

            <button className="wishlist-btn">
              <Heart size={18} />
            </button>

            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            {/* ⭐ Rating Section */}
            <div className="rating">
              {[...Array(5)].map((_, i) => {
                const isFilled = i < Math.round(product.rating);
                return (
                  <Star
                    key={i}
                    size={14}
                    fill={isFilled ? "#4A4A4A" : "none"}
                    stroke="#4A4A4A"
                    strokeWidth={1.5}
                  />
                );
              })}
              <span>({product.rating})</span>
            </div>

            <h4>{product.name}</h4>
            <p className="brand">{product.brand}</p>

            <div className="price-row">
              <div>
                <span className="price">
                  €{product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="old-price">
                    €{product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <button className="cart-btn">
                <ShoppingBag size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="see-more">
        <a href="#">See More Products (12) ↓</a>
      </div>
    </section>
  );
};

export default PopularProducts;