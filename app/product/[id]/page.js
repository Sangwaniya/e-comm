// app/product/[id]/page.js
// Use this when rounting is in play
"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { products } from '../../products';
import HorizontalScroll from '../../components/HorizontalScroll'

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      alert(`Added ${product.name} (Size: ${selectedSize}) to cart.`);
    }
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="bg-slate-700 min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <div className="flex bg-black">
        <div className="w-2/3">
          <img src={currentImage} alt={product.name} className="w-full h-auto rounded-lg mb-4" />
          <div className="flex space-x-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${currentImage === image ? 'border-2 border-blue-600' : ''}`}
                onClick={() => setCurrentImage(image)}
              />
            ))}
          </div>
        </div>
        <div className="w-1/3 pl-8">
          <div className="bg-black p-4 rounded-lg">
            <p className="text-2xl font-bold text-blue-500 mb-4">₹ {product.price}</p>
            <div className="mb-4">
              <p className="text-lg font-bold mb-2">SIZE</p>
              <div className="flex space-x-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((size) => (
                  <button
                    key={size}
                    className={`px-2 py-1 rounded-full ${selectedSize === size ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400'}`}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <p className="mb-4">{product.description}</p>
            <button
              className={`w-full py-2 px-4 rounded-full ${selectedSize ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}
              onClick={handleAddToCart}
              disabled={!selectedSize}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <HorizontalScroll products={products.slice(3)} />
    </div>
  );
};

export default ProductPage;
