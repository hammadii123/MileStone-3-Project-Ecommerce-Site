/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
// import Link from 'next/link';

// export default function ProductCard({ product }) {
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
//       <img
//         src={product.thumbnail}
//         alt={product.title}
//         className="h-48 w-full object-cover"
//       />
//       <div className="p-4">
//         <h2 className="text-lg font-bold text-gray-800 truncate">{product.title}</h2>
//         <p className="text-gray-600">${product.price}</p>
//         <Link href={`/product/${product.id}`}>
//           <a className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700">
//             View Details
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// }



import Link from 'next/link';

interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
  };
}

export default function ProductCard({ product }: ProductProps) {
  return (
    <div className="productCards bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <img
        src={product.thumbnail}
        alt={product.title}
        className=" w-full object-cover h-[335px]"
      />
      <div className="p-4 textContainer">
        <h2 className="text-lg title font-bold text-gray-800 truncate text-center">{product.title}</h2>
        <p className="text-gray-600 price text-center">${product.price}</p>
       
          <Link href={`/product/${product.id}`} className="productsButton w-100  mt-4 bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-800 justify-center flex">
            View Details
          </Link>
       
      </div>
    </div>
  );
}

