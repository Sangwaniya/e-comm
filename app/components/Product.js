// app/components/Product.js
const Product = ({ name, price, image }) => {
    return (
        <div className="relative flex items-center justify-center">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded-lg flex items-center space-x-2 border-2">
                <span className="font-bold">{name}</span>
                <span className="bg-blue-600 p-1 rounded-md">{price}</span>
            </div>
        </div>
    );
};

export default Product;
