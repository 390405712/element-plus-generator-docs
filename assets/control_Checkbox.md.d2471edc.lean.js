import{Q as c}from"./chunks/index.01380485.js";import{f as t,r as D,h as o,A as r,a1 as F,a2 as y,u as C,E as a,l,i as A,z as n,O as i}from"./chunks/framework.c6b36256.js";import"./chunks/commonjsHelpers.28e086c5.js";const u=t({__name:"Checkbox",setup(e){const s=[{label:"复选框选项1",value:"1"},{label:"复选框选项2",value:"2"}],p=D({model:{},formOption:[{type:"checkbox",formItem:{prop:"key1",label:"基础用法"},control:{checkboxGroup:s}},{type:"checkbox",formItem:{prop:"key2",label:"禁用状态"},control:{disabled:!0,checkboxGroup:s}},{type:"checkbox-button",formItem:{prop:"key3",label:"按钮样式"},control:{checkboxGroup:s}},{type:"checkbox",formItem:{prop:"key4",label:"带有边框"},control:{checkboxGroup:[{label:"复选框选项1",value:"1",border:!0},{label:"复选框选项2",value:"2",border:!0}]}},{type:"checkbox",formItem:{prop:"key5",label:"插槽内容"},control:{checkboxGroup:[{value:"1",border:!0,slots:{default:()=>a("span",null,[l("插槽内容1")])}},{value:"2",border:!0,slots:{default:()=>a("span",null,[l("插槽内容2")])}}]}}]});return(k,E)=>(o(),r(C(c),F(y({...p.value})),null,16))}}),b=n("h1",{id:"checkbox-多选框",tabindex:"-1"},[l("Checkbox 多选框 "),n("a",{class:"header-anchor",href:"#checkbox-多选框","aria-label":'Permalink to "Checkbox 多选框"'},"​")],-1),m={class:"code"},d={class:"vp-raw"},h=i("",1),g=JSON.parse('{"title":"Checkbox 多选框","description":"","frontmatter":{},"headers":[],"relativePath":"control/Checkbox.md"}'),f={name:"control/Checkbox.md"},G=Object.assign(f,{setup(e){return(s,p)=>(o(),A("div",null,[b,n("div",m,[n("div",d,[a(u)]),h])]))}});export{g as __pageData,G as default};
