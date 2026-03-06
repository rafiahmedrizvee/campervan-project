import { useParams } from "react-router-dom";
import products from "../Pages/data/products";


export default function ProductDetails() {

  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12">

      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-8">
        Home › Shop › {product.name}
      </p>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Product Image */}
        <div>

          <div className="bg-gray-100 rounded-xl p-10">
            <img
              src={product.image}
              className="w-full object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-6">
            <img src={product.image} className="w-20 border rounded"/>
            <img src={product.image} className="w-20 border rounded"/>
            <img src={product.image} className="w-20 border rounded"/>
          </div>

        </div>

        {/* Product Info */}
        <div>

          <p className="text-sm text-gray-500">
            By {product.brand}
          </p>

          <h1 className="text-2xl font-semibold mt-2">
            {product.name}
          </h1>

          <p className="text-2xl font-bold mt-4">
            {product.price} EUR
          </p>

          {/* Color Options */}
          <div className="mt-6">

            <p className="text-sm mb-2">Available Color:</p>

            <div className="flex gap-3">
              {product?.colors?.map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-8">

            <div className="flex border rounded">

              <button className="px-3 py-1">-</button>

              <span className="px-4 py-1">1</span>

              <button className="px-3 py-1">+</button>

            </div>

            <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
              Add to Cart
            </button>

          </div>

          {/* Product Description */}
          <div className="mt-10">

            <h3 className="font-semibold mb-3">
              Product Information
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}