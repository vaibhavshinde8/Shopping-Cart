import React, { useState, useEffect } from 'react';
import CartModal from './CartModal';
import Shimmer from './Shimmer';

const ProductDetails = ({ onAddToCart }) => {
  const productImageUrl = "https://viharrni.com/cdn/shop/files/DSC02571F.webp?v=1721390910";

  const [selectedColor, setSelectedColor] = useState("Pink Ombre");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Simulate loading time
    }, 2000); // Adjust duration as needed
  }, []);

  const handleColorChange = (event) => setSelectedColor(event.target.value);
  const handleSizeChange = (event) => setSelectedSize(event.target.value);
  const handleQuantityChange = (delta) => setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));

  const handleAddToCart = () => {
    const product = {
      name: "Pink Ombre Satin Modal Kurti",
      price: 2650.0,
      imageUrl: productImageUrl,
      quantity: quantity,
      total: quantity * 2650.0,
      selectedColor: selectedColor,
      selectedSize: selectedSize,
    };

    setProduct(product);
    onAddToCart(product);
    setIsCartModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col md:flex-row p-4 md:p-10 space-y-4 md:space-y-0 animate-pulse">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-xs md:max-w-md rounded-md shadow-lg bg-gray-200 h-64"></div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col p-4 space-y-4">
          <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
          <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
          <div className="h-4 w-full bg-gray-200 rounded my-2"></div>
          <div className="h-4 w-full bg-gray-200 rounded my-2"></div>
          <div className="h-4 w-full bg-gray-200 rounded my-2"></div>

          <div className="flex space-x-2 mt-4">
            <Shimmer className="w-16 h-8 rounded-md" />
            <Shimmer className="w-16 h-8 rounded-md" />
            <Shimmer className="w-16 h-8 rounded-md" />
          </div>

          <div className="flex space-x-2 mt-4">
            <Shimmer className="w-10 h-8 rounded-md" />
            <Shimmer className="w-10 h-8 rounded-md" />
            <Shimmer className="w-10 h-8 rounded-md" />
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center border rounded">
              <Shimmer className="px-2 py-1 border-r w-8 h-8" />
              <Shimmer className="px-4 w-8 h-8" />
              <Shimmer className="px-2 py-1 border-l w-8 h-8" />
            </div>
            <Shimmer className="w-full sm:w-32 h-10 rounded-md bg-gray-200" />
          </div>
          <Shimmer className="w-full sm:w-auto lg:w-[390px] h-10 rounded-md bg-gray-200 mt-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-10 space-y-4 md:space-y-0">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={productImageUrl}
          alt="Pink Ombre Satin Modal Kurti"
          className="w-full max-w-xs md:max-w-md rounded-md shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col p-4 space-y-4">
        <h1 className="text-lg md:text-xl font-semibold">Pink Ombre Satin Modal Kurti</h1>
        <p className="text-lg md:text-xl text-gray-700 font-semibold">Rs. 2,650.00</p>
        <hr />

        <p className="text-sm md:text-base text-gray-600">
          Detailed Product Description: Fabric: Satin Rayon. Color: Pink Ombre. The transition from
          light to dark shades of pink creates a gradient effect that is both eye-catching and
          sophisticated, suitable for various occasions. Design: Front Panel: Dense Ghaas Patti
          Chikankari work, showcasing intricate patterns.
        </p>

        <div>
          <span className="font-semibold inline-block border-b-2 border-gray-300 pb-1">Color:</span>
          <div className="flex space-x-2 mt-2">
            {["Pink Ombre", "Rust", "Purple"].map((color) => (
              <label key={color} className="flex items-center space-x-1">
                <input
                  type="radio"
                  value={color}
                  checked={selectedColor === color}
                  onChange={handleColorChange}
                  className="focus:outline-none"
                />
                <span>{color}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <span className="font-semibold inline-block border-b-2 border-gray-300 pb-1">Size:</span>
          <div className="flex space-x-2 mt-2">
            {["M", "L", "XL", "XXL"].map((size) => (
              <label key={size} className="flex items-center space-x-1">
                <input
                  type="radio"
                  value={size}
                  checked={selectedSize === size}
                  onChange={handleSizeChange}
                  className="focus:outline-none"
                />
                <span>{size}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-center mt-4 space-x-4">
          <div className="flex items-center border rounded">
            <button onClick={() => handleQuantityChange(-1)} className="px-2 py-1 border-r">
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button onClick={() => handleQuantityChange(1)} className="px-2 py-1 border-l">
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-[#683433] text-white py-2 px-4 sm:px-8 rounded-md hover:bg-[#cc680a] transition-colors w-full sm:w-auto md:px-24"
          >
            Add to Cart
          </button>
        </div>

        <button
          className="bg-[#683433] text-white py-2 px-4 mt-4 rounded-md hover:bg-[#cc680a] w-full sm:w-auto lg:w-[390px]"
        >
          Order Now - Cash on Delivery
        </button>

        {isCartModalOpen && product && (
          <CartModal product={product} onClose={() => setIsCartModalOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
