// app/components/HorizontalScroll.js
"use client";

import React, { useEffect, useRef } from 'react';
import Product from './Product';

const HorizontalScroll = ({ products }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (container) {
        scrollAmount += 2; // Adjust the scroll speed as needed
        container.scrollLeft = scrollAmount;
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0; // Reset scroll to start
        }
      }
    };

    const scrollInterval = setInterval(autoScroll, 50); // Adjust the interval speed as needed

    return () => clearInterval(scrollInterval);
  }, []);

  const handleScroll = (event) => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft += event.deltaY;
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div
        ref={scrollContainerRef}
        onWheel={handleScroll}
        className="flex space-x-4 overflow-x-auto scrollbar-hide p-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {products.map(product => (
          <div key={product.id} style={{ scrollSnapAlign: 'start' }}>
            <Product {...product} fixedSize />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
