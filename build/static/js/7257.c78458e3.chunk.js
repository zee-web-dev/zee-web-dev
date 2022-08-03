"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[7257],{44269:function(e,n,t){t.d(n,{Z:function(){return B}});var o=t(29439),i=t(98655),r=t(73428),a=t(83061),s=t(47313),c=t(17551),l=t(9506),m=t(1413),d=t(45987),h=t(1168),p=t(87327),u=t(20617),x=t(86173),f=t(259),j=t(19860),v=t(88564),g=t(70499),Z=t(46417),w=["children","name"];function b(e){var n=e.children,t=e.document,o=(0,j.Z)();s.useEffect((function(){t.body.dir=o.direction}),[t,o.direction]);var i=s.useMemo((function(){return(0,u.Z)({key:"iframe-demo-".concat(o.direction),prepend:!0,container:t.head,stylisPlugins:"rtl"===o.direction?[p.Z]:[]})}),[t,o.direction]),r=s.useCallback((function(){return t.defaultView}),[t]);return(0,Z.jsx)(f.StyleSheetManager,{target:t.head,stylisPlugins:"rtl"===o.direction?[p.Z]:[],children:(0,Z.jsxs)(x.C,{value:i,children:[(0,Z.jsx)(g.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),s.cloneElement(n,{window:r})]})})}var k=(0,v.ZP)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function y(e){var n,t=e.children,i=e.name,r=(0,d.Z)(e,w),a="".concat(i," demo"),c=s.useRef(null),l=s.useReducer((function(){return!0}),!1),p=(0,o.Z)(l,2),u=p[0],x=p[1];s.useEffect((function(){var e=c.current.contentDocument;null==e||"complete"!==e.readyState||u||x()}),[u]);var f=null===(n=c.current)||void 0===n?void 0:n.contentDocument;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(k,(0,m.Z)({onLoad:x,ref:c,title:a},r)),!1!==u?h.createPortal((0,Z.jsx)(b,{document:f,children:t}),f.body):null]})}var C=s.memo(y);function S(e){var n=(0,s.useState)(e.currentTabIndex),t=(0,o.Z)(n,2),m=t[0],d=(t[1],e.component),h=e.raw,p=e.iframe,u=e.className,x=e.name;return(0,Z.jsxs)(r.Z,{className:(0,a.default)(u,"shadow"),sx:{backgroundColor:function(e){return(0,c._j)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)}},children:[(0,Z.jsx)(l.Z,{sx:{backgroundColor:function(e){return(0,c._j)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)}}}),(0,Z.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,Z.jsx)("div",{className:0===m?"flex flex-1 max-w-full":"hidden",children:d&&(p?(0,Z.jsx)(C,{name:x,children:(0,Z.jsx)(d,{})}):(0,Z.jsx)("div",{className:"w-full",children:(0,Z.jsx)(d,{})}))}),(0,Z.jsx)("div",{className:1===m?"flex flex-1":"hidden",children:h&&(0,Z.jsx)("div",{className:"flex flex-1",children:(0,Z.jsx)(i.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:h.default})})})]})]})}S.defaultProps={name:"",currentTabIndex:0};var B=S},12803:function(e,n,t){t.d(n,{Z:function(){return h}});var o=t(29439),i=t(47313),r=t(9506),a=t(67426),s=t(82295),c=t(65033),l=t(83929),m=t(46417),d=(0,m.jsx)(s.Z,{sx:{m:1},elevation:4,children:(0,m.jsx)(r.Z,{component:"svg",sx:{width:100,height:100},children:(0,m.jsx)(r.Z,{component:"polygon",sx:{fill:function(e){return e.palette.common.white},stroke:function(e){return e.palette.divider},strokeWidth:1},points:"0,100 50,00, 100,100"})})});function h(){var e=i.useState(!1),n=(0,o.Z)(e,2),t=n[0],s=n[1];return(0,m.jsxs)(r.Z,{sx:{height:300},children:[(0,m.jsx)(l.Z,{control:(0,m.jsx)(a.Z,{checked:t,onChange:function(){s((function(e){return!e}))}}),label:"Show"}),(0,m.jsxs)(r.Z,{sx:{"& > :not(style)":{display:"flex",justifyContent:"space-around",height:120,width:250}},children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(c.Z,{in:t,children:d}),(0,m.jsx)(c.Z,{in:t,collapsedSize:40,children:d})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(r.Z,{sx:{width:"50%"},children:(0,m.jsx)(c.Z,{orientation:"horizontal",in:t,children:d})}),(0,m.jsx)(r.Z,{sx:{width:"50%"},children:(0,m.jsx)(c.Z,{orientation:"horizontal",in:t,collapsedSize:40,children:d})})]})]})]})}},9436:function(e,n,t){t.d(n,{Z:function(){return h}});var o=t(29439),i=t(47313),r=t(9506),a=t(67426),s=t(82295),c=t(32530),l=t(83929),m=t(46417),d=(0,m.jsx)(s.Z,{sx:{m:1},elevation:4,children:(0,m.jsx)(r.Z,{component:"svg",sx:{width:100,height:100},children:(0,m.jsx)(r.Z,{component:"polygon",sx:{fill:function(e){return e.palette.common.white},stroke:function(e){return e.palette.divider},strokeWidth:1},points:"0,100 50,00, 100,100"})})});function h(){var e=i.useState(!1),n=(0,o.Z)(e,2),t=n[0],s=n[1];return(0,m.jsxs)(r.Z,{sx:{height:180},children:[(0,m.jsx)(l.Z,{control:(0,m.jsx)(a.Z,{checked:t,onChange:function(){s((function(e){return!e}))}}),label:"Show"}),(0,m.jsx)(r.Z,{sx:{display:"flex"},children:(0,m.jsx)(c.Z,{in:t,children:d})})]})}},71373:function(e,n,t){t.d(n,{Z:function(){return p}});var o=t(1413),i=t(29439),r=t(47313),a=t(9506),s=t(67426),c=t(82295),l=t(73365),m=t(83929),d=t(46417),h=(0,d.jsx)(c.Z,{sx:{m:1},elevation:4,children:(0,d.jsx)(a.Z,{component:"svg",sx:{width:100,height:100},children:(0,d.jsx)(a.Z,{component:"polygon",sx:{fill:function(e){return e.palette.common.white},stroke:function(e){return e.palette.divider},strokeWidth:1},points:"0,100 50,00, 100,100"})})});function p(){var e=r.useState(!1),n=(0,i.Z)(e,2),t=n[0],c=n[1];return(0,d.jsxs)(a.Z,{sx:{height:180},children:[(0,d.jsx)(m.Z,{control:(0,d.jsx)(s.Z,{checked:t,onChange:function(){c((function(e){return!e}))}}),label:"Show"}),(0,d.jsxs)(a.Z,{sx:{display:"flex"},children:[(0,d.jsx)(l.Z,{in:t,children:h}),(0,d.jsx)(l.Z,(0,o.Z)((0,o.Z)({in:t,style:{transformOrigin:"0 0 0"}},t?{timeout:1e3}:{}),{},{children:h}))]})]})}},22843:function(e,n,t){t.d(n,{Z:function(){return h}});var o=t(29439),i=t(47313),r=t(9506),a=t(67426),s=t(82295),c=t(50301),l=t(83929),m=t(46417),d=(0,m.jsx)(s.Z,{sx:{m:1},elevation:4,children:(0,m.jsx)(r.Z,{component:"svg",sx:{width:100,height:100},children:(0,m.jsx)(r.Z,{component:"polygon",sx:{fill:function(e){return e.palette.common.white},stroke:function(e){return e.palette.divider},strokeWidth:1},points:"0,100 50,00, 100,100"})})});function h(){var e=i.useState(!1),n=(0,o.Z)(e,2),t=n[0],s=n[1];return(0,m.jsx)(r.Z,{sx:{height:180},children:(0,m.jsxs)(r.Z,{sx:{width:"calc(100px + 16px)"},children:[(0,m.jsx)(l.Z,{control:(0,m.jsx)(a.Z,{checked:t,onChange:function(){s((function(e){return!e}))}}),label:"Show"}),(0,m.jsx)(c.Z,{direction:"up",in:t,mountOnEnter:!0,unmountOnExit:!0,children:d})]})})}},43352:function(e,n,t){t.d(n,{Z:function(){return h}});var o=t(29439),i=t(47313),r=t(9506),a=t(67426),s=t(82295),c=t(57632),l=t(83929),m=t(46417),d=(0,m.jsx)(s.Z,{sx:{m:1},elevation:4,children:(0,m.jsx)(r.Z,{component:"svg",sx:{width:100,height:100},children:(0,m.jsx)(r.Z,{component:"polygon",sx:{fill:function(e){return e.palette.common.white},stroke:function(e){return e.palette.divider},strokeWidth:1},points:"0,100 50,00, 100,100"})})});function h(){var e=i.useState(!1),n=(0,o.Z)(e,2),t=n[0],s=n[1];return(0,m.jsxs)(r.Z,{sx:{height:180},children:[(0,m.jsx)(l.Z,{control:(0,m.jsx)(a.Z,{checked:t,onChange:function(){s((function(e){return!e}))}}),label:"Show"}),(0,m.jsxs)(r.Z,{sx:{display:"flex"},children:[(0,m.jsx)(c.Z,{in:t,children:d}),(0,m.jsx)(c.Z,{in:t,style:{transitionDelay:t?"500ms":"0ms"},children:d})]})]})}},55006:function(e,n,t){t.d(n,{Z:function(){return h}});var o=t(29439),i=t(47313),r=t(9506),a=t(67426),s=t(82295),c=t(50301),l=t(83929),m=t(46417),d=(0,m.jsx)(s.Z,{sx:{m:1,width:100,height:100},elevation:4,children:(0,m.jsx)(r.Z,{component:"svg",sx:{width:100,height:100},children:(0,m.jsx)(r.Z,{component:"polygon",sx:{fill:function(e){return e.palette.common.white},stroke:function(e){return e.palette.divider},strokeWidth:1},points:"0,100 50,00, 100,100"})})});function h(){var e=i.useState(!1),n=(0,o.Z)(e,2),t=n[0],s=n[1],h=i.useRef(null);return(0,m.jsx)(r.Z,{sx:{height:180,width:240,display:"flex",padding:2,borderRadius:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.100":"grey.900"},overflow:"hidden"},ref:h,children:(0,m.jsxs)(r.Z,{sx:{width:200},children:[(0,m.jsx)(l.Z,{control:(0,m.jsx)(a.Z,{checked:t,onChange:function(){s((function(e){return!e}))}}),label:"Show from target"}),(0,m.jsx)(c.Z,{direction:"up",in:t,container:h.current,children:d})]})})}},75486:function(e,n,t){t.d(n,{Z:function(){return v}});var o=t(93433),i=t(29439),r=t(47313),a=t(9506),s=t(24193),c=t(65033),l=t(47131),m=t(48310),d=t(60194),h=t(83213),p=t(51997),u=t(51078),x=t(46417),f=["\ud83c\udf4f Apple","\ud83c\udf4c Banana","\ud83c\udf4d Pineapple","\ud83e\udd65 Coconut","\ud83c\udf49 Watermelon"];function j(e){var n=e.item,t=e.handleRemoveFruit;return(0,x.jsx)(d.ZP,{secondaryAction:(0,x.jsx)(l.Z,{edge:"end","aria-label":"delete",title:"Delete",onClick:function(){return t(n)},children:(0,x.jsx)(p.Z,{})}),children:(0,x.jsx)(h.Z,{primary:n})})}function v(){var e=r.useState(f.slice(0,3)),n=(0,i.Z)(e,2),t=n[0],l=n[1],d=function(e){l((function(n){return(0,o.Z)(n.filter((function(n){return n!==e})))}))},h=(0,x.jsx)(s.Z,{variant:"contained",disabled:t.length>=f.length,onClick:function(){var e=f.find((function(e){return!t.includes(e)}));e&&l((function(n){return[e].concat((0,o.Z)(n))}))},children:"Add fruit to basket"});return(0,x.jsxs)("div",{children:[h,(0,x.jsx)(a.Z,{sx:{mt:1},children:(0,x.jsx)(m.Z,{children:(0,x.jsx)(u.Z,{children:t.map((function(e){return(0,x.jsx)(c.Z,{children:j({item:e,handleRemoveFruit:d})},e)}))})})})]})}},42297:function(e,n,t){t.r(n);var o=t(44269),i=t(98655),r=t(56993),a=t(24193),s=t(61113),c=t(46417);n.default=function(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,c.jsx)(a.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/transitions",target:"_blank",role:"button",startIcon:(0,c.jsx)(r.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,c.jsx)(s.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Transitions"}),(0,c.jsx)(s.Z,{className:"description",children:"Transitions help to make a UI expressive and easy to use."}),(0,c.jsxs)(s.Z,{className:"mb-40",component:"div",children:["MUI provides transitions that can be used to introduce some basic"," ",(0,c.jsx)("a",{href:"https://material.io/design/motion/",children:"motion"})," to your applications."]}),(0,c.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Collapse"}),(0,c.jsxs)(s.Z,{className:"mb-40",component:"div",children:["Expand from the start edge of the child element. Use the ",(0,c.jsx)("code",{children:"orientation"})," prop if you need a horizontal collapse. The ",(0,c.jsx)("code",{children:"collapsedSize"})," prop can be used to set the minimum width/height when not expanded."]}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(o.Z,{name:"SimpleCollapse.js",className:"my-24",iframe:!1,component:t(12803).Z,raw:t(80923)})}),(0,c.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Fade"}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:"Fade in from transparent to opaque."}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(o.Z,{name:"SimpleFade.js",className:"my-24",iframe:!1,component:t(9436).Z,raw:t(88138)})}),(0,c.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Grow"}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:"Expands outwards from the center of the child element, while also fading in from transparent to opaque."}),(0,c.jsxs)(s.Z,{className:"mb-40",component:"div",children:["The second example demonstrates how to change the ",(0,c.jsx)("code",{children:"transform-origin"}),", and conditionally applies the ",(0,c.jsx)("code",{children:"timeout"})," prop to change the entry speed."]}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(o.Z,{name:"SimpleGrow.js",className:"my-24",iframe:!1,component:t(71373).Z,raw:t(76974)})}),(0,c.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Slide"}),(0,c.jsxs)(s.Z,{className:"mb-40",component:"div",children:["Slide in from the edge of the screen. The ",(0,c.jsx)("code",{children:"direction"})," prop controls which edge of the screen the transition starts from."]}),(0,c.jsxs)(s.Z,{className:"mb-40",component:"div",children:["The Transition component's ",(0,c.jsx)("code",{children:"mountOnEnter"})," prop prevents the child component from being mounted until ",(0,c.jsx)("code",{children:"in"})," is ",(0,c.jsx)("code",{children:"true"}),". This prevents the relatively positioned component from scrolling into view from its off-screen position. Similarly, the"," ",(0,c.jsx)("code",{children:"unmountOnExit"})," prop removes the component from the DOM after it has been transition off-screen."]}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(o.Z,{name:"SimpleSlide.js",className:"my-24",iframe:!1,component:t(22843).Z,raw:t(2124)})}),(0,c.jsx)(s.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Slide relative to a container"}),(0,c.jsxs)(s.Z,{className:"mb-40",component:"div",children:["The Slide component also accepts ",(0,c.jsx)("code",{children:"container"})," prop, which is a reference to a DOM node. If this prop is set, the Slide component will slide from the edge of that DOM node."]}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(o.Z,{name:"SlideFromContainer.js",className:"my-24",iframe:!1,component:t(55006).Z,raw:t(8004)})}),(0,c.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Zoom"}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:"Expand outwards from the center of the child element."}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:"This example also demonstrates how to delay the enter transition."}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(o.Z,{name:"SimpleZoom.js",className:"my-24",iframe:!1,component:t(43352).Z,raw:t(59511)})}),(0,c.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Child requirement"}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Forward the style"}),": To better support server rendering, MUI provides a"," ",(0,c.jsx)("code",{children:"style"})," prop to the children of some transition components (Fade, Grow, Zoom, Slide). The ",(0,c.jsx)("code",{children:"style"})," prop must be applied to the DOM for the animation to work as expected."]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Forward the ref"}),": The transition components require the first child element to forward its ref to the DOM node. For more details about ref, check out"," ",(0,c.jsx)("a",{href:"/material-ui/guides/composition/#caveat-with-refs",children:"Caveat with refs"})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("strong",{children:"Single element"}),": The transition components require only one child element (",(0,c.jsx)("code",{children:"React.Fragment"})," is not allowed)."]})]}),(0,c.jsx)(i.Z,{component:"pre",className:"language-jsx",children:" \n// The `props` object contains a `style` prop.\n// You need to provide it to the `div` element as shown here.\nconst MyComponent = React.forwardRef((props, ref) {\n  return (\n    <div ref={ref} {...props}>\n      Fade\n    </div>\n  );\n})\n\nexport default Main() {\n  return (\n    <Fade>\n      {/* MyComponent must the only child */}\n      <MyComponent />\n    </Fade>\n  );\n}\n"}),(0,c.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"TransitionGroup"}),(0,c.jsxs)(s.Z,{className:"mb-40",component:"div",children:["To animate a component when it is mounted or unmounted, you can use the"," ",(0,c.jsx)("a",{href:"http://reactcommunity.org/react-transition-group/transition-group/",children:(0,c.jsx)("code",{children:"TransitionGroup"})})," ","component from ",(0,c.jsx)("em",{children:"react-transition-group"}),". As components are added or removed, the"," ",(0,c.jsx)("code",{children:"in"})," prop is toggled automatically by ",(0,c.jsx)("code",{children:"TransitionGroup"}),"."]}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(o.Z,{name:"TransitionGroupExample.js",className:"my-24",iframe:!1,component:t(75486).Z,raw:t(57584)})}),(0,c.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"TransitionComponent prop"}),(0,c.jsxs)(s.Z,{className:"mb-40",component:"div",children:["Some MUI components use these transitions internally. These accept a"," ",(0,c.jsx)("code",{children:"TransitionComponent"})," prop to customize the default transition. You can use any of the above components or your own. It should respect the following conditions:"]}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:["Accepts an ",(0,c.jsx)("code",{children:"in"})," prop. This corresponds to the open/close state."]}),(0,c.jsxs)("li",{children:["Call the ",(0,c.jsx)("code",{children:"onEnter"})," callback prop when the enter transition starts."]}),(0,c.jsxs)("li",{children:["Call the ",(0,c.jsx)("code",{children:"onExited"})," callback prop when the exit transition is completed. These two callbacks allow to unmount the children when in a closed state and fully transitioned."]})]}),(0,c.jsxs)(s.Z,{className:"mb-40",component:"div",children:["For more information on creating a custom transition, visit the"," ",(0,c.jsx)("em",{children:"react-transition-group"})," ",(0,c.jsxs)("a",{href:"http://reactcommunity.org/react-transition-group/transition/",children:[(0,c.jsx)("code",{children:"Transition"})," documentation"]}),". You can also visit the dedicated sections of some of the components:"]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"/material-ui/react-modal/#transitions",children:"Modal"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"/material-ui/react-dialog/#transitions",children:"Dialog"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"/material-ui/react-popper/#transitions",children:"Popper"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"/material-ui/react-snackbar/#transitions",children:"Snackbar"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"/material-ui/react-tooltip/#transitions",children:"Tooltip"})})]}),(0,c.jsx)(s.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Performance & SEO"}),(0,c.jsxs)(s.Z,{className:"mb-40",component:"div",children:["The content of transition component is mounted by default even if"," ",(0,c.jsx)("code",{children:"in={false}"}),". This default behavior has server-side rendering and SEO in mind. If you render expensive component trees inside your transition it might be a good idea to change this default behavior by enabling the",(0,c.jsx)("code",{children:"unmountOnExit"})," prop:"]}),(0,c.jsx)(i.Z,{component:"pre",className:"language-jsx",children:" \n<Fade in={false} unmountOnExit />\n"}),(0,c.jsx)(s.Z,{className:"mb-40",component:"div",children:"As with any performance optimization this is not a silver bullet. Be sure to identify bottlenecks first and then try out these optimization strategies."})]})}},51997:function(e,n,t){var o=t(95318);n.Z=void 0;var i=o(t(45045)),r=t(46417),a=(0,i.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=a},57632:function(e,n,t){var o=t(87462),i=t(63366),r=t(47313),a=t(62242),s=t(19860),c=t(70265),l=t(86983),m=t(46417),d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],h={entering:{transform:"none"},entered:{transform:"none"}},p=r.forwardRef((function(e,n){var t=(0,s.Z)(),p={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},u=e.addEndListener,x=e.appear,f=void 0===x||x,j=e.children,v=e.easing,g=e.in,Z=e.onEnter,w=e.onEntered,b=e.onEntering,k=e.onExit,y=e.onExited,C=e.onExiting,S=e.style,B=e.timeout,F=void 0===B?p:B,N=e.TransitionComponent,T=void 0===N?a.ZP:N,E=(0,i.Z)(e,d),R=r.useRef(null),I=(0,l.Z)(j.ref,n),P=(0,l.Z)(R,I),L=function(e){return function(n){if(e){var t=R.current;void 0===n?e(t):e(t,n)}}},G=L(b),M=L((function(e,n){(0,c.n)(e);var o=(0,c.C)({style:S,timeout:F,easing:v},{mode:"enter"});e.style.webkitTransition=t.transitions.create("transform",o),e.style.transition=t.transitions.create("transform",o),Z&&Z(e,n)})),O=L(w),z=L(C),D=L((function(e){var n=(0,c.C)({style:S,timeout:F,easing:v},{mode:"exit"});e.style.webkitTransition=t.transitions.create("transform",n),e.style.transition=t.transitions.create("transform",n),k&&k(e)})),W=L(y);return(0,m.jsx)(T,(0,o.Z)({appear:f,in:g,nodeRef:R,onEnter:M,onEntered:O,onEntering:G,onExit:D,onExited:W,onExiting:z,addEndListener:function(e){u&&u(R.current,e)},timeout:F},E,{children:function(e,n){return r.cloneElement(j,(0,o.Z)({style:(0,o.Z)({transform:"scale(0)",visibility:"exited"!==e||g?void 0:"hidden"},h[e],S,j.props.style),ref:P},n))}}))}));n.Z=p},80923:function(e,n,t){t.r(n),n.default="import * as React from 'react';\n\nimport Box from '@mui/material/Box';\nimport Switch from '@mui/material/Switch';\nimport Paper from '@mui/material/Paper';\nimport Collapse from '@mui/material/Collapse';\nimport FormControlLabel from '@mui/material/FormControlLabel';\n\nconst icon = (\n  <Paper sx={{ m: 1 }} elevation={4}>\n    <Box component=\"svg\" sx={{ width: 100, height: 100 }}>\n      <Box\n        component=\"polygon\"\n        sx={{\n          fill: (theme) => theme.palette.common.white,\n          stroke: (theme) => theme.palette.divider,\n          strokeWidth: 1,\n        }}\n        points=\"0,100 50,00, 100,100\"\n      />\n    </Box>\n  </Paper>\n);\n\nexport default function SimpleCollapse() {\n  const [checked, setChecked] = React.useState(false);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <Box sx={{ height: 300 }}>\n      <FormControlLabel\n        control={<Switch checked={checked} onChange={handleChange} />}\n        label=\"Show\"\n      />\n      <Box\n        sx={{\n          '& > :not(style)': {\n            display: 'flex',\n            justifyContent: 'space-around',\n            height: 120,\n            width: 250,\n          },\n        }}\n      >\n        <div>\n          <Collapse in={checked}>{icon}</Collapse>\n          <Collapse in={checked} collapsedSize={40}>\n            {icon}\n          </Collapse>\n        </div>\n        <div>\n          <Box sx={{ width: '50%' }}>\n            <Collapse orientation=\"horizontal\" in={checked}>\n              {icon}\n            </Collapse>\n          </Box>\n          <Box sx={{ width: '50%' }}>\n            <Collapse orientation=\"horizontal\" in={checked} collapsedSize={40}>\n              {icon}\n            </Collapse>\n          </Box>\n        </div>\n      </Box>\n    </Box>\n  );\n}\n"},88138:function(e,n,t){t.r(n),n.default="import * as React from 'react';\n\nimport Box from '@mui/material/Box';\nimport Switch from '@mui/material/Switch';\nimport Paper from '@mui/material/Paper';\nimport Fade from '@mui/material/Fade';\nimport FormControlLabel from '@mui/material/FormControlLabel';\n\nconst icon = (\n  <Paper sx={{ m: 1 }} elevation={4}>\n    <Box component=\"svg\" sx={{ width: 100, height: 100 }}>\n      <Box\n        component=\"polygon\"\n        sx={{\n          fill: (theme) => theme.palette.common.white,\n          stroke: (theme) => theme.palette.divider,\n          strokeWidth: 1,\n        }}\n        points=\"0,100 50,00, 100,100\"\n      />\n    </Box>\n  </Paper>\n);\n\nexport default function SimpleFade() {\n  const [checked, setChecked] = React.useState(false);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <Box sx={{ height: 180 }}>\n      <FormControlLabel\n        control={<Switch checked={checked} onChange={handleChange} />}\n        label=\"Show\"\n      />\n      <Box sx={{ display: 'flex' }}>\n        <Fade in={checked}>{icon}</Fade>\n      </Box>\n    </Box>\n  );\n}\n"},76974:function(e,n,t){t.r(n),n.default="import * as React from 'react';\n\nimport Box from '@mui/material/Box';\nimport Switch from '@mui/material/Switch';\nimport Paper from '@mui/material/Paper';\nimport Grow from '@mui/material/Grow';\nimport FormControlLabel from '@mui/material/FormControlLabel';\n\nconst icon = (\n  <Paper sx={{ m: 1 }} elevation={4}>\n    <Box component=\"svg\" sx={{ width: 100, height: 100 }}>\n      <Box\n        component=\"polygon\"\n        sx={{\n          fill: (theme) => theme.palette.common.white,\n          stroke: (theme) => theme.palette.divider,\n          strokeWidth: 1,\n        }}\n        points=\"0,100 50,00, 100,100\"\n      />\n    </Box>\n  </Paper>\n);\n\nexport default function SimpleGrow() {\n  const [checked, setChecked] = React.useState(false);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <Box sx={{ height: 180 }}>\n      <FormControlLabel\n        control={<Switch checked={checked} onChange={handleChange} />}\n        label=\"Show\"\n      />\n      <Box sx={{ display: 'flex' }}>\n        <Grow in={checked}>{icon}</Grow>\n        {/* Conditionally applies the timeout prop to change the entry speed. */}\n        <Grow\n          in={checked}\n          style={{ transformOrigin: '0 0 0' }}\n          {...(checked ? { timeout: 1000 } : {})}\n        >\n          {icon}\n        </Grow>\n      </Box>\n    </Box>\n  );\n}\n"},2124:function(e,n,t){t.r(n),n.default="import * as React from 'react';\n\nimport Box from '@mui/material/Box';\nimport Switch from '@mui/material/Switch';\nimport Paper from '@mui/material/Paper';\nimport Slide from '@mui/material/Slide';\nimport FormControlLabel from '@mui/material/FormControlLabel';\n\nconst icon = (\n  <Paper sx={{ m: 1 }} elevation={4}>\n    <Box component=\"svg\" sx={{ width: 100, height: 100 }}>\n      <Box\n        component=\"polygon\"\n        sx={{\n          fill: (theme) => theme.palette.common.white,\n          stroke: (theme) => theme.palette.divider,\n          strokeWidth: 1,\n        }}\n        points=\"0,100 50,00, 100,100\"\n      />\n    </Box>\n  </Paper>\n);\n\nexport default function SimpleSlide() {\n  const [checked, setChecked] = React.useState(false);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <Box sx={{ height: 180 }}>\n      <Box sx={{ width: `calc(100px + 16px)` }}>\n        <FormControlLabel\n          control={<Switch checked={checked} onChange={handleChange} />}\n          label=\"Show\"\n        />\n        <Slide direction=\"up\" in={checked} mountOnEnter unmountOnExit>\n          {icon}\n        </Slide>\n      </Box>\n    </Box>\n  );\n}\n"},59511:function(e,n,t){t.r(n),n.default="import * as React from 'react';\n\nimport Box from '@mui/material/Box';\nimport Switch from '@mui/material/Switch';\nimport Paper from '@mui/material/Paper';\nimport Zoom from '@mui/material/Zoom';\nimport FormControlLabel from '@mui/material/FormControlLabel';\n\nconst icon = (\n  <Paper sx={{ m: 1 }} elevation={4}>\n    <Box component=\"svg\" sx={{ width: 100, height: 100 }}>\n      <Box\n        component=\"polygon\"\n        sx={{\n          fill: (theme) => theme.palette.common.white,\n          stroke: (theme) => theme.palette.divider,\n          strokeWidth: 1,\n        }}\n        points=\"0,100 50,00, 100,100\"\n      />\n    </Box>\n  </Paper>\n);\n\nexport default function SimpleZoom() {\n  const [checked, setChecked] = React.useState(false);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <Box sx={{ height: 180 }}>\n      <FormControlLabel\n        control={<Switch checked={checked} onChange={handleChange} />}\n        label=\"Show\"\n      />\n      <Box sx={{ display: 'flex' }}>\n        <Zoom in={checked}>{icon}</Zoom>\n        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>\n          {icon}\n        </Zoom>\n      </Box>\n    </Box>\n  );\n}\n"},8004:function(e,n,t){t.r(n),n.default="import * as React from 'react';\n\nimport Box from '@mui/material/Box';\nimport Switch from '@mui/material/Switch';\nimport Paper from '@mui/material/Paper';\nimport Slide from '@mui/material/Slide';\nimport FormControlLabel from '@mui/material/FormControlLabel';\n\nconst icon = (\n  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>\n    <Box component=\"svg\" sx={{ width: 100, height: 100 }}>\n      <Box\n        component=\"polygon\"\n        sx={{\n          fill: (theme) => theme.palette.common.white,\n          stroke: (theme) => theme.palette.divider,\n          strokeWidth: 1,\n        }}\n        points=\"0,100 50,00, 100,100\"\n      />\n    </Box>\n  </Paper>\n);\n\nexport default function SlideFromContainer() {\n  const [checked, setChecked] = React.useState(false);\n  const containerRef = React.useRef(null);\n\n  const handleChange = () => {\n    setChecked((prev) => !prev);\n  };\n\n  return (\n    <Box\n      sx={{\n        height: 180,\n        width: 240,\n        display: 'flex',\n        padding: 2,\n        borderRadius: 1,\n        bgcolor: (theme) =>\n          theme.palette.mode === 'light' ? 'grey.100' : 'grey.900',\n        overflow: 'hidden',\n      }}\n      ref={containerRef}\n    >\n      <Box sx={{ width: 200 }}>\n        <FormControlLabel\n          control={<Switch checked={checked} onChange={handleChange} />}\n          label=\"Show from target\"\n        />\n        <Slide direction=\"up\" in={checked} container={containerRef.current}>\n          {icon}\n        </Slide>\n      </Box>\n    </Box>\n  );\n}\n"},57584:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Button from '@mui/material/Button';\nimport Collapse from '@mui/material/Collapse';\nimport IconButton from '@mui/material/IconButton';\nimport List from '@mui/material/List';\nimport ListItem from '@mui/material/ListItem';\nimport ListItemText from '@mui/material/ListItemText';\nimport DeleteIcon from '@mui/icons-material/Delete';\nimport { TransitionGroup } from 'react-transition-group';\n\nconst FRUITS = [\n  '\ud83c\udf4f Apple',\n  '\ud83c\udf4c Banana',\n  '\ud83c\udf4d Pineapple',\n  '\ud83e\udd65 Coconut',\n  '\ud83c\udf49 Watermelon',\n];\n\nfunction renderItem({ item, handleRemoveFruit }) {\n  return (\n    <ListItem\n      secondaryAction={\n        <IconButton\n          edge=\"end\"\n          aria-label=\"delete\"\n          title=\"Delete\"\n          onClick={() => handleRemoveFruit(item)}\n        >\n          <DeleteIcon />\n        </IconButton>\n      }\n    >\n      <ListItemText primary={item} />\n    </ListItem>\n  );\n}\n\nexport default function TransitionGroupExample() {\n  const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));\n\n  const handleAddFruit = () => {\n    const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));\n    if (nextHiddenItem) {\n      setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);\n    }\n  };\n\n  const handleRemoveFruit = (item) => {\n    setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);\n  };\n\n  const addFruitButton = (\n    <Button\n      variant=\"contained\"\n      disabled={fruitsInBasket.length >= FRUITS.length}\n      onClick={handleAddFruit}\n    >\n      Add fruit to basket\n    </Button>\n  );\n\n  return (\n    <div>\n      {addFruitButton}\n      <Box sx={{ mt: 1 }}>\n        <List>\n          <TransitionGroup>\n            {fruitsInBasket.map((item) => (\n              <Collapse key={item}>\n                {renderItem({ item, handleRemoveFruit })}\n              </Collapse>\n            ))}\n          </TransitionGroup>\n        </List>\n      </Box>\n    </div>\n  );\n}\n"}}]);