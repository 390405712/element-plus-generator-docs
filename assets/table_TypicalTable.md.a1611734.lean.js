import{J as F}from"./chunks/index.01380485.js";import{f as y,r as l,o as C,h as o,A,B as p,D as i,u as d,E as e,l as t,G as m,i as u,z as a,O as b}from"./chunks/framework.c6b36256.js";import"./chunks/commonjsHelpers.28e086c5.js";const _=y({__name:"TypicalTable",setup(c){const n=l(),s=l({loading:!1,data:[],tableOption:[{prop:"date",label:"Date",width:"180"},{prop:"name",label:"Name",width:"180"},{prop:"address",label:"Address"}]});function r(){s.value.loading=!0,setTimeout(()=>{s.value.data=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],s.value.loading=!1},1e3)}return r(),C(()=>{console.log(n.value())}),(h,G)=>{const D=m("el-button");return o(),A(d(F),i({ref_key:"RefTableGenerator",ref:n},{...s.value}),{operation:p(N=>[e(D,{type:"primary"},{default:p(()=>[t("Primary")]),_:1})]),_:1},16)}}}),f=a("h1",{id:"基础表格",tabindex:"-1"},[t("基础表格 "),a("a",{class:"header-anchor",href:"#基础表格","aria-label":'Permalink to "基础表格"'},"​")],-1),g={class:"code"},E={class:"vp-raw"},T=b("",1),x=JSON.parse('{"title":"基础表格","description":"","frontmatter":{},"headers":[],"relativePath":"table/TypicalTable.md"}'),v={name:"table/TypicalTable.md"},L=Object.assign(v,{setup(c){return(n,s)=>(o(),u("div",null,[f,a("div",g,[a("div",E,[e(_)]),T])]))}});export{x as __pageData,L as default};
