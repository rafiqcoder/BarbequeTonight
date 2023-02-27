"use strict";
exports.id = 29;
exports.ids = [29];
exports.modules = {

/***/ 6178:
/***/ ((__unused_webpack_module,__webpack_exports__,__webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__,{
/* harmony export */   "z": () => (/* binding */ fetchCartDbThunk)
    /* harmony export */
});
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

            const fetchCartDbThunk = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("cartDb/fetch",(email) => {
                // fetch(`https://server-9cmeqz35g-rafiqcoder.vercel.app/addToCartDb`)
                //     .then((res) => res.json())
                //     .then((data) => {
                //         return(data.cartData);
                //     })
                const data = async () => {
                    const value = await fetch(`https://server-9cmeqz35g-rafiqcoder.vercel.app/addToCartDb?email=${email}`);
                    const res = await value.json();
                    return res;
                };
                const cartdata = data();
                return cartdata;
            });


            /***/
        }),

/***/ 1583:
/***/ ((__unused_webpack_module,__webpack_exports__,__webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__,{
/* harmony export */   "K4": () => (/* binding */ setLoading),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "av": () => (/* binding */ setUser)
            /* harmony export */
        });
/* unused harmony export setError */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

            const initialState = {
                activeUser: null,
                error: null,
                loading: true
            };
            const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
                name: "userAuth",
                initialState,
                reducers: {
                    setUser: (state,action) => {
                        state.activeUser = action.payload;
                    },
                    setError: (state,action) => {
                        state.error = action.payload;
                    },
                    setLoading: (state,action) => {
                        state.loading = action.payload;
                    }
                }
            });
            const { setUser,setError,setLoading } = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);


            /***/
        }),

/***/ 6088:
/***/ ((module,__webpack_exports__,__webpack_require__) => {

            __webpack_require__.a(module,async (__webpack_handle_async_dependencies__,__webpack_async_result__) => {
                try {
/* harmony export */ __webpack_require__.d(__webpack_exports__,{
/* harmony export */   "Ff": () => (/* binding */ reduceQuantity),
/* harmony export */   "Xq": () => (/* binding */ addToCart),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "h2": () => (/* binding */ removeFromCart),
/* harmony export */   "nl": () => (/* binding */ setActiveUser)
                    /* harmony export */
                });
/* unused harmony export bbqAddToCart */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6201);
/* harmony import */ var _actions_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6178);
                    var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__]);
                    react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



                    const initialState = {
                        cart: [],
                        grandTotal: 0,
                        userEmail: null
                    };
                    const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
                        name: "cart",
                        initialState,
                        reducers: {
                            setActiveUser: (state,action) => {
                                state.userEmail = action.payload;
                                // const oldCartData = JSON.parse(localStorage.getItem("cart") || "[]")
                                // if (state.userEmail !== undefined) {
                                //   console.log(state.userEmail);
                                //   fetch(`https://server-9cmeqz35g-rafiqcoder.vercel.app/addToCartDb?email=${state.userEmail}`)
                                //     .then((res) => res.json())
                                //     .then((data) => {
                                //       if (data.acknowledged) {
                                //         state.cart = data;
                                //         state.grandTotal = state.cart.reduce(
                                //           (total,product) => total + product.totalPrice,
                                //           0
                                //         )
                                //       }
                                //     });
                                // if (oldCartData) {
                                //   state.cart = oldCartData;
                                //   state.grandTotal = state.cart.reduce(
                                //     (total,product) => total + product.totalPrice,
                                //     0)
                                // }
                            },
                            addToCart: (state,action) => {
                                const product = state.cart.find((p) => p._id === action.payload.product._id);
                                if (product) {
                                    product.quantity++;
                                    product.totalPrice = product.quantity * product.price;
                                    state.grandTotal = state.cart.reduce((total,product) => total + product.totalPrice,0);
                                } else {
                                    state.cart.push({
                                        ...action.payload.product,
                                        quantity: 5,
                                        totalPrice: action.payload.product.price * 5
                                    });
                                    state.grandTotal = state.cart.reduce((total,product) => total + product.totalPrice,0);
                                }
                                const Cartdata = state.cart;
                                const email = action.payload.userEmail;
                                if (email) {
                                    fetch(`https://server-9cmeqz35g-rafiqcoder.vercel.ap/addToCartDb?email=${email}`,{
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(Cartdata)
                                    }).then((res) => res.json()).then((data) => {
                                        if (data.acknowledged) {
                                            react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success("added to Cart Db ");
                                        }
                                    }).catch((error) => console.log(error));
                                }
                                // const oldData = JSON.parse(localStorage.getItem("cart") || "[]");
                                // if (oldData.length > 0) {
                                //   const newData = [...oldData,...Cartdata];
                                //   localStorage.setItem("cart",JSON.stringify(newData));
                                // }
                                // localStorage.setItem("cart",JSON.stringify(Cartdata));
                            },
                            bbqAddToCart: (state,action) => {
                                const email = action.payload.userEmail;
                                const quantity = action.payload.quantity;
                                console.log(action.payload.product);
                                state.cart.push({
                                    ...action.payload.product,
                                    quantity: quantity,
                                    totalPrice: action.payload.product.price * quantity
                                });
                                state.grandTotal = state.cart.reduce((total,product) => total + product.totalPrice,0);
                                const Cartdata = state.cart;
                                if (email) {
                                    fetch(`https://server-9cmeqz35g-rafiqcoder.vercel.app/addToCartDb?email=${email}`,{
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(Cartdata)
                                    }).then((res) => res.json()).then((data) => {
                                        if (data.acknowledged) {
                                            react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success("added to Cart Db ");
                                        }
                                    }).catch((error) => console.log(error));
                                }
                                // const oldData = JSON.parse(localStorage.getItem("cart") || "[]");
                                // if (oldData.length > 0) {
                                //   const newData = [...oldData,...Cartdata];
                                //   localStorage.setItem("cart",JSON.stringify(newData));
                                // }
                                // localStorage.setItem("cart",JSON.stringify(Cartdata));
                            },
                            reduceQuantity: (state,action) => {
                                const product = state.cart.find((p) => p._id === action.payload.product._id);
                                if (product.quantity > 5) {
                                    console.log(product.quantity);
                                    product.quantity--;
                                    product.totalPrice = product.quantity * product.price;
                                    state.grandTotal = state.cart.reduce((total,product) => total + product.totalPrice,0);
                                } else {
                                    state.cart = state.cart.filter((p) => p._id !== action.payload._id);
                                    state.grandTotal = state.cart.reduce((total,product) => total + product.totalPrice,0);
                                }
                                const Cartdata = state.cart;
                                const email = action.payload.userEmail;
                                fetch(`https://server-9cmeqz35g-rafiqcoder.vercel.app/addToCartDb?email=${email}`,{
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(Cartdata)
                                }).then((res) => res.json()).then((data) => {
                                    if (data.acknowledged) {
                                        react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success("added to Cart Db ");
                                    }
                                }).catch((error) => console.log(error));
                            },
                            removeFromCart: (state,action) => {
                                state.cart = state.cart.filter((p) => p._id !== action.payload.product._id);
                                state.grandTotal = state.cart.reduce((total,product) => total + product.totalPrice,0);
                                const Cartdata = state.cart;
                                const email = action.payload.userEmail;
                                console.log(email);
                                fetch(`https://server-9cmeqz35g-rafiqcoder.vercel.app/addToCartDb?email=${email}`,{
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(Cartdata)
                                }).then((res) => res.json()).then((data) => {
                                    if (data.acknowledged) {
                                        react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success("added to Cart Db ");
                                    }
                                }).catch((error) => console.log(error));
                            }
                        },
                        extraReducers: (builder) => {
                            builder.addCase(_actions_getData__WEBPACK_IMPORTED_MODULE_2__/* .fetchCartDbThunk.fulfilled */.z.fulfilled,(state,action) => {
                                const data = action.payload;
                                // console.log(data);
                                state.cart = data;
                                // state.cart=filteredData;
                                //     state.cart = action.payload;
                                state.grandTotal = state.cart.reduce((total,product) => total + product.totalPrice,0);
                            });
                        }
                    });
                    const { addToCart,reduceQuantity,setActiveUser,removeFromCart,bbqAddToCart } = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);

                    __webpack_async_result__();
                } catch (e) { __webpack_async_result__(e); }
            });

            /***/
        })

};
;