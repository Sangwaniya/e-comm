import React, { useState, useEffect } from 'react';

const ProductDetails = ({ product, addToCart, toggleCart }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  useEffect(() => {
    setCurrentImage(product.images[0]);
  }, [product]);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = (size) => {
    addToCart(product, size);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-black text-white p-8 mx-auto max-w-full">
      <div className="lg:w-1/2 flex flex-col items-center">
        <img src={currentImage} alt={product.name} className="main-image mb-4" />
        <div className="thumbnail-images flex space-x-2">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} ${index + 1}`}
              onClick={() => handleImageClick(image)}
              className={`thumbnail cursor-pointer border-2 ${currentImage === image ? 'border-blue-500' : 'border-transparent'}`}
              style={{ width: '50px', height: '50px' }}
            />
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 lg:pl-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl text-blue-400 mb-4">₹ {product.price}</p>
        <div className="mb-4">
          <h3 className="text-lg mb-2">SIZE</h3>
          <div className="flex space-x-2">
            {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((size) => (
              <button
                key={size}
                onClick={() => handleSizeClick(size)}
                className={`size-button p-2 border-2 ${selectedSize === size ? 'border-blue-500' : 'border-gray-500'} rounded`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <p className="text-lg mb-4">{product.description}</p>
        <button
          onClick={() => {
            handleAddToCart(selectedSize);
            toggleCart;
          }}
          className={`add-to-cart-btn w-full p-4 rounded ${selectedSize ? 'bg-blue-500 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
          disabled={!selectedSize}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
