import Link from "next/link";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetBBQProductsQuery } from "../../../src/store/api/productsApi";
import { addToCart } from "../../../src/store/cartSlice.js";
import ProductCard from "../../ProductCard/ProductCard";

const HomeBBQitems: FC = () => {
  // const { user } = useContext(AuthContext);
  // const { user, loading }:User = useSelector((state) => state.userAuth);
  const { activeUser, loading } = useSelector((state) => state.userAuth);
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  const { data, error, isLoading, isSuccess, isFetching } =
    useGetBBQProductsQuery();
  const bbqProducts = data;
  // const { bbqProducts } = useContext(DataContext);

  const dispatch = useDispatch();
  interface Props {
    value: string;
  }
  const handleAddtoCart = (product: any) => {
    const updatedProduct = {
      product,
      userEmail: activeUser?.email,
    };
    dispatch(addToCart(updatedProduct));
  };
  // console.log(user.email);

  return (
    <section className="bg-white my-20">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          BBQ Items
        </h1>
        <div className="w-100 grid gird-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-16">
          {bbqProducts &&
            bbqProducts.map((product) => (
              <ProductCard product={product} key={product.id}>
                <label
                  htmlFor="my-modal"
                  className="text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4"
                  onClick={() => handleAddtoCart(product)}
                >
                  Add to Cart
                </label>
              </ProductCard>
            ))}
        </div>
        <div className="w-100 flex flex-col justify-center items-center mt-0">
          <button className="font-rubik font-medium text-[14px] text-[#ffffff] bg-[#eb0029] transition ease-in-out duration-500 hover:bg-[#010f1c] py-4 px-12 rounded-full">
            <Link href="/bbq">VIEW ALL MENUS</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBBQitems;
