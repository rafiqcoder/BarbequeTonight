(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[222],{ 386: function (e,t,l) { (window.__NEXT_P = window.__NEXT_P || []).push(["/checkout",function () { return l(9851) }]) },4647: function (e,t,l) { "use strict"; var s = l(5893),a = l(4512),r = l(9643),i = l(6178),n = l(1583),c = l(6088),d = l(1259),o = l(7294),x = l(1248),m = l(8505); let u = e => { let { children: t } = e,{ activeUser: l,loading: u } = (0,x.v9)(e => e.userAuth),f = (0,x.I0)(),g = (0,x.I0)(); (0,o.useEffect)(() => { f((0,i.z)(null == l ? void 0 : l.email)),g((0,c.nl)(null == l ? void 0 : l.email)) },[null == l ? void 0 : l.email]); let h = (0,x.I0)(),p = (0,d.v0)(r.l); return ((0,o.useEffect)(() => { let e = p.onAuthStateChanged(e => { e ? (h((0,n.av)(e)),h((0,n.K4)(!1))) : (h((0,n.av)(null)),h((0,n.K4)(!1))) }); return () => { e() } },[]),u) ? (0,s.jsx)("div",{ className: "radial-progress text-[red] loader",style: { "--value": 70 },children: "70%" }) : (0,s.jsxs)(s.Fragment,{ children: [(0,s.jsx)("title",{ children: "Sundial Chamak | Welcome" }),(0,s.jsx)("meta",{ name: "description",content: "Generated by create next app" }),(0,s.jsx)("meta",{ name: "viewport",content: "width=device-width, initial-scale=1" }),(0,s.jsx)("link",{ rel: "icon",href: "/favicon.ico" }),(0,s.jsx)("link",{ rel: "preconnect",href: "https://fonts.googleapis.com" }),(0,s.jsx)("link",{ rel: "preconnect",href: "https://fonts.gstatic.com" }),(0,s.jsx)("link",{ href: "https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&family=Permanent+Marker&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",rel: "stylesheet" }),(0,s.jsx)(a.Z,{}),t,(0,s.jsx)(m.Z,{})] }) }; t.Z = u },9851: function (e,t,l) { "use strict"; l.r(t),l.d(t,{ default: function () { return c } }); var s = l(5893),a = l(7294),r = l(7536),i = l(1248),n = l(4647); function c() { var e,t,l,c; let { cart: d,grandTotal: o } = (0,i.v9)(e => e.cart),[x,m] = (0,a.useState)(!1),[u,f] = (0,a.useState)(!1),[g,h] = (0,a.useState)(!1),[p,y] = (0,a.useState)("City"),{ activeUser: j,loading: N } = (0,i.v9)(e => e.userAuth),{ register: b,formState: { errors: v },handleSubmit: w } = (0,r.cI)(),k = e => { let t = [...d,o],l = { cartData: t,...e }; fetch("https://server-9cmeqz35g-rafiqcoder.vercel.app/orderBbq",{ method: "POST",headers: { "content-type": "application/json" },body: JSON.stringify(l) }).then(e => e.json()).then(e => { window.location.href = e.url }).catch(e => { console.log(e) }) }; return (0,s.jsx)(n.Z,{ children: (0,s.jsx)("div",{ className: "overflow-y-hidden",children: (0,s.jsx)("div",{ className: "flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ",children: (0,s.jsxs)("div",{ className: "flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0",children: [(0,s.jsxs)("div",{ className: "flex w-full flex-col justify-start items-start",children: [(0,s.jsx)("div",{ className: !0,children: (0,s.jsx)("p",{ className: "text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800",children: "Check out" }) }),(0,s.jsx)("div",{ className: "mt-2",children: (0,s.jsx)("a",{ href: "javascript:void(0)",className: "text-base leading-4 underline hover:text-gray-800 text-gray-600",children: "Back to my bag" }) }),(0,s.jsx)("div",{ className: "mt-12",children: (0,s.jsx)("p",{ className: "text-xl font-semibold leading-5 text-gray-800",children: "Shipping Details" }) }),(0,s.jsxs)("form",{ className: "mt-8 flex flex-col justify-start items-start w-full space-y-8 ",onSubmit: w(k),children: [(0,s.jsx)("input",{ ...b("firstName",{ required: "First Name is required" }),className: "px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full",placeholder: "First Name" }),v.firstName && (0,s.jsx)("p",{ role: "alert",className: "text-red-500 text-xs font-medium mt-2",children: null === (e = v.firstName) || void 0 === e ? void 0 : e.message }),(0,s.jsx)("input",{ ...b("lastName",{ required: "lastName is required" }),className: "px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full",placeholder: "Last Name" }),v.lastName && (0,s.jsx)("p",{ role: "alert",className: "text-red-500 text-xs font-medium mt-2",children: null === (t = v.lastName) || void 0 === t ? void 0 : t.message }),(0,s.jsx)("input",{ ...b("email",{ required: "email is required" }),className: "px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full",placeholder: "email" }),v.email && (0,s.jsx)("p",{ role: "alert",className: "text-red-500 text-xs font-medium mt-2",children: null === (l = v.email) || void 0 === l ? void 0 : l.message }),(0,s.jsx)("input",{ ...b("Address",{ required: "Address is required" }),className: "px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full",placeholder: "Address" }),v.Address && (0,s.jsx)("p",{ role: "alert",className: "text-red-500 text-xs font-medium mt-2",children: null === (c = v.Address) || void 0 === c ? void 0 : c.message }),(0,s.jsx)("input",{ ...b("phoneNumber",{ required: "Address is required" }),className: "focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full",placeholder: "Phone Number" }),(0,s.jsx)("button",{ type: "submit",className: "focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800",children: "Proceed to payment" })] }),(0,s.jsx)("div",{ className: "mt-4 flex justify-start items-center w-full",children: (0,s.jsx)("a",{ href: "javascript:void(0)",className: "text-base leading-4 underline focus:outline-none focus:text-gray-500 hover:text-gray-800 text-gray-600",children: "Back to my bag" }) })] }),(0,s.jsxs)("div",{ className: "flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14",children: [(0,s.jsx)("div",{ children: (0,s.jsx)("h1",{ className: "text-2xl font-semibold leading-6 text-gray-800",children: "Order Summary" }) }),(0,s.jsxs)("div",{ className: "flex mt-7 flex-col items-end w-full space-y-6",children: [(0,s.jsxs)("div",{ className: "flex justify-between w-full items-center",children: [(0,s.jsx)("p",{ className: "text-lg leading-4 text-gray-600",children: "Total items" }),(0,s.jsx)("p",{ className: "text-lg font-semibold leading-4 text-gray-600",children: "20" })] }),(0,s.jsxs)("div",{ className: "flex justify-between w-full items-center",children: [(0,s.jsx)("p",{ className: "text-lg leading-4 text-gray-600",children: "Total Charges" }),(0,s.jsx)("p",{ className: "text-lg font-semibold leading-4 text-gray-600",children: "$2790" })] }),(0,s.jsxs)("div",{ className: "flex justify-between w-full items-center",children: [(0,s.jsx)("p",{ className: "text-lg leading-4 text-gray-600",children: "Shipping charges" }),(0,s.jsx)("p",{ className: "text-lg font-semibold leading-4 text-gray-600",children: "$90" })] }),(0,s.jsxs)("div",{ className: "flex justify-between w-full items-center",children: [(0,s.jsx)("p",{ className: "text-lg leading-4 text-gray-600",children: "Sub total " }),(0,s.jsx)("p",{ className: "text-lg font-semibold leading-4 text-gray-600",children: "$3520" })] })] }),(0,s.jsxs)("div",{ className: "flex justify-between w-full items-center mt-32",children: [(0,s.jsxs)("p",{ className: "text-xl font-semibold leading-4 text-gray-800",children: ["Estimated Total"," "] }),(0,s.jsx)("p",{ className: "text-lg font-semibold leading-4 text-gray-800",children: "$2900" })] })] })] }) }) }) }) } } },function (e) { e.O(0,[597,87,536,916,774,888,179],function () { return e(e.s = 386) }),_N_E = e.O() }]);