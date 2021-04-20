(this["webpackJsonpjob-listing"]=this["webpackJsonpjob-listing"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),s=n(6),c=n.n(s),l=n(5),i=n(7),r=n(8),d=[{key:100,id:1,company:"Photosnap",logo:"./images/photosnap.svg",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{key:101,id:2,company:"Manage",logo:"./images/manage.svg",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{key:102,id:3,company:"Account",logo:"./images/account.svg",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{key:103,id:4,company:"MyHome",logo:"./images/myhome.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{key:104,id:5,company:"Loop Studios",logo:"./images/loop-studios.svg",new:!1,featured:!1,position:"Software Engineer",role:"Fullstack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{key:105,id:6,company:"FaceIt",logo:"./images/faceit.svg",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{key:106,id:7,company:"Shortly",logo:"./images/shortly.svg",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{key:107,id:8,company:"Insure",logo:"./images/insure.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{key:108,id:9,company:"Eyecam Co.",logo:"./images/eyecam-co.svg",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{key:109,id:10,company:"The Air Filter Company",logo:"./images/the-air-filter-company.svg",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}],m=n(0);function u(e){return Object(m.jsxs)("div",{className:"cards_container",style:{borderLeft:e.new&&e.featured?"0.3rem solid hsl(180, 29%, 50%)":"none"},children:[Object(m.jsx)("div",{className:"image_container",children:Object(m.jsx)("img",{className:"logo_image",src:e.logo,alt:"photosnap"})}),Object(m.jsxs)("div",{className:"posts_container",children:[Object(m.jsxs)("div",{className:"top",children:[Object(m.jsx)("p",{className:"company_name_style",children:e.company}),Object(m.jsx)("div",{style:{display:e.new?"flex":"none"},className:"new_container",children:Object(m.jsx)("p",{className:"new",children:"NEW!"})}),Object(m.jsx)("div",{style:{display:e.featured?"flex":"none"},className:"feature_container",children:Object(m.jsx)("p",{className:"featured",onClick:e.renderL,children:"FEATURED"})})]}),Object(m.jsx)("div",{className:"middle",children:Object(m.jsx)("p",{onClick:e.show,children:e.position})}),Object(m.jsxs)("div",{className:"bottom",children:[Object(m.jsx)("p",{children:e.postedAt}),Object(m.jsx)("p",{className:"post_dots",children:"\u25aa"}),Object(m.jsx)("p",{children:e.contract}),Object(m.jsx)("p",{className:"post_dots",children:"\u25aa"}),Object(m.jsx)("p",{children:e.location})]})]}),Object(m.jsx)("div",{className:"line"}),Object(m.jsxs)("div",{className:"skills_container",children:[Object(m.jsx)("button",{onClick:function(){e.addItem(e.role)},children:e.role}),Object(m.jsx)("button",{onClick:function(){e.addItem(e.level)},children:e.level}),e.languages.map((function(t,n){return Object(m.jsx)("button",{onClick:function(){e.addItem(t)},children:t},n)})),e.tools.map((function(t,n){return Object(m.jsx)("button",{onClick:function(){e.addItem(t)},children:t},n)}))]})]})}var j=function(){var e,t=Object(o.useState)([]),n=Object(r.a)(t,2),a=n[0],s=n[1];function c(e){0===a.filter((function(t,n){return t===e})).length?s((function(t){return[].concat(Object(i.a)(t),[e])})):console.log("item already exist!")}function j(e){var t=!0;return a.forEach((function(n){e.role===n||e.level===n||e.languages.includes(n)||e.tools.includes(n)||(t=!1)})),t}return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{style:{display:0===a.length?"none":"flex"},className:"filterBar_container",children:[Object(m.jsx)("div",{className:"filterBar_inner_containers",children:a.map((function(e,t){return Object(m.jsxs)("div",{className:"filtered_tablets_container",children:[Object(m.jsx)("div",{className:"skill",children:Object(m.jsx)("p",{className:"company_name_style filter_item_style",children:e})}),Object(m.jsx)("div",{onClick:function(){var t;t=e,s((function(e){return e.filter((function(e,n){return e!==t}))}))},className:"cross_svg_container",children:Object(m.jsx)("img",{className:"cross",src:"./images/icon-remove.svg",alt:"cross"})})]},t)}))}),Object(m.jsx)("div",(e={className:"deleteAll"},Object(l.a)(e,"className","filterBar_inner_containers"),Object(l.a)(e,"children",Object(m.jsxs)("div",{className:"filtered_tablets_container",children:[Object(m.jsx)("div",{className:"skill",children:Object(m.jsx)("p",{className:"company_name_style filter_item_style",children:"Clear all"})}),Object(m.jsx)("div",{onClick:function(){s([])},className:"cross_svg_container",children:Object(m.jsx)("img",{className:"cross",src:"./images/icon-remove.svg",alt:"cross"})})]})),e))]}),Object(m.jsx)("div",{className:"cards_outer_container",children:d.map((function(e,t){return Object(m.jsx)("div",{style:{display:j(e)?"flex":"none"},children:Object(m.jsx)(u,{logo:e.logo,company:e.company,id:e.id,new:e.new,featured:e.featured,position:e.position,role:e.role,level:e.level,postedAt:e.postedAt,contract:e.contract,location:e.location,languages:e.languages,tools:e.tools,addItem:c},t)},t)}))})]})};var g=function(e){return Object(m.jsxs)("div",{className:"attribution",children:[Object(m.jsxs)("p",{className:"company_name_style attr",children:["Challenge by- ",Object(m.jsx)("a",{className:"attr",href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",children:"Frontend Mentor"}),"."]}),Object(m.jsxs)("p",{className:"company_name_style attr",children:["Coded by- ",Object(m.jsx)("a",{className:"attr",href:"https://www.frontendmentor.io/profile/RahulKumarGautam1636",children:"Rahul Kumar Gautam"}),"."]})]})};var p=function(){return Object(m.jsxs)("section",{className:"outer_container",children:[Object(m.jsx)("div",{className:"header"}),Object(m.jsx)(j,{}),Object(m.jsx)(g,{})]})};var v=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(p,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),o(e),a(e),s(e),c(e)}))};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.5699363d.chunk.js.map