(this["webpackJsonprp-design"]=this["webpackJsonprp-design"]||[]).push([[0],{17:function(e,a,n){e.exports={"logo-img":"Loader_logo-img__3eRhI","logo-wrapper-div":"Loader_logo-wrapper-div__BFkZD",spin:"Loader_spin__1qujf"}},19:function(e,a,n){"use strict";n.d(a,"a",(function(){return s}));var r=n(10),i=n(0);function t(e,a){var n=Object(i.useState)((function(){return function(e,a){return JSON.parse(localStorage.getItem(e))||(a instanceof Function?a():a)}(e,a)})),t=Object(r.a)(n,2),c=t[0],s=t[1];return Object(i.useEffect)((function(){localStorage.setItem(e,JSON.stringify(c))}),[c]),[c,s]}var c=n(4),s=Object(i.createContext)([{},"eng",function(e){return e}]);a.b=function(e){var a=t("lang","eng"),n=Object(r.a)(a,2),i=n[0],o=n[1],p={NavbarTranslation:{HOME:"eng"===i?"HOME":"\u0413\u041b\u0410\u0412\u041d\u0410\u042f",KNIVES_AVAILABLE_FOR_LICENSING:"eng"===i?"KNIVES: AVAILABLE FOR LICENSING":"\u041d\u041e\u0416\u0418: \u0414\u041e\u0421\u0422\u0423\u041f\u041d\u041e \u0414\u041b\u042f \u041b\u0418\u0426\u0415\u041d\u0417\u0418\u0420\u041e\u0412\u0410\u041d\u0418\u042f",SERIAL_KNIVES:"eng"===i?"SERIAL KNIVES":"\u0421\u0415\u0420\u0418\u0419\u041d\u042b\u0415 \u041d\u041e\u0416\u0418",CONTACT_US:"eng"===i?"CONTACT US":"\u041a\u041e\u041d\u0422\u0410\u041a\u0422\u042b"}};return Object(c.jsx)(s.Provider,{value:[p,i,o],children:e.children})}},23:function(e,a,n){"use strict";a.a=n.p+"static/media/Logo.bc3e27e5.png"},32:function(e,a,n){},43:function(e,a,n){"use strict";n.r(a);var r=n(0),i=n.n(r),t=n(11),c=n.n(t),s=(n(32),n(33),n(8)),o={slides:[{id:1,img:n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a.781ecf58.JPG",caption_rus:{header:"\u041d\u043e\u0436\u0438 \u043e\u0442 Rp2 \u0414\u0438\u0437\u0430\u0439\u043d",paragraph:""},caption_eng:{header:"Knives by Rp2 Design",paragraph:""}},{id:2,img:n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a2.62739604.JPG",caption_rus:{header:"\u041d\u043e\u0436\u0438 \u043e\u0442 Rp2 \u0414\u0438\u0437\u0430\u0439\u043d",paragraph:""},caption_eng:{header:"Knives by Rp2 Design",paragraph:""}},{id:3,img:n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a3.6d653cb8.JPG",caption_rus:{header:"\u041d\u043e\u0436\u0438 \u043e\u0442 Rp2 \u0414\u0438\u0437\u0430\u0439\u043d",paragraph:""},caption_eng:{header:"Knives by Rp2 Design",paragraph:""}},{id:4,img:n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a4.5c9b17a6.JPG",caption_rus:{header:"\u041d\u043e\u0436\u0438 \u043e\u0442 Rp2 \u0414\u0438\u0437\u0430\u0439\u043d",paragraph:""},caption_eng:{header:"Knives by Rp2 Design",paragraph:""}},{id:5,img:n.p+"static/media/\u0421\u043d\u0438\u043c\u043e\u043a5.0da4bea0.JPG",caption_rus:{header:"\u041d\u043e\u0436\u0438 \u043e\u0442 Rp2 \u0414\u0438\u0437\u0430\u0439\u043d",paragraph:""},caption_eng:{header:"Knives by Rp2 Design",paragraph:""}}]},p=Object(s.b)({name:"carousel",initialState:o,reducers:{}}).reducer,g=Object(s.b)({name:"footer",initialState:{copyright:{rus:'\xa9 2021 "\u0420\u043e\u043c\u0430\u043d \u041f  \u0414\u0438\u0437\u0430\u0439\u043d".\n\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.',eng:'\xa9 2021 "Roman P  Design".\nAll rights reserved.'},links:{email:"romanua89@gmail.com",instagram:"https://www.instagram.com/rp2_design/",facebook:"https://www.facebook.com/"},designer:{name:{rus:"\u041d\u0438\u043a\u043e\u043b\u0430\u0439 \u041b\u0435\u0431\u0435\u0434\u044c.",eng:"Nikolaj Lebed."},description:{rus:"2021 \u0433\u043e\u0434. \u0421\u0430\u0439\u0442 \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d: ",eng:"2021. Site Designed by "},linkedin:"https://www.linkedin.com/in/nikolaj-lebed-570438207/"}},reducers:{}}).reducer,d=Object(s.a)({reducer:{carousel:p,footer:g}}),u=n(21),l=n(19),b=n(22),h=n(23),m=n(17),j=n.n(m),O=n(4);var f=function(){return Object(O.jsx)("div",{className:j.a["logo-wrapper-div"],children:Object(O.jsx)("img",{className:j.a["logo-img"],src:h.a,alt:"Loader Logo"})})},_=i.a.lazy((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,79))}));c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(b.a,{children:Object(O.jsx)(u.a,{store:d,children:Object(O.jsx)(l.b,{children:Object(O.jsx)(i.a.Suspense,{fallback:Object(O.jsx)(f,{}),children:Object(O.jsx)(_,{})})})})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.b5a3f94f.chunk.js.map