(this["webpackJsonpagency-website"]=this["webpackJsonpagency-website"]||[]).push([[7],{26:function(n,e,t){"use strict";t.r(e),e.default=t.p+"static/media/logo.77646688.svg"},76:function(n,e,t){"use strict";function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function i(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,i=!1,o=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return t}}(n,e)||function(n,e){if(n){if("string"===typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(e);var o,a,c,l,s,d,u=t(6),f=t(26),h=t(11),m=t(0),b=t(48),p=t(45),g=t(1),j=h.default.header(o||(o=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 5rem;\n  background-color: var(--nav);\n  color: var(--white);\n  position: relative;\n  z-index: 500;\n\n  @media only Screen and (max-width:64em ){\n    padding: 0.5rem 3rem;\n  }\n\n  @media only Screen and (max-width:40em ){\n    padding: 0.5rem 1.5rem;\n  }\n"]))),x=h.default.a(a||(a=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  width: 2rem;\n  height: auto;\n  cursor: pointer;\n\n  img {\n    margin-right: 0.5rem;\n  }\n"]))),v=h.default.nav(c||(c=Object(u.a)(["\n  width: 25rem;\n  max-width: 40rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media only Screen and (max-width: 48rem) {\n    display: none;\n  }\n\n  a {\n    font-weight: 600;\n    color: var(--white);\n    line-height: 1.5;\n\n    &::after {\n      content: '';\n      display: block;\n      height: 3px;\n      width: 3px;\n      background: transparent;\n      transition: width 0.5s;\n    }\n\n    &:not(:last-child):hover::after {\n      width: 100%;\n      background: var(--purple);\n    }\n  }\n"]))),y=h.default.button(l||(l=Object(u.a)(["\n  background-color: var(--purple);\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  color: var(--white);\n  font-weight: 600;\n  transition: all 0.2s;\n  cursor: pointer;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  &:active {\n    transform: scale(0.9);\n  }\n"]))),w=h.default.button(s||(s=Object(u.a)(["\n  position: relative;\n  background-color: transparent;\n  width: 2rem;\n  height: 2px;\n  cursor: pointer;\n  display: none;\n\n  @media only Screen and (max-width: 48rem) {\n    display: inline-block;\n  }\n\n  &::before, &::after {\n    content: '';\n    background-color: var(--white);\n    width: 2rem;\n    height: 2px;\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    cursor: pointer;\n    transition: all 0.3s;\n  }\n\n  &::before {\n    top: ",";\n    transform: ",";\n  }\n\n  &::after {\n    top: ",";\n    transform: ","\n  }\n\n\n"])),(function(n){return n.clicked?"0":"-0.5rem"}),(function(n){return n.clicked?"rotate(135deg)":"rotate(0)"}),(function(n){return n.clicked?"0":"0.5rem"}),(function(n){return n.clicked?"rotate(-135deg)":"rotate(0)"})),k=h.default.div(d||(d=Object(u.a)(["\n  display: none;\n  @media only Screen and (max-width: 48rem) {\n    display: flex;\n  }\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 0;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  opacity: ",";\n  visibility: ",";\n  background: rgba(53, 53, 63, 0.95);\n  border-radius: 20px;\n  margin: 0.5rem;\n  overflow-x: hidden;\n\n  a {\n    color: var(--white);\n    font-weight: 600;\n    font-size: 1.5rem;\n    margin: 1.5rem;\n    cursor: pointer;\n\n  }\n"])),(function(n){return n.clicked?"1":0}),(function(n){return n.clicked?"visible":"hidden"}));e.default=function(){var n=i(Object(m.useState)(!1),2),e=n[0],t=n[1],r=Object(m.useRef)(null);b.a.registerPlugin(p.a);var o=function(n,r){t(!e),function(n,e){e.preventDefault(),document.getElementById(n).scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}(n,r)};return Object(m.useEffect)((function(){var n=r.current;window.matchMedia("(max-width:40em)").matches?b.a.to(n,{position:"fixed",top:"0",left:"0",right:"0",padding:"1rem 2.5rem",borderRadius:"0 0 50px 50px",border:"2px solid var(--white)",duration:1,ease:"power1.out",scrollTrigger:{trigger:n,start:"bottom+=200 top",end:"+=100",scrub:!0}}):b.a.to(n,{position:"fixed",top:"1rem",left:"3rem",right:"3rem",padding:"1.5rem 2rem",borderRadius:"50px",border:"3px solid var(--white)",duration:1,ease:"power1.out",scrollTrigger:{trigger:n,start:"bottom+=300 top",end:"+=250",scrub:!0}})}),[]),Object(g.jsxs)(j,{ref:r,children:[Object(g.jsxs)(x,{children:[Object(g.jsx)("img",{src:f.default,alt:"CodeBucks"}),Object(g.jsx)("h3",{children:"CodeBucks"})]}),Object(g.jsxs)(v,{children:[Object(g.jsx)("a",{href:"#home",onClick:function(n){return o("home",n)},children:"Home"}),Object(g.jsx)("a",{href:"#about",onClick:function(n){return o("about",n)},children:"About Us"}),Object(g.jsx)("a",{href:"#services",onClick:function(n){return o("services",n)},children:"Services"}),Object(g.jsx)("a",{href:"#contact",onClick:function(n){return o("contact",n)},children:Object(g.jsx)(y,{children:"Contact Us"})})]}),Object(g.jsx)(w,{onClick:function(){return t(!e)},clicked:e,children:Object(g.jsx)("span",{})}),Object(g.jsxs)(k,{clicked:e,children:[Object(g.jsx)("a",{href:"#home",onClick:function(n){return o("home",n)},children:"Home"}),Object(g.jsx)("a",{href:"#about",onClick:function(n){return o("about",n)},children:"About Us"}),Object(g.jsx)("a",{href:"#services",onClick:function(n){return o("services",n)},children:"Services"}),Object(g.jsx)("a",{href:"#contact",onClick:function(n){return o("contact",n)},children:Object(g.jsx)(y,{children:"Contact Us"})})]})]})}}}]);
//# sourceMappingURL=7.0efe90d4.chunk.js.map