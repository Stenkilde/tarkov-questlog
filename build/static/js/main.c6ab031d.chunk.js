(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{18:function(e,n,t){e.exports=t(27)},24:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(5),u=t(10),o=t(2),i=t(0),l=t.n(i),s=t(13),f=t(3),p=(t(24),t(17)),m=t(8),d="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_+!*$".split("");function h(e,n,t){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(a.a.mark((function e(n,t,r){var c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=b(r,t),(u=c.quests.find((function(e){return e.name===n.name}))).state=!u.state,w(r),e.abrupt("return",Object(p.a)(r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,n){return e.find((function(e){return e.name===n}))}function w(e){var n=e.reduce((function(e,n,t){var r=n.quests.map((function(e,n){if(n>d.length)throw new Error("Index too high, can't be mapped to a base58 character");return e.state?d[n]:void 0})).filter((function(e){return void 0!==e}));return 0===r.length?e:e+"".concat(t).concat(r.join(""))}),""),t=new URL(window.location.origin);t.searchParams.set("state",n),window.history.replaceState("","",t.href)}function E(){return fetch("./data.json",{cache:"force-cache"}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)})).then((function(e){if(window.location.search.length>0){var n=new URLSearchParams(window.location.search.substring(1));return n.get("state").length>0?function(e,n){var t,r=/(\d+)/,a=0,c=Object(m.a)(e.split(r).filter((function(e){return""!==e&&void 0!==e})));try{for(c.s();!(t=c.n()).done;){var u=t.value;if(r.test(u))a=Number(u);else{var o,i=Object(m.a)(u.split(""));try{for(i.s();!(o=i.n()).done;){var l=o.value,s=d.indexOf(l);if(-1===s)throw new Error("Invalid URI supplied, character not recognized");if(!n[a])throw new Error("Invalid index for guy");n[a].quests[s].state=!0}}catch(f){i.e(f)}finally{i.f()}}}}catch(f){c.e(f)}finally{c.f()}return n}(n.get("state"),e):e}return e}))}function g(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  cursor: pointer;\n  margin: 0 3px;\n  &:hover {\n    img {\n      box-shadow: 2px 2px 18px 0px rgba(255,255,255,1);\n    }\n  }\n"]);return g=function(){return e},e}var x=f.a.div(g()),j=function(e){var n=e.trader,t=e.select;return l.a.createElement(x,{onClick:function(){return t(n)}},l.a.createElement("img",{src:n.avatar,alt:n.name}),l.a.createElement("p",null,n.name))};function y(){var e=Object(o.a)(["\n  border: 1px solid blue;\n"]);return y=function(){return e},e}var k=f.a.div(y()),O=function(e){var n=e.quests,t=e.traderName,r=e.updateQuest;return l.a.createElement("div",null,n.length>0?n.map((function(e){return e.state?null:l.a.createElement(k,{key:e.name,onClick:function(){return r(e,t)}},l.a.createElement("p",null,e.name),e.objectives.map((function(e){return l.a.createElement("p",{key:e},e)})),e.state?l.a.createElement("p",null,"True"):l.a.createElement("p",null,"False"))})):l.a.createElement("p",null,"We have no quests yet for this trader"),l.a.createElement("p",null,"Completed Quests"),n.length>0?n.map((function(e){return e.state?l.a.createElement(k,{key:e.name+"completed",onClick:function(){return r(e,t)}},l.a.createElement("p",null,e.name),e.objectives.map((function(e){return l.a.createElement("p",{key:e},e)})),e.state?l.a.createElement("p",null,"True"):l.a.createElement("p",null,"False")):null})):l.a.createElement(l.a.Fragment,null))};function _(){var e=Object(o.a)(['\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100vw;\n  height: 100vh;\n  background-image: url("https://cdn.discordapp.com/attachments/720665957915295774/720666048340295751/2020-03-1312-23_-14.5_28.4_-39.7_0.1_-0.4_0.1_0.9_0.png");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: blur(5px);\n']);return _=function(){return e},e}function q(){var e=Object(o.a)(["\n  position: relative;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  max-width: 600px;\n  color: #fff;\n  margin: 0 auto;\n"]);return q=function(){return e},e}var I=f.a.div(q()),z=f.a.div(_());function C(){var e=Object(i.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],o=Object(i.useState)(null),s=Object(u.a)(o,2),f=s[0],p=s[1];function m(e){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(n);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(c.a)(a.a.mark((function e(n,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n,c,t).then((function(e){r(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){E().then((function(e){return r(e)}))}),[]),l.a.createElement("div",null,l.a.createElement("p",null,"Welcome to Tarkov"),l.a.createElement(I,null,t.map((function(e){return l.a.createElement(j,{key:e.name,trader:e,select:m})})),f?l.a.createElement(O,{quests:f.quests,traderName:f.name,updateQuest:function(e,n){return v.apply(this,arguments)}}):l.a.createElement("p",null,"Pick a trader")),l.a.createElement(z,null))}Object(s.render)(l.a.createElement(C,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c6ab031d.chunk.js.map