import{r as t,t as c,Q as r}from"./chunks/index.01380485.js";import{f as D,r as p,h as o,A as y,a1 as F,a2 as C,u as A,i,z as n,E as m,l as u,O as f}from"./chunks/framework.c6b36256.js";import"./chunks/commonjsHelpers.28e086c5.js";const h=D({__name:"Switch",setup(e){const s=p(!1),a=p({model:{},formOption:[{type:"switch",formItem:{prop:"key1",label:"基础用法"}},{type:"switch",formItem:{prop:"key2",label:"尺寸"},control:{size:"large"}},{type:"switch",formItem:{prop:"key3",label:"文字描述"},control:{activeText:"Pay by month",inactiveText:"Pay by year"}},{type:"switch",formItem:{prop:"key4",label:"显示自定义图标"},control:{activeIcon:t,inactiveIcon:c}},{type:"switch",formItem:{prop:"key5",label:"扩展的value类型"},control:{activeValue:"100",inactiveValue:"0"}},{type:"switch",formItem:{prop:"key6",label:"禁用状态"},control:{disabled:!0}},{type:"switch",formItem:{prop:"key7",label:"加载状态"},control:{loading:!0}},{type:"switch",formItem:{prop:"key8",label:"阻止切换"},control:{loading:s,beforeChange:()=>(s.value=!0,new Promise(l=>{setTimeout(()=>(s.value=!1,l(!0)),1e3)}))}}]});return(l,b)=>(o(),y(A(r),F(C({...a.value})),null,16))}}),d=n("h1",{id:"switch-开关",tabindex:"-1"},[u("Switch 开关 "),n("a",{class:"header-anchor",href:"#switch-开关","aria-label":'Permalink to "Switch 开关"'},"​")],-1),E={class:"code"},_={class:"vp-raw"},v=f("",1),T=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"control/Switch.md"}'),g={name:"control/Switch.md"},q=Object.assign(g,{setup(e){return(s,a)=>(o(),i("div",null,[d,n("div",E,[n("div",_,[m(h)]),v])]))}});export{T as __pageData,q as default};
