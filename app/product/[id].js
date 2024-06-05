// app/product/[id].js
"use client";

import React from 'react';
import { useRouter } from 'next/router';
import { products } from './products';


const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-4 bg-black text-white">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={product.name} className="w-full h-full object-cover" />
        ))}
      </div>
      <p className="mt-4">{product.description}</p>
      <p className="mt-2">{product.price}</p>
    </div>
  );
};

export default ProductPage;
