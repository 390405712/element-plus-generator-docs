import{y as C,X as _}from"./chunks/index.01380485.js";import{_ as d,a as v,b as g}from"./chunks/Form3.vue_vue_type_script_setup_true_lang.e04cd4cd.js";import{E as i}from"./chunks/index.a8a06e75.js";import{f as R,r as n,h as D,A as f,B as a,D as k,u as F,E as l,l as y,C as G,t as b,i as q,z as t,O as S}from"./chunks/framework.c6b36256.js";import"./chunks/commonjsHelpers.28e086c5.js";import"./chunks/index.8f2409bd.js";const w=R({__name:"CustomBtnSteps",setup(m){const p=n(),o=n(),c=n(),r=n(),u=n({stepsOption:[{key:"step1",title:"步骤 1"},{key:"step2",title:"步骤 2"},{key:"step3",title:"步骤 3"}],onPrev:async(e,s)=>{switch(e){case 0:await o.value.RefFormGenerator().clearValidate(),s();break;case 1:await c.value.RefFormGenerator().clearValidate(),s();break;case 2:await r.value.RefFormGenerator().clearValidate(),s();break}},onNext:async(e,s)=>{switch(e){case 0:await o.value.RefFormGenerator().validate(),s();break;case 1:await c.value.RefFormGenerator().validate(),s();break;case 2:await r.value.RefFormGenerator().validate(),i.closeAll(),i.success("提交成功");break}}});return(e,s)=>(D(),f(F(_),k({ref_key:"RefStepsGenerator",ref:p},{...u.value}),{step1:a(()=>[l(d,{ref_key:"RefForm1",ref:o},null,512)]),step2:a(()=>[l(v,{ref_key:"RefForm2",ref:c},null,512)]),step3:a(()=>[l(g,{ref_key:"RefForm3",ref:r},null,512)]),default:a(A=>[A!==0?(D(),f(F(C),{key:0,onClick:s[0]||(s[0]=E=>p.value.prev())},{default:a(()=>[y("返回上一步")]),_:1})):G("",!0),l(F(C),{onClick:s[1]||(s[1]=E=>p.value.next())},{default:a(()=>[y(b(A===2?"提交":"进入下一步"),1)]),_:2},1024)]),_:1},16))}}),h=t("h1",{id:"自定义按钮",tabindex:"-1"},[y("自定义按钮 "),t("a",{class:"header-anchor",href:"#自定义按钮","aria-label":'Permalink to "自定义按钮"'},"​")],-1),x={class:"code"},B={class:"vp-raw"},V=S("",1),X=JSON.parse('{"title":"自定义按钮","description":"","frontmatter":{},"headers":[],"relativePath":"steps/CustomBtnSteps.md"}'),N={name:"steps/CustomBtnSteps.md"},j=Object.assign(N,{setup(m){return(p,o)=>(D(),q("div",null,[h,t("div",x,[t("div",B,[l(w)]),V])]))}});export{X as __pageData,j as default};
