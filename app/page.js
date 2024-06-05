// app/page.js
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Product from './components/Product';
import HorizontalScroll from './components/HorizontalScroll';
import { products } from './products';

const HomePage = () => {
  const router = useRouter();

  const handleProductClick = (productId) => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className="bg-slate-700 p-4">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <Product {...products[0]} onClick={() => handleProductClick(products[0].id)} />
        </div>
        <div className="lg:flex lg:flex-col lg:space-y-4">
          <Product {...products[1]} onClick={() => handleProductClick(products[1].id)} />
          <Product {...products[2]} onClick={() => handleProductClick(products[2].id)} />
        </div>
      </div>
      <HorizontalScroll products={products.slice(3)} />
    </div>
  );
};

export default HomePage;
