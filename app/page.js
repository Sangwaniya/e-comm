// app/page.js
import Product from './components/Product';
import { products } from './products';

const Home = () => {
  return (
    <main className="flex flex-col items-center bg-black text-white min-h-screen p-4 ">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <Product {...products[0]} />
        </div>
        <div className="lg:flex lg:flex-col lg:space-y-4">
          <Product {...products[1]} />
          <Product {...products[2]} />
        </div>
      </div>
    </main>
  );
};

export default Home;
