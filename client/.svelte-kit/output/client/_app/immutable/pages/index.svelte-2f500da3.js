import{S as ee,i as te,s as ae,F as se,e as v,k as C,t as D,c as w,a as E,d as _,m as H,h as I,b as g,V as le,g as q,I as d,j as O,J as ne,K as re,L as oe,q as k,o as j,w as R,x as F,y as G,B as J,p as fe,R as ie,U as ue,v as ce,n as me}from"../chunks/index-b998ea59.js";import{f as de,q as _e,Q as he,a as W}from"../chunks/albums-8cf2b840.js";import{f as X,H as ge,B as Y}from"../chunks/Heading-40fa49e7.js";import"../chunks/index-fe7b1805.js";function pe(r){let e,t,a,o,i,n,l,m,s,u,p,f=X(r[1])+"",A,S,K,V,M,L,y,b;const N=r[5].default,$=se(N,r,r[4],null);return{c(){e=v("div"),t=v("a"),a=v("img"),n=C(),l=v("div"),m=v("a"),s=v("h5"),u=D(r[0]),p=D(" | "),A=D(f),K=C(),V=v("p"),M=D(r[2]),L=C(),y=v("div"),$&&$.c(),this.h()},l(c){e=w(c,"DIV",{class:!0});var h=E(e);t=w(h,"A",{href:!0});var P=E(t);a=w(P,"IMG",{class:!0,src:!0,alt:!0}),P.forEach(_),n=H(h),l=w(h,"DIV",{class:!0});var B=E(l);m=w(B,"A",{href:!0});var T=E(m);s=w(T,"H5",{class:!0});var Q=E(s);u=I(Q,r[0]),p=I(Q," | "),A=I(Q,f),Q.forEach(_),T.forEach(_),K=H(B),V=w(B,"P",{class:!0});var U=E(V);M=I(U,r[2]),U.forEach(_),L=H(B),y=w(B,"DIV",{class:!0});var z=E(y);$&&$.l(z),z.forEach(_),B.forEach(_),h.forEach(_),this.h()},h(){g(a,"class","rounded-t-lg h-64 w-full object-cover"),le(a.src,o="sample.jpg")||g(a,"src",o),g(a,"alt",""),g(t,"href",i="album/"+r[3]),g(s,"class","mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"),g(m,"href",S="album/"+r[3]),g(V,"class","mb-3 font-normal text-gray-700 dark:text-gray-400"),g(y,"class","flex w-full justify-end"),g(l,"class","p-5"),g(e,"class","w-4/12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700")},m(c,h){q(c,e,h),d(e,t),d(t,a),d(e,n),d(e,l),d(l,m),d(m,s),d(s,u),d(s,p),d(s,A),d(l,K),d(l,V),d(V,M),d(l,L),d(l,y),$&&$.m(y,null),b=!0},p(c,[h]){(!b||h&8&&i!==(i="album/"+c[3]))&&g(t,"href",i),(!b||h&1)&&O(u,c[0]),(!b||h&2)&&f!==(f=X(c[1])+"")&&O(A,f),(!b||h&8&&S!==(S="album/"+c[3]))&&g(m,"href",S),(!b||h&4)&&O(M,c[2]),$&&$.p&&(!b||h&16)&&ne($,N,c,c[4],b?oe(N,c[4],h,null):re(c[4]),null)},i(c){b||(k($,c),b=!0)},o(c){j($,c),b=!1},d(c){c&&_(e),$&&$.d(c)}}}function $e(r,e,t){let{$$slots:a={},$$scope:o}=e,{name:i}=e,{date:n}=e,{description:l}=e,{id:m}=e;return r.$$set=s=>{"name"in s&&t(0,i=s.name),"date"in s&&t(1,n=s.date),"description"in s&&t(2,l=s.description),"id"in s&&t(3,m=s.id),"$$scope"in s&&t(4,o=s.$$scope)},[i,n,l,m,o,a]}class be extends ee{constructor(e){super(),te(this,e,$e,pe,ae,{name:0,date:1,description:2,id:3})}}function Z(r,e,t){const a=r.slice();return a[1]=e[t].id,a[2]=e[t].name,a[3]=e[t].date,a[4]=e[t].description,a}function ve(r){let e;return{c(){e=D("Albuns")},l(t){e=I(t,"Albuns")},m(t,a){q(t,e,a)},d(t){t&&_(e)}}}function we(r){let e;return{c(){e=D("Editar")},l(t){e=I(t,"Editar")},m(t,a){q(t,e,a)},d(t){t&&_(e)}}}function Ee(r){let e;return{c(){e=D("Apagar")},l(t){e=I(t,"Apagar")},m(t,a){q(t,e,a)},d(t){t&&_(e)}}}function ke(r){let e,t,a,o,i;return e=new Y({props:{type:"Edit",id:r[1],$$slots:{default:[we]},$$scope:{ctx:r}}}),a=new Y({props:{type:"Delete",id:r[1],$$slots:{default:[Ee]},$$scope:{ctx:r}}}),{c(){R(e.$$.fragment),t=C(),R(a.$$.fragment),o=C()},l(n){F(e.$$.fragment,n),t=H(n),F(a.$$.fragment,n),o=H(n)},m(n,l){G(e,n,l),q(n,t,l),G(a,n,l),q(n,o,l),i=!0},p(n,l){const m={};l&1&&(m.id=n[1]),l&128&&(m.$$scope={dirty:l,ctx:n}),e.$set(m);const s={};l&1&&(s.id=n[1]),l&128&&(s.$$scope={dirty:l,ctx:n}),a.$set(s)},i(n){i||(k(e.$$.fragment,n),k(a.$$.fragment,n),i=!0)},o(n){j(e.$$.fragment,n),j(a.$$.fragment,n),i=!1},d(n){J(e,n),n&&_(t),J(a,n),n&&_(o)}}}function x(r){let e,t;return e=new be({props:{id:r[1],name:r[2],date:r[3],description:r[4],$$slots:{default:[ke]},$$scope:{ctx:r}}}),{c(){R(e.$$.fragment)},l(a){F(e.$$.fragment,a)},m(a,o){G(e,a,o),t=!0},p(a,o){const i={};o&1&&(i.id=a[1]),o&1&&(i.name=a[2]),o&1&&(i.date=a[3]),o&1&&(i.description=a[4]),o&129&&(i.$$scope={dirty:o,ctx:a}),e.$set(i)},i(a){t||(k(e.$$.fragment,a),t=!0)},o(a){j(e.$$.fragment,a),t=!1},d(a){J(e,a)}}}function Ae(r){let e,t,a,o,i;t=new ge({props:{type:"h1",$$slots:{default:[ve]},$$scope:{ctx:r}}});let n=r[0],l=[];for(let s=0;s<n.length;s+=1)l[s]=x(Z(r,n,s));const m=s=>j(l[s],1,1,()=>{l[s]=null});return{c(){e=v("section"),R(t.$$.fragment),a=C(),o=v("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=w(s,"SECTION",{class:!0});var u=E(e);F(t.$$.fragment,u),a=H(u),o=w(u,"DIV",{class:!0});var p=E(o);for(let f=0;f<l.length;f+=1)l[f].l(p);p.forEach(_),u.forEach(_),this.h()},h(){g(o,"class","flex w-full flex-wrap justify-evenly items-stretch gap-6"),g(e,"class","flex flex-wrap w-full justify-center my-12")},m(s,u){q(s,e,u),G(t,e,null),d(e,a),d(e,o);for(let p=0;p<l.length;p+=1)l[p].m(o,null);i=!0},p(s,[u]){const p={};if(u&128&&(p.$$scope={dirty:u,ctx:s}),t.$set(p),u&1){n=s[0];let f;for(f=0;f<n.length;f+=1){const A=Z(s,n,f);l[f]?(l[f].p(A,u),k(l[f],1)):(l[f]=x(A),l[f].c(),k(l[f],1),l[f].m(o,null))}for(me(),f=n.length;f<l.length;f+=1)m(f);fe()}},i(s){if(!i){k(t.$$.fragment,s);for(let u=0;u<n.length;u+=1)k(l[u]);i=!0}},o(s){j(t.$$.fragment,s),l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)j(l[u]);i=!1},d(s){s&&_(e),J(t),ie(l,s)}}}function De(r,e,t){let a;return ue(r,W,o=>t(0,a=o)),ce(async()=>{const o=await de(_e(he.all),{});W.set(o.data.albums)}),[a]}class ye extends ee{constructor(e){super(),te(this,e,De,Ae,ae,{})}}export{ye as default};