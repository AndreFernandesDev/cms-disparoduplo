import{w as A}from"./index-1c4fa093.js";import{S as D,i as O,s as q,l as E,g as b,n as j,o as _,p as z,q as p,d as c,P as k,e as g,c as v,a as h,Q as w,R as C,T as $,b as d,H as I,E as T,V as L,W as S,I as B,U as H,w as M,x as P,y as U,B as V,J}from"./index-badb0e67.js";const G="http://localhost:5000/graphql",Q=(t,e)=>({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t,variables:e})}),be=async(t,e={})=>({...await(await fetch(G,Q(t,e))).json()});var R=(t=>(t.all="all",t.one="one",t))(R||{});const ye=(t,e={})=>({all:`
			query {
				albums {
					id
					name
					date
					location
					password
					description
					featured {
						id
						path
					}
					media {
						id
						name
						type
						path
						featured
					}
				}
			}
		`,one:`
			query {
				albums(id: ${e.id?e.id:""}) {
					id
					name
					date
					location
					description
					featured {
						id
						path
					}
				}
			}
		`})[t];var W=(t=>(t.album="album",t.media="media",t))(W||{}),K=(t=>(t.add="add",t.delete="delete",t.update="update",t))(K||{});const ge=(t,e)=>({album:{add:`
				mutation (
					$name: String!
					$date: Float!
					$location: String!
					$description: String!
					$password: String!
				) {
					addAlbum(
						name: $name
						date: $date
						location: $location
						description: $description
						password: $password
					) {
						id
						name
						date
						location
						description
						password
					}
				}
			`,delete:`
				mutation ($id: ID!) {
					deleteAlbum(id: $id) {
						id
						name
					}
				}
			`,update:`
				mutation (
					$id: ID!
					$name: String!
					$date: Float!
					$location: String!
					$description: String!
					$password: String!
				) {
					updateAlbum(
						id: $id
						name: $name
						date: $date
						location: $location
						description: $description
						password: $password
					) {
						id
						name
						date
						location
						description
						password
					}
				}
			`},media:{add:`
				mutation (
					$featured: Boolean!
					$albumId: String!
					$name: String!
					$type: String!
					$path: String!
				) {
					addMedia(
						featured: $featured
						albumId: $albumId
						name: $name
						type: $type
						path: $path
					) {
						id
						name
						type
						path
						featured
					}
				}
			`,delete:`
				mutation ($id: ID!) {
					deleteMedia(id: $id) {
						id
						name
					}
				}
			`,update:`
				mutation (
					$id: ID!
					$oldFeaturedId: ID!
				) {
					updateMedia(
						id: $id
						oldFeaturedId: $oldFeaturedId
					) {
						id
					}
				}
			`}})[t][e],ve=A([]);function X(t){let e,l;const a=t[2].default,n=k(a,t,t[1],null);return{c(){e=g("h6"),n&&n.c()},l(i){e=v(i,"H6",{});var r=h(e);n&&n.l(r),r.forEach(c)},m(i,r){b(i,e,r),n&&n.m(e,null),l=!0},p(i,r){n&&n.p&&(!l||r&2)&&w(n,a,i,i[1],l?$(a,i[1],r,null):C(i[1]),null)},i(i){l||(p(n,i),l=!0)},o(i){_(n,i),l=!1},d(i){i&&c(e),n&&n.d(i)}}}function Y(t){let e,l;const a=t[2].default,n=k(a,t,t[1],null);return{c(){e=g("h5"),n&&n.c()},l(i){e=v(i,"H5",{});var r=h(e);n&&n.l(r),r.forEach(c)},m(i,r){b(i,e,r),n&&n.m(e,null),l=!0},p(i,r){n&&n.p&&(!l||r&2)&&w(n,a,i,i[1],l?$(a,i[1],r,null):C(i[1]),null)},i(i){l||(p(n,i),l=!0)},o(i){_(n,i),l=!1},d(i){i&&c(e),n&&n.d(i)}}}function Z(t){let e,l;const a=t[2].default,n=k(a,t,t[1],null);return{c(){e=g("h4"),n&&n.c()},l(i){e=v(i,"H4",{});var r=h(e);n&&n.l(r),r.forEach(c)},m(i,r){b(i,e,r),n&&n.m(e,null),l=!0},p(i,r){n&&n.p&&(!l||r&2)&&w(n,a,i,i[1],l?$(a,i[1],r,null):C(i[1]),null)},i(i){l||(p(n,i),l=!0)},o(i){_(n,i),l=!1},d(i){i&&c(e),n&&n.d(i)}}}function x(t){let e,l;const a=t[2].default,n=k(a,t,t[1],null);return{c(){e=g("h3"),n&&n.c()},l(i){e=v(i,"H3",{});var r=h(e);n&&n.l(r),r.forEach(c)},m(i,r){b(i,e,r),n&&n.m(e,null),l=!0},p(i,r){n&&n.p&&(!l||r&2)&&w(n,a,i,i[1],l?$(a,i[1],r,null):C(i[1]),null)},i(i){l||(p(n,i),l=!0)},o(i){_(n,i),l=!1},d(i){i&&c(e),n&&n.d(i)}}}function ee(t){let e,l;const a=t[2].default,n=k(a,t,t[1],null);return{c(){e=g("h2"),n&&n.c()},l(i){e=v(i,"H2",{});var r=h(e);n&&n.l(r),r.forEach(c)},m(i,r){b(i,e,r),n&&n.m(e,null),l=!0},p(i,r){n&&n.p&&(!l||r&2)&&w(n,a,i,i[1],l?$(a,i[1],r,null):C(i[1]),null)},i(i){l||(p(n,i),l=!0)},o(i){_(n,i),l=!1},d(i){i&&c(e),n&&n.d(i)}}}function te(t){let e,l,a;const n=t[2].default,i=k(n,t,t[1],null);return{c(){e=g("div"),l=g("h1"),i&&i.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var u=h(e);l=v(u,"H1",{class:!0});var o=h(l);i&&i.l(o),o.forEach(c),u.forEach(c),this.h()},h(){d(l,"class","text-3xl py-2 pl-6 border-b-2 border-dashed border-primary"),d(e,"class","flex w-full mt-12 mb-6")},m(r,u){b(r,e,u),I(e,l),i&&i.m(l,null),a=!0},p(r,u){i&&i.p&&(!a||u&2)&&w(i,n,r,r[1],a?$(n,r[1],u,null):C(r[1]),null)},i(r){a||(p(i,r),a=!0)},o(r){_(i,r),a=!1},d(r){r&&c(e),i&&i.d(r)}}}function le(t){let e,l,a,n;const i=[te,ee,x,Z,Y,X],r=[];function u(o,s){return o[0]=="h1"?0:o[0]=="h2"?1:o[0]=="h3"?2:o[0]=="h4"?3:o[0]=="h5"?4:o[0]=="h6"?5:-1}return~(e=u(t))&&(l=r[e]=i[e](t)),{c(){l&&l.c(),a=E()},l(o){l&&l.l(o),a=E()},m(o,s){~e&&r[e].m(o,s),b(o,a,s),n=!0},p(o,[s]){let f=e;e=u(o),e===f?~e&&r[e].p(o,s):(l&&(j(),_(r[f],1,1,()=>{r[f]=null}),z()),~e?(l=r[e],l?l.p(o,s):(l=r[e]=i[e](o),l.c()),p(l,1),l.m(a.parentNode,a)):l=null)},i(o){n||(p(l),n=!0)},o(o){_(l),n=!1},d(o){~e&&r[e].d(o),o&&c(a)}}}function ne(t,e,l){let{$$slots:a={},$$scope:n}=e,{type:i}=e;return t.$$set=r=>{"type"in r&&l(0,i=r.type),"$$scope"in r&&l(1,n=r.$$scope)},[i,n,a]}class ke extends D{constructor(e){super(),O(this,e,ne,le,q,{type:0})}}function ie(t){let e,l;return{c(){e=L("svg"),l=L("path"),this.h()},l(a){e=S(a,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0});var n=h(e);l=S(n,"path",{d:!0}),h(l).forEach(c),n.forEach(c),this.h()},h(){d(l,"d","M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"width","1rem"),d(e,"height",".75rem"),d(e,"fill","currentColor"),d(e,"viewBox","0 0 384 512")},m(a,n){b(a,e,n),I(e,l)},d(a){a&&c(e)}}}function re(t){let e,l;return{c(){e=L("svg"),l=L("path"),this.h()},l(a){e=S(a,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0});var n=h(e);l=S(n,"path",{d:!0}),h(l).forEach(c),n.forEach(c),this.h()},h(){d(l,"d","M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"width","1.2rem"),d(e,"height","1rem"),d(e,"fill","currentColor"),d(e,"viewBox","0 0 384 512")},m(a,n){b(a,e,n),I(e,l)},d(a){a&&c(e)}}}function ae(t){let e;function l(i,r){if(i[0]=="edit")return re;if(i[0]=="cross")return ie}let a=l(t),n=a&&a(t);return{c(){n&&n.c(),e=E()},l(i){n&&n.l(i),e=E()},m(i,r){n&&n.m(i,r),b(i,e,r)},p(i,[r]){a!==(a=l(i))&&(n&&n.d(1),n=a&&a(i),n&&(n.c(),n.m(e.parentNode,e)))},i:T,o:T,d(i){n&&n.d(i),i&&c(e)}}}function oe(t,e,l){let{type:a}=e;return t.$$set=n=>{"type"in n&&l(0,a=n.type)},[a]}class F extends D{constructor(e){super(),O(this,e,oe,ae,q,{type:0})}}function se(t){let e,l,a,n,i;const r=t[8].default,u=k(r,t,t[7],null);return{c(){e=g("button"),u&&u.c(),this.h()},l(o){e=v(o,"BUTTON",{type:!0,class:!0});var s=h(e);u&&u.l(s),s.forEach(c),this.h()},h(){d(e,"type",t[3]),d(e,"class",l="btn btn-primary fixed transition-all bottom-14 right-7 "+t[5]+" "+t[2])},m(o,s){b(o,e,s),u&&u.m(e,null),a=!0,n||(i=B(e,"click",function(){H(t[4])&&t[4].apply(this,arguments)}),n=!0)},p(o,s){t=o,u&&u.p&&(!a||s&128)&&w(u,r,t,t[7],a?$(r,t[7],s,null):C(t[7]),null),(!a||s&8)&&d(e,"type",t[3]),(!a||s&36&&l!==(l="btn btn-primary fixed transition-all bottom-14 right-7 "+t[5]+" "+t[2]))&&d(e,"class",l)},i(o){a||(p(u,o),a=!0)},o(o){_(u,o),a=!1},d(o){o&&c(e),u&&u.d(o),n=!1,i()}}}function ue(t){let e,l,a,n,i,r,u;const o=t[8].default,s=k(o,t,t[7],null);return a=new F({props:{type:"edit"}}),{c(){e=g("a"),l=g("button"),s&&s.c(),M(a.$$.fragment),this.h()},l(f){e=v(f,"A",{href:!0});var y=h(e);l=v(y,"BUTTON",{type:!0,class:!0});var m=h(l);s&&s.l(m),P(a.$$.fragment,m),m.forEach(c),y.forEach(c),this.h()},h(){d(l,"type",t[3]),d(l,"class",n="btn btn-secondary "+t[5]+" "+t[2]),d(e,"href",t[1])},m(f,y){b(f,e,y),I(e,l),s&&s.m(l,null),U(a,l,null),i=!0,r||(u=B(l,"click",function(){H(t[4])&&t[4].apply(this,arguments)}),r=!0)},p(f,y){t=f,s&&s.p&&(!i||y&128)&&w(s,o,t,t[7],i?$(o,t[7],y,null):C(t[7]),null),(!i||y&8)&&d(l,"type",t[3]),(!i||y&36&&n!==(n="btn btn-secondary "+t[5]+" "+t[2]))&&d(l,"class",n),(!i||y&2)&&d(e,"href",t[1])},i(f){i||(p(s,f),p(a.$$.fragment,f),i=!0)},o(f){_(s,f),_(a.$$.fragment,f),i=!1},d(f){f&&c(e),s&&s.d(f),V(a),r=!1,u()}}}function fe(t){let e,l,a,n,i,r;const u=t[8].default,o=k(u,t,t[7],null);return l=new F({props:{type:"cross"}}),{c(){e=g("button"),o&&o.c(),M(l.$$.fragment),this.h()},l(s){e=v(s,"BUTTON",{type:!0,class:!0});var f=h(e);o&&o.l(f),P(l.$$.fragment,f),f.forEach(c),this.h()},h(){d(e,"type",t[3]),d(e,"class",a="btn btn-error "+t[5]+" "+t[2])},m(s,f){b(s,e,f),o&&o.m(e,null),U(l,e,null),n=!0,i||(r=B(e,"click",J(function(){H(t[4])&&t[4].apply(this,arguments)})),i=!0)},p(s,f){t=s,o&&o.p&&(!n||f&128)&&w(o,u,t,t[7],n?$(u,t[7],f,null):C(t[7]),null),(!n||f&8)&&d(e,"type",t[3]),(!n||f&36&&a!==(a="btn btn-error "+t[5]+" "+t[2]))&&d(e,"class",a)},i(s){n||(p(o,s),p(l.$$.fragment,s),n=!0)},o(s){_(o,s),_(l.$$.fragment,s),n=!1},d(s){s&&c(e),o&&o.d(s),V(l),i=!1,r()}}}function de(t){let e,l,a,n,i;const r=t[8].default,u=k(r,t,t[7],null);return{c(){e=g("button"),u&&u.c(),this.h()},l(o){e=v(o,"BUTTON",{type:!0,class:!0});var s=h(e);u&&u.l(s),s.forEach(c),this.h()},h(){d(e,"type",t[3]),d(e,"class",l="btn btn-primary "+t[5]+" "+t[2])},m(o,s){b(o,e,s),u&&u.m(e,null),a=!0,n||(i=B(e,"click",function(){H(t[4])&&t[4].apply(this,arguments)}),n=!0)},p(o,s){t=o,u&&u.p&&(!a||s&128)&&w(u,r,t,t[7],a?$(r,t[7],s,null):C(t[7]),null),(!a||s&8)&&d(e,"type",t[3]),(!a||s&36&&l!==(l="btn btn-primary "+t[5]+" "+t[2]))&&d(e,"class",l)},i(o){a||(p(u,o),a=!0)},o(o){_(u,o),a=!1},d(o){o&&c(e),u&&u.d(o),n=!1,i()}}}function ce(t){let e,l,a,n;const i=[de,fe,ue,se],r=[];function u(o,s){return o[0]==="Primary"?0:o[0]==="Delete"?1:o[0]==="Edit"?2:o[0]==="Popup"?3:-1}return~(e=u(t))&&(l=r[e]=i[e](t)),{c(){l&&l.c(),a=E()},l(o){l&&l.l(o),a=E()},m(o,s){~e&&r[e].m(o,s),b(o,a,s),n=!0},p(o,[s]){let f=e;e=u(o),e===f?~e&&r[e].p(o,s):(l&&(j(),_(r[f],1,1,()=>{r[f]=null}),z()),~e?(l=r[e],l?l.p(o,s):(l=r[e]=i[e](o),l.c()),p(l,1),l.m(a.parentNode,a)):l=null)},i(o){n||(p(l),n=!0)},o(o){_(l),n=!1},d(o){~e&&r[e].d(o),o&&c(a)}}}function me(t,e,l){let a,{$$slots:n={},$$scope:i}=e,{type:r="Primary"}=e,{display:u=!0}=e,{href:o=""}=e,{extraClass:s=""}=e,{action:f="button"}=e,{onClick:y=()=>{}}=e;return t.$$set=m=>{"type"in m&&l(0,r=m.type),"display"in m&&l(6,u=m.display),"href"in m&&l(1,o=m.href),"extraClass"in m&&l(2,s=m.extraClass),"action"in m&&l(3,f=m.action),"onClick"in m&&l(4,y=m.onClick),"$$scope"in m&&l(7,i=m.$$scope)},t.$$.update=()=>{t.$$.dirty&64&&l(5,a=u?"opacity-100 z-50":"opacity-0 -z-50")},[r,o,s,f,y,a,u,i,n]}class we extends D{constructor(e){super(),O(this,e,me,ce,q,{type:0,display:6,href:1,extraClass:2,action:3,onClick:4})}}const Ce=(t,e="year",l="-")=>{if(!t)return"";const n=new Date(t*1e3).toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).split("/"),i=n[0],r=n[1],u=n[2];if(e=="day")return[i,r,u].join(l);if(e=="month")return[r,i,u].join(l);if(e=="year")return[u,r,i].join(l)},$e=t=>{if(!t)return null;const e=new Date(t);return Math.floor(e.getTime()/1e3)},_e=(t,e)=>{var l=Object.getOwnPropertyNames(t),a=Object.getOwnPropertyNames(e);if(l.length!=a.length)return!1;for(var n=0;n<l.length;n++){let i=t[l[n]],r=e[l[n]],u=N(i)&&N(r);if(u&&!_e(i,r)||!u&&i!==r)return!1}return!0};function N(t){return t!=null&&typeof t=="object"}export{we as B,ke as H,K as M,R as Q,ve as a,W as b,Ce as c,be as f,_e as i,ge as m,ye as q,$e as t};
