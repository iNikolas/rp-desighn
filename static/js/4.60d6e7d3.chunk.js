(this["webpackJsonprp-design"]=this["webpackJsonprp-design"]||[]).push([[4],{64:function(e,t,n){e.exports={logoWrapper:"Navbar_logoWrapper__3hueW",links:"Navbar_links__1j-37",authorText:"Navbar_authorText__1wOWl",navDiv:"Navbar_navDiv__2VJMF",nav:"Navbar_nav__3CvW9"}},70:function(e,t,n){e.exports={img:"Carousel_img__32NSJ","carousel-container":"Carousel_carousel-container__1djRF"}},71:function(e,t,n){e.exports={"flex-container":"AboutMe_flex-container__3zpvQ",container:"AboutMe_container__3QTnJ","main-header":"AboutMe_main-header__244eM","main-content":"AboutMe_main-content__-ht55","photo-container":"AboutMe_photo-container__p0dcQ",photo:"AboutMe_photo__30xC8"}},72:function(e,t,n){e.exports={onoffswitch1:"ToggleLanguage_onoffswitch1__2EFAp","onoffswitch1-checkbox":"ToggleLanguage_onoffswitch1-checkbox__rEH-8","onoffswitch1-label":"ToggleLanguage_onoffswitch1-label__1KJ2D","onoffswitch1-inner":"ToggleLanguage_onoffswitch1-inner__OS4BR","onoffswitch1-switch":"ToggleLanguage_onoffswitch1-switch__XoT6T"}},73:function(e,t,n){e.exports={"footer-nav":"Footer_footer-nav__2A4Yn","footer-logo":"Footer_footer-logo__2Uvd5","copyright-block":"Footer_copyright-block__3Fu56","main-footer":"Footer_main-footer__dTt63","main-footer-container":"Footer_main-footer-container__280m3",brand:"Footer_brand__3StYx","designer-description":"Footer_designer-description__SI_p6"}},80:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(10),o=n(76),s=n(74),r=n(22),i=n(19),l=n.p+"static/media/Loga2+\u0424\u043e\u043d_75.ee94fda0.png",j=n(64),b=n.n(j),h=n(79),f=n(4);var d=function(){var e=Object(a.useContext)(i.a),t=Object(c.a)(e,1)[0].NavbarTranslation;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(o.a,{variant:"light",expand:"xxl",className:"p-2 pb-1 pt-1 fs-6 justify-content-between font-monospace ".concat(b.a.nav),children:[Object(f.jsxs)(h.a,{className:"w-auto m-0 flex-grow-0 justify-content-center",children:[Object(f.jsx)(o.a.Brand,{as:r.b,to:"/",children:Object(f.jsx)("img",{alt:"",src:l,width:"100",height:"100",className:"d-inline-block"})}),Object(f.jsx)(o.a.Text,{as:"div",className:"fs-4 ".concat(b.a.authorText),children:"Roman Polynkevych Design"})]}),Object(f.jsx)(o.a.Toggle,{style:{marginLeft:"auto"},"aria-controls":"responsive-navbar-nav"}),Object(f.jsxs)(o.a.Collapse,{className:"".concat(b.a.links),id:"responsive-navbar-nav",children:[Object(f.jsx)(s.a.Link,{as:r.b,to:"/",children:t.HOME}),Object(f.jsx)(s.a.Link,{as:r.b,to:"licensing",children:t.KNIVES_AVAILABLE_FOR_LICENSING}),Object(f.jsx)(s.a.Link,{as:r.b,to:"/serial",children:t.SERIAL_KNIVES}),Object(f.jsx)(s.a.Link,{as:r.b,to:"/contacts",children:t.CONTACT_US})]})]})})},_=n(1),x=n(75),O=n(20),g=n(70),u=n.n(g);var m=function(){var e=Object(a.useContext)(i.a),t=Object(c.a)(e,2)[1],n=Object(O.b)((function(e){return e.carousel.slides})).map((function(e){return Object(f.jsxs)(x.a.Item,{children:[Object(f.jsx)("img",{className:"d-block w-100 ".concat(u.a.img),src:e.img,alt:e["caption_".concat(t)].paragraph}),Object(f.jsxs)(x.a.Caption,{children:[Object(f.jsx)("h3",{children:e["caption_".concat(t)].header}),Object(f.jsx)("p",{children:e["caption_".concat(t)].paragraph})]})]},e.img)}));return Object(f.jsx)(x.a,{className:u.a["carousel-container"],variant:"dark",fade:!0,pause:!1,children:n})},p=n(71),v=n.n(p);var N=function(){var e=Object(a.useContext)(i.a),t=Object(c.a)(e,2)[1],n=Object(O.b)((function(e){return e.mainContent.aboutMe})),o=Object(a.useState)({transform:"translateX(-70%)",opacity:0}),s=Object(c.a)(o,2),r=s[0],l=s[1],j=Object(a.useState)({transform:"translateX(120%)",opacity:0}),b=Object(c.a)(j,2),h=b[0],d=b[1],_=Object(a.useCallback)((function(e){var t=new IntersectionObserver((function(e){e[0].isIntersecting&&(l(null),t.disconnect())}));t.observe(e)}),[]),x=Object(a.useCallback)((function(e){var t=new IntersectionObserver((function(e){e[0].isIntersecting&&(d(null),t.disconnect())}));t.observe(e)}),[]),g=n.description[t].map((function(e,t){return Object(f.jsx)("p",{style:r,className:v.a["main-content"],children:e},t)}));return Object(f.jsxs)("article",{className:v.a.container,children:[Object(f.jsx)("header",{className:v.a["main-header"],children:n.sectionHeader[t]}),Object(f.jsxs)("div",{className:v.a["flex-container"],children:[Object(f.jsx)("div",{ref:_,children:g}),Object(f.jsx)("div",{ref:x,className:v.a["photo-container"],children:Object(f.jsx)("img",{style:h,className:v.a.photo,src:n.photo})})]})]})};var k=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m,{}),Object(f.jsx)(N,{})]})};var w=function(){return Object(f.jsx)(f.Fragment,{children:"This is about page"})},C=n(72),T=n.n(C);var y=function(){var e=Object(a.useContext)(i.a),t=Object(c.a)(e,3),n=t[1],o=t[2];return Object(f.jsxs)("div",{className:T.a.onoffswitch1,children:[Object(f.jsx)("input",{onChange:function(){o("eng"===n?"rus":"eng")},type:"checkbox",name:"onoffswitch1",className:T.a["onoffswitch1-checkbox"],id:"myonoffswitch1",checked:"eng"===n}),Object(f.jsxs)("label",{className:T.a["onoffswitch1-label"],htmlFor:"myonoffswitch1",children:[Object(f.jsx)("span",{className:T.a["onoffswitch1-inner"]}),Object(f.jsx)("span",{className:T.a["onoffswitch1-switch"]})]})]})},F=n(73),L=n.n(F),A=n(23),I=n.p+"static/media/instagram_logo1.a10fa74d.png",S=n.p+"static/media/email.119e5cdd.png",M=n.p+"static/media/facebook.862ca168.png";var E=function(){var e=Object(a.useContext)(i.a),t=Object(c.a)(e,2)[1],n=Object(O.b)((function(e){return e.footer}));return Object(f.jsx)("footer",{className:L.a["main-footer"],children:Object(f.jsxs)("div",{className:L.a["main-footer-container"],children:[Object(f.jsxs)("div",{className:L.a["copyright-block"],children:[Object(f.jsx)("img",{className:L.a["footer-logo"],src:A.a}),Object(f.jsx)("p",{children:n.copyright[t]})]}),Object(f.jsxs)("ul",{className:L.a["footer-nav"],children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:n.links.instagram,target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{src:I,alt:"instagram logo"})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"mailto: ".concat(n.links.email),children:Object(f.jsx)("img",{src:S,alt:"e-mail logo"})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:n.links.facebook,target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{src:M,alt:"facebook logo"})})})]}),Object(f.jsx)("div",{className:"".concat(L.a["copyright-block"]," ").concat(L.a["designer-description"]),children:Object(f.jsxs)("p",{children:[n.designer.description[t]," ",Object(f.jsx)("a",{href:n.designer.linkedin,target:"_blank",rel:"noreferrer",children:n.designer.name[t]})]})})]})})};t.default=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(y,{}),Object(f.jsx)(d,{}),Object(f.jsxs)(_.c,{children:[Object(f.jsx)(_.a,{path:"/about",children:Object(f.jsx)(w,{})}),Object(f.jsx)(_.a,{path:"/",children:Object(f.jsx)(k,{})})]}),Object(f.jsx)(E,{})]})}}}]);
//# sourceMappingURL=4.60d6e7d3.chunk.js.map