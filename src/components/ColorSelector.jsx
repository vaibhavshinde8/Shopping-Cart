import React from "react";

const ColorSelector = () => {
  const colors = ["Pink", "Rust", "Purple"];
  return (
    <div className="flex gap-2 mt-2">
      {colors.map((color) => (
        <button
          key={color}
          className="w-8 h-8 rounded-full border border-gray-400 bg-gray-200 hover:bg-gray-300"
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorSelector;
