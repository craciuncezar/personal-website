var W=Object.defineProperty;var X=(i,e,s)=>e in i?W(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s;var h=(i,e,s)=>(X(i,typeof e!="symbol"?e+"":e,s),s);import{v as Y,j as L,S as Z,P as T,W as F,s as I,R as O,V as N,C as k,a as $,M as D,b as G,c as E,d as q,B as A,F as R,e as V,A as K,f as J,r as j,L as Q,g as ee,T as te,h as se}from"./vendor.8e1fd057.js";const ie=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}};ie();function re(i={}){const{immediate:e=!1,onNeedRefresh:s,onOfflineReady:o,onRegistered:t,onRegisterError:a}=i;let l;const u=async(m=!0)=>{};return"serviceWorker"in navigator&&(l=new Y("./sw.js",{scope:"./"}),l.addEventListener("activated",m=>{m.isUpdate?window.location.reload():o==null||o()}),l.register({immediate:e}).then(m=>{t==null||t(m)}).catch(m=>{a==null||a(m)})),u}const ne="_side_1h5bh_1",oe="_sideLeft_1h5bh_9",ae="_sideRight_1h5bh_14";var _={side:ne,sideLeft:oe,sideRight:ae};const r=L.exports.jsx,C=L.exports.jsxs,ce=L.exports.Fragment,H=i=>{const e=i.position==="left"?_.sideLeft:_.sideRight;return r("div",{className:`${_.side} ${e}`,children:i.children})},he="_email_13uam_1";var le={email:he};const B="craciuncezar1996@gmail.com",de=()=>r(H,{position:"right",children:r("div",{className:le.email,children:r("a",{href:`mailto:${B}`,children:B})})});function ue(i,e,s,o){return Math.sqrt(Math.pow(i-s,2)+Math.pow(e-o,2))}function U(i,e){const s=e.position.z;i<s?i-=s:i+=s;const o=e.fov*Math.PI/180;return 2*Math.tan(o/2)*Math.abs(i)}function me(i,e){return U(i,e)*e.aspect}class ge{constructor(e,s,o){h(this,"container");h(this,"scene");h(this,"createParticles");h(this,"camera");h(this,"renderer");this.container=document.querySelector("#magic"),this.scene=new Z,this.camera=new T(65,this.container.clientWidth/this.container.clientHeight,1,1e4),this.camera.position.set(0,0,100),this.renderer=new F,this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputEncoding=I,this.container.appendChild(this.renderer.domElement),this.renderer.setAnimationLoop(()=>{this.render()}),this.createParticles=new pe(this.scene,e,s,this.camera,o),this.bindEvents()}bindEvents(){window.addEventListener("resize",this.onWindowResize.bind(this))}render(){this.createParticles.render(),this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=this.container.clientWidth/this.container.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight)}}class pe{constructor(e,s,o,t,a){h(this,"font");h(this,"particleImg");h(this,"scene");h(this,"camera");h(this,"raycaster");h(this,"mouse");h(this,"colorChange");h(this,"buttom");h(this,"data");h(this,"planeArea");h(this,"particles");h(this,"geometryCopy");h(this,"onMouseDown",e=>{this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1,new E(this.mouse.x,this.mouse.y,.5).unproject(this.camera),this.buttom=!0,this.data.ease=.01});h(this,"onMouseUp",()=>{this.buttom=!1,this.data.ease=.05});h(this,"onMouseMove",e=>{this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-(e.clientY/window.innerHeight)*2+1});this.scene=e,this.font=s,this.particleImg=o,this.camera=t,this.raycaster=new O,this.mouse=new N(0,0),this.colorChange=new k,this.data=a,this.setup(),this.bindEvents()}setup(){const e=new $(me(100,this.camera),U(100,this.camera)),s=new D({color:65280,transparent:!0});this.planeArea=new G(e,s),this.planeArea.visible=!1,this.createText()}bindEvents(){document.addEventListener("mousedown",e=>this.onMouseDown(e)),document.addEventListener("mousemove",e=>this.onMouseMove(e)),document.addEventListener("mouseup",()=>this.onMouseUp())}render(){const e=.001*performance.now()%12/12,s=(1+Math.sin(e*2*Math.PI))/6;this.raycaster.setFromCamera(this.mouse,this.camera);const o=this.raycaster.intersectObject(this.planeArea);if(o.length>0){const t=this.particles.geometry.attributes.position,a=this.geometryCopy.attributes.position,l=this.particles.geometry.attributes.customColor,u=this.particles.geometry.attributes.size,m=o[0].point.x,x=o[0].point.y;for(let n=0,z=t.count;n<z;n++){const f=a.getX(n),w=a.getY(n),M=a.getZ(n);let d=t.getX(n),c=t.getY(n),g=t.getZ(n);this.colorChange.setHSL(.5,1,1),l.setXYZ(n,this.colorChange.r,this.colorChange.g,this.colorChange.b),l.needsUpdate=!0,u.array[n]=this.data.particleSize,u.needsUpdate=!0;let p=m-d,y=x-c;const S=ue(m,x,d,c);let P=(p=m-d)*p+(y=x-c)*y;const b=-this.data.area/P;if(this.buttom){const v=Math.atan2(y,p);d-=b*Math.cos(v),c-=b*Math.sin(v),this.colorChange.setHSL(.5+s,1,.5),l.setXYZ(n,this.colorChange.r,this.colorChange.g,this.colorChange.b),l.needsUpdate=!0,(d>f+70||d<f-70||c>w+70||c<w-70)&&(this.colorChange.setHSL(.15,1,.5),l.setXYZ(n,this.colorChange.r,this.colorChange.g,this.colorChange.b),l.needsUpdate=!0)}else if(S<this.data.area){if(n%5==0){const v=Math.atan2(y,p);d-=.03*Math.cos(v),c-=.03*Math.sin(v),this.colorChange.setHSL(.15,1,.5),l.setXYZ(n,this.colorChange.r,this.colorChange.g,this.colorChange.b),l.needsUpdate=!0,u.array[n]=this.data.particleSize/1.2,u.needsUpdate=!0}else{const v=Math.atan2(y,p);d+=b*Math.cos(v),c+=b*Math.sin(v),t.setXYZ(n,d,c,g),t.needsUpdate=!0,u.array[n]=this.data.particleSize*1.3,u.needsUpdate=!0}(d>f+10||d<f-10||c>w+10||c<w-10)&&(this.colorChange.setHSL(.15,1,.5),l.setXYZ(n,this.colorChange.r,this.colorChange.g,this.colorChange.b),l.needsUpdate=!0,u.array[n]=this.data.particleSize/1.8,u.needsUpdate=!0)}d+=(f-d)*this.data.ease,c+=(w-c)*this.data.ease,g+=(M-g)*this.data.ease,t.setXYZ(n,d,c,g),t.needsUpdate=!0}}}createText(){var f,w,M,d;let e=[],s=this.font.generateShapes(this.data.text,this.data.textSize),o=new q(s);o.computeBoundingBox();const t=o.boundingBox;if(!t)return;const a=-.5*(t.max.x-t.min.x),l=(t.max.y-t.min.y)/2.85;o.center();let u=[];for(let c=0;c<s.length;c++){let g=s[c];if(g.holes&&g.holes.length>0)for(let p=0;p<g.holes.length;p++){let y=g.holes[p];u.push(y)}}s.push.apply(s,u);let m=[],x=[];for(let c=0;c<s.length;c++){let g=s[c];const p=g.type=="Path"?this.data.amount/2:this.data.amount;g.getSpacedPoints(p).forEach((S,P)=>{const b=new E(S.x,S.y,0);e.push(b),m.push(this.colorChange.r,this.colorChange.g,this.colorChange.b),x.push(1)})}let n=new A().setFromPoints(e);n.translate(a,l,0),n.setAttribute("customColor",new R(m,3)),n.setAttribute("size",new R(x,1));const z=new V({uniforms:{color:{value:new k(16777215)},pointTexture:{value:this.particleImg}},vertexShader:(w=(f=document.getElementById("vertexshader"))==null?void 0:f.textContent)!=null?w:"",fragmentShader:(d=(M=document.getElementById("fragmentshader"))==null?void 0:M.textContent)!=null?d:"",blending:K,depthTest:!1,transparent:!0});this.particles=new J(n,z),this.scene.add(this.particles),this.geometryCopy=new A,this.geometryCopy.copy(this.particles.geometry)}}const fe="_magic_r526z_1";var we={magic:fe};const ye=()=>(j.exports.useEffect(()=>{ve()},[]),r("div",{className:we.magic,id:"magic"}));function ve(){const i=new Q;i.onLoad=function(){new ge(e,o,{text:`Cezar
Craciun`,amount:1e3,particleSize:1,particleColor:16777215,textSize:12,area:300,ease:.1})};let e;new ee(i).load("https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json",t=>{e=t});const o=new te(i).load("https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png")}const xe="_socialList_1ydmd_1";var be={socialList:xe};const Ce=()=>r(H,{position:"left",children:C("ul",{className:be.socialList,children:[r("li",{children:r("a",{href:"https://github.com/craciuncezar","aria-label":"GitHub",target:"_blank",rel:"noreferrer",children:C("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[r("title",{children:"GitHub"}),r("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})]})})}),r("li",{children:r("a",{href:"https://www.linkedin.com/in/cezar-craciun/","aria-label":"Linkedin",target:"_blank",rel:"noreferrer",children:C("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[r("title",{children:"LinkedIn"}),r("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),r("rect",{x:"2",y:"9",width:"4",height:"12"}),r("circle",{cx:"4",cy:"4",r:"2"})]})})}),r("li",{children:r("a",{href:"https://twitter.com/_cezarcraciun","aria-label":"Twitter",target:"_blank",rel:"noreferrer",children:C("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[r("title",{children:"Twitter"}),r("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})]})})})]})}),Me=()=>C(ce,{children:[r(Ce,{}),r(ye,{}),r(de,{})]}),Se=()=>r(Me,{});re();se.render(r(j.exports.StrictMode,{children:r(Se,{})}),document.querySelector("#root"));
