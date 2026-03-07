import { Link, useLocation } from "react-router-dom";
import { FaCheckCircle, FaDownload, FaArrowLeft } from "react-icons/fa";

export default function OrderSuccess() {

  const location = useLocation();
  const order = location.state || {};

  const cart = order.cart || [];
  const subtotal = order.subtotal || 0;
  const deliveryFee = order.deliveryFee || 5;
  const total = order.total || 0;
  const email = order.email || "user@gmail.com";

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-10">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        Home &gt; Shop &gt; Cart &gt; Checkout &gt;
        <span className="text-black font-medium"> Order Details</span>
      </div>

      {/* Success Message */}
      <div className="text-center mb-10">

        <FaCheckCircle className="text-green-600 text-6xl mx-auto mb-4" />

        <h1 className="text-2xl font-semibold mb-2">
          Thank you, your order was placed successfully
        </h1>

        <p className="text-gray-500 text-sm">
          We will send updates about your order to <br />
          <span className="font-medium">{email}</span>
        </p>

        <div className="flex justify-center gap-4 mt-6">

          <Link
            to="/shop"
            className="flex items-center gap-2 border border-green-600 text-green-600 px-5 py-2 rounded hover:bg-green-50"
          >
            <FaArrowLeft /> Back to Shop
          </Link>

          <button className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
            Download Receipt <FaDownload />
          </button>

        </div>
      </div>

      {/* Order Details */}
      <div className="border rounded-lg p-6">

        <h2 className="font-semibold mb-4">Order Details</h2>

        <div className="grid grid-cols-5 text-sm text-gray-500 border-b pb-2 mb-4">
          <span className="col-span-2">Products</span>
          <span>Qty</span>
          <span>SKU</span>
          <span>Price</span>
        </div>

        {cart.map((item, i) => (

          <div
            key={i}
            className="grid grid-cols-5 items-center gap-4 border-b pb-4 mb-4"
          >

            <div className="flex items-center gap-4 col-span-2">

              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />

              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">{item.brand}</p>
              </div>

            </div>

            <p>1</p>
            <p>#{1000 + i}</p>
            <p>${item.price}</p>

          </div>

        ))}

        {/* Price Summary */}
        <div className="mt-6 border-t pt-4 text-sm space-y-2">

          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>${deliveryFee}</span>
          </div>

          <div className="flex justify-between font-semibold text-base pt-2 border-t">
            <span>Total</span>
            <span>${total}</span>
          </div>

        </div>

      </div>

    </div>
  );
}