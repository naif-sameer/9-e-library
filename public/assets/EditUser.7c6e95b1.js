import{o as d,b as l,a,d as t,w as m,v as p,u as n,F as u,x as f}from"./vendor.1a723486.js";import{a as _}from"./index.c4069385.js";import{_ as s,a as c}from"./Button.3a01f9b3.js";import{_ as b}from"./Select.f37a1708.js";const x=a("h4",{class:"text-2xl mb-6 capitalize"},"edit user",-1),y=a("input",{type:"hidden",name:"id"},null,-1),h={class:"flex py-2 rounded-b border-t border-gray-200 dark:border-gray-600"},w=f(" edit "),B={setup($){let r=()=>{let o=new FormData(this.$refs.editFormRef);_.axios.post("/users/edit",o,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{console.log(e)})};return(o,e)=>(d(),l(u,null,[a("div",null,[a("button",{class:"border rounded px-4 py-2 mb-5",onClick:e[0]||(e[0]=i=>o.$router.go(-1))}," Back "),x]),a("form",{ref:"editFormRef",onSubmit:e[1]||(e[1]=p((...i)=>n(r)&&n(r)(...i),["prevent"])),class:"space-y-4"},[y,t(s,{name:"name",label:"name"}),t(s,{name:"email",type:"email",label:"email"}),t(s,{name:"password",type:"password",label:"password"}),t(b,{name:"role_id",label:"role",options:[{admin:1}]}),a("div",h,[t(c,{type:"submit"},{default:m(()=>[w]),_:1})])],544)],64))}};export{B as default};
