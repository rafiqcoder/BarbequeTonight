import React from "react";
import { useDispatch } from "react-redux";
import { useGetBBQProductsQuery } from "../../../src/store/api/productsApi";
import { addToCart } from "../../../src/store/cartSlice";
import ProductCard from "../../ProductCard/ProductCard";

const HomeBBQitems = () => {
  const { data, error, isLoading, isSuccess, isFetching } =
    useGetBBQProductsQuery();
  const bbqProducts = data;
  console.log(data);
  
  // const { bbqProducts } = useContext(DataContext);
  const dispatch = useDispatch();
  interface Props {
    value: string;
  }

  return (
    <section className="bg-white my-20">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          BBQ Items
        </h1>
        <div className="w-100 grid gird-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-16">
          {bbqProducts &&
            bbqProducts.map((product: { _id: any }) => (
              <ProductCard product={product} key={product._id}>
                <label
                  htmlFor="my-modal"
                  className="text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to cart
                </label>
              </ProductCard>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBBQitems;
