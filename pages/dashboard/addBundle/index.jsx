import { generateString } from "@/src/store/utils";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DashBoardLayout from "../../../Layout/DashBoardLayout";
import { useAddMenuMutation, useAddProductMutation } from "../../../src/store/api/productsApi";

const AddBundle = () => {
  const [addProduct,{ isLoading }] = useAddProductMutation();
  const [addMenu,{ isLoading:isLoading2 }] = useAddMenuMutation();
  const [imgLinks, setImgLinks] = useState([]);
  const [imgDeleteLinks, setImgDeleteLinks] = useState([]);
  const [imgData, setImgData] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm ();
    const [refresh,setRefresh] = useState(false);
    const [products,setProducts] = useState([]);
  let imgLinksAndDelete = [];
  const route = useRouter();
  //seting title
  const [bundle, setBundle] = useState({
    name: "",
    price: "",
    menu: [],
    category: "menu",
  });
  const [files, setFiles] = useState(null);

  
  useEffect(() => {
    setImgData(imgLinksAndDelete);
  }, [imgLinks]);

  if (refresh || isLoading || isLoading2) {
    return <div className="loader">Loading...</div>;
  }

  const handleAddBundle = async(data) => {
    let thumbData = '';
    const formData = new FormData();

    formData.append("image", files);

    const url = `https://api.imgbb.com/1/upload?key=6f6532924365b7836240f21e17a0852a`;
  const res= await fetch(url, {
      method: "POST",
      body: formData,
    })
   const imgData = await res.json();
        
    if (imgData) {
      thumbData = imgData.data.thumb.url;
    }
        // console.log("imagelinks" + imagelinks);
    
      
    // console.log(data);

    // setRefresh(true);
    const newData = {
      ...data,
      thumb: thumbData,
      id:generateString(6),
    };
    console.log(newData);
    if (bundle.menu.length<6) {
      
      setBundle({...bundle,menu:[...bundle.menu,newData]})
    } else {
      toast.success("You can add only 6 products");
    }
    // addProduct(newData)
    //   .unwrap()
    //   .then((res) => {
    //     if (res.acknowledged) {
    //       toast.success("Product Added Successfully");
    //       setRefresh(false);
    //       route.push("/dashboard");
    //     }
    //   });
  };
  const handleAddtoDb = () => {
    if (bundle.menu.length<6) {
     return toast.error("You have to add 6 products to bundle");
    }
    if (bundle.name === "" || bundle.price === "") {
      return toast.error("Please fill up all the fields");
    }
    addMenu(bundle)
      .unwrap()
      .then((res) => {
        if (res.acknowledged) {
          toast.success("Product Added Successfully");
          setRefresh(false);
          route.push("/dashboard");
        }
      });
  }
console.log(bundle);

  // const handleAddBundle = (data) => {
  //   setRefresh(true);
  //   const newData = {
  //     ...data,
  //     thumb: thumbnail,
  //     img: imgData,
  //   };
  //   console.log(newData);

  //   addProduct(newData)
  //     .unwrap()
  //     .then((res) => {
  //       if (res.acknowledged) {
  //         toast.success("Product Added Successfully");
  //         setRefresh(false);
  //         route.push("/dashboard");
  //       }
  //     });

  
  // };

  const deleteImg = (value) => {
    const url = value;
    //navigate to the url
    window.open(url, "_blank");
  };

  const addThumb = (e) => {
    // console.log(files);
    e.preventDefault();
    e.stopPropagation();
    setFiles(e.target.files[0]);
 
    console.log(files);
  };
console.log(files);
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
      <div>
        <div className="flex gap-x-10">
          <form
            onSubmit={handleSubmit(handleAddBundle)}
            className="card-body card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 mx-auto my-20 h-[600px] gap-5"
          >
            <div className=" text-center">
              <h2 className="text-2xl text-[#007ACC] text-center outline outline-1">
                Add to bundle
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
                <p
                  role="alert"
                  className="text-red-500 text-xs font-medium mt-2"
                >
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
                required
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
                <p
                  role="alert"
                  className="text-red-500 text-xs font-medium mt-2"
                >
                  {errors.price?.message}
                </p>
              )}
            </div>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo quae non praesentium assumenda itaque deleniti reiciendis dolores sapiente eligendi repudiandae vel, dolor ducimus corrupti veniam natus nesciunt quas ea. */}
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-[#007ACC]">
                add to bundle
              </button>
            </div>
          </form>
          <div className="">
            <div className="w-100 grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-3 gap-7 mt-6 justify-items-start content-center max-h-[400px]">
              {bundle.menu?.map((e, i) => (
                <div className="border-[#bdbdbd] border-solid border-x-[1px] border-y-[1px] rounded-xl bg-[#faf7f2] flex flex-row justify-items-stretch items-center overflow-hidden gap-6 group h-[200px]">
                  <div className="bg-[rgba(255,157,45,0.2)] group-hover:bg-[#ff9d2d] transition ease-in-out flex flex-col justify-center align-center px-6 self-stretch rounded-xl ">
                    <img
                      src={e.thumb}
                      alt="Product Image"
                      className="group-hover:scale-125 transition ease-in-out duration-500 w-[120px] h-[120px] object-cover rounded-xl"
                    />
                  </div>
                  <div className="block py-6">
                    <div>
                      <h1 className="text-[#010f1c] text-[20px] font-semibold font-rubik mb-2">
                        {e.name}
                      </h1>
                    </div>
                    <p className="text-[#4d5765] text-[14px] font-normal font-roboto mb-[10px]">
                      {e.description}
                    </p>
                    <div className="flex flex-row items-center justify-between pr-6">
                      <h2 className="font-rubik text-[16px] font-medium text-[#eb0029]">
                        ${e.price} &nbsp;&nbsp;
                        <del className="text-[#4d5765]">$350.99</del>
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col my-8 gap-5">
              <div className="flex gap-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Menu Name</label>
                  <input
                    type="text"
                    name="menuName"
                    placeholder="menu name here"
                    className="border px-5 py-2 rounded-xl"
                    onChange={(e) =>
                      setBundle({ ...bundle, name: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Menu Price</label>
                  <input
                    type="text"
                    name="menuName"
                    placeholder="menu Sale Price"
                    className="border px-5 py-2 rounded-xl"
                    onChange={(e) =>
                      setBundle({ ...bundle, price: e.target.value })
                    }
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn bg-[#007ACC]"
                onClick={handleAddtoDb}
              >
                Add Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashBoardLayout>
  );
};
export default AddBundle;
