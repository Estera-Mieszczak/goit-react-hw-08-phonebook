"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[666],{4666:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(2791),a=n(4420),s=n(4270),c={span:"ContactList_span__Mbz+M",li:"ContactList_li__dzNT+",button:"ContactList_button__7kL4l",input:"ContactList_input__ndJUy"},i=n(188),u=n(184),l=function(e){var t=e.contact,n=(0,a.I0)();return(0,u.jsxs)("div",{children:[(0,u.jsxs)("p",{children:[t.name," | ",t.number]}),(0,u.jsx)("button",{onClick:function(){return n((0,i.GK)(t.id))},children:"Delete"})]})},o=function(e){return e.contacts.items},d=function(e){return e.contacts.isLoading},m=function(e){return e.filter},h=function(){var e=(0,a.v9)(o),t=(0,a.v9)(m).filter;return(0,u.jsx)("ul",{className:c.ul,children:e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return(0,u.jsx)("li",{className:c.li,children:(0,u.jsx)(l,{contact:e})},e.id)}))})},f="Form_contactForm__lMCIx",p="Form_input__FTtTw",x=n(2276),_=function(){var e=(0,a.I0)(),t=(0,x.x0)(),n=(0,x.x0)();return(0,u.jsxs)("form",{className:f,onSubmit:function(t){t.preventDefault();var n=t.target,r=n.elements.name.value,a=n.elements.phone.value;e((0,i.uK)({name:r,number:a})),n.reset()},children:[(0,u.jsx)("label",{htmlFor:t,children:"Name"}),(0,u.jsx)("input",{className:p,id:t,type:"text",name:"name",required:!0,placeholder:"Name"}),(0,u.jsx)("label",{htmlFor:n,children:"Phone number"}),(0,u.jsx)("input",{className:p,id:n,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[ .\\\\-\\\\s]?\\(?\\d{1,3}?\\)?[ .\\\\-\\\\s]?\\d{1,4}[ .\\\\-\\\\s]?\\d{1,4}[ .\\\\-\\\\s]?\\d{1,9}",required:!0,placeholder:"Number"}),(0,u.jsx)("button",{type:"submit",children:"Add contact"})]})},j=n(6895),b=function(){var e=(0,a.I0)();return(0,u.jsx)("input",{className:"",type:"search",name:"filter",onChange:function(t){e((0,j.b)(t.target.value))},placeholder:"Search..."})};function v(){var e=(0,a.I0)(),t=(0,a.v9)(d);return(0,r.useEffect)((function(){e((0,i.yF)())}),[e]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.q,{children:(0,u.jsx)("title",{children:"Your contacts"})}),(0,u.jsx)(_,{}),(0,u.jsx)(b,{}),(0,u.jsx)("div",{children:t&&"Request in progress..."}),(0,u.jsx)(h,{})]})}}}]);
//# sourceMappingURL=666.0a48b2ac.chunk.js.map