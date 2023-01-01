

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddCategories = () => {

  // console.log(currentUser);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    const [refresh, setRefresh] = useState(false);
  //seting title
  UseTitle("Add Category");
    
    if (refresh) {
        return <div>Loading...</div>
    }
    
    
    const handleAddcategory = (data) => {
       
        setRefresh(true);
        
    // inserting new Category
    fetch("https://usedcycle-server.vercel.app/add-category", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Category Added Successfully");
          setRefresh(false);
        }
    
      })
      .catch((err) => {
         setRefresh(false)
      })
       setRefresh(false);
  };
  return (
    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 mx-auto my-20">
      <form onSubmit={handleSubmit(handleAddcategory)} className="card-body">
        <div className=" text-center">
          <h2 className="text-2xl text-secondary text-center outline outline-1">
            Add New Category
          </h2>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Category Name</span>
          </label>
          <input
            {...register("categoryName", {
              required: "Category Name is required",
            })}
            placeholder="name"
            className="input input-bordered"
          />
        </div>
        {errors.categoryName && (
          <p role="alert" className="text-red-500 text-xs font-medium mt-2">
            {errors.categoryName?.message}
          </p>
        )}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Category image Link</span>
          </label>
          <input
            type="text"
            {...register("img", {
              required: "img is required",
            })}
            placeholder="Category image Link"
            className="input input-bordered"
          />
        </div>
        {errors.img && (
          <p role="alert" className="text-red-500 text-xs font-medium mt-2">
            {errors.img?.message}
          </p>
        )}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category Cover Image Link</span>
          </label>
          <input
            type="text"
            {...register("coverImg", {
              required: "img is required",
            })}
            placeholder="Category image Link"
            className="input input-bordered"
          />
        </div>
        {errors.coverImg && (
          <p role="alert" className="text-red-500 text-xs font-medium mt-2">
            {errors.coverImg?.message}
          </p>
        )}

        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis illo quae non praesentium assumenda itaque deleniti reiciendis dolores sapiente eligendi repudiandae vel, dolor ducimus corrupti veniam natus nesciunt quas ea. */}

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-secondary">
            add Category
          </button>
        </div>
      </form>
    </div>
  );
};


export default AddCategories;