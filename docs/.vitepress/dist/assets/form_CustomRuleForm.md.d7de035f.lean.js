import{q as y,z as C}from"./chunks/index.2c401fd5.js";import{f as A,r as p,h as r,A as i,u as o,i as m,z as s,E as u,l as f,O as E}from"./chunks/framework.9d871480.js";import"./chunks/commonjsHelpers.28e086c5.js";const g=/^(?:(?:\+|00)86)?1[3-9]\d{9}$/,_=A({__name:"CustomRuleForm",setup(c){let n=p(),e=p({}),t=p([{type:"input",formItem:{prop:"phone1",label:"手机号",rules:{trigger:"change",validator:(F,a,l)=>a?/(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(a)?l():l(new Error("手机格式有误")):l(new Error("请输入手机号"))}}},{type:"input",formItem:{prop:"phone2",label:"手机号",rules:{trigger:"change",pattern:g}}},{type:"input",formItem:{prop:"phone3",label:"手机号",rules:{trigger:"change",message:"自定义校验提示",pattern:/^(?:(?:\+|00)86)?1[3-9]\d{9}$/}}}]);y.setRequired(t.value);function D(){console.log(n.value())}return(F,a)=>(r(),i(o(C),{ref_key:"RefFormGenerator",ref:n,model:o(e),formOption:o(t),onSubmit:D},null,8,["model","formOption"]))}}),h=s("h1",{id:"自定义校验表单",tabindex:"-1"},[f("自定义校验表单 "),s("a",{class:"header-anchor",href:"#自定义校验表单","aria-label":'Permalink to "自定义校验表单"'},"​")],-1),d=s("p",null,[s("a",{href:"https://qq390405712.gitee.io/commom-rules-demo",target:"_blank",rel:"noreferrer"},"点我查看正则列表使用方式")],-1),b={class:"vp-raw"},v=E("",1),O=JSON.parse('{"title":"自定义校验表单","description":"","frontmatter":{},"headers":[],"relativePath":"form/CustomRuleForm.md"}'),R={name:"form/CustomRuleForm.md"},G=Object.assign(R,{setup(c){return(n,e)=>(r(),m("div",null,[h,d,s("div",b,[u(_)]),v]))}});export{O as __pageData,G as default};
