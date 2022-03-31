import{e as l,o as u,b as p,a as e,d as o,u as a,R as n,w as r,i as d,F as x,v as y,x as i}from"./vendor.1a723486.js";import{_ as g}from"./Modal.3cace753.js";import{T as _}from"./TableRow.03e021b3.js";import"./index.4bab9757.js";const h={class:"flex justify-between items-center"},f=e("h2",{class:"text-2xl mb-6"},"user-payment",-1),b=i(" Add "),m=e("h4",{class:"text-2xl mb-6 capitalize"}," Are you sure you want to delete this user ",-1),v=["value"],k={class:"flex items-center py-2 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"},w=e("button",{"data-modal-toggle":"defaultModal",type:"submit",class:"text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"}," Delete ",-1),C={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},A={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},N=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",{class:"capitalize"},[e("th",{scope:"col",class:"px-6 py-3"},"id"),e("th",{scope:"col",class:"px-6 py-3"},"user"),e("th",{scope:"col",class:"px-6 py-3"},"payment"),e("th",{scope:"col",class:"px-6 py-3"},"status"),e("th",{scope:"col",class:"px-6 py-3"},[e("span",{class:"sr-only"},"Action")])])],-1),R=e("td",{class:"px-6 py-4"},"1",-1),z=e("td",{class:"px-6 py-4"},"Naif",-1),B=e("td",{class:"px-6 py-4"},"Paypal",-1),D=e("td",{class:"px-6 py-4"},"Active",-1),M={class:"px-6 py-4 text-right"},T={class:"flex"},V=i(" Edit "),S={setup(E){let t=l(!1),c=l();return(F,s)=>(u(),p(x,null,[e("div",h,[f,o(a(n),{to:"/user-payments/add/",class:"mx-4 bg-blue-500 px-4 py-2 rounded"},{default:r(()=>[b]),_:1})]),o(g,{show:a(t),onClose:()=>d(t)?t.value=!1:t=!1},{default:r(()=>[m,e("form",{onSubmit:s[1]||(s[1]=y(()=>{},["prevent"]))},[e("input",{type:"hidden",value:a(c),name:"id"},null,8,v),e("div",k,[w,e("button",{onClick:s[0]||(s[0]=()=>d(t)?t.value=!1:t=!1),type:"button",class:"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"}," Cancel ")])],32)]),_:1},8,["show","onClose"]),e("div",C,[e("table",A,[N,e("tbody",null,[o(_,null,{default:r(()=>[R,z,B,D,e("td",M,[e("div",T,[o(a(n),{to:"/user-payments/edit",class:"transition-colors duration-200 py-2 px-4 rounded hover:bg-blue-600 hover:text-gray-200"},{default:r(()=>[V]),_:1}),e("button",{onClick:s[2]||(s[2]=$=>d(t)?t.value=!0:t=!0),class:"transition-colors duration-200 py-2 px-4 rounded hover:bg-red-600 hover:text-gray-200"}," Delete ")])])]),_:1})])])])],64))}};export{S as default};
