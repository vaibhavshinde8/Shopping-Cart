import React, { useState } from 'react';

const CartModal = ({ product, onClose, setIsCartOpen, isVisible }) => {
 
  const [isAgreed, setIsAgreed] = useState(false);

  
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  
  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${
        isVisible ? '' : 'hidden'
      }`}
      onClick={onClose}
    >
      <div
        onClick={handleModalContentClick}
        className="bg-white rounded-lg p-4 max-w-2xl w-full relative flex"
      >
        
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 text-2xl"
        >
          &times;
        </button>

        
        <div className="w-1/2 flex flex-col items-start p-4 border-r border-gray-200">
          {product && (
            <>
              <h2 className="text-lg font-bold text-red-600">
                Added to cart successfully!
              </h2>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-40 h-40 object-contain rounded-md my-3"
              />
              <p className="text-xs font-semibold mt-1">
                {product.name} - {product.selectedColor} / {product.selectedSize}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                <span className="font-semibold">Price:</span> Rs. {product.price.toFixed(2)}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                <span className="font-semibold">QTY:</span> {product.quantity}
              </p>
              <p className="text-xs font-semibold mt-1">
                CART TOTALS: Rs. {product.total.toFixed(2)}
              </p>
            </>
          )}
        </div>

        
        <div className="w-1/2 flex flex-col justify-between p-4">
          {product && (
            <>
              <div className="text-sm font-medium">
                <p className="text-gray-600">
                  There are {product.quantity} items in your cart
                </p>
                <p className="text-gray-600 font-semibold">
                  CART TOTALS: Rs. {product.total.toFixed(2)}
                </p>
              </div>

              
              <div className=" space-y-2">
             
                <button
                  onClick={onClose}
                  className="w-full py-3 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
                >
                  Continue shopping
                </button>

                <button
                  onClick={() => {
                    setIsCartOpen(true);
                    onClose();
                  }}
                  className="w-full py-3 bg-[#683433] text-white rounded-md hover:bg-black transition-colors"
                >
                  Go to cart
                </button>
              </div>

              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={isAgreed}
                  onChange={handleCheckboxChange}
                />
                <span className="text-xs text-gray-500">
                  Agree with terms and conditions
                </span>
              </div>


              <button
                onClick={() => {
                  setIsCartOpen(false);
                  onClose();
                }}
                disabled={!isAgreed}
                className={`w-full py-3 text-white rounded-md mt-2 transition-colors ${
                  isAgreed ? 'bg-[#683433] hover:bg-[#683433]' : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Proceed to checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
