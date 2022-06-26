import{S as t,i as s,s as a,e,t as r,k as l,c,a as o,g as n,d as i,n as h,b as f,f as d,F as u,h as x,G as p,l as v,H as T,I as E}from"../chunks/vendor-1c533bd0.js";function g(t,s,a){const e=t.slice();return e[1]=s[a],e[3]=a,e}function b(t){let s;return{c(){s=e("tr")},l(t){s=c(t,"TR",{}),o(s).forEach(i)},m(t,a){d(t,s,a)},p:p,d(t){t&&i(s)}}}function m(t){let s,a=[],e=new Map,r=t[0];const l=t=>t[1].id;for(let c=0;c<r.length;c+=1){let s=g(t,r,c),o=l(s);e.set(o,a[c]=y(o,s))}return{c(){for(let t=0;t<a.length;t+=1)a[t].c();s=v()},l(t){for(let s=0;s<a.length;s+=1)a[s].l(t);s=v()},m(t,e){for(let s=0;s<a.length;s+=1)a[s].m(t,e);d(t,s,e)},p(t,c){1&c&&(r=t[0],a=T(a,c,l,1,t,r,e,s.parentNode,E,y,s,g))},d(t){for(let s=0;s<a.length;s+=1)a[s].d(t);t&&i(s)}}}function y(t,s){let a,p,v,T,E,g,b,m,y,w,D=s[3]+1+"",I=s[1].title+"",H=s[1].instructions+"";return{key:t,first:null,c(){a=e("tr"),p=e("td"),v=r(D),T=l(),E=e("td"),g=r(I),b=l(),m=e("td"),y=r(H),w=l(),this.h()},l(t){a=c(t,"TR",{class:!0});var s=o(a);p=c(s,"TD",{class:!0});var e=o(p);v=n(e,D),e.forEach(i),T=h(s),E=c(s,"TD",{class:!0,width:!0});var r=o(E);g=n(r,I),r.forEach(i),b=h(s),m=c(s,"TD",{width:!0});var l=o(m);y=n(l,H),l.forEach(i),w=h(s),s.forEach(i),this.h()},h(){f(p,"class","text-center border-r border-gray-300"),f(E,"class","capitalize"),f(E,"width","10%"),f(m,"width","80%"),f(a,"class","border-gray-300 border-b text-sm text-gray-800"),this.first=a},m(t,s){d(t,a,s),u(a,p),u(p,v),u(a,T),u(a,E),u(E,g),u(a,b),u(a,m),u(m,y),u(a,w)},p(t,a){s=t,1&a&&D!==(D=s[3]+1+"")&&x(v,D),1&a&&I!==(I=s[1].title+"")&&x(g,I),1&a&&H!==(H=s[1].instructions+"")&&x(y,H)},d(t){t&&i(a)}}}function w(t){let s,a,v,T,E,g,y,w,D,I,H,V,j,k,N,R,S,A,B,$,z,F,G,L,M,O=t[0].length+"";function Y(t,s){return t[0].length>0?m:b}let q=Y(t),C=q(t);return{c(){s=e("div"),a=e("div"),v=e("h4"),T=r("Tests"),E=l(),g=e("div"),y=e("div"),w=e("table"),D=e("thead"),I=e("tr"),H=e("th"),V=r("S/No"),j=l(),k=e("th"),N=r("Test Title"),R=l(),S=e("th"),A=r("Instructions"),B=l(),$=e("tbody"),C.c(),z=l(),F=e("div"),G=e("div"),L=r("Total Tests: "),M=r(O),this.h()},l(t){s=c(t,"DIV",{class:!0});var e=o(s);a=c(e,"DIV",{class:!0});var r=o(a);v=c(r,"H4",{class:!0});var l=o(v);T=n(l,"Tests"),l.forEach(i),r.forEach(i),E=h(e),g=c(e,"DIV",{class:!0});var f=o(g);y=c(f,"DIV",{class:!0});var d=o(y);w=c(d,"TABLE",{id:!0,class:!0});var u=o(w);D=c(u,"THEAD",{class:!0});var x=o(D);I=c(x,"TR",{class:!0});var p=o(I);H=c(p,"TH",{class:!0});var b=o(H);V=n(b,"S/No"),b.forEach(i),j=h(p),k=c(p,"TH",{class:!0});var m=o(k);N=n(m,"Test Title"),m.forEach(i),R=h(p),S=c(p,"TH",{class:!0});var Y=o(S);A=n(Y,"Instructions"),Y.forEach(i),p.forEach(i),x.forEach(i),B=h(u),$=c(u,"TBODY",{});var q=o($);C.l(q),q.forEach(i),u.forEach(i),d.forEach(i),z=h(f),F=c(f,"DIV",{class:!0});var J=o(F);G=c(J,"DIV",{class:!0});var K=o(G);L=n(K,"Total Tests: "),M=n(K,O),K.forEach(i),J.forEach(i),f.forEach(i),e.forEach(i),this.h()},h(){f(v,"class","font-bold text-4xl text-gray-700 cursor-pointer"),f(a,"class","flex items-center space-x-6 mb-10"),f(H,"class","pl-4 py-2"),f(k,"class","py-2"),f(S,"class","py-2"),f(I,"class","text-left text-xs text-white px-4 uppercase"),f(D,"class","bg-gray-600"),f(w,"id","tblData"),f(w,"class","table-fixed mt-5 min-w-full"),f(y,"class",""),f(G,"class","text-xl font-bold text-gray-600"),f(F,"class","flex flex-col space-y-3 justify-center items-center mt-5 px-4 text-xs"),f(g,"class","flex flex-col justify-between bg-white rounded-xl h-full w-auto mt-5 py-5 overflow-x-hidden overflow-scroll scrollbar relative shadow-2xl"),f(s,"class","flex flex-col px-10 min-h-screen py-10 bg-gray-200")},m(t,e){d(t,s,e),u(s,a),u(a,v),u(v,T),u(s,E),u(s,g),u(g,y),u(y,w),u(w,D),u(D,I),u(I,H),u(H,V),u(I,j),u(I,k),u(k,N),u(I,R),u(I,S),u(S,A),u(w,B),u(w,$),C.m($,null),u(g,z),u(g,F),u(F,G),u(G,L),u(G,M)},p(t,[s]){q===(q=Y(t))&&C?C.p(t,s):(C.d(1),C=q(t),C&&(C.c(),C.m($,null))),1&s&&O!==(O=t[0].length+"")&&x(M,O)},i:p,o:p,d(t){t&&i(s),C.d()}}}async function D({fetch:t}){const s=await t("/api/getTests.json");return{props:{tests:(await s.json()).tests}}}function I(t,s,a){let{tests:e}=s;return t.$$set=t=>{"tests"in t&&a(0,e=t.tests)},[e]}export default class extends t{constructor(t){super(),s(this,t,I,w,a,{tests:0})}}export{D as load};
