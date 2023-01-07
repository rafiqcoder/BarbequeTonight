
import Image from 'next/image';

const ProductCard = ({ children,product }) => {
  
    return (
      <div className="max-w-2xl bg-white rounded-lg shadow-md dark:bg-gray-800 relative">
        <img
          className="object-cover w-full h-64 "
          src={product.img}
          alt="Article"
        ></img>

        <div className="p-6">
          <div>
            <div
              className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabindex="0"
              role="link"
            >
              {product.name}
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {product.desc}
            </p>
            <div className="flex justify-between ">
              <div className="mt-6">
                <h2 className="font-semibold">
                  Price:
                  <span className="text-orange-500"> {product.price} </span>
                  Tk
                </h2>
              </div>
              {children[0]}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;