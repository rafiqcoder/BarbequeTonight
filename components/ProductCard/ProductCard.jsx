
import Image from 'next/image';
import productImg from '../../public/assets/productImg.jpg';

const ProductCard = ({ children }) => {
  
    return (
      <div class="max-w-2xl bg-white rounded-lg shadow-md dark:bg-gray-800 relative">
       
        <Image class="object-cover w-full h-64 " src={productImg} alt="Article" ></Image>

        <div class="p-6">
          <div>
            <div
              class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabindex="0"
              role="link"
            >
              Product Name
              
            </div>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ullam dolores architecto obcaecati voluptatem ut dolorem quam saepe beatae ad reprehenderit. Molestias, 
            </p>
            <div className="flex justify-between ">
              <div className="mt-6">
                
                <h2 className="font-semibold">
                  Price:
                  <span className="text-orange-500"> 500 </span>
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