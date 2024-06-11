// // app/checkout/page.js
// // this is not used, use this in case of routing

// "use client";
// import React, { useState } from 'react';

// const Checkout = ({ cartItems, onBackToProducts }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     firstName: '',
//     lastName: '',
//     address: '',
//     apartment: '',
//     city: '',
//     state: '',
//     zip: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the form submission logic here
//     // save the form data and cart items to a backend
//     console.log('Form data submitted:', formData);
//     console.log('Cart items:', cartItems);
//     window.alert('Thank you for your order!');
//     // You can add additional logic here such as clearing the cart or showing a confirmation message
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const total = calculateTotal();

//   return (
//     <div className="bg-slate-700 min-h-screen text-white p-8">
//       <h1 className="text-4xl font-bold mb-8">Checkout</h1>
//       <button onClick={onBackToProducts} className="bg-blue-500 text-white p-2 rounded mb-4">
//         Back to Products
//       </button>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-sm font-bold mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full p-2 bg-gray-800 rounded-md text-white"
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-bold mb-2">First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 className="w-full p-2 bg-gray-800 rounded-md text-white"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-bold mb-2">Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 className="w-full p-2 bg-gray-800 rounded-md text-white"
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-bold mb-2">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleInputChange}
//               className="w-full p-2 bg-gray-800 rounded-md text-white"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-bold mb-2">Apartment, suite, etc. (optional)</label>
//             <input
//               type="text"
//               name="apartment"
//               value={formData.apartment}
//               onChange={handleInputChange}
//               className="w-full p-2 bg-gray-800 rounded-md text-white"
//             />
//           </div>
//           <div className="grid grid-cols-3 gap-4">
//             <div>
//               <label className="block text-sm font-bold mb-2">City</label>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 className="w-full p-2 bg-gray-800 rounded-md text-white"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-bold mb-2">State</label>
//               <input
//                 type="text"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleInputChange}
//                 className="w-full p-2 bg-gray-800 rounded-md text-white"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-bold mb-2">ZIP Code</label>
//               <input
//                 type="text"
//                 name="zip"
//                 value={formData.zip}
//                 onChange={handleInputChange}
//                 className="w-full p-2 bg-gray-800 rounded-md text-white"
//               />
//             </div>
//           </div>
//           <button type="submit" className="w-full mt-4 bg-blue-500 text-white p-2 rounded">
//             Continue to Payment
//           </button>
//         </form>
//         <div className="bg-gray-800 p-4 rounded-lg">
//           <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
//           {cartItems.map((item, index) => (
//             <div key={index} className="flex justify-between mb-4">
//               <div className="flex">
//                 <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
//                 <div>
//                   <h3 className="font-bold">{item.name}</h3>
//                   <p className="text-gray-400">Quantity: {item.quantity}</p>
//                 </div>
//               </div>
//               <p className="font-bold">₹ {(item.price * item.quantity).toFixed(2)} INR</p>
//             </div>
//           ))}
//           <div className="border-t border-gray-700 pt-4">
//             <p className="flex justify-between mb-2">
//               <span>Subtotal</span>
//               <span>₹ {total.toFixed(2)} INR</span>
//             </p>
//             <p className="flex justify-between mb-2">
//               <span>Shipping </span>
//               <span>₹ 99.00 INR</span>
//             </p>
//             <p className="flex justify-between font-bold">
//               <span>Total</span>
//               <span>₹ {(total + 99).toFixed(2)} INR</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
