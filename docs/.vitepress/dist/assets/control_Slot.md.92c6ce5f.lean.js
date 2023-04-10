import{b as fs,C as vs,i as G,U as x,d as S,m as U,a as k,e as J,f as hs,u as Es,g as bs,h as _s,j as gs,k as ks,l as Vs,E as X,_ as xs,n as V,o as Q,w as ws,P as Is}from"./chunks/index.b9b81532.js";import{f as j,R as Y,r as E,c as r,a1 as T,a2 as Z,a3 as N,a4 as ss,e as Ss,h as c,i as d,F as as,L as Ts,k as v,u as l,E as b,B as w,a5 as ls,A as h,I as O,a6 as ns,C as B,W as os,t as es,l as ts,z as q,O as Ns}from"./chunks/framework.9d871480.js";import"./chunks/commonjsHelpers.28e086c5.js";const Os=fs({modelValue:{type:Number,default:0},id:{type:String,default:void 0},lowThreshold:{type:Number,default:2},highThreshold:{type:Number,default:4},max:{type:Number,default:5},colors:{type:S([Array,Object]),default:()=>U(["","",""])},voidColor:{type:String,default:""},disabledVoidColor:{type:String,default:""},icons:{type:S([Array,Object]),default:()=>[k,k,k]},voidIcon:{type:J,default:()=>hs},disabledVoidIcon:{type:J,default:()=>k},disabled:Boolean,allowHalf:Boolean,showText:Boolean,showScore:Boolean,textColor:{type:String,default:""},texts:{type:S(Array),default:()=>U(["Extremely bad","Disappointed","Fair","Satisfied","Surprise"])},scoreTemplate:{type:String,default:"{value}"},size:Es,label:{type:String,default:void 0},clearable:{type:Boolean,default:!1}}),Bs={[vs]:A=>G(A),[x]:A=>G(A)},qs=["id","aria-label","aria-labelledby","aria-valuenow","aria-valuetext","aria-valuemax"],js=["onMousemove","onClick"],Ps=j({name:"ElRate"}),Hs=j({...Ps,props:Os,emits:Bs,setup(A,{expose:F,emit:C}){const s=A;function i(a,n){const o=t=>Z(t),D=Object.keys(n).map(t=>+t).filter(t=>{const g=n[t];return(o(g)?g.excluded:!1)?a<t:a<=t}).sort((t,g)=>t-g),f=n[D[0]];return o(f)&&f.value||f}const m=Y(bs,void 0),_=Y(_s,void 0),rs=gs(),e=ks("rate"),{inputId:cs,isLabeledByFormItem:P}=Vs(s,{formItemContext:_}),p=E(s.modelValue),I=E(-1),u=E(!0),Ds=r(()=>[e.b(),e.m(rs.value)]),y=r(()=>s.disabled||(m==null?void 0:m.disabled)),ys=r(()=>e.cssVarBlock({"void-color":s.voidColor,"disabled-void-color":s.disabledVoidColor,"fill-color":$.value})),H=r(()=>{let a="";return s.showScore?a=s.scoreTemplate.replace(/\{\s*value\s*\}/,y.value?`${s.modelValue}`:`${p.value}`):s.showText&&(a=s.texts[Math.ceil(p.value)-1]),a}),M=r(()=>s.modelValue*100-Math.floor(s.modelValue)*100),Fs=r(()=>T(s.colors)?{[s.lowThreshold]:s.colors[0],[s.highThreshold]:{value:s.colors[1],excluded:!0},[s.max]:s.colors[2]}:s.colors),$=r(()=>{const a=i(p.value,Fs.value);return Z(a)?"":a}),Cs=r(()=>{let a="";return y.value?a=`${M.value}%`:s.allowHalf&&(a="50%"),{color:$.value,width:a}}),R=r(()=>{let a=T(s.icons)?[...s.icons]:{...s.icons};return a=N(a),T(a)?{[s.lowThreshold]:a[0],[s.highThreshold]:{value:a[1],excluded:!0},[s.max]:a[2]}:a}),is=r(()=>i(s.modelValue,R.value)),As=r(()=>y.value?ss(s.disabledVoidIcon)?s.disabledVoidIcon:N(s.disabledVoidIcon):ss(s.voidIcon)?s.voidIcon:N(s.voidIcon)),us=r(()=>i(p.value,R.value));function z(a){const n=y.value&&M.value>0&&a-1<s.modelValue&&a>s.modelValue,o=s.allowHalf&&u.value&&a-.5<=p.value&&a>p.value;return n||o}function K(a){s.clearable&&a===s.modelValue&&(a=0),C(x,a),s.modelValue!==a&&C("change",a)}function ds(a){y.value||(s.allowHalf&&u.value?K(p.value):K(a))}function ms(a){if(y.value)return;let n=p.value;const o=a.code;return o===V.up||o===V.right?(s.allowHalf?n+=.5:n+=1,a.stopPropagation(),a.preventDefault()):(o===V.left||o===V.down)&&(s.allowHalf?n-=.5:n-=1,a.stopPropagation(),a.preventDefault()),n=n<0?0:n,n=n>s.max?s.max:n,C(x,n),C("change",n),n}function L(a,n){if(!y.value){if(s.allowHalf&&n){let o=n.target;Q(o,e.e("item"))&&(o=o.querySelector(`.${e.e("icon")}`)),(o.clientWidth===0||Q(o,e.e("decimal")))&&(o=o.parentNode),u.value=n.offsetX*2<=o.clientWidth,p.value=u.value?a-.5:a}else p.value=a;I.value=a}}function W(){y.value||(s.allowHalf&&(u.value=s.modelValue!==Math.floor(s.modelValue)),p.value=s.modelValue,I.value=-1)}return Ss(()=>s.modelValue,a=>{p.value=a,u.value=s.modelValue!==Math.floor(s.modelValue)}),s.modelValue||C(x,0),F({setCurrentValue:L,resetCurrentValue:W}),(a,n)=>{var o;return c(),d("div",{id:l(cs),class:v([l(Ds),l(e).is("disabled",l(y))]),role:"slider","aria-label":l(P)?void 0:a.label||"rating","aria-labelledby":l(P)?(o=l(_))==null?void 0:o.labelId:void 0,"aria-valuenow":p.value,"aria-valuetext":l(H)||void 0,"aria-valuemin":"0","aria-valuemax":a.max,tabindex:"0",style:os(l(ys)),onKeydown:ms},[(c(!0),d(as,null,Ts(a.max,(D,f)=>(c(),d("span",{key:f,class:v(l(e).e("item")),onMousemove:t=>L(D,t),onMouseleave:W,onClick:t=>ds(D)},[b(l(X),{class:v([l(e).e("icon"),{hover:I.value===D},l(e).is("active",D<=p.value)])},{default:w(()=>[z(D)?B("v-if",!0):(c(),d(as,{key:0},[ls((c(),h(O(l(us)),null,null,512)),[[ns,D<=p.value]]),ls((c(),h(O(l(As)),null,null,512)),[[ns,!(D<=p.value)]])],64)),z(D)?(c(),h(l(X),{key:1,style:os(l(Cs)),class:v([l(e).e("icon"),l(e).e("decimal")])},{default:w(()=>[(c(),h(O(l(is))))]),_:1},8,["style","class"])):B("v-if",!0)]),_:2},1032,["class"])],42,js))),128)),a.showText||a.showScore?(c(),d("span",{key:0,class:v(l(e).e("text"))},es(l(H)),3)):B("v-if",!0)],46,qs)}}});var Ms=xs(Hs,[["__file","/home/runner/work/element-plus/element-plus/packages/components/rate/src/rate.vue"]]);const ps=ws(Ms),$s=j({__name:"Slot",setup(A){let F=E({key1:"基础用法文本值",key2:"模板插槽文本值",key3:"jsx插槽文本值",key4:2,key5:2}),C=E([{type:"slot",formItem:{prop:"key1",label:"基础用法"}},{type:"slot",formItem:{prop:"key2",label:"模板插槽"}},{type:"slot",formItem:{prop:"key3",label:"jsx插槽"},control:{slots:{default:s=>b("div",{style:"word-break: break-all;"},[JSON.stringify(s)])}}},{type:"slot",formItem:{prop:"key4",label:"模板插槽(带组件)"}},{type:"slot",formItem:{prop:"key5",label:"jsx插槽(带组件)"},control:{slots:{default:s=>b(ps,{modelValue:F.value.key5,"onUpdate:modelValue":i=>F.value.key5=i},null)}}}]);return(s,i)=>(c(),h(l(Is),{model:l(F),formOption:l(C)},{key2:w(m=>[ts(es(m),1)]),key4:w(m=>[b(l(ps),{modelValue:l(F).key4,"onUpdate:modelValue":i[0]||(i[0]=_=>l(F).key4=_)},null,8,["modelValue"])]),_:1},8,["model","formOption"]))}}),Rs=q("h1",{id:"slot-自定义插槽",tabindex:"-1"},[ts("Slot 自定义插槽 "),q("a",{class:"header-anchor",href:"#slot-自定义插槽","aria-label":'Permalink to "Slot 自定义插槽"'},"​")],-1),zs={class:"vp-raw"},Ks=Ns("",1),Xs=JSON.parse('{"title":"Slot 自定义插槽","description":"","frontmatter":{},"headers":[],"relativePath":"control/Slot.md"}'),Ls={name:"control/Slot.md"},Qs=Object.assign(Ls,{setup(A){return(F,C)=>(c(),d("div",null,[Rs,q("div",zs,[b($s)]),Ks]))}});export{Xs as __pageData,Qs as default};
