"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[1011],{31011:function(e,t,n){n.r(t),n.d(t,{default:function(){return ae}});var a=n(29439),r=n(53996),s=n(23132),c=n(47313),o=n(22408),i=n(97890),l=n(69649),u=n(88564),d=n(38768),x=n(5227),m=n(47131),f=n(56993),p=n(46417);var h,v=function(e){return(0,o.I0)(),(0,p.jsxs)("div",{className:"flex flex-col flex-auto",children:[(0,p.jsx)(m.Z,{className:"absolute top-0 right-0 my-16 mx-32 z-10",sx:{color:"white"},component:x.Z,to:"/apps/contacts",size:"large",children:(0,p.jsx)(f.Z,{children:"heroicons-outline:x"})}),(0,p.jsx)(i.j3,{})]})},Z=n(56605),y=n(61113),g=n(62321),j=n(24193),b=n(15743),N=n(4942),S=n(15861),w=n(87757),I=n.n(w),A=n(80827),k=n(76747),C=n(31881),P=n.n(C),T=n(34814),F=n(17432),O=(0,A.hg)("contactsApp/contacts/getContacts",function(){var e=(0,S.Z)(I().mark((function e(t,n){var a,r;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.getState,e.next=3,P().get("/api/contacts");case 3:return a=e.sent,e.next=6,a.data;case 6:return r=e.sent,e.abrupt("return",{data:r});case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),z=(0,A.HF)({}),E=function(e){return e.contactsApp.contacts.searchText},L=z.getSelectors((function(e){return e.contactsApp.contacts})),M=L.selectAll,R=(L.selectById,(0,k.P1)([M,E],(function(e,t){return 0===t.length?e:T.Z.filterArrayByString(e,t)}))),W=(0,k.P1)([R],(function(e){return e.sort((function(e,t){return e.name.localeCompare(t.name,"es",{sensitivity:"base"})})).reduce((function(e,t){var n=t.name[0];return e[n]?e[n].children.push(t):e[n]={group:n,children:[t]},e}),{})})),_=(0,A.oM)({name:"contactsApp/contacts",initialState:z.getInitialState({searchText:""}),reducers:{setContactsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(h={},(0,N.Z)(h,F.Tk.fulfilled,z.upsertOne),(0,N.Z)(h,F.uK.fulfilled,z.addOne),(0,N.Z)(h,F.zY.fulfilled,(function(e,t){return z.removeOne(e,t.payload)})),(0,N.Z)(h,O.fulfilled,(function(e,t){var n=t.payload,a=n.data;n.routeParams;z.setAll(e,a),e.searchText=""})),h)}),B=_.actions.setContactsSearchText,U=_.reducer;var K=function(e){var t=(0,o.I0)(),n=(0,o.v9)(E),a=(0,o.v9)(R);return(0,p.jsxs)("div",{className:"p-24 sm:p-32 w-full border-b-1",children:[(0,p.jsxs)("div",{className:"flex flex-col items-center sm:items-start",children:[(0,p.jsx)(y.Z,{component:g.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-24 md:text-32 font-extrabold tracking-tight leading-none",children:"Contacts"}),(0,p.jsx)(y.Z,{component:g.E.span,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},delay:500,className:"text-14 font-medium ml-2",color:"text.secondary",children:"".concat(a.length," contacts")})]}),(0,p.jsxs)("div",{className:"flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center mt-16 -mx-8",children:[(0,p.jsxs)(b.Z,{component:g.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex flex-1 w-full sm:w-auto items-center px-16 mx-8 border-1 rounded-full",children:[(0,p.jsx)(f.Z,{color:"action",size:20,children:"heroicons-outline:search"}),(0,p.jsx)(Z.Z,{placeholder:"Search contacts",className:"flex flex-1 px-16",disableUnderline:!0,fullWidth:!0,value:n,inputProps:{"aria-label":"Search"},onChange:function(e){return t(B(e))}})]}),(0,p.jsxs)(j.Z,{className:"mx-8",variant:"contained",color:"secondary",component:x.Z,to:"new/edit",children:[(0,p.jsx)(f.Z,{size:20,children:"heroicons-outline:plus"}),(0,p.jsx)("span",{className:"mx-8",children:"Add"})]})]})]})},Y=n(48310),H=n(19536),J=n(63585),q=n(60194),D=n(32600),G=n(83213);var Q=function(e){var t=e.contact;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(q.ZP,{className:"px-32 py-16",sx:{bgcolor:"background.paper"},button:!0,component:x.Z,to:"/apps/contacts/".concat(t.id),children:[(0,p.jsx)(D.Z,{children:(0,p.jsx)(J.Z,{alt:t.name,src:t.avatar})}),(0,p.jsx)(G.Z,{classes:{root:"m-0",primary:"font-medium leading-5 truncate"},primary:t.name,secondary:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(y.Z,{className:"inline",component:"span",variant:"body2",color:"text.secondary",children:t.title})})})]}),(0,p.jsx)(H.Z,{})]})};var V=function(e){var t=(0,o.v9)(R),n=(0,o.v9)(W);return t?0===t.length?(0,p.jsx)("div",{className:"flex flex-1 items-center justify-center h-full",children:(0,p.jsx)(y.Z,{color:"text.secondary",variant:"h5",children:"There are no contacts!"})}):(0,p.jsx)(g.E.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex flex-col flex-auto w-full max-h-full",children:Object.entries(n).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return(0,p.jsxs)("div",{className:"relative",children:[(0,p.jsx)(y.Z,{color:"text.secondary",className:"px-32 py-4 text-14 font-medium",children:n}),(0,p.jsx)(H.Z,{}),(0,p.jsx)(Y.Z,{className:"w-full m-0 p-0",children:r.children.map((function(e){return(0,p.jsx)(Q,{contact:e},e.id)}))})]},n)}))}):null},X=n(9038),$=n(27600),ee=n(55303),te=(0,X.UY)({tags:$.ZP,countries:ee.ZP,contacts:U,contact:F.ZP}),ne=(0,u.ZP)(r.Z)((function(e){return{"& .FusePageSimple-header":{backgroundColor:e.theme.palette.background.paper}}}));var ae=(0,s.Z)("contactsApp",te)((function(e){var t=(0,o.I0)(),n=(0,c.useRef)(null),r=(0,i.UO)(),s=(0,c.useState)(!1),u=(0,a.Z)(s,2),x=u[0],m=u[1],f=(0,d.Z)((function(e){return e.breakpoints.down("lg")}));return(0,l.KW)((function(){t(O()),t((0,ee.ox)()),t((0,$.NJ)())}),[t]),(0,c.useEffect)((function(){m(Boolean(r.id))}),[r]),(0,p.jsx)(ne,{header:(0,p.jsx)(K,{pageLayout:n}),content:(0,p.jsx)(V,{}),ref:n,rightSidebarContent:(0,p.jsx)(v,{}),rightSidebarOpen:x,rightSidebarOnClose:function(){return m(!1)},rightSidebarWidth:640,scroll:f?"normal":"content"})}))},32600:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(63366),r=n(87462),s=n(47313),c=n(83061),o=n(79637),i=n(51195),l=n(88564),u=n(77342),d=n(11778);function x(e){return(0,d.Z)("MuiListItemAvatar",e)}(0,n(29698).Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var m=n(46417),f=["className"],p=(0,l.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return(0,r.Z)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),h=s.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiListItemAvatar"}),l=n.className,d=(0,a.Z)(n,f),h=s.useContext(i.Z),v=(0,r.Z)({},n,{alignItems:h.alignItems}),Z=function(e){var t=e.alignItems,n=e.classes,a={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,o.Z)(a,x,n)}(v);return(0,m.jsx)(p,(0,r.Z)({className:(0,c.default)(Z.root,l),ownerState:v,ref:t},d))}))}}]);