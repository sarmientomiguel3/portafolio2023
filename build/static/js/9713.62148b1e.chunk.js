"use strict";(self.webpackChunkMiguel_Sarmiento_FullStack=self.webpackChunkMiguel_Sarmiento_FullStack||[]).push([[9713],{26253:function(e,t,n){n.d(t,{cU:function(){return S},i5:function(){return b},A0:function(){return u},ZP:function(){return I}});var i=n(44021),r=n(1413),s=n(17592),o=n(57829),a=n(35898),l=n(46417),c=(0,s.ZP)(o.Z,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var t=e.rounded;return{zIndex:9,padding:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.theme.palette.primary.main,"& li":{width:18,height:18,opacity:.32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer","&.slick-active":(0,r.Z)({opacity:1},t&&{"& span":{width:16,borderRadius:6}})}}})),d=(0,s.ZP)("span")((function(e){var t=e.theme;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));function u(e){var t=(null===e||void 0===e?void 0:e.rounded)||!1,n=null===e||void 0===e?void 0:e.sx;return{appendDots:function(i){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c,(0,r.Z)((0,r.Z)({component:"ul",rounded:t,sx:n},e),{},{children:i}))})},customPaging:function(){return(0,l.jsx)(a.Z,{component:"div",alignItems:"center",justifyContent:"center",sx:{width:1,height:1},children:(0,l.jsx)(d,{sx:{bgcolor:"currentColor"}})})}}}var h=n(45987),x=n(17551),Z=n(19860),p=n(47131),j=n(8730);function f(e){var t=e.icon,n=void 0===t?"eva:arrow-ios-forward-fill":t,i=e.isRTL;return(0,l.jsx)(j.Z,{icon:n,sx:(0,r.Z)({width:20,height:20,transform:" scaleX(-1)"},i&&{transform:" scaleX(1)"})})}function g(e){var t=e.icon,n=void 0===t?"eva:arrow-ios-forward-fill":t,i=e.isRTL;return(0,l.jsx)(j.Z,{icon:n,sx:(0,r.Z)({width:20,height:20},i&&{transform:" scaleX(-1)"})})}var m=["shape","filled","icon","onNext","onPrevious","children","leftButtonProps","rightButtonProps","sx"],v=(0,s.ZP)(p.Z,{shouldForwardProp:function(e){return"filled"!==e&&"hasChildren"!==e&&"shape"!==e}})((function(e){var t=e.filled,n=e.shape,i=e.hasChildren,s=e.theme;return(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({color:"inherit",transition:s.transitions.create("all",{duration:s.transitions.duration.shorter})},"rounded"===n&&{borderRadius:1.5*Number(s.shape.borderRadius)}),!t&&{opacity:.48,"&:hover":{opacity:1}}),t&&{color:(0,x.Fq)(s.palette.common.white,.8),backgroundColor:(0,x.Fq)(s.palette.grey[900],.48),"&:hover":{color:s.palette.common.white,backgroundColor:s.palette.grey[900]}}),i&&{zIndex:9,top:"50%",position:"absolute",marginTop:s.spacing(-2.5)})}));function b(e){var t=e.shape,n=void 0===t?"circular":t,i=e.filled,s=void 0!==i&&i,o=e.icon,c=e.onNext,d=e.onPrevious,u=e.children,x=e.leftButtonProps,p=e.rightButtonProps,j=e.sx,b=(0,h.Z)(e,m),w="rtl"===(0,Z.Z)().direction;return!!u?(0,l.jsxs)(a.Z,(0,r.Z)((0,r.Z)({sx:j},b),{},{children:[(0,l.jsx)(v,(0,r.Z)((0,r.Z)({filled:s,shape:n,hasChildren:!!u,onClick:d},x),{},{sx:(0,r.Z)({left:16},null===x||void 0===x?void 0:x.sx),children:(0,l.jsx)(f,{icon:o,isRTL:w})})),u,(0,l.jsx)(v,(0,r.Z)((0,r.Z)({filled:s,shape:n,hasChildren:!!u,onClick:c},p),{},{sx:(0,r.Z)({right:16},null===p||void 0===p?void 0:p.sx),children:(0,l.jsx)(g,{icon:o,isRTL:w})}))]})):(0,l.jsxs)(a.Z,(0,r.Z)((0,r.Z)({direction:"row",alignItems:"center",display:"inline-flex",sx:j},b),{},{children:[(0,l.jsx)(v,(0,r.Z)((0,r.Z)({filled:s,shape:n,onClick:d},x),{},{children:(0,l.jsx)(f,{icon:o,isRTL:w})})),(0,l.jsx)(v,(0,r.Z)((0,r.Z)({filled:s,shape:n,onClick:c},p),{},{children:(0,l.jsx)(g,{icon:o,isRTL:w})}))]}))}var w=n(61113),y=n(50769),k=["index","total","onNext","onPrevious","icon","sx"],C=(0,s.ZP)(o.Z)((function(e){var t=e.theme;return(0,r.Z)((0,r.Z)({},(0,y.Ls)({opacity:.48,color:t.palette.grey[900]})),{},{zIndex:9,display:"inline-flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),padding:t.spacing(.25),color:t.palette.common.white,borderRadius:t.shape.borderRadius})})),P=(0,s.ZP)(p.Z)({width:28,height:28,padding:0,opacity:.48,"&:hover":{opacity:1}});function S(e){var t=e.index,n=e.total,i=e.onNext,s=e.onPrevious,o=e.icon,a=e.sx,c=(0,h.Z)(e,k),d="rtl"===(0,Z.Z)().direction;return(0,l.jsxs)(C,(0,r.Z)((0,r.Z)({sx:a},c),{},{children:[(0,l.jsx)(P,{color:"inherit",onClick:s,children:(0,l.jsx)(f,{icon:o,isRTL:d})}),(0,l.jsxs)(w.Z,{variant:"subtitle2",component:"span",sx:{mx:.25},children:[t+1,"/",n]}),(0,l.jsx)(P,{color:"inherit",onClick:i,children:(0,l.jsx)(g,{icon:o,isRTL:d})})]}))}var I=i.Z},49372:function(e,t,n){n.d(t,{fY:function(){return l},yM:function(){return d},hN:function(){return v}});var i=n(1413),r=n(17592),s=n(17551),o=n(24631),a=n(46417),l=(0,r.ZP)((function(e){return(0,a.jsx)(o.Z,(0,i.Z)({select:!0,SelectProps:{native:!0}},e))}))((function(e){var t=e.theme;return{"& fieldset":{display:"none"},"& select":(0,i.Z)((0,i.Z)({},t.typography.subtitle2),{},{padding:t.spacing(.5,0,.5,1),paddingRight:"28px !important"}),"& .MuiOutlinedInput-root":{borderRadius:.75*Number(t.shape.borderRadius),backgroundColor:(0,s.Fq)(t.palette.grey[500],.08)}}})),c=n(4942),d=(0,r.ZP)(o.Z,{shouldForwardProp:function(e){return"width"!==e}})((function(e){var t=e.width,n=e.theme;return{"& fieldset":{display:"none"},"& .MuiOutlinedInput-root":{width:t,border:"solid 1px ".concat((0,s.Fq)(n.palette.grey[500],.32)),transition:n.transitions.create(["box-shadow","width"],{duration:n.transitions.duration.shorter}),"&.Mui-focused":(0,i.Z)({boxShadow:n.customShadows.z20},t&&(0,c.Z)({},n.breakpoints.up("sm"),{width:t+60}))}}})),u=n(45987),h=n(75192),x=n.n(h),Z=n(47313),p=n(35898),j=n(47131),f=n(8730),g=["quantity","onIncrease","onDecrease","disabledIncrease","disabledDecrease","sx"],m=(0,Z.forwardRef)((function(e,t){var n=e.quantity,r=e.onIncrease,o=e.onDecrease,l=e.disabledIncrease,c=e.disabledDecrease,d=e.sx,h=(0,u.Z)(e,g);return(0,a.jsxs)(p.Z,(0,i.Z)((0,i.Z)({ref:t,flexShrink:0,direction:"row",alignItems:"center",justifyContent:"space-between",sx:(0,i.Z)({mb:.5,py:.5,px:.75,width:96,borderRadius:1,border:function(e){return"solid 1px ".concat((0,s.Fq)(e.palette.grey[500],.32))}},d)},h),{},{children:[(0,a.jsx)(j.Z,{size:"small",color:"inherit",onClick:o,disabled:c,sx:{color:"text.secondary"},children:(0,a.jsx)(f.Z,{icon:"eva:minus-fill",width:16})}),n,(0,a.jsx)(j.Z,{size:"small",color:"inherit",onClick:r,disabled:l,sx:{color:"text.secondary"},children:(0,a.jsx)(f.Z,{icon:"eva:plus-fill",width:16})})]}))}));m.propTypes={sx:x().object,onDecrease:x().func,onIncrease:x().func,quantity:x().number,disabledDecrease:x().bool,disabledIncrease:x().bool};var v=m},60656:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(1413),r=n(45987),s=n(35898),o=n(61113),a=n(59063),l=n(46417),c=["title","description","img","sx"];function d(e){var t=e.title,n=e.description,d=e.img,u=e.sx,h=(0,r.Z)(e,c);return(0,l.jsxs)(s.Z,(0,i.Z)((0,i.Z)({alignItems:"center",justifyContent:"center",sx:(0,i.Z)({height:1,textAlign:"center",p:function(e){return e.spacing(8,2)}},u)},h),{},{children:[(0,l.jsx)(a.Z,{disabledEffect:!0,alt:"empty content",src:d||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,l.jsx)(o.Z,{variant:"h5",gutterBottom:!0,children:t}),n&&(0,l.jsx)(o.Z,{variant:"body2",sx:{color:"text.secondary"},children:n})]}))}},54045:function(e,t,n){function i(e,t,n){return e>0?Math.max(0,(1+e)*t-n):0}function r(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function s(e,t){return"desc"===e?function(e,n){return r(e,n,t)}:function(e,n){return-r(e,n,t)}}n.d(t,{$W:function(){return m},K:function(){return C},et:function(){return x},S_:function(){return M},Z4:function(){return R},hM:function(){return g},fQ:function(){return i},sQ:function(){return s},x6:function(){return l}});var o=n(29439),a=n(47313);function l(e){var t=(0,a.useState)(!(null===e||void 0===e||!e.defaultDense)),n=(0,o.Z)(t,2),i=n[0],r=n[1],s=(0,a.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),l=(0,o.Z)(s,2),c=l[0],d=l[1],u=(0,a.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),h=(0,o.Z)(u,2),x=h[0],Z=h[1],p=(0,a.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),j=(0,o.Z)(p,2),f=j[0],g=j[1],m=(0,a.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),v=(0,o.Z)(m,2),b=v[0],w=v[1],y=(0,a.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),k=(0,o.Z)(y,2),C=k[0],P=k[1],S=(0,a.useCallback)((function(e){""!==e&&(Z(c===e&&"asc"===x?"desc":"asc"),d(e))}),[x,c]),I=(0,a.useCallback)((function(e){var t=C.indexOf(e),n=[];-1===t?n=n.concat(C,e):0===t?n=n.concat(C.slice(1)):t===C.length-1?n=n.concat(C.slice(0,-1)):t>0&&(n=n.concat(C.slice(0,t),C.slice(t+1))),P(n)}),[C]),R=(0,a.useCallback)((function(e,t){P(e?t:[])}),[]),T=(0,a.useCallback)((function(e,t){g(t)}),[]),D=(0,a.useCallback)((function(e){g(0),w(parseInt(e.target.value,10))}),[]),O=(0,a.useCallback)((function(e){r(e.target.checked)}),[]);return{dense:i,order:x,page:f,orderBy:c,rowsPerPage:b,selected:C,onSelectRow:I,onSelectAllRows:R,onSort:S,onChangePage:T,onChangeDense:O,onChangeRowsPerPage:D,setPage:g,setDense:r,setOrder:Z,setOrderBy:d,setSelected:P,setRowsPerPage:w}}var c=n(24076),d=n(67478),u=n(60656),h=n(46417);function x(e){var t=e.isNotFound;return(0,h.jsx)(c.Z,{children:t?(0,h.jsx)(d.Z,{colSpan:12,children:(0,h.jsx)(u.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,h.jsx)(d.Z,{colSpan:12,sx:{p:0}})})}var Z=n(1413),p=n(36459),j=n(35898),f=n(84488);function g(e){var t=Object.assign({},((0,p.Z)(e),e));return(0,h.jsx)(c.Z,(0,Z.Z)((0,Z.Z)({},t),{},{children:(0,h.jsx)(d.Z,{colSpan:12,children:(0,h.jsxs)(j.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,h.jsx)(f.Z,{variant:"rectangular",width:40,height:40,sx:{borderRadius:1,flexShrink:0}}),(0,h.jsx)(f.Z,{variant:"text",width:"100%",height:20}),(0,h.jsx)(f.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(f.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(f.Z,{variant:"text",width:160,height:20}),(0,h.jsx)(f.Z,{variant:"text",width:160,height:20})]})})}))}function m(e){var t=e.emptyRows,n=e.height;return t?(0,h.jsx)(c.Z,{sx:(0,Z.Z)({},n&&{height:n*t}),children:(0,h.jsx)(d.Z,{colSpan:9})}):null}var v=n(23477),b=n(44758),w=n(82558),y=n(57829),k={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function C(e){var t=e.order,n=e.orderBy,i=e.rowCount,r=void 0===i?0:i,s=e.headLabel,o=e.numSelected,a=void 0===o?0:o,l=e.onSort,u=e.onSelectAllRows,x=e.sx;return(0,h.jsx)(v.Z,{sx:x,children:(0,h.jsxs)(c.Z,{children:[u&&(0,h.jsx)(d.Z,{padding:"checkbox",children:(0,h.jsx)(b.Z,{indeterminate:a>0&&a<r,checked:r>0&&a===r,onChange:function(e){return u(e.target.checked)}})}),s.map((function(e){return(0,h.jsx)(d.Z,{align:e.align||"left",sortDirection:n===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:l?(0,h.jsxs)(w.Z,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:function(){return l(e.id)},sx:{textTransform:"capitalize"},children:[e.label,n===e.id?(0,h.jsx)(y.Z,{sx:(0,Z.Z)({},k),children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var P=n(45987),S=n(61113),I=["dense","action","rowCount","numSelected","onSelectAllRows","sx"];function R(e){var t=e.dense,n=e.action,i=e.rowCount,r=e.numSelected,s=e.onSelectAllRows,o=e.sx,a=(0,P.Z)(e,I);return r?(0,h.jsxs)(j.Z,(0,Z.Z)((0,Z.Z)({direction:"row",alignItems:"center",sx:(0,Z.Z)((0,Z.Z)({pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter"},t&&{height:38}),o)},a),{},{children:[(0,h.jsx)(b.Z,{indeterminate:r>0&&r<i,checked:i>0&&r===i,onChange:function(e){return s(e.target.checked)}}),(0,h.jsxs)(S.Z,{variant:"subtitle1",sx:(0,Z.Z)({ml:2,flexGrow:1,color:"primary.main"},t&&{ml:3}),children:[r," selected"]}),n&&n]})):null}var T=n(41493),D=n(83929),O=n(67426),B=["dense","onChangeDense","rowsPerPageOptions","sx"];function M(e){var t=e.dense,n=e.onChangeDense,i=e.rowsPerPageOptions,r=void 0===i?[5,10,25]:i,s=e.sx,o=(0,P.Z)(e,B);return(0,h.jsxs)(y.Z,{sx:(0,Z.Z)({position:"relative"},s),children:[(0,h.jsx)(T.Z,(0,Z.Z)({rowsPerPageOptions:r,component:"div"},o)),n&&(0,h.jsx)(D.Z,{label:"Dense",control:(0,h.jsx)(O.Z,{checked:t,onChange:n}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},49713:function(e,t,n){n.r(t),n.d(t,{default:function(){return ve}});var i=n(65964),r=n(19860),s=n(70178),o=n(9019),a=n(69904),l=n(50152),c=n(29439),d=n(1413),u=n(45987),h=n(47313),x=n(89600),Z=n(46725),p=n(73428),j=n(54641),f=n(51629),g=n(66835),m=n(57861),v=n(19536),b=n(57829),w=n(24193),y=n(24076),k=n(67478),C=n(35898),P=n(63585),S=n(61113),I=n(47131),R=n(51405),T=n(86259),D=n(8730),O=n(53261),B=n(22608),M=n(54045),z=n(46417),F=["title","subheader","tableLabels","tableData"];function N(e){var t=e.title,n=e.subheader,i=e.tableLabels,r=e.tableData,s=(0,u.Z)(e,F);return(0,z.jsxs)(p.Z,(0,d.Z)((0,d.Z)({},s),{},{children:[(0,z.jsx)(j.Z,{title:t,subheader:n,sx:{mb:3}}),(0,z.jsx)(f.Z,{sx:{overflow:"unset"},children:(0,z.jsx)(O.Z,{children:(0,z.jsxs)(g.Z,{sx:{minWidth:960},children:[(0,z.jsx)(M.K,{headLabel:i}),(0,z.jsx)(m.Z,{children:r.map((function(e){return(0,z.jsx)(A,{row:e},e.id)}))})]})})}),(0,z.jsx)(v.Z,{}),(0,z.jsx)(b.Z,{sx:{p:2,textAlign:"right"},children:(0,z.jsx)(w.Z,{size:"small",color:"inherit",endIcon:(0,z.jsx)(D.Z,{icon:"eva:arrow-ios-forward-fill"}),children:"View All"})})]}))}function A(e){var t=e.row,n="light"===(0,r.Z)().palette.mode,i=(0,h.useState)(null),s=(0,c.Z)(i,2),o=s[0],a=s[1],l=function(){a(null)};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(y.Z,{children:[(0,z.jsx)(k.Z,{children:(0,z.jsxs)(C.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,z.jsx)(P.Z,{alt:t.name,src:t.avatar}),(0,z.jsx)(S.Z,{variant:"subtitle2",children:t.name})]})}),(0,z.jsx)(k.Z,{children:(0,x.Z)(new Date(t.checkIn),"dd MMM yyyy")}),(0,z.jsx)(k.Z,{children:(0,x.Z)(new Date(t.checkOut),"dd MMM yyyy")}),(0,z.jsx)(k.Z,{children:(0,z.jsx)(T.Z,{variant:n?"soft":"filled",color:("paid"===t.status?"success":"pending"===t.status&&"warning")||"error",children:(0,Z.G)(t.status)})}),(0,z.jsx)(k.Z,{children:t.phoneNumber}),(0,z.jsx)(k.Z,{sx:{textTransform:"capitalize"},children:t.roomType}),(0,z.jsx)(k.Z,{align:"right",children:(0,z.jsx)(I.Z,{color:o?"inherit":"default",onClick:function(e){a(e.currentTarget)},children:(0,z.jsx)(D.Z,{icon:"eva:more-vertical-fill"})})})]}),(0,z.jsxs)(B.Z,{open:o,onClose:l,arrow:"right-top",sx:{width:160},children:[(0,z.jsxs)(R.Z,{onClick:function(){l(),console.log("DOWNLOAD",t.id)},children:[(0,z.jsx)(D.Z,{icon:"eva:download-fill"}),"Download"]}),(0,z.jsxs)(R.Z,{onClick:function(){l(),console.log("PRINT",t.id)},children:[(0,z.jsx)(D.Z,{icon:"eva:printer-fill"}),"Print"]}),(0,z.jsxs)(R.Z,{onClick:function(){l(),console.log("SHARE",t.id)},children:[(0,z.jsx)(D.Z,{icon:"eva:share-fill"}),"Share"]}),(0,z.jsx)(v.Z,{sx:{borderStyle:"dashed"}}),(0,z.jsxs)(R.Z,{onClick:function(){l(),console.log("DELETE",t.id)},sx:{color:"error.main"},children:[(0,z.jsx)(D.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]})]})}var L=n(17551),q=n(94149),W=n(76221),E=["title","subheader","data"];function Y(e){var t=e.title,n=e.subheader,i=e.data,r=(0,u.Z)(e,E);return(0,z.jsxs)(p.Z,(0,d.Z)((0,d.Z)({},r),{},{children:[(0,z.jsx)(j.Z,{title:t,subheader:n}),(0,z.jsx)(C.Z,{spacing:3,sx:{px:3,my:5},children:i.map((function(e){return(0,z.jsx)(q.Z,{variant:"determinate",value:e.value,color:("Pending"===e.status?"warning":"Cancel"===e.status&&"error")||"success",sx:{height:8,bgcolor:function(e){return(0,L.Fq)(e.palette.grey[500],.16)}}},e.status)}))}),(0,z.jsx)(C.Z,{direction:"row",justifyContent:"space-between",sx:{px:3,pb:3},children:i.map((function(e){return(0,z.jsxs)(C.Z,{alignItems:"center",children:[(0,z.jsxs)(C.Z,{direction:"row",alignItems:"center",spacing:1,sx:{mb:1},children:[(0,z.jsx)(b.Z,{sx:(0,d.Z)((0,d.Z)({width:12,height:12,borderRadius:.5,bgcolor:"success.main"},"Pending"===e.status&&{bgcolor:"warning.main"}),"Cancel"===e.status&&{bgcolor:"error.main"})}),(0,z.jsx)(S.Z,{variant:"subtitle2",sx:{color:"text.secondary"},children:e.status})]}),(0,z.jsx)(S.Z,{variant:"h6",children:(0,W.v1)(e.quantity)})]},e.status)}))})]}))}var _=n(47284),J=["total","percent","color","chart","sx"];function Q(e){var t=e.total,n=e.percent,i=e.color,s=void 0===i?"primary":i,o=e.chart,a=e.sx,l=(0,u.Z)(e,J),c=(0,r.Z)(),h=o.series,x=o.options,Z=(0,_.Q8)((0,d.Z)({colors:[c.palette[s].main],chart:{sparkline:{enabled:!0}},xaxis:{labels:{show:!1}},yaxis:{labels:{show:!1}},stroke:{width:4},legend:{show:!1},grid:{show:!1},tooltip:{marker:{show:!1},y:{formatter:function(e){return(0,W.e_)(e)},title:{formatter:function(){return""}}}},fill:{gradient:{opacityFrom:0,opacityTo:0}}},x));return(0,z.jsxs)(p.Z,(0,d.Z)((0,d.Z)({sx:(0,d.Z)({p:3,boxShadow:0,color:"".concat(s,".darker"),bgcolor:"".concat(s,".lighter")},a)},l),{},{children:[(0,z.jsxs)(C.Z,{direction:"row",justifyContent:"space-between",sx:{mb:3},children:[(0,z.jsxs)("div",{children:[(0,z.jsx)(S.Z,{sx:{mb:2,typography:"subtitle2"},children:"Total Incomes"}),(0,z.jsx)(S.Z,{sx:{typography:"h3"},children:(0,W.e_)(t)})]}),(0,z.jsxs)("div",{children:[(0,z.jsxs)(C.Z,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{mb:.6},children:[(0,z.jsx)(D.Z,{icon:n>=0?"eva:trending-up-fill":"eva:trending-down-fill"}),(0,z.jsxs)(S.Z,{variant:"subtitle2",component:"span",sx:{ml:.5},children:[n>0&&"+",(0,W.f2)(n)]})]}),(0,z.jsx)(S.Z,{variant:"body2",component:"span",sx:{opacity:.72},children:"\xa0than last month"})]})]}),(0,z.jsx)(_.ZP,{type:"area",series:[{data:h}],options:Z,height:132})]}))}var H=n(88718),K=n.n(H),G=["title","subheader","chart"];function X(e){var t=e.title,n=e.subheader,i=e.chart,s=(0,u.Z)(e,G),o=(0,r.Z)(),a=i.colors,l=i.series,c=i.options,h=K()(l,"value"),x=l.filter((function(e){return"Sold out"===e.label}))[0].value/h*100,Z=a||[o.palette.primary.light,o.palette.primary.main],f=(0,_.Q8)((0,d.Z)({legend:{show:!1},grid:{padding:{top:-32,bottom:-32}},fill:{type:"gradient",gradient:{colorStops:[Z].map((function(e){return[{offset:0,color:e[0]},{offset:100,color:e[1]}]}))}},plotOptions:{radialBar:{hollow:{size:"64%"},dataLabels:{name:{offsetY:-16},value:{offsetY:8},total:{label:"Rooms",formatter:function(){return(0,W.FK)(h)}}}}}},c));return(0,z.jsxs)(p.Z,(0,d.Z)((0,d.Z)({},s),{},{children:[(0,z.jsx)(j.Z,{title:t,subheader:n,sx:{mb:8}}),(0,z.jsx)(_.ZP,{type:"radialBar",series:[x],options:f,height:310}),(0,z.jsx)(C.Z,{spacing:2,sx:{p:5},children:l.map((function(e){return(0,z.jsx)($,{item:e},e.label)}))})]}))}function $(e){var t=e.item;return(0,z.jsxs)(C.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,z.jsxs)(C.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,z.jsx)(b.Z,{sx:(0,d.Z)({width:16,height:16,bgcolor:function(e){return(0,L.Fq)(e.palette.grey[500],.16)},borderRadius:.75},"Sold out"===t.label&&{bgcolor:"primary.main"})}),(0,z.jsx)(S.Z,{variant:"subtitle2",sx:{color:"text.secondary"},children:t.label})]}),(0,z.jsxs)(S.Z,{variant:"subtitle1",children:[" ",t.value," Rooms"]})]})}var U=n(70501),V=n(14322),ee=n(59063),te=n(26253),ne=["title","subheader","list","sx"];function ie(e){var t=e.title,n=e.subheader,i=e.list,s=e.sx,o=(0,u.Z)(e,ne),a=(0,r.Z)(),l=(0,h.useRef)(null),c={dots:!1,arrows:!1,slidesToShow:4,slidesToScroll:1,rtl:Boolean("rtl"===a.direction),responsive:[{breakpoint:a.breakpoints.values.lg,settings:{slidesToShow:3}},{breakpoint:a.breakpoints.values.md,settings:{slidesToShow:2}},{breakpoint:a.breakpoints.values.sm,settings:{slidesToShow:1}}]};return(0,z.jsxs)(b.Z,(0,d.Z)((0,d.Z)({sx:(0,d.Z)({py:2},s)},o),{},{children:[(0,z.jsx)(j.Z,{title:t,subheader:n,action:(0,z.jsx)(te.i5,{onNext:function(){var e;null===(e=l.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=l.current)||void 0===e||e.slickPrev()}}),sx:{p:0,mb:3,"& .MuiCardHeader-action":{alignSelf:"center"}}}),(0,z.jsx)(te.ZP,(0,d.Z)((0,d.Z)({ref:l},c),{},{children:i.map((function(e){return(0,z.jsx)(re,{item:e},e.id)}))}))]}))}function re(e){var t=e.item,n=t.avatar,i=t.name,r=t.roomNumber,s=t.bookdAt,o=t.person,a=t.cover,l=t.roomType;return(0,z.jsxs)(U.Z,{sx:{mx:1.5,borderRadius:2,bgcolor:"background.neutral"},children:[(0,z.jsxs)(C.Z,{spacing:2.5,sx:{p:3,pb:2.5},children:[(0,z.jsxs)(C.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,z.jsx)(P.Z,{alt:i,src:n}),(0,z.jsxs)("div",{children:[(0,z.jsx)(S.Z,{variant:"subtitle2",children:i}),(0,z.jsx)(S.Z,{variant:"caption",sx:{color:"text.disabled",mt:.5,display:"block"},children:(0,V.zM)(s)})]})]}),(0,z.jsxs)(C.Z,{direction:"row",alignItems:"center",spacing:3,sx:{color:"text.secondary"},children:[(0,z.jsxs)(C.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,z.jsx)(D.Z,{icon:"ic:round-vpn-key",width:16}),(0,z.jsxs)(S.Z,{variant:"caption",children:["Room ",r]})]}),(0,z.jsxs)(C.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,z.jsx)(D.Z,{icon:"eva:people-fill",width:16}),(0,z.jsxs)(S.Z,{variant:"caption",children:[o," Person"]})]})]})]}),(0,z.jsxs)(b.Z,{sx:{p:1,position:"relative"},children:[(0,z.jsx)(T.Z,{variant:"filled",color:("king"===l?"error":"double"===l&&"info")||"warning",sx:{right:16,zIndex:9,bottom:16,position:"absolute"},children:l}),(0,z.jsx)(ee.Z,{alt:"cover",src:a,ratio:"1/1",sx:{borderRadius:1.5}})]})]})}var se=n(66281),oe=["chart"],ae={width:106,height:106};function le(e){var t=e.chart,n=(0,u.Z)(e,oe),i=(0,r.Z)(),s=(0,se.Z)("up","sm"),o=t.colors,a=t.series,l=t.options,c=(0,_.Q8)((0,d.Z)({chart:{sparkline:{enabled:!0}},grid:{padding:{top:-9,bottom:-9}},legend:{show:!1},plotOptions:{radialBar:{hollow:{size:"64%"},track:{margin:0},dataLabels:{name:{show:!1},value:{offsetY:6,fontSize:i.typography.subtitle2.fontSize}}}}},l)),h=(0,d.Z)((0,d.Z)({},c),{},{colors:o});return(0,z.jsx)(p.Z,(0,d.Z)((0,d.Z)({},n),{},{children:(0,z.jsx)(C.Z,{direction:{xs:"column",sm:"row"},divider:(0,z.jsx)(v.Z,{orientation:s?"vertical":"horizontal",flexItem:!0,sx:{borderStyle:"dashed"}}),children:a.map((function(e,t){return(0,z.jsxs)(C.Z,{direction:"row",alignItems:"center",justifyContent:"center",spacing:3,sx:{width:1,py:5},children:[(0,z.jsx)(_.ZP,(0,d.Z)({type:"radialBar",series:[e.percent],options:1===t?h:c},ae)),(0,z.jsxs)("div",{children:[(0,z.jsx)(S.Z,{variant:"h4",sx:{mb:.5},children:(0,W.FK)(e.total)}),(0,z.jsx)(S.Z,{variant:"body2",sx:{opacity:.72},children:e.label})]})]},e.label)}))})}))}var ce=n(55942),de=n(66212),ue=["title","subheader","list"];function he(e){var t=e.title,n=e.subheader,i=e.list,s=(0,u.Z)(e,ue),o=(0,r.Z)(),a=(0,h.useRef)(null),l=(0,h.useState)(0),x=(0,c.Z)(l,2),Z=x[0],f=x[1],g=i.find((function(e,t){return t===Z})),m={dots:!1,arrows:!1,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,rtl:Boolean("rtl"===o.direction),beforeChange:function(e,t){return f(t)}};return(0,z.jsxs)(p.Z,(0,d.Z)((0,d.Z)({},s),{},{children:[(0,z.jsx)(j.Z,{title:t,subheader:n,action:(0,z.jsx)(te.i5,{onNext:function(){var e;null===(e=a.current)||void 0===e||e.slickNext()},onPrevious:function(){var e;null===(e=a.current)||void 0===e||e.slickPrev()}}),sx:{"& .MuiCardHeader-action":{alignSelf:"center"}}}),(0,z.jsx)(te.ZP,(0,d.Z)((0,d.Z)({ref:a},m),{},{children:i.map((function(e){return(0,z.jsx)(xe,{item:e},e.id)}))})),(0,z.jsxs)(C.Z,{spacing:2,direction:"row",alignItems:"flex-end",sx:{p:o.spacing(0,3,3,3)},children:[(0,z.jsx)(w.Z,{fullWidth:!0,color:"success",variant:"contained",startIcon:(0,z.jsx)(D.Z,{icon:"eva:checkmark-circle-2-fill"}),onClick:function(){return console.log("ACCEPT",null===g||void 0===g?void 0:g.id)},children:"Accept"}),(0,z.jsx)(w.Z,{fullWidth:!0,color:"error",variant:"contained",startIcon:(0,z.jsx)(D.Z,{icon:"eva:close-circle-fill"}),onClick:function(){return console.log("REJECT",null===g||void 0===g?void 0:g.id)},children:"Reject"})]})]}))}function xe(e){var t=e.item,n=t.avatar,i=t.name,r=t.description,s=t.rating,o=t.postedAt,a=t.tags;return(0,z.jsxs)(C.Z,{spacing:2,sx:{position:"relative",p:function(e){return e.spacing(3,3,2,3)}},children:[(0,z.jsxs)(C.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,z.jsx)(P.Z,{alt:i,src:n}),(0,z.jsxs)("div",{children:[(0,z.jsx)(S.Z,{variant:"subtitle2",children:i}),(0,z.jsxs)(S.Z,{variant:"caption",sx:{color:"text.secondary",mt:.5,display:"block"},children:["Posted ",(0,V.zM)(o)]})]})]}),(0,z.jsx)(ce.Z,{value:s,size:"small",readOnly:!0,precision:.5}),(0,z.jsx)(S.Z,{variant:"body2",children:r}),(0,z.jsx)(C.Z,{direction:"row",flexWrap:"wrap",children:a.map((function(e){return(0,z.jsx)(de.Z,{size:"small",label:e,sx:{mr:1,mb:1,color:"text.secondary"}},e)}))})]})}var Ze=n(49372),pe=["title","subheader","chart"];function je(e){var t=e.title,n=e.subheader,i=e.chart,r=(0,u.Z)(e,pe),s=i.categories,o=i.colors,a=i.series,l=i.options,x=(0,h.useState)("Year"),Z=(0,c.Z)(x,2),f=Z[0],g=Z[1],m=(0,_.Q8)((0,d.Z)({colors:o,stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:s},tooltip:{y:{formatter:function(e){return"$".concat(e)}}}},l));return(0,z.jsxs)(p.Z,(0,d.Z)((0,d.Z)({},r),{},{children:[(0,z.jsx)(j.Z,{title:t,subheader:n,action:(0,z.jsx)(Ze.fY,{value:f,onChange:function(e){return g(e.target.value)},children:a.map((function(e){return(0,z.jsx)("option",{value:e.type,children:e.type},e.type)}))})}),a.map((function(e){return(0,z.jsx)(b.Z,{sx:{mt:3,mx:3},dir:"ltr",children:e.type===f&&(0,z.jsx)(_.ZP,{type:"bar",series:e.data,options:m,height:364})},e.type)}))]}))}var fe=["title","total","icon","sx"];function ge(e){var t=e.title,n=e.total,i=e.icon,r=e.sx,s=(0,u.Z)(e,fe);return(0,z.jsxs)(p.Z,(0,d.Z)((0,d.Z)({sx:(0,d.Z)({display:"flex",alignItems:"center",justifyContent:"space-between",p:2,pl:3},r)},s),{},{children:[(0,z.jsxs)("div",{children:[(0,z.jsx)(S.Z,{variant:"h3",children:(0,W.v1)(n)}),(0,z.jsx)(S.Z,{variant:"subtitle2",sx:{color:"text.secondary"},children:t})]}),(0,z.jsx)(b.Z,{sx:{width:120,height:120,lineHeight:0,borderRadius:"50%",bgcolor:"background.neutral"},children:i})]}))}var me=n(59479);function ve(){var e=(0,r.Z)(),t=(0,l.K$)().themeStretch;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(i.ql,{children:(0,z.jsx)("title",{children:" General: Booking | Minimal UI"})}),(0,z.jsx)(s.Z,{maxWidth:!t&&"xl",children:(0,z.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,z.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,z.jsx)(ge,{title:"Total Booking",total:714e3,icon:(0,z.jsx)(me.s,{})})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,z.jsx)(ge,{title:"Check In",total:311e3,icon:(0,z.jsx)(me.EY,{})})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,z.jsx)(ge,{title:"Check Out",total:124e3,icon:(0,z.jsx)(me.Nw,{})})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,md:8,children:(0,z.jsxs)(o.ZP,{container:!0,spacing:3,children:[(0,z.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,z.jsx)(Q,{total:18765,percent:2.6,chart:{series:[111,136,76,108,74,54,57,84]}})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,z.jsx)(Y,{title:"Booked Room",data:a.JJ})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,md:12,children:(0,z.jsx)(le,{chart:{colors:[e.palette.warning.main],series:[{label:"Check In",percent:72,total:38566},{label:"Check Out",percent:64,total:18472}]}})})]})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,z.jsx)(X,{title:"Room Available",chart:{series:[{label:"Sold out",value:120},{label:"Available",value:66}]}})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,md:8,children:(0,z.jsx)(je,{title:"Reservation Stats",subheader:"(+43% Check In | +12% Check Out) than last year",chart:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],series:[{type:"Week",data:[{name:"Check In",data:[10,41,35,151,49,62,69,91,48]},{name:"Check Out",data:[10,34,13,56,77,88,99,77,45]}]},{type:"Month",data:[{name:"Check In",data:[148,91,69,62,49,51,35,41,10]},{name:"Check Out",data:[45,77,99,88,77,56,13,34,10]}]},{type:"Year",data:[{name:"Check In",data:[76,42,29,41,27,138,117,86,63]},{name:"Check Out",data:[80,55,34,114,80,130,15,28,55]}]}]}})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,md:4,children:(0,z.jsx)(he,{title:"Customer Reviews",subheader:"".concat(a.tT.length," Reviews"),list:a.tT})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,children:(0,z.jsx)(ie,{title:"Newest Booking",subheader:"12 Booking",list:a.ut})}),(0,z.jsx)(o.ZP,{item:!0,xs:12,children:(0,z.jsx)(N,{title:"Booking Details",tableData:a.VY,tableLabels:[{id:"booker",label:"Booker"},{id:"checkIn",label:"Check In"},{id:"checkOut",label:"Check Out"},{id:"status",label:"Status"},{id:"phone",label:"Phone"},{id:"roomType",label:"Room Type"},{id:""}]})})]})})]})}}}]);