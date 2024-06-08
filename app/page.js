// app/page.js
"use client";

import React, { useState } from 'react';
import Product from './components/Product';
import { products } from './products';
import ProductDetails from './components/ProductDetails';
import HorizontalScroll from './components/HorizontalScroll';

const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="bg-slate-700 min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>

      {/* Conditional Rendering of Product Details */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
        {selectedProduct ? (
          <ProductDetails product={selectedProduct} />
        ) : (
          <>
            <div className="lg:col-span-2">
              <Product {...products[0]} onProductClick={handleProductClick} />
            </div>
            <div className="lg:flex lg:flex-col lg:space-y-4">
              <Product {...products[1]} onProductClick={handleProductClick} />
              <Product {...products[2]} onProductClick={handleProductClick} />
            </div>
          </>
        )}
      </div>

      {/* Related Products Section */}
      <HorizontalScroll products={products.slice(3)} onProductClick={handleProductClick} />
    </div>
  );
};

export default HomePage;
