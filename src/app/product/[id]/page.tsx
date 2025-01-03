/* eslint-disable @next/next/no-img-element */

// 3))
"use client"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { useCart } from "../../../../context/cartContext"

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export default function ProductDetails() {
  const params = useParams();
  const id = params?.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error('Error fetching product details:', error));
    }
  }, [id]);

  const handleAddToCart = () => {
    addToCart({
      id: product?.id ?? 0,  // Fallback to 0 if id is undefined
      title: product?.title ?? '',  // Fallback to an empty string if title is undefined
      price: product?.price ?? 0,  // Fallback to 0 if price is undefined
      thumbnail: product?.thumbnail ?? '',  // Fallback to an empty string if thumbnail is undefined
      quantity: 1,
    });
    setShowModal(true); // Show modal when item is added to cart
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal when the close button is clicked
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      
      
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap productDetails">
            <img
              alt="ecommerce"
              className="productDetailsImg lg:w-1/2 w-full lg:h-auto h-[305px] p-4 md:h-64 object-cover object-center rounded"
              src={product.thumbnail}
            />
            <div className="flex justify-center flex-col lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-12 lg:mt-0 ">
              <h1 className="text-gray-900 text-3xl md:text-5xl title-font font-medium mb-3">
                {product.title}
              </h1>
              <p className="leading-relaxed text-xl md:text-2xl">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-3xl text-gray-900">
                  ${product.price}
                </span>
                <button
                  className="productsButton  hover:bg-green-800 flex ml-auto text-white  border-0 py-3 px-6 focus:outline-none text-center justify-center font-bold items-centerhover:bg-indigo-600 rounded w-[150px] h-[50px] "
                  onClick={handleAddToCart} // Trigger modal on click
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg text-center max-w-sm w-full">
            <svg
              className="mx-auto text-green-500 w-16 h-16 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M9 11l3 3L22 4" />
              <path d="M20 12a8 8 0 10-8 8 8 8 0 008-8z" />
            </svg>
            <h2 className="text-xl font-semibold mb-4">Successfully Added to Cart!</h2>
            <button
              onClick={handleCloseModal}
              className="bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
