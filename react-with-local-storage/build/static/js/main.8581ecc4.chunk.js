(this["webpackJsonpreact-with-local-storage"]=this["webpackJsonpreact-with-local-storage"]||[]).push([[0],{19:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(16),r=a.n(o),c=(a(24),a(11)),i=a(7),u=a(40),m=(a(25),a(9)),s=function(e){var t=l.a.useState(localStorage.getItem(e)||""),a=Object(m.a)(t,2),n=a[0],o=a[1];return l.a.useEffect((function(){localStorage.setItem(e,n)}),[n]),[n,o]},g=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome"))},p=function(){var e=s("myValueInLocalStorage"),t=Object(m.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"Page 1"),l.a.createElement("input",{value:a,type:"text",onChange:function(e){return n(e.target.value)}}),l.a.createElement("p",null,a))},f=function(){var e=s("myValueInLocalStorage"),t=Object(m.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"Page 2"),l.a.createElement("input",{value:a,type:"text",onChange:function(e){return n(e.target.value)}}),l.a.createElement("p",null,a))},E=function(){var e=h();return l.a.createElement("div",{className:e.footer},l.a.createElement(c.b,{to:"/",className:e.links},"HomePage"),l.a.createElement(c.b,{to:"/page1",className:e.links},"Page 1"),l.a.createElement(c.b,{to:"/page2",className:e.links},"Page 1"))},h=Object(u.a)({body:{padding:15},footer:{backgroundColor:"gray",position:"fixed",left:0,bottom:0,width:"100%",display:"flex",justifyContent:"center",padding:"50px"},links:{color:"white",flexBasis:"50px"}}),d=function(){return l.a.createElement(c.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:g}),l.a.createElement(i.a,{path:"/page1",component:p}),l.a.createElement(i.a,{path:"/page2",component:f})),l.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.8581ecc4.chunk.js.map