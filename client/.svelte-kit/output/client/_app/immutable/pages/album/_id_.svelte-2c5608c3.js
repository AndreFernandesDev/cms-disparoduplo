import{X as Ee,S as Ae,i as Be,s as Ne,e as J,w as F,k as C,c as K,a as te,x as D,m as M,d as w,b as I,O as ne,g as B,H as S,y as E,I as $e,J as Ue,U as qe,K as Oe,q as g,l as Y,o as _,B as A,p as se,L as je,M as Te,N as _e,v as Ge,F as Me,G as He,n as le,t as re,h as ie}from"../../chunks/index-badb0e67.js";import{c as he,f as be,q as Pe,Q as Ve,a as we,H as fe,B as ze,i as Le,m as Qe,M as Je,b as Ke,t as Re}from"../../chunks/utilities-c43d591b.js";import{I as W,M as Xe,a as Fe,d as ye,s as We,u as Ye}from"../../chunks/manageMedia-9a00b692.js";import"../../chunks/index-1c4fa093.js";const Ze=()=>{const e=Ee("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session,updated:e.updated}},xe={subscribe(e){return Ze().page.subscribe(e)}};function ke(e,t,n){const a=e.slice();return a[24]=t[n],a}function ve(e){let t,n,a,l,u,d,c,f,k,s,r,b,N,i,U,q,Z,O,R,P,x,V,ee,T,X,y,o,$,G,H,j,ae;a=new fe({props:{type:"h1",$$slots:{default:[et]},$$scope:{ctx:e}}});function De(m){e[11](m)}let ue={onChange:e[6],type:"filePreview",name:"newMediaUpload"};e[1]!==void 0&&(ue.files=e[1]),u=new W({props:ue}),Me.push(()=>He(u,"files",De)),k=new fe({props:{type:"h1",$$slots:{default:[tt]},$$scope:{ctx:e}}}),b=new W({props:{value:String(e[4].name),type:"text",name:"name",placeholder:"Nome..."}}),i=new W({props:{value:String(e[4].password),type:"text",name:"password",placeholder:"Senha..."}}),q=new W({props:{value:String(e[4].description),type:"textarea",name:"description",placeholder:"Sobre o evento..."}}),O=new W({props:{value:e[4].location,type:"text",name:"location",placeholder:"Local..."}}),P=new W({props:{value:String(he(e[4].date)),type:"date",name:"date",placeholder:"Dia do evento..."}}),V=new ze({props:{action:"submit",type:"Popup",display:e[2],$$slots:{default:[at]},$$scope:{ctx:e}}}),$=new fe({props:{type:"h1",$$slots:{default:[nt]},$$scope:{ctx:e}}});let h=e[4].media&&e[4].media.length&&Ie(e);return{c(){t=J("form"),n=J("section"),F(a.$$.fragment),l=C(),F(u.$$.fragment),c=C(),f=J("section"),F(k.$$.fragment),s=C(),r=J("div"),F(b.$$.fragment),N=C(),F(i.$$.fragment),U=C(),F(q.$$.fragment),Z=C(),F(O.$$.fragment),R=C(),F(P.$$.fragment),x=C(),F(V.$$.fragment),ee=C(),T=J("img"),y=C(),o=J("section"),F($.$$.fragment),G=C(),h&&h.c(),this.h()},l(m){t=K(m,"FORM",{class:!0});var p=te(t);n=K(p,"SECTION",{class:!0});var L=te(n);D(a.$$.fragment,L),l=M(L),D(u.$$.fragment,L),L.forEach(w),c=M(p),f=K(p,"SECTION",{class:!0});var z=te(f);D(k.$$.fragment,z),s=M(z),r=K(z,"DIV",{class:!0});var v=te(r);D(b.$$.fragment,v),N=M(v),D(i.$$.fragment,v),U=M(v),D(q.$$.fragment,v),Z=M(v),D(O.$$.fragment,v),R=M(v),D(P.$$.fragment,v),x=M(v),D(V.$$.fragment,v),v.forEach(w),ee=M(z),T=K(z,"IMG",{src:!0,alt:!0,class:!0}),z.forEach(w),p.forEach(w),y=M(m),o=K(m,"SECTION",{class:!0});var Q=te(o);D($.$$.fragment,Q),G=M(Q),h&&h.l(Q),Q.forEach(w),this.h()},h(){I(n,"class","flex flex-wrap items-stretch w-full mt-6"),I(r,"class","flex flex-col w-3/5 pr-12"),ne(T.src,X=e[4].featured.path)||I(T,"src",X),I(T,"alt",""),I(T,"class","w-2/5 h-96 object-cover rounded-md"),I(f,"class","flex flex-wrap items-stretch w-full "),I(t,"class","w-full"),I(o,"class","flex flex-wrap w-full")},m(m,p){B(m,t,p),S(t,n),E(a,n,null),S(n,l),E(u,n,null),S(t,c),S(t,f),E(k,f,null),S(f,s),S(f,r),E(b,r,null),S(r,N),E(i,r,null),S(r,U),E(q,r,null),S(r,Z),E(O,r,null),S(r,R),E(P,r,null),S(r,x),E(V,r,null),S(f,ee),S(f,T),e[12](t),B(m,y,p),B(m,o,p),E($,o,null),S(o,G),h&&h.m(o,null),H=!0,j||(ae=[$e(t,"submit",Ue(e[8])),$e(t,"change",function(){qe(e[5])&&e[5].apply(this,arguments)})],j=!0)},p(m,p){e=m;const L={};p&134217728&&(L.$$scope={dirty:p,ctx:e}),a.$set(L);const z={};!d&&p&2&&(d=!0,z.files=e[1],Oe(()=>d=!1)),u.$set(z);const v={};p&134217728&&(v.$$scope={dirty:p,ctx:e}),k.$set(v);const Q={};p&16&&(Q.value=String(e[4].name)),b.$set(Q);const me={};p&16&&(me.value=String(e[4].password)),i.$set(me);const ce={};p&16&&(ce.value=String(e[4].description)),q.$set(ce);const pe={};p&16&&(pe.value=e[4].location),O.$set(pe);const de={};p&16&&(de.value=String(he(e[4].date))),P.$set(de);const oe={};p&4&&(oe.display=e[2]),p&134217728&&(oe.$$scope={dirty:p,ctx:e}),V.$set(oe),(!H||p&16&&!ne(T.src,X=e[4].featured.path))&&I(T,"src",X);const ge={};p&134217728&&(ge.$$scope={dirty:p,ctx:e}),$.$set(ge),e[4].media&&e[4].media.length?h?(h.p(e,p),p&16&&g(h,1)):(h=Ie(e),h.c(),g(h,1),h.m(o,null)):h&&(le(),_(h,1,1,()=>{h=null}),se())},i(m){H||(g(a.$$.fragment,m),g(u.$$.fragment,m),g(k.$$.fragment,m),g(b.$$.fragment,m),g(i.$$.fragment,m),g(q.$$.fragment,m),g(O.$$.fragment,m),g(P.$$.fragment,m),g(V.$$.fragment,m),g($.$$.fragment,m),g(h),H=!0)},o(m){_(a.$$.fragment,m),_(u.$$.fragment,m),_(k.$$.fragment,m),_(b.$$.fragment,m),_(i.$$.fragment,m),_(q.$$.fragment,m),_(O.$$.fragment,m),_(P.$$.fragment,m),_(V.$$.fragment,m),_($.$$.fragment,m),_(h),H=!1},d(m){m&&w(t),A(a),A(u),A(k),A(b),A(i),A(q),A(O),A(P),A(V),e[12](null),m&&w(y),m&&w(o),A($),h&&h.d(),j=!1,Te(ae)}}}function et(e){let t;return{c(){t=re("Adicionar multimedia")},l(n){t=ie(n,"Adicionar multimedia")},m(n,a){B(n,t,a)},d(n){n&&w(t)}}}function tt(e){let t;return{c(){t=re("Alterar album")},l(n){t=ie(n,"Alterar album")},m(n,a){B(n,t,a)},d(n){n&&w(t)}}}function at(e){let t;return{c(){t=re("Atualizar")},l(n){t=ie(n,"Atualizar")},m(n,a){B(n,t,a)},d(n){n&&w(t)}}}function nt(e){let t;return{c(){t=re("Fotos & Videos")},l(n){t=ie(n,"Fotos & Videos")},m(n,a){B(n,t,a)},d(n){n&&w(t)}}}function Ie(e){let t,n,a,l,u,d;t=new Xe({props:{type:"click",id:"fullImg",extraClass:"bg-black",$$slots:{default:[st]},$$scope:{ctx:e}}}),a=new Fe({props:{modalId:"fullImg",onClickDelete:e[13],onClick:e[14],featured:!0,path:e[4].featured.path,name:e[4].featured.name}});let c=e[4].media,f=[];for(let s=0;s<c.length;s+=1)f[s]=Ce(ke(e,c,s));const k=s=>_(f[s],1,1,()=>{f[s]=null});return{c(){F(t.$$.fragment),n=C(),F(a.$$.fragment),l=C();for(let s=0;s<f.length;s+=1)f[s].c();u=Y()},l(s){D(t.$$.fragment,s),n=M(s),D(a.$$.fragment,s),l=M(s);for(let r=0;r<f.length;r+=1)f[r].l(s);u=Y()},m(s,r){E(t,s,r),B(s,n,r),E(a,s,r),B(s,l,r);for(let b=0;b<f.length;b+=1)f[b].m(s,r);B(s,u,r),d=!0},p(s,r){const b={};r&134217736&&(b.$$scope={dirty:r,ctx:s}),t.$set(b);const N={};if(r&16&&(N.onClickDelete=s[13]),r&16&&(N.onClick=s[14]),r&16&&(N.path=s[4].featured.path),r&16&&(N.name=s[4].featured.name),a.$set(N),r&1680){c=s[4].media;let i;for(i=0;i<c.length;i+=1){const U=ke(s,c,i);f[i]?(f[i].p(U,r),g(f[i],1)):(f[i]=Ce(U),f[i].c(),g(f[i],1),f[i].m(u.parentNode,u))}for(le(),i=c.length;i<f.length;i+=1)k(i);se()}},i(s){if(!d){g(t.$$.fragment,s),g(a.$$.fragment,s);for(let r=0;r<c.length;r+=1)g(f[r]);d=!0}},o(s){_(t.$$.fragment,s),_(a.$$.fragment,s),f=f.filter(Boolean);for(let r=0;r<f.length;r+=1)_(f[r]);d=!1},d(s){A(t,s),s&&w(n),A(a,s),s&&w(l),je(f,s),s&&w(u)}}}function st(e){let t,n,a;return{c(){t=J("img"),this.h()},l(l){t=K(l,"IMG",{for:!0,src:!0,alt:!0,class:!0}),this.h()},h(){I(t,"for","my-modal"),ne(t.src,n=e[3].path)||I(t,"src",n),I(t,"alt",a=e[3].name),I(t,"class","modal-button w-full h-full object-contain rounded-md")},m(l,u){B(l,t,u)},p(l,u){u&8&&!ne(t.src,n=l[3].path)&&I(t,"src",n),u&8&&a!==(a=l[3].name)&&I(t,"alt",a)},d(l){l&&w(t)}}}function Se(e){let t,n;function a(){return e[15](e[24])}function l(){return e[16](e[24])}function u(){return e[17](e[24])}return t=new Fe({props:{modalId:"fullImg",onClickFeatured:a,onClickDelete:l,onClick:u,featured:!1,path:e[24].path,name:e[24].name}}),{c(){F(t.$$.fragment)},l(d){D(t.$$.fragment,d)},m(d,c){E(t,d,c),n=!0},p(d,c){e=d;const f={};c&16&&(f.onClickFeatured=a),c&16&&(f.onClickDelete=l),c&16&&(f.onClick=u),c&16&&(f.path=e[24].path),c&16&&(f.name=e[24].name),t.$set(f)},i(d){n||(g(t.$$.fragment,d),n=!0)},o(d){_(t.$$.fragment,d),n=!1},d(d){A(t,d)}}}function Ce(e){let t,n,a=e[24].featured===!1&&Se(e);return{c(){a&&a.c(),t=Y()},l(l){a&&a.l(l),t=Y()},m(l,u){a&&a.m(l,u),B(l,t,u),n=!0},p(l,u){l[24].featured===!1?a?(a.p(l,u),u&16&&g(a,1)):(a=Se(l),a.c(),g(a,1),a.m(t.parentNode,t)):a&&(le(),_(a,1,1,()=>{a=null}),se())},i(l){n||(g(a),n=!0)},o(l){_(a),n=!1},d(l){a&&a.d(l),l&&w(t)}}}function lt(e){let t,n,a=e[4]&&ve(e);return{c(){a&&a.c(),t=Y()},l(l){a&&a.l(l),t=Y()},m(l,u){a&&a.m(l,u),B(l,t,u),n=!0},p(l,[u]){l[4]?a?(a.p(l,u),u&16&&g(a,1)):(a=ve(l),a.c(),g(a,1),a.m(t.parentNode,t)):a&&(le(),_(a,1,1,()=>{a=null}),se())},i(l){n||(g(a),n=!0)},o(l){_(a),n=!1},d(l){a&&a.d(l),l&&w(t)}}}function rt(e,t,n){let a,l,u;_e(e,we,o=>n(21,l=o)),_e(e,xe,o=>n(22,u=o));let d,c;const f=u.params.id;let k=[],s={id:"",oldFeaturedId:""},r=!1,b={},N={path:"",name:""},i={name:"",description:"",location:"",date:0,featured:{path:""},media:[{path:"",name:""}]};Ge(async()=>{if(!l.length){const o=await be(Pe(Ve.all),{});we.set(o.data.albums)}n(4,i=l.filter(o=>o.id===f)[0]),b={...i}});const U=()=>{!Le(i,b)||c.length?n(2,r=!0):n(2,r=!1)},q=(o,$)=>{n(3,N={path:o,name:$})},Z=async()=>{const o=new FormData(d);let $=Object.fromEntries(o.entries());const G=Qe(Ke.album,Je.update),H={id:f,name:$.name,date:Re(String($.date)),location:$.location,description:$.description,password:$.password};if(await be(G,H),c.length){const ae=await We(f,c);n(4,i.media=[...i.media,...ae],i)}k.length&&await ye(f,k),s.id&&s.oldFeaturedId&&await Ye(s.id,s.oldFeaturedId),n(1,c=[]);const j=document.getElementById("newMediaUpload");j&&(j.value=[]),k=[],b={...i},U()},O=async(o,$)=>{if(!o)return null;n(4,i.media=i.media.filter(G=>G.id!==o),i),k.push({id:o,path:$}),U()},R=async(o,$)=>{if(!o)return null;const G=i.media.map(j=>(j.id===o?j.featured=!0:j.id===i.featured.id&&(j.featured=!1),j)),H={id:o,path:$};s={id:o,oldFeaturedId:i.featured.id},n(4,i={...i,media:G,featured:H}),U()};function P(o){c=o,n(1,c)}function x(o){Me[o?"unshift":"push"](()=>{d=o,n(0,d)})}const V=()=>O(i.featured.id,i.featured.path),ee=()=>q(i.featured.path,i.featured.name),T=o=>R(o.id,o.path),X=o=>O(o.id,o.path),y=o=>q(o.path,o.name);return n(5,a=o=>{const $=o.target,G=String($.name),H=$.value;n(4,i[G]=H,i),U()}),[d,c,r,N,i,a,U,q,Z,O,R,P,x,V,ee,T,X,y]}class mt extends Ae{constructor(t){super(),Be(this,t,rt,lt,Ne,{})}}export{mt as default};