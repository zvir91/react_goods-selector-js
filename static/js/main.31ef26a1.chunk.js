(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var s=c(3),n=c.n(s),a=c(4),o=(c(9),c(10),c(1)),l=c(0),i=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],r=function(){var t=Object(o.useState)("Jam"),e=Object(a.a)(t,2),c=e[0],s=e[1],n=function(){s(null)};return Object(l.jsxs)("main",{className:"section container",children:[Object(l.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[c?"".concat(c," is selected"):"No goods selected",c&&Object(l.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:n})]}),Object(l.jsx)("table",{className:"table",children:Object(l.jsx)("tbody",{children:i.map((function(t){return Object(l.jsxs)("tr",{"data-cy":"Good",className:t===c?"has-background-success-light":null,children:[Object(l.jsx)("td",{children:c!==t?Object(l.jsx)("button",{onClick:function(){s(t)},"data-cy":"AddButton",type:"button",className:"button",children:"+"}):Object(l.jsx)("button",{onClick:n,"data-cy":"RemoveButton",type:"button",className:"button is-info",children:"-"})}),Object(l.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})};n.a.render(Object(l.jsx)(r,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.31ef26a1.chunk.js.map