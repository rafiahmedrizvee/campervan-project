import { useContext } from "react";
import { CartContext } from "./CartContext";


export default function CartPopup() {

  const { cart, subtotal, showPopup } = useContext(CartContext);

  if (!showPopup) return null;

  return (

    <div className="fixed top-5 right-5 bg-white shadow-lg p-5 rounded-lg w-[300px]">

      <h2 className="font-semibold mb-3">
        Item Added To Cart
      </h2>

      <p>Total Items: {cart.length}</p>

      <p className="font-semibold">
        Subtotal: ${subtotal}
      </p>

    </div>
  );
}