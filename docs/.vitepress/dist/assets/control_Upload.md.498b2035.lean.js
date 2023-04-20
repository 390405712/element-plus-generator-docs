import{r,t as i,L as u}from"./chunks/index.79301e12.js";import{f as d,r as e,h as y,A as m,u as t,E as s,l,G as c,F,_ as g,i as f,z as p,O as E}from"./chunks/framework.9d871480.js";import"./chunks/commonjsHelpers.28e086c5.js";const _=d({__name:"Upload",setup(C){let D=e({}),a=e(""),A=e([{type:"upload",formItem:{prop:"key1",label:"基础用法"},control:{httpRequest:n,accept:".jpg, .png",slots:{tip:()=>s("div",{class:"el-upload__tip"},[l("文件格式：.jpg, .png")])}}},{type:"upload",formItem:{prop:"key2",label:"用户头像"},control:{showFileList:!1,httpRequest:n,accept:".jpg, .png",slots:{default:()=>s(F,null,[a.value!==""?s("img",{src:a.value,class:"avatar"},null):s(c("el-icon"),{class:"avatar-uploader-icon"},{default:()=>[s(r,null,null)]})])}}},{type:"upload",formItem:{prop:"key3",label:"照片墙"},control:{listType:"picture-card",httpRequest:n,accept:".jpg, .png",slots:{default:()=>s(c("el-icon"),{class:"avatar-uploader-icon"},{default:()=>[s(r,null,null)]})}}},{type:"upload",formItem:{prop:"key4",label:"图片列表"},control:{listType:"picture",httpRequest:n,accept:".jpg, .png"}},{type:"upload",formItem:{prop:"key5",label:"拖拽上传"},control:{drag:!0,httpRequest:n,accept:".jpg, .png",slots:{default:()=>s(F,null,[s(c("el-icon"),{class:"el-icon--upload"},{default:()=>[s(i,null,null)]}),s("div",{class:"el-upload__text"},[l("Drop file here or "),s("em",null,[l("click to upload")])])])}}}]);async function n(o){if(o.file.size/1024/1024>20)return ElMessage.warning("上传文件大小不能超过 20MB");a.value=URL.createObjectURL(o.file)}return(o,x)=>(y(),m(t(u),{model:t(D),formOption:t(A)},null,8,["model","formOption"]))}});const B=g(_,[["__scopeId","data-v-c4a0ed24"]]),v=p("h1",{id:"upload-上传",tabindex:"-1"},[l("Upload 上传 "),p("a",{class:"header-anchor",href:"#upload-上传","aria-label":'Permalink to "Upload 上传"'},"​")],-1),h={class:"code"},q={class:"vp-raw"},b=E("",1),O=JSON.parse('{"title":"Upload 上传","description":"","frontmatter":{},"headers":[],"relativePath":"control/Upload.md"}'),U={name:"control/Upload.md"},I=Object.assign(U,{setup(C){return(D,a)=>(y(),f("div",null,[v,p("div",h,[p("div",q,[s(B)]),b])]))}});export{O as __pageData,I as default};
