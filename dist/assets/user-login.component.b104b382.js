import{_}from"./flight.f3167159.js";import{_ as p,r as s,o as r,c as d,a as t,b as e,w as a,d as c}from"./index.717b9e2a.js";const i={data(){}},m={class:"text-center p-4"},f=t("h1",{style:{color:"black"}},"Register",-1),h=t("div",{class:"image-left"},[t("img",{src:_,alt:"Left image"})],-1),u={class:"p-float-label p-4"},x={class:"p-float-label p-4"},b={class:"p-float-label p-4"},g={class:"p-float-label p-4"},v={class:"p-float-label p-4"},y=c("Save changes"),k=c(),w=c("Cancel");function N(P,$,B,C,E,L){const o=s("pv-input-text"),n=s("pv-button"),l=s("router-link");return r(),d("div",m,[f,h,t("span",u,[e(o,{placeholder:"Username",type:"text",id:"UserId"})]),t("span",x,[e(o,{placeholder:"Name",type:"text",id:"Name"})]),t("span",b,[e(o,{placeholder:"Email",type:"text",id:"Email"})]),t("span",g,[e(o,{placeholder:"New Password",type:"text",id:"New Password"})]),t("span",v,[e(o,{placeholder:"Re-enter Password",type:"text",id:"RePassword"})]),e(l,{to:"/UserProfile"},{default:a(()=>[e(n,{style:{"background-color":"#673ab7"}},{default:a(()=>[y]),_:1}),k,e(n,{style:{"background-color":"#ffd740",color:"black"}},{default:a(()=>[w]),_:1})]),_:1})])}const V=p(i,[["render",N]]);export{V as default};