(self["webpackChunkfish_ui"]=self["webpackChunkfish_ui"]||[]).push([[819],{22231:function(e,t,n){"use strict";n.d(t,{m:function(){return l.m}});var l=n(9684);n(72255)},46884:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var l=n(67294),r=n(96089),a={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}},c=function(e){var t=e.identifier,n=e["export"],c=(0,r.useApiData)(t),i=(0,l.useContext)(r.context),o=i.locale,m=/^zh|cn$/i.test(o)?a["zh-CN"]:a["en-US"];return l.createElement(l.Fragment,null,c&&l.createElement("table",{style:{marginTop:24}},l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,m.name),l.createElement("th",null,m.description),l.createElement("th",null,m.type),l.createElement("th",null,m["default"]))),l.createElement("tbody",null,c[n].map((function(e){return l.createElement("tr",{key:e.identifier},l.createElement("td",null,e.identifier),l.createElement("td",null,e.description||"--"),l.createElement("td",null,l.createElement("code",null,e.type)),l.createElement("td",null,l.createElement("code",null,e["default"]||e.required&&m.required||"--")))})))))},i=n(2140),o=l.memo((e=>{var t=e.demos,n=t["button-demo"].component,a=t["button-demo-1"].component;return l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"button-\u6309\u94ae"},l.createElement(r.AnchorLink,{to:"#button-\u6309\u94ae","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Button \u6309\u94ae"),l.createElement("p",null,"\u54cd\u5e94\u7528\u6237\u70b9\u51fb\u884c\u4e3a\uff0c\u89e6\u53d1\u76f8\u5e94\u7684\u4e1a\u52a1\u903b\u8f91\u3002"),l.createElement("p",null,"\u4ee3\u7801\u6f14\u793a")),l.createElement(i.default,t["button-demo"].previewerProps,l.createElement(n,null)),l.createElement("div",{className:"markdown"},l.createElement("h3",{id:"\u6309\u94ae\u989c\u8272"},l.createElement(r.AnchorLink,{to:"#\u6309\u94ae\u989c\u8272","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u6309\u94ae\u989c\u8272")),l.createElement(i.default,t["button-demo-1"].previewerProps,l.createElement(a,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"api"},l.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(c,{identifier:"button",export:"default"}))))})),m=e=>{var t=l.useContext(r.context),n=t.demos;return l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(o,{demos:n})}}}]);