import productImg from "@/public/assets/productImg.jpg";
import Image from 'next/image';
const HomeMenu = () => {
    return (
      <section className="bg-white dark:bg-gray-900 my-20">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            BBQ Items
          </h1>
          <p className="sec-text ms-auto me-auto text-center">
            Objectively pontificate quality models before intuitive information.
            Dramatically recaptiualize multifunctional materials.
          </p>
        </div>

        <div className="tab-content">
          <div
            className="tab-pane fade show active text-center"
            id="nav-one"
            role="tabpanel"
            aria-labelledby="nav-one-tab"
          >
            <div className="tab-menu2 filter-menu-active flex justify-center gap-8 text-lg font-bold">
              <button
                data-filter="*"
                className="active uppercase bg-orange-400 p-5 rounded-lg text-white"
                type="button"
              >
                All Menus
              </button>
              <button data-filter=".cat1" type="button" className="uppercase bg-orange-400 p-5 rounded-lg text-white">
                burger
              </button>
              <button data-filter=".cat2" type="button" className="uppercase bg-orange-400 p-5 rounded-lg text-white">
                Pizza
              </button>
              <button data-filter=".cat3" type="button" className="uppercase bg-orange-400 p-5 rounded-lg text-white">
                Chicken
              </button>
              <button data-filter=".cat4" type="button" className="uppercase bg-orange-400 p-5 rounded-lg text-white">
                Combo
              </button>
              <button data-filter=".cat5" type="button" className="uppercase bg-orange-400 p-5 rounded-lg text-white">
                Sanwitch
              </button>
              <button data-filter=".cat6" type="button" className="uppercase bg-orange-400 p-5 rounded-lg text-white">
                Drinks
              </button>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-4 gap-4 mt-4 xl:mt-12 xl:gap-4 lg:grid-cols-4">
              {[...Array(8)].map((e, i) => (
                <div className="" key={i}>
                  <div className="as-product list-view">
                    <div className="product-img">
                      <Image
                        width={100}
                        hight={100}
                        src={productImg}
                        alt="Product Image"
                      ></Image>
                    </div>
                    <div className="product-content">
                      <h3 className="product-title">
                        <a href="shop-details.html">Daria Shevtsova</a>
                      </h3>
                      <p className="product-text">
                        Rapidiously repurpose customer directed markets.
                        Rapidiously enhance extensive.
                      </p>
                      <span className="price">
                        Tk 180.85<del>Tk 350.99</del>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-5 flex-col flex ">
              <span className="price text-orange-500 text-xl font-bold">
                Tk 180 <del className=" text-black">Tk 350.99</del>
              </span>
              <a href="shop.html" className="as-btn w-[200px] mx-auto mt-5">
                View All Menus
              </a>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HomeMenu;