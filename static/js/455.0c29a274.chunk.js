"use strict";(self.webpackChunkloch_assignment=self.webpackChunkloch_assignment||[]).push([[455],{537:function(e,n,t){var r=t(184);n.Z=function(e){var n=e.key,t=e.name,a=e.label,l=e.id,i=e.value,o=e.placeholder,c=e.onChange,u=e.onClick,s=e.type,d=e.onFocus,f=e.onBlur,h=e.min,m=e.max,p=e.step,v=e.accept,y=e.maxLength,b=e.disabled,x=e.readOnly,g=e.rows,j=e.defaultChecked,C=e.onChangeValue,k=e.className,w=void 0===k?"":k,S=(0,r.jsx)("input",{id:l,name:t,defaultValue:i,value:C,onChange:c,onClick:u,placeholder:o,type:s,onFocus:d,onBlur:f,min:h,max:m,step:p,accept:v,maxLength:y,disabled:b,readOnly:x,checked:i,defaultChecked:j},n);return"area"===s&&(S=(0,r.jsx)("textarea",{id:l,name:t,defaultValue:i,value:C,onChange:c,onClick:u,placeholder:o,type:s,onFocus:d,onBlur:f,min:h,max:m,step:p,accept:v,maxLength:y,disabled:b,readOnly:x,rows:g},n)),(0,r.jsxs)("div",{className:"input-container ".concat(w),children:[a&&(0,r.jsx)("div",{className:"label",children:a}),S]})}},455:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(152),a=t(791),l=t(537),i=t(184),o=function(e){var n=e.className,t=void 0===n?"":n,r=e.onClick,a=e.children,l=e.disabled,o=void 0!==l&&l;return(0,i.jsx)("div",{className:"button-container ".concat(t),children:(0,i.jsx)("button",{onClick:r,disabled:o,children:a})})},c=t(867),u=function(){var e=(0,a.useState)(""),n=(0,r.Z)(e,2),t=n[0],u=n[1],s=(0,a.useState)(""),d=(0,r.Z)(s,2),f=d[0],h=d[1];return(0,i.jsx)("div",{className:"login-container",children:(0,i.jsxs)("div",{className:"wrapper",children:[(0,i.jsx)("h3",{children:"Sign up for exclusive access."}),(0,i.jsx)(l.Z,{className:"login-input",type:"email",placeholder:"Your email address",onChange:function(e){return function(e){u(e.target.value)}(e)}}),(0,i.jsx)(o,{onClick:function(){(0,c.v)(t)?window.location.href="https://app.loch.one/welcome":h("Please enter a valid email !")},children:"Get Started"}),f&&(0,i.jsx)("span",{className:"error",children:f}),(0,i.jsx)("span",{children:"You\u2019ll receive an email with an invite link to join."})]})})}},867:function(e,n,t){t.d(n,{n:function(){return l},v:function(){return i}});var r=t(152),a=t(791),l=function(e){var n=(0,a.useState)(null),t=(0,r.Z)(n,2),l=t[0],i=t[1];return(0,a.useMemo)((function(){var n=new Image;n.src=e,n.onload=function(){i(n)}}),[e]),l},i=function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}},152:function(e,n,t){function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,l,i,o=[],c=!0,u=!1;try{if(l=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=l.call(t)).done)&&(o.push(r.value),o.length!==n);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw a}}return o}}(e,n)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=455.0c29a274.chunk.js.map