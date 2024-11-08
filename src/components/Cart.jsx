import React from 'react';
import { XIcon, TrashIcon } from '@heroicons/react/solid'; 

const Cart = ({ cartItems, onClose, onDeleteItem }) => {

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-end z-50">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white h-full shadow-lg flex flex-col">
    
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-lg"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

   
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-md"
                  />
                  <div className="ml-4">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-gray-600">Color: {item.selectedColor}</p>
                    <p className="text-xs text-gray-600">Size: {item.selectedSize}</p>
                    <p className="text-xs text-gray-600">Price: Rs. {item.price}</p>
                    <p className="text-xs text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => onDeleteItem(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No items in the cart.</p>
          )}
        </div>

       
        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <p className="text-lg font-semibold text-gray-800">Total: Rs. {totalAmount}</p>
          </div>
          <button
            onClick={onClose}
            className="w-full py-2 bg-[#683433] text-white rounded-md hover:bg-black transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
