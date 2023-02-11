import SingleBanner from "@/components/SingleBanner/SingleBanner";
import Layout from "@/Layout/Layout";
import hero_bg from "@/public/assets/hero_bg.jpg";
import { bbqAddToCart } from "@/src/store/cartSlice";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch,useSelector } from "react-redux";




const singleBbq = ({ product }) => {
    const [quantity,setQauntity] = useState(5);
    const { cart } = useSelector(state => state.cart);
    const { activeUser } = useSelector((state) => state.userAuth);
    // const activeUser = user.user;
    console.log(activeUser);
    const dispatch = useDispatch();


    const addedProduct = cart.find(pd => pd._id === product._id);

    // console.log(cart);
    // console.log(addedProduct);
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

    return (
        <Layout>
            <section>
                <SingleBanner title={product.name} hero_bg={hero_bg}>

                </SingleBanner>
                <div className='flex flex-row justify-between items-center container mx-auto py-10'>
                    <div className='grid grid-cols-5 gap-10 w-[60%]'>
                        <div className='col-span-1 max-h-[500px] overflow-hidden overflow-y-scroll scroll_hide_custom grid grid-cols-1 gap-10'>
                            {product.img.map((img,index) => (
                                <span className='bg-[#FAF7F2] rounded-lg flex flex-col justify-center items-center border-2 border-[#eb0029]'>
                                    <Link href={`/bbq/${product._id}`}><img className='pt-[10%]' src={img.img} alt="" /></Link>
                                </span>
                            ))}
                        </div>
                        <div className='bg-[#FAF7F2] max-h-[500px] col-span-4 text-center rounded-lg'>

                            <img className='h-[100%] pt-[5%] inline-block' src={product.thumb} alt="" />

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
                                        <button className='text-[14px] font-bold bg-[#eb0029] text-white py-[6px] px-[20px] rounded-lg' onClick={() => handleAddToCart(product)}>ADD TO CART</button>
                                        <button className="bg-[#010F1C] text-[14px] font-bold text-white py-[6px] px-[15px] rounded-lg"><i className="fa-regular fa-heart"></i> Buy Now</button>
                                    </div> : <Link href='/'>
                                        <button className='text-[14px] font-bold bg-[#eb0029] text-white py-[6px] px-[20px] rounded-lg' onClick={() => handleAddToCart(product)}>ADD TO CART</button>
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
            </section>
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:5000/AllBBQProducts`)
    const data = await res.json();
    const paths = data.map(product => {
        return {
            params: { id: product._id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`http://localhost:5000/AllBBQProducts/${id}`)
    const data = await res.json();
    return {
        props: {
            product: data,
        },
    };
}

export default singleBbq;



// export async function getServerSideProps() {
//     const res = await fetch(`http://localhost:5000/AllBBQProducts`);
//     const data = await res.json();

//     return {
//         props: {
//             products: data,
//         },
//     };
// }