import{R as A}from"./chunks/index.3a5fbe35.js";import{d as i,r as a,o as t,c as m,w as p,u as l,f as n,a as e,b as r,h as u,e as f,g as _}from"./app.ddc9db07.js";const d=i({__name:"CustomButtonForm",setup(c){let s=a(),o=a({}),D=a([{type:"input",formItem:{prop:"name",label:"Activity name"}}]);function F(){s.value().submit()}function y(){console.log(s.value())}return(v,q)=>{const C=u("el-button");return t(),m(l(A),{ref_key:"formRef",ref:s,model:l(o),formOption:l(D),onSubmit:y},{default:p(()=>[n("template",null,[e(C,{onClick:F,type:"primary",round:""},{default:p(()=>[r("自定义按钮")]),_:1})])]),_:1},8,["model","formOption"])}}}),E=n("h1",{id:"自定义校验表单",tabindex:"-1"},[r("自定义校验表单 "),n("a",{class:"header-anchor",href:"#自定义校验表单","aria-hidden":"true"},"#")],-1),g={class:"vp-raw"},b=_("",1),B=JSON.parse('{"title":"自定义校验表单","description":"","frontmatter":{},"headers":[],"relativePath":"form/CustomButtonForm.md"}'),h={name:"form/CustomButtonForm.md"},R=Object.assign(h,{setup(c){return(s,o)=>(t(),f("div",null,[E,n("div",g,[e(d)]),b]))}});export{B as __pageData,R as default};
