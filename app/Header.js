// app/Header.js
import Link from 'next/link';

const Header = ({ cartCount, toggleCart }) => {
  return (
    <header className="bg-slate-700 text-white flex items-center justify-between p-4">
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold">GROW STORE</span>
        </Link>
        <nav className="ml-10 space-x-4">
          <Link href="/">All</Link>
          <Link href="/shirts">Shirts</Link>
          <Link href="/stickers">Stickers</Link>
        </nav>
      </div>
      <div className="relative flex-grow max-w-md mx-10">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-2 bg-gray-800 rounded-md text-white"
        />
        <button className="absolute inset-y-0 right-0 flex items-center pr-2">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.35-6.65A7.5 7.5 0 113 10.5a7.5 7.5 0 0115 0z"></path>
          </svg>
        </button>
      </div>
      <button onClick={toggleCart} className="relative">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2m4.4 0H18l1 5H7M5.4 5l1.2 6m0 0h10l.9-4.5m-11.1 4.5L4 16h16M9 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z"></path>
        </svg>
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs px-2 py-1">
            {cartCount}
          </span>
        )}
      </button>
    </header>
  );
};

export default Header;
