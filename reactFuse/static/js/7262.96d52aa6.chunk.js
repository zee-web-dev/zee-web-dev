"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[7262],{44269:function(e,n,t){t.d(n,{Z:function(){return C}});var o=t(29439),a=t(98655),i=t(73428),r=t(83061),s=t(47313),m=t(17551),c=t(9506),l=t(1413),d=t(45987),h=t(1168),p=t(87327),u=t(20617),f=t(86173),g=t(259),x=t(19860),y=t(88564),b=t(70499),Z=t(46417),j=["children","name"];function v(e){var n=e.children,t=e.document,o=(0,x.Z)();s.useEffect((function(){t.body.dir=o.direction}),[t,o.direction]);var a=s.useMemo((function(){return(0,u.Z)({key:"iframe-demo-".concat(o.direction),prepend:!0,container:t.head,stylisPlugins:"rtl"===o.direction?[p.Z]:[]})}),[t,o.direction]),i=s.useCallback((function(){return t.defaultView}),[t]);return(0,Z.jsx)(g.StyleSheetManager,{target:t.head,stylisPlugins:"rtl"===o.direction?[p.Z]:[],children:(0,Z.jsxs)(f.C,{value:a,children:[(0,Z.jsx)(b.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),s.cloneElement(n,{window:i})]})})}var w=(0,y.ZP)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function k(e){var n,t=e.children,a=e.name,i=(0,d.Z)(e,j),r="".concat(a," demo"),m=s.useRef(null),c=s.useReducer((function(){return!0}),!1),p=(0,o.Z)(c,2),u=p[0],f=p[1];s.useEffect((function(){var e=m.current.contentDocument;null==e||"complete"!==e.readyState||u||f()}),[u]);var g=null===(n=m.current)||void 0===n?void 0:n.contentDocument;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(w,(0,l.Z)({onLoad:f,ref:m,title:r},i)),!1!==u?h.createPortal((0,Z.jsx)(v,{document:g,children:t}),g.body):null]})}var M=s.memo(k);function N(e){var n=(0,s.useState)(e.currentTabIndex),t=(0,o.Z)(n,2),l=t[0],d=(t[1],e.component),h=e.raw,p=e.iframe,u=e.className,f=e.name;return(0,Z.jsxs)(i.Z,{className:(0,r.default)(u,"shadow"),sx:{backgroundColor:function(e){return(0,m._j)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)}},children:[(0,Z.jsx)(c.Z,{sx:{backgroundColor:function(e){return(0,m._j)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)}}}),(0,Z.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,Z.jsx)("div",{className:0===l?"flex flex-1 max-w-full":"hidden",children:d&&(p?(0,Z.jsx)(M,{name:f,children:(0,Z.jsx)(d,{})}):(0,Z.jsx)("div",{className:"w-full",children:(0,Z.jsx)(d,{})}))}),(0,Z.jsx)("div",{className:1===l?"flex flex-1":"hidden",children:h&&(0,Z.jsx)("div",{className:"flex flex-1",children:(0,Z.jsx)(a.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:h.default})})})]})]})}N.defaultProps={name:"",currentTabIndex:0};var C=N},41194:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(1413),a=(t(47313),t(9506)),i=t(88564),r=t(82295),s=t(82403),m=t(46417),c=[150,30,90,70,110,150,130,80,50,90,100,150,30,50,80],l=(0,i.ZP)(r.Z)((function(e){var n=e.theme;return(0,o.Z)((0,o.Z)({backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff"},n.typography.body2),{},{padding:n.spacing(.5),textAlign:"center",color:n.palette.text.secondary})}));function d(){return(0,m.jsx)(a.Z,{sx:{width:500,minHeight:393},children:(0,m.jsx)(s.ZP,{columns:4,spacing:2,children:c.map((function(e,n){return(0,m.jsx)(l,{sx:{height:e},children:n+1},n)}))})})}},24330:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(1413),a=(t(47313),t(9506)),i=t(88564),r=t(82295),s=t(82403),m=t(46417),c=[150,30,90,70,90,100,150,30,50,80],l=(0,i.ZP)(r.Z)((function(e){var n=e.theme;return(0,o.Z)((0,o.Z)({backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff"},n.typography.body2),{},{padding:n.spacing(.5),textAlign:"center",color:n.palette.text.secondary})}));function d(){return(0,m.jsx)(a.Z,{sx:{width:500,minHeight:253},children:(0,m.jsx)(s.ZP,{columns:4,spacing:2,children:c.map((function(e,n){return(0,m.jsx)(l,{sx:{height:e},children:n+1},n)}))})})}},79069:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(1413),a=(t(47313),t(9506)),i=t(88564),r=t(82295),s=t(82403),m=t(46417),c=[150,30,90,70,90,100,150,30,50,80],l=(0,i.ZP)(r.Z)((function(e){var n=e.theme;return(0,o.Z)((0,o.Z)({backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff"},n.typography.body2),{},{padding:n.spacing(.5),textAlign:"center",color:n.palette.text.secondary})}));function d(){return(0,m.jsx)(a.Z,{sx:{width:500,minHeight:377},children:(0,m.jsx)(s.ZP,{columns:3,spacing:3,children:c.map((function(e,n){return(0,m.jsx)(l,{sx:{height:e},children:n+1},n)}))})})}},54059:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(1413),a=(t(47313),t(9506)),i=t(82295),r=t(82403),s=t(88564),m=t(46417),c=(0,s.ZP)(i.Z)((function(e){var n=e.theme;return(0,o.Z)((0,o.Z)({backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff"},n.typography.body2),{},{padding:n.spacing(.5),textAlign:"center",color:n.palette.text.secondary,borderBottomLeftRadius:0,borderBottomRightRadius:0})}));function l(){return(0,m.jsx)(a.Z,{sx:{width:500,minHeight:829},children:(0,m.jsx)(r.ZP,{columns:3,spacing:2,children:d.map((function(e,n){return(0,m.jsxs)("div",{children:[(0,m.jsx)(c,{children:n+1}),(0,m.jsx)("img",{src:"".concat(e.img,"?w=162&auto=format"),srcSet:"".concat(e.img,"?w=162&auto=format&dpr=2 2x"),alt:e.title,loading:"lazy",style:{borderBottomLeftRadius:4,borderBottomRightRadius:4,display:"block",width:"100%"}})]},n)}))})})}var d=[{img:"https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",title:"Fern"},{img:"https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",title:"Snacks"},{img:"https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",title:"Mushrooms"},{img:"https://images.unsplash.com/photo-1529655683826-aba9b3e77383",title:"Tower"},{img:"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",title:"Sea star"},{img:"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",title:"Honey"},{img:"https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",title:"Basketball"},{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast"},{img:"https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",title:"Tree"},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee"},{img:"https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",title:"Camping Car"},{img:"https://images.unsplash.com/photo-1533827432537-70133748f5c8",title:"Hats"},{img:"https://images.unsplash.com/photo-1567306301408-9b74779a11af",title:"Tomato basil"},{img:"https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",title:"Mountain"},{img:"https://images.unsplash.com/photo-1589118949245-7d38baf380d6",title:"Bike"}]},42377:function(e,n,t){t.d(n,{Z:function(){return f}});t(47313);var o=t(88564),a=t(6306),i=t(82403),r=t(52769),s=t(98492),m=t(61113),c=t(41872),l=t(9506),d=t(82295),h=t(46417),p=[150,30,90,70,90,100,150,30,50,80],u=(0,o.ZP)(r.Z)((function(e){var n=e.theme;return{backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff",color:n.palette.text.secondary}}));function f(){return(0,h.jsx)(l.Z,{sx:{width:500,minHeight:377},children:(0,h.jsx)(i.ZP,{columns:3,spacing:2,children:p.map((function(e,n){return(0,h.jsx)(d.Z,{children:(0,h.jsxs)(u,{sx:{minHeight:e},children:[(0,h.jsx)(s.Z,{expandIcon:(0,h.jsx)(a.Z,{}),children:(0,h.jsxs)(m.Z,{children:["Accordion ",n+1]})}),(0,h.jsx)(c.Z,{children:"Contents"})]})},n)}))})})}},71511:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(1413),a=(t(47313),t(9506)),i=t(88564),r=t(82295),s=t(82403),m=t(46417),c=[150,30,90,70,90,100,150,30,50,80],l=(0,i.ZP)(r.Z)((function(e){var n=e.theme;return(0,o.Z)((0,o.Z)({backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff"},n.typography.body2),{},{padding:n.spacing(.5),textAlign:"center",color:n.palette.text.secondary})}));function d(){return(0,m.jsx)(a.Z,{sx:{width:500,minHeight:253},children:(0,m.jsx)(s.ZP,{columns:{xs:3,sm:4},spacing:2,children:c.map((function(e,n){return(0,m.jsx)(l,{sx:{height:e},children:n+1},n)}))})})}},73267:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(1413),a=(t(47313),t(9506)),i=t(88564),r=t(82295),s=t(82403),m=t(46417),c=[150,30,90,70,90,100,150,30,50,80],l=(0,i.ZP)(r.Z)((function(e){var n=e.theme;return(0,o.Z)((0,o.Z)({backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff"},n.typography.body2),{},{padding:n.spacing(.5),textAlign:"center",color:n.palette.text.secondary})}));function d(){return(0,m.jsx)(a.Z,{sx:{width:500,minHeight:377},children:(0,m.jsx)(s.ZP,{columns:3,spacing:{xs:1,sm:2,md:3},children:c.map((function(e,n){return(0,m.jsx)(l,{sx:{height:e},children:n+1},n)}))})})}},49672:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(1413),a=(t(47313),t(9506)),i=t(88564),r=t(82295),s=t(82403),m=t(46417),c=[150,30,90,70,110,150,130,80,50,90,100,150,30,50,80],l=(0,i.ZP)(r.Z)((function(e){var n=e.theme;return(0,o.Z)((0,o.Z)({backgroundColor:"dark"===n.palette.mode?"#1A2027":"#fff"},n.typography.body2),{},{padding:n.spacing(.5),textAlign:"center",color:n.palette.text.secondary})}));function d(){return(0,m.jsx)(a.Z,{sx:{width:500,minHeight:393},children:(0,m.jsx)(s.ZP,{columns:4,spacing:2,defaultHeight:450,defaultColumns:4,defaultSpacing:1,children:c.map((function(e,n){return(0,m.jsx)(l,{sx:{height:e},children:n+1},n)}))})})}},27262:function(e,n,t){t.r(n);var o=t(44269),a=t(56993),i=t(24193),r=t(61113),s=t(46417);n.default=function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,s.jsx)(i.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/masonry",target:"_blank",role:"button",startIcon:(0,s.jsx)(a.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,s.jsx)(r.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Masonry"}),(0,s.jsx)(r.Z,{className:"description",children:"Masonry lays out contents of varying dimensions as blocks of the same width and different height with configurable gaps."}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:"Masonry maintains a list of content blocks with a consistent width but different height. The contents are ordered by row. If a row is already filled with the specified number of columns, the next item starts another row, and it is added to the shortest column in order to optimize the use of space."}),(0,s.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic masonry"}),(0,s.jsxs)(r.Z,{className:"mb-40",component:"div",children:["A simple example of a ",(0,s.jsx)("code",{children:"Masonry"}),". ",(0,s.jsx)("code",{children:"Masonry"})," is a container for one or more items. It can receive any element including ",(0,s.jsx)("code",{children:"<div />"})," and"," ",(0,s.jsx)("code",{children:"<img />"}),"."]}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(o.Z,{name:"BasicMasonry.js",className:"my-24",iframe:!1,component:t(41194).Z,raw:t(83251)})}),(0,s.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Image masonry"}),(0,s.jsxs)(r.Z,{className:"mb-40",component:"div",children:["This example demonstrates the use of ",(0,s.jsx)("code",{children:"Masonry"})," for images. ",(0,s.jsx)("code",{children:"Masonry"})," ","orders its children by row. If you'd like to order images by column, check out"," ",(0,s.jsx)("a",{href:"/material-ui/react-image-list/#masonry-image-list",children:"ImageList"}),"."]}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(o.Z,{name:"ImageMasonry.js",className:"my-24",iframe:!1,component:t(54059).Z,raw:t(79727)})}),(0,s.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Items with variable height"}),(0,s.jsxs)(r.Z,{className:"mb-40",component:"div",children:["This example demonstrates the use of ",(0,s.jsx)("code",{children:"Masonry"})," for items with variable height. Items can move to other columns in order to abide by the rule that items are always added to the shortest column and hence optimize the use of space."]}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(o.Z,{name:"MasonryWithVariableHeightItems.js",className:"my-24",iframe:!1,component:t(42377).Z,raw:t(67173)})}),(0,s.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Columns"}),(0,s.jsxs)(r.Z,{className:"mb-40",component:"div",children:["This example demonstrates the use of the ",(0,s.jsx)("code",{children:"columns"})," to configure the number of columns of a ",(0,s.jsx)("code",{children:"Masonry"}),"."]}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(o.Z,{name:"FixedColumns.js",className:"my-24",iframe:!1,component:t(24330).Z,raw:t(3344)})}),(0,s.jsxs)(r.Z,{className:"mb-40",component:"div",children:[(0,s.jsx)("code",{children:"columns"})," accepts responsive values:"]}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(o.Z,{name:"ResponsiveColumns.js",className:"my-24",iframe:!1,component:t(71511).Z,raw:t(42655)})}),(0,s.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Spacing"}),(0,s.jsxs)(r.Z,{className:"mb-40",component:"div",children:["This example demonstrates the use of the ",(0,s.jsx)("code",{children:"spacing"})," to configure the spacing between items. It is important to note that the value provided to the ",(0,s.jsx)("code",{children:"spacing"})," ","prop is multiplied by the theme's spacing field."]}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(o.Z,{name:"FixedSpacing.js",className:"my-24",iframe:!1,component:t(79069).Z,raw:t(82328)})}),(0,s.jsxs)(r.Z,{className:"mb-40",component:"div",children:[(0,s.jsx)("code",{children:"spacing"})," accepts responsive values:"]}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(o.Z,{name:"ResponsiveSpacing.js",className:"my-24",iframe:!1,component:t(73267).Z,raw:t(34757)})}),(0,s.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Server-side rendering"}),(0,s.jsxs)(r.Z,{className:"mb-40",component:"div",children:["This example demonstrates the use of the ",(0,s.jsx)("code",{children:"defaultHeight"}),","," ",(0,s.jsx)("code",{children:"defaultColumns"})," and ",(0,s.jsx)("code",{children:"defaultSpacing"}),", which are used to support server-side rendering."]}),(0,s.jsxs)(r.Z,{className:"mb-40",component:"div",children:[":::info",(0,s.jsx)("strong",{children:"Note"}),": ",(0,s.jsx)("code",{children:"defaultHeight"})," should be large enough to render all rows. Also, it is worth mentioning that items are not added to the shortest column in case of server-side rendering. :::"]}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(o.Z,{name:"SSRMasonry.js",className:"my-24",iframe:!1,component:t(49672).Z,raw:t(81138)})})]})}},6306:function(e,n,t){var o=t(95318);n.Z=void 0;var a=o(t(45045)),i=t(46417),r=(0,a.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=r},82403:function(e,n,t){t.d(n,{ZP:function(){return v}});var o=t(93433),a=t(29439),i=t(63366),r=t(87462),s=t(79637),m=t(88564),c=t(77342),l=t(54929),d=t(86886),h=t(13019),p=t(47472),u=t(83061),f=t(47313),g=t(11778);function x(e){return(0,g.Z)("MuiMasonry",e)}(0,t(29698).Z)("MuiMasonry",["root"]);var y=t(46417),b=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],Z=function(e){return Number(e.replace("px",""))},j=(0,m.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,t=e.theme,o={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"space-between",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},a={};if(n.isSSR){for(var i={},s=Number(t.spacing(n.defaultSpacing).replace("px","")),m=1;m<=n.defaultColumns;m+=1)i["&:nth-of-type(".concat(n.defaultColumns,"n+").concat(m%n.defaultColumns,")")]={order:m};return a.height=n.defaultHeight,a.margin=-s/2,a["& > *"]=(0,r.Z)({},o["& > *"],i,{margin:s/2,width:"calc(".concat((100/n.defaultColumns).toFixed(2),"% - ").concat(s,"px)")}),(0,r.Z)({},o,a)}var c=(0,l.P$)({values:n.spacing,breakpoints:t.breakpoints.values}),p=(0,d.hB)(t);o=(0,h.Z)(o,(0,l.k9)({theme:t},c,(function(e){var t=Number(e),o=Number((0,d.NA)(p,t).replace("px",""));return(0,r.Z)({margin:-o/2,"& > *":{margin:o/2}},n.maxColumnHeight&&{height:Math.ceil(n.maxColumnHeight+o)})})));var u=(0,l.P$)({values:n.columns,breakpoints:t.breakpoints.values});return o=(0,h.Z)(o,(0,l.k9)({theme:t},u,(function(e){var n=Number(e),t="".concat((100/n).toFixed(2),"%"),o="object"!==typeof c?(0,d.NA)(p,Number(c)):"0px";return{"& > *":{width:"calc(".concat(t," - ").concat(o,")")}}}))),"object"===typeof c&&(o=(0,h.Z)(o,(0,l.k9)({theme:t},c,(function(e,n){if(n){var t=Number(e),o=Object.keys(u).pop(),a=(0,d.NA)(p,t),i="object"===typeof u?u[n]||u[o]:u,r="".concat((100/i).toFixed(2),"%");return{"& > *":{width:"calc(".concat(r," - ").concat(a,")")}}}return null})))),o})),v=f.forwardRef((function(e,n){var t=(0,c.Z)({props:e,name:"MuiMasonry"}),m=t.children,l=t.className,d=t.component,h=void 0===d?"div":d,g=t.columns,v=void 0===g?4:g,w=t.spacing,k=void 0===w?1:w,M=t.defaultColumns,N=t.defaultHeight,C=t.defaultSpacing,B=(0,i.Z)(t,b),A=f.useRef(),P=f.useState(),S=(0,a.Z)(P,2),R=S[0],I=S[1],H=!R&&N&&void 0!==M&&void 0!==C,T=f.useState(H?M-1:0),E=(0,a.Z)(T,2),F=E[0],L=E[1],z=(0,r.Z)({},t,{spacing:k,columns:v,maxColumnHeight:R,defaultColumns:M,defaultHeight:N,defaultSpacing:C,isSSR:H}),D=function(e){var n=e.classes;return(0,s.Z)({root:["root"]},x,n)}(z),_=f.useRef("undefined"===typeof ResizeObserver?void 0:new ResizeObserver((function(e){if(A.current&&e&&0!==e.length){var n=A.current,t=A.current.firstChild,a=n.clientWidth,i=t.clientWidth;if(0!==a&&0!==i){var r=window.getComputedStyle(t),s=Z(r.marginLeft),m=Z(r.marginRight),c=Math.round(a/(i+s+m)),l=new Array(c).fill(0),d=!1;if(n.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!d){var n=window.getComputedStyle(e),t=Z(n.marginTop),a=Z(n.marginBottom),i=Z(n.height)?Math.ceil(Z(n.height))+t+a:0;if(0!==i){for(var r=0;r<e.childNodes.length;r+=1){var s=e.childNodes[r];if("IMG"===s.tagName&&0===s.clientHeight){d=!0;break}}if(!d){var m=l.indexOf(Math.min.apply(Math,(0,o.Z)(l)));l[m]+=i;var c=m+1;e.style.order=c}}else d=!0}})),!d)I(Math.max.apply(Math,(0,o.Z)(l))),L(c>0?c-1:0)}}})));f.useEffect((function(){var e=_.current;if(void 0!==e)return A.current&&A.current.childNodes.forEach((function(n){e.observe(n)})),function(){return e?e.disconnect():{}}}),[v,k,m]);var O=(0,p.Z)(n,A),W={flexBasis:"100%",width:0,margin:0,padding:0},$=new Array(F).fill("").map((function(e,n){return(0,y.jsx)("span",{"data-class":"line-break",style:(0,r.Z)({},W,{order:n+1})},n)}));return(0,y.jsxs)(j,(0,r.Z)({as:h,className:(0,u.default)(D.root,l),ref:O,ownerState:z},B,{children:[m,$]}))}))},83251:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport { styled } from '@mui/material/styles';\nimport Paper from '@mui/material/Paper';\nimport Masonry from '@mui/lab/Masonry';\n\nconst heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];\n\nconst Item = styled(Paper)(({ theme }) => ({\n  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',\n  ...theme.typography.body2,\n  padding: theme.spacing(0.5),\n  textAlign: 'center',\n  color: theme.palette.text.secondary,\n}));\n\nexport default function BasicMasonry() {\n  return (\n    <Box sx={{ width: 500, minHeight: 393 }}>\n      <Masonry columns={4} spacing={2}>\n        {heights.map((height, index) => (\n          <Item key={index} sx={{ height }}>\n            {index + 1}\n          </Item>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n"},3344:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport { styled } from '@mui/material/styles';\nimport Paper from '@mui/material/Paper';\nimport Masonry from '@mui/lab/Masonry';\n\nconst heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];\n\nconst Item = styled(Paper)(({ theme }) => ({\n  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',\n  ...theme.typography.body2,\n  padding: theme.spacing(0.5),\n  textAlign: 'center',\n  color: theme.palette.text.secondary,\n}));\n\nexport default function FixedColumns() {\n  return (\n    <Box sx={{ width: 500, minHeight: 253 }}>\n      <Masonry columns={4} spacing={2}>\n        {heights.map((height, index) => (\n          <Item key={index} sx={{ height }}>\n            {index + 1}\n          </Item>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n"},82328:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport { styled } from '@mui/material/styles';\nimport Paper from '@mui/material/Paper';\nimport Masonry from '@mui/lab/Masonry';\n\nconst heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];\n\nconst Item = styled(Paper)(({ theme }) => ({\n  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',\n  ...theme.typography.body2,\n  padding: theme.spacing(0.5),\n  textAlign: 'center',\n  color: theme.palette.text.secondary,\n}));\n\nexport default function FixedSpacing() {\n  return (\n    <Box sx={{ width: 500, minHeight: 377 }}>\n      <Masonry columns={3} spacing={3}>\n        {heights.map((height, index) => (\n          <Item key={index} sx={{ height }}>\n            {index + 1}\n          </Item>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n"},79727:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Paper from '@mui/material/Paper';\nimport Masonry from '@mui/lab/Masonry';\nimport { styled } from '@mui/material/styles';\n\nconst Label = styled(Paper)(({ theme }) => ({\n  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',\n  ...theme.typography.body2,\n  padding: theme.spacing(0.5),\n  textAlign: 'center',\n  color: theme.palette.text.secondary,\n  borderBottomLeftRadius: 0,\n  borderBottomRightRadius: 0,\n}));\n\nexport default function ImageMasonry() {\n  return (\n    <Box sx={{ width: 500, minHeight: 829 }}>\n      <Masonry columns={3} spacing={2}>\n        {itemData.map((item, index) => (\n          <div key={index}>\n            <Label>{index + 1}</Label>\n            <img\n              src={`${item.img}?w=162&auto=format`}\n              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}\n              alt={item.title}\n              loading=\"lazy\"\n              style={{\n                borderBottomLeftRadius: 4,\n                borderBottomRightRadius: 4,\n                display: 'block',\n                width: '100%',\n              }}\n            />\n          </div>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n\nconst itemData = [\n  {\n    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',\n    title: 'Fern',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',\n    title: 'Snacks',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',\n    title: 'Mushrooms',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',\n    title: 'Tower',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',\n    title: 'Sea star',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',\n    title: 'Honey',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',\n    title: 'Basketball',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',\n    title: 'Breakfast',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',\n    title: 'Tree',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',\n    title: 'Burger',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',\n    title: 'Camera',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',\n    title: 'Coffee',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',\n    title: 'Camping Car',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',\n    title: 'Hats',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',\n    title: 'Tomato basil',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',\n    title: 'Mountain',\n  },\n  {\n    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',\n    title: 'Bike',\n  },\n];\n"},67173:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport ExpandMoreIcon from '@mui/icons-material/ExpandMore';\nimport Masonry from '@mui/lab/Masonry';\nimport {\n  Accordion,\n  AccordionDetails,\n  AccordionSummary,\n  Typography,\n} from '@mui/material';\nimport Box from '@mui/material/Box';\nimport Paper from '@mui/material/Paper';\n\nconst heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];\n\nconst StyledAccordion = styled(Accordion)(({ theme }) => ({\n  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',\n  color: theme.palette.text.secondary,\n}));\n\nexport default function MasonryWithVariableHeightItems() {\n  return (\n    <Box sx={{ width: 500, minHeight: 377 }}>\n      <Masonry columns={3} spacing={2}>\n        {heights.map((height, index) => (\n          <Paper key={index}>\n            <StyledAccordion sx={{ minHeight: height }}>\n              <AccordionSummary expandIcon={<ExpandMoreIcon />}>\n                <Typography>Accordion {index + 1}</Typography>\n              </AccordionSummary>\n              <AccordionDetails>Contents</AccordionDetails>\n            </StyledAccordion>\n          </Paper>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n"},42655:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport { styled } from '@mui/material/styles';\nimport Paper from '@mui/material/Paper';\nimport Masonry from '@mui/lab/Masonry';\n\nconst heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];\n\nconst Item = styled(Paper)(({ theme }) => ({\n  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',\n  ...theme.typography.body2,\n  padding: theme.spacing(0.5),\n  textAlign: 'center',\n  color: theme.palette.text.secondary,\n}));\n\nexport default function ResponsiveColumns() {\n  return (\n    <Box sx={{ width: 500, minHeight: 253 }}>\n      <Masonry columns={{ xs: 3, sm: 4 }} spacing={2}>\n        {heights.map((height, index) => (\n          <Item key={index} sx={{ height }}>\n            {index + 1}\n          </Item>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n"},34757:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport { styled } from '@mui/material/styles';\nimport Paper from '@mui/material/Paper';\nimport Masonry from '@mui/lab/Masonry';\n\nconst heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];\n\nconst Item = styled(Paper)(({ theme }) => ({\n  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',\n  ...theme.typography.body2,\n  padding: theme.spacing(0.5),\n  textAlign: 'center',\n  color: theme.palette.text.secondary,\n}));\n\nexport default function ResponsiveSpacing() {\n  return (\n    <Box sx={{ width: 500, minHeight: 377 }}>\n      <Masonry columns={3} spacing={{ xs: 1, sm: 2, md: 3 }}>\n        {heights.map((height, index) => (\n          <Item key={index} sx={{ height }}>\n            {index + 1}\n          </Item>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n"},81138:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport { styled } from '@mui/material/styles';\nimport Paper from '@mui/material/Paper';\nimport Masonry from '@mui/lab/Masonry';\n\nconst heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];\n\nconst Item = styled(Paper)(({ theme }) => ({\n  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',\n  ...theme.typography.body2,\n  padding: theme.spacing(0.5),\n  textAlign: 'center',\n  color: theme.palette.text.secondary,\n}));\n\nexport default function SSRMasonry() {\n  return (\n    <Box sx={{ width: 500, minHeight: 393 }}>\n      <Masonry\n        columns={4}\n        spacing={2}\n        defaultHeight={450}\n        defaultColumns={4}\n        defaultSpacing={1}\n      >\n        {heights.map((height, index) => (\n          <Item key={index} sx={{ height }}>\n            {index + 1}\n          </Item>\n        ))}\n      </Masonry>\n    </Box>\n  );\n}\n"}}]);