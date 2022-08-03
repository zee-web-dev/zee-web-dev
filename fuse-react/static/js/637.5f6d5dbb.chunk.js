"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[637],{44269:function(n,e,a){a.d(e,{Z:function(){return I}});var t=a(29439),i=a(98655),o=a(73428),r=a(83061),l=a(47313),s=a(17551),c=a(9506),d=a(1413),m=a(45987),u=a(1168),x=a(87327),p=a(20617),f=a(86173),b=a(259),h=a(19860),v=a(88564),Z=a(70499),y=a(46417),g=["children","name"];function j(n){var e=n.children,a=n.document,t=(0,h.Z)();l.useEffect((function(){a.body.dir=t.direction}),[a,t.direction]);var i=l.useMemo((function(){return(0,p.Z)({key:"iframe-demo-".concat(t.direction),prepend:!0,container:a.head,stylisPlugins:"rtl"===t.direction?[x.Z]:[]})}),[a,t.direction]),o=l.useCallback((function(){return a.defaultView}),[a]);return(0,y.jsx)(b.StyleSheetManager,{target:a.head,stylisPlugins:"rtl"===t.direction?[x.Z]:[],children:(0,y.jsxs)(f.C,{value:i,children:[(0,y.jsx)(Z.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),l.cloneElement(e,{window:o})]})})}var F=(0,v.ZP)("iframe")((function(n){var e=n.theme;return{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:e.shadows[1]}}));function w(n){var e,a=n.children,i=n.name,o=(0,m.Z)(n,g),r="".concat(i," demo"),s=l.useRef(null),c=l.useReducer((function(){return!0}),!1),x=(0,t.Z)(c,2),p=x[0],f=x[1];l.useEffect((function(){var n=s.current.contentDocument;null==n||"complete"!==n.readyState||p||f()}),[p]);var b=null===(e=s.current)||void 0===e?void 0:e.contentDocument;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(F,(0,d.Z)({onLoad:f,ref:s,title:r},o)),!1!==p?u.createPortal((0,y.jsx)(j,{document:b,children:a}),b.body):null]})}var E=l.memo(w);function T(n){var e=(0,l.useState)(n.currentTabIndex),a=(0,t.Z)(e,2),d=a[0],m=(a[1],n.component),u=n.raw,x=n.iframe,p=n.className,f=n.name;return(0,y.jsxs)(o.Z,{className:(0,r.default)(p,"shadow"),sx:{backgroundColor:function(n){return(0,s._j)(n.palette.background.paper,"light"===n.palette.mode?.01:.1)}},children:[(0,y.jsx)(c.Z,{sx:{backgroundColor:function(n){return(0,s._j)(n.palette.background.paper,"light"===n.palette.mode?.02:.2)}}}),(0,y.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,y.jsx)("div",{className:0===d?"flex flex-1 max-w-full":"hidden",children:m&&(x?(0,y.jsx)(E,{name:f,children:(0,y.jsx)(m,{})}):(0,y.jsx)("div",{className:"w-full",children:(0,y.jsx)(m,{})}))}),(0,y.jsx)("div",{className:1===d?"flex flex-1":"hidden",children:u&&(0,y.jsx)("div",{className:"flex flex-1",children:(0,y.jsx)(i.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:u.default})})})]})]})}T.defaultProps={name:"",currentTabIndex:0};var I=T},35575:function(n,e,a){a.d(e,{Z:function(){return l}});a(47313);var t=a(9506),i=a(42420),o=a(78324),r=a(46417);function l(){return(0,r.jsxs)(t.Z,{sx:{"& > :not(style)":{m:1}},children:[(0,r.jsxs)(i.Z,{variant:"extended",size:"small",color:"primary","aria-label":"add",children:[(0,r.jsx)(o.Z,{sx:{mr:1}}),"Extended"]}),(0,r.jsxs)(i.Z,{variant:"extended",size:"medium",color:"primary","aria-label":"add",children:[(0,r.jsx)(o.Z,{sx:{mr:1}}),"Extended"]}),(0,r.jsxs)(i.Z,{variant:"extended",color:"primary","aria-label":"add",children:[(0,r.jsx)(o.Z,{sx:{mr:1}}),"Extended"]})]})}},67834:function(n,e,a){a.d(e,{Z:function(){return l}});a(47313);var t=a(9506),i=a(42420),o=a(5211),r=a(46417);function l(){return(0,r.jsxs)(t.Z,{sx:{"& > :not(style)":{m:1}},children:[(0,r.jsx)(i.Z,{size:"small",color:"secondary","aria-label":"add",children:(0,r.jsx)(o.Z,{})}),(0,r.jsx)(i.Z,{size:"medium",color:"secondary","aria-label":"add",children:(0,r.jsx)(o.Z,{})}),(0,r.jsx)(i.Z,{color:"secondary","aria-label":"add",children:(0,r.jsx)(o.Z,{})})]})}},20501:function(n,e,a){a.d(e,{Z:function(){return T}});var t=a(29439),i=a(1413),o=a(45987),r=a(47313),l=a(12547),s=a(19860),c=a(75908),d=a(5297),m=a(65280),u=a(61113),x=a(57632),p=a(42420),f=a(5211),b=a(65954),h=a(3665),v=a(23837),Z=a(9506),y=a(46417),g=["children","value","index"];function j(n){var e=n.children,a=n.value,t=n.index,r=(0,o.Z)(n,g);return(0,y.jsx)(u.Z,(0,i.Z)((0,i.Z)({component:"div",role:"tabpanel",hidden:a!==t,id:"action-tabpanel-".concat(t),"aria-labelledby":"action-tab-".concat(t)},r),{},{children:a===t&&(0,y.jsx)(Z.Z,{sx:{p:3},children:e})}))}function F(n){return{id:"action-tab-".concat(n),"aria-controls":"action-tabpanel-".concat(n)}}var w={position:"absolute",bottom:16,right:16},E={color:"common.white",bgcolor:v.Z[500],"&:hover":{bgcolor:v.Z[600]}};function T(){var n=(0,s.Z)(),e=r.useState(0),a=(0,t.Z)(e,2),o=a[0],u=a[1],v={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},g=[{color:"primary",sx:w,icon:(0,y.jsx)(f.Z,{}),label:"Add"},{color:"secondary",sx:w,icon:(0,y.jsx)(b.Z,{}),label:"Edit"},{color:"inherit",sx:(0,i.Z)((0,i.Z)({},w),E),icon:(0,y.jsx)(h.Z,{}),label:"Expand"}];return(0,y.jsxs)(Z.Z,{sx:{bgcolor:"background.paper",width:500,position:"relative",minHeight:200},children:[(0,y.jsx)(c.Z,{position:"static",color:"default",children:(0,y.jsxs)(d.Z,{value:o,onChange:function(n,e){u(e)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth","aria-label":"action tabs example",children:[(0,y.jsx)(m.Z,(0,i.Z)({label:"Item One"},F(0))),(0,y.jsx)(m.Z,(0,i.Z)({label:"Item Two"},F(1))),(0,y.jsx)(m.Z,(0,i.Z)({label:"Item Three"},F(2)))]})}),(0,y.jsxs)(l.ZP,{axis:"rtl"===n.direction?"x-reverse":"x",index:o,onChangeIndex:function(n){u(n)},children:[(0,y.jsx)(j,{value:o,index:0,dir:n.direction,children:"Item One"}),(0,y.jsx)(j,{value:o,index:1,dir:n.direction,children:"Item Two"}),(0,y.jsx)(j,{value:o,index:2,dir:n.direction,children:"Item Three"})]}),g.map((function(n,e){return(0,y.jsx)(x.Z,{in:o===e,timeout:v,style:{transitionDelay:"".concat(o===e?v.exit:0,"ms")},unmountOnExit:!0,children:(0,y.jsx)(p.Z,{sx:n.sx,"aria-label":n.label,color:n.color,children:n.icon})},n.color)}))]})}},84286:function(n,e,a){a.d(e,{Z:function(){return d}});a(47313);var t=a(9506),i=a(42420),o=a(5211),r=a(65954),l=a(11069),s=a(78324),c=a(46417);function d(){return(0,c.jsxs)(t.Z,{sx:{"& > :not(style)":{m:1}},children:[(0,c.jsx)(i.Z,{color:"primary","aria-label":"add",children:(0,c.jsx)(o.Z,{})}),(0,c.jsx)(i.Z,{color:"secondary","aria-label":"edit",children:(0,c.jsx)(r.Z,{})}),(0,c.jsxs)(i.Z,{variant:"extended",children:[(0,c.jsx)(s.Z,{sx:{mr:1}}),"Navigate"]}),(0,c.jsx)(i.Z,{disabled:!0,"aria-label":"like",children:(0,c.jsx)(l.Z,{})})]})}},70637:function(n,e,a){a.r(e);var t=a(44269),i=a(56993),o=a(24193),r=a(61113),l=a(46417);e.default=function(n){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,l.jsx)(o.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/floating-action-button",target:"_blank",role:"button",startIcon:(0,l.jsx)(i.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,l.jsx)(r.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Floating action button"}),(0,l.jsx)(r.Z,{className:"description",children:"A floating action button (FAB) performs the primary, or most common, action on a screen."}),(0,l.jsx)(r.Z,{className:"mb-40",component:"div",children:"A floating action button appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in two types: regular, and extended."}),(0,l.jsx)(r.Z,{className:"mb-40",component:"div",children:"Only use a FAB if it is the most suitable way to present a screen's primary action. Only one component is recommended per screen to represent the most common action."}),(0,l.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic FAB"}),(0,l.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,l.jsx)(t.Z,{name:"FloatingActionButtons.js",className:"my-24",iframe:!1,component:a(84286).Z,raw:a(80021)})}),(0,l.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Size"}),(0,l.jsxs)(r.Z,{className:"mb-40",component:"div",children:["By default, the size is ",(0,l.jsx)("code",{children:"large"}),". Use the ",(0,l.jsx)("code",{children:"size"})," prop for smaller floating action buttons."]}),(0,l.jsxs)(r.Z,{className:"mb-40",component:"div",children:[(0,l.jsx)(t.Z,{name:"FloatingActionButtonSize.js",className:"my-24",iframe:!1,component:a(67834).Z,raw:a(50954)}),(0,l.jsx)(t.Z,{name:"FloatingActionButtonExtendedSize.js",className:"my-24",iframe:!1,component:a(35575).Z,raw:a(10192)})]}),(0,l.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Animation"}),(0,l.jsx)(r.Z,{className:"mb-40",component:"div",children:"The floating action button animates onto the screen as an expanding piece of material, by default."}),(0,l.jsx)(r.Z,{className:"mb-40",component:"div",children:"A floating action button that spans multiple lateral screens (such as tabbed screens) should briefly disappear, then reappear if its action changes."}),(0,l.jsxs)(r.Z,{className:"mb-40",component:"div",children:["The Zoom transition can be used to achieve this. Note that since both the exiting and entering animations are triggered at the same time, we use ",(0,l.jsx)("code",{children:"enterDelay"})," to allow the outgoing Floating Action Button's animation to finish before the new one enters."]}),(0,l.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,l.jsx)(t.Z,{name:"FloatingActionButtonZoom.js",className:"my-24",iframe:!1,component:a(20501).Z,raw:a(30347)})})]})}},5211:function(n,e,a){var t=a(95318);e.Z=void 0;var i=t(a(45045)),o=a(46417),r=(0,i.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");e.Z=r},65954:function(n,e,a){var t=a(95318);e.Z=void 0;var i=t(a(45045)),o=a(46417),r=(0,i.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");e.Z=r},11069:function(n,e,a){var t=a(95318);e.Z=void 0;var i=t(a(45045)),o=a(46417),r=(0,i.default)((0,o.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");e.Z=r},3665:function(n,e,a){var t=a(95318);e.Z=void 0;var i=t(a(45045)),o=a(46417),r=(0,i.default)((0,o.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");e.Z=r},78324:function(n,e,a){var t=a(95318);e.Z=void 0;var i=t(a(45045)),o=a(46417),r=(0,i.default)((0,o.jsx)("path",{d:"M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"}),"Navigation");e.Z=r},57632:function(n,e,a){var t=a(87462),i=a(63366),o=a(47313),r=a(62242),l=a(19860),s=a(70265),c=a(86983),d=a(46417),m=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],u={entering:{transform:"none"},entered:{transform:"none"}},x=o.forwardRef((function(n,e){var a=(0,l.Z)(),x={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},p=n.addEndListener,f=n.appear,b=void 0===f||f,h=n.children,v=n.easing,Z=n.in,y=n.onEnter,g=n.onEntered,j=n.onEntering,F=n.onExit,w=n.onExited,E=n.onExiting,T=n.style,I=n.timeout,N=void 0===I?x:I,A=n.TransitionComponent,B=void 0===A?r.ZP:A,S=(0,i.Z)(n,m),C=o.useRef(null),P=(0,c.Z)(h.ref,e),z=(0,c.Z)(C,P),k=function(n){return function(e){if(n){var a=C.current;void 0===e?n(a):n(a,e)}}},R=k(j),V=k((function(n,e){(0,s.n)(n);var t=(0,s.C)({style:T,timeout:N,easing:v},{mode:"enter"});n.style.webkitTransition=a.transitions.create("transform",t),n.style.transition=a.transitions.create("transform",t),y&&y(n,e)})),L=k(g),D=k(E),O=k((function(n){var e=(0,s.C)({style:T,timeout:N,easing:v},{mode:"exit"});n.style.webkitTransition=a.transitions.create("transform",e),n.style.transition=a.transitions.create("transform",e),F&&F(n)})),M=k(w);return(0,d.jsx)(B,(0,t.Z)({appear:b,in:Z,nodeRef:C,onEnter:V,onEntered:L,onEntering:R,onExit:O,onExited:M,onExiting:D,addEndListener:function(n){p&&p(C.current,n)},timeout:N},S,{children:function(n,e){return o.cloneElement(h,(0,t.Z)({style:(0,t.Z)({transform:"scale(0)",visibility:"exited"!==n||Z?void 0:"hidden"},u[n],T,h.props.style),ref:z},e))}}))}));e.Z=x},10192:function(n,e,a){a.r(e),e.default='import * as React from \'react\';\nimport Box from \'@mui/material/Box\';\nimport Fab from \'@mui/material/Fab\';\nimport NavigationIcon from \'@mui/icons-material/Navigation\';\n\nexport default function FloatingActionButtonExtendedSize() {\n  return (\n    <Box sx={{ \'& > :not(style)\': { m: 1 } }}>\n      <Fab variant="extended" size="small" color="primary" aria-label="add">\n        <NavigationIcon sx={{ mr: 1 }} />\n        Extended\n      </Fab>\n      <Fab variant="extended" size="medium" color="primary" aria-label="add">\n        <NavigationIcon sx={{ mr: 1 }} />\n        Extended\n      </Fab>\n      <Fab variant="extended" color="primary" aria-label="add">\n        <NavigationIcon sx={{ mr: 1 }} />\n        Extended\n      </Fab>\n    </Box>\n  );\n}\n'},50954:function(n,e,a){a.r(e),e.default='import * as React from \'react\';\nimport Box from \'@mui/material/Box\';\nimport Fab from \'@mui/material/Fab\';\nimport AddIcon from \'@mui/icons-material/Add\';\n\nexport default function FloatingActionButtonSize() {\n  return (\n    <Box sx={{ \'& > :not(style)\': { m: 1 } }}>\n      <Fab size="small" color="secondary" aria-label="add">\n        <AddIcon />\n      </Fab>\n      <Fab size="medium" color="secondary" aria-label="add">\n        <AddIcon />\n      </Fab>\n      <Fab color="secondary" aria-label="add">\n        <AddIcon />\n      </Fab>\n    </Box>\n  );\n}\n'},30347:function(n,e,a){a.r(e),e.default="import * as React from 'react';\nimport PropTypes from 'prop-types';\nimport SwipeableViews from 'react-swipeable-views';\nimport { useTheme } from '@mui/material/styles';\nimport AppBar from '@mui/material/AppBar';\nimport Tabs from '@mui/material/Tabs';\nimport Tab from '@mui/material/Tab';\nimport Typography from '@mui/material/Typography';\nimport Zoom from '@mui/material/Zoom';\nimport Fab from '@mui/material/Fab';\nimport AddIcon from '@mui/icons-material/Add';\nimport EditIcon from '@mui/icons-material/Edit';\nimport UpIcon from '@mui/icons-material/KeyboardArrowUp';\nimport { green } from '@mui/material/colors';\nimport Box from '@mui/material/Box';\n\nfunction TabPanel(props) {\n  const { children, value, index, ...other } = props;\n\n  return (\n    <Typography\n      component=\"div\"\n      role=\"tabpanel\"\n      hidden={value !== index}\n      id={`action-tabpanel-${index}`}\n      aria-labelledby={`action-tab-${index}`}\n      {...other}\n    >\n      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}\n    </Typography>\n  );\n}\n\nTabPanel.propTypes = {\n  children: PropTypes.node,\n  index: PropTypes.number.isRequired,\n  value: PropTypes.number.isRequired,\n};\n\nfunction a11yProps(index) {\n  return {\n    id: `action-tab-${index}`,\n    'aria-controls': `action-tabpanel-${index}`,\n  };\n}\n\nconst fabStyle = {\n  position: 'absolute',\n  bottom: 16,\n  right: 16,\n};\n\nconst fabGreenStyle = {\n  color: 'common.white',\n  bgcolor: green[500],\n  '&:hover': {\n    bgcolor: green[600],\n  },\n};\n\nexport default function FloatingActionButtonZoom() {\n  const theme = useTheme();\n  const [value, setValue] = React.useState(0);\n\n  const handleChange = (event, newValue) => {\n    setValue(newValue);\n  };\n\n  const handleChangeIndex = (index) => {\n    setValue(index);\n  };\n\n  const transitionDuration = {\n    enter: theme.transitions.duration.enteringScreen,\n    exit: theme.transitions.duration.leavingScreen,\n  };\n\n  const fabs = [\n    {\n      color: 'primary',\n      sx: fabStyle,\n      icon: <AddIcon />,\n      label: 'Add',\n    },\n    {\n      color: 'secondary',\n      sx: fabStyle,\n      icon: <EditIcon />,\n      label: 'Edit',\n    },\n    {\n      color: 'inherit',\n      sx: { ...fabStyle, ...fabGreenStyle },\n      icon: <UpIcon />,\n      label: 'Expand',\n    },\n  ];\n\n  return (\n    <Box\n      sx={{\n        bgcolor: 'background.paper',\n        width: 500,\n        position: 'relative',\n        minHeight: 200,\n      }}\n    >\n      <AppBar position=\"static\" color=\"default\">\n        <Tabs\n          value={value}\n          onChange={handleChange}\n          indicatorColor=\"primary\"\n          textColor=\"primary\"\n          variant=\"fullWidth\"\n          aria-label=\"action tabs example\"\n        >\n          <Tab label=\"Item One\" {...a11yProps(0)} />\n          <Tab label=\"Item Two\" {...a11yProps(1)} />\n          <Tab label=\"Item Three\" {...a11yProps(2)} />\n        </Tabs>\n      </AppBar>\n      <SwipeableViews\n        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}\n        index={value}\n        onChangeIndex={handleChangeIndex}\n      >\n        <TabPanel value={value} index={0} dir={theme.direction}>\n          Item One\n        </TabPanel>\n        <TabPanel value={value} index={1} dir={theme.direction}>\n          Item Two\n        </TabPanel>\n        <TabPanel value={value} index={2} dir={theme.direction}>\n          Item Three\n        </TabPanel>\n      </SwipeableViews>\n      {fabs.map((fab, index) => (\n        <Zoom\n          key={fab.color}\n          in={value === index}\n          timeout={transitionDuration}\n          style={{\n            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,\n          }}\n          unmountOnExit\n        >\n          <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>\n            {fab.icon}\n          </Fab>\n        </Zoom>\n      ))}\n    </Box>\n  );\n}\n"},80021:function(n,e,a){a.r(e),e.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Fab from '@mui/material/Fab';\nimport AddIcon from '@mui/icons-material/Add';\nimport EditIcon from '@mui/icons-material/Edit';\nimport FavoriteIcon from '@mui/icons-material/Favorite';\nimport NavigationIcon from '@mui/icons-material/Navigation';\n\nexport default function FloatingActionButtons() {\n  return (\n    <Box sx={{ '& > :not(style)': { m: 1 } }}>\n      <Fab color=\"primary\" aria-label=\"add\">\n        <AddIcon />\n      </Fab>\n      <Fab color=\"secondary\" aria-label=\"edit\">\n        <EditIcon />\n      </Fab>\n      <Fab variant=\"extended\">\n        <NavigationIcon sx={{ mr: 1 }} />\n        Navigate\n      </Fab>\n      <Fab disabled aria-label=\"like\">\n        <FavoriteIcon />\n      </Fab>\n    </Box>\n  );\n}\n"}}]);