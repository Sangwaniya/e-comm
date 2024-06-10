const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 ps-8">
      <div className="container mx-auto flex flex-col">
        <div className="flex items-center mb-4">
          <img src="/logo.png" alt="GROW Logo" className="h-8 mr-5" />
          <span className="text-lg font-semibold">GROW</span>
        </div>
        <nav className="flex flex-col space-y-2">
          <a href="/" className="text-gray-400 hover:text-white">
            Home
          </a>
          <a href="/about" className="text-gray-400 hover:text-white">
            About
          </a>
          <a href="/terms" className="text-gray-400 hover:text-white">
            Terms &amp; Conditions
          </a>
          <a href="/shipping" className="text-gray-400 hover:text-white">
            Shipping &amp; Return Policy
          </a>
          <a href="/privacy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="/faq" className="text-gray-400 hover:text-white">
            FAQ
          </a>
        </nav>
        <div className="mt-8 flex items-center space-x-4">
          <p>© 2023-2024 GROW, Inc. All rights reserved.</p>
          <p>|</p>
          <p>Designed in India</p>
          <p>|</p>
          <a
            href="https://x.com/sangwaniya"
            className="text-blue-400 hover:text-pink-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crafted by Sangwaniya
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;