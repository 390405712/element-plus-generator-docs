import{A as E}from"./chunks/index.ec89a664.js";import{p as _}from"./chunks/utils-666743d5.bc8c5ca7.js";import{d as g,r as a,h as c,o as y,e as C,a as p,w as D,i as F,u as l,F as b,b as A,f as t,g as v}from"./app.20c63513.js";const q=g({__name:"DialogForm",setup(i){let s=a(!1),o=a(),u=a({}),r=a([{type:"input",formItem:{prop:"key1",label:"输入框"}},{type:"select",formItem:{prop:"key2",label:"选择器"},control:{option:[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"}]}}]);_.setRequired(r.value);function m(){console.log(o.value())}return(R,n)=>{const f=c("el-button"),d=c("el-dialog");return y(),C(b,null,[p(f,{type:"primary",onClick:n[0]||(n[0]=e=>F(s)?s.value=!0:s=!0)},{default:D(()=>[A("打开dialog")]),_:1}),p(d,{modelValue:l(s),"onUpdate:modelValue":n[1]||(n[1]=e=>F(s)?s.value=e:s=e),title:"弹窗表单",width:"400px"},{default:D(()=>[p(l(E),{type:"dialog",ref_key:"formRef",ref:o,model:l(u),formOption:l(r),onSubmit:m},null,8,["model","formOption"])]),_:1},8,["modelValue"])],64)}}}),O=t("h1",{id:"弹窗表单",tabindex:"-1"},[A("弹窗表单 "),t("a",{class:"header-anchor",href:"#弹窗表单","aria-hidden":"true"},"#")],-1),h={class:"vp-raw"},k=v("",1),N=JSON.parse('{"title":"弹窗表单","description":"","frontmatter":{},"headers":[],"relativePath":"form/DialogForm.md"}'),x={name:"form/DialogForm.md"},S=Object.assign(x,{setup(i){return(s,o)=>(y(),C("div",null,[O,t("div",h,[p(q)]),k]))}});export{N as __pageData,S as default};
