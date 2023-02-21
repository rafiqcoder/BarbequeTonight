import Link from "next/link";
import { useSelector } from "react-redux";

const ProductCard = (props) => {

  const { activeUser } = useSelector((state) => state.userAuth);
  const { product, children } = props;
  const { _id, name, desc, thumb,img, price } = product;
  return (
    <div className="rounded-2xl bg-white custom_box_shadow_1 flex flex-col items-center py-4 border-b-4 border-[#ffffff] hover:border-[#eb0029] transition ease-in-out duration-500">
      <Link href={`/bbq/${_id}`}>
        <img src={thumb} alt="" />
      </Link>
      <p className="text-[16px] font-roboto font-normal text-[#4d5765]">BBQ</p>
      <Link
        href={`/bbq/${_id}`}
        className="text-[24px] font-rubik font-semibold text-[#010f1c]"
      >
        {name}
      </Link>
      <p className="text-[#eb0029] font-medium font-rubik text-[16px]">
        {price}৳
      </p>

      {activeUser && activeUser?.uid ? (
        children
      ) : (
        <div>
          <Link
            href="/login"
            className="text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4"
          >
            Add to Cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
