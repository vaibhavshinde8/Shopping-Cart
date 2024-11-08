import React, { useState } from "react";

const CartButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed top-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg"
  >
    🛒
  </button>
);

const Cart = ({ items, closeCart }) => (
  <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg w-96">
      <button onClick={closeCart} className="text-xl absolute top-2 right-2">X</button>
      <h2 className="text-xl font-bold">Your Cart</h2>
      <ul>
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index} className="border-b py-2">
              <span>{item.name} - ${item.price}</span>
            </li>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ul>
    </div>
  </div>
);

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 15 },
    { name: "Item 3", price: 20 },
  ]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      <CartButton onClick={toggleCart} />
      {isCartOpen && <Cart items={cartItems} closeCart={closeCart} />}
      
      <div className="p-4">
        <h2 className="text-xl font-bold">Products</h2>
        <div className="flex space-x-4">
          {products.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <h3 className="font-bold">{product.name}</h3>
              <p>${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white p-2 mt-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
