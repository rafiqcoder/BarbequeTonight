"use strict";
exports.id = 797;
exports.ids = [797];
exports.modules = {

/***/ 1318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Banner_Banner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/assets/hero_bg.jpg
/* harmony default export */ const hero_bg = ({"src":"/_next/static/media/hero_bg.13933df1.jpg","height":800,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAnAMz/8QAIBAAAAQGAwAAAAAAAAAAAAAAAQIDBAAREhMhIkJScf/aAAgBAQABPwBuGrYnFUVLgdqMln5H/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8AVv/EABcRAQADAAAAAAAAAAAAAAAAAAEAESH/2gAIAQMBAT8AQtwn/9k=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./components/Banner/Banner.jsx



const Banner = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "dark:bg-gray-900",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "w-full",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: hero_bg,
                        alt: "A work table with house plants",
                        className: "w-full h-full hidden lg:block"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: hero_bg,
                        alt: "A work table with house plants",
                        className: "hidden sm:block lg:hidden w-full h-full"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: hero_bg,
                        alt: "A work table with house plants",
                        className: "sm:hidden w-full h-full"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "absolute z-10 top-40 left-20 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-4xl sm:text-5xl lg:text-6xl font-semibold text-white sm:w-8/12",
                                children: "YOU ALWAYS LIKE TASTE, OF OUR FOODS"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-base leading-normal text-white mt-4 sm:mt-5 sm:w-5/12",
                                children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "hidden sm:flex bg-gray-800 py-4 px-8 text-base font-medium text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700",
                                children: "Explore"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "absolute bottom-0 sm:hidden dark:bg-white dark:text-white bg-gray-800 py-4 text-base font-medium text-white mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700",
                        children: "Explore"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Banner_Banner = (Banner);


/***/ }),

/***/ 4173:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6267);
/* harmony import */ var _src_store_api_productsApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3319);
/* harmony import */ var _src_store_cartSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6088);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_store_cartSlice__WEBPACK_IMPORTED_MODULE_3__]);
_src_store_cartSlice__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const HomeBBQitems = ()=>{
    // const { user } = useContext(AuthContext);
    // const { user, loading }:User = useSelector((state) => state.userAuth);
    const { activeUser , loading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.userAuth);
    // if (loading) {
    //   return <h1>Loading...</h1>;
    // }
    const { data , error , isLoading , isSuccess , isFetching  } = (0,_src_store_api_productsApi__WEBPACK_IMPORTED_MODULE_2__/* .useGetBBQProductsQuery */ .mr)();
    const bbqProducts = data;
    // const { bbqProducts } = useContext(DataContext);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const handleAddtoCart = (product)=>{
        const updatedProduct = {
            product,
            userEmail: activeUser?.email
        };
        dispatch((0,_src_store_cartSlice__WEBPACK_IMPORTED_MODULE_3__/* .addToCart */ .Xq)(updatedProduct));
    };
    // console.log(user.email);
    console.log(bbqProducts);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "bg-white my-20",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container px-6 py-10 mx-auto",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white",
                    children: "BBQ Items"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-100 grid gird-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-16",
                    children: bbqProducts && bbqProducts.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            product: product,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "my-modal",
                                className: "text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4",
                                onClick: ()=>handleAddtoCart(product),
                                children: "Add to Cart"
                            })
                        }, product.id))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-100 flex flex-col justify-center items-center mt-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "font-rubik font-medium text-[14px] text-[#ffffff] bg-[#eb0029] transition ease-in-out duration-500 hover:bg-[#010f1c] py-4 px-12 rounded-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: "/bbq",
                            children: "VIEW ALL MENUS"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeBBQitems);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);



const ProductCard = (props)=>{
    const { activeUser  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.userAuth);
    const { product , children  } = props;
    const { _id , name , desc , thumb , img , price  } = product;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "rounded-2xl bg-white custom_box_shadow_1 flex flex-col items-center py-4 border-b-4 border-[#ffffff] hover:border-[#eb0029] transition ease-in-out duration-500",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/bbq/${_id}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: thumb,
                    alt: ""
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-[16px] font-roboto font-normal text-[#4d5765]",
                children: "BBQ"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/bbq/${_id}`,
                className: "text-[24px] font-rubik font-semibold text-[#010f1c]",
                children: name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-[#eb0029] font-medium font-rubik text-[16px]",
                children: [
                    price,
                    "৳"
                ]
            }),
            activeUser && activeUser?.uid ? children : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/login",
                    className: "text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4",
                    children: "Add to Cart"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);


/***/ }),

/***/ 3319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N8": () => (/* binding */ useAddProductMutation),
/* harmony export */   "fi": () => (/* binding */ productsApi),
/* harmony export */   "mr": () => (/* binding */ useGetBBQProductsQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const productsApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "productsApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "http://localhost:5000"
    }),
    tagTypes: [
        "BBQProduct"
    ],
    endpoints: (builder)=>({
            getBBQProducts: builder.query({
                query: ()=>"/AllBBQProducts",
                providesTags: [
                    "BBQProduct"
                ]
            }),
            addProduct: builder.mutation({
                query: (product)=>({
                        url: "/addBBQ",
                        method: "POST",
                        body: product
                    }),
                invalidatesTags: [
                    "BBQProduct"
                ]
            })
        })
});
const { useGetBBQProductsQuery , useAddProductMutation  } = productsApi;


/***/ })

};
;