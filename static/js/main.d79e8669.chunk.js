(this.webpackJsonphampaioclient=this.webpackJsonphampaioclient||[]).push([[0],{39:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(31),i=n.n(s),o=(n(39),n(4)),u=n.n(o),j=n(6),l=n(2),d=n(32),b="token",p=n.n(d).a.create({baseURL:"http://localhost:3001",headers:{"Content-Type":"application/json"}});p.interceptors.request.use((function(e){var t=localStorage.getItem(b);return e.headers.Authorization=t?"Bearer ".concat(t):"",e}));var O=p,h=function(e){return O.post("/user/register",e)},x=function(e){return O.post("/user/login",e)},f=function(e){return O.get("/user/".concat(e))},v=function(e){return O.post("/forgotpassword",e)},m=function(e){return O.put("/resetpassword",e)},g=function(e){return O.post("/productcategory",e)},C=function(e){return O.post("/product",e)},w=function(){return O.get("/productcategory")},k=function(){return O.get("/product")},N=function(e){return O.post("/productbrand",e)},I=function(){return O.get("/productbrand")},y=function(e){return O.put("/shoppingcart/add",e)},P=function(e){return O.put("/favouriteproducts",e)},S="/hampaioclient/signin",L="/hampaioclient/",D="/hampaioclient/user/settings",R="/hampaioclient/user/profile",B="/reset/:token",_="/product/accessories",T="/brands",A="/expertise",H="/news",W="/product",E="/checkout",F="/hampaioclient/admin",U=function(e){return e?"/product/".concat(e):"/product/:id"},V=n(5),M=n(7),q=Object(r.createContext)(null),G={id:void 0,username:void 0,token:void 0,authenticated:!1,cartId:void 0,shoppingCart:{products:[]},newsLetterSubscription:{recieveNewsLetters:!1},favouriteProducts:[]},J=function(e){var t=Object(r.useState)(G),n=Object(l.a)(t,2),a=n[0],s=n[1],i=e.children;return Object(c.jsx)(q.Provider,{value:[a,s],children:i})},K=(n(58),function(e){var t=e.drawerHandler;return Object(c.jsx)("div",{onClick:function(){return t?t(!1):null},className:"BackDrop"})}),Y=(n(59),function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:"Bli del av en r\xf6relse och ta den av erbjudanden samt nyheter"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{placeholder:"ange din email"}),Object(c.jsx)("button",{onClick:function(e){return function(e){e.preventDefault()}(e)},children:" prenumerera"})]})]})}),z=(n(60),n.p+"static/media/map_icon.08db6406.svg"),X=n.p+"static/media/copyright.1982f0ae.svg",Q=function(){return Object(c.jsxs)("div",{className:"footerContainer",children:[Object(c.jsxs)("ol",{className:"OLhelp",children:[Object(c.jsx)("li",{className:"OLhelpTitle",children:"Information"}),Object(c.jsx)(V.b,{to:"/checkout",children:Object(c.jsx)("li",{className:"helpLI",children:Object(c.jsx)("span",{children:"Cookies"})})}),Object(c.jsx)(V.b,{to:"/checkout",children:Object(c.jsx)("li",{className:"helpLI",children:Object(c.jsx)("span",{children:"K\xf6pvilkor"})})}),Object(c.jsx)(V.b,{to:"/checkout",children:Object(c.jsx)("li",{className:"helpLI",children:Object(c.jsx)("span",{children:"Medlemsvilkor"})})}),Object(c.jsx)(V.b,{to:"/checkout",children:Object(c.jsx)("li",{className:"helpLI",children:Object(c.jsx)("span",{children:"Integritetspolicy"})})}),Object(c.jsx)(V.b,{to:"/checkout",children:Object(c.jsx)("li",{className:"helpLI",children:Object(c.jsx)("span",{children:"Returnera en vara"})})})]}),Object(c.jsxs)("ol",{className:"OLAbout",children:[Object(c.jsx)("li",{className:"OLAboutTitle",children:"Hampa.io"}),Object(c.jsx)(V.b,{to:"/checkout",children:Object(c.jsx)("li",{className:"aboutLI",children:Object(c.jsx)("span",{children:"Om Oss"})})}),Object(c.jsx)(V.b,{to:"/checkout",children:Object(c.jsx)("li",{className:"aboutLI",children:Object(c.jsx)("span",{children:"Milj\xf6arbete"})})}),Object(c.jsx)(V.b,{to:"/checkout",children:Object(c.jsx)("li",{className:"aboutLI",children:Object(c.jsx)("span",{children:"Press & Media"})})}),Object(c.jsx)(V.b,{to:"/checkout",children:Object(c.jsx)("li",{className:"aboutLI",children:Object(c.jsx)("span",{children:"Jobb"})})}),Object(c.jsx)(V.b,{to:"/checkout",children:Object(c.jsx)("li",{className:"aboutLI",children:Object(c.jsx)("span",{children:"App"})})})]}),Object(c.jsxs)("ol",{className:"OLContact",children:[Object(c.jsx)("li",{className:"OLContactTitle",children:"Kontakt"}),Object(c.jsx)(V.b,{to:"/kontakt",children:Object(c.jsx)("li",{className:"ContactLI",children:Object(c.jsx)("span",{children:"Kontaktform"})})}),Object(c.jsx)("li",{className:"ContactLI",children:"Direktlinje +46 722 92 1983"}),Object(c.jsx)("li",{className:"ContactLIminor",children:"Veckodagar: 10:00 - 23:00"}),Object(c.jsx)("li",{className:"ContactLIminor",children:"Helgdagar: 12:00 - 16:00"})]}),Object(c.jsxs)("ol",{className:"OLCompany",children:[Object(c.jsxs)("li",{className:"footerList",children:[" ",Object(c.jsx)("img",{className:"mapIcon",src:z,alt:""})," Moms incubatorgatan 47B, G\xf6teborg, Sverige."]})," ",Object(c.jsx)("br",{}),Object(c.jsxs)("li",{className:"footerList",children:[" ",Object(c.jsx)("img",{className:"copyRightIcon",src:X,alt:""}),"  Upphovsr\xe4tt 2021, \xa9 HAMPAio AB."]})]})]})},Z=function(){var e=Object(r.useContext)(q),t=Object(l.a)(e,2),n=t[0];t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:" 1. Popul\xe4raste produkter "}),Object(c.jsx)("h1",{children:" 2. email sub "}),Object(c.jsx)(Y,{}),Object(c.jsx)("h1",{children:" 3. footer "}),Object(c.jsx)("h1",{children:" 4. customer reviews "}),Object(c.jsx)("button",{onClick:function(){return console.log(n)},children:"authenticatedUser"}),Object(c.jsx)(Q,{})]})},$=n(3),ee=function(){var e=Object(M.f)(),t=Object(r.useContext)(q),n=Object(l.a)(t,2)[1],a=Object(r.useState)({username:"",password:"",email:"",recieveNewsLetters:!0}),s=Object(l.a)(a,2),i=s[0],o=s[1],d=Object(r.useState)({username:"",password:""}),p=Object(l.a)(d,2),O=p[0],f=p[1],m=Object(r.useState)({email:""}),g=Object(l.a)(m,2),C=g[0],w=g[1],k=function(){var t=Object(j.a)(u.a.mark((function t(c){var r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,t.next=4,x(O);case 4:r=t.sent,a=r.data,localStorage.setItem(b,a.token),console.log(a),n({token:a.token,id:a.id,authenticated:!0,username:a.username,shoppingCart:a.shoppingCart[0],cartId:a.shoppingCart[0]._id,newsLetterSubscription:a.newsLetterSubscription[0],favouriteProducts:a.favouriteProducts}),e.push(L),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}(),N=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h(i);case 4:alert("Sucessfully created your account!"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(C);case 3:alert("We've sent a recovery link to: ".concat(C.email)),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0),alert("Error occured");case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Login"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{placeholder:"username",onChange:function(e){return f(Object($.a)(Object($.a)({},O),{},{username:e.target.value}))}})," ",Object(c.jsx)("br",{}),Object(c.jsx)("input",{placeholder:"password",onChange:function(e){return f(Object($.a)(Object($.a)({},O),{},{password:e.target.value}))}}),Object(c.jsx)("button",{onClick:function(e){return k(e)},children:"Sign in"})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("h1",{children:"Register"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{placeholder:"username",onChange:function(e){return o(Object($.a)(Object($.a)({},i),{},{username:e.target.value}))}})," ",Object(c.jsx)("br",{}),Object(c.jsx)("input",{placeholder:"email",onChange:function(e){return o(Object($.a)(Object($.a)({},i),{},{email:e.target.value}))}})," ",Object(c.jsx)("br",{}),Object(c.jsx)("input",{placeholder:"password",onChange:function(e){return o(Object($.a)(Object($.a)({},i),{},{password:e.target.value}))}})," ",Object(c.jsx)("br",{}),"Recieve newsletter?",Object(c.jsx)("input",{checked:i.recieveNewsLetters,type:"checkbox",onChange:function(){return o(Object($.a)(Object($.a)({},i),{},{recieveNewsLetters:!i.recieveNewsLetters}))}})," ",Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(e){return N(e)},children:"Register"})]}),Object(c.jsx)("hr",{}),Object(c.jsx)("h1",{children:"Forgot your password?"}),Object(c.jsx)("input",{placeholder:"Enter your email",onChange:function(e){return w({email:e.target.value})}}),Object(c.jsx)("button",{onClick:function(){return I()},children:"Send recovery link"})]})},te=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"This is the userSettingsView"}),Object(c.jsx)("h1",{children:"Change password here:"}),Object(c.jsx)("input",{placeholder:"current password"})," ",Object(c.jsx)("br",{}),Object(c.jsx)("input",{placeholder:"new password"})," ",Object(c.jsx)("br",{})]})},ne=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Your info"}),Object(c.jsx)("p",{children:"Name:"}),Object(c.jsx)("p",{children:"Email:"}),Object(c.jsx)("button",{children:"Change Password"}),Object(c.jsx)("hr",{}),Object(c.jsx)("h1",{children:"Shipping Address"}),Object(c.jsx)("p",{children:"Name and Surname"}),Object(c.jsx)("p",{children:"Street Address"}),Object(c.jsx)("p",{children:"Postcode City"}),Object(c.jsx)("p",{children:"Country"}),Object(c.jsx)("p",{children:"Phone number"}),Object(c.jsx)("hr",{}),Object(c.jsx)("h1",{children:"Previous Orders:"}),Object(c.jsx)("p",{children:"None"}),Object(c.jsx)("hr",{}),Object(c.jsx)("button",{children:" Logout "})]})},ce=function(){var e=Object(M.f)(),t=Object(r.useState)(""),n=Object(l.a)(t,2),a=n[0],s=n[1],i=Object(r.useState)({}),o=Object(l.a)(i,2),d=o[0],b=o[1],p=Object(r.useContext)(q),O=Object(l.a)(p,2)[1],h=window.location.href.split("/").reverse()[0],f=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={password:a,resetPasswordToken:h},e.next=3,m(t);case 3:n=e.sent,b(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var t=Object(j.a)(u.a.mark((function t(){var n,c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c={username:null===(n=d.data)||void 0===n?void 0:n.username,password:a},200!=d.status){t.next=8;break}return t.next=4,x(c);case 4:r=t.sent,O(r.data),console.log(r.data),e.push(L);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){v()}),[d]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"This is the resetPasswordView"}),Object(c.jsx)("input",{placeholder:"Your new password",onChange:function(e){return s(e.target.value)}})," ",Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){return f()},children:"reset pw"})]})},re=(n(69),function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,n=t.data,console.log(n),a(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){s()}),[]),n.map((function(e){return e.productCategoryName})),Object(c.jsxs)("ul",{className:"catergoryFilterWrapper",children:[Object(c.jsx)("li",{className:"categoryFilterLI",children:"Alla Produkter"}),n.map((function(e,t){return Object(c.jsxs)("li",{className:"categoryFilterLI",children:[" ",e.productCategoryName," "]},t)}))]})}),ae=n(14),se=(n(70),Object(r.createContext)(null)),ie=function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),a=n[0],s=n[1],i=e.children;return Object(c.jsx)(se.Provider,{value:[a,s],children:i})},oe=n.p+"static/media/heart.4d053c54.svg",ue=n.p+"static/media/filledHeart.1d5edac5.svg",je=function(){var e=Object(M.f)(),t=Object(r.useState)([]),n=Object(l.a)(t,2),a=n[0],s=n[1],i=Object(r.useContext)(se),o=Object(l.a)(i,2)[1],d=Object(r.useContext)(q),b=Object(l.a)(d,2),p=b[0],O=b[1],h=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,n=t.data,s(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){h()}),[]);var x=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=[].concat(Object(ae.a)(null===p||void 0===p||null===(n=p.shoppingCart)||void 0===n?void 0:n.products),[t]),e.next=4,y({cartId:p.shoppingCart._id,products:c});case 4:r=e.sent,a=r.data,o(!0),O(Object($.a)(Object($.a)({},p),{},{shoppingCart:Object($.a)(Object($.a)({},p.shoppingCart),{},{products:a.products})})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c,r,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(n=p.favouriteProducts)||void 0===n?void 0:n.some((function(e){return e._id===t})))){e.next=8;break}return c=p.favouriteProducts.filter((function(e){return e._id!==t})),O(Object($.a)(Object($.a)({},p),{},{favouriteProducts:c})),e.next=6,P({userId:p.id,favouriteProducts:c});case 6:e.next=14;break;case 8:return r=p.favouriteProducts.concat([t]),e.next=11,P({userId:p.id,favouriteProducts:r});case 11:a=e.sent,s=a.data,O(Object($.a)(Object($.a)({},p),{},{favouriteProducts:s.favouriteProducts}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t,n,r=null===(t=p.favouriteProducts)||void 0===t?void 0:t.some((function(t){return t._id===e}));return console.log(r),(null===(n=p.favouriteProducts)||void 0===n?void 0:n.some((function(t){return t._id===e})))?Object(c.jsx)("img",{className:"addToFavourite",src:ue,alt:"",onClick:function(){return f(e)}}):Object(c.jsx)("img",{className:"addToFavourite",src:oe,alt:"",onClick:function(){return f(e)}})};return Object(c.jsx)("div",{className:"displayProductsContainer",children:a.map((function(t){return Object(c.jsxs)("div",{className:"displayProductWrapper",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"productImgWrapper",children:Object(c.jsx)("img",{className:"productImg",src:"https://picsum.photos/200/200",alt:"",onClick:function(){return e.push(U(t._id),t)}})}),Object(c.jsx)("p",{className:"pBrand",children:"Herbaman Co."}),v(t._id),Object(c.jsx)("p",{className:"pTitle",children:null===t||void 0===t?void 0:t.title}),Object(c.jsxs)("p",{className:"pPrice",children:[null===t||void 0===t?void 0:t.price," kr"]})]}),Object(c.jsx)("div",{className:"addToCartButton",onClick:function(){return x(t._id)},children:"Addera till varukorg"})]},null===t||void 0===t?void 0:t._id)}))})},le=(n(71),function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"productViewTitleWrapper",children:[Object(c.jsx)("p",{className:"productViewTitle",children:"Hampa.io"}),Object(c.jsxs)("p",{className:"productViewSubTitle",children:["Explore our curated collection of homewares made in Australia and Japan. ",Object(c.jsx)("br",{}),"From candles and pottery to organic towels and Japanese pairing knives, ",Object(c.jsx)("br",{}),"each piece has been thoughtfully selected. ",Object(c.jsx)("br",{})]})]}),Object(c.jsx)(re,{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)(je,{})]})}),de=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"H\xe4r listas Accessoarer"})})},be=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"H\xe4r \xe4r alla varum\xe4rken vi sammarbetar med"})})},pe=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Beginners Guide till XD"})})},Oe=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Nyheter/senaste inkommit?"})})},he=n(13),xe=function(){var e=Object(r.useState)([{productCategoryName:"",_id:""}]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)([{productBrand:"",_id:""}]),i=Object(l.a)(s,2),o=i[0],d=i[1],b=Object(r.useState)({title:"",price:0,quantity:0,productBrand:"",productCategory:""}),p=Object(l.a)(b,2),O=p[0],h=p[1],x=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,n=t.data,a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,n=t.data,d(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){x(),f()}),[]);var v=function(e,t){h(Object($.a)(Object($.a)({},O),{},Object(he.a)({},t,e.target.value)))};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Create a new product:"}),"productCategory: ",Object(c.jsx)("select",{onChange:function(e){return function(e,t){var c=n.find((function(t){return t.productCategoryName===e.target.value}));h(Object($.a)(Object($.a)({},O),{},Object(he.a)({},t,null===c||void 0===c?void 0:c._id)))}(e,"productCategory")},children:n.map((function(e){return Object(c.jsx)("option",{children:null===e||void 0===e?void 0:e.productCategoryName},null===e||void 0===e?void 0:e._id)}))})," ",Object(c.jsx)("br",{}),"productBrand: ",Object(c.jsx)("select",{onChange:function(e){return function(e,t){var n=o.find((function(t){return t.productBrandName===e.target.value}));h(Object($.a)(Object($.a)({},O),{},Object(he.a)({},t,null===n||void 0===n?void 0:n._id)))}(e,"productBrand")},children:o.map((function(e){return Object(c.jsx)("option",{children:null===e||void 0===e?void 0:e.productBrandName},null===e||void 0===e?void 0:e._id)}))})," ",Object(c.jsx)("br",{}),"title: ",Object(c.jsx)("input",{placeholder:"title",onChange:function(e){return v(e,"title")}})," ",Object(c.jsx)("br",{}),"price: ",Object(c.jsx)("input",{placeholder:"price",onChange:function(e){return v(e,"price")}})," ",Object(c.jsx)("br",{}),"quantity: ",Object(c.jsx)("input",{placeholder:"quantity",onChange:function(e){return v(e,"quantity")}})," ",Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){return C(O)},children:"Create Product"})]})},fe=function(){var e=Object(r.useState)({productBrandName:""}),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Create new ProductBrand:"})," ",Object(c.jsx)("br",{}),Object(c.jsx)("h1",{children:n.productBrandName}),Object(c.jsx)("input",{onChange:function(e){return function(e,t){a(Object($.a)(Object($.a)({},n),{},Object(he.a)({},t,e.target.value)))}(e,"productBrandName")}}),Object(c.jsx)("button",{onClick:function(){return N(n)},children:"Create ProductBrand"})]})},ve=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Create new ProductCategory:"})," ",Object(c.jsx)("br",{}),Object(c.jsx)("h1",{children:n}),Object(c.jsx)("input",{onChange:function(e){return a(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){return g({productCategoryName:n})},children:"Create ProductCategory"})]})},me=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(ve,{})," ",Object(c.jsx)("hr",{}),Object(c.jsx)(fe,{})," ",Object(c.jsx)("hr",{}),Object(c.jsx)(xe,{})," ",Object(c.jsx)("hr",{})]})},ge=function(){var e=Object(r.useContext)(q),t=Object(l.a)(e,2);t[0],t[1];return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"DU HAR \xc4NNU INTE LAGT N\xc5GRA VAROR I DIN VARUKORG"})})},Ce=(n(72),function(){var e=Object(M.g)(),t=Object(r.useContext)(se),n=Object(l.a)(t,2)[1],a=Object(r.useContext)(q),s=Object(l.a)(a,2),i=s[0],o=s[1],d=function(){var e=Object(j.a)(u.a.mark((function e(t){var c,r,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=[].concat(Object(ae.a)(null===i||void 0===i||null===(c=i.shoppingCart)||void 0===c?void 0:c.products),[t]),e.next=4,y({cartId:i.shoppingCart._id,products:r});case 4:a=e.sent,s=a.data,n(!0),o(Object($.a)(Object($.a)({},i),{},{shoppingCart:Object($.a)(Object($.a)({},i.shoppingCart),{},{products:s.products})})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"worked"}),Object(c.jsx)("button",{onClick:function(){return console.log(e.state)},children:"show location state"})," ",Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:e.state.price})," ",Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:e.state.productBrandName})," ",Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:e.state.productCategoryName})," ",Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:e.state.quantity})," ",Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:e.state.title})," ",Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){return d(e.state._id)},children:"Add to cart"})]})}),we="/user/favourite",ke=function(){var e=Object(r.useContext)(q),t=Object(l.a)(e,2),n=t[0];t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{onClick:function(){return console.log(n.favouriteProducts)},children:"MY FAVOURITES"}),Object(c.jsx)("p",{children:"H\xe4r finner du produkter som du har lagt till i mina favoriter. L\xe4gg till artiklar i mina favoriter genom att klicka p\xe5  f\xf6r tillh\xf6rande produkt."}),Object(c.jsx)("div",{children:n.favouriteProducts.map((function(e){return Object(c.jsx)("div",{children:e.title},e.title)}))})]})},Ne=function(e){var t,n=e.children,a=Object(r.useContext)(q),s=Object(l.a)(a,2),i=s[0],o=s[1],d=function(e){return i.authenticated?e:ee},p=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,c,r,a,s,i,j,l,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem(b)){e.next=3;break}return e.abrupt("return");case 3:if(n=t.split(".")[1],c=n.replace("-","+").replace("_","/"),r=JSON.parse(window.atob(c)),!(r.exp>=Math.floor(Date.now()/1e3))){e.next=13;break}return e.next=9,f(r.id);case 9:d=e.sent,o({id:r.id,authenticated:!0,username:d.data.username,shoppingCart:null===(a=d.data)||void 0===a?void 0:a.shoppingCart[0],cartId:null===(s=d.data)||void 0===s||null===(i=s.shoppingCart[0])||void 0===i?void 0:i._id,newsLetterSubscription:null===(j=d.data)||void 0===j?void 0:j.newsLetterSubscription[0],favouriteProducts:null===(l=d.data)||void 0===l?void 0:l.favouriteProducts}),e.next=15;break;case 13:o({authenticated:!1,id:void 0,username:void 0}),localStorage.removeItem(b);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){p()}),[]),Object(c.jsxs)(V.a,{children:[Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)(K,{})}),n,Object(c.jsxs)(M.c,{children:[Object(c.jsx)(M.a,{exact:!0,path:S,component:(t=ee,i.authenticated?Z:t)}),Object(c.jsx)(M.a,{exact:!0,path:B,component:ce}),Object(c.jsx)(M.a,{exact:!0,path:E,component:ge}),Object(c.jsx)(M.a,{exact:!0,path:W,component:le}),Object(c.jsx)(M.a,{exact:!0,path:_,component:de}),Object(c.jsx)(M.a,{exact:!0,path:T,component:be}),Object(c.jsx)(M.a,{exact:!0,path:A,component:pe}),Object(c.jsx)(M.a,{exact:!0,path:H,component:Oe}),Object(c.jsx)(M.a,{exact:!0,path:U(),component:Ce}),Object(c.jsx)(M.a,{exact:!0,path:we,component:d(ke)}),Object(c.jsx)(M.a,{exact:!0,path:D,component:d(te)}),Object(c.jsx)(M.a,{exact:!0,path:R,component:d(ne)}),Object(c.jsx)(M.a,{exact:!0,path:F,component:me}),Object(c.jsx)(M.a,{component:Z})]})]})},Ie=(n(73),function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}),ye=(n(74),n(75),function(e){return Object(c.jsxs)("button",{className:"toggle-button",onClick:function(){return e.drawerHandler(!0)},children:[Object(c.jsx)("div",{className:"toggle-button__line"}),Object(c.jsx)("div",{className:"toggle-button__line"}),Object(c.jsx)("div",{className:"toggle-button__line"})]})}),Pe=(n(76),function(e){return Object(c.jsxs)("nav",{className:e.drawerIsOpen?"side-drawer open":"side-drawer",children:[Object(c.jsx)("h1",{onClick:function(){return e.drawerHandler(!1)},children:"Exit"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/",children:"Products"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/",children:"Users"})})]})]})}),Se=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(ye,{drawerHandler:a}),Object(c.jsx)(Pe,{drawerIsOpen:n,drawerHandler:a}),!n||Object(c.jsx)(K,{drawerHandler:a})]})},Le=n.p+"static/media/logotypeTemplate.55df397c.svg",De=(n(77),n.p+"static/media/like.665ede1a.svg"),Re=function(){var e=Object(M.f)(),t=Object(r.useContext)(q),n=Object(l.a)(t,2)[1];return Object(c.jsxs)("div",{className:"profileDropdown",children:[Object(c.jsx)("span",{children:"Arasto Sahbaei"})," ",Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:"arasto.sahbaei@gmail.com"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"dropDownProfileRowWrapper",children:[Object(c.jsx)("img",{className:"profileDropDownRowImg",src:De,alt:""}),Object(c.jsx)("span",{onClick:function(){return e.push(R)},children:"Profil"})]}),Object(c.jsxs)("div",{className:"dropDownProfileRowWrapper",children:[Object(c.jsx)("img",{className:"profileDropDownRowImg",src:De,alt:""}),Object(c.jsx)("span",{onClick:function(){return e.push(D)},children:"Inst\xe4llningar"})]}),Object(c.jsxs)("div",{className:"dropDownProfileRowWrapper",children:[Object(c.jsx)("img",{className:"profileDropDownRowImg",src:De,alt:""}),Object(c.jsx)("span",{onClick:function(){return e.push(D)},children:"Sparade Produkter"})]}),Object(c.jsxs)("div",{className:"dropDownProfileRowWrapper",children:[Object(c.jsx)("img",{className:"profileDropDownRowImg",src:De,alt:""}),Object(c.jsx)("span",{onClick:function(){return n({_id:void 0,username:void 0,token:void 0,authenticated:!1,cartId:void 0,shoppingCart:{products:[]},newsLetterSubscription:{recieveNewsLetters:!1},favouriteProducts:[]}),localStorage.removeItem(b),void e.push(L)},children:"Logga ut"})]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"dropDownProfileRowWrapper",children:[Object(c.jsx)("img",{className:"profileDropDownRowImg",src:De,alt:""}),Object(c.jsx)("span",{onClick:function(){return e.push(D)},children:"Spr\xe5k: Svenska"})]}),Object(c.jsxs)("div",{className:"dropDownProfileRowWrapper",children:[Object(c.jsx)("img",{className:"profileDropDownRowImg",src:De,alt:""}),Object(c.jsx)("span",{onClick:function(){return e.push(D)},children:"Plats: Sverige"})]}),Object(c.jsxs)("div",{className:"dropDownProfileRowWrapper",children:[Object(c.jsx)("img",{className:"profileDropDownRowImg",src:De,alt:""}),Object(c.jsx)("span",{onClick:function(){return e.push(D)},children:"Data & GDPR"})]}),Object(c.jsxs)("div",{className:"dropDownProfileRowWrapper",children:[Object(c.jsx)("img",{className:"profileDropDownRowImg",src:De,alt:""}),Object(c.jsx)("span",{onClick:function(){return e.push(D)},children:"Hj\xe4lp"})]}),Object(c.jsxs)("div",{className:"dropDownProfileRowWrapper",children:[Object(c.jsx)("img",{className:"profileDropDownRowImg",src:De,alt:""}),Object(c.jsx)("span",{onClick:function(){return e.push(D)},children:"Skicka Feedback"})]})]})},Be=n.p+"static/media/user.9fd9547f.svg",_e=(n(78),function(){return Object(c.jsxs)("div",{className:"profileWrapper",children:[Object(c.jsx)("img",{className:"profileImg",src:Be,alt:""}),Object(c.jsx)(Re,{})]})}),Te=(n(79),n(80),n.p+"static/media/empty_cart.b50a22cf.png"),Ae=n.p+"static/media/cart-exit.68362226.svg",He=n.p+"static/media/free-return.146de056.svg",We=n.p+"static/media/cart-trash.59ef8d63.svg",Ee=function(e){var t=Object(M.f)(),n=e.isShoppingBagOpen,a=e.setIsShoppingBagOpen,s=Object(r.useContext)(q),i=Object(l.a)(s,2),o=i[0],d=i[1],b=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:Te,alt:"",className:"emptyCartImg"}),Object(c.jsxs)("p",{children:["Your cart is empty.. ",Object(c.jsx)("br",{})," Why not fill it with new designs?"]}),Object(c.jsx)("button",{onClick:function(){return t.push(W),void e.setIsShoppingBagOpen(!1)},children:"Butik"})," ",Object(c.jsx)("br",{})]})},p=function(){var e,t,n=0;return null===o||void 0===o||null===(e=o.shoppingCart)||void 0===e||null===(t=e.products)||void 0===t||t.map((function(e){return n+=e.price})),n},O=function(){var n,r,s,i;return Object(c.jsxs)("div",{className:"displayCartWrapper",children:[Object(c.jsxs)("span",{children:[null===o||void 0===o||null===(n=o.shoppingCart)||void 0===n||null===(r=n.products)||void 0===r?void 0:r.length," f\xf6rem\xe5l i varukorgen"]}),null===o||void 0===o||null===(s=o.shoppingCart)||void 0===s||null===(i=s.products)||void 0===i?void 0:i.map((function(n,r){return Object(c.jsxs)("ul",{className:"cartUL",children:[Object(c.jsx)("img",{className:"cartProductImg",onClick:function(){return c=n,t.push(U(c._id),c),void e.setIsShoppingBagOpen(!1);var c},src:"https://picsum.photos/200/200",alt:"",style:{width:100}}),Object(c.jsx)("li",{children:n.title}),Object(c.jsx)("img",{className:"cartTrashImg",src:We,alt:"",onClick:function(){var e;return h(null===o||void 0===o||null===(e=o.shoppingCart)||void 0===e?void 0:e.products,r)}}),Object(c.jsxs)("li",{children:[n.price," :-"]})]},r)})),Object(c.jsxs)("div",{className:"cartDiv",children:[Object(c.jsxs)("div",{className:"freeReturnDiv",children:[Object(c.jsx)("img",{className:"freeReturnImg",src:He,alt:""}),Object(c.jsx)("span",{className:"freeReturnText",children:"100 dagar \xe5ngerr\xe4tt med gratis retur"})]}),Object(c.jsx)("p",{children:"frakt: 0kr"}),Object(c.jsxs)("p",{children:["Total summa: ",p()]}),Object(c.jsx)("button",{onClick:function(){return a(!1)},children:"forts\xe4tt handla"}),Object(c.jsx)("button",{onClick:function(){return t.push(E),void a(!1)},children:"G\xe5 vidare till kassan"})]})]})},h=function(){var e=Object(j.a)(u.a.mark((function e(t,n){var c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[].concat(Object(ae.a)(t.slice(0,n)),Object(ae.a)(t.slice(n+1))),e.next=3,y({cartId:null===o||void 0===o||null===(c=o.shoppingCart)||void 0===c?void 0:c._id,products:r});case 3:d(Object($.a)(Object($.a)({},o),{},{shoppingCart:Object($.a)(Object($.a)({},o.shoppingCart),{},{products:r})}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:n?"cart-drawer open":"cart-drawer",children:[Object(c.jsx)("img",{className:"cartExitImg",src:Ae,alt:"",onClick:function(){return a(!1)}}),function(){var e,t;return 0===(null===o||void 0===o||null===(e=o.shoppingCart)||void 0===e||null===(t=e.products)||void 0===t?void 0:t.length)?b():O()}()]})},Fe=n.p+"static/media/cart.91fd6427.svg",Ue=(n(81),function(e){var t=e.setIsShoppingBagOpen,n=Object(r.useContext)(q),a=Object(l.a)(n,1)[0];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("img",{className:"shoppingBagIcon",onClick:function(){return t(!0)},src:Fe,alt:""}),function(){var e,t,n,r;if(0!=(null===a||void 0===a||null===(e=a.shoppingCart)||void 0===e||null===(t=e.products)||void 0===t?void 0:t.length))return Object(c.jsx)("span",{className:"shoppingCartCounter",children:null===a||void 0===a||null===(n=a.shoppingCart)||void 0===n||null===(r=n.products)||void 0===r?void 0:r.length})}()]})}),Ve=(n(82),function(){var e=Object(M.f)();return Object(c.jsxs)("ul",{className:"ulTabsWrapper",children:[Object(c.jsx)("li",{className:"liTabs",onClick:function(){return e.push(W)},children:"Boutique"}),Object(c.jsx)("li",{className:"liTabs",onClick:function(){return e.push(_)},children:"Accessoarer"}),Object(c.jsx)("li",{className:"liTabs",onClick:function(){return e.push(T)},children:"Varum\xe4rken"}),Object(c.jsx)("li",{className:"liTabs",onClick:function(){return e.push(H)},children:"Nyheter"}),Object(c.jsx)("li",{className:"liTabs",onClick:function(){return e.push(A)},children:"Expertis"})]})}),Me=function(){var e=Object(M.f)(),t=Object(r.useContext)(q),n=Object(l.a)(t,1)[0],a=Object(r.useContext)(se),s=Object(l.a)(a,2),i=s[0],o=s[1];return Object(c.jsxs)("div",{className:"desktopNavigationWrapper",children:[Object(c.jsx)("h1",{children:"LOL"}),Object(c.jsx)("img",{className:"navigationLogotype",onClick:function(){return e.push(L)},src:Le,alt:""}),Object(c.jsx)("div",{className:"desktopNavigationTabs",children:Object(c.jsx)(Ve,{})}),n.authenticated?Object(c.jsxs)("div",{className:"navigationProfile",children:[" ",Object(c.jsx)(_e,{})," "]}):Object(c.jsx)("span",{className:"signInButton",onClick:function(){return e.push(S)},children:" Sign in "}),Object(c.jsxs)("div",{className:"navHeartWrapper",children:[Object(c.jsx)("img",{className:"navHeart",src:De,alt:"",onClick:function(){return e.push(we)}}),function(){var e,t;if(0!=(null===n||void 0===n||null===(e=n.favouriteProducts)||void 0===e?void 0:e.length))return Object(c.jsx)("span",{className:"navHeartCounter",children:null===(t=n.favouriteProducts)||void 0===t?void 0:t.length})}()]}),Object(c.jsx)("div",{className:"navigationShoppingCart",children:Object(c.jsx)(Ue,{setIsShoppingBagOpen:o})}),Object(c.jsx)(Ee,{isShoppingBagOpen:i,setIsShoppingBagOpen:o}),!i||Object(c.jsx)(K,{drawerHandler:o}),Object(c.jsx)("button",{onClick:function(){return console.log(n)},children:"authenticatedUser"})]})},qe=function(){var e=function(){var e=Object(r.useState)(Ie()),t=Object(l.a)(e,2),n=t[0],c=t[1],a=function(){c(Ie())};return Object(r.useEffect)((function(){return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[]),n}().width;return Object(c.jsx)(c.Fragment,{children:e<=1e3?Object(c.jsx)(Se,{}):Object(c.jsx)(Me,{})})},Ge=function(){return Object(c.jsx)(ie,{children:Object(c.jsx)(J,{children:Object(c.jsx)(Ne,{children:Object(c.jsx)(qe,{})})})})},Je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(Ge,{})}),document.getElementById("root")),Je()}},[[83,1,2]]]);
//# sourceMappingURL=main.d79e8669.chunk.js.map