"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[3223],{33223:function(e,s,t){t.r(s),t.d(s,{default:function(){return De}});var l=t(29439),a=t(53996),n=t(65280),i=t(5297),r=t(23132),c=t(58970),o=t(47313),d=t(22408),x=t(9506),m=t(88564),h=t(63585),u=t(85582),f=t(51405),p=t(61113),j=t(24193),g=t(56993),v=t(58631),b=t(4942),N=t(15861),y=t(87757),Z=t.n(y),w=t(80827),k=t(31881),C=t.n(k),E=(0,w.hg)("projectDashboardApp/projects/getProjects",(0,N.Z)(Z().mark((function e(){var s;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C().get("/api/dashboards/project/projects");case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})))),S=(0,w.HF)({}),z=S.getSelectors((function(e){return e.projectDashboardApp.projects})),D=z.selectAll,I=(z.selectEntities,z.selectById,(0,w.oM)({name:"projectDashboardApp/projects",initialState:S.getInitialState(),reducers:{},extraReducers:(0,b.Z)({},E.fulfilled,S.setAll)}).reducer),A=t(46417);var O=function(e){var s,t,a=(0,d.I0)(),n=(0,d.v9)(D),i=(0,d.v9)(v.dy),r=(0,o.useState)({id:1,menuEl:null}),x=(0,l.Z)(r,2),m=x[0],b=x[1];return(0,o.useEffect)((function(){a(E())}),[a]),c.Z.isEmpty(n)?null:(0,A.jsxs)("div",{className:"flex flex-col w-full px-24 sm:px-32",children:[(0,A.jsxs)("div",{className:"flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 my-32 sm:my-48",children:[(0,A.jsxs)("div",{className:"flex flex-auto items-center min-w-0",children:[(0,A.jsx)(h.Z,{className:"flex-0 w-64 h-64",alt:"user photo",src:null===i||void 0===i||null===(s=i.data)||void 0===s?void 0:s.photoURL,children:null===i||void 0===i||null===(t=i.data)||void 0===t?void 0:t.displayName[0]}),(0,A.jsxs)("div",{className:"flex flex-col min-w-0 mx-16",children:[(0,A.jsx)(p.Z,{className:"text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate",children:"Welcome back, ".concat(i.data.displayName,"!")}),(0,A.jsxs)("div",{className:"flex items-center",children:[(0,A.jsx)(g.Z,{size:20,color:"action",children:"heroicons-solid:bell"}),(0,A.jsx)(p.Z,{className:"mx-6 leading-6 truncate",color:"text.secondary",children:"You have 2 new messages and 15 new tasks"})]})]})]}),(0,A.jsxs)("div",{className:"flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12",children:[(0,A.jsx)(j.Z,{className:"whitespace-nowrap",variant:"contained",color:"primary",startIcon:(0,A.jsx)(g.Z,{size:20,children:"heroicons-solid:mail"}),children:"Messages"}),(0,A.jsx)(j.Z,{className:"whitespace-nowrap",variant:"contained",color:"secondary",startIcon:(0,A.jsx)(g.Z,{size:20,children:"heroicons-solid:cog"}),children:"Settings"})]})]}),(0,A.jsxs)("div",{className:"flex items-center",children:[(0,A.jsx)(j.Z,{onClick:function(e){b({id:m.id,menuEl:e.currentTarget})},className:"flex items-center border border-solid border-b-0 rounded-t-xl rounded-b-0 h-40 px-16 text-13 sm:text-16",variant:"default",sx:{backgroundColor:function(e){return e.palette.background.default},borderColor:function(e){return e.palette.divider}},endIcon:(0,A.jsx)(g.Z,{size:20,color:"action",children:"heroicons-solid:chevron-down"}),children:c.Z.find(n,["id",m.id]).name}),(0,A.jsx)(u.Z,{id:"project-menu",anchorEl:m.menuEl,open:Boolean(m.menuEl),onClose:function(){b({id:m.id,menuEl:null})},children:n&&n.map((function(e){return(0,A.jsx)(f.Z,{onClick:function(s){var t;t=e.id,b({id:t,menuEl:null})},children:e.name},e.id)}))})]})]})},$=t(9038),R=(0,w.hg)("projectDashboardApp/widgets/getWidgets",(0,N.Z)(Z().mark((function e(){var s,t;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C().get("/api/dashboards/project/widgets");case 2:return s=e.sent,e.next=5,s.data;case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))),F=(0,w.oM)({name:"projectDashboardApp/widgets",initialState:null,reducers:{},extraReducers:(0,b.Z)({},R.fulfilled,(function(e,s){return s.payload}))}),P=function(e){return e.projectDashboardApp.widgets},B=F.reducer,T=(0,$.UY)({widgets:B,projects:I}),U=t(62321),W=t(47131),L=t(82295),M=t(40454);function Y(){var e=(0,d.v9)(P),s=null===e||void 0===e?void 0:e.summary,t=s.data,a=s.ranges,n=s.currentRange,i=(0,o.useState)(n),r=(0,l.Z)(i,2),c=r[0],x=r[1];return(0,A.jsxs)(L.Z,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden",children:[(0,A.jsxs)("div",{className:"flex items-center justify-between px-8 pt-12",children:[(0,A.jsx)(M.Z,{className:"mx-16",classes:{select:"py-0 flex items-center"},value:c,onChange:function(e){x(e.target.value)},inputProps:{name:"currentRange"},variant:"filled",size:"small",children:Object.entries(a).map((function(e){var s=(0,l.Z)(e,2),t=s[0],a=s[1];return(0,A.jsx)(f.Z,{value:t,children:a},t)}))}),(0,A.jsx)(W.Z,{"aria-label":"more",size:"large",children:(0,A.jsx)(g.Z,{children:"heroicons-outline:dots-vertical"})})]}),(0,A.jsxs)("div",{className:"text-center mt-8",children:[(0,A.jsx)(p.Z,{className:"text-7xl sm:text-8xl font-bold tracking-tight leading-none text-blue-500",children:t.count[c]}),(0,A.jsx)(p.Z,{className:"text-lg font-medium text-blue-600 dark:text-blue-500",children:t.name})]}),(0,A.jsxs)(p.Z,{className:"flex items-baseline justify-center w-full mt-20 mb-24",color:"text.secondary",children:[(0,A.jsx)("span",{className:"truncate",children:t.extra.name}),":",(0,A.jsx)("b",{className:"px-8",children:t.extra.count[c]})]})]})}var _=(0,o.memo)(Y);function H(){var e=(0,d.v9)(P),s=null===e||void 0===e?void 0:e.overdue,t=s.data,l=s.title;return(0,A.jsxs)(L.Z,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden",children:[(0,A.jsxs)("div",{className:"flex items-center justify-between px-8 pt-12",children:[(0,A.jsx)(p.Z,{className:"px-16 text-lg font-medium tracking-tight leading-6 truncate",color:"text.secondary",children:l}),(0,A.jsx)(W.Z,{"aria-label":"more",size:"large",children:(0,A.jsx)(g.Z,{children:"heroicons-outline:dots-vertical"})})]}),(0,A.jsxs)("div",{className:"text-center mt-8",children:[(0,A.jsx)(p.Z,{className:"text-7xl sm:text-8xl font-bold tracking-tight leading-none text-red-500",children:t.count}),(0,A.jsx)(p.Z,{className:"text-lg font-medium text-red-600",children:t.name})]}),(0,A.jsxs)(p.Z,{className:"flex items-baseline justify-center w-full mt-20 mb-24",color:"text.secondary",children:[(0,A.jsx)("span",{className:"truncate",children:t.extra.name}),":",(0,A.jsx)("b",{className:"px-8",children:t.extra.count})]})]})}var G=(0,o.memo)(H);function X(){var e=(0,d.v9)(P),s=null===e||void 0===e?void 0:e.issues,t=s.data,l=s.title;return(0,A.jsxs)(L.Z,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden",children:[(0,A.jsxs)("div",{className:"flex items-center justify-between px-8 pt-12",children:[(0,A.jsx)(p.Z,{className:"px-16 text-lg font-medium tracking-tight leading-6 truncate",color:"text.secondary",children:l}),(0,A.jsx)(W.Z,{"aria-label":"more",size:"large",children:(0,A.jsx)(g.Z,{children:"heroicons-outline:dots-vertical"})})]}),(0,A.jsxs)("div",{className:"text-center mt-8",children:[(0,A.jsx)(p.Z,{className:"text-7xl sm:text-8xl font-bold tracking-tight leading-none text-amber-500",children:t.count}),(0,A.jsx)(p.Z,{className:"text-lg font-medium text-amber-600",children:t.name})]}),(0,A.jsxs)(p.Z,{className:"flex items-baseline justify-center w-full mt-20 mb-24",color:"text.secondary",children:[(0,A.jsx)("span",{className:"truncate",children:t.extra.name}),":",(0,A.jsx)("b",{className:"px-8",children:t.extra.count})]})]})}var q=(0,o.memo)(X);function J(){var e=(0,d.v9)(P),s=null===e||void 0===e?void 0:e.features,t=s.data,l=s.title;return(0,A.jsxs)(L.Z,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden",children:[(0,A.jsxs)("div",{className:"flex items-center justify-between px-8 pt-12",children:[(0,A.jsx)(p.Z,{className:"px-16 text-lg font-medium tracking-tight leading-6 truncate",color:"text.secondary",children:l}),(0,A.jsx)(W.Z,{"aria-label":"more",size:"large",children:(0,A.jsx)(g.Z,{children:"heroicons-outline:dots-vertical"})})]}),(0,A.jsxs)("div",{className:"text-center mt-8",children:[(0,A.jsx)(p.Z,{className:"text-7xl sm:text-8xl font-bold tracking-tight leading-none text-green-500",children:t.count}),(0,A.jsx)(p.Z,{className:"text-lg font-medium text-green-600",children:t.name})]}),(0,A.jsxs)(p.Z,{className:"flex items-baseline justify-center w-full mt-20 mb-24",color:"text.secondary",children:[(0,A.jsx)("span",{className:"truncate",children:t.extra.name}),":",(0,A.jsx)("b",{className:"px-8",children:t.extra.count})]})]})}var K=(0,o.memo)(J),Q=t(19860),V=t(17551),ee=t(58446);function se(){var e=(0,Q.Z)(),s=(0,o.useState)(!0),t=(0,l.Z)(s,2),a=t[0],r=t[1],c=(0,o.useState)(0),m=(0,l.Z)(c,2),h=m[0],u=m[1],f=(0,d.v9)(P),j=null===f||void 0===f?void 0:f.githubIssues,g=j.overview,v=j.series,b=j.ranges,N=j.labels,y=Object.keys(b)[h],Z={chart:{fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"line",toolbar:{show:!1},zoom:{enabled:!1}},colors:[e.palette.primary.main,e.palette.secondary.main],labels:N,dataLabels:{enabled:!0,enabledOnSeries:[0],background:{borderWidth:0}},grid:{borderColor:e.palette.divider},legend:{show:!1},plotOptions:{bar:{columnWidth:"50%"}},states:{hover:{filter:{type:"darken",value:.75}}},stroke:{width:[3,0]},tooltip:{followCursor:!0,theme:e.palette.mode},xaxis:{axisBorder:{show:!1},axisTicks:{color:e.palette.divider},labels:{style:{colors:e.palette.text.secondary}},tooltip:{enabled:!1}},yaxis:{labels:{offsetX:-16,style:{colors:e.palette.text.secondary}}}};return(0,o.useEffect)((function(){r(!1)}),[]),a?null:(0,A.jsxs)(L.Z,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden",children:[(0,A.jsxs)("div",{className:"flex flex-col sm:flex-row items-start justify-between",children:[(0,A.jsx)(p.Z,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Github Issues Summary"}),(0,A.jsx)("div",{className:"mt-12 sm:mt-0 sm:ml-8",children:(0,A.jsx)(i.Z,{value:h,onChange:function(e,s){return u(s)},indicatorColor:"secondary",textColor:"inherit",variant:"scrollable",scrollButtons:!1,className:"-mx-4 min-h-40",classes:{indicator:"flex justify-center bg-transparent w-full h-full"},TabIndicatorProps:{children:(0,A.jsx)(x.Z,{sx:{bgcolor:"text.disabled"},className:"w-full h-full rounded-full opacity-20"})},children:Object.entries(b).map((function(e){var s=(0,l.Z)(e,2),t=s[0],a=s[1];return(0,A.jsx)(n.Z,{className:"text-14 font-semibold min-h-40 min-w-64 mx-4 px-12",disableRipple:!0,label:a},t)}))})})]}),(0,A.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-24 w-full mt-32 sm:mt-16",children:[(0,A.jsxs)("div",{className:"flex flex-col flex-auto",children:[(0,A.jsx)(p.Z,{className:"font-medium",color:"text.secondary",children:"New vs. Closed"}),(0,A.jsx)("div",{className:"flex flex-col flex-auto",children:(0,A.jsx)(ee.Z,{className:"flex-auto w-full",options:Z,series:v[y],height:320})})]}),(0,A.jsxs)("div",{className:"flex flex-col",children:[(0,A.jsx)(p.Z,{className:"font-medium",color:"text.secondary",children:"Overview"}),(0,A.jsxs)("div",{className:"flex-auto grid grid-cols-4 gap-16 mt-24",children:[(0,A.jsxs)("div",{className:"col-span-2 flex flex-col items-center justify-center py-32 px-4 rounded-2xl bg-indigo-50 text-indigo-800",children:[(0,A.jsx)(p.Z,{className:"text-5xl sm:text-7xl font-semibold leading-none tracking-tight",children:g[y]["new-issues"]}),(0,A.jsx)(p.Z,{className:"mt-4 text-sm sm:text-lg font-medium",children:"New Issues"})]}),(0,A.jsxs)("div",{className:"col-span-2 flex flex-col items-center justify-center py-32 px-4 rounded-2xl bg-green-50 text-green-800",children:[(0,A.jsx)(p.Z,{className:"text-5xl sm:text-7xl font-semibold leading-none tracking-tight",children:g[y]["closed-issues"]}),(0,A.jsx)(p.Z,{className:"mt-4 text-sm sm:text-lg font-medium",children:"Closed"})]}),(0,A.jsxs)(x.Z,{sx:{backgroundColor:function(s){return"light"===s.palette.mode?(0,V.$n)(e.palette.background.default,.4):(0,V.$n)(e.palette.background.default,.02)}},className:"col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl",children:[(0,A.jsx)(p.Z,{className:"text-5xl font-semibold leading-none tracking-tight",children:g[y].fixed}),(0,A.jsx)(p.Z,{className:"mt-4 text-sm font-medium text-center",children:"Fixed"})]}),(0,A.jsxs)(x.Z,{sx:{backgroundColor:function(s){return"light"===s.palette.mode?(0,V.$n)(e.palette.background.default,.4):(0,V.$n)(e.palette.background.default,.02)}},className:"col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl",children:[(0,A.jsx)(p.Z,{className:"text-5xl font-semibold leading-none tracking-tight",children:g[y]["wont-fix"]}),(0,A.jsx)(p.Z,{className:"mt-4 text-sm font-medium text-center",children:"Won't Fix"})]}),(0,A.jsxs)(x.Z,{sx:{backgroundColor:function(s){return"light"===s.palette.mode?(0,V.$n)(e.palette.background.default,.4):(0,V.$n)(e.palette.background.default,.02)}},className:"col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl",children:[(0,A.jsx)(p.Z,{className:"text-5xl font-semibold leading-none tracking-tight",children:g[y]["re-opened"]}),(0,A.jsx)(p.Z,{className:"mt-4 text-sm font-medium text-center",children:"Re-opened"})]}),(0,A.jsxs)(x.Z,{sx:{backgroundColor:function(s){return"light"===s.palette.mode?(0,V.$n)(e.palette.background.default,.4):(0,V.$n)(e.palette.background.default,.02)}},className:"col-span-2 sm:col-span-1 flex flex-col items-center justify-center py-32 px-4 rounded-2xl",children:[(0,A.jsx)(p.Z,{className:"text-5xl font-semibold leading-none tracking-tight",children:g[y]["needs-triage"]}),(0,A.jsx)(p.Z,{className:"mt-4 text-sm font-medium text-center",children:"Needs Triage"})]})]})]})]})]})}var te=(0,o.memo)(se);function le(e){var s=(0,d.v9)(P),t=null===s||void 0===s?void 0:s.taskDistribution,a=t.overview,r=t.series,c=t.labels,m=t.ranges,h=(0,o.useState)(0),u=(0,l.Z)(h,2),f=u[0],j=u[1],g=Object.keys(m)[f],v=(0,o.useState)(!0),b=(0,l.Z)(v,2),N=b[0],y=b[1],Z=(0,Q.Z)(),w={chart:{fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"polarArea",toolbar:{show:!1},zoom:{enabled:!1}},labels:c,legend:{position:"bottom"},plotOptions:{polarArea:{spokes:{connectorColors:Z.palette.divider},rings:{strokeColor:Z.palette.divider}}},states:{hover:{filter:{type:"darken",value:.75}}},stroke:{width:2},theme:{monochrome:{enabled:!0,color:Z.palette.secondary.main,shadeIntensity:.75,shadeTo:"dark"}},tooltip:{followCursor:!0,theme:"dark"},yaxis:{labels:{style:{colors:Z.palette.text.secondary}}}};return(0,o.useEffect)((function(){y(!1)}),[]),N?null:(0,A.jsxs)(L.Z,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden h-full",children:[(0,A.jsxs)("div",{className:"flex flex-col sm:flex-row items-start justify-between",children:[(0,A.jsx)(p.Z,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Task Distribution"}),(0,A.jsx)("div",{className:"mt-3 sm:mt-0 sm:ml-2",children:(0,A.jsx)(i.Z,{value:f,onChange:function(e,s){return j(s)},indicatorColor:"secondary",textColor:"inherit",variant:"scrollable",scrollButtons:!1,className:"-mx-4 min-h-40",classes:{indicator:"flex justify-center bg-transparent w-full h-full"},TabIndicatorProps:{children:(0,A.jsx)(x.Z,{sx:{bgcolor:"text.disabled"},className:"w-full h-full rounded-full opacity-20"})},children:Object.entries(m).map((function(e){var s=(0,l.Z)(e,2),t=s[0],a=s[1];return(0,A.jsx)(n.Z,{className:"text-14 font-semibold min-h-40 min-w-64 mx-4 px-12",disableRipple:!0,label:a},t)}))})})]}),(0,A.jsx)("div",{className:"flex flex-col flex-auto mt-6",children:(0,A.jsx)(ee.Z,{className:"flex-auto w-full",options:w,series:r[g],type:w.chart.type})}),(0,A.jsxs)(x.Z,{sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,V.$n)(Z.palette.background.default,.4):(0,V.$n)(Z.palette.background.default,.02)}},className:"grid grid-cols-2 border-t divide-x -m-24 mt-16",children:[(0,A.jsxs)("div",{className:"flex flex-col items-center justify-center p-24 sm:p-32",children:[(0,A.jsx)("div",{className:"text-5xl font-semibold leading-none tracking-tighter",children:a[g].new}),(0,A.jsx)(p.Z,{className:"mt-4 text-center text-secondary",children:"New tasks"})]}),(0,A.jsxs)("div",{className:"flex flex-col items-center justify-center p-6 sm:p-8",children:[(0,A.jsx)("div",{className:"text-5xl font-semibold leading-none tracking-tighter",children:a[g].completed}),(0,A.jsx)(p.Z,{className:"mt-4 text-center text-secondary",children:"Completed tasks"})]})]})]})}var ae=(0,o.memo)(le),ne=t(48310),ie=t(60194),re=t(51824),ce=t(83213);function oe(e){var s=(0,d.v9)(P),t=null===s||void 0===s?void 0:s.schedule,a=t.series,r=t.ranges,c=(0,o.useState)(0),m=(0,l.Z)(c,2),h=m[0],u=m[1],f=Object.keys(r)[h];return(0,A.jsxs)(L.Z,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden h-full",children:[(0,A.jsxs)("div",{className:"flex flex-col sm:flex-row items-start justify-between",children:[(0,A.jsx)(p.Z,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Schedule"}),(0,A.jsx)("div",{className:"mt-12 sm:mt-0 sm:ml-8",children:(0,A.jsx)(i.Z,{value:h,onChange:function(e,s){return u(s)},indicatorColor:"secondary",textColor:"inherit",variant:"scrollable",scrollButtons:!1,className:"-mx-16 min-h-40",classes:{indicator:"flex justify-center bg-transparent w-full h-full"},TabIndicatorProps:{children:(0,A.jsx)(x.Z,{sx:{bgcolor:"text.disabled"},className:"w-full h-full rounded-full opacity-20"})},children:Object.entries(r).map((function(e){var s=(0,l.Z)(e,2),t=s[0],a=s[1];return(0,A.jsx)(n.Z,{className:"text-14 font-semibold min-h-40 min-w-64 mx-4 px-12",disableRipple:!0,label:a},t)}))})})]}),(0,A.jsx)(ne.Z,{className:"py-0 mt-8 divide-y",children:a[f].map((function(e,s){return(0,A.jsxs)(ie.ZP,{className:"px-0",children:[(0,A.jsx)(ce.Z,{classes:{root:"px-8",primary:"font-medium"},primary:e.title,secondary:(0,A.jsxs)("span",{className:"flex flex-col sm:flex-row sm:items-center -ml-2 mt-8 sm:mt-4 space-y-4 sm:space-y-0 sm:space-x-12",children:[e.time&&(0,A.jsxs)("span",{className:"flex items-center",children:[(0,A.jsx)(g.Z,{size:20,color:"disabled",children:"heroicons-solid:clock"}),(0,A.jsx)(p.Z,{component:"span",className:"mx-6 text-md",color:"text.secondary",children:e.time})]}),e.location&&(0,A.jsxs)("span",{className:"flex items-center",children:[(0,A.jsx)(g.Z,{size:20,color:"disabled",children:"heroicons-solid:location-marker"}),(0,A.jsx)(p.Z,{component:"span",className:"mx-6 text-md",color:"text.secondary",children:e.location})]})]})}),(0,A.jsx)(re.Z,{children:(0,A.jsx)(W.Z,{"aria-label":"more",size:"large",children:(0,A.jsx)(g.Z,{children:"heroicons-solid:chevron-right"})})})]},s)}))})]})}var de=(0,o.memo)(oe);var xe=function(){var e={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return(0,A.jsxs)(U.E.div,{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full min-w-0 p-24",variants:{show:{transition:{staggerChildren:.1}}},initial:"hidden",animate:"show",children:[(0,A.jsx)(U.E.div,{variants:e,children:(0,A.jsx)(_,{})}),(0,A.jsx)(U.E.div,{variants:e,children:(0,A.jsx)(G,{})}),(0,A.jsx)(U.E.div,{variants:e,children:(0,A.jsx)(q,{})}),(0,A.jsx)(U.E.div,{variants:e,children:(0,A.jsx)(K,{})}),(0,A.jsx)(U.E.div,{variants:e,className:"sm:col-span-2 md:col-span-4",children:(0,A.jsx)(te,{})}),(0,A.jsx)(U.E.div,{variants:e,className:"sm:col-span-2 md:col-span-4 lg:col-span-2",children:(0,A.jsx)(ae,{})}),(0,A.jsx)(U.E.div,{variants:e,className:"sm:col-span-2 md:col-span-4 lg:col-span-2",children:(0,A.jsx)(de,{})})]})};function me(e){var s=(0,d.v9)(P),t=null===s||void 0===s?void 0:s.teamMembers,l={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return(0,A.jsx)(U.E.div,{variants:{show:{transition:{staggerChildren:.05}}},initial:"hidden",animate:"show",className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-24 w-full min-w-0",children:t.map((function(e){return(0,A.jsxs)(L.Z,{component:U.E.div,variants:l,className:"flex flex-col flex-auto items-center shadow rounded-2xl overflow-hidden",children:[(0,A.jsxs)("div",{className:"flex flex-col flex-auto w-full p-32 text-center",children:[(0,A.jsx)("div",{className:"w-128 h-128 mx-auto rounded-full overflow-hidden",children:(0,A.jsx)("img",{className:"w-full h-full object-cover",src:e.avatar,alt:"member"})}),(0,A.jsx)(p.Z,{className:"mt-24 font-medium",children:e.name}),(0,A.jsx)(p.Z,{color:"text.secondary",children:e.title})]}),(0,A.jsxs)("div",{className:"flex items-center w-full border-t divide-x",children:[(0,A.jsxs)("a",{className:"flex flex-auto items-center justify-center py-16 hover:bg-hover",href:"mailto:".concat(e.email),role:"button",children:[(0,A.jsx)(g.Z,{size:20,color:"action",children:"heroicons-solid:mail"}),(0,A.jsx)(p.Z,{className:"ml-8",children:"Email"})]}),(0,A.jsxs)("a",{className:"flex flex-auto items-center justify-center py-16 hover:bg-hover",href:"tel".concat(e.phone),role:"button",children:[(0,A.jsx)(g.Z,{size:20,color:"action",children:"heroicons-solid:phone"}),(0,A.jsx)(p.Z,{className:"ml-8",children:"Call"})]})]})]},e.id)}))})}var he=(0,o.memo)(me);var ue=function(){return(0,A.jsx)(U.E.div,{className:"flex flex-wrap p-24",variants:{show:{transition:{staggerChildren:.1}}},initial:"hidden",animate:"show",children:(0,A.jsx)(U.E.div,{variants:{hidden:{opacity:0,y:20},show:{opacity:1,y:0}},className:"widget flex w-full",children:(0,A.jsx)(he,{})})})};function fe(e){var s=(0,d.v9)(P),t=null===s||void 0===s?void 0:s.budgetDistribution,l=t.categories,a=t.series,n=(0,Q.Z)(),i={chart:{fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"radar",sparkline:{enabled:!0}},colors:[n.palette.secondary.main],dataLabels:{enabled:!0,formatter:function(e){return"".concat(e,"%")},textAnchor:"start",style:{fontSize:"13px",fontWeight:500},background:{borderWidth:0,padding:4},offsetY:-15},markers:{strokeColors:n.palette.primary.main,strokeWidth:4},plotOptions:{radar:{polygons:{strokeColors:n.palette.divider,connectorColors:n.palette.divider}}},stroke:{width:2},tooltip:{theme:"dark",y:{formatter:function(e){return"".concat(e,"%")}}},xaxis:{labels:{show:!0,style:{fontSize:"12px",fontWeight:"500"}},categories:l},yaxis:{max:function(e){return parseInt((e+10).toFixed(0),10)},tickAmount:7}};return(0,A.jsxs)(L.Z,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden h-full",children:[(0,A.jsx)(p.Z,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Budget Distribution"}),(0,A.jsx)("div",{className:"flex flex-col flex-auto",children:(0,A.jsx)(ee.Z,{className:"flex-auto w-full h-320",options:i,series:a,type:i.chart.type,height:i.chart.height})})]})}var pe=(0,o.memo)(fe);var je=function(){var e=(0,d.v9)(P),s=null===e||void 0===e?void 0:e.weeklyExpenses,t=s.amount,l=s.series,a=s.labels,n={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"line",sparkline:{enabled:!0}},colors:[(0,Q.Z)().palette.secondary.main],stroke:{curve:"smooth"},tooltip:{theme:"dark"},xaxis:{type:"category",categories:a},yaxis:{labels:{formatter:function(e){return"$".concat(e)}}}};return(0,A.jsxs)(L.Z,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden",children:[(0,A.jsxs)("div",{className:"flex items-start justify-between",children:[(0,A.jsx)("div",{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Weekly Expenses"}),(0,A.jsx)("div",{className:"ml-8 -mt-8 -mr-12",children:(0,A.jsx)(W.Z,{children:(0,A.jsx)(g.Z,{size:20,children:"heroicons-solid:dots-vertical"})})})]}),(0,A.jsxs)("div",{className:"flex items-center mt-4",children:[(0,A.jsxs)("div",{className:"flex flex-col",children:[(0,A.jsx)("div",{className:"text-3xl font-semibold tracking-tight leading-tight",children:t.toLocaleString("en-US",{style:"currency",currency:"USD"})}),(0,A.jsxs)("div",{className:"flex items-center",children:[(0,A.jsx)(g.Z,{className:"mr-4 text-green-500",size:20,children:"heroicons-solid:trending-down"}),(0,A.jsxs)(p.Z,{className:"font-medium text-sm text-secondary leading-none whitespace-nowrap",children:[(0,A.jsx)("span",{className:"text-green-500",children:"2%"}),(0,A.jsx)("span",{children:" below projected"})]})]})]}),(0,A.jsx)("div",{className:"flex flex-col flex-auto ml-32",children:(0,A.jsx)(ee.Z,{className:"flex-auto w-full h-64",options:n,series:l,type:n.chart.type,height:n.chart.height})})]})]})};var ge=function(){var e=(0,d.v9)(P),s=null===e||void 0===e?void 0:e.monthlyExpenses,t=s.amount,l=s.series,a=s.labels,n={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"line",sparkline:{enabled:!0}},colors:[(0,Q.Z)().palette.success.main],stroke:{curve:"smooth"},tooltip:{theme:"dark"},xaxis:{type:"category",categories:a},yaxis:{labels:{formatter:function(e){return"$".concat(e)}}}};return(0,A.jsxs)(L.Z,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden",children:[(0,A.jsxs)("div",{className:"flex items-start justify-between",children:[(0,A.jsx)("div",{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Monthly Expenses"}),(0,A.jsx)("div",{className:"ml-8 -mt-8 -mr-12",children:(0,A.jsx)(W.Z,{children:(0,A.jsx)(g.Z,{size:20,children:"heroicons-solid:dots-vertical"})})})]}),(0,A.jsxs)("div",{className:"flex items-center mt-4",children:[(0,A.jsxs)("div",{className:"flex flex-col",children:[(0,A.jsx)("div",{className:"text-3xl font-semibold tracking-tight leading-tight",children:t.toLocaleString("en-US",{style:"currency",currency:"USD"})}),(0,A.jsxs)("div",{className:"flex items-center",children:[(0,A.jsx)(g.Z,{className:"mr-4 text-red-500",size:20,children:"heroicons-solid:trending-up"}),(0,A.jsxs)(p.Z,{className:"font-medium text-sm text-secondary leading-none whitespace-nowrap",children:[(0,A.jsx)("span",{className:"text-red-500",children:"2%"}),(0,A.jsx)("span",{children:" above projected"})]})]})]}),(0,A.jsx)("div",{className:"flex flex-col flex-auto ml-32",children:(0,A.jsx)(ee.Z,{className:"flex-auto w-full h-64",options:n,series:l,type:n.chart.type,height:n.chart.height})})]})]})};var ve=function(){var e=(0,d.v9)(P),s=null===e||void 0===e?void 0:e.yearlyExpenses,t=s.amount,l=s.series,a=s.labels,n={chart:{animations:{enabled:!1},fontFamily:"inherit",foreColor:"inherit",height:"100%",type:"line",sparkline:{enabled:!0}},colors:[(0,Q.Z)().palette.error.main],stroke:{curve:"smooth"},tooltip:{theme:"dark"},xaxis:{type:"category",categories:a},yaxis:{labels:{formatter:function(e){return"$".concat(e)}}}};return(0,A.jsxs)(L.Z,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden",children:[(0,A.jsxs)("div",{className:"flex items-start justify-between",children:[(0,A.jsx)("div",{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Yearly Expenses"}),(0,A.jsx)("div",{className:"ml-8 -mt-8 -mr-12",children:(0,A.jsx)(W.Z,{children:(0,A.jsx)(g.Z,{size:20,children:"heroicons-solid:dots-vertical"})})})]}),(0,A.jsxs)("div",{className:"flex items-center mt-4",children:[(0,A.jsxs)("div",{className:"flex flex-col",children:[(0,A.jsx)("div",{className:"text-3xl font-semibold tracking-tight leading-tight",children:t.toLocaleString("en-US",{style:"currency",currency:"USD"})}),(0,A.jsxs)("div",{className:"flex items-center",children:[(0,A.jsx)(g.Z,{className:"mr-4 text-red-500",size:20,children:"heroicons-solid:trending-up"}),(0,A.jsxs)(p.Z,{className:"font-medium text-sm text-secondary leading-none whitespace-nowrap",children:[(0,A.jsx)("span",{className:"text-red-500",children:"2%"}),(0,A.jsx)("span",{children:" above projected"})]})]})]}),(0,A.jsx)("div",{className:"flex flex-col flex-auto ml-32",children:(0,A.jsx)(ee.Z,{className:"flex-auto w-full h-64",options:n,series:l,type:n.chart.type,height:n.chart.height})})]})]})},be=t(66835),Ne=t(57861),ye=t(70941),Ze=t(23477),we=t(24076),ke=t(66212);function Ce(e){var s=(0,d.v9)(P),t=null===s||void 0===s?void 0:s.budgetDetails,a=t.columns,n=t.rows;return(0,A.jsxs)(L.Z,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden",children:[(0,A.jsx)(p.Z,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Budget Details"}),(0,A.jsx)("div",{className:"table-responsive",children:(0,A.jsxs)(be.Z,{className:"w-full min-w-full",children:[(0,A.jsx)(Ze.Z,{children:(0,A.jsx)(we.Z,{children:a.map((function(e,s){return(0,A.jsx)(ye.Z,{children:(0,A.jsx)(p.Z,{color:"text.secondary",className:"font-semibold text-12 whitespace-nowrap",children:e})},s)}))})}),(0,A.jsx)(Ne.Z,{children:n.map((function(e,s){return(0,A.jsx)(we.Z,{children:Object.entries(e).map((function(e){var s=(0,l.Z)(e,2),t=s[0],a=s[1];switch(t){case"type":return(0,A.jsx)(ye.Z,{component:"th",scope:"row",children:(0,A.jsx)(ke.Z,{size:"small",label:a})},t);case"total":case"expensesAmount":case"remainingAmount":return(0,A.jsx)(ye.Z,{component:"th",scope:"row",children:(0,A.jsx)(p.Z,{className:"",children:a.toLocaleString("en-US",{style:"currency",currency:"USD"})})},t);case"expensesPercentage":case"remainingPercentage":return(0,A.jsx)(ye.Z,{component:"th",scope:"row",children:(0,A.jsx)(p.Z,{className:"",children:"".concat(a,"%")})},t);default:return(0,A.jsx)(ye.Z,{component:"th",scope:"row",children:(0,A.jsx)(p.Z,{className:"",children:a})},t)}}))},s)}))})]})})]})}var Ee=(0,o.memo)(Ce);var Se=function(){var e={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return(0,A.jsxs)(U.E.div,{className:"grid grid-cols-1 sm:grid-cols-6 gap-24 w-full min-w-0 p-24",variants:{show:{transition:{staggerChildren:.1}}},initial:"hidden",animate:"show",children:[(0,A.jsx)(U.E.div,{variants:e,className:"sm:col-span-3 lg:col-span-4",children:(0,A.jsx)(pe,{})}),(0,A.jsxs)("div",{className:"sm:col-span-3 lg:col-span-2 grid grid-cols-1 gap-y-24",children:[(0,A.jsx)(U.E.div,{variants:e,className:"sm:col-span-2",children:(0,A.jsx)(je,{})}),(0,A.jsx)(U.E.div,{variants:e,className:"sm:col-span-2",children:(0,A.jsx)(ge,{})}),(0,A.jsx)(U.E.div,{variants:e,className:"sm:col-span-2",children:(0,A.jsx)(ve,{})})]}),(0,A.jsx)(U.E.div,{variants:e,className:"sm:col-span-6",children:(0,A.jsx)(Ee,{})})]})},ze=(0,m.ZP)(a.Z)((function(e){var s=e.theme;return{"& .FusePageSimple-header":{backgroundColor:s.palette.background.paper,boxShadow:"inset 0 0 0 1px  ".concat(s.palette.divider)}}}));var De=(0,r.Z)("projectDashboardApp",T)((function(e){var s=(0,d.I0)(),t=(0,d.v9)(P),a=(0,o.useState)(0),r=(0,l.Z)(a,2),m=r[0],h=r[1];return(0,o.useEffect)((function(){s(R())}),[s]),c.Z.isEmpty(t)?null:(0,A.jsx)(ze,{header:(0,A.jsx)(O,{}),content:(0,A.jsxs)("div",{className:"w-full p-12 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0",children:[(0,A.jsxs)(i.Z,{value:m,onChange:function(e,s){h(s)},indicatorColor:"secondary",textColor:"inherit",variant:"scrollable",scrollButtons:!1,className:"w-full px-24 -mx-4 min-h-40",classes:{indicator:"flex justify-center bg-transparent w-full h-full"},TabIndicatorProps:{children:(0,A.jsx)(x.Z,{sx:{bgcolor:"text.disabled"},className:"w-full h-full rounded-full opacity-20"})},children:[(0,A.jsx)(n.Z,{className:"text-14 font-semibold min-h-40 min-w-64 mx-4 px-12",disableRipple:!0,label:"Home"}),(0,A.jsx)(n.Z,{className:"text-14 font-semibold min-h-40 min-w-64 mx-4 px-12",disableRipple:!0,label:"Budget"}),(0,A.jsx)(n.Z,{className:"text-14 font-semibold min-h-40 min-w-64 mx-4 px-12",disableRipple:!0,label:"Team"})]}),0===m&&(0,A.jsx)(xe,{}),1===m&&(0,A.jsx)(Se,{}),2===m&&(0,A.jsx)(ue,{})]})})}))}}]);