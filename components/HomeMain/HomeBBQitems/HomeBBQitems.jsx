import ProductCard from "@/components/ProductCard/ProductCard";
import { useGetBBQProductsQuery } from "@/src/store/api/productsApi";
import { addToCart } from "@/src/store/cartSlice";
import Link from "next/link";
import { useDispatch,useSelector } from "react-redux";
import Head from "../Head/Head";

const HomeBBQitems = () => {
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

  const handleAddtoCart = (product) => {
    const updatedProduct = {
      product,
      userEmail: activeUser?.email,
    };
    dispatch(addToCart(updatedProduct));
  };
  // console.log(user.email);
  console.log(bbqProducts);
  
  return (
    <section className=" mt-0">
      <div className="container px-6 py-10 mx-auto">
        <Head
          title="BBQ"
          desc="Objectively pontificate quality models before intuitive information. Dramatically recaptiualize multifunctional materials."
          badge="" badge2='Items'
        ></Head>
        <div className="w-100 grid gird-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-16">
          {bbqProducts &&
            bbqProducts.map((product) => (
              <ProductCard product={product} key={product._id}>
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
      </div>
    </section>
  );
};

export default HomeBBQitems;
