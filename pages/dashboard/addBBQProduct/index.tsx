import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DashBoardLayout from "../../../Layout/DashBoardLayout";
import { useAddProductMutation } from "../../../src/store/api/productsApi";

type FormValues = {
  name: string;
  desc: string;
  img: string;
  price: number;
  category: string;
  files: [];
};
type files = [];

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
  // const [files, setFiles] = useState([]);
  // console.log(time);
  // console.log(files);
  //imagelinks
  const [imgLinks, setImgLinks] = useState([]);
  const [imgDeleteLinks, setImgDeleteLinks] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [thumbnail, setThumbnail] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver });
  const [refresh, setRefresh] = useState(false);
  let imgLinksAndDelete = [];
  const route = useRouter();
  //seting title
  useEffect(() => {
    setImgData(imgLinksAndDelete);
  }, [imgLinks]);

  if (refresh || isLoading) {
    return <div className="loader">Loading...</div>;
  }

  const handleAddProduct = (data: any) => {
    setRefresh(true);
    const newData = {
      ...data,
      thumb: thumbnail,
      img: imgData,
    };
    console.log(newData);
    
    addProduct(newData)
      .unwrap()
      .then((res) => {
        if (res.acknowledged) {
          toast.success("Product Added Successfully");
          setRefresh(false);
          route.push("/dashboard");
        }
      });

    // formData.append("images", files[0]);
    // console.log(formData);

    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("picName", file.name);
    // fetch(`http://localhost:5000/upload`, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     // console.log('data');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

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
    // toast.success("Product Added Successfully");
   
  };

 
  const deleteImg = (value) => {
    const url = value;
    //navigate to the url
    window.open(url, "_blank");
  };
  const handleUpload = (e) => {
    // console.log(files);
    e.preventDefault();
    e.stopPropagation();
    const files = e.target.files;
    console.log(files);

    var imagelinks = [];
    var deletelinks = [];
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      // console.log(files[i]);

      // setInterval(() => {
      //   setImgLinks([...imgLinks, files[i]]);
      // }, 1000);

      formData.append("image", files[i]);
      const url = `https://api.imgbb.com/1/upload?key=6f6532924365b7836240f21e17a0852a`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          // console.log('data');
          imagelinks.push(data.data.url);
          deletelinks.push(data.data.delete_url);
          setImgLinks([...imgLinks, ...imagelinks]);
          setImgDeleteLinks([...imgDeleteLinks, ...deletelinks]);
          setThumbnail(data.data.thumb.url);
          // console.log("imagelinks" + imagelinks);
        })
        .catch((err) => {
          console.log(err);
        });
    
    }
  }
  const addThumb = (e) => {
    // console.log(files);
    e.preventDefault();
    e.stopPropagation();
    const files = e.target.files[0];
    console.log(files);

    const formData = new FormData();
   
    formData.append("image", files);
    
      const url = `https://api.imgbb.com/1/upload?key=6f6532924365b7836240f21e17a0852a`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          console.log(data);
       
          setThumbnail(data.data.thumb.url);
          // console.log("imagelinks" + imagelinks);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // console.log(files[0]);

    // console.log(formData);
    // const hostKey = process.env.REACT_APP_imgbb_key;
    // console.log(hostKey);
    // console.log(imagelinks);

  // console.log(imgLinks.length);

  //foreach loop
  for (let i = 0; i < imgLinks.length; i++) {
    imgLinksAndDelete.push({
      img: imgLinks[i],
      delete: imgDeleteLinks[i],
    });
  }

  // console.log(imgData);

  return (
    <DashBoardLayout>
      <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 mx-auto my-20 h-[600px] gap-5">
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
              <span className="label-text">Add Thumbnail</span>
            </label>
            <input
              type="file"
              onChange={(e) => addThumb(e)}
              className="input input-bordered"
            />

            {/* <input
              type="text"
              {...register("img", {
                required: "img is required",
              })}
              placeholder="Product image Link"
              className="input input-bordered"
            /> */}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product image Link</span>
            </label>
            <input
              type="file"
              multiple
              onChange={(e) => handleUpload(e)}
              className="input input-bordered"
            />

            {/* <input
              type="text"
              {...register("img", {
                required: "img is required",
              })}
              placeholder="Product image Link"
              className="input input-bordered"
            /> */}
          </div>

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
                <span className="label-text ">Category</span>
              </label>
              <select
                {...register("category", { required: "Category is required" })}
                className="border p-3 rounded-lg"
              >
                <option value="">select</option>
                <option value="bbq">BBQ</option>
                <option value="menu">MENU</option>
              </select>
            </div>
            {errors.category && (
              <p role="alert" className="text-red-500 text-xs font-medium mt-2">
                {errors.category?.message}
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
      <div className="ml-10 flex flex-col gap-4">
        <div className="">
          <label htmlFor="">Thumbnail</label>
          <img src={thumbnail} alt="" />
        </div>
        {imgData.map((img) => (
          <div className="flex gap-3">
            <img src={img.img} alt="" />
            <button
              className="bg-red-500 w-6 h-6 rounded-full text-white"
              onClick={() => deleteImg(img.delete)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </DashBoardLayout>
  );
};
export default AddProducts;
