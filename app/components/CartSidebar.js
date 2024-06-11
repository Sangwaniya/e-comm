// app/components/CartSidebar.js
import {React, useRef, useEffect} from 'react';

const CartSidebar = ({ cartItems, setCartItems, isOpen, toggleCart, onProceedToCheckout }) => {
  const handleQuantityChange = (index, change) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += change;

    if (newCartItems[index].quantity <= 0) {
      newCartItems.splice(index, 1);
    }

    setCartItems(newCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    return calculateTotal() * 0.18;
  };

  const total = calculateTotal();

  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        toggleCart();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleCart]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 right-0 h-full bg-black text-white w-1/3 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-lg font-bold">My Cart</h2>
        <button onClick={toggleCart}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div className="p-4">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4">
              <img src={item.image} alt={item.name} className="w-16 h-16" />
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-400">Size: {item.size}</p>
                <p className="font-bold">{item.price}</p>
              </div>
              <div className="flex items-center">
                <button onClick={() => handleQuantityChange(index, -1)} className="px-2">-</button>
                <span className="px-2">{item.quantity}</span>
                <button onClick={() => handleQuantityChange(index, 1)} className="px-2">+</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Your cart is empty</p>
        )}
      </div>
      <div className="p-4 border-t absolute bottom-0 left-0 right-0 border-gray-700">
        <p className="flex justify-between mb-2">
          <span>Taxes (18%)</span>
          <span>₹{calculateTax().toFixed(2)} INR</span>
        </p>
        <p className="flex justify-between mb-8">
          <span>Shipping</span>
          <span>Calculated at checkout</span>
        </p>
        <p className="flex justify-between font-bold mb-8">
          <span>Total</span>
          <span>₹{total.toFixed(2)} INR</span>
        </p>
        <button
          onClick={() => {
            toggleCart();
            onProceedToCheckout();
          }}
          className="w-full mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;
