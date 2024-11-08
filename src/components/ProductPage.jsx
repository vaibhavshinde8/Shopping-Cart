import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import CartButton from "./CartButton";
import CartDrawer from "./CartDrawer";
import CartModal from "./CartModal";

const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showCartDrawer, setShowCartDrawer] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setShowCartModal(true);
  };

  return (
    <div className="p-4">
      <ProductDetails onAddToCart={handleAddToCart} />
      <CartButton onClick={() => setShowCartDrawer(true)} />

      {showCartModal && <CartModal onClose={() => setShowCartModal(false)} />}
      {showCartDrawer && (
        <CartDrawer
          cartItems={cartItems}
          onClose={() => setShowCartDrawer(false)}
        />
      )}
    </div>
  );
};

export default ProductPage;
