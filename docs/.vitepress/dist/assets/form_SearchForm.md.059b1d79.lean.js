import{P as r}from"./chunks/index.f1fa53d8.js";import{d as F,r as n,o as e,c as y,u as a,a as C,b as l,e as A,f as i,g as m}from"./app.78e5ef39.js";const f=F({__name:"SearchForm",setup(t){let s=n(),p=n({}),c=n([{type:"input",formItem:{prop:"key1",label:"输入框1"}},{type:"input",formItem:{prop:"key2",label:"输入框2"}},{type:"input",formItem:{prop:"key3",label:"输入框3"}},{type:"select",formItem:{prop:"key4",label:"选择器"},control:{option:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"}]}},{type:"datetime",formItem:{prop:"key5",label:"日期"}}]);function D(o){console.log(o),console.log(s.value())}return(o,b)=>(e(),y(a(r),{type:"search",ref_key:"formRef",ref:s,model:a(p),formOption:a(c),onSubmit:D},null,8,["model","formOption"]))}}),u=l("h1",{id:"搜索表单",tabindex:"-1"},[i("搜索表单 "),l("a",{class:"header-anchor",href:"#搜索表单","aria-hidden":"true"},"#")],-1),E={class:"vp-raw"},_=m("",1),O=JSON.parse('{"title":"搜索表单","description":"","frontmatter":{},"headers":[],"relativePath":"form/SearchForm.md"}'),d={name:"form/SearchForm.md"},v=Object.assign(d,{setup(t){return(s,p)=>(e(),C("div",null,[u,l("div",E,[A(f)]),_]))}});export{O as __pageData,v as default};
