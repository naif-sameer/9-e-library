import{a as e}from"./index.c4069385.js";const r="http://localhost:8000";var t;let o=(t=localStorage.getItem("lang"))!=null?t:"ar";e.defaults.headers.local=o;var s=e.create({baseURL:`${r}/api`,headers:{"Content-Type":"application/json; charset=UTF-8"}});const c=async()=>(await s.get("/categories")).data,i=async a=>(await s.post("/categories/add",a,{headers:{"Content-Type":"multipart/form-data"}})).data;export{i as a,c as g};
