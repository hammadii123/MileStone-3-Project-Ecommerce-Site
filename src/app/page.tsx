
"use client"
import { useEffect, useState } from 'react';

import ProductCard from './components/ProductCard';


interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
      
      {/* bg-gradient-to-r from-purple-500 to-indigo-500 */}
      <header className="header text-white pt-32 pb-7 text-center ">
        <h1 className="text-4xl font-bold">Welcome to ShopEase</h1>
        <p className="mt-2">Your one-stop shop for the best products online!</p>
      </header>
      <main className="container body mx-auto p-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </>
  );
}