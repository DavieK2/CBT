import{S as t,i as e,s,l as r,f as a,G as l,d as c,Q as o,e as i,t as n,k as f,c as h,a as u,g as d,n as x,b as m,F as b,h as p}from"../chunks/vendor-1c533bd0.js";import{t as v}from"../chunks/test-54fffc01.js";function g(t){let e,s,r,l,o,v,g,w,E,I,y=t[0].instructions+"";return{c(){e=i("div"),s=i("div"),r=i("h1"),l=n("Instructions:"),o=f(),v=i("p"),g=n(y),w=f(),E=i("a"),I=n("Start Exam"),this.h()},l(t){e=h(t,"DIV",{class:!0});var a=u(e);s=h(a,"DIV",{class:!0});var i=u(s);r=h(i,"H1",{class:!0});var n=u(r);l=d(n,"Instructions:"),n.forEach(c),o=x(i),v=h(i,"P",{class:!0});var f=u(v);g=d(f,y),f.forEach(c),w=x(i),E=h(i,"A",{href:!0,class:!0});var m=u(E);I=d(m,"Start Exam"),m.forEach(c),i.forEach(c),a.forEach(c),this.h()},h(){m(r,"class","text-4xl text-white border-b-2 mb-6 border-white font-bold"),m(v,"class","max-w-lg text-white text-lg text-center"),m(E,"href","/exam"),m(E,"class","rounded-full bg-white px-8 py-4 mt-16 hover:text-white text-xl hover:bg-red-500 text-miablue"),m(s,"class","flex flex-col items-center"),m(e,"class","min-h-screen justify-center w-full flex flex-col items-center bg-gradient-to-b  from-purple-900 to-indigo-900")},m(t,c){a(t,e,c),b(e,s),b(s,r),b(r,l),b(s,o),b(s,v),b(v,g),b(s,w),b(s,E),b(E,I)},p(t,e){1&e&&y!==(y=t[0].instructions+"")&&p(g,y)},d(t){t&&c(e)}}}function w(t){let e,s,r,o;return{c(){e=i("div"),s=i("div"),r=i("h1"),o=n("Sorry this page is no longer available"),this.h()},l(t){e=h(t,"DIV",{class:!0});var a=u(e);s=h(a,"DIV",{class:!0});var l=u(s);r=h(l,"H1",{class:!0});var i=u(r);o=d(i,"Sorry this page is no longer available"),i.forEach(c),l.forEach(c),a.forEach(c),this.h()},h(){m(r,"class","text-4xl text-white border-b-2 mb-6 border-white font-bold"),m(s,"class","flex flex-col items-center"),m(e,"class","min-h-screen justify-center w-full flex flex-col items-center bg-gradient-to-b  from-purple-900 to-indigo-900")},m(t,l){a(t,e,l),b(e,s),b(s,r),b(r,o)},p:l,d(t){t&&c(e)}}}function E(t){let e;function s(t,e){return""===t[0].instructions?w:g}let o=s(t),i=o(t);return{c(){i.c(),e=r()},l(t){i.l(t),e=r()},m(t,s){i.m(t,s),a(t,e,s)},p(t,[r]){o===(o=s(t))&&i?i.p(t,r):(i.d(1),i=o(t),i&&(i.c(),i.m(e.parentNode,e)))},i:l,o:l,d(t){i.d(t),t&&c(e)}}}function I(t,e,s){let r;return o(t,v,(t=>s(0,r=t))),[r]}export default class extends t{constructor(t){super(),e(this,t,I,E,s,{})}}