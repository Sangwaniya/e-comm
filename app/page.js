// app/page.js
"use client";

import React, { useState } from 'react';
import Product from './components/Product';
import { products } from './products';
import ProductDetails from './components/ProductDetails';
import HorizontalScroll from './components/HorizontalScroll';
import CartSidebar from './components/CartSidebar';
import Header from './Header';


const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const addToCart = (product, size) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.size === size
    );
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, size, quantity: 1, image: product.images[0] },
      ]);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <Header cartCount={cartItems.length} toggleCart={toggleCart} />
    <div className="bg-slate-700 min-h-screen text-white p-8">
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} addToCart={addToCart} />
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-8">Our Products</h1>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <Product {...products[0]} onProductClick={handleProductClick} />
            </div>
            <div className="lg:flex lg:flex-col lg:space-y-4">
              <Product {...products[1]} onProductClick={handleProductClick} />
              <Product {...products[2]} onProductClick={handleProductClick} />
            </div>
          </div>
        </>
      )}
      <HorizontalScroll products={products.slice(3)} onProductClick={handleProductClick} />
      <CartSidebar cartItems={cartItems} setCartItems={setCartItems} isOpen={isCartOpen} toggleCart={toggleCart} />
    </div>
    </>
  );
};

export default HomePage;
