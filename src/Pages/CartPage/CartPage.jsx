import { useContext } from "react";
import { CartContext } from "../../cart/CartContext";
import { Link } from "react-router-dom";


export default function CartPage() {

  const { cart, subtotal, removeFromCart } = useContext(CartContext);

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10">

      <h1 className="text-2xl font-semibold mb-8">
        Your Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (

        <div className="grid md:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="md:col-span-2 flex flex-col gap-6">

            {cart.map((item, index) => (

              <div
                key={index}
                className="flex gap-4 border p-4 rounded-lg"
              >

                <img
                  src={item.image}
                  className="w-[80px] h-[80px] object-contain"
                />

                <div className="flex-1">

                  <h3 className="font-medium">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.brand}
                  </p>

                  <p className="font-semibold">
                    ${item.price}
                  </p>

                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          {/* Summary */}
          <div className="border p-6 rounded-lg h-fit">

            <h2 className="text-lg font-semibold mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between font-semibold text-lg mb-6">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

           <Link to="/checkout" >
            <button className="w-full bg-green-600 text-white py-3 rounded-lg">
              Checkout
            </button>

           </Link>
          </div>

        </div>

      )}

    </div>
  );
}

