import{s as V,d as X,u as Z,g as ee,e as te,r as se,c as ne,h as D,n as oe}from"../chunks/scheduler.3-7Zdzny.js";import{S as M,i as R,e as v,c as b,a as C,d as h,w as m,l as $,z as G,g as x,A as w,p as I,q as U,s as P,m as T,k as O,f as q,n as H,h as c,o as L,r as N,t as Q,b as W}from"../chunks/index.Bqv7vdHX.js";import{b as J}from"../chunks/paths.CPiBmQ9j.js";/* empty css                                                     */import{t as ae}from"../chunks/theme.CM6NFz8V.js";/* empty css                                                     */function re(s){let e,t,n,p;const f=s[4].default,o=X(f,s,s[3],null);return{c(){e=v("button"),o&&o.c(),this.h()},l(a){e=b(a,"BUTTON",{style:!0,class:!0});var l=C(e);o&&o.l(l),l.forEach(h),this.h()},h(){m(e,"--primary_color",s[2].primary_color),m(e,"--text_color",s[2].text_color),m(e,"--secondary_color",s[2].secondary_color),m(e,"--font_size",s[1]+"px"),m(e,"--grey",s[2].grey_text),$(e,"class","svelte-q9w981"),G(e,"inverse",s[0])},m(a,l){x(a,e,l),o&&o.m(e,null),t=!0,n||(p=[w(e,"click",s[5]),w(e,"mouseover",s[8]),w(e,"mouseout",s[9]),w(e,"blur",s[6]),w(e,"focus",s[7])],n=!0)},p(a,[l]){o&&o.p&&(!t||l&8)&&Z(o,f,a,a[3],t?te(f,a[3],l,null):ee(a[3]),null),(!t||l&4)&&m(e,"--primary_color",a[2].primary_color),(!t||l&4)&&m(e,"--text_color",a[2].text_color),(!t||l&4)&&m(e,"--secondary_color",a[2].secondary_color),(!t||l&2)&&m(e,"--font_size",a[1]+"px"),(!t||l&4)&&m(e,"--grey",a[2].grey_text),(!t||l&1)&&G(e,"inverse",a[0])},i(a){t||(I(o,a),t=!0)},o(a){U(o,a),t=!1},d(a){a&&h(e),o&&o.d(a),n=!1,se(p)}}}function le(s,e,t){let n;ne(s,ae,r=>t(2,n=r));let{$$slots:p={},$$scope:f}=e,{inverse:o=!1}=e,{fontSize:a=20}=e;function l(r){D.call(this,s,r)}function d(r){D.call(this,s,r)}function A(r){D.call(this,s,r)}const z=()=>t(0,o=!o),_=()=>t(0,o=!o);return s.$$set=r=>{"inverse"in r&&t(0,o=r.inverse),"fontSize"in r&&t(1,a=r.fontSize),"$$scope"in r&&t(3,f=r.$$scope)},[o,a,n,f,p,l,d,A,z,_]}class K extends M{constructor(e){super(),R(this,e,le,re,V,{inverse:0,fontSize:1})}}function ie(s){let e;return{c(){e=Q("Login")},l(t){e=W(t,"Login")},m(t,n){x(t,e,n)},d(t){t&&h(e)}}}function ue(s){let e;return{c(){e=Q("Sign Up")},l(t){e=W(t,"Sign Up")},m(t,n){x(t,e,n)},d(t){t&&h(e)}}}function ce(s){let e,t,n,p="About",f,o,a=`Our Project is based on AI chest read, Our website gives the patient a radiographed report of the chest xray\r
            provided. The report checks on the potential diseases.`,l,d,A="Project By : Suvansh Dutt, Ujjwal Raj, Yuvraj Singh Sandhu and Suhaas Parcha",z,_,r,j,B,k,S,E;return j=new K({props:{$$slots:{default:[ie]},$$scope:{ctx:s}}}),S=new K({props:{inverse:!0,$$slots:{default:[ue]},$$scope:{ctx:s}}}),{c(){e=v("main"),t=v("div"),n=v("h1"),n.textContent=p,f=P(),o=v("p"),o.textContent=a,l=P(),d=v("p"),d.textContent=A,z=P(),_=v("div"),r=v("a"),T(j.$$.fragment),B=P(),k=v("a"),T(S.$$.fragment),this.h()},l(i){e=b(i,"MAIN",{class:!0});var g=C(e);t=b(g,"DIV",{class:!0});var u=C(t);n=b(u,"H1",{class:!0,"data-svelte-h":!0}),O(n)!=="svelte-soqi9t"&&(n.textContent=p),f=q(u),o=b(u,"P",{class:!0,"data-svelte-h":!0}),O(o)!=="svelte-1jlgthr"&&(o.textContent=a),l=q(u),d=b(u,"P",{class:!0,"data-svelte-h":!0}),O(d)!=="svelte-1yz5vlz"&&(d.textContent=A),z=q(u),_=b(u,"DIV",{class:!0});var y=C(_);r=b(y,"A",{href:!0});var Y=C(r);H(j.$$.fragment,Y),Y.forEach(h),B=q(y),k=b(y,"A",{href:!0});var F=C(k);H(S.$$.fragment,F),F.forEach(h),y.forEach(h),u.forEach(h),g.forEach(h),this.h()},h(){$(n,"class","svelte-tjk91t"),$(o,"class","svelte-tjk91t"),$(d,"class","svelte-tjk91t"),$(r,"href",`${J}/login`),$(k,"href",`${J}/signup`),$(_,"class","buttons svelte-tjk91t"),$(t,"class","About svelte-tjk91t"),$(e,"class","svelte-tjk91t")},m(i,g){x(i,e,g),c(e,t),c(t,n),c(t,f),c(t,o),c(t,l),c(t,d),c(t,z),c(t,_),c(_,r),L(j,r,null),c(_,B),c(_,k),L(S,k,null),E=!0},p(i,[g]){const u={};g&1&&(u.$$scope={dirty:g,ctx:i}),j.$set(u);const y={};g&1&&(y.$$scope={dirty:g,ctx:i}),S.$set(y)},i(i){E||(I(j.$$.fragment,i),I(S.$$.fragment,i),E=!0)},o(i){U(j.$$.fragment,i),U(S.$$.fragment,i),E=!1},d(i){i&&h(e),N(j),N(S)}}}class fe extends M{constructor(e){super(),R(this,e,null,ce,V,{})}}function _e(s){let e,t;return e=new fe({}),{c(){T(e.$$.fragment)},l(n){H(e.$$.fragment,n)},m(n,p){L(e,n,p),t=!0},p:oe,i(n){t||(I(e.$$.fragment,n),t=!0)},o(n){U(e.$$.fragment,n),t=!1},d(n){N(e,n)}}}class be extends M{constructor(e){super(),R(this,e,null,_e,V,{})}}export{be as component};
