// app/components/HorizontalScroll.js
"use client";

import React, { useEffect, useRef, useState } from 'react';
import Product from './Product';

const HorizontalScroll = ({ products, onProductClick }) => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;

    const autoScroll = () => {
      if (container && !isPaused) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
    };

    const scrollInterval = setInterval(autoScroll, 10);

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div
        ref={scrollContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex space-x-4 overflow-x-auto scrollbar-hide p-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {products.map((product) => (
          <div key={product.id} style={{ scrollSnapAlign: 'start' }}>
            <Product {...product} fixedSize onProductClick={onProductClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
