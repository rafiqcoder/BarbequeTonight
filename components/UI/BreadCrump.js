import Link from 'next/link';
const BreadCrump = () => {
    return (
        <section className="w-100 bg-[url('/breadcumb-bg.jpg')] bg-cover bg-no-repeat py-[160px]">
            <div className="container mx-auto flex flex-col justify-center items-center lg:items-start">
                <div>
                    <h1 className="font-roboto text-[50px] text-white font-semibold">SHOP <span className="font-lobsterTwo text-[#FB9F2E]">DETAILS</span></h1>
                    <p className="font-roboto text-[18px] font-normal text-white text-center lg:text-left"><Link href="/">Home</Link> <i className="fa-solid fa-chevron-right"></i> BBQ Details</p>
                </div>
            </div>
        </section>
    );
}

export default BreadCrump;