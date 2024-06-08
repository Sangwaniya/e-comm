// app/components/Product.js
"use client";

import React from 'react';

const Product = ({ id, name, price, images, description, fixedSize, onProductClick }) => {
  const handleClick = () => {
    onProductClick({ id, name, price, images, description }); // Ensure description is passed here
  };

  return (
    <div
      className={`relative cursor-pointer bg-black p-4 rounded-lg ${fixedSize ? 'w-64 h-64' : ''}`}
      onClick={handleClick}
    >
      <div className="overflow-hidden rounded-lg w-full h-full">
        <img
          src={images[0]} // Display the first image
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-300 hover:scale-125`}
        />
      </div>
      <div className="absolute bottom-4 left-4 bg-black text-white rounded-md p-1">
        <span className="font-bold">{name}</span>
      </div>
      <div className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-md p-1">
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Product;
