import Link from 'next/link';

export default function Navbar() {
  return (
    // bg-gradient-to-r from-gray-700 to-gray-900
    <nav className="navBar top-0 p-4 bg- text-white shadow-lg fixed w-[100%] z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
        <Link href="/" className="font-extrabold text-2xl tracking-wide hover:text-gray-200">
            ShopEase
          </Link>
        </div>
         
       
        <div className="gap-2 flex">
          <Link  href="/sign-up" className=" NavbarButtons font-bold bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100">
            SignUp
          </Link>
          <Link  href="/cart" className=" NavbarButtons font-bold bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100">
            Cart
          </Link>
          </div>
        
      </div>
    </nav>
  );
}
