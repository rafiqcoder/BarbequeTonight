import { addToCart } from "@/src/store.js/cartSlice";
import { DataContext } from "@/src/utils/Context/Context";
import { useContext } from "react";
import { useDispatch,useSelector } from "react-redux";
import ProductCard from "../../ProductCard/ProductCard";

const HomeBBQitems = () => {
  const {bbqProducts} = useContext(DataContext);
  const dispatch = useDispatch();
  

  return (
    <section className="bg-white dark:bg-gray-900 my-20">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          BBQ Items
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
          {bbqProducts.map((product) => (
            <ProductCard children product={product}>
              <label
                htmlFor="my-modal"
                className="btn btn-success mt-5 hover:bg-secondary text-white border-0"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to cart
              </label>
              <div className="tooltip ml-2 " data-tip="Report to Admin">
                <button className=" rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-red-600 flex-shrink-0 w-8 h-8 bg-white rounded-full p-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBBQitems;

