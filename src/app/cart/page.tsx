/* eslint-disable @next/next/no-img-element */

"use client";

import { useCart } from "../../../context/cartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <h2 className="cartText text-center text-4xl mt-20 items-center h-screen flex justify-center font-bold">Your Cart is Empty!</h2>;
  }

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4 h-screen items-centre flex justify-center flex-col">
      <div className="grid md:grid-cols-3 gap-4">
        {/* Cart Items Section */}
        <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
          <h2 className="text-2xl font-bold text-gray-800">My Cart</h2>
          <hr className="border-gray-300 mt-4 mb-8" />
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-3 items-center gap-4 border border-gray-200 rounded-lg p-4"
              >
                {/* Image and Details */}
                <div className="col-span-2 flex items-center gap-4">
                  <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                    <img
                      src={item.thumbnail}
                      className="w-full h-full object-contain"
                      alt={item.title}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      ${item.price} x {item.quantity} ={" "}
                      <strong>${item.price * item.quantity}</strong>
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border border-gray-300">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gray-100 p-4 rounded-md">
          <h2 className="text-xl font-bold text-gray-800">Summary</h2>
          <hr className="border-gray-300 mt-4 mb-8" />
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Total:</span>
            <span className="text-gray-800 font-bold">${Math.round(calculateTotal())}</span>
          </div>
          <button
            type="button"
            className="cartButton w-full  hover:bg-green-700 text-white py-2 rounded-md"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
