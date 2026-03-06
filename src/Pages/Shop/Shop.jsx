import { Link } from "react-router-dom";
import products from "../data/products";

export default function Shop() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 py-10">

      <h1 className="text-2xl font-semibold mb-10">
        Shop All Camper Van Products
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((product) => (

          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="border rounded-xl p-4 hover:shadow-md"
          >

            <div className="h-[200px] flex items-center justify-center">
              <img
                src={product.image}
                className="h-[160px] object-contain"
              />
            </div>

            <p className="text-sm text-gray-500">{product.brand}</p>

            <h3 className="font-medium text-sm mt-2">
              {product.name}
            </h3>

            <p className="font-semibold mt-1">{product.price}</p>

          </Link>

        ))}
      </div>
    </div>
  );
}