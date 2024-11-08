import React from "react";

const SizeSelector = () => {
  const sizes = ["M", "L", "XL", "XXL"];
  return (
    <div className="flex gap-2 mt-2">
      {sizes.map((size) => (
        <button
          key={size}
          className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-300"
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
