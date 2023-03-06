import SingleBanner from "@/components/SingleBanner/SingleBanner";
import Layout from "@/Layout/Layout";
import hero_bg from "@/public/assets/hero_bg.jpg";
import { bbqAddToCart } from "@/src/store/cartSlice";
import { Base_url } from "@/src/store/utils";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch,useSelector } from "react-redux";



export const getStaticPaths = async () => {
    const { data } = await axios.get(`${Base_url}/bbq`)

    const paths = data.map(product => ({
        params: { id: product._id.toString() }
    }))
    return {
        paths,
        fallback: true
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const { data } = await axios.get(`${Base_url}/bbq/${id}`)

    return {
        props: {
            product: data,
        },
        revalidate: 1,
    };
}



const singleBbq = ({ product }) => {
    const [quantity,setQauntity] = useState(5);
    const { cart } = useSelector(state => state.cart);
    const { activeUser } = useSelector((state) => state.userAuth);
    const router = useRouter();

    const { id } = router.query;
    // console.log(product);

    // default use state image here
    const [defaultThumb, setDefaultThumb] = useState(product?.thumb);

    // default tab button here
    const [defaultTabButton, setDefaultTabButton] = useState('review');

    const dispatch = useDispatch();
    console.log('working');
    const addedProduct = cart.find(pd => pd._id === product._id);


    // click on mini thumb action function
    const clickOnMiniThumbAction = (newImgLocation) => {
        setDefaultThumb(newImgLocation);
    }

    // click on tab button action function
    const clickOnTabButton = (btnState) => {
        setDefaultTabButton(btnState);
    }


    const increaseCartItemNumber = (i) => {
        i = i + 1;
        setQauntity(i);
    }

    const decreaseCartItemNumber = (i) => {
        if (i > 5) {
            i = i - 1;
            setQauntity(i);
        } else {
            setQauntity(5);
        }
    }


    const handleAddToCart = (product) => {
        if (addedProduct) {
            toast.error('This product is already added to cart');
        } else {
            const updatedProduct = {
                product,
                quantity: quantity,
                userEmail: activeUser?.email,
            }
            dispatch(bbqAddToCart(updatedProduct))
        }
    }
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <Layout>
            <section>


                <SingleBanner title={product.name} hero_bg={`https://angfuzsoft.com/html/pizzer/demo/assets/img/breadcumb/breadcumb-bg.jpg`}>

                </SingleBanner>


                <div className='flex flex-row justify-between items-center container mx-auto py-10'>
                    <div className='grid grid-cols-5 gap-10 w-[60%]'>

                        <div className='col-span-1 max-h-[500px] overflow-hidden overflow-y-scroll scroll_hide_custom grid grid-cols-1 gap-10 scrollbar-hide'>

                                
                                {
                                    defaultThumb !== product.thumb ? <>
                                        <span className='bg-[#FAF7F2] rounded-lg flex flex-col justify-center items-center border-2 border-[#fdd0d8]'>
                                            <span onClick={() => clickOnMiniThumbAction(product.thumb)}><img className='pt-[10%]' src={product.thumb} alt="" /></span>
                                        </span>
                                    </> : <>
                                        <span className='bg-[#FAF7F2] rounded-lg flex flex-col justify-center items-center border-2 border-[#eb0029]'>
                                            <span onClick={() => clickOnMiniThumbAction(product.thumb)}><img className='pt-[10%]' src={product.thumb} alt="" /></span>
                                        </span>
                                    </>
                                }

                            {product.img.map((img,index) => (
                                <>
                                    {
                                        defaultThumb !== img.img ? <>
                                            <span key={img.img} className='bg-[#FAF7F2] rounded-lg flex flex-col justify-center items-center border-2 border-[#fdd0d8]'>
                                                <span onClick={() => clickOnMiniThumbAction(img.img)}><img className='pt-[10%]' src={img.img} alt="" /></span>
                                            </span>
                                        </> : <>
                                            <span key={img.img} className='bg-[#FAF7F2] rounded-lg flex flex-col justify-center items-center border-2 border-[#eb0029]'>
                                                <span onClick={() => clickOnMiniThumbAction(img.img)}><img className='pt-[10%]' src={img.img} alt="" /></span>
                                            </span>
                                        </>
                                    }
                                </>
                            ))}
                        </div>
                        
                        <div className='bg-[#FAF7F2] max-h-[500px] col-span-4 text-center rounded-lg'>

                            <img className='h-[100%] pt-[5%] inline-block' src={defaultThumb} alt="" />

                        </div>
                    </div>
                    <div className='w-[40%]'>
                        <div className='pl-10'>
                            <div className="flex flex-row justify-start items-center">
                                <span className="text-[#FFB539] text-[14px]">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </span>
                                <p className="ml-4 font-roboto font-regular text-[#979797] text-[14px]">(3 customer reviews)</p>
                            </div>
                            <h1 className='text-[30px] font-bold font-rubik'>{product.name}</h1>
                            <p className='text-[20px] font-rubik font-medium mt-2'><span className="text-[#eb0029]">{product.price}৳</span> / <span>Head</span></p>
                            <p className='font-roboto font-regular text-[#979797] text-[14px] mt-4'>{product.desc}</p>
                            <p className='text-[20px] font-rubik font-medium mt-2'>Total:<span className="text-[#eb0029]"> {product.price * quantity}৳</span></p>
                            <div className='flex flex-row justify-start gap-6 my-6'>

                                <span className="flex flex-row justify-start">
                                    <button className='text-[20px] font-rubik font-medium px-[10px] py-[5px] border border-[#d5d5d5] rounded-l-lg' onClick={() => decreaseCartItemNumber(quantity)}>-</button>
                                    <span className='text-[20px] font-rubik font-medium px-[10px] py-[5px] border-y-[1px] border-[#d5d5d5]'>{quantity}</span>
                                    <button className='text-[20px] font-rubik font-medium px-[10px] py-[5px] border border-[#d5d5d5] rounded-r-lg' onClick={() => increaseCartItemNumber(quantity)}>+</button>
                                </span>
                                {
                                    activeUser && activeUser?.uid ? <div>
                                        <button className='text-[14px] font-bold bg-[#eb0029] text-white py-[6px] px-[20px] rounded-lg mr-2' onClick={() => handleAddToCart(product)}>ADD TO CART</button>
                                        <button className="bg-[#010F1C] text-[14px] font-bold text-white py-[6px] px-[15px] rounded-lg"><i className="fa-regular fa-heart"></i> Buy Now</button>
                                    </div> : <Link href='/'>
                                        <button className='text-[14px] font-bold bg-[#eb0029] text-white py-[6px] px-[20px] rounded-lg mr-2' onClick={() => handleAddToCart(product)}>ADD TO CART</button>
                                        <button className="bg-[#010F1C] text-[14px] font-bold text-white py-[6px] px-[15px] rounded-lg"><i className="fa-regular fa-heart"></i> Buy Now</button>
                                    </Link>
                                }

                            </div>
                            <div>
                                <p className="text-[16x] font-rubik text-[#010F1C] font-medium">SKU: <span className="font-light text-[#979797] ml-2">{product._id}</span></p>
                                <p className="text-[16x] font-rubik text-[#010F1C] font-medium">Category: <span className="font-light text-[#979797] ml-2">BBQ</span></p>
                                <p className="text-[16x] font-rubik text-[#010F1C] font-medium">Tags: <span className="font-light text-[#979797] ml-2">BBQ</span></p>
                            </div>
                            <div>
                                <h4 className='text-[18px] font-rubik text-[#010F1C] font-medium mt-6'><span className="text-[#eb0029]"><i className="fa-sharp fa-solid fa-share"></i></span> Share</h4>
                                <ul className='flex flex-row gap-4 justify-start items-center mt-2'>
                                    <li>
                                        <Link href="/" className="bg-[#E0E0E0] h-[40px] w-[40px] flex flex-col justify-center items-center rounded-md text-[#4D5765]"><i className="fa-brands fa-facebook-f"></i></Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="bg-[#E0E0E0] h-[40px] w-[40px] flex flex-col justify-center items-center rounded-md text-[#4D5765]"><i className="fa-brands fa-twitter"></i></Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="bg-[#E0E0E0] h-[40px] w-[40px] flex flex-col justify-center items-center rounded-md text-[#4D5765]"><i className="fa-brands fa-instagram"></i></Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="bg-[#E0E0E0] h-[40px] w-[40px] flex flex-col justify-center items-center rounded-md text-[#4D5765]"><i className="fa-brands fa-linkedin-in"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>





                    </div>
                </div>

                
                <div className="container mx-auto py-10">
                    <div className="w-100 flex flex-row justify-center items-center gap-3 mb-8">
                        {
                            defaultTabButton === 'description' ? <>
                                <button className="btn bg-[#eb0029] text-[#ffffff] border border-[#eb0029] rounded-full font-rubik text-[14px] font-medium hover:bg-[#eb0029] hover:text-[#ffffff] px-6 hover:border-[#eb0029]" onClick={() => clickOnTabButton('description')}>PRODUCT DESCRIPTION</button>
                            </> : <>
                                <button className="btn bg-[#ffffff] text-[#eb0029] border border-[#eb0029] rounded-full font-rubik text-[14px] font-medium hover:bg-[#eb0029] hover:text-[#ffffff] px-6 hover:border-[#eb0029]" onClick={() => clickOnTabButton('description')}>PRODUCT DESCRIPTION</button>
                            </>
                        }

                        {
                            defaultTabButton === 'review' ? <>
                                <button className="btn bg-[#eb0029] text-[#ffffff] border border-[#eb0029] rounded-full font-rubik text-[14px] font-medium hover:bg-[#eb0029] hover:text-[#ffffff] px-6 hover:border-[#eb0029]" onClick={() => clickOnTabButton('review')}>CUSTOMER REVIEWS</button>
                            </> : <>
                                <button className="btn bg-[#ffffff] text-[#eb0029] border border-[#eb0029] rounded-full font-rubik text-[14px] font-medium hover:bg-[#eb0029] hover:text-[#ffffff] px-6 hover:border-[#eb0029]" onClick={() => clickOnTabButton('review')}>CUSTOMER REVIEWS</button>
                            </>
                        }
                        
                        
                    </div>

                    <hr/>

                    {
                        defaultTabButton === 'description' ? <>
                        
                        <div className="w-100 mt-8">
                            <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At voluptates quae reiciendis iure tenetur non quam, odit vitae ipsum, nostrum facilis fugit omnis, dicta distinctio quisquam sapiente exercitationem odio. Earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempore id nobis in aut omnis. Nisi, doloribus. Minima cupiditate porro officia deserunt laboriosam incidunt eveniet vel hic! Dolorum, magnam culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus perspiciatis dignissimos vitae, voluptatem nulla exercitationem, nostrum iste impedit quas minima tempore laudantium laboriosam itaque temporibus assumenda placeat fuga? Aliquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At voluptates quae reiciendis iure tenetur non quam, odit vitae ipsum, nostrum facilis fugit omnis, dicta distinctio quisquam sapiente exercitationem odio. Earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempore id nobis in aut omnis. Nisi, doloribus. Minima cupiditate porro officia deserunt laboriosam incidunt eveniet vel hic! Dolorum, magnam culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus perspiciatis dignissimos vitae, voluptatem nulla exercitationem, nostrum iste impedit quas minima tempore laudantium laboriosam itaque temporibus assumenda placeat fuga? Aliquam.</p>
                        </div>

                        </> : <>
                            <div className="grid grid-cols-2 gap-6 p-4">
                                <div className="flex flex-row justify-between items-center w-100 border border-[#e0e0e0] rounded-md py-6 px-4">
                                    <div className="w-[100px]">
                                        <img className="rounded-full overflow-hidden h-[80px] w-[80px]" src="https://i.ibb.co/xXqJJTg/cus1.png" alt="cus1" />
                                    </div>
                                    <div className="w-[calc(100%-100px)]">
                                        <div className="flex flex-row justify-between items-center">
                                            <h1 className="text-[#010f1c] font-rubik text-[20px] font-bold">Mark Jack</h1> 
                                            <span className="text-[#ff9d2d] text-[13px]">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-[#4d5765] text-[14px] font-normal font-roboto"><i class="fa-solid fa-calendar-days"></i> 22 April, 2022</p>
                                        </div>
                                        <p className="text-[#4d5765] text-[16px] font-normal font-roboto mt-4">
                                            Completely build enabled web-readiness and distributed customer service. Proactively customize.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between items-center w-100 border border-[#e0e0e0] rounded-md py-6 px-4">
                                    <div className="w-[100px]">
                                        <img className="rounded-full overflow-hidden h-[80px] w-[80px]" src="https://i.ibb.co/xXqJJTg/cus1.png" alt="cus1" />
                                    </div>
                                    <div className="w-[calc(100%-100px)]">
                                        <div className="flex flex-row justify-between items-center">
                                            <h1 className="text-[#010f1c] font-rubik text-[20px] font-bold">Mark Jack</h1> 
                                            <span className="text-[#ff9d2d] text-[13px]">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-[#4d5765] text-[14px] font-normal font-roboto"><i class="fa-solid fa-calendar-days"></i> 22 April, 2022</p>
                                        </div>
                                        <p className="text-[#4d5765] text-[16px] font-normal font-roboto mt-4">
                                            Completely build enabled web-readiness and distributed customer service. Proactively customize.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between items-center w-100 border border-[#e0e0e0] rounded-md py-6 px-4">
                                    <div className="w-[100px]">
                                        <img className="rounded-full overflow-hidden h-[80px] w-[80px]" src="https://i.ibb.co/xXqJJTg/cus1.png" alt="cus1" />
                                    </div>
                                    <div className="w-[calc(100%-100px)]">
                                        <div className="flex flex-row justify-between items-center">
                                            <h1 className="text-[#010f1c] font-rubik text-[20px] font-bold">Mark Jack</h1> 
                                            <span className="text-[#ff9d2d] text-[13px]">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-[#4d5765] text-[14px] font-normal font-roboto"><i class="fa-solid fa-calendar-days"></i> 22 April, 2022</p>
                                        </div>
                                        <p className="text-[#4d5765] text-[16px] font-normal font-roboto mt-4">
                                            Completely build enabled web-readiness and distributed customer service. Proactively customize.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between items-center w-100 border border-[#e0e0e0] rounded-md py-6 px-4">
                                    <div className="w-[100px]">
                                        <img className="rounded-full overflow-hidden h-[80px] w-[80px]" src="https://i.ibb.co/xXqJJTg/cus1.png" alt="cus1" />
                                    </div>
                                    <div className="w-[calc(100%-100px)]">
                                        <div className="flex flex-row justify-between items-center">
                                            <h1 className="text-[#010f1c] font-rubik text-[20px] font-bold">Mark Jack</h1> 
                                            <span className="text-[#ff9d2d] text-[13px]">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-[#4d5765] text-[14px] font-normal font-roboto"><i class="fa-solid fa-calendar-days"></i> 22 April, 2022</p>
                                        </div>
                                        <p className="text-[#4d5765] text-[16px] font-normal font-roboto mt-4">
                                            Completely build enabled web-readiness and distributed customer service. Proactively customize.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>


            </section>
        </Layout>
    );
};


export default singleBbq;




// export async function getServerSideProps({ params }) {
//     const id = params.id;
//     let res;
//     if (typeof id === 'string') {
        
//      res = await fetch(`https://server-9cmeqz35g-rafiqcoder.vercel.app/AllBBQProducts/${id}`);
//     }
//     const product = await res.json();

//     return {
//         props: {
//             product,
//         },
//     };
// }