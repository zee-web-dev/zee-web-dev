"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[9620],{44269:function(e,n,r){r.d(n,{Z:function(){return R}});var t=r(29439),o=r(98655),s=r(73428),i=r(83061),a=r(47313),c=r(17551),l=r(9506),d=r(1413),u=r(45987),m=r(1168),f=r(87327),h=r(20617),p=r(86173),x=r(259),j=r(19860),v=r(88564),b=r(70499),g=r(46417),y=["children","name"];function N(e){var n=e.children,r=e.document,t=(0,j.Z)();a.useEffect((function(){r.body.dir=t.direction}),[r,t.direction]);var o=a.useMemo((function(){return(0,h.Z)({key:"iframe-demo-".concat(t.direction),prepend:!0,container:r.head,stylisPlugins:"rtl"===t.direction?[f.Z]:[]})}),[r,t.direction]),s=a.useCallback((function(){return r.defaultView}),[r]);return(0,g.jsx)(x.StyleSheetManager,{target:r.head,stylisPlugins:"rtl"===t.direction?[f.Z]:[],children:(0,g.jsxs)(p.C,{value:o,children:[(0,g.jsx)(b.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),a.cloneElement(n,{window:s})]})})}var S=(0,v.ZP)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function Z(e){var n,r=e.children,o=e.name,s=(0,u.Z)(e,y),i="".concat(o," demo"),c=a.useRef(null),l=a.useReducer((function(){return!0}),!1),f=(0,t.Z)(l,2),h=f[0],p=f[1];a.useEffect((function(){var e=c.current.contentDocument;null==e||"complete"!==e.readyState||h||p()}),[h]);var x=null===(n=c.current)||void 0===n?void 0:n.contentDocument;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(S,(0,d.Z)({onLoad:p,ref:c,title:i},s)),!1!==h?m.createPortal((0,g.jsx)(N,{document:x,children:r}),x.body):null]})}var w=a.memo(Z);function k(e){var n=(0,a.useState)(e.currentTabIndex),r=(0,t.Z)(n,2),d=r[0],u=(r[1],e.component),m=e.raw,f=e.iframe,h=e.className,p=e.name;return(0,g.jsxs)(s.Z,{className:(0,i.default)(h,"shadow"),sx:{backgroundColor:function(e){return(0,c._j)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)}},children:[(0,g.jsx)(l.Z,{sx:{backgroundColor:function(e){return(0,c._j)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)}}}),(0,g.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,g.jsx)("div",{className:0===d?"flex flex-1 max-w-full":"hidden",children:u&&(f?(0,g.jsx)(w,{name:p,children:(0,g.jsx)(u,{})}):(0,g.jsx)("div",{className:"w-full",children:(0,g.jsx)(u,{})}))}),(0,g.jsx)("div",{className:1===d?"flex flex-1":"hidden",children:m&&(0,g.jsx)("div",{className:"flex flex-1",children:(0,g.jsx)(o.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:m.default})})})]})]})}k.defaultProps={name:"",currentTabIndex:0};var R=k},34911:function(e,n,r){r.d(n,{Z:function(){return l}});var t=r(29439),o=r(47313),s=r(9506),i=r(18614),a=r(46417);function c(){return Array.from(new Array(5e3)).map((function(e,n){return(0,a.jsx)("span",{children:"."},n)}))}function l(){var e=o.useState({open:!1,defer:!1}),n=(0,t.Z)(e,2),r=n[0],l=n[1];return(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{type:"button",onClick:function(){return l({open:!r.open,defer:!1})},children:'Render NoSsr defer="false"'}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{type:"button",onClick:function(){return l({open:!r.open,defer:!0})},children:'Render NoSsr defer="true"'}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(s.Z,{sx:{width:300,display:"flex",flexWrap:"wrap"},children:r.open?(0,a.jsxs)(o.Fragment,{children:[(0,a.jsx)("div",{children:"Outside NoSsr"}),(0,a.jsxs)(i.Z,{defer:r.defer,children:[".....Inside NoSsr",(0,a.jsx)(c,{})]})]}):null})]})}},24830:function(e,n,r){r.d(n,{Z:function(){return i}});r(47313);var t=r(18614),o=r(9506),s=r(46417);function i(){return(0,s.jsxs)("div",{children:[(0,s.jsx)(o.Z,{sx:{p:2,bgcolor:"primary.main",color:"primary.contrastText"},children:"Server and Client"}),(0,s.jsx)(t.Z,{children:(0,s.jsx)(o.Z,{sx:{p:2,bgcolor:"secondary.main",color:"secondary.contrastText"},children:"Client only"})})]})}},59620:function(e,n,r){r.r(n);var t=r(44269),o=r(98655),s=r(56993),i=r(24193),a=r(61113),c=r(46417);n.default=function(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,c.jsx)(i.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/no-ssr",target:"_blank",role:"button",startIcon:(0,c.jsx)(s.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,c.jsx)(a.Z,{className:"text-40 my-16 font-700",component:"h1",children:"No SSR"}),(0,c.jsx)(a.Z,{className:"description",children:"NoSsr purposely removes components from the subject of Server Side Rendering (SSR)."}),(0,c.jsx)(a.Z,{className:"mb-40",component:"div",children:"This component can be useful in a variety of situations:"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Escape hatch for broken dependencies not supporting SSR."}),(0,c.jsx)("li",{children:"Improve the time-to-first paint on the client by only rendering above the fold."}),(0,c.jsx)("li",{children:"Reduce the rendering time on the server."}),(0,c.jsx)("li",{children:"Under too heavy server load, you can turn on service degradation."}),(0,c.jsxs)("li",{children:["Improve the time-to-interactive by only rendering what's important (with the"," ",(0,c.jsx)("code",{children:"defer"})," property)."]})]}),(0,c.jsx)(a.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Client-side deferring"}),(0,c.jsx)(a.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(t.Z,{name:"SimpleNoSsr.js",className:"my-24",iframe:!1,component:r(24830).Z,raw:r(87606)})}),(0,c.jsx)(a.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Frame deferring"}),(0,c.jsxs)(a.Z,{className:"mb-40",component:"div",children:["At its core, the NoSsr component's purpose is to ",(0,c.jsx)("strong",{children:"defer rendering"}),". As it's illustrated in the previous demo, you can use it to defer the rendering from the server to the client."]}),(0,c.jsxs)(a.Z,{className:"mb-40",component:"div",children:["But you can also use it to defer the rendering within the client itself. You can"," ",(0,c.jsx)("strong",{children:"wait a screen frame"})," with the ",(0,c.jsx)("code",{children:"defer"})," property to render the children. React does"," ",(0,c.jsx)("a",{href:"https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects",children:"2 commits"})," ","instead of 1."]}),(0,c.jsx)(a.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(t.Z,{name:"FrameDeferring.js",className:"my-24",iframe:!1,component:r(34911).Z,raw:r(41328)})}),(0,c.jsx)(a.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Unstyled"}),(0,c.jsx)("ul",{children:(0,c.jsxs)("li",{children:["\ud83d\udce6 ",(0,c.jsx)("a",{href:"https://bundlephobia.com/package/@mui/base@latest",children:"362 B gzipped"})]})}),(0,c.jsx)(a.Z,{className:"mb-40",component:"div",children:"As the component does not have any styles, it also comes with the Base package."}),(0,c.jsx)(o.Z,{component:"pre",className:"language-js",children:" \nimport NoSsr from '@mui/base/NoSsr';\n"})]})}},41328:function(e,n,r){r.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport NoSsr from '@mui/material/NoSsr';\n\nfunction LargeTree() {\n  return Array.from(new Array(5000)).map((_, index) => <span key={index}>.</span>);\n}\n\nexport default function FrameDeferring() {\n  const [state, setState] = React.useState({\n    open: false,\n    defer: false,\n  });\n\n  return (\n    <div>\n      <button\n        type=\"button\"\n        onClick={() =>\n          setState({\n            open: !state.open,\n            defer: false,\n          })\n        }\n      >\n        {'Render NoSsr defer=\"false\"'}\n      </button>\n      <br />\n      <button\n        type=\"button\"\n        onClick={() =>\n          setState({\n            open: !state.open,\n            defer: true,\n          })\n        }\n      >\n        {'Render NoSsr defer=\"true\"'}\n      </button>\n      <br />\n      <br />\n      <Box sx={{ width: 300, display: 'flex', flexWrap: 'wrap' }}>\n        {state.open ? (\n          <React.Fragment>\n            <div>Outside NoSsr</div>\n            <NoSsr defer={state.defer}>\n              .....Inside NoSsr\n              <LargeTree />\n            </NoSsr>\n          </React.Fragment>\n        ) : null}\n      </Box>\n    </div>\n  );\n}\n"},87606:function(e,n,r){r.r(n),n.default="import * as React from 'react';\nimport NoSsr from '@mui/material/NoSsr';\nimport Box from '@mui/material/Box';\n\nexport default function SimpleNoSsr() {\n  return (\n    <div>\n      <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText' }}>\n        Server and Client\n      </Box>\n      <NoSsr>\n        <Box\n          sx={{ p: 2, bgcolor: 'secondary.main', color: 'secondary.contrastText' }}\n        >\n          Client only\n        </Box>\n      </NoSsr>\n    </div>\n  );\n}\n"}}]);