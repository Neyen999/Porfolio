(this.webpackJsonpporfolio=this.webpackJsonpporfolio||[]).push([[0],{20:function(e,c,t){},33:function(e,c,t){"use strict";t.r(c);var s=t(2),i=t.n(s),n=t(6),a=t.n(n),r=t(3),l=(t(20),t(1)),o=function(){return Object(l.jsxs)("header",{className:"header",id:"header",children:[Object(l.jsx)("i",{onClick:function(){var e=document.querySelector(".header__nav--list");e.classList.toggle("is-active"),document.querySelector("#inicio").addEventListener("click",(function(){e.classList.remove("is-active")})),document.querySelector("#projects").addEventListener("click",(function(){e.classList.remove("is-active")})),document.querySelector("#contact").addEventListener("click",(function(){e.classList.remove("is-active")}))},className:"fas fa-bars animate__animated animate__fadeInRight",id:"burger-button"}),Object(l.jsxs)("ul",{className:"header__nav--list",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#header",id:"inicio",children:"Inicio"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#proyectos",id:"projects",children:"Proyectos"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#contacto",id:"contact",children:"Contacto"})})]})]})},j=t(12),d=new Image,b=function(){return Object(s.useEffect)((function(){d.onload=function(){document.getElementById("image")},d.src="https://i.postimg.cc/pTrprFYH/Whats-App-Image-2021-09-13-at-14-49-25-Photo-Room.png"}),[]),Object(l.jsx)("section",{className:"main__banner",children:Object(l.jsxs)("div",{className:"main__banner--presentation container ",children:[Object(l.jsx)("div",{className:"img--wrapper",children:Object(l.jsx)("img",{id:"image",src:"https://i.postimg.cc/pTrprFYH/Whats-App-Image-2021-09-13-at-14-49-25-Photo-Room.png",alt:"Mi carita muy com\xfan"})}),Object(l.jsx)("div",{className:"img--circle"}),Object(l.jsx)("h1",{className:"animate__animated animate__fadeInLeft",children:"Mi nombre es Neyen"}),Object(l.jsx)("h2",{className:"animate__animated animate__fadeInLeft heading__lvl--two",children:"Front End Developer"}),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("a",{href:"https://drive.google.com/uc?export=download&id=1-vvFZSC5yBPxAqYx_eQUW1CD7jtsc4wC",download:!0,className:"main__banner--cv",children:["Descargar CV!",Object(l.jsx)(j.a,{})]})})]})})},m=function(e){var c=e.type,t=e.iconType,s=e.children;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"conocimiento--".concat(c),children:[Object(l.jsx)("i",{className:"fab fa-".concat(t," icon-config")}),s]})})},h=function(){return Object(l.jsx)("section",{className:"main__conocimientos",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"heading__lvl--two",children:"Mis Conocimientos"}),Object(l.jsxs)("div",{className:"conocimientos",children:[Object(l.jsx)(m,{type:"html",iconType:"html5",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Maquetaci\xf3n Semantica"}),Object(l.jsx)("li",{children:"Accesibilidad"}),Object(l.jsx)("li",{children:"Manipulaci\xf3n del DOM"})]})}),Object(l.jsx)(m,{type:"css",iconType:"css3-alt",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Responsive Design Mobile First"}),Object(l.jsx)("li",{children:"Preprocesadores"}),Object(l.jsx)("li",{children:"Sass"}),Object(l.jsx)("li",{children:"Less"}),Object(l.jsx)("li",{children:"Frameworks css como Bootstrap y Tailwind"})]})}),Object(l.jsx)(m,{type:"js",iconType:"js",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Manejo de Paquetes con NPM"}),Object(l.jsx)("li",{children:"Single Page Application con Vanilla JS"}),Object(l.jsx)("li",{children:"Manejo de Webpack"}),Object(l.jsx)("li",{children:"Babel"}),Object(l.jsx)("li",{children:"ReactJS"}),Object(l.jsx)("li",{children:"SPA con React Router"}),Object(l.jsx)("li",{children:"React Redux y Context"}),Object(l.jsx)("li",{children:"Styled Components"}),Object(l.jsx)("li",{children:"Autenticaci\xf3n con JWT"})]})}),Object(l.jsx)(m,{type:"git",iconType:"github-square",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Trabajo con git en la terminal"}),Object(l.jsx)("li",{children:"Curso de Git y Github Completo en Platzi Aprobado"}),Object(l.jsx)("li",{children:"Uso de Github y Github Pages"}),Object(l.jsx)("li",{children:"Deploy de las aplicaciones"}),Object(l.jsx)("li",{children:"Conocimiento de las buenas practicas en Git y Github"})]})})]}),Object(l.jsx)("svg",{className:"orange--wave",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:Object(l.jsx)("path",{fill:"#ff5500",fillOpacity:"1",d:"M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})})]})})},x=t(7),p=t.n(x),O=t(15),u=t(14),f=t(13);p.a.setAppElement("#root");var g=function(e){var c=e.slides,t=Object(s.useState)(),i=Object(r.a)(t,2),n=i[0],a=i[1],o=Object(s.useState)(!1),j=Object(r.a)(o,2),d=j[0],b=j[1];return!Array.isArray(c)||c.length<=0?null:Object(l.jsxs)(l.Fragment,{children:[c.map((function(e,c){return Object(l.jsxs)("div",{className:"plans--description one",onClick:function(){a(c),b(null!==n)},children:[Object(l.jsx)("img",{src:e.image,alt:e.name}),Object(l.jsx)("div",{className:"plans--card one",children:Object(l.jsx)("i",{className:"fas fa-eye"})})]},c)})),void 0!==n?Object(l.jsxs)(p.a,{isOpen:d,style:{overlay:{backgroundColor:"#222222b0",zIndex:"4"},content:{border:"none",background:"url(https://d33wubrfki0l68.cloudfront.net/0a619155c82b694e2267f3ed5c752919b707e33b/ef36f/static/svg_waves-3c1f0a785319462f6dce04d227eaf664.jpg)",display:"flex",flexDirection:"column",padding:"0",justifyContent:"space-around",maxWidth:"500px",margin:"0 auto"}},children:[Object(l.jsx)("h2",{className:"modal--title",children:c[n].name}),Object(l.jsx)("div",{className:"modal__img--container",children:Object(l.jsx)("a",{href:c[n].anchor,children:Object(l.jsx)("img",{className:"modal--img",src:c[n].image,alt:c[n].name})})}),Object(l.jsx)("div",{className:"description",children:Object(l.jsxs)("p",{className:"modal-description",children:[Object(l.jsx)("em",{className:"name--".concat(c[n].name),children:c[n].name}),c[n].description]})}),Object(l.jsx)("div",{className:"modal--tools",children:"Petgram"===c[n].name?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f.a,{}),Object(l.jsx)(u.a,{}),Object(l.jsx)(m,{type:"react",iconType:"react"}),Object(l.jsx)(m,{type:"js",iconType:"js"}),Object(l.jsx)(O.a,{})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{type:"html",iconType:"html5"}),Object(l.jsx)(m,{type:"css",iconType:"css3-alt"}),Object(l.jsx)(m,{type:"react",iconType:"react"}),Object(l.jsx)(m,{type:"js",iconType:"js"}),Object(l.jsx)(m,{type:"git",iconType:"github-square"})]})}),Object(l.jsx)("button",{className:"modal--button",onClick:function(){a(void 0),b(!1)},children:"Close"})]}):null]})},y=[{image:"https://i.postimg.cc/7Z1W8xKm/batatacoin.jpg",name:"Batatacoin",description:", 'La pr\xf3xima revoluci\xf3n en el intercambio de criptomonedas'. Un proyecto realizado para el curso de Responsive Web Design Mobile First de Platzi, basandonos en un dise\xf1o en figma y \xfatilizando HTML CSS y JS",anchor:"https://neyen999.github.io/batatacoin/"},{image:"https://i.postimg.cc/Yjc7bthd/image-psd-2.png",name:"Petgram",description:", la red social para tus mascotas, donde podras ver los animales m\xe1s bellos y con m\xe1s filtros del mundo. Este es un proyecto realizado para el Curso Avanzado de React, utilizando GraphQL como backend, haciendo deploy en Vercel y utilizando styled-components",anchor:"https://rickandmorty-pedia.netlify.app/"}],v=function(){return Object(l.jsxs)("section",{className:"plans",id:"proyectos",children:[Object(l.jsx)("h2",{className:"heading__lvl--two",children:"Mis Proyectos"}),Object(l.jsx)("div",{className:"plans__container",children:Object(l.jsx)(g,{slides:y})})]})},_=function(){return Object(l.jsxs)("section",{className:"main__contacto",children:[Object(l.jsx)("h2",{className:"container heading__lvl--two",id:"contacto",children:"Contacto"}),Object(l.jsxs)("form",{id:"fs-frm",name:"simple-contact-form",acceptCharset:"utf-8",action:"https://formspree.io/f/xbjqrygb",method:"post",children:[Object(l.jsxs)("fieldset",{id:"fs-frm-inputs",children:[Object(l.jsx)("label",{htmlFor:"full-name",children:"Nombre Completo"}),Object(l.jsx)("input",{autoComplete:"off",type:"text",name:"name",id:"full-name",placeholder:"Ingresa tu nombre...",required:""}),Object(l.jsx)("label",{htmlFor:"email-address",children:"Correo Electr\xf3nico"}),Object(l.jsx)("input",{autoComplete:"off",type:"email",name:"_replyto",id:"email-address",placeholder:"tu_nombre@example.com",required:""}),Object(l.jsx)("label",{htmlFor:"message",children:"Mensaje"}),Object(l.jsx)("textarea",{rows:"10",name:"message",id:"message",placeholder:"Si te interesa, podes enviarme un mensaje!",required:""}),Object(l.jsx)("input",{type:"hidden",name:"_subject",id:"email-subject",value:"Contact Form Submission"})]}),Object(l.jsx)("input",{type:"submit",value:"Enviar"})]})]})},N=function(){return Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsx)("h3",{className:"heading__lvl--tree",children:"Puedes encontrarme en..."}),Object(l.jsxs)("ul",{className:"social--media",children:[Object(l.jsx)("li",{children:Object(l.jsxs)("a",{href:"https://www.instagram.com/neyen_marinelli/",target:"_blank",rel:"noreferrer",children:[Object(l.jsx)("i",{className:"fab fa-instagram-square"}),Object(l.jsx)("span",{children:"Instagram"})]})}),Object(l.jsx)("li",{children:Object(l.jsxs)("a",{href:"https://www.linkedin.com/in/neyen-marinelli-05261b17a/",target:"_blank",rel:"noreferrer",children:[Object(l.jsx)("i",{className:"fab fa-linkedin"}),Object(l.jsx)("span",{children:"Linkedin"})]})}),Object(l.jsx)("li",{children:Object(l.jsxs)("a",{href:"https://github.com/Neyen999",target:"_blank",rel:"noreferrer",children:[Object(l.jsx)("i",{className:"fab fa-github-square"}),Object(l.jsx)("span",{children:"Github"})]})})]})]})},C=function(){return Object(l.jsxs)("div",{className:"lds-ring",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})};var w=function(){var e=Object(s.useState)(!0),c=Object(r.a)(e,2),t=c[0],i=c[1];return Object(s.useEffect)((function(){setTimeout((function(){i(!1)}),2e3)}),[]),Object(l.jsx)(l.Fragment,{children:t?Object(l.jsx)(C,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsx)(b,{}),Object(l.jsx)(h,{}),Object(l.jsx)(v,{}),Object(l.jsx)(_,{}),Object(l.jsx)(N,{})]})})};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.3ee7f8c7.chunk.js.map