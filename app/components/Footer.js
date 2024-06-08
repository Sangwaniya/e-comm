// app/Footer.js
const Footer = () => {
    return (
      <footer className="bg-black text-white p-4 text-center">
        <p>© 2023 GROW Store. All rights reserved.</p>
        <nav className="mt-2 space-x-4">
          <a href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</a>
          <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="/faq" className="text-gray-400 hover:text-white">FAQ</a>
        </nav>
      </footer>
    );
  };
  
  export default Footer;
  