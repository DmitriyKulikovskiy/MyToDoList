(this.webpackJsonpworktests=this.webpackJsonpworktests||[]).push([[0],{29:function(e,t,a){e.exports=a(49)},34:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),s=a.n(c),l=(a(34),a(13)),u=a(14),i=a(17),o=a(16),m=a(28),d=a(2),f=a(25),k=a.n(f),E={taskValue:"",tasks:[]},b=function(e){return{type:"GET_TASK_VALUE",value:e}},v=function(e){return{type:"ADD_TASK",task:e}},h=function(e){return{type:"EDIT_STATUS",id:e}},p=function(e){return{type:"TASK_DELETE",id:e}},g=function(){return{type:"REMOVE_ALL_DONE"}},T=function(){return{type:"REMOVE_ALL_TASKS"}},O=function(e,t){return{type:"EDIT_TASK",id:e,newTask:t}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TASK_VALUE":return Object(d.a)(Object(d.a)({},e),{},{taskValue:t.value});case"ADD_TASK":return Object(d.a)(Object(d.a)({},e),{},{tasks:[{id:k.a.generate(),task:t.task,status:!1}].concat(Object(m.a)(e.tasks))});case"EDIT_STATUS":return Object(d.a)(Object(d.a)({},e),{},{tasks:e.tasks.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{status:!e.status}):e}))});case"TASK_DELETE":return Object(d.a)(Object(d.a)({},e),{},{tasks:e.tasks.filter((function(e){return e.id!==t.id}))});case"REMOVE_ALL_DONE":return Object(d.a)(Object(d.a)({},e),{},{tasks:e.tasks.filter((function(e){return!e.status}))});case"REMOVE_ALL_TASKS":return Object(d.a)(Object(d.a)({},e),{},{tasks:[]});case"EDIT_TASK":return Object(d.a)(Object(d.a)({},e),{},{tasks:e.tasks.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{task:t.newTask}):e}))});default:return e}},y=function(e){return{type:"CHANGE_FILTER",activeFilter:e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FILTER":return t.activeFilter;default:return e}},S=a(6),N=a(22),w=new Date,_=function(e){for(var t=e.tasks,a=e.changePage,n=e.tasksPerPage,c=[],s=1;s<=Math.ceil(t.length/n);s++)c.push(s);return r.a.createElement("ul",{className:"pagination justify-content-center"},c.length>0&&r.a.createElement("span",null,"Pages: "),c.map((function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("a",{href:"#",onClick:function(){return a(e)},className:"page-link"},e))})))};var D=function(e){var t=e.tasks,a=e.editStatus,c=e.filter,s=e.deleteTask,l=Object(n.useState)(1),u=Object(N.a)(l,2),i=u[0],o=u[1],m=Object(n.useState)(5),d=Object(N.a)(m,1)[0],f=i*d,k=f-d,E=function(e,t){switch(t){case"done":return e.filter((function(e){return e.status}));case"active":return e.filter((function(e){return!e.status}));default:return e}}(t.slice(k,f),c);return r.a.createElement("div",null,E.map((function(e,t){return r.a.createElement("div",{key:e.id,className:"row justify-content-center box-container"},!1===e.status?r.a.createElement("i",{onClick:function(){return a(e.id)},className:"fa fa-circle-o","aria-hidden":"true"}):r.a.createElement("i",{onClick:function(){return a(e.id)},className:"fa fa-check-circle-o","aria-hidden":"true"}),r.a.createElement("div",{className:"box-task col-sm-6 col-md-6"},r.a.createElement("div",{className:"number"},"Task ",r.a.createElement("span",null,"\u2116",t+1)),r.a.createElement("div",{className:"date"},(new Date,w.toLocaleString("en-gb",{day:"numeric",weekday:"long",month:"long"}))),r.a.createElement("div",{className:!1===e.status?"active":"done"},r.a.createElement("span",null,e.task))),r.a.createElement("i",{onClick:function(){return s(e.id)},className:"fa fa-trash-o","aria-hidden":"true"}))})),r.a.createElement(_,{tasks:t,changePage:function(e){return o(e)},tasksPerPage:d}))},V=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(D,this.props)}}]),a}(r.a.Component),C=Object(S.b)((function(e){return{tasks:e.mainReducer.tasks,filter:e.filtersReducer,taskValue:e.mainReducer.taskValue}}),{editStatus:h,addTask:v,deleteTask:p,changeFilter:y,removeAllDone:g,removeAllTasks:T,editTask:O,getTaskValue:b})(V),L=function(e){var t=e.tasks,a=e.addTask,n=e.getTaskValue,c=e.taskValue,s=e.removeAllTasks,l=e.removeAllDone,u=e.changeFilter;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center to-do-wrapper"},r.a.createElement("div",{className:"col-lg-9 to-do-container"},r.a.createElement("h1",null," It's me, ",r.a.createElement("i",null,"Tasker"),".",r.a.createElement("br",null)," Let me refresh your memory. "),r.a.createElement("input",{onChange:function(e){return n(e.target.value)},value:c,type:"text",placeholder:"Set your task...",onKeyDown:function(e){13===e.keyCode&&(a(c),n(""))}}),r.a.createElement("button",{onClick:function(){if(!(c.length>0))return null;a(c),n("")}},"add"),r.a.createElement("button",{onClick:s},"clear"),r.a.createElement("h2",null,"ACTIVE TASKS: ",r.a.createElement("i",null,t.filter((function(e){return!e.status})).length)),r.a.createElement(C,null),r.a.createElement("div",{className:"filter-buttons"},r.a.createElement("button",{onClick:function(){return u("all")}},"all"),r.a.createElement("button",{onClick:function(){return u("done")}},"done"),r.a.createElement("button",{onClick:function(){return u("active")}},"active"),t.some((function(e){return e.status}))?r.a.createElement("button",{onClick:l},"clear done"):null),r.a.createElement("div",{className:"made"},"Made by ",r.a.createElement("i",null,"Dima Kulikovskiy"),"\xa92020"),r.a.createElement("div",{className:"version"},"Version: ",r.a.createElement("i",null,"2 .0")))))},R=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(L,this.props)}}]),a}(r.a.Component),K=Object(S.b)((function(e){return{tasks:e.mainReducer.tasks,filter:e.filtersReducer,taskValue:e.mainReducer.taskValue}}),{editStatus:h,addTask:v,deleteTask:p,changeFilter:y,removeAllDone:g,removeAllTasks:T,editTask:O,getTaskValue:b})(R),I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47);var F=a(27),P=a(9),M=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),x=Object(P.b)({mainReducer:j,filtersReducer:A}),G=Object(P.c)(x,M);G.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(a)}}(G.getState())}));var J=G;s.a.render(r.a.createElement(F.a,null,r.a.createElement(S.a,{store:J},r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.2f4e4371.chunk.js.map