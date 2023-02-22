"use strict";
exports.id = 647;
exports.ids = [647];
exports.modules = {

/***/ 4647:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1690);
/* harmony import */ var _src_firbase_firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9643);
/* harmony import */ var _src_store_actions_getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6178);
/* harmony import */ var _src_store_authSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1583);
/* harmony import */ var _src_store_cartSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6088);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(401);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8505);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__, _src_firbase_firebase_config__WEBPACK_IMPORTED_MODULE_2__, _src_store_cartSlice__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_6__]);
([_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__, _src_firbase_firebase_config__WEBPACK_IMPORTED_MODULE_2__, _src_store_cartSlice__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// import { AuthContext } from '@/src/Context/Context';










const Layout = ({ children  })=>{
    // const {user} =useContext(AuthContext);
    const { activeUser , loading  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.userAuth);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const cartDispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        dispatch((0,_src_store_actions_getData__WEBPACK_IMPORTED_MODULE_3__/* .fetchCartDbThunk */ .z)(activeUser?.email));
        cartDispatch((0,_src_store_cartSlice__WEBPACK_IMPORTED_MODULE_5__/* .setActiveUser */ .nl)(activeUser?.email));
    }, [
        activeUser?.email
    ]);
    const userDispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)(_src_firbase_firebase_config__WEBPACK_IMPORTED_MODULE_2__/* .app */ .l);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        const unsubscribe = auth.onAuthStateChanged((activeUser)=>{
            if (activeUser) {
                // user is logged in
                userDispatch((0,_src_store_authSlice__WEBPACK_IMPORTED_MODULE_4__/* .setUser */ .av)(activeUser));
                userDispatch((0,_src_store_authSlice__WEBPACK_IMPORTED_MODULE_4__/* .setLoading */ .K4)(false));
            } else {
                // user is logged out
                userDispatch((0,_src_store_authSlice__WEBPACK_IMPORTED_MODULE_4__/* .setUser */ .av)(null));
                userDispatch((0,_src_store_authSlice__WEBPACK_IMPORTED_MODULE_4__/* .setLoading */ .K4)(false));
            }
        });
        return ()=>{
            unsubscribe();
        };
    }, []);
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "radial-progress text-[red] loader",
            style: {
                "--value": 70
            },
            children: "70%"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "Sundial Chamak | Welcome"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: "Generated by create next app"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/favicon.ico"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                href: "https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&family=Permanent+Marker&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;