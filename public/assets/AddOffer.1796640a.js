import{o as i,b as m,a as t,d as e,w as f,v as _,u as n,F as b,x as c}from"./vendor.1a723486.js";import{a as p}from"./index.c4069385.js";import{_ as o,a as u}from"./Button.3a01f9b3.js";import{_ as l}from"./InputDate.d25cb685.js";const x=t("h4",{class:"text-2xl mb-6 capitalize"},"add offer",-1),y={class:"flex py-2 rounded-b border-t border-gray-200 dark:border-gray-600"},g=c(" add "),w={setup(k){let r=()=>{let s=new FormData(this.$refs.addFormRef);p.axios.post("/offers/add",s,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>{console.log(a)})};return(s,a)=>(i(),m(b,null,[t("div",null,[t("button",{class:"border rounded px-4 py-2 mb-5",onClick:a[0]||(a[0]=d=>s.$router.go(-1))}," Back "),x]),t("form",{ref:"addFormRef",onSubmit:a[1]||(a[1]=_((...d)=>n(r)&&n(r)(...d),["prevent"])),class:"space-y-4"},[e(o,{name:"title",label:"title"}),e(o,{name:"discount",type:"number",label:"discount"}),e(l,{name:"start_date",label:"start date"}),e(l,{name:"end_date",label:"end date"}),e(o,{name:"book_ids",label:"book_ids"}),e(o,{name:"category_ids",label:"category_ids"}),t("div",y,[e(u,{type:"submit"},{default:f(()=>[g]),_:1})])],544)],64))}};export{w as default};
