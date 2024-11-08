import React from "react";

const CartDrawer = ({ cartItems, onClose }) => (
  <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 overflow-y-auto z-50">
    <button onClick={onClose} className="text-lg font-bold mb-4">
      X
    </button>
    <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      cartItems.map((item, index) => (
        <div key={index} className="mb-4 border-b pb-4">
          <h3 className="text-md font-semibold">{item.name}</h3>
          <p className="text-gray-600">Rs. {item.price}</p>
        </div>
      ))
    )}
    <button className="w-full bg-green-600 text-white py-2 rounded mt-4">
      Proceed to Checkout
    </button>
  </div>
);

export default CartDrawer;
