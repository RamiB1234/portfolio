(window["webpackJsonpmy-react-app"]=window["webpackJsonpmy-react-app"]||[]).push([[0],{107:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),i=t.n(r),c=(t(50),t(51),t(52),t(53),t(9)),m=t(11),o=(t(54),t(2)),s=t(3),u=t.n(s),d=t(41),p=t.n(d),E=t(5),b=t.n(E);var f=function(e){var a=Object(n.useState)({}),t=Object(o.a)(a,2),r=t[0],i=t[1];return Object(n.useEffect)((function(){u.a.get("/api/information").then((function(e){i(e.data.socialLinks)}))}),[]),l.a.createElement("ul",{className:e.bordered?"mi-socialicons mi-socialicons-bordered":"mi-socialicons"},r.facebook?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.facebook},l.a.createElement(b.a,{name:"facebook"}))):null,r.twitter?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.twitter},l.a.createElement(b.a,{name:"twitter"}))):null,r.pinterest?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.pinterest},l.a.createElement(b.a,{name:"pinterest"}))):null,r.behance?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.behance},l.a.createElement(b.a,{name:"behance"}))):null,r.linkedin?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.linkedin},l.a.createElement(b.a,{name:"linkedin"}))):null,r.dribbble?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.dribbble},l.a.createElement(b.a,{name:"dribbble"}))):null,r.github?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:r.github},l.a.createElement(b.a,{name:"github"}))):null)};var g=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),s=m[0],d=m[1];return Object(n.useEffect)((function(){u.a.get("/api/information").then((function(e){r(e.data)}))}),[]),l.a.createElement("nav",{className:s?"mi-header is-visible":"mi-header"},l.a.createElement("button",{onClick:function(){d(!s)},className:"mi-header-toggler"},s?l.a.createElement(b.a,{name:"close"}):l.a.createElement(b.a,{name:"menu"})),l.a.createElement("div",{className:"mi-header-inner"},l.a.createElement("div",{className:"mi-header-image"},l.a.createElement(c.b,{to:"/"},l.a.createElement("img",{src:t.brandImage,alt:"brandimage"}))),l.a.createElement("ul",{className:"mi-header-menu"},l.a.createElement("li",null,l.a.createElement(c.c,{exact:!0,to:"/"},l.a.createElement("span",null,"Home"))),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/about"},l.a.createElement("span",null,"About"))),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/resume"},l.a.createElement("span",null,"Resume"))),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/games"},l.a.createElement("span",null,"Game Development"))),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/webapps"},l.a.createElement("span",null,"Web Development"))),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/contact"},l.a.createElement("span",null,"Contact")))),l.a.createElement("p",{className:"mi-header-copyright"},"\xa9 ",(new Date).getFullYear()," ",l.a.createElement("b",null,"Rami Bukhari"))))};var v=function(e){return l.a.createElement("div",{className:"mi-bglines"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))};var h=function(e){return l.a.createElement("div",{className:"mi-wrapper"},l.a.createElement(v,null),l.a.createElement(g,null),e.children)};var N=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){u.a.get("/api/information").then((function(e){r(e.data)}))}),[]),l.a.createElement(h,null,l.a.createElement("div",{className:"mi-home-area mi-padding-section"},l.a.createElement(p.a,{className:"mi-home-particle",params:{particles:{number:{value:160,density:{enable:!1}},color:{value:"#ffffff"},opacity:{value:.1},size:{value:5,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}}}}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-lg-10 col-12"},l.a.createElement("div",{className:"mi-home-content"},l.a.createElement("h1",null,"Hi, I am ",l.a.createElement("span",{className:"color-theme"},t.name)),l.a.createElement("p",null,t.aboutContent),l.a.createElement(f,{bordered:!0})))))))},y=t(44),w=t.n(y),k=t(18),j=t.n(k),O=t(108);var S=function(e){return l.a.createElement("div",{className:"mi-sectiontitle"},l.a.createElement("h2",null,e.title),l.a.createElement("span",null,e.title))};var A=function(e){return l.a.createElement("div",{className:"mi-service"},l.a.createElement("span",{className:"mi-service-icon"},l.a.createElement(b.a,{name:e.content.icon})),l.a.createElement("h5",null,e.content.title),l.a.createElement("p",null,e.content.details))};var I=function(e){return l.a.createElement("div",{className:"mi-testimonial-slideritem"},l.a.createElement("div",{className:"mi-testimonial"},l.a.createElement("div",{className:"mi-testimonial-content"},l.a.createElement("p",null,e.content.content)),l.a.createElement("div",{className:"mi-testimonial-author"},l.a.createElement("h5",null,e.content.author.name),l.a.createElement("h6",null,e.content.author.designation))))};var D=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(""),c=Object(o.a)(i,2),m=c[0],s=c[1],d=Object(n.useState)([]),p=Object(o.a)(d,2),E=p[0],b=p[1],f=Object(n.useState)([]),g=Object(o.a)(f,2),v=g[0],N=g[1];return Object(n.useEffect)((function(){u.a.get("/api/information").then((function(e){s(e.data)})),u.a.get("/api/services").then((function(e){b(e.data)})),u.a.get("/api/reviews").then((function(e){N(e.data)}))}),[]),l.a.createElement(h,null,l.a.createElement("div",{className:"mi-about-area mi-section mi-padding-top"},l.a.createElement("div",{className:"container"},l.a.createElement(S,{title:"About Me"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"mi-about-image"},l.a.createElement("img",{src:m.aboutImage,alt:"about",onClick:function(){r({toggler:!t})}}),l.a.createElement("span",{className:"mi-about-image-icon"},l.a.createElement(O.a,null)),l.a.createElement(j.a,{toggler:t,sources:[m.aboutImageLg]}))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"mi-about-content"},l.a.createElement("h3",null,"I am ",l.a.createElement("span",{className:"color-theme"},m.name)),l.a.createElement("p",null,"I'm a passionate programmer, I develop web applications during the day, and make games at night. Game development is my number one passion in life"),l.a.createElement("ul",null,m.name?l.a.createElement("li",null,l.a.createElement("b",null,"Full Name")," ",m.name):null,m.age?l.a.createElement("li",null,l.a.createElement("b",null,"Age")," ",m.age," Years"):null,m.phone?l.a.createElement("li",null,l.a.createElement("b",null,"Phone")," ",m.phone):null,m.nationality?l.a.createElement("li",null,l.a.createElement("b",null,"Nationality")," ",m.nationality):null,m.language?l.a.createElement("li",null,l.a.createElement("b",null,"Languages")," ",m.language):null,m.email?l.a.createElement("li",null,l.a.createElement("b",null,"Email")," ",m.email):null,m.address?l.a.createElement("li",null,l.a.createElement("b",null,"Address")," ",m.address):null,m.freelanceStatus?l.a.createElement("li",null,l.a.createElement("b",null,"Freelance")," ",m.freelanceStatus):null),l.a.createElement("a",{href:m.cvfile,className:"mi-button",target:"_blank"},"Download CV")))))),l.a.createElement("div",{className:"mi-service-area mi-section mi-padding-top"},l.a.createElement("div",{className:"container"},l.a.createElement(S,{title:"Services"}),l.a.createElement("div",{className:"mi-service-wrapper"},l.a.createElement("div",{className:"row mt-30-reverse"},E.map((function(e){return l.a.createElement("div",{className:"col-lg-4 col-md-6 col-12 mt-30",key:e.title},l.a.createElement(A,{content:e}))})))))),l.a.createElement("div",{className:"mi-review-area mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(S,{title:"Recommendations"}),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement(w.a,Object.assign({className:"mi-testimonial-slider"},{dots:!1,infinite:!0,arrows:!1,speed:500,slidesToShow:1,slidesToScroll:2,autoplay:!0,autoplaySpeed:6e3,pauseOnHover:!0,adaptiveHeight:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]}),v.map((function(e){return l.a.createElement(I,{key:e.id,content:e})}))))))))},C=t(13),M=t.n(C);var P=function(e){return l.a.createElement("div",{className:"mi-smalltitle"},l.a.createElement("span",{className:"mi-smalltitle-icon"},l.a.createElement(b.a,{name:e.icon})),l.a.createElement("h4",null,e.title))};var R=function(e){return l.a.createElement("div",{className:"mi-progress"},l.a.createElement("h6",{className:"mi-progress-title"},e.title),l.a.createElement("div",{className:"mi-progress-inner"},l.a.createElement("div",{className:"mi-progress-percentage"},"".concat(e.percentage,"%")),l.a.createElement("div",{className:"mi-progress-container"},l.a.createElement("span",{className:"mi-progress-active",style:e.isVisible?{width:"".concat(e.percentage,"%")}:{width:0}}))))};var T=function(e){var a=e.resumeData,t=a.year,n=a.position,r=a.graduation,i=a.university,c=a.company,m=a.details;return l.a.createElement("div",{className:"mi-resume mt-30"},l.a.createElement("div",{className:"mi-resume-summary"},l.a.createElement("h6",{className:"mi-resume-year"},t)),l.a.createElement("div",{className:"mi-resume-details"},l.a.createElement("h5",null,n||r),l.a.createElement("h6",{className:"mi-resume-company"},c||i),l.a.createElement("p",null,m)))};var G=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)([]),c=Object(o.a)(i,2),m=c[0],s=c[1],d=Object(n.useState)([]),p=Object(o.a)(d,2),E=p[0],b=p[1];return Object(n.useEffect)((function(){u.a.get("/api/skills").then((function(e){r(e.data)})),u.a.get("/api/experience").then((function(e){s(e.data.workingExperience),b(e.data.educationExperience)}))}),[]),l.a.createElement(h,null,l.a.createElement("div",{className:"mi-skills-area mi-section mi-padding-top"},l.a.createElement("div",{className:"container"},l.a.createElement(S,{title:"Programming Skills"}),l.a.createElement("div",{className:"mi-skills"},l.a.createElement("div",{className:"row mt-30-reverse"},t.map((function(e){return l.a.createElement(M.a,{once:!0,className:"col-lg-6 mt-30",key:e.title},l.a.createElement(R,{title:e.title,percentage:e.value}))})))))),l.a.createElement("div",{className:"mi-resume-area mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(S,{title:"Resume"}),l.a.createElement(P,{title:"Working Experience",icon:"briefcase"}),l.a.createElement("div",{className:"mi-resume-wrapper"},m.map((function(e){return l.a.createElement(T,{key:e.id,resumeData:e})}))),l.a.createElement("div",{className:"mt-30"}),l.a.createElement(P,{title:"Educational Qualifications",icon:"book"}),l.a.createElement("div",{className:"mi-resume-wrapper"},E.map((function(e){return l.a.createElement(T,{key:e.id,resumeData:e})}))))))},_=t(109),x=t(110);var B=function(e){var a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],i=t[1],c=e.content,m=c.title,s=c.engine,u=c.subtitle,d=c.role,p=c.genre,E=c.responsibilities,b=c.imageUrl,f=c.largeImageUrl,g=c.url,v=c.git;return l.a.createElement("div",{className:e.isVisible?"mi-portfolio mi-portfolio-visible":"mi-portfolio"},l.a.createElement("div",{className:"mi-portfolio-image"},l.a.createElement("img",{src:b,alt:m}),l.a.createElement("ul",null,f?l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){i(!r)}},l.a.createElement(O.a,null))):null,g?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:g},l.a.createElement(_.a,null))):null,v?l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:v},l.a.createElement(x.a,null))):null)),g?l.a.createElement("h5",null,l.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:g},m)):l.a.createElement("h5",null,m),u?l.a.createElement("h6",null,u):null,d?l.a.createElement("h6",null,l.a.createElement("b",null,"Role: "),d):null,p?l.a.createElement("h6",null,l.a.createElement("b",null,"Genre: "),p):null,s?l.a.createElement("h6",null,l.a.createElement("b",null,"Engine: "),s):null,E?l.a.createElement("h6",null,l.a.createElement("b",null,"Responsibilities: "),E):null,f?l.a.createElement(j.a,{toggler:r,sources:f}):null)};var L=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){u.a.get("/api/portfolios").then((function(e){r(e.data)}))})),l.a.createElement(h,null,l.a.createElement("div",{className:"mi-about mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(S,{title:"Game Development"}),l.a.createElement("div",{className:"row mt-30-reverse"},t.map((function(e){return l.a.createElement(M.a,{once:!0,offset:200,className:"col-lg-4 col-md-6 col-12 mt-30",key:e.id},l.a.createElement(B,{content:e}))}))))))};var H=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){u.a.get("/api/portfolios").then((function(e){r(e.data)}))})),l.a.createElement(h,null,l.a.createElement("div",{className:"mi-about mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(S,{title:"Web Development"}),l.a.createElement("div",{className:"row mt-30-reverse"},t.map((function(e){return l.a.createElement(M.a,{once:!0,offset:200,className:"col-lg-4 col-md-6 col-12 mt-30",key:e.id},l.a.createElement(B,{content:e}))}))))))},F=t(23),J=t(111),q=t(112),W=t(113);function U(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var z=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)([]),c=Object(o.a)(i,2),m=c[0],s=c[1],d=Object(n.useState)([]),p=Object(o.a)(d,2),E=p[0],b=p[1],f=Object(n.useState)({name:"",email:"",subject:"",message:""}),g=Object(o.a)(f,2),v=g[0],N=g[1],y=Object(n.useState)(!1),w=Object(o.a)(y,2),k=w[0],j=w[1],O=Object(n.useState)(""),A=Object(o.a)(O,2),I=A[0],D=A[1],C=function(e){N(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?U(t,!0).forEach((function(a){Object(F.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},v,Object(F.a)({},e.currentTarget.name,e.currentTarget.value)))};return Object(n.useEffect)((function(){u.a.get("/api/contactinfo").then((function(e){r(e.data.phoneNumbers),s(e.data.emailAddress),b(e.data.address)}))}),[]),l.a.createElement(h,null,l.a.createElement("div",{className:"mi-contact-area mi-section mi-padding-top mi-padding-bottom"},l.a.createElement("div",{className:"container"},l.a.createElement(S,{title:"Contact Me"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"mi-contact-formwrapper"},l.a.createElement("h4",null,"Get In Touch"),l.a.createElement("form",{action:"#",className:"mi-form mi-contact-form",onSubmit:function(e){if(e.preventDefault(),v.name)if(v.email)if(v.subject)if(v.message){j(!1);var a={to_name:"Rami",from_name:v.name,from_email:v.email,subject:v.subject,message_html:v.message};window.emailjs.send("gmail","template_n6CTJAXo",a).then((function(){D("You message has been sent!!!")}))}else j(!0),D("Message is required");else j(!0),D("Subject is required");else j(!0),D("Email is required");else j(!0),D("Name is required")}},l.a.createElement("div",{className:"mi-form-field"},l.a.createElement("label",{htmlFor:"contact-form-name"},"Enter your name*"),l.a.createElement("input",{onChange:C,type:"text",name:"name",id:"contact-form-name",value:v.name})),l.a.createElement("div",{className:"mi-form-field"},l.a.createElement("label",{htmlFor:"contact-form-email"},"Enter your email*"),l.a.createElement("input",{onChange:C,type:"text",name:"email",id:"contact-form-email",value:v.email})),l.a.createElement("div",{className:"mi-form-field"},l.a.createElement("label",{htmlFor:"contact-form-subject"},"Enter your subject*"),l.a.createElement("input",{onChange:C,type:"text",name:"subject",id:"contact-form-subject",value:v.subject})),l.a.createElement("div",{className:"mi-form-field"},l.a.createElement("label",{htmlFor:"contact-form-message"},"Enter your Message*"),l.a.createElement("textarea",{onChange:C,name:"message",id:"contact-form-message",cols:"30",rows:"6",value:v.message})),l.a.createElement("div",{className:"mi-form-field"},l.a.createElement("button",{className:"mi-button",type:"submit"},"Send Mail"))),k&&I?l.a.createElement("div",{className:"alert alert-danger mt-4"},I):!k&&I?l.a.createElement("div",{className:"alert alert-success mt-4"},I):null)),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"mi-contact-info"},t?l.a.createElement("div",{className:"mi-contact-infoblock"},l.a.createElement("span",{className:"mi-contact-infoblock-icon"},l.a.createElement(J.a,null)),l.a.createElement("div",{className:"mi-contact-infoblock-content"},l.a.createElement("h6",null,"Phone"),t.map((function(e){return l.a.createElement("p",{key:e},l.a.createElement("a",{href:(a=e,a)},e));var a})))):null,m?l.a.createElement("div",{className:"mi-contact-infoblock"},l.a.createElement("span",{className:"mi-contact-infoblock-icon"},l.a.createElement(q.a,null)),l.a.createElement("div",{className:"mi-contact-infoblock-content"},l.a.createElement("h6",null,"Email"),m.map((function(e){return l.a.createElement("p",{key:e},l.a.createElement("a",{href:"mailto:".concat(e)},e))})))):null,t?l.a.createElement("div",{className:"mi-contact-infoblock"},l.a.createElement("span",{className:"mi-contact-infoblock-icon"},l.a.createElement(W.a,null)),l.a.createElement("div",{className:"mi-contact-infoblock-content"},l.a.createElement("h6",null,"Address"),l.a.createElement("p",null,E))):null))))))};var V=function(){return l.a.createElement(c.a,{basename:"/"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0,component:N}),l.a.createElement(m.a,{path:"/about",component:D}),l.a.createElement(m.a,{path:"/resume",component:G}),l.a.createElement(m.a,{path:"/games",component:L}),l.a.createElement(m.a,{path:"/webapps",component:H}),l.a.createElement(m.a,{path:"/contact",component:z})))},Q=new(t(94))(t(3)),Y={name:"Rami Bukhari",aboutContent:"I'm a passionate programmer, I develop web applications during the day, and make games at night. Game development is my number one passion in life",age:31,phone:"+966 599565705",nationality:"Saudi",language:"Arabic, English",email:"rbisthebest@hotmail.com",address:"Jeddah, North Abhor, Saudi Arabia",freelanceStatus:"Available",socialLinks:{facebook:"",twitter:"https://twitter.com/RamiBokhari",pinterest:"",behance:"",linkedin:"https://www.linkedin.com/in/rami-bukhari/",dribbble:"",github:"https://github.com/RamiB1234"},brandImage:"/images/brand-image.jpg",aboutImage:"/images/about-image.jpg",aboutImageLg:"/images/about-image-lg.jpg",cvfile:"/files/resume.pdf"},K=[{title:"Web Development",icon:"code",details:"Offering full-stack development services from backend to front end, using up to date web technologies."},{title:"Mobile Application",icon:"mobile",details:"Offering mobile app development services for both iOS and android platforms using React-Native."},{title:"Game Development",icon:"game",details:"Offering game development services. Ranging from simple 2D games to complex 3D."}],X=[{id:1,content:"I know Rami as a hard working and self-driven team player. He holds a strong programming and problem solving skills. It was really a pleasure working with him.",author:{name:"Osama Ali Bin Mahfouz",designation:"Software Development Team Lead at Abdul Latif Jameel Group"}},{id:2,content:"I know Rami as a hard working and self-driven team player. He holds a strong programming and problem solving skills. It was really a pleasure working with him.",author:{name:"Osama Ali Bin Mahfouz",designation:"Software Development Team Lead at Abdul Latif Jameel Group"}}],$=[{title:".NET Framework",value:80},{title:"MVC Design Pattern",value:90},{title:"C#",value:85},{title:"jQuery",value:85},{title:"ReactJS",value:75},,{title:"React-Native",value:65},{title:"Javascript",value:80},{title:"SQL",value:75},{title:"HTML & CSS",value:90},{title:"Git",value:85}],Z=[{id:1,title:"Descend Below the Crypts",engine:"HTML5/Javascript",role:"Team member",genre:"Isometric adventure",responsibilities:"Minimap, fast walk debug feature, invulnerable cheat, character positions on minimap, HP/MP HUD bars, key & gold display, inventory mouse support, level loading bug fix, animation code improvements, tooltip feature, abilities cooldown, assorted bug fixes, heal effect, melee attacks, abilities key shortcuts, shield item, enemy treasure drop, fireball spell, cleric heal unlock, heal effect, freeze spell, attack range",imageUrl:"/images/descend.gif",url:"https://itch.io/queue/c/188585/hometeam-gamedev-formerly-gamkedo-club?game_id=566053",git:"https://github.com/gamkedo-la/Descend-Below-the-Crypts"}],ee={workingExperience:[{id:1,year:"2019 - Present",position:"IT Application Developer",company:"Prince Mohammad Bin Salman College of Business & Entrepreneurship (MBSC)",details:"My job is to develop new applications based on top management requirements and to maintain existing applications as well. I\u2019m also working on integrating solutions together using WCF or REST APIs. The primary technology I\u2019m using is ASP.NET Core / ASP.NET 4.5 for backend and React framework for frontend."},{id:2,year:"2018 - 2019",position:"Programmer",company:"Dar Al-Fikr Schools",details:"My job was to develop a comprehensive School Management System (S.M.S) for the school. That includes but not limited to: Student Affairs, Human Resources, Helpdesk System, Grading System, Inventory and Purchasing System. I was mainly using ASP.NET Core MVC 2 as the main framework for the system. I was in charge of complete development cycle starting with requirement gathering, system design, coding, releasing and testing."},{id:3,year:"2016 - 2018",position:"Database Analyst & Support services Specialist",company:"Allied Cooperative Insurance Group (ACIG)",details:"My job was to be a support party between our sales department and our vendors. We used to take business requirements from management and coordinate with outsource vendors to deliver a solution. And used to prepare management reports. I was also in charge of troubleshooting and resolving day to day software issues.  And occasionally developed software to smooth company business"},{id:4,year:"2014 - 1016",position:"Software Developer",company:"Abdul Latif Jameel Finance",details:"We were using Microsoft technologies to develop an in house system to handle all the financial operations at the branches, mainly ASP.net MVC and MS SQL. My job was to translate the business requirements to applications. All new software updates go through a QA test before release."}],educationExperience:[{id:1,year:"2018 - 2019",graduation:"React Nanodegree",university:"Udacity",details:"I learned how to build declarative UIs for the web with React, and for iOS and Android with React Native.I also learned how to manage state more predictably with Redux."},{id:2,year:"2008 - 2013",graduation:"Bachelor of Science, Electrical Engineering",university:"King AbdulAziz University",details:"Graduation Project: portable console which I designed, built both hardware and software. Using microcontrollers"}]},ae={phoneNumbers:["+966 599565705"],emailAddress:["rbisthebest@hotmail.com"],address:"Jeddah, North Abhor, Saudi Arabia"};Q.onGet("/api/information").reply((function(e){return[200,Y]})),Q.onGet("/api/services").reply((function(e){return[200,K]})),Q.onGet("/api/reviews").reply((function(e){return[200,X]})),Q.onGet("/api/skills").reply((function(e){return[200,$]})),Q.onGet("/api/portfolios").reply((function(e){return[200,Z]})),Q.onGet("/api/experience").reply((function(e){return[200,ee]})),Q.onGet("/api/contactinfo").reply((function(e){return[200,ae]})),Q.onAny().passThrough();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,a,t){e.exports=t(107)},53:function(e,a,t){},54:function(e,a,t){}},[[45,1,2]]]);
//# sourceMappingURL=main.990f8d6a.chunk.js.map