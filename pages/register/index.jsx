import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../../Layout/Layout';
import { registerWithPassword, updateNameAndPhoto } from '../../src/store/actions/authActions';


const Register = () => {
  // geting firebase register function from context

    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')
    const router = useRouter();
  // const location = useLocation();
  // const navigate = useNavigate();
  
  // const from = location.state?.from?.pathname || "/";
  // const [token]=UseToken(userEmail)

  // useEffect(() => {
  //     if (token) {
  //       navigate(from, { replace: true });
  //     }
  // },[from,navigate,token])
  
  // getting location from react-router-dom

  // setting title

  // showing loader  when user click on register button
 const [token,setToken] = useState(null);
 const saveToken =  (email) => {
    fetch(`${Base_url}/jwt?email=${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("accessToken", data.token);
          console.log("token", data.token);
          setToken(data.token);

          setLoadLoging(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoadLoging(false);
      });
  };
  if (loading) {
    return (
      <div className="loader">Loading...</div>
    );
  }


  

  // register function
  const handleRegisiter = (data) => {
    
    setLoading(true);
    
    // calling firebase register function
    registerWithPassword(data.email, data.password)
      .then((res) => {
        updateNameAndPhoto(data.name, data.img).then((result) => {
          // saveUserToDb(data.name, data.email, data.img);
          setLoading(false);

saveToken(result.user.email)
         const updatedUser = {
           name: result.user.displayName,
           email: result.user.email,
         };
        });
        const email = data.email;
        //getting jwt token from backend and setting it in localstorage
        // fetch("https://server-9cmeqz35g-rafiqcoder.vercel.app/jwt", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ email }),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     // seting loading to false
        //     setLoading(false);
        //     // setting jwt token in localstorage
        //     localStorage.setItem("auth-token", data.token);
        //     toast.success("jwt Successfull");
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //     setLoading(false);
        //   });

        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err.message);
      });
  
  }

    return (
      <Layout>
        <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
          <div className="flex flex-col items-center justify-center">
            <form
              onSubmit={handleSubmit(handleRegisiter)}
              className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16"
            >
              <p
                tabIndex={0}
                aria-label="Login to your account"
                className="text-2xl font-extrabold leading-6 text-gray-800"
              >
                Create your account
              </p>
              
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Name
                </label>
                <input
                  {...register("name", {
                    required: "Email is required",
                  })}
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                {errors.name && (
                  <p
                    role="alert"
                    className="text-red-500 text-xs font-medium mt-2"
                  >
                    {errors.name?.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="border rounded-lg focus:outline-none text-xs font-medium leading-none text-gray-800 py-4 w-full pl-3 mt-2"
                />
                {errors.email && (
                  <p
                    role="alert"
                    className="text-red-500 text-xs font-medium mt-2"
                  >
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="mt-6  w-full">
                <label className="text-sm font-medium leading-none text-gray-800">
                  Password
                </label>
                <div className="relative flex items-center justify-center">
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be 6 characters long",
                      },
                    })}
                    className="border rounded-lg focus:outline-none text-xs font-medium leading-none text-gray-800 w-full pl-3 mt-2 py-4"
                  />
                  {errors.password && (
                    <p
                      role="alert"
                      className="text-red-500 text-xs font-medium mt-2 "
                    >
                      {errors.password?.message}
                    </p>
                  )}
                  <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                        fill="#71717A"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
              
              <button
                type="submit"
                className="focus:ring-2 mt-8 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Create my account
              </button>
            </form>
            <p className="text-sm mt-4 font-medium leading-none text-gray-500">
              Already have account?
              <Link
                href="/login"
                className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    );
};

export default Register;