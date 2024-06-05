import Header from './Header.js';
import './globals.css';

export const metadata = {
  title: 'Web Ship Grow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
