(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(4),a=c.n(i),r=(c(9),c(2)),o=(c(10),c(0));function l(e){var t=e.onClick,c=e.options;return Object(o.jsx)("ul",{className:"feedbacks",children:c.map((function(e){return Object(o.jsx)("li",{className:"feedbacks__item",children:Object(o.jsx)("button",{type:"button",className:"feedbacks__button",onClick:function(){t(e)},children:e})},e)}))})}c(12);function u(e){var t=e.title,c=e.children;return Object(o.jsxs)("section",{className:"section",children:[t&&Object(o.jsx)("h2",{className:"section__title",children:t}),c]})}function j(e){var t=e.message;return Object(o.jsx)("p",{className:"notification",children:t})}c(13);function b(e){var t=e.good,c=e.neutral,s=e.bad,n=e.total,i=e.positivePercentage;return Object(o.jsxs)("ul",{className:"statistics",children:[Object(o.jsxs)("li",{className:"statistics__item",children:["Good: ",t," "]}),Object(o.jsxs)("li",{className:"statistics__item",children:["Neutral: ",c]}),Object(o.jsxs)("li",{className:"statistics__item",children:["Bad: ",s]}),Object(o.jsxs)("li",{className:"statistics__item",children:["Total: ",n]}),Object(o.jsxs)("li",{className:"statistics__item",children:["Positive Feedback: ",i||0,"%"]})]})}function d(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(0),a=Object(r.a)(i,2),d=a[0],f=a[1],h=Object(s.useState)(0),O=Object(r.a)(h,2),m=O[0],x=O[1],_=function(){return c+d+m};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{title:"Please leave your feedback",children:Object(o.jsx)(l,{onClick:function(e){switch(e){case"good":return void n((function(e){return e+1}));case"neutral":return void f((function(e){return e+1}));case"bad":return void x((function(e){return e+1}));default:return}},options:["good","neutral","bad"]})}),Object(o.jsx)(u,{children:0===_?Object(o.jsx)(j,{message:"No feedback given"}):Object(o.jsx)(b,{good:c,neutral:d,bad:m,total:_(),positivePercentage:function(){var e=_();return Math.floor(100*c/e)}()})})]})}a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.ea5b2377.chunk.js.map