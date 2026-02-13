import{j as e}from"./icons-vendor-DRtilvoY.js";import{r as g,L as w,R as B}from"./react-vendor-z4aA7smL.js";import{S as X,g as Z}from"./seoConfig-D33TUiNc.js";import{S as N,N as $,P as C,a as k}from"./pagination-qjg-3iKB.js";import{A as S,H as G,a as Q}from"./HomeContactUs-CNZs-YuF.js";import{i as J,c as E,a as I}from"./index-TEItW5n4.js";import{g as R,c as K,a as ee}from"./swiper-vendor-CkNQ1VL6.js";import{c as V}from"./projectsData-foHXpqrN.js";import"./utils-CON0EOQU.js";import"./animation-vendor-k9_Lx4AM.js";function se(n){const{effect:a,swiper:s,on:l,setTranslate:t,setTransition:i,overwriteParams:o,perspective:x,recreateShadows:h,getEffectParams:f}=n;l("beforeInit",()=>{if(s.params.effect!==a)return;s.classNames.push(`${s.params.containerModifierClass}${a}`),x&&x()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const r=o?o():{};Object.assign(s.params,r),Object.assign(s.originalParams,r)}),l("setTranslate _virtualUpdated",()=>{s.params.effect===a&&t()}),l("setTransition",(r,m)=>{s.params.effect===a&&i(m)}),l("transitionEnd",()=>{if(s.params.effect===a&&h){if(!f||!f().slideShadows)return;s.slides.forEach(r=>{r.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(m=>m.remove())}),h()}});let p;l("virtualUpdate",()=>{s.params.effect===a&&(s.slides.length||(p=!0),requestAnimationFrame(()=>{p&&s.slides&&s.slides.length&&(t(),p=!1)}))})}function ae(n,a){const s=R(a);return s!==a&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function F(n,a,s){const l=`swiper-slide-shadow${s?`-${s}`:""}${` swiper-slide-shadow-${n}`}`,t=R(a);let i=t.querySelector(`.${l.split(" ").join(".")}`);return i||(i=K("div",l.split(" ")),t.append(i)),i}function te({swiper:n,extendParams:a,on:s}){a({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),se({effect:"coverflow",swiper:n,on:s,setTranslate:()=>{const{width:i,height:o,slides:x,slidesSizesGrid:h}=n,f=n.params.coverflowEffect,p=n.isHorizontal(),r=n.translate,m=p?-r+i/2:-r+o/2,c=p?f.rotate:-f.rotate,d=f.depth,j=ee(n);for(let y=0,v=x.length;y<v;y+=1){const b=x[y],_=h[y],Y=b.swiperSlideOffset,q=(m-Y-_/2)/_,u=typeof f.modifier=="function"?f.modifier(q):q*f.modifier;let U=p?c*u:0,A=p?0:c*u,M=-d*Math.abs(u),z=f.stretch;typeof z=="string"&&z.indexOf("%")!==-1&&(z=parseFloat(f.stretch)/100*_);let T=p?0:z*u,O=p?z*u:0,W=1-(1-f.scale)*Math.abs(u);Math.abs(O)<.001&&(O=0),Math.abs(T)<.001&&(T=0),Math.abs(M)<.001&&(M=0),Math.abs(U)<.001&&(U=0),Math.abs(A)<.001&&(A=0),Math.abs(W)<.001&&(W=0);const L=`translate3d(${O}px,${T}px,${M}px)  rotateX(${j(A)}deg) rotateY(${j(U)}deg) scale(${W})`,H=ae(f,b);if(H.style.transform=L,b.style.zIndex=-Math.abs(Math.round(u))+1,f.slideShadows){let D=p?b.querySelector(".swiper-slide-shadow-left"):b.querySelector(".swiper-slide-shadow-top"),P=p?b.querySelector(".swiper-slide-shadow-right"):b.querySelector(".swiper-slide-shadow-bottom");D||(D=F("coverflow",b,p?"left":"top")),P||(P=F("coverflow",b,p?"right":"bottom")),D&&(D.style.opacity=u>0?u:0),P&&(P.style.opacity=-u>0?-u:0)}}},setTransition:i=>{n.slides.map(x=>R(x)).forEach(x=>{x.style.transitionDuration=`${i}ms`,x.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>{h.style.transitionDuration=`${i}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}const ie=()=>{const[n,a]=g.useState(null),s=[{bg:"/assets/img/hero/hero_bg_2_1.jpg",title:"Build Websites That Convert & Perform",description:"Crafting fast, responsive, and high-impact websites designed to elevate your brand and grow your digital presence."},{bg:"/assets/img/hero/hero_bg_3_4.png",title:"Boost Your Online Visibility & Reach",description:"Data-driven SEO, social media, and paid ads strategies that help your business attract, engage, and convert customers."},{bg:"/assets/img/hero/hero_bg_3_3.png",title:"Smart, Scalable & Powerful App Solutions",description:"We develop intuitive mobile apps that deliver seamless user experiences and support your business growth."},{bg:"/assets/img/hero/hero_bg_2_2.jpg",title:"Launch Your High-Performance Online Store",description:"Custom e-commerce platforms built to provide smooth shopping experiences and maximize sales."},{bg:"/assets/img/hero/hero_bg_2_2.jpg",title:"Beautiful Designs Exceptional User Experience.",description:"Crafting visually stunning, user-friendly interfaces that keep your customers engaged and loyal."}],l=J();return e.jsxs("div",{children:[e.jsx("style",{children:`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .swiper-slide-active .hero-title {
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }

        .swiper-slide-active .hero-desc {
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        .swiper-slide-active .btn-group {
          animation: fadeInScale 0.6s ease-out 0.3s both;
        }

        .swiper-slide-active .btn-group .th-btn:nth-child(1) {
          animation: fadeInUp 0.5s ease-out 0.4s both;
        }

        .swiper-slide-active .btn-group .th-btn:nth-child(2) {
          animation: fadeInUp 0.5s ease-out 0.5s both;
        }

        /* Advanced 3D Snow Effect with Multiple Layers - OPTIMIZED */
        @keyframes snowfall3D {
          0% {
            transform: translateY(-10vh) translateX(0) translateZ(0) rotateZ(0deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(var(--drift-x)) translateZ(var(--drift-z)) rotateZ(360deg);
            opacity: 0;
          }
        }

        @keyframes snowfallWind {
          0% {
            transform: translateY(-10vh) translateX(0) rotateZ(0deg) scale(1);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          25% {
            transform: translateY(25vh) translateX(50px) rotateZ(90deg) scale(1.1);
          }
          50% {
            transform: translateY(50vh) translateX(-30px) rotateZ(180deg) scale(0.9);
          }
          75% {
            transform: translateY(75vh) translateX(40px) rotateZ(270deg) scale(1.05);
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(-20px) rotateZ(360deg) scale(1);
            opacity: 0;
          }
        }

        @keyframes snowfallSlow {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          90% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(110vh) translateX(var(--drift-slow)) rotate(180deg);
            opacity: 0;
          }
        }

        .hero-snow-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 5;
          perspective: 1000px;
        }

        .snow-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .snow-layer-1 {
          z-index: 3;
          filter: blur(0px);
        }

        .snow-layer-2 {
          z-index: 2;
          filter: blur(0.5px);
          opacity: 0.85;
        }

        .snow-layer-3 {
          z-index: 1;
          filter: blur(1px);
          opacity: 0.7;
        }

        .snowflake {
          position: absolute;
          top: -10vh;
          color: #fff;
          font-size: 1em;
          opacity: 0.95;
          will-change: transform;
          text-shadow: 0 0 15px rgba(255, 255, 255, 1),
                       0 0 25px rgba(173, 216, 230, 0.8);
        }

        /* Layer 1 - Close snowflakes (large, slow) - 8 snowflakes */
        .snow-layer-1 .snowflake:nth-child(1) { left: 5%; --drift-x: 80px; --drift-z: 100px; animation: snowfall3D 15s linear infinite; animation-delay: 0s; font-size: 2.2em; }
        .snow-layer-1 .snowflake:nth-child(2) { left: 15%; --drift-slow: -60px; animation: snowfallSlow 18s linear infinite; animation-delay: 2s; font-size: 2em; }
        .snow-layer-1 .snowflake:nth-child(3) { left: 30%; animation: snowfallWind 16s ease-in-out infinite; animation-delay: 1s; font-size: 2.4em; }
        .snow-layer-1 .snowflake:nth-child(4) { left: 45%; --drift-x: -90px; --drift-z: 80px; animation: snowfall3D 19s linear infinite; animation-delay: 1.5s; font-size: 2.3em; }
        .snow-layer-1 .snowflake:nth-child(5) { left: 60%; --drift-slow: 70px; animation: snowfallSlow 20s linear infinite; animation-delay: 0.5s; font-size: 1.9em; }
        .snow-layer-1 .snowflake:nth-child(6) { left: 75%; --drift-x: 85px; --drift-z: 90px; animation: snowfall3D 16s linear infinite; animation-delay: 2.5s; font-size: 2.2em; }
        .snow-layer-1 .snowflake:nth-child(7) { left: 85%; animation: snowfallWind 17s ease-in-out infinite; animation-delay: 1.8s; font-size: 2em; }
        .snow-layer-1 .snowflake:nth-child(8) { left: 95%; --drift-slow: -75px; animation: snowfallSlow 19s linear infinite; animation-delay: 3.5s; font-size: 1.8em; }

        /* Layer 2 - Medium snowflakes (medium size, medium speed) - 10 snowflakes */
        .snow-layer-2 .snowflake:nth-child(1) { left: 8%; --drift-x: 60px; --drift-z: 50px; animation: snowfall3D 12s linear infinite; animation-delay: 0.3s; font-size: 1.5em; }
        .snow-layer-2 .snowflake:nth-child(2) { left: 18%; animation: snowfallWind 13s ease-in-out infinite; animation-delay: 1.2s; font-size: 1.3em; }
        .snow-layer-2 .snowflake:nth-child(3) { left: 28%; --drift-slow: -50px; animation: snowfallSlow 14s linear infinite; animation-delay: 2.1s; font-size: 1.4em; }
        .snow-layer-2 .snowflake:nth-child(4) { left: 38%; --drift-x: -55px; --drift-z: 60px; animation: snowfall3D 13s linear infinite; animation-delay: 1.7s; font-size: 1.2em; }
        .snow-layer-2 .snowflake:nth-child(5) { left: 48%; animation: snowfallWind 15s ease-in-out infinite; animation-delay: 2.5s; font-size: 1.5em; }
        .snow-layer-2 .snowflake:nth-child(6) { left: 58%; --drift-slow: 65px; animation: snowfallSlow 12s linear infinite; animation-delay: 0.9s; font-size: 1.3em; }
        .snow-layer-2 .snowflake:nth-child(7) { left: 68%; --drift-x: 45px; --drift-z: 40px; animation: snowfall3D 16s linear infinite; animation-delay: 1.1s; font-size: 1.6em; }
        .snow-layer-2 .snowflake:nth-child(8) { left: 78%; animation: snowfallWind 11s ease-in-out infinite; animation-delay: 2.8s; font-size: 1.2em; }
        .snow-layer-2 .snowflake:nth-child(9) { left: 88%; --drift-slow: -60px; animation: snowfallSlow 13s linear infinite; animation-delay: 1.5s; font-size: 1.5em; }
        .snow-layer-2 .snowflake:nth-child(10) { left: 95%; --drift-x: 55px; --drift-z: 45px; animation: snowfall3D 14s linear infinite; animation-delay: 2.3s; font-size: 1.4em; }

        /* Layer 3 - Far snowflakes (small, fast) - 12 snowflakes */
        .snow-layer-3 .snowflake:nth-child(1) { left: 5%; --drift-x: 30px; --drift-z: 20px; animation: snowfall3D 8s linear infinite; animation-delay: 0s; font-size: 0.8em; }
        .snow-layer-3 .snowflake:nth-child(2) { left: 12%; animation: snowfallWind 9s ease-in-out infinite; animation-delay: 0.5s; font-size: 0.7em; }
        .snow-layer-3 .snowflake:nth-child(3) { left: 20%; --drift-slow: -35px; animation: snowfallSlow 10s linear infinite; animation-delay: 1.2s; font-size: 0.9em; }
        .snow-layer-3 .snowflake:nth-child(4) { left: 28%; --drift-x: -25px; --drift-z: 30px; animation: snowfall3D 9s linear infinite; animation-delay: 0.7s; font-size: 0.7em; }
        .snow-layer-3 .snowflake:nth-child(5) { left: 36%; animation: snowfallWind 8s ease-in-out infinite; animation-delay: 2.3s; font-size: 0.9em; }
        .snow-layer-3 .snowflake:nth-child(6) { left: 44%; --drift-slow: 40px; animation: snowfallSlow 11s linear infinite; animation-delay: 1.5s; font-size: 0.8em; }
        .snow-layer-3 .snowflake:nth-child(7) { left: 52%; --drift-x: 35px; --drift-z: 25px; animation: snowfall3D 10s linear infinite; animation-delay: 2.8s; font-size: 0.9em; }
        .snow-layer-3 .snowflake:nth-child(8) { left: 60%; animation: snowfallWind 7s ease-in-out infinite; animation-delay: 1.9s; font-size: 0.8em; }
        .snow-layer-3 .snowflake:nth-child(9) { left: 68%; --drift-slow: -30px; animation: snowfallSlow 8s linear infinite; animation-delay: 0.4s; font-size: 0.7em; }
        .snow-layer-3 .snowflake:nth-child(10) { left: 76%; --drift-x: 28px; --drift-z: 22px; animation: snowfall3D 9s linear infinite; animation-delay: 1.3s; font-size: 0.8em; }
        .snow-layer-3 .snowflake:nth-child(11) { left: 84%; animation: snowfallWind 8s ease-in-out infinite; animation-delay: 2.7s; font-size: 0.7em; }
        .snow-layer-3 .snowflake:nth-child(12) { left: 92%; --drift-slow: 38px; animation: snowfallSlow 11s linear infinite; animation-delay: 0.9s; font-size: 0.9em; }

        /* Remove border-radius from all hero-2 elements except buttons */
        .hero-2 .hero-slider-2 {
          border-radius: 0 !important;
        }

        .hero-2 .th-hero-bg {
          border-radius: 0 !important;
        }

        .hero-2 .th-hero-bg:before {
          border-radius: 0 !important;
        }

        .hero-2 .swiper-pagination {
          border-radius: 0 !important;
        }

        .hero-2 .swiper-pagination-bullet {
          border-radius: 0 !important;
        }

        .hero-2 .scroll-down .scroll-wrap span {
          border-radius: 50% !important; /* Keep circular for icon */
        }

        .hero-2 .hero-arrow {
          border-radius: 50% !important; /* Keep circular for navigation arrows */
        }

        /* Keep border-radius for buttons only */
        .hero-2 .th-btn {
          /* Buttons will keep their default border-radius from global styles */
        }

        /* Responsive Fixes */
        @media (max-width: 991px) {
          .hero-style2 {
            padding: 120px 0 80px 0;
            text-align: center;
          }
          
          .hero-style2 .hero-title {
            font-size: 40px;
            line-height: 1.2;
            margin: 0 auto 20px;
          }
          
          .hero-style2 .hero-desc {
            margin: 0 auto 30px;
          }
          
        }

        @media (max-width: 768px) {
          .hero-style2 {
            padding: 100px 0 60px 0;
          }
          
          .hero-style2 .hero-title {
            font-size: 32px;
          }
          
          .hero-style2 .hero-desc {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .hero-style2 .hero-title {
            font-size: 26px;
          }
          
          .hero-2 .btn-group {
            flex-direction: column;
            gap: 15px;
            width: 100%;
          }
          
          .hero-2 .btn-group .th-btn {
            width: 100%;
            justify-content: center;
            margin: 0;
          }
          
          .hero-snow-container {
             /* Ensure snow doesn't block clicks if z-index issues arise */
             pointer-events: none;
          }
        }
           `}),e.jsxs("div",{className:"hero-2",id:"hero",style:{position:"relative"},children:[l&&e.jsxs("div",{className:"hero-snow-container",children:[e.jsxs("div",{className:"snow-layer snow-layer-1",children:[e.jsx("div",{className:"snowflake",children:"❄"}),e.jsx("div",{className:"snowflake",children:"❅"}),e.jsx("div",{className:"snowflake",children:"❆"}),e.jsx("div",{className:"snowflake",children:"❄"}),e.jsx("div",{className:"snowflake",children:"✼"}),e.jsx("div",{className:"snowflake",children:"❅"}),e.jsx("div",{className:"snowflake",children:"❆"}),e.jsx("div",{className:"snowflake",children:"❄"})]}),e.jsxs("div",{className:"snow-layer snow-layer-2",children:[e.jsx("div",{className:"snowflake",children:"❅"}),e.jsx("div",{className:"snowflake",children:"❆"}),e.jsx("div",{className:"snowflake",children:"❄"}),e.jsx("div",{className:"snowflake",children:"❅"}),e.jsx("div",{className:"snowflake",children:"✻"}),e.jsx("div",{className:"snowflake",children:"❆"}),e.jsx("div",{className:"snowflake",children:"❄"}),e.jsx("div",{className:"snowflake",children:"✼"}),e.jsx("div",{className:"snowflake",children:"❅"}),e.jsx("div",{className:"snowflake",children:"❆"})]}),e.jsxs("div",{className:"snow-layer snow-layer-3",children:[e.jsx("div",{className:"snowflake",children:"❄"}),e.jsx("div",{className:"snowflake",children:"❅"}),e.jsx("div",{className:"snowflake",children:"❆"}),e.jsx("div",{className:"snowflake",children:"❄"}),e.jsx("div",{className:"snowflake",children:"✽"}),e.jsx("div",{className:"snowflake",children:"❅"}),e.jsx("div",{className:"snowflake",children:"✼"}),e.jsx("div",{className:"snowflake",children:"❆"}),e.jsx("div",{className:"snowflake",children:"❄"}),e.jsx("div",{className:"snowflake",children:"✻"}),e.jsx("div",{className:"snowflake",children:"❅"}),e.jsx("div",{className:"snowflake",children:"❆"})]})]}),e.jsxs(N,{modules:[$,C,S],pagination:{el:".swiper-pagination",clickable:!0},navigation:{prevEl:".slider-prev",nextEl:".slider-next"},autoplay:{delay:5e7,disableOnInteraction:!1},loop:!0,slidesPerView:1,className:"swiper hero-slider-2",id:"heroSlide2",onSwiper:a,children:[s.map((t,i)=>e.jsx(k,{children:e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{className:"th-hero-bg",style:{backgroundImage:`url('${t.bg}')`,backgroundSize:"cover"}}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"hero-style2 ",children:[e.jsx("h1",{className:"hero-title mb-20","data-ani":"slideinup","data-ani-delay":"0.1s",children:t.title}),e.jsx("p",{className:"hero-desc","data-ani":"slideinup","data-ani-delay":"0.2s",children:t.description}),e.jsxs("div",{className:"btn-group justify-content-center","data-ani":"slideinup","data-ani-delay":"0.4s",children:[e.jsxs(w,{to:"/about",className:"th-btn style6 th-icon",children:["Discover Me"," ",e.jsx("i",{className:"fa-light fa-arrow-right-long"})]}),e.jsxs(w,{to:"/services",className:"th-btn style2 th-icon",children:["Our Services"," ",e.jsx("i",{className:"fa-light fa-arrow-right-long"})]})]})]})})]})},i)),e.jsxs("div",{className:"th-swiper-custom",children:[e.jsx("div",{className:"swiper-pagination"}),e.jsxs("div",{className:"hero-icon",children:[e.jsx("button",{className:"hero-arrow slider-prev",children:e.jsx("img",{src:"/assets/img/icon/hero-arrow-left.svg",alt:"Previous",width:"20",height:"20"})}),e.jsx("button",{className:"hero-arrow slider-next",children:e.jsx("img",{src:"/assets/img/icon/hero-arrow-right.svg",alt:"Next",width:"20",height:"20"})})]})]})]})]})]})},ne="/assets/img/icon/process-requirements.png",oe="/assets/img/icon/process-agreement.png",re="/assets/img/icon/process-design.png",le="/assets/img/icon/process-development.png",ce="/assets/img/icon/process-testing.png",de="/assets/img/icon/process-approval.png",me="/assets/img/icon/process-deployment.png",pe="/assets/img/icon/process-ux.png",he="/assets/img/icon/process-monitor.png",fe="/assets/img/icon/marquee-icon1-3.png",ge="/assets/img/bg/process-1-3-bg.jpg",xe=()=>{const n=[{step:1,title:"Requirements",icon:ne,desc:"We begin by thoroughly understanding your business goals and vision to define clear project objectives and a solid foundation for success."},{step:2,title:"Agreement",icon:oe,desc:"We establish a transparent project agreement detailing scope, timeline, and budget to ensure clarity and build mutual trust."},{step:3,title:"UI/UX Design",icon:re,desc:"Our designers craft intuitive wireframes and stunning prototypes focused on user experience, accessibility, and your brand identity."},{step:4,title:"Development",icon:le,desc:"Our expert developers build your app using modern frameworks, ensuring it is scalable, high-performing, and built to last."},{step:5,title:"Testing",icon:ce,desc:"We conduct rigorous manual and automated testing to guarantee a flawless, secure, and bug-free user experience before launch."},{step:6,title:"Client Approval",icon:de,desc:"You review the app, and we carefully incorporate your feedback to ensure the final product perfectly matches your expectations."},{step:7,title:"Deployment",icon:me,desc:"We handle the seamless deployment of your app to all relevant stores, optimizing for maximum visibility and a successful launch."},{step:8,title:"User Experience",icon:pe,desc:"Post-launch, we monitor user interactions and gather insights to continuously improve the app for a smooth user journey."},{step:9,title:"Analogue Monitor",icon:he,desc:"Our partnership continues with ongoing performance monitoring, updates, and new features to keep your app future-ready."}],a=[{id:1,text:"App Development"},{id:2,text:"Web Development"},{id:3,text:"E-Commerce Solutions"},{id:4,text:"Digital Marketing"},{id:5,text:"UI/UX Design"}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .process-card-enhanced {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: visible;
        }
        
        .process-card-enhanced:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 0 30px rgba(28, 36, 109, 0.1);
        }
        
        .process-icon-wrapper {
          transition: all 0.4s ease;
          position: relative;
        }
        
        .process-card-enhanced:hover .process-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }
        
        .process-card-enhanced:hover .process-circular-text {
          animation: spin 20s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .process-card-enhanced:hover .process-circular-text text {
          fill: #ff6b35;
        }
        
        .step-tag-wrap {
          position: absolute;
          top: 5px;
          right: 5px;
          list-style: none;
          padding: 0;
          margin: 0;
          z-index: 10;
        }
        
        .step-tag {
          background: rgba(28, 36, 109, 0.85);
          backdrop-filter: blur(8px);
          color: white;
          padding: 6px 18px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 1.5px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: inline-block;
        }
        
        .process-card-enhanced:hover .step-tag {
          background: #ff6b35;
          border-color: #ff6b35;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 20px rgba(255, 107, 53, 0.4);
        }
        
        .process-title-link {
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .process-card-enhanced:hover .process-title-link {
          color: #ff6b35 !important;
          transform: translateX(5px);
        }
        
        .process-text-enhanced {
          transition: color 0.3s ease;
        }
        
        .process-card-enhanced:hover .process-text-enhanced {
          color: #2c3e50;
        }
        
        .process-shape-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(28, 36, 109, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .process-card-enhanced:hover .process-shape-glow {
          opacity: 1;
        }
      `}),e.jsxs("section",{className:"process-area bg-top-center pt-80",style:{backgroundImage:`url(${ge})`,backgroundRepeat:"no-repeat"},children:[e.jsx("div",{className:"container",children:e.jsxs("div",{className:"process-area",children:[e.jsx("div",{className:"process-content text-center",children:e.jsxs("div",{className:"title-area mb-55","data-aos":"fade-down","data-aos-duration":"1000",children:[e.jsx("span",{className:"sub-title style1 text-white text-anime-style-2",children:"Our Process"}),e.jsx("h2",{className:"sec-title text-white text-anime-style-3",children:"How It Work Process!"})]})}),e.jsx("div",{className:"slider-area",children:e.jsx(N,{modules:[$,C,S],spaceBetween:30,slidesPerView:1,loop:!0,autoplay:{delay:3500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},576:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:3},1200:{slidesPerView:4}},className:"swiper th-slider has-shadow",id:"processSlider",children:n.map((s,l)=>e.jsx(k,{children:e.jsxs("div",{className:"process-item style-2 text-center process-card-enhanced","data-aos":"fade-up","data-aos-duration":"800","data-aos-delay":l*100,children:[e.jsxs("p",{className:"box-number",children:[" STEP ",s.step.toString().padStart(2,"0")]}),e.jsxs("div",{className:"process-icon mb-20 process-icon-wrapper",children:[e.jsx("div",{className:"process-shape",children:e.jsx("div",{className:"process-shape-glow"})}),e.jsx("div",{className:"process-circular-text",children:e.jsxs("svg",{viewBox:"0 0 100 100",children:[e.jsx("path",{id:`circlePath-${s.step}`,d:"M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0",fill:"transparent"}),e.jsx("text",{children:e.jsx("textPath",{xlinkHref:`#circlePath-${s.step}`,children:"TECHLAND • PROCESS • TECHLAND • PROCESS •"})})]})}),e.jsx("img",{src:s.icon,alt:`${s.title} Icon`,style:{width:"90px",height:"90px",position:"relative",zIndex:"2",objectFit:"contain"},title:`${s.title} Process`,loading:"lazy"})]}),e.jsxs("div",{className:"process-content text-center",children:[e.jsx("h3",{className:"box-title mb-10",children:e.jsx(w,{to:"#",className:"process-title-link",children:s.title})}),e.jsx("p",{className:"process-text process-text-enhanced",children:s.desc})]})]})},s.step))})})]})}),e.jsx("div",{className:"overflow-hidden pt-80",children:e.jsx("div",{className:"container-fluid p-0","data-cue":"slideInUp",style:{backgroundColor:"#1c246d"},children:e.jsx(N,{modules:[S],spaceBetween:30,slidesPerView:"auto",loop:!0,allowTouchMove:!1,autoplay:{delay:1,disableOnInteraction:!1,pauseOnMouseEnter:!1},speed:1e4,breakpoints:{0:{slidesPerView:1.5},576:{slidesPerView:2},992:{slidesPerView:3},1200:{slidesPerView:"auto"}},className:"swiper th-slider marquee-slider3",children:[...Array(5)].map((s,l)=>e.jsx(B.Fragment,{children:a.map(t=>e.jsx(k,{children:e.jsxs("div",{className:"marquee-card3",children:[e.jsx("div",{className:"marquee-icon",children:e.jsx("img",{src:fe,alt:"icon",loading:"lazy"})}),e.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:"#",children:t.text})]})},`${t.id}-${l}`))},l))})})})]})]})},ue=()=>e.jsx("div",{children:e.jsxs("div",{className:"counter-sec2 space overflow-hidden black-bg  bg-title footer-layout10",children:[e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-lg-8",children:e.jsxs("div",{className:"title-area text-center","data-aos":"fade-up","data-aos-duration":"1000",children:[e.jsx("span",{className:"sub-title extra-sub text-anime-style-2 sail-regular","data-aos":"zoom-in","data-aos-duration":"800",children:"Our Services"}),e.jsx("h2",{className:"sec-title text-white text-anime-style-3","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"200",children:"Our awesome services to give you success"})]})})})}),e.jsx("div",{className:"history2-area overflow-hidden",children:e.jsx("div",{className:"th-container",children:e.jsx("div",{className:"story-wrapp",children:e.jsxs("div",{className:"row px-3 px-lg-5 gy-30 justify-content-center",children:[e.jsx("div",{className:"col-xxl-3 col-xl-4 col-lg-6 col-md-6","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"100",children:e.jsxs("div",{className:"special-dedication-card",children:[e.jsx("div",{className:"card-glare"}),e.jsxs("div",{className:"dedication-content",children:[e.jsx("div",{className:"dedication-icon-wrapper",children:e.jsx("img",{src:"/assets/img/icon/gem_stone_3d.png",alt:"Quality Dedication"})}),e.jsxs("h3",{className:"dedication-title sail-regular",children:[e.jsx("span",{children:"100%"}),"Dedication"]}),e.jsx("p",{className:"dedication-text",children:"We offer a comprehensive range of innovative services meticulously tailored to exceed your expectations."})]})]})}),e.jsx("div",{className:"col-xxl-4 col-xl-4 col-lg-6 col-md-6","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"200",children:e.jsx("div",{className:"story-card story-card2 story-bg",style:{backgroundImage:"url('/assets/img/home-services/app-development-bg.png')"},children:e.jsx("div",{className:"story-content",children:e.jsxs("div",{className:"col-9",children:[e.jsxs("h2",{className:"box-title sail-regular",children:["App ",e.jsx("br",{}),"Development"]}),e.jsx("div",{className:"header-button",children:e.jsxs(w,{to:"services/mobile-app-development",className:"th-btn style6 ms-0 th-radius th-icon",children:["Read More"," ",e.jsx("i",{className:"fa-regular fa-arrow-right"})]})})]})})})}),e.jsx("div",{className:"col-xxl-5 col-xl-4 col-lg-6 col-md-6","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"300",children:e.jsx("div",{className:"story-card story-card2 story-bg",style:{backgroundImage:"url('/assets/img/home-services/web-development-bg.png')"},children:e.jsxs("div",{className:"story-content",children:[e.jsxs("h3",{className:"box-title sail-regular",children:["Web Development",e.jsx("br",{}),"Services"]}),e.jsx("div",{className:"header-button",children:e.jsxs(w,{to:"services/web-development",className:"th-btn style6 ms-0 th-radius th-icon",children:["Read More"," ",e.jsx("i",{className:"fa-regular fa-arrow-right"})]})})]})})}),e.jsx("div",{className:"col-xxl-4 col-xl-4 col-lg-6 col-md-6","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"100",children:e.jsx("div",{className:"story-card story-card2 story-bg",style:{backgroundImage:"url('https://images.unsplash.com/photo-1664447972886-410492bb83bf?q=80&w=2000&auto=format&fit=crop')"},children:e.jsxs("div",{className:"story-content",children:[e.jsxs("h3",{className:"box-title sail-regular",children:["E-Commerce",e.jsx("br",{}),"Solutions"]}),e.jsx("div",{className:"header-button",children:e.jsxs(w,{to:"services/web-development",className:"th-btn style6 ms-0 th-radius th-icon",children:["Read More"," ",e.jsx("i",{className:"fa-regular fa-arrow-right"})]})})]})})}),e.jsx("div",{className:"col-xxl-4 col-xl-4 col-lg-6 col-md-6","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"200",children:e.jsx("div",{className:"story-card story-card2 story-bg",style:{backgroundImage:"url('https://images.unsplash.com/photo-1635236063541-b070bb583321?q=80&w=2000&auto=format&fit=crop')"},children:e.jsxs("div",{className:"story-content",children:[e.jsxs("h3",{className:"box-title sail-regular",children:["Digital",e.jsx("br",{}),"Marketing"]}),e.jsx("div",{className:"header-button",children:e.jsxs(w,{to:"services/digital-marketing",className:"th-btn style6 ms-0 th-radius th-icon",children:["Read More"," ",e.jsx("i",{className:"fa-regular fa-arrow-right"})]})})]})})}),e.jsx("div",{className:"col-xxl-4 col-xl-4 col-lg-6 col-md-6","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"300",children:e.jsx("div",{className:"story-card story-card2 story-bg",style:{backgroundImage:"url('/assets/img/home-services/ui-ux-bg.png')"},children:e.jsxs("div",{className:"story-content",children:[e.jsxs("h3",{className:"box-title sail-regular",children:["UI/UX",e.jsx("br",{}),"Design"]}),e.jsx("div",{className:"header-button",children:e.jsxs(w,{to:"/services/ui-ux-design",className:"th-btn style6 ms-0 th-radius th-icon",children:["Read More"," ",e.jsx("i",{className:"fa-regular fa-arrow-right"})]})})]})})})]})})})})]})}),we=[{id:1,imageUrl:"/assets/img/mobile_projects/1.png",title:"Analysis of Security",category:"Technology",link:"#"},{id:2,imageUrl:"/assets/img/mobile_projects/2.png",title:"UiXi Design",category:"Development",link:"#"},{id:3,imageUrl:"/assets/img/mobile_projects/3.png",title:"Frontend Development",category:"App Design",link:"#"},{id:4,imageUrl:"/assets/img/mobile_projects/4.png",title:"WordPress Development",category:"Mobile",link:"#"},{id:5,imageUrl:"/assets/img/mobile_projects/5.png",title:"App Development",category:"Software",link:"#"},{id:6,imageUrl:"/assets/img/mobile_projects/6.png",title:"UiXi Design",category:"Security",link:"#"},{id:7,imageUrl:"/assets/img/mobile_projects/7.png",title:"Frontend Development",category:"Technology",link:"#"},{id:8,imageUrl:"/assets/img/mobile_projects/8.png",title:"WordPress Development",category:"Development",link:"#"},{id:9,imageUrl:"/assets/img/mobile_projects/9.png",title:"App Development",category:"Software",link:"#"},{id:10,imageUrl:"/assets/img/mobile_projects/10.png",title:"Advanced Development",category:"Enterprise",link:"#"}],ye=()=>{const[n,a]=g.useState([]),s=E.ASSETS_URL;g.useEffect(()=>{(async()=>{try{const{data:i}=await I.get("/projects");a(i.filter(o=>o.isActive!==!1&&(o.platform==="Android"||o.platform==="iOS")))}catch(i){console.error("Error fetching mobile projects:",i)}})()},[]);const l=[...n.map(t=>({id:t._id,imageUrl:t.image.startsWith("http")?t.image:`${s}${t.image}`,title:t.title,category:t.category||"Mobile App",link:`/portfolio/${(t.category||"General").toLowerCase().replace(/ /g,"-")}/${t._id}`})),...we];return e.jsxs("div",{className:"case-area3 position-relative overflow-hidden space",children:[e.jsx("style",{children:`
        .case-slider3 {
          padding:30px;
          overflow: visible !important;
        }

        .case-slider3 .swiper-slide {
          width: 300px !important; /* Force width */
          height: auto;
          transition: all 0.4s ease;
        }

        .case-box3 {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .case-slider3 .case-img {
          width: 100% !important;
          height: 570px !important; /* Force "short" height */
          position: relative;
          overflow: hidden;
        }

        /* Override active slide size from style.css */
        .case-slider3 .swiper-slide.swiper-slide-active .case-img {
          width: 100% !important;
          height: 600px !important;
        }

        .case-img img {
          width: 100% !important;
          height: 100% !important;
          display: block;
          object-fit: cover;
          border-radius: 24px;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .case-img:hover img {
          transform: scale(1.05);
        }

        .case-content {
          position: absolute;
          bottom: 25px;
          left: 15px;
          right: 15px;
          padding: 20px 15px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
          opacity: 0;
          visibility: hidden;
          transform: translateY(15px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: center;
          z-index: 2;
        }

        .case-img:hover .case-content {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .case-title {
          margin: 0 0 5px 0;
          font-size: 18px;
          font-weight: 700;
          font-family: "Play", sans-serif;
        }

        .case-title a {
          color: #1a1a1a;
          text-decoration: none;
        }

        .case-categ {
          color: #163198;
          font-size: 12px;
          font-weight: 700;
          display: block;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 5px;
        }

        .sec-title {
          font-family: "Play", sans-serif;
          font-weight: 700;
        }

        .icon-box {
          display: flex;
          gap: 20px;
          align-items: center;
          justify-content: center;
          margin-top: 50px;
        }

        .slider-arrow {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #163198;
          font-size: 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .slider-arrow:hover {
          background: #163198;
          color: #ffffff;
          border-color: #163198;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(22, 49, 152, 0.2);
        }
        .case-box3 .case-img:hover .case-content {
          bottom: 24px;
          opacity: 1;
          visibility: visible;
          width: 85%;
        }

        @media (max-width: 768px) {
          .case-slider3 .swiper-slide {
            width: 260px;
          }

          .case-img {
            height: 500px;
          }

          .case-content {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            background: rgba(255, 255, 255, 0.98);
            bottom: 20px;
          }
        }
      `}),e.jsxs("div",{className:"container th-container",children:[e.jsxs("div",{className:"title-area text-center","data-aos":"fade-up",children:[e.jsx("span",{className:"sub-title text-anime-style-2",children:"Innovating Mobile Experiences"}),e.jsx("h2",{className:"sec-title text-anime-style-3",children:"Our Mobile Masterpieces"})]}),e.jsx("div",{className:"container px-5",children:e.jsx(N,{modules:[S,te,$],effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",spaceBetween:50,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:{nextEl:".case-next",prevEl:".case-prev"},coverflowEffect:{rotate:-10,stretch:0,depth:100,modifier:1,slideShadows:!1},className:"case-slider3",children:l.map(t=>e.jsx(k,{children:e.jsx("div",{className:"case-box3 gsap-cursor",children:e.jsxs("div",{className:"case-img position-relative",children:[e.jsx("img",{src:t.imageUrl,alt:t.title,loading:"lazy"}),e.jsxs("div",{className:"case-content",children:[e.jsx("span",{className:"case-categ",children:t.category}),e.jsx("h3",{className:"case-title",children:e.jsx("a",{href:t.link,children:t.title})})]})]})})},t.id))})})]})]})},be=()=>{const[n,a]=g.useState(null),[s,l]=g.useState(new Set),[t,i]=g.useState([]),o=g.useRef(null),x=E.ASSETS_URL,h=r=>{a(n===r?null:r)},f=r=>(r||"uncategorized").toLowerCase().replace(/ /g,"-");g.useEffect(()=>{(async()=>{try{const{data:m}=await I.get("/projects");i(m.filter(c=>c.isActive!==!1&&(c.platform==="Web"||!c.platform)))}catch(m){console.error("Error fetching web projects:",m)}})()},[]);const p=g.useMemo(()=>{const r=[];return Object.keys(V).forEach(d=>{const y=V[d].filter(v=>v.platform==="Web").map(v=>({...v,category:d,compositeId:v.id?`${d}-${v.id}`:`${d}-${v.title.replace(/\s+/g,"-")}`}));r.push(...y)}),[...t.map(d=>({...d,compositeId:d._id,category:d.category||"General",image:d.image.startsWith("http")?d.image:`${x}${d.image}`})),...r].slice(0,7)},[t]);return g.useEffect(()=>{const r={root:null,rootMargin:"0px",threshold:.1};return o.current=new IntersectionObserver(c=>{c.forEach(d=>{if(d.isIntersecting){const j=parseInt(d.target.dataset.index);l(y=>new Set([...y,j]))}})},r),document.querySelectorAll(".blog-grid4_wrapp").forEach(c=>{o.current&&o.current.observe(c)}),()=>{o.current&&o.current.disconnect()}},[p]),e.jsx("section",{className:"bg-smoke space",style:{backgroundImage:"url(/assets/img/bg/team_bg_1.png)"},children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-5",children:e.jsx("div",{className:"sec_title_static",children:e.jsxs("div",{className:"sec_title_wrap",children:[e.jsxs("div",{className:"title-area text-center text-lg-start pe-xl-5",children:[e.jsx("span",{className:"sub-title",children:"Our Website Projects"}),e.jsx("h2",{className:"sec-title",children:"Transforming Ideas into Innovations"}),e.jsxs(w,{to:"/portfolio",className:"th-btn style4 th-icon",children:["See More Projects"," ",e.jsx("i",{className:"fa-regular fa-folder-open"})]})]}),e.jsx("div",{className:"blog-shape text-lg-start text-center",children:e.jsx("img",{src:"/assets/img/shape/blog-present.png",alt:"decorative shape",loading:"lazy"})})]})})}),e.jsx("div",{className:"col-lg-7",children:e.jsx("div",{className:"blog-grid4-static-wrap",children:p.map((r,m)=>{const c=r.project_overview||r.description,d=n===m,j=(c==null?void 0:c.length)>120?c.slice(0,120)+"...":c,y=s.has(m);return e.jsx("div",{className:`col-12 blog-grid4_wrapp ${y?"animate-in":"animate-out"}`,"data-index":m,style:{transitionDelay:`${m*.1}s`},children:e.jsxs("div",{className:"blog-grid4 th-ani style4 mt-8 p-4",children:[e.jsxs("div",{className:"box-content",children:[e.jsx("h3",{className:"box-title",children:r.title}),e.jsx("p",{children:d?c:j}),(c==null?void 0:c.length)>120&&e.jsx("button",{className:"th-btn style4 th-icon",style:{border:"none",padding:"6px 14px",cursor:"pointer"},onClick:()=>h(m),children:d?"Read Less":"Read More"}),e.jsxs(w,{to:`/portfolio/${f(r.category)}/${r.compositeId}`,className:"th-btn style4 th-icon mt-2",children:["View Project Details"," ",e.jsx("i",{className:"fa-regular fa-arrow-right"})]})]}),e.jsx("div",{className:"blog-img global-img",children:e.jsx("img",{src:r.image,alt:r.title,loading:"lazy"})})]})},r.compositeId)})})})]})})})},ve=()=>{const n=[{id:1,icon:"assets/img/icon/checkmark.svg",text:"Data Storage and Backup"},{id:2,icon:"assets/img/icon/checkmark.svg",text:"Data Backup and Disaster Recovery"},{id:3,icon:"assets/img/icon/checkmark.svg",text:"Hybrid and Multi-Cloud Solutions"}];return e.jsx("div",{children:e.jsx("div",{className:"about-area position-relative overflow-hidden space",id:"about-sec","data-aos":"fade-up","data-aos-duration":"1000",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-xl-6",children:e.jsxs("div",{className:"img-box15 d-flex justify-content-center",children:[e.jsxs("div",{className:"img1 d-none d-md-block",children:[e.jsx("img",{src:"assets/img/normal/about_15_1.png",alt:"About","data-aos":"zoom-in","data-aos-duration":"1000","data-aos-delay":"200",loading:"lazy"}),e.jsx("img",{src:"assets/img/normal/about_15_2.png",alt:"About","data-aos":"zoom-in","data-aos-duration":"1000","data-aos-delay":"400",loading:"lazy"})]}),e.jsx("div",{className:"img2",children:e.jsx("img",{src:"assets/img/normal/mobile about.png",alt:"About","data-aos":"fade-up","data-aos-duration":"1200","data-aos-delay":"300",loading:"lazy"})})]})}),e.jsx("div",{className:"col-xl-6",children:e.jsxs("div",{className:"about-15-title-box ps-xl-3 ms-xl-5",children:[e.jsxs("div",{className:"title-area mb-20",children:[e.jsx("span",{className:"sub-title style1 text-anime-style-2","data-aos":"fade-down","data-aos-duration":"800",children:"About Us"}),e.jsx("h2",{className:"sec-title mb-25 text-anime-style-3","data-aos":"fade-down","data-aos-duration":"1000","data-aos-delay":"200",children:"Techland IT Solutions - Best App, Web & Digital Marketing Services"})]}),e.jsx("p",{className:"sec-text mb-30 me-xl-3 wow fadeInUp","data-wow-delay":".3s","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"300",children:"Techland IT Solutions is a leading provider of App, Web, and Digital Marketing services in Hyderabad. Our customer-centric approach and innovative strategies set us apart. We are a team of passionate developers and marketers dedicated to delivering high-performance digital solutions. From custom application development to result-oriented digital marketing campaigns, we combine creativity and technology to help your business thrive in the digital landscape."}),e.jsx("div",{className:"about-feature-wrap",children:e.jsx("div",{className:"about-feature-list",children:e.jsx("ul",{children:n.map(a=>e.jsxs("li",{className:"wow fadeInUp","data-wow-delay":".4s","data-aos":"fade-right","data-aos-duration":"800","data-aos-delay":a.id*100,children:[e.jsx("span",{className:"about-feature-icon",children:e.jsx("img",{src:a.icon,alt:"checkmark icon",loading:"lazy"})}),a.text]},a.id))})})}),e.jsx("div",{className:"mt-35","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"600",children:e.jsxs(w,{to:"/about",className:"th-btn style4 th-icon",children:[" ","Learn More ",e.jsx("i",{className:"fa-regular fa-arrow-right"})]})})]})})]})})})})},je=()=>{const n=[{id:1,icon:"/assets/img/cdn-assets/icons8-security-checked.png",title:"Enhanced Security",description:"Immutable and encrypted transactions prevent fraud and unauthorized access."},{id:2,icon:"/assets/img/cdn-assets/icons8-handshake.png",title:"Transparency & Trust",description:"Public ledgers ensure accountability and build trust with all stakeholders."},{id:3,icon:"/assets/img/cdn-assets/icons8-rocket.png",title:"Faster Transactions",description:"Enable instant cross-border payments and near-real-time processing."},{id:4,icon:"/assets/img/cdn-assets/icons8-money-bag.png",title:"Cost Reduction",description:"Eliminates intermediaries and reduces operational and transactional costs."},{id:5,icon:"/assets/img/cdn-assets/icons8-bank-building.png",title:"Financial Inclusion",description:"Provides access to banking services for the unbanked and underbanked populations."},{id:6,icon:"/assets/img/cdn-assets/flaticon-4712027.png",title:"Smart Automation",description:"Leverages smart contracts to automate processes and reduce manual errors."}];return e.jsx("section",{children:e.jsxs("div",{className:"overflow-hidden space light-bg","data-aos":"fade-up","data-aos-duration":"1000",children:[e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"title-area feature-5-titlebox text-center mb-55",children:[e.jsx("span",{className:"sub-title extra-sub text-anime-style-2","data-aos":"zoom-in","data-aos-duration":"800","data-aos-delay":"100",children:"Our Features"}),e.jsx("h2",{className:"sec-title text-white text-anime-style-3","data-aos":"zoom-in","data-aos-duration":"1000","data-aos-delay":"200",children:"Innovative Solutions for Modern Business"}),e.jsx("p",{className:"text-white","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"300",children:"Techland IT Solutions is dedicated to being the best technology partner for your business. Our teams collaborate, brainstorm, and develop leading strategies to create digital solutions that are engaging, intuitive, and innovative. We capture the essence of your business through a blend of essential design patterns and sophisticated technology, ensuring your digital presence is not just functional, its exceptional."})]})})})}),e.jsx("div",{className:"feature-area5",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row gy-4 justify-content-center",children:n.map((a,s)=>e.jsx("div",{className:"col-xxl-2 col-xl-3 col-lg-3 col-md-6 feature_wrapp","data-aos":"flip-left","data-aos-duration":"1000","data-aos-delay":s*100,children:e.jsxs("div",{className:"feature-item style-5 text-center",children:[e.jsx("div",{className:"feature_icon",children:e.jsx("img",{src:a.icon,alt:`${a.title} Icon`})}),e.jsx("div",{className:"feature_content",children:e.jsx("h3",{className:"box-title text-white",children:a.title})})]})},a.id))})})})]})})},Ne=()=>e.jsx("div",{children:e.jsx("div",{className:"cta-4  position-relative overflow-hidden",children:e.jsxs("div",{className:"cta-sec5 space bg-title  ",style:{backgroundImage:"url('assets/img/bg/cta_bg_3.jpg')"},"data-aos":"fade-up","data-aos-duration":"1000",children:[e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row align-items-center justify-content-center",children:[e.jsx("div",{className:"col-lg-7",children:e.jsx("div",{className:"",children:e.jsxs("div",{className:"title-area cta-3_title-box mb-40",children:[e.jsx("span",{className:"sub-title style1 text-white mb-10 text-anime-style-2","data-aos":"fade-right","data-aos-duration":"800",children:"Start Work With Us"}),e.jsx("h2",{className:"sec-title text-white text-anime-style-3","data-aos":"fade-right","data-aos-duration":"1000","data-aos-delay":"200",children:"The Best Mobile App Development Company."}),e.jsx("p",{className:"text-white wow fadeInUp","data-wow-delay":".3s",children:"We are a top-rated mobile app development company, committed to turning your app ideas into reality with the help of our expert team. Our professional and best app developers in Hyderabad work closely with you to ensure your app vision is brought to life with precision and quality. At our company, we take pride in offering top-notch mobile application development services, focusing on crafting seamless, user-friendly apps tailored to your business needs."}),e.jsx("p",{className:"text-white wow fadeInUp","data-wow-delay":".4s",children:"With years of experience, we ensure that each app is built to enhance functionality and performance. When you choose us, you're partnering with a company known for delivering exceptional results. We combine innovation, technology, and professionalism to help your business succeed. Let us help you bring your dream app to life and drive your business forward."})]})})}),e.jsx("div",{className:"col-lg-5 pb-5",children:e.jsx("div",{className:"app-mockup  pb-lg-5 movingX",children:e.jsx("video",{className:"",src:"/assets/img/mobile_projects/start-work.mp4",alt:"app mockup","data-aos":"zoom-in","data-aos-duration":"1200",loading:"lazy",autoPlay:!0,muted:!0,loop:!0})})})]})}),e.jsx("div",{className:"shape-mockup background-img-start-with  ","data-bottom":"0%","data-right":"0%",children:e.jsx("img",{src:"assets/img/normal/cta-left-img.png",alt:"decorative shape",loading:"lazy"})})]})})}),ke=()=>{const[n,a]=g.useState([]);return g.useEffect(()=>{(async()=>{try{const{data:l}=await I.get("/testimonials"),t=E.ASSETS_URL,i=l.filter(o=>o.isActive).map(o=>({id:o._id,review:o.rating?o.rating.toFixed(1):"5.0",text:o.message,author:o.name,designation:o.designation,img:o.image.startsWith("http")?o.image:`${t}${o.image}`}));a(i)}catch(l){console.error("Error fetching testimonials:",l)}})()},[]),e.jsx("section",{className:"testi-area-11 overflow-hidden",id:"testi-sec",children:e.jsx("div",{className:"testi-wrap11 space overflow-hidden",style:{backgroundImage:"url(assets/img/bg/testi_bg_11.jpg)"},children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"title-area text-center",children:[e.jsx("span",{className:"sub-title",children:"Testimonials"}),e.jsx("h2",{className:"sec-title",children:"Real Feedback from Real Clients"})]}),e.jsx("div",{className:"row gy-40 justify-content-center",children:e.jsx("div",{children:e.jsxs("div",{className:"slider-area slider-drag-wrap",children:[e.jsx(N,{modules:[C,S],spaceBetween:30,slidesPerView:1,autoHeight:!0,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".slider-pagination",clickable:!0},breakpoints:{992:{slidesPerView:3,spaceBetween:30}},className:"swiper th-slider testiSlider11-2",id:"testiSlider11_2",children:n.map(s=>e.jsx(k,{children:e.jsxs("div",{className:"testi-card9",children:[e.jsxs("div",{className:"testi-card_review",children:[s.review," ",e.jsx("img",{src:"/assets/img/3d-icons/star.png",alt:"Star",width:"16",height:"16",style:{objectFit:"contain",marginLeft:"4px"},loading:"lazy"})," ",e.jsx("img",{src:"/assets/img/3d-icons/star.png",alt:"Star",width:"16",height:"16",style:{objectFit:"contain"},loading:"lazy"})," ",e.jsx("img",{src:"/assets/img/3d-icons/star.png",alt:"Star",width:"16",height:"16",style:{objectFit:"contain"},loading:"lazy"})," ",e.jsx("img",{src:"/assets/img/3d-icons/star.png",alt:"Star",width:"16",height:"16",style:{objectFit:"contain"},loading:"lazy"})," ",e.jsx("img",{src:"/assets/img/3d-icons/star.png",alt:"Star",width:"16",height:"16",style:{objectFit:"contain"},loading:"lazy"})]}),e.jsx("p",{className:"box-text",children:s.text}),e.jsxs("div",{className:"box-content",children:[e.jsx("div",{className:"box-img",children:e.jsx("img",{src:s.img||"/assets/img/3d-icons/user-male-circle.png",alt:s.author,style:{width:"60px",height:"60px",objectFit:"contain",borderRadius:"50%"},loading:"lazy"})}),e.jsxs("div",{className:"media-body",children:[e.jsx("h3",{className:"box-title",children:s.author}),e.jsx("span",{className:"box-desig",children:s.designation})]})]})]})},s.id))}),e.jsx("div",{className:"slider-pagination"})]})})})]})})})},Se="/assets/img/bg/process-1-3-bg.jpg",ze=()=>{const[n,a]=g.useState(!1),[s,l]=g.useState([]),t=E.ASSETS_URL;return g.useEffect(()=>{(async()=>{try{const{data:o}=await I.get("/clients"),x=o.filter(h=>h.isActive!==!1).map(h=>({id:h._id,name:h.name,img:h.logo.startsWith("http")?h.logo:`${t}${h.logo}`}));l(x)}catch(o){console.error("Error fetching clients:",o)}})()},[]),e.jsxs("div",{children:[e.jsx("div",{className:"newsletter-area process-area space pb-0",style:{backgroundImage:`url(${Se})`,backgroundRepeat:"no-repeat"},children:e.jsx("div",{className:"newsletter-top container mb-0",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsxs("div",{className:"col-lg-3 d-flex flex-column align-items-start",children:[e.jsx("h2",{className:"newsletter-title text-white text-capitalize mb-3",children:"Our Clients"}),e.jsxs("button",{className:"view-all-btn",onClick:()=>a(!0),children:[e.jsx("i",{className:"fal fa-th-large"}),"View All"]})]}),e.jsx("div",{className:"col-lg-9",children:e.jsx("div",{children:e.jsx(N,{modules:[S],spaceBetween:20,slidesPerView:1,loop:s.length>6,autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{0:{slidesPerView:2},576:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5},1300:{slidesPerView:6},1400:{slidesPerView:6}},className:"swiper th-slider brandSlider1",children:s.map(i=>e.jsx(k,{children:e.jsx("div",{className:"brand-box",children:e.jsxs("a",{href:"#",children:[e.jsx("img",{className:"original",src:i.img,alt:i.name,loading:"lazy"}),e.jsx("img",{className:"gray",src:i.img,alt:i.name,loading:"lazy"})]})})},i.id))})})})]})})}),e.jsx("div",{className:`clients-modal-overlay-unique ${n?"open":""}`,onClick:()=>a(!1),children:e.jsxs("div",{className:"clients-modal-container-unique",onClick:i=>i.stopPropagation(),children:[e.jsx("div",{className:"modal-side-accent",children:e.jsxs("div",{className:"accent-content",children:[e.jsx("span",{className:"accent-label",children:"TECHLAND PARTNERS"}),e.jsx("div",{className:"accent-line"}),e.jsx("h2",{className:"accent-text",children:"TRUSTED BY INDUSTRY LEADERS"})]})}),e.jsxs("div",{className:"modal-main-content",children:[e.jsxs("div",{className:"modal-header-unique",children:[e.jsx("div",{className:"header-info",children:e.jsx("h3",{className:"modal-title-unique",children:"Our Valued Clients"})}),e.jsx("button",{className:"modal-close-unique",onClick:()=>a(!1),children:e.jsx("i",{className:"fal fa-times"})})]}),e.jsx("div",{className:"modal-body-unique",children:e.jsx("div",{className:"clients-grid-unique",children:s.map((i,o)=>e.jsx("div",{className:"client-card-unique",style:{"--index":o},children:e.jsxs("div",{className:"card-inner",children:[e.jsx("div",{className:"client-logo-wrapper",children:e.jsx("img",{src:i.img,alt:i.name,loading:"lazy"})}),e.jsx("div",{className:"client-info-unique",children:e.jsx("h4",{className:"client-name-unique",children:i.name})})]})},i.id))})})]})]})})]})},We=()=>{const n=Z("home");return e.jsxs("div",{children:[e.jsx(X,{title:n.title,description:n.description,keywords:n.keywords,canonical:n.canonical}),e.jsx(ie,{}),e.jsx(ve,{}),e.jsx(ze,{}),e.jsx(ue,{}),e.jsx(ye,{}),e.jsx(be,{}),e.jsx(xe,{}),e.jsx(je,{}),e.jsx(Ne,{}),e.jsx(ke,{}),e.jsx(G,{}),e.jsx(Q,{})]})};export{We as default};
