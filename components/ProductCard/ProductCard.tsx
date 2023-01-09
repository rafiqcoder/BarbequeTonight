import Link from "next/link";
import React from "react";

const ProductCard = (props: { product: any; children: JSX.Element }) => {
  const { product, children } = props;
  const { _id, name, desc, img, price } = product;
  return (
    <div className="rounded-2xl bg-white custom_box_shadow_1 flex flex-col items-center py-4 border-b-4 border-[#ffffff] hover:border-[#eb0029] transition ease-in-out duration-500">
      <Link href={`/bbq/${_id}`}>
        <img src={img} alt="" />
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
      <Link
        href={`/bbq/${_id}`}
        className="text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4"
      >
        Buy Now
      </Link>
    </div>
  );
};

export default ProductCard;
