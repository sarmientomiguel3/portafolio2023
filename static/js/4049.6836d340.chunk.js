(self.webpackChunkMiguel_Sarmiento_FullStack=self.webpackChunkMiguel_Sarmiento_FullStack||[]).push([[4049],{3404:function(e,t,n){"use strict";n.d(t,{Z:function(){return B}});var r=n(93433),o=n(29439),a=n(4942),i=n(87462),s=n(63366),c=n(47313),l=(n(20478),n(83061)),u=n(21921),d=n(17592),h=n(77342),p=n(61113),m=n(17551),f=n(54750),v=n(46417),g=(0,f.Z)((0,v.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=n(38743),b=(0,d.ZP)(Z.Z)((function(e){var t=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,m._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,m._4)(t.palette.grey[600],.12)})})})),x=(0,d.ZP)(g)({width:24,height:16});var w=function(e){var t=e;return(0,v.jsx)("li",{children:(0,v.jsx)(b,(0,i.Z)({focusRipple:!0},e,{ownerState:t,children:(0,v.jsx)(x,{ownerState:t})}))})},S=n(77430),y=n(32298);function C(e){return(0,y.Z)("MuiBreadcrumbs",e)}var R=(0,S.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),k=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],M=(0,d.ZP)(p.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,a.Z)({},"& .".concat(R.li),t.li),t.root]}})({}),N=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),j=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function I(e,t,n,r){return e.reduce((function(o,a,i){return i<e.length-1?o=o.concat(a,(0,v.jsx)(j,{"aria-hidden":!0,className:t,ownerState:r,children:n},"separator-".concat(i))):o.push(a),o}),[])}var B=c.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiBreadcrumbs"}),a=n.children,d=n.className,p=n.component,m=void 0===p?"nav":p,f=n.expandText,g=void 0===f?"Show path":f,Z=n.itemsAfterCollapse,b=void 0===Z?1:Z,x=n.itemsBeforeCollapse,S=void 0===x?1:x,y=n.maxItems,R=void 0===y?8:y,j=n.separator,B=void 0===j?"/":j,T=(0,s.Z)(n,k),A=c.useState(!1),L=(0,o.Z)(A,2),D=L[0],P=L[1],F=(0,i.Z)({},n,{component:m,expanded:D,expandText:g,itemsAfterCollapse:b,itemsBeforeCollapse:S,maxItems:R,separator:B}),_=function(e){var t=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},C,t)}(F),z=c.useRef(null),X=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return(0,v.jsx)("li",{className:_.li,children:e},"child-".concat(t))}));return(0,v.jsx)(M,(0,i.Z)({ref:t,component:m,color:"text.secondary",className:(0,l.Z)(_.root,d),ownerState:F},T,{children:(0,v.jsx)(N,{className:_.ol,ref:z,ownerState:F,children:I(D||R&&X.length<=R?X:function(e){return S+b>=e.length?e:[].concat((0,r.Z)(e.slice(0,S)),[(0,v.jsx)(w,{"aria-label":g,onClick:function(){P(!0);var e=z.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-b,e.length)))}(X),_.separator,B,F)})}))}))},33604:function(e,t,n){"use strict";var r=n(87462),o=n(63366),a=n(47313),i=n(83061),s=n(21921),c=n(61113),l=n(17592),u=n(77342),d=n(93174),h=n(63909),p=n(46417),m=["className","id"],f=(0,l.ZP)(c.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),v=a.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiDialogTitle"}),c=n.className,l=n.id,v=(0,o.Z)(n,m),g=n,Z=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},d.a,t)}(g),b=a.useContext(h.Z).titleId,x=void 0===b?l:b;return(0,p.jsx)(f,(0,r.Z)({component:"h2",className:(0,i.Z)(Z.root,c),ownerState:g,ref:t,variant:"h6",id:x},v))}));t.Z=v},84488:function(e,t,n){"use strict";n.d(t,{Z:function(){return B}});var r=n(30168),o=n(63366),a=n(87462),i=n(47313),s=n(83061),c=n(30686),l=n(21921);function u(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function d(e){return parseFloat(e)}var h=n(17551),p=n(17592),m=n(77342),f=n(77430),v=n(32298);function g(e){return(0,v.Z)("MuiSkeleton",e)}(0,f.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var Z,b,x,w,S,y,C,R,k=n(46417),M=["animation","className","component","height","style","variant","width"],N=(0,c.F4)(S||(S=Z||(Z=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),j=(0,c.F4)(y||(y=b||(b=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),I=(0,p.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})((function(e){var t=e.theme,n=e.ownerState,r=u(t.shape.borderRadius)||"px",o=d(t.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,h.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(o).concat(r,"/").concat(Math.round(o/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,c.iv)(C||(C=x||(x=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),N)}),(function(e){var t=e.ownerState,n=e.theme;return"wave"===t.animation&&(0,c.iv)(R||(R=w||(w=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),j,(n.vars||n).palette.action.hover)})),B=i.forwardRef((function(e,t){var n=(0,m.Z)({props:e,name:"MuiSkeleton"}),r=n.animation,i=void 0===r?"pulse":r,c=n.className,u=n.component,d=void 0===u?"span":u,h=n.height,p=n.style,f=n.variant,v=void 0===f?"text":f,Z=n.width,b=(0,o.Z)(n,M),x=(0,a.Z)({},n,{animation:i,component:d,variant:v,hasChildren:Boolean(b.children)}),w=function(e){var t=e.classes,n=e.variant,r=e.animation,o=e.hasChildren,a=e.width,i=e.height,s={root:["root",n,r,o&&"withChildren",o&&!a&&"fitContent",o&&!i&&"heightAuto"]};return(0,l.Z)(s,g,t)}(x);return(0,k.jsx)(I,(0,a.Z)({as:d,ref:t,className:(0,s.Z)(w.root,c),ownerState:x},b,{style:(0,a.Z)({width:Z,height:h},p)}))}))},82558:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(4942),o=n(63366),a=n(87462),i=n(21921),s=n(83061),c=n(47313),l=n(38743),u=n(54750),d=n(46417),h=(0,u.Z)((0,d.jsx)("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),p=n(17592),m=n(77342),f=n(91615),v=n(77430),g=n(32298);function Z(e){return(0,g.Z)("MuiTableSortLabel",e)}var b=(0,v.Z)("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),x=["active","children","className","direction","hideSortIcon","IconComponent"],w=(0,p.ZP)(l.Z,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.active&&t.active]}})((function(e){var t=e.theme;return(0,r.Z)({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(t.vars||t).palette.text.secondary},"&:hover":(0,r.Z)({color:(t.vars||t).palette.text.secondary},"& .".concat(b.icon),{opacity:.5})},"&.".concat(b.active),(0,r.Z)({color:(t.vars||t).palette.text.primary},"& .".concat(b.icon),{opacity:1,color:(t.vars||t).palette.text.secondary}))})),S=(0,p.ZP)("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:function(e,t){var n=e.ownerState;return[t.icon,t["iconDirection".concat((0,f.Z)(n.direction))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},"desc"===n.direction&&{transform:"rotate(0deg)"},"asc"===n.direction&&{transform:"rotate(180deg)"})})),y=c.forwardRef((function(e,t){var n=(0,m.Z)({props:e,name:"MuiTableSortLabel"}),r=n.active,c=void 0!==r&&r,l=n.children,u=n.className,p=n.direction,v=void 0===p?"asc":p,g=n.hideSortIcon,b=void 0!==g&&g,y=n.IconComponent,C=void 0===y?h:y,R=(0,o.Z)(n,x),k=(0,a.Z)({},n,{active:c,direction:v,hideSortIcon:b,IconComponent:C}),M=function(e){var t=e.classes,n=e.direction,r={root:["root",e.active&&"active"],icon:["icon","iconDirection".concat((0,f.Z)(n))]};return(0,i.Z)(r,Z,t)}(k);return(0,d.jsxs)(w,(0,a.Z)({className:(0,s.Z)(M.root,u),component:"span",disableRipple:!0,ownerState:k,ref:t},R,{children:[l,b&&!c?null:(0,d.jsx)(S,{as:C,className:(0,s.Z)(M.icon),ownerState:k})]}))}))},88718:function(e,t,n){var r=n(81186),o=n(41790);e.exports=function(e,t){return e&&e.length?o(e,r(t,2)):0}}}]);