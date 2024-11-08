import React, { useState } from "react";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import CartModal from "./components/CartModal";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setIsModalOpen(true);
  };

  const handleDeleteItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const closeCartModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen p-4">
      <header className="flex justify-end p-4">
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="relative bg-gray-800 text-white p-2 rounded-full"
        >
          🛒
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>
      </header>

      <ProductDetails onAddToCart={handleAddToCart} />

      <CartModal
        product={cartItems[cartItems.length - 1]}
        onClose={closeCartModal}
        setIsCartOpen={setIsCartOpen}
        isVisible={isModalOpen}
      />

      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          onClose={() => setIsCartOpen(false)}
          onDeleteItem={handleDeleteItem}
        />
      )}
    </div>
  );
};

export default App;
