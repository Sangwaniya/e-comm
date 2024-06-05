// app/layout.js
import Header from './Header';
// import Footer from './Footer'; // Add a Footer component if you have one
import './globals.css';

export const metadata = {
  title: 'Web Ship Grow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-700 text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
