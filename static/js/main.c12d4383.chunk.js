(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={btn:"FeedbackOptions_btn__3I1bj"}},,,,,,function(t,e,n){t.exports={sectionTitle:"Section_sectionTitle__3FRVD"}},function(t,e,n){t.exports={statisticsList:"Statistics_statisticsList__3w5qc"}},function(t,e,n){t.exports={notification:"Notification_notification__2WDy1"}},,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(4),s=n.n(i),o=(n(17),n(5)),r=n(6),l=n(7),d=n(12),b=n(11),u=(n(18),n(8)),j=n.n(u),h=n(0),f=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:j.a.sectionTitle,children:[e,n]})},O=n(2),x=n.n(O),g=function(t){var e=t.onLeaveFeedback;return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:x.a.btn,name:"good",onClick:e,children:"Good"}),Object(h.jsx)("button",{className:x.a.btn,name:"neutral",onClick:e,children:"Neutral"}),Object(h.jsx)("button",{className:x.a.btn,name:"bad",onClick:e,children:"Bad"})]})},k=n(9),v=n.n(k),p=function(t){var e=t.good,n=t.neutral,a=t.bad,c=t.total,i=t.positivePercentage;return Object(h.jsxs)("ul",{className:v.a.statisticsList,children:[Object(h.jsxs)("li",{children:["Good: ",e]}),Object(h.jsxs)("li",{children:["Neutral: ",n]}),Object(h.jsxs)("li",{children:["Bad: ",a]}),Object(h.jsxs)("li",{children:["Total: ",c]}),Object(h.jsxs)("li",{children:["Positive feedback: ",i,"%"]})]})},m=n(10),_=n.n(m),F=function(t){var e=t.message;return Object(h.jsx)("p",{className:_.a.notification,children:e})},N=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleChangeStatistics=function(e){t.setState((function(t){return Object(o.a)({},e.target.name,t[e.target.name]+1)}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return Math.round(t.state.good/t.countTotalFeedback()*100)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(f,{title:"Please leave feedback",children:Object(h.jsx)(g,{onLeaveFeedback:this.handleChangeStatistics})}),Object(h.jsxs)(f,{title:"Statistics",children:[0===this.countTotalFeedback()&&Object(h.jsx)(F,{message:"No feedback given"}),0!==this.countTotalFeedback()&&Object(h.jsx)(p,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})]})}}]),n}(a.Component);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.c12d4383.chunk.js.map