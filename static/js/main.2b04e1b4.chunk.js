(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),c=a(4),o=a(7),s=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]);function d(e){return l.find((function(t){return t.id===e}))||null}var u=a(9),m=a.n(u),j=(a(15),a(0)),b=function(e){var t=e.user;return Object(j.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},h=(a(17),function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=void 0!==i&&i,c=t.user;return Object(j.jsxs)("article",{"data-id":a,className:m()("TodoInfo",{"TodoInfo--completed":r}),children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:n}),c&&Object(j.jsx)(b,{user:c})]})}),O=function(e){var t=e.todos;return Object(j.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(j.jsx)(h,{todo:e},e.id)}))})},f=(a(18),function(e){var t=e.onAdd,a=Object(s.useState)(""),n=Object(r.a)(a,2),i=n[0],c=n[1],o=Object(s.useState)(""),u=Object(r.a)(o,2),m=u[0],b=u[1],h=Object(s.useState)(0),O=Object(r.a)(h,2),f=O[0],p=O[1],x=Object(s.useState)(""),v=Object(r.a)(x,2),y=v[0],S=v[1],N=!i.trim()||!f,I=function(e){e.preventDefault(),i||b("Please enter a title"),f||S("Please choose a user"),N||(t({id:0,title:i,completed:!1,userId:f,user:d(f)}),c(""),p(0))};return Object(j.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:I,children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(j.jsx)("input",{type:"text","data-cy":"titleInput",name:"title",id:"title",placeholder:"Enter a title",value:i,onChange:function(e){c(e.target.value),b("")},required:!0}),Object(j.jsx)("span",{className:"error",children:m})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"user",children:"User: "}),Object(j.jsxs)("select",{"data-cy":"userSelect",value:f,onChange:function(e){p(+e.target.value),S("")},required:!0,children:[Object(j.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(j.jsx)("span",{className:"error",children:y})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",onClick:I,children:"Add"})]})});function p(e){return Math.max.apply(Math,Object(o.a)(e.map((function(e){return e.id}))))+1}var x=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:d(e.userId)})})),v=function(){var e=Object(s.useState)(x),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsx)(f,{onAdd:function(e){var t=Object(c.a)(Object(c.a)({},e),{},{id:p(a)});n((function(e){return[].concat(Object(o.a)(e),[t])}))}}),Object(j.jsx)(O,{todos:a})]})};i.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2b04e1b4.chunk.js.map