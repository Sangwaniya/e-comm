// app/components/ProductDetails.js
"use client";

import React, { useState, useEffect } from 'react';

const ProductDetails = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    if (product && product.images.length > 0) {
      setCurrentImage(product.images[0]);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (selectedSize) {
      alert(`Added ${product.name} (Size: ${selectedSize}) to cart.`);
    }
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  if (!product) {
    return null; // Or a loading spinner if you prefer
  }

  return (
    <div className="bg-slate-700 min-h-screen text-white p-8">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <div className="flex">
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
            <p className="text-2xl font-bold text-blue-500 mb-4">{product.price}</p>
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
    </div>
  );
};

export default ProductDetails;
