import{S as e,i as t,s,l as a,f as l,H as n,I as r,d as o,e as c,t as i,k as u,c as f,a as d,g as m,n as h,b as p,J as g,F as v,K as b,L as y,M as x,N as _,G as w,O as E,h as T,P as S}from"../chunks/vendor-dceaf59c.js";import{r as I}from"../chunks/singletons-bb9012b7.js";import{t as N}from"../chunks/test-e951cb57.js";const O=async function(e,t){return I.goto(e,t,[])};function j(e,t,s){const a=e.slice();return a[8]=t[s],a}function L(e,t,s){const a=e.slice();return a[11]=t[s],a}function P(e){let t,s=[],c=new Map,i=e[0];const u=e=>e[11].id;for(let a=0;a<i.length;a+=1){let t=L(e,i,a),l=u(t);c.set(l,s[a]=k(l,t))}return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=a()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=a()},m(e,a){for(let t=0;t<s.length;t+=1)s[t].m(e,a);l(e,t,a)},p(e,a){1&a&&(i=e[0],s=n(s,a,u,1,e,i,c,t.parentNode,r,k,t,L))},d(e){for(let t=0;t<s.length;t+=1)s[t].d(e);e&&o(t)}}}function k(e,t){let s,a,n,r=t[11].class_name+"";return{key:e,first:null,c(){s=c("option"),a=i(r),this.h()},l(e){s=f(e,"OPTION",{});var t=d(s);a=m(t,r),t.forEach(o),this.h()},h(){s.__value=n=t[11].class_name,s.value=s.__value,this.first=s},m(e,t){l(e,s,t),v(s,a)},p(e,l){t=e,1&l&&r!==(r=t[11].class_name+"")&&T(a,r),1&l&&n!==(n=t[11].class_name)&&(s.__value=n,s.value=s.__value)},d(e){e&&o(s)}}}function C(e){let t,s=[],c=new Map,i=e[1];const u=e=>e[8].id;for(let a=0;a<i.length;a+=1){let t=j(e,i,a),l=u(t);c.set(l,s[a]=D(l,t))}return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=a()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=a()},m(e,a){for(let t=0;t<s.length;t+=1)s[t].m(e,a);l(e,t,a)},p(e,a){2&a&&(i=e[1],s=n(s,a,u,1,e,i,c,t.parentNode,r,D,t,j))},d(e){for(let t=0;t<s.length;t+=1)s[t].d(e);e&&o(t)}}}function D(e,t){let s,a,n,r=t[8].title+"";return{key:e,first:null,c(){s=c("option"),a=i(r),this.h()},l(e){s=f(e,"OPTION",{});var t=d(s);a=m(t,r),t.forEach(o),this.h()},h(){s.__value=n=t[8].title,s.value=s.__value,this.first=s},m(e,t){l(e,s,t),v(s,a)},p(e,l){t=e,2&l&&r!==(r=t[8].title+"")&&T(a,r),2&l&&n!==(n=t[8].title)&&(s.__value=n,s.value=s.__value)},d(e){e&&o(s)}}}function V(e){let t,s,a,n,r,T,S,I,N,O,j,L,k,D,V,A,B,F,M,q,U,J,$,G,H,K,R,z,Q,W,X,Y,Z,ee,te,se=e[0].length>0&&P(e),ae=e[1].length>0&&C(e);return{c(){t=c("div"),s=c("form"),a=c("div"),n=c("div"),r=c("label"),T=i("Type in your First Name"),S=u(),I=c("input"),N=u(),O=c("div"),j=c("label"),L=i("Type in your Surname"),k=u(),D=c("input"),V=u(),A=c("div"),B=c("label"),F=i("Select your Class"),M=u(),q=c("select"),U=c("option"),J=i("Select your Class"),se&&se.c(),$=u(),G=c("div"),H=c("label"),K=i("Select Test"),R=u(),z=c("select"),Q=c("option"),W=i("Select Test"),ae&&ae.c(),X=u(),Y=c("button"),Z=i("Click to Proceed"),this.h()},l(e){t=f(e,"DIV",{class:!0});var l=d(t);s=f(l,"FORM",{class:!0,action:!0,method:!0});var c=d(s);a=f(c,"DIV",{class:!0});var i=d(a);n=f(i,"DIV",{class:!0});var u=d(n);r=f(u,"LABEL",{class:!0,for:!0});var p=d(r);T=m(p,"Type in your First Name"),p.forEach(o),S=h(u),I=f(u,"INPUT",{class:!0,type:!0,name:!0,id:!0,autocomplete:!0}),u.forEach(o),N=h(i),O=f(i,"DIV",{class:!0});var g=d(O);j=f(g,"LABEL",{class:!0,for:!0});var v=d(j);L=m(v,"Type in your Surname"),v.forEach(o),k=h(g),D=f(g,"INPUT",{class:!0,type:!0,name:!0,id:!0,autocomplete:!0}),g.forEach(o),V=h(i),A=f(i,"DIV",{class:!0});var b=d(A);B=f(b,"LABEL",{class:!0,for:!0});var y=d(B);F=m(y,"Select your Class"),y.forEach(o),M=h(b),q=f(b,"SELECT",{class:!0,type:!0,name:!0,id:!0,autocomplete:!0});var x=d(q);U=f(x,"OPTION",{});var _=d(U);J=m(_,"Select your Class"),_.forEach(o),se&&se.l(x),x.forEach(o),b.forEach(o),$=h(i),G=f(i,"DIV",{class:!0});var w=d(G);H=f(w,"LABEL",{class:!0,for:!0});var E=d(H);K=m(E,"Select Test"),E.forEach(o),R=h(w),z=f(w,"SELECT",{class:!0,type:!0,name:!0,id:!0,autocomplete:!0});var P=d(z);Q=f(P,"OPTION",{});var C=d(Q);W=m(C,"Select Test"),C.forEach(o),ae&&ae.l(P),P.forEach(o),w.forEach(o),i.forEach(o),X=h(c),Y=f(c,"BUTTON",{type:!0,class:!0});var ee=d(Y);Z=m(ee,"Click to Proceed"),ee.forEach(o),c.forEach(o),l.forEach(o),this.h()},h(){p(r,"class","text-gray-100 text-base  mb-2"),p(r,"for","first_name"),p(I,"class","bg-blue-100 text-base py-3 px-4 w-full  rounded-lg"),p(I,"type","text"),p(I,"name","first_name"),p(I,"id","first_name"),p(I,"autocomplete","off"),I.required=!0,p(n,"class","flex flex-col justify-between w-full"),p(j,"class"," text-gray-100 text-base  mb-2"),p(j,"for","surname"),p(D,"class","bg-blue-100 text-base py-3 px-4 w-full rounded-lg"),p(D,"type","text"),p(D,"name","surname"),p(D,"id","surname"),p(D,"autocomplete","off"),p(O,"class","flex flex-col justify-between w-full"),p(B,"class"," text-gray-100 text-base  mb-2"),p(B,"for","first_name"),U.__value="",U.value=U.__value,U.disabled=!0,U.selected=!0,p(q,"class","bg-blue-100 text-base py-3 px-4 w-full rounded-lg"),p(q,"type","text"),p(q,"name","class"),p(q,"id",""),p(q,"autocomplete","off"),q.required=!0,void 0===e[2].grade&&g((()=>e[6].call(q))),p(A,"class","flex flex-col justify-between w-full"),p(H,"class"," text-gray-100 text-base  mb-2"),p(H,"for","first_name"),Q.__value="",Q.value=Q.__value,Q.disabled=!0,Q.selected=!0,p(z,"class","bg-blue-100 text-base py-3 px-4 w-full rounded-lg"),p(z,"type","text"),p(z,"name","class"),p(z,"id",""),p(z,"autocomplete","off"),z.required=!0,void 0===e[2].test&&g((()=>e[7].call(z))),p(G,"class","flex flex-col justify-between w-full"),p(a,"class","space-y-7"),p(Y,"type","submit"),p(Y,"class","mt-10 text-center rounded-xl bg-red-500  text-base  text-white px-6 py-4 hover:bg-red-600"),p(s,"class","flex flex-col fixed inset-0 font-bold text-center bg-black p-12 bg-opacity-40 max-w-lg max-h-[38rem] mx-auto my-auto rounded-2xl"),p(s,"action",""),p(s,"method","post"),p(t,"class","relative min-h-screen w-full bg-gradient-to-b  from-purple-900 to-indigo-900")},m(o,c){l(o,t,c),v(t,s),v(s,a),v(a,n),v(n,r),v(r,T),v(n,S),v(n,I),b(I,e[2].first_name),v(a,N),v(a,O),v(O,j),v(j,L),v(O,k),v(O,D),b(D,e[2].surname),v(a,V),v(a,A),v(A,B),v(B,F),v(A,M),v(A,q),v(q,U),v(U,J),se&&se.m(q,null),y(q,e[2].grade),v(a,$),v(a,G),v(G,H),v(H,K),v(G,R),v(G,z),v(z,Q),v(Q,W),ae&&ae.m(z,null),y(z,e[2].test),v(s,X),v(s,Y),v(Y,Z),ee||(te=[x(I,"input",e[4]),x(D,"input",e[5]),x(q,"change",e[6]),x(z,"change",e[7]),x(s,"submit",_(e[3]))],ee=!0)},p(e,[t]){5&t&&I.value!==e[2].first_name&&b(I,e[2].first_name),5&t&&D.value!==e[2].surname&&b(D,e[2].surname),e[0].length>0?se?se.p(e,t):(se=P(e),se.c(),se.m(q,null)):se&&(se.d(1),se=null),5&t&&y(q,e[2].grade),e[1].length>0?ae?ae.p(e,t):(ae=C(e),ae.c(),ae.m(z,null)):ae&&(ae.d(1),ae=null),5&t&&y(z,e[2].test)},i:w,o:w,d(e){e&&o(t),se&&se.d(),ae&&ae.d(),ee=!1,E(te)}}}async function A({fetch:e}){const t=await e("/api/getClassesAndTests.json"),s=await t.json();return{props:{tests:s.tests,classes:s.classes}}}function B(e,t,s){let{classes:a}=t,{tests:l}=t,n={first_name:"",surname:"",grade:"",test:""};return e.$$set=e=>{"classes"in e&&s(0,a=e.classes),"tests"in e&&s(1,l=e.tests)},[a,l,n,async()=>{const e=await fetch("/index.json",{method:"POST",body:JSON.stringify(n),headers:{"content-type":"application/json"}});let t=await e.json();t=t.data,t&&(window.localStorage.setItem("student_name",t.student_name),window.localStorage.setItem("student_grade",t.student_grade),window.localStorage.setItem("test_id",t.test_id),N.update((e=>t)),O("/instructions"))},function(){n.first_name=this.value,s(2,n),s(0,a)},function(){n.surname=this.value,s(2,n),s(0,a)},function(){n.grade=S(this),s(2,n),s(0,a)},function(){n.test=S(this),s(2,n),s(0,a)}]}export default class extends e{constructor(e){super(),t(this,e,B,V,s,{classes:0,tests:1})}}export{A as load};