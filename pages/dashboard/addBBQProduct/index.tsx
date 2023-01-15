import { useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DashBoardLayout from "../../../Layout/DashBoardLayout";
import { useAddProductMutation } from "../../../src/store/api/productsApi";

type FormValues = {
  name: string;
  desc: string;
  img: string;
  price: number;
  stock: number;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};
const AddProducts = () => {
  // const time = moment().format("MMM Do YYYY, h:mm:ss a");
  // const year = format(date,"yyyy");
  const [addProduct, { isLoading }] = useAddProductMutation();

  // console.log(time);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver });
  const [refresh, setRefresh] = useState(false);
  //seting title

  if (refresh || isLoading) {
    return <div className="loader">Loading...</div>;
  }

  const handleAddProduct = (data: any) => {
    setRefresh(true);

    addProduct(data);
    // inserting new Product
    // fetch(`http://localhost:5000/addBBQ`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.acknowledged) {
    //       toast.success("Product Added Successfully");
    //       setRefresh(false);
    //     }
    //   })
    //   .catch((err) => {
    //     setRefresh(false);
    //     console.log(err);
    //   });
    toast.success("Product Added Successfully");
    setRefresh(false);
  };
  return (
    <DashBoardLayout>
      <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 mx-auto my-20 h-[600px]">
        <form onSubmit={handleSubmit(handleAddProduct)} className="card-body">
          <div className=" text-center">
            <h2 className="text-2xl text-secondary text-center outline outline-1">
              Add New BBQ
            </h2>
          </div>
          <div className=" gap-3 justify-between">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name </span>
              </label>
              <input
                {...register("name", {
                  required: "Product is required",
                })}
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            {errors.name && (
              <p role="alert" className="text-red-500 text-xs font-medium mt-2">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <textarea
              {...register("desc", {
                required: "Product Description is required",
              })}
              className="textarea h-24 textarea-bordered"
              placeholder="Short Description"
            />
          </div>
          {errors.desc && (
            <p role="alert" className="text-red-500 text-xs font-medium mt-2">
              {errors.desc?.message}
            </p>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product image Link</span>
            </label>
            <input
              type="text"
              {...register("img", {
                required: "img is required",
              })}
              placeholder="Product image Link"
              className="input input-bordered"
            />
          </div>
          {errors.img && (
            <p role="alert" className="text-red-500 text-xs font-medium mt-2">
              {errors.img?.message}
            </p>
          )}

          <div className="flex gap-3 justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                {...register("price", {
                  required: " Price is required",
                })}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            {errors.price && (
              <p role="alert" className="text-red-500 text-xs font-medium mt-2">
                {errors.price?.message}
              </p>
            )}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <input
                type="number"
                {...register("stock", {
                  required: "stock is required",
                })}
                placeholder="in stock"
                className="input input-bordered"
              />
            </div>
            {errors.stock && (
              <p role="alert" className="text-red-500 text-xs font-medium mt-2">
                {errors.stock?.message}
              </p>
            )}
          </div>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo quae non praesentium assumenda itaque deleniti reiciendis dolores sapiente eligendi repudiandae vel, dolor ducimus corrupti veniam natus nesciunt quas ea. */}

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-secondary">
              add New
            </button>
          </div>
        </form>
      </div>
    </DashBoardLayout>
  );
};
export default AddProducts;
