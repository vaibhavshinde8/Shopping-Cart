import React, { useState } from "react";

const QuantitySelector = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      <button
        onClick={handleDecrease}
        className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-300"
      >
        -
      </button>
      <span className="text-lg font-semibold">{quantity}</span>
      <button
        onClick={handleIncrease}
        className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-300"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
