import { useContext } from "react";
import { CartContext } from "../../cart/CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {

  const { cart, subtotal } = useContext(CartContext);
  const navigate = useNavigate();

  const deliveryFee = 5;
  const total = subtotal + deliveryFee;

  const handleConfirmOrder = () => {
    navigate("/order", {
      state: {
        cart,
        subtotal,
        deliveryFee,
        total,
        email: "user@gmail.com",
      },
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10">

      {/* Breadcrumb */}
      <p className="text-gray-400 text-sm mb-6">
        Home &gt; Shop &gt; Cart &gt; <span className="text-black">Checkout</span>
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 flex flex-col gap-8">

          {/* Billing Address */}
          <div className="border rounded-lg p-6">
            <h2 className="font-semibold text-lg mb-4">Billing Address</h2>

            <div className="grid grid-cols-2 gap-4">
              <input placeholder="First Name" className="input" />
              <input placeholder="Last Name" className="input" />
              <input placeholder="Email Address" className="input" />
              <input placeholder="Phone Number" className="input" />

              <select className="input">
                <option>Country</option>
              </select>

              <select className="input">
                <option>District</option>
              </select>

              <select className="input">
                <option>City</option>
              </select>

              <input placeholder="Zip Code" className="input" />

              <input
                placeholder="Street Address"
                className="input col-span-2"
              />
            </div>
          </div>

          {/* Payment */}
          <div className="border rounded-lg p-6">
            <h2 className="font-semibold text-lg mb-4">Payment</h2>

            <div className="flex flex-col gap-4">
              <label className="flex gap-2 items-center">
                <input type="radio" name="payment" />
                Cash On Delivery
              </label>

              <label className="flex gap-2 items-center">
                <input type="radio" name="payment" defaultChecked />
                Pay with Card
              </label>

              <input placeholder="Card Number" className="input" />

              <div className="grid grid-cols-2 gap-4">
                <input placeholder="CVV" className="input" />
                <input placeholder="MM/YY" className="input" />
              </div>

              <input placeholder="Name on Card" className="input" />

              <label className="flex gap-2 items-center">
                <input type="radio" name="payment" />
                PayPal
              </label>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="border rounded-lg p-6 h-fit">

          <h2 className="text-lg font-semibold mb-4">
            Order Summary
          </h2>

          {/* Products */}
          {cart.map((item, i) => (
            <div key={i} className="flex gap-3 mb-4">

              <img
                src={item.image}
                alt={item.name}
                className="w-[60px] h-[60px] object-contain"
              />

              <div className="flex-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-gray-400 text-xs">{item.brand}</p>
              </div>

              <p className="font-semibold">${item.price}</p>

            </div>
          ))}

          {/* Totals */}
          <div className="border-t pt-4 space-y-2 text-sm">

            <div className="flex justify-between">
              <span>Sub Total</span>
              <span>${subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee}</span>
            </div>

            <div className="flex justify-between font-semibold text-lg pt-2">
              <span>Total</span>
              <span>${total}</span>
            </div>

          </div>

          <button
            onClick={handleConfirmOrder}
            className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
          >
            Confirm Order →
          </button>

        </div>

      </div>
    </div>
  );
}