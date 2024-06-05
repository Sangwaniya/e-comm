// app/components/Product.js
"use client";

import React from 'react';

const Product = ({ id, name, price, image, onClick, fixedSize }) => {
  return (
    <div
      className={`relative cursor-pointer bg-black p-4 rounded-lg ${fixedSize ? 'w-64 h-64' : ''}`}
      onClick={onClick}
    >
      <img src={image} alt={name} className={`w-full h-full object-cover ${fixedSize ? 'max-h-80%' : ''}`} />
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
