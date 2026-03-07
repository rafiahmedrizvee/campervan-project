import { useContext } from "react";

import { FaTimes } from "react-icons/fa";
import { CartContext } from "../cart/CartContext";

export default function CartDrawer() {

  const { cart, subtotal, showPopup, setShowPopup } = useContext(CartContext);

  return (
    <>
      {/* Overlay */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setShowPopup(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[350px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          showPopup ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>

          <FaTimes
            className="cursor-pointer"
            onClick={() => setShowPopup(false)}
          />
        </div>

        {/* Cart Items */}
        <div className="p-5 flex flex-col gap-4 overflow-y-auto h-[70%]">

          {cart.length === 0 && (
            <p className="text-gray-500">Your cart is empty</p>
          )}

          {cart.map((item, index) => (
            <div key={index} className="flex gap-4 border-b pb-4">

              <img
                src={item.image}
                className="w-[60px] h-[60px] object-contain"
              />

              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>

            </div>
          ))}

        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-5 border-t bg-white">

          <div className="flex justify-between mb-4 font-semibold">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>

          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
            Checkout
          </button>

        </div>

      </div>
    </>
  );
}