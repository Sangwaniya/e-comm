// app/layout.js
// import Header from './Header'; Commenting it As we render header to clent side so moving to paje.js
import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: 'Web Ship Grow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-700 text-white">
        {/* <Header /> */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
