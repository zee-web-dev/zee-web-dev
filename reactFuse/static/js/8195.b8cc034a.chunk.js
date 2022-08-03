"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[8195],{18195:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ln}});var r,a=t(29439),l=t(23132),i=t(47313),o=t(22408),s=t(88564),c=t(17551),u=t(97890),d=t(9506),m=t(47619),p=t(38768),f=t(94469),h=t(61113),x=t(48310),v=t(4942),b=t(15861),g=t(87757),j=t.n(g),y=t(80827),Z=t(31881),C=t.n(Z),w=(0,y.hg)("notesApp/labels/getLabels",(0,b.Z)(j().mark((function e(){var n,t;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C().get("/api/notes/labels");case 2:return n=e.sent,e.next=5,n.data;case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))),N=(0,y.hg)("notesApp/labels/createLabel",function(){var e=(0,b.Z)(j().mark((function e(n){var t,r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C().post("/api/notes/labels",n);case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),k=(0,y.hg)("notesApp/labels/updateLabel",function(){var e=(0,b.Z)(j().mark((function e(n){var t,r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C().put("/api/notes/labels/".concat(n.id),n);case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),S=(0,y.hg)("notesApp/labels/removeLabel",function(){var e=(0,b.Z)(j().mark((function e(n){var t,r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C().delete("/api/notes/labels/".concat(n));case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),A=(0,y.HF)({}),D=A.getSelectors((function(e){return e.notesApp.labels})),I=D.selectAll,O=D.selectEntities,z=(D.selectById,(0,y.oM)({name:"notesApp/labels",initialState:A.getInitialState({labelsDialogOpen:!1}),reducers:{openLabelsDialog:function(e,n){e.labelsDialogOpen=!0},closeLabelsDialog:function(e,n){e.labelsDialogOpen=!1}},extraReducers:(r={},(0,v.Z)(r,w.fulfilled,A.setAll),(0,v.Z)(r,k.fulfilled,A.upsertOne),(0,v.Z)(r,S.fulfilled,A.removeOne),(0,v.Z)(r,N.fulfilled,A.addOne),r)})),P=z.actions,E=P.openLabelsDialog,T=P.closeLabelsDialog,L=function(e){return e.notesApp.labels.labelsDialogOpen},F=z.reducer,R=t(1413),V=t(14790),M=t(75627),_=t(58970),H=t(24631),U=t(47131),q=t(41727),W=t(60194),B=t(83061),Q=t(28089),X=t(56993);var Y=function(e){return e=e||{},_.Z.defaults(e,{title:""})},$=t(46417),G={title:""},J=Q.Ry().shape({title:Q.Z_().required("You must enter a label title")});var K=function(e){var n=(0,o.I0)(),t=(0,M.cI)({mode:"onChange",defaultValues:G,resolver:(0,V.X)(J)}),r=t.control,a=t.formState,l=t.handleSubmit,i=t.reset,s=a.isValid,c=a.dirtyFields,u=a.errors;return(0,$.jsx)("form",{onSubmit:l((function(e){var t=Y(e);n(N(t)),i(G)})),children:(0,$.jsx)(W.ZP,{className:"p-0 mb-16",dense:!0,children:(0,$.jsx)(M.Qr,{name:"title",control:r,render:function(e){var n,t=e.field;return(0,$.jsx)(H.Z,(0,R.Z)((0,R.Z)({},t),{},{className:(0,B.default)("flex flex-1"),error:!!u.title,helperText:null===u||void 0===u||null===(n=u.title)||void 0===n?void 0:n.message,placeholder:"Create new label",variant:"outlined",InputProps:{startAdornment:(0,$.jsx)(q.Z,{position:"start",children:(0,$.jsx)(X.Z,{color:"action",children:"heroicons-outline:tag"})}),endAdornment:(0,$.jsx)(q.Z,{position:"end",children:(0,$.jsx)(U.Z,{className:"w-32 h-32 p-0","aria-label":"Delete",disabled:_.Z.isEmpty(c)||!s,type:"submit",size:"large",children:(0,$.jsx)(X.Z,{color:"action",size:20,children:"heroicons-outline:check"})})})}}))}})})})},ee=t(69649),ne=Q.Ry().shape({title:Q.Z_().required("You must enter a label title")});var te=function(e){var n=e.label,t=(0,o.I0)(),r=(0,M.cI)({mode:"onChange",defaultValues:n,resolver:(0,V.X)(ne)}),a=r.control,l=r.formState,s=(r.handleSubmit,r.reset),c=r.watch,u=(l.isValid,l.dirtyFields,l.errors),d=c();(0,i.useEffect)((function(){s(n)}),[n,s]);var m=(0,ee.Nr)((function(e,n){e&&d&&!_.Z.isEqual(n,e)&&t(k(n))}),300);function p(){t(S(n.id))}return(0,i.useEffect)((function(){m(n,d)}),[m,n,d]),(0,$.jsx)($.Fragment,{children:(0,$.jsx)(W.ZP,{className:"p-0 mb-16",dense:!0,children:(0,$.jsx)(M.Qr,{name:"title",control:a,render:function(e){var n,t=e.field;return(0,$.jsx)(H.Z,(0,R.Z)((0,R.Z)({},t),{},{className:(0,B.default)("flex flex-1"),error:!!u.title,helperText:null===u||void 0===u||null===(n=u.title)||void 0===n?void 0:n.message,placeholder:"Create new label",variant:"outlined",InputProps:{startAdornment:(0,$.jsx)(q.Z,{position:"start",children:(0,$.jsx)(X.Z,{color:"action",children:"heroicons-outline:tag"})}),endAdornment:(0,$.jsx)(q.Z,{position:"end",children:(0,$.jsx)(U.Z,{onClick:p,className:"w-32 h-32 p-0","aria-label":"Delete",size:"large",children:(0,$.jsx)(X.Z,{color:"action",size:20,children:"heroicons-outline:trash"})})})}}))}})})})};var re,ae=function(e){var n=(0,o.I0)(),t=(0,o.v9)(L),r=(0,o.v9)(I);return(0,$.jsxs)(f.Z,{classes:{paper:"w-full max-w-320 p-24 md:p-40 m-24"},onClose:function(e){return n(T())},open:t,children:[(0,$.jsx)(h.Z,{className:"text-20 mb-24 font-semibold",children:"Edit Labels"}),(0,$.jsxs)(x.Z,{dense:!0,children:[(0,$.jsx)(K,{}),r.map((function(e){return(0,$.jsx)(te,{label:e},e.id)}))]})]})},le=t(50301),ie=t(76747),oe=(0,y.hg)("notesApp/notes/getNotes",function(){var e=(0,b.Z)(j().mark((function e(n){var t,r,a,l;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.filter,t=n.id,"labels"===n.filter&&(r="/api/notes/labels/".concat(t)),"archive"===n.filter&&(r="/api/notes/archive"),"reminders"===n.filter&&(r="/api/notes/reminders"),n.filter||(r="/api/notes"),e.next=7,C().get(r);case 7:return a=e.sent,e.next=10,a.data;case 10:return l=e.sent,e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),se=(0,y.hg)("notesApp/notes/createNote",function(){var e=(0,b.Z)(j().mark((function e(n){var t,r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C().post("/api/notes",n);case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),ce=(0,y.hg)("notesApp/notes/updateNote",function(){var e=(0,b.Z)(j().mark((function e(n){var t,r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C().put("/api/notes/".concat(n.id),n);case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),ue=(0,y.hg)("notesApp/notes/removeNote",function(){var e=(0,b.Z)(j().mark((function e(n,t){var r,a,l;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.dispatch,t.getState,e.next=3,C().delete("/api/notes/".concat(n));case 3:return a=e.sent,e.next=6,a.data;case 6:return l=e.sent,r(je()),e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),de=(0,y.HF)({}),me=de.getSelectors((function(e){return e.notesApp.notes})),pe=me.selectAll,fe=me.selectEntities,he=(me.selectById,(0,y.oM)({name:"notesApp/notes",initialState:de.getInitialState({searchText:"",noteDialogId:null,variateDescSize:!0}),reducers:{setNotesSearchText:{reducer:function(e,n){e.searchText=n.payload},prepare:function(e){return{payload:e.target.value||""}}},resetNotesSearchText:function(e,n){e.searchText=""},toggleVariateDescSize:function(e,n){e.variateDescSize=!e.variateDescSize},openNoteDialog:function(e,n){e.noteDialogId=n.payload},closeNoteDialog:function(e,n){e.noteDialogId=n.null}},extraReducers:(re={},(0,v.Z)(re,oe.fulfilled,de.setAll),(0,v.Z)(re,se.fulfilled,de.addOne),(0,v.Z)(re,ce.fulfilled,de.upsertOne),(0,v.Z)(re,ue.fulfilled,de.removeOne),re)})),xe=he.actions,ve=xe.setNotesSearchText,be=(xe.resetNotesSearchText,xe.toggleVariateDescSize),ge=xe.openNoteDialog,je=xe.closeNoteDialog,ye=function(e){return e.notesApp.notes.variateDescSize},Ze=function(e){return e.notesApp.notes.searchText},Ce=(0,ie.P1)([function(e){return e.notesApp.notes.noteDialogId},fe],(function(e,n){return n[e]})),we=he.reducer,Ne=t(77911),ke=t(24193),Se=t(42420),Ae=t(56605),De=t(49709),Ie=t(8139),Oe=t(89600),ze=t(93433),Pe=t(34814);var Ee=function(e){return e=e||{},_.Z.defaults(e,{id:Pe.Z.generateGUID(),content:"",completed:!1})},Te={content:""},Le=Q.Ry().shape({content:Q.Z_().required("You must enter a label title")});var Fe=function(e){var n=(0,M.cI)({mode:"onChange",defaultValues:Te,resolver:(0,V.X)(Le)}),t=n.control,r=n.formState,a=n.handleSubmit,l=n.reset,i=r.isValid,o=r.dirtyFields,s=r.errors;return(0,$.jsx)("form",{onSubmit:a((function(n){e.onListItemAdd(Ee(n)),l(Te)})),children:(0,$.jsx)(W.ZP,{className:"p-0",dense:!0,children:(0,$.jsx)(M.Qr,{name:"content",control:t,render:function(e){var n,t=e.field;return(0,$.jsx)(H.Z,(0,R.Z)((0,R.Z)({},t),{},{className:"flex flex-1",error:!!s.content,helperText:null===s||void 0===s||null===(n=s.content)||void 0===n?void 0:n.message,placeholder:"Add an item",variant:"standard",autoFocus:!0,hiddenLabel:!0,InputProps:{disableUnderline:!0,className:"px-2",startAdornment:(0,$.jsx)(q.Z,{position:"start",children:(0,$.jsx)(U.Z,{className:"w-32 h-32 p-0 -mx-6","aria-label":"Add",type:"submit",disabled:_.Z.isEmpty(o)||!i,size:"large",children:(0,$.jsx)(X.Z,{size:20,children:"heroicons-outline:plus"})})})}}))}})})})},Re=t(44758);var Ve=function(e){function n(n){e.onListItemChange(_.Z.setIn(e.item,n.target.name,"checkbox"===n.target.type?n.target.checked:n.target.value))}return e.item?(0,$.jsxs)(W.ZP,{className:"p-0",dense:!0,children:[(0,$.jsx)(Re.Z,{className:"p-0",checked:e.item.completed,tabIndex:-1,disableRipple:!0,name:"completed",onChange:n,color:"default"}),(0,$.jsx)(Ae.Z,{className:(0,B.default)("flex flex-1 mx-8",e.item.completed&&"line-through opacity-50"),name:"text",value:e.item.content,onChange:n,disableUnderline:!0}),(0,$.jsx)(U.Z,{className:"w-32 h-32 mx-4 p-0","aria-label":"Delete",onClick:function(){return e.onListItemRemove(e.item.id)},size:"large",children:(0,$.jsx)(X.Z,{size:20,children:"heroicons-outline:trash"})})]},e.item.id):null};var Me=function(e){function n(n){e.onCheckListChange(e.tasks.map((function(e){return e.id===n.id?n:e})))}function t(n){e.onCheckListChange(e.tasks.filter((function(e){return e.id!==n})))}return e.tasks?(0,$.jsx)("div",{className:e.className,children:(0,$.jsxs)(x.Z,{dense:!0,children:[e.tasks.map((function(e){return(0,$.jsx)(Ve,{item:e,onListItemChange:n,onListItemRemove:t},e.id)})),(0,$.jsx)(Fe,{onListItemAdd:function(n){e.onCheckListChange([].concat((0,ze.Z)(e.tasks),[n]))}})]})}):null},_e=t(31685),He=t(83213),Ue=t(25002);var qe=function(e){var n=(0,o.v9)(I),t=(0,i.useState)(null),r=(0,a.Z)(t,2),l=r[0],s=r[1];function c(){s(null)}return(0,$.jsxs)("div",{children:[(0,$.jsx)(U.Z,{className:"w-32 h-32 mx-4 p-0",onClick:function(e){e.stopPropagation(),s(e.currentTarget)},size:"large",children:(0,$.jsx)(X.Z,{size:20,children:"heroicons-outline:tag"})}),(0,$.jsx)(Ue.ZP,{hideBackdrop:!0,open:Boolean(l),anchorEl:l,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},className:"pointer-events-none",classes:{paper:"pointer-events-auto py-8 prevent-add-close"},children:(0,$.jsx)(_e.Z,{onClickAway:c,children:(0,$.jsx)(x.Z,{className:"p-0",children:n.map((function(n){return(0,$.jsxs)(W.ZP,{button:!0,dense:!0,onClick:function(){return t=n.id,void e.onChange(_.Z.xor(e.note.labels,[t]));var t},children:[(0,$.jsx)(X.Z,{className:"list-item-icon",size:20,color:"action",children:e.note.labels.includes(n.id)?"heroicons-outline:check-circle":"heroicons-outline:minus-circle"}),(0,$.jsx)(He.Z,{className:"truncate px-8",primary:n.title,disableTypography:!0})]},n.id)}))})})})]})},We=t(93214);var Be=function(e){var n=new Date(e.reminder);return(0,$.jsx)(We.x,{clearable:!0,showTodayButton:!0,disablePast:!0,value:n,onChange:e.onChange,renderInput:function(e){return(0,$.jsx)(H.Z,(0,R.Z)({sx:{"& .MuiInputAdornment-root":{minWidth:40,minHeight:40,m:0},"& .MuiOutlinedInput-notchedOutline":{display:"none"},"& .MuiOutlinedInput-root":{padding:0},"& .MuiInputBase-input":{position:"absolute",pointerEvents:"none",visibility:"hidden"}}},e))},components:{OpenPickerIcon:function(){return(0,$.jsx)(X.Z,{size:20,children:"heroicons-outline:bell"})}}})};var Qe=function(e){return(0,$.jsx)($.Fragment,{children:(0,$.jsxs)("label",{htmlFor:"button-file",children:[(0,$.jsx)("input",{accept:"image/*",className:"hidden",id:"button-file",type:"file",onChange:function(n){var t=n.target.files[0];if(t){var r=new FileReader;r.readAsBinaryString(t),r.onload=function(){e.onChange&&e.onChange("data:".concat(t.type,";base64,").concat(btoa(r.result)))},r.onerror=function(){console.log("error on load image")}}}}),(0,$.jsx)(U.Z,{className:"w-32 h-32 mx-4 p-0",component:"span",size:"large",children:(0,$.jsx)(X.Z,{size:20,children:"heroicons-outline:photograph"})})]})})};var Xe=function(e){return e=e||{},_.Z.defaults(e,{title:"",content:"",tasks:[],image:"",reminder:null,labels:[],archived:!1,createdAt:null,updatedAt:null})},Ye=t(66212);var $e=function(e){return e.date?(0,$.jsx)(Ye.Z,{icon:(0,$.jsx)(X.Z,{size:16,children:"heroicons-outline:clock"}),label:(0,Oe.Z)(new Date(e.date),"MMM dd yy, h:mm"),classes:(0,R.Z)({root:(0,B.default)("h-24 border-0",e.className),label:"px-12 py-4 text-12 font-medium leading-none",deleteIcon:"w-16"},e.classes),sx:{color:"text.secondary",backgroundColor:function(e){return(0,c._j)(e.palette.background.default,.03)}},variant:"outlined",onDelete:e.onDelete}):null},Ge=t(29466);var Je=function(e){var n=(0,o.v9)(O);if(!n)return null;var t=n[e.id];if(!t)return null;var r=e.linkable?{element:Ge.rU,onClick:function(e){e.stopPropagation()},to:"/apps/notes/labels/".concat(t.id)}:{};return(0,$.jsx)(Ye.Z,(0,R.Z)((0,R.Z)({},r),{},{label:t.title,classes:(0,R.Z)({root:(0,B.default)("h-24 border-0",e.className),label:"px-12 py-4 text-12 font-medium leading-none",deleteIcon:"w-16"},e.classes),sx:{color:"text.secondary",backgroundColor:function(e){return(0,c._j)(e.palette.background.default,.03)}},variant:"outlined",onDelete:e.onDelete}))},Ke=Q.Ry().shape({title:Q.Z_(),content:Q.Z_(),image:Q.Z_(),tasks:Q.IX(),oneOfThemRequired:Q.Xg().when(["title","content","image","tasks"],{is:function(e,n,t,r){return!e&&!n&&!t&&!r||!!e&&!!n&&!!t&&!!r},then:Q.Xg().required(""),otherwise:Q.Xg()})});function en(e){var n=(0,i.useState)(!1),t=(0,a.Z)(n,2),r=t[0],l=t[1],s=(0,u.UO)(),c=((0,o.I0)(),_.Z.merge({},Xe(),e.note,s.labelId?{labels:[s.labelId]}:null,"archive"===s.id?{archived:!0}:null)),d=(0,M.cI)({mode:"onChange",defaultValues:c,resolver:(0,V.X)(Ke)}),m=d.formState,p=d.handleSubmit,f=d.getValues,x=(d.reset,d.watch),v=d.setValue,b=d.control,g=m.isValid,j=m.dirtyFields,y=(m.errors,x());function Z(n){e.onCreate&&e.onCreate(n)}return(0,i.useEffect)((function(){e.note&&"new"!==e.variant&&e.onChange&&(_.Z.isEqual(e.note,y)||e.onChange(y))}),[y,e,c]),(0,$.jsxs)("div",{className:"flex flex-col w-full",children:[(0,$.jsx)(Ne.Z,{className:"flex flex-auto w-full max-h-640",children:(0,$.jsxs)("div",{className:"w-full",children:[(0,$.jsx)(M.Qr,{name:"image",control:b,defaultValue:"",render:function(e){var n=e.field,t=n.onChange,r=n.value;return r&&""!==r?(0,$.jsxs)("div",{className:"relative",children:[(0,$.jsx)("img",{src:r,className:"w-full block",alt:"note"}),(0,$.jsx)(Se.Z,{className:"absolute right-0 bottom-0 m-8",variant:"extended",size:"small",color:"secondary","aria-label":"Delete Image",type:"button",onClick:function(){return t("")},children:(0,$.jsx)(X.Z,{size:20,children:"heroicons-outline:trash"})})]}):null}}),(0,$.jsx)("div",{className:"px-20 my-16",children:(0,$.jsx)(M.Qr,{name:"title",control:b,render:function(e){var n=e.field;return(0,$.jsx)(Ae.Z,(0,R.Z)((0,R.Z)({},n),{},{className:"font-semibold text-14",placeholder:"Title",type:"text",disableUnderline:!0,fullWidth:!0}))}})}),(0,$.jsx)("div",{className:"px-20 my-16",children:(0,$.jsx)(M.Qr,{name:"content",control:b,render:function(e){var n=e.field;return(0,$.jsx)(Ae.Z,(0,R.Z)((0,R.Z)({},n),{},{placeholder:"Take a note...",multiline:!0,rows:"4",disableUnderline:!0,fullWidth:!0}))}})}),(0,$.jsx)(M.Qr,{name:"tasks",control:b,defaultValue:[],render:function(e){var n=e.field,t=n.onChange,a=n.value;return 0===(null===a||void 0===a?void 0:a.length)&&!r||!a&&!r?null:(0,$.jsx)("div",{className:"px-16",children:(0,$.jsx)(Me,{tasks:a||[],onCheckListChange:function(e){return t(e)}})})}}),(y.labels||y.reminder||y.createdAt)&&(0,$.jsxs)("div",{className:"flex flex-wrap w-full px-20 my-16 -mx-4",children:[y.reminder&&(0,$.jsx)($e,{className:"mt-4 mx-4",date:y.reminder,onDelete:function(){v("reminder",null)}}),(0,$.jsx)(M.Qr,{name:"labels",control:b,defaultValue:[],render:function(e){var n=e.field,t=n.onChange,r=n.value;return r?r.map((function(e){return(0,$.jsx)(Je,{id:e,className:"mt-4 mx-4",onDelete:function(){return t(r.filter((function(n){return n!==e})))}},e)})):null}}),y.createdAt&&(0,$.jsxs)(h.Z,{color:"text.secondary",className:"text-12 mt-8 mx-4",children:["Edited: ",(0,Oe.Z)(new Date(y.createdAt),"MMM dd yy, h:mm")]})]})]})}),(0,$.jsxs)("div",{className:"flex flex-auto justify-between items-center px-16 pb-12",children:[(0,$.jsxs)("div",{className:"flex items-center",children:[(0,$.jsx)(De.Z,{title:"Remind me",placement:"bottom",children:(0,$.jsx)("div",{children:(0,$.jsx)(M.Qr,{name:"reminder",control:b,defaultValue:[],render:function(e){var n=e.field,t=n.onChange,r=n.value;return(0,$.jsx)(Be,{reminder:r,onChange:function(e){return t(e)}})}})})}),(0,$.jsx)(De.Z,{title:"Add image",placement:"bottom",children:(0,$.jsx)("div",{children:(0,$.jsx)(Qe,{onChange:function(e){return v("image",e,{shouldDirty:!0,shouldValidate:!0})}})})}),(0,$.jsx)(De.Z,{title:"Add tasks",placement:"bottom",children:(0,$.jsx)(U.Z,{className:"w-32 h-32 mx-4 p-0",onClick:function(){return l(!r)},size:"large",children:(0,$.jsx)(X.Z,{size:20,children:"heroicons-outline:pencil-alt"})})}),(0,$.jsx)(De.Z,{title:"Change labels",placement:"bottom",children:(0,$.jsx)("div",{children:(0,$.jsx)(qe,{note:y,onChange:function(e){return v("labels",e)}})})}),(0,$.jsx)(M.Qr,{name:"archived",control:b,defaultValue:!1,render:function(n){var t=n.field,r=t.onChange,a=t.value;return(0,$.jsx)(De.Z,{title:a?"Unarchive":"Archive",placement:"bottom",children:(0,$.jsx)("div",{children:(0,$.jsx)(U.Z,{className:"w-32 h-32 mx-4 p-0",onClick:function(){r(!a),"new"===e.variant&&setTimeout((function(){return Z(f())}))},size:"large",children:(0,$.jsx)(X.Z,{size:20,children:a?"heroicons-solid:archive":"heroicons-outline:archive"})})})})}})]}),(0,$.jsx)("div",{className:"flex items-center",children:"new"===e.variant?(0,$.jsx)(ke.Z,{className:"m-4 p-8",type:"submit",variant:"contained",color:"secondary",size:"small",onClick:p(Z),disabled:_.Z.isEmpty(j)||!g,children:"Create"}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(De.Z,{title:"Delete Note",placement:"bottom",children:(0,$.jsx)(U.Z,{className:"w-32 h-32 mx-4 p-0",onClick:e.onRemove,size:"large",children:(0,$.jsx)(X.Z,{size:20,children:"heroicons-outline:trash"})})}),(0,$.jsx)(ke.Z,{className:"m-4",onClick:e.onClose,variant:"default",children:"Close"})]})})]})]})}en.defaultProps={variant:"edit",note:null};var nn=(0,Ie.Z)(en),tn=(0,i.forwardRef)((function(e,n){return(0,$.jsx)(le.Z,(0,R.Z)({direction:"up",ref:n},e))}));var rn=function(e){var n=(0,o.I0)(),t=(0,u.UO)(),r=(0,o.v9)(Ce),a=(0,ee.Nr)((function(e){n(ce(e)).then((function(){n(oe(t))}))}),600);return r?(0,$.jsx)(f.Z,{classes:{paper:"w-full m-24"},TransitionComponent:tn,onClose:function(e){return n(je())},open:Boolean(null===r||void 0===r?void 0:r.id),children:(0,$.jsx)(nn,{note:r,onChange:a,onClose:function(e){return n(je())},onRemove:function(){n(ue(null===r||void 0===r?void 0:r.id))}})}):null},an=t(82295);var ln=function(e){var n=(0,o.I0)(),t=(0,i.useState)(!1),r=(0,a.Z)(t,2),l=r[0],s=r[1];function c(){l&&(s(!1),document.removeEventListener("keydown",u,!1))}function u(e){27===e.keyCode&&c()}return(0,$.jsx)(an.Z,{className:"flex items-center w-full max-w-512 mt-8 mb-16 min-h-48 shadow shrink-0 cursor-text",children:l?(0,$.jsx)(_e.Z,{onClickAway:function(e){var n=document.querySelector(".prevent-add-close");!!n&&n.contains(e.target)||c()},children:(0,$.jsx)("div",{className:"w-full",children:(0,$.jsx)(nn,{onCreate:function(e){n(se(e)),c()},variant:"new"})})}):(0,$.jsx)(h.Z,{className:"w-full px-16 py-12 text-16 w-full",color:"text.secondary",onClick:function(e){e.stopPropagation(),s(!0),document.addEventListener("keydown",u,!1)},children:"Take a note..."})})},on=t(15671),sn=t(43144),cn=t(97326),un=t(60136),dn=t(29388);function mn(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function pn(){return pn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},pn.apply(this,arguments)}function fn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function hn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?fn(Object(t),!0).forEach((function(n){xn(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fn(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function xn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var vn={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},bn=function(e){(0,un.Z)(t,e);var n=(0,dn.Z)(t);function t(e){var r,a;return(0,on.Z)(this,t),(r=n.call(this,e)).reCalculateColumnCount=r.reCalculateColumnCount.bind((0,cn.Z)(r)),r.reCalculateColumnCountDebounce=r.reCalculateColumnCountDebounce.bind((0,cn.Z)(r)),a=r.props.breakpointCols&&r.props.breakpointCols.default?r.props.breakpointCols.default:parseInt(r.props.breakpointCols)||2,r.state={columnCount:a},r}return(0,sn.Z)(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,n=this.props.breakpointCols;"object"!==typeof n&&(n={default:parseInt(n)||2});var t=1/0,r=n.default||2;for(var a in n){var l=parseInt(a);l>0&&e<=l&&l<t&&(t=l,r=n[a])}r=Math.max(1,parseInt(r)||1),this.state.columnCount!==r&&this.setState({columnCount:r})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,n=new Array(e),t=i.Children.toArray(this.props.children),r=0;r<t.length;r++){var a=r%e;n[a]||(n[a]=[]),n[a].push(t[r])}return n}},{key:"renderColumns",value:function(){var e=this.props,n=e.column,t=e.columnAttrs,r=void 0===t?{}:t,a=e.columnClassName,l=this.itemsInColumns(),o="".concat(100/l.length,"%"),s=a;s&&"string"!==typeof s&&(this.logDeprecated('The property "columnClassName" requires a string'),"undefined"===typeof s&&(s="my-masonry-grid_column"));var c=hn(hn(hn({},n),r),{},{style:hn(hn({},r.style),{},{width:o}),className:s});return l.map((function(e,n){return i.createElement("div",pn({},c,{key:n}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,n=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),t=mn(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),r=n;return"string"!==typeof n&&(this.logDeprecated('The property "className" requires a string'),"undefined"===typeof n&&(r="my-masonry-grid")),i.createElement("div",pn({},t,{className:r}),this.renderColumns())}}]),t}(i.Component);bn.defaultProps=vn;var gn=bn,jn=t(73428),yn=t(62321),Zn={1:{fontSize:14,lineHeight:19},2:{fontSize:18,lineHeight:28},3:{fontSize:24,lineHeight:36},4:{fontSize:36,lineHeight:48},5:{fontSize:48,lineHeight:60}};var Cn=function(e,n,t){if(n){n.style.fontSize=null,n.style.lineHeight=null;var r=n.clientWidth;if(0!==r&&t){var a,l=document.createElement("div");l.style.display="inline-block",l.style.fontSize="10px",l.style.fontWeight="600",l.style.lineHeight="10px",l.style.position="absolute",l.style.whiteSpace="pre-wrap",l.style.wordWrap="break-word",l.style.pointerEvents="none",l.style.visibility="hidden",document.body.appendChild(l);var i=e.split(" ").map((function(e){return l.textContent=e.toString(),l.clientWidth})),o=Math.max.apply(Math,(0,ze.Z)(i)),s=Math.floor(10*r/o);s<18?a=1:s>=18&&s<24?a=2:s>=24&&s<36?a=3:s>=36&&s<48?a=4:s>=48&&(a=5);var c=Zn[a],u=c.lineHeight,d=c.fontSize;l.textContent=e,l.style.width="".concat(r,"px"),l.style.fontSize="".concat(d,"px"),l.style.lineHeight="".concat(u,"px");var m=l.clientHeight/u;m>4&&m<6?a=4:m>=6&&m<9?a=3:m>=9&&m<11?a=2:m>=11&&(a=1),document.body.removeChild(l),u=Zn[a].lineHeight,d=Zn[a].fontSize,n.style.fontSize="".concat(d,"px"),n.style.lineHeight="".concat(u,"px")}}};var wn=function(e){var n=(0,o.I0)();return(0,$.jsx)(yn.E.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.1}},children:(0,$.jsxs)(jn.Z,{className:(0,B.default)("cursor-pointer",e.className),onClick:function(){return n(ge(e.note.id))},children:[e.note.image&&""!==e.note.image&&(0,$.jsx)("img",{src:e.note.image,className:"w-full block",alt:"note"}),e.note.title&&""!==e.note.title&&(0,$.jsx)(h.Z,{className:"px-20 my-16 text-14 font-semibold",children:e.note.title}),e.note.content&&""!==e.note.content&&(0,$.jsx)(h.Z,{className:"px-20 my-16 ",component:"div",children:(0,$.jsx)("div",{className:(0,B.default)("w-full break-words",e.variateDescSize?"font-500":"text-14"),ref:function(n){setTimeout((function(){return Cn(e.note.content,n,e.variateDescSize)}))},children:e.note.content})}),e.note.tasks&&e.note.tasks.length>0&&(0,$.jsx)("ul",{className:"px-20 my-16 flex flex-wrap list-reset",children:e.note.tasks.map((function(e){return(0,$.jsxs)("li",{className:"flex items-center w-full",children:[(0,$.jsx)(X.Z,{color:e.completed?"secondary":"disabled",size:20,children:"heroicons-outline:check-circle"}),(0,$.jsx)(h.Z,{className:(0,B.default)("truncate mx-8",e.completed&&"line-through"),color:e.completed?"text.secondary":"inherit",children:e.content})]},e.id)}))}),(e.note.labels.length>0||e.note.reminder)&&(0,$.jsxs)("div",{className:"px-20 my-16 flex flex-wrap w-full -mx-2",children:[e.note.reminder&&(0,$.jsx)($e,{className:"mt-4 mx-2 max-w-full",date:e.note.reminder}),e.note.labels.map((function(e){return(0,$.jsx)(Je,{id:e,className:"mt-4 mx-2 max-w-full",linkable:!0},e)}))]})]})})};var Nn=(0,Ie.Z)((function(e){var n=(0,o.v9)(pe),t=(0,o.v9)(ye),r=(0,o.v9)(Ze),l=(0,u.UO)(),s=(0,i.useState)(null),c=(0,a.Z)(s,2),d=c[0],m=c[1];return(0,i.useEffect)((function(){n.length>0&&m(function(){l.id,l.labelId;var e=n;return 0===r.length?e:e=Pe.Z.filterArrayByString(e,r)}())}),[n,r,l]),d&&0!==d.length?(0,$.jsx)("div",{className:"flex flex-wrap w-full",children:(0,$.jsx)(gn,{breakpointCols:{default:6,1920:5,1600:4,1366:3,1280:4,960:3,600:2,480:1},className:"my-masonry-grid flex w-full",columnClassName:"my-masonry-grid_column flex flex-col p-8",children:d.map((function(e){return(0,$.jsx)(wn,{note:e,className:"w-full rounded-20 shadow mb-16",variateDescSize:t},e.id)}))})}):(0,$.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,$.jsx)(h.Z,{color:"text.secondary",variant:"h5",children:"There are no notes!"})})})),kn=t(57451),Sn=t(49914);function An(e){var n=(0,o.I0)(),t=(0,o.v9)(Ze);return(0,$.jsx)(Sn.Z,{component:yn.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex flex-1 items-center px-16 rounded-full h-40 w-fullsm:max-w-240",placeholder:"Search note",variant:"outlined",fullWidth:!0,startAdornment:(0,$.jsx)(q.Z,{position:"start",children:(0,$.jsx)(X.Z,{color:"disabled",children:"heroicons-solid:search"})}),inputProps:{"aria-label":"Search"},value:t,onChange:function(e){return n(ve(e))}})}An.defaultProps={trigger:(0,$.jsx)(U.Z,{className:"w-64 h-64",size:"large",children:(0,$.jsx)(X.Z,{children:"heroicons-outline:search"})})};var Dn=An;var In=function(e){var n=(0,o.I0)(),t=(0,o.v9)(ye);return(0,$.jsxs)("div",{className:"flex flex-col sm:flex-row flex-1 items-center justify-between p-8 sm:p-24 sm:px-32 relative",children:[(0,$.jsxs)("div",{className:"flex shrink items-center sm:w-224",children:[(0,$.jsx)(kn.Z,{lgUp:!0,children:(0,$.jsx)(U.Z,{onClick:function(n){return e.onSetSidebarOpen(!0)},"aria-label":"open left sidebar",size:"large",children:(0,$.jsx)(X.Z,{children:"heroicons-outline:menu"})})}),(0,$.jsx)("div",{className:"flex items-center",children:(0,$.jsx)(h.Z,{component:yn.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-24 md:text-32 font-extrabold tracking-tight leading-none",children:"Notes"})})]}),(0,$.jsxs)("div",{className:"flex flex-1 w-full sm:w-auto items-center justify-end space-x-12",children:[(0,$.jsx)(De.Z,{title:"Toggle Variate Description Size",children:(0,$.jsx)(U.Z,{onClick:function(e){return n(be())},size:"large",children:(0,$.jsx)(X.Z,{color:t?"action":"disabled",children:"heroicons-solid:switch-vertical"})})}),(0,$.jsx)(Dn,{})]})]})},On=t(5227),zn=(0,s.ZP)(W.ZP)((function(e){var n=e.theme;e.active;return{color:"inherit!important",textDecoration:"none!important",height:40,width:"100%",borderRadius:20,paddingLeft:16,paddingRight:16,marginBottom:8,fontWeight:500,"&.active":{backgroundColor:"light"===n.palette.mode?"rgba(0, 0, 0, .05)!important":"rgba(255, 255, 255, .1)!important",pointerEvents:"none","& .list-item-icon":{color:n.palette.secondary.main}},"& .list-item-icon":{marginRight:16}}}));var Pn=function(e){var n=(0,o.I0)(),t=(0,o.v9)(I);return(0,$.jsx)("div",{className:"px-16 py-24",children:(0,$.jsx)("div",{component:yn.E.div,initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},children:(0,$.jsxs)(x.Z,{className:"",children:[(0,$.jsxs)(zn,{button:!0,component:On.Z,to:"/apps/notes",end:!0,activeClassName:"active",children:[(0,$.jsx)(X.Z,{className:"list-item-icon",color:"disabled",children:"heroicons-outline:pencil-alt"}),(0,$.jsx)(He.Z,{className:"truncate",primary:"Notes",disableTypography:!0})]}),(0,$.jsxs)(zn,{button:!0,component:On.Z,to:"/apps/notes/reminders",end:!0,activeClassName:"active",children:[(0,$.jsx)(X.Z,{className:"list-item-icon",color:"disabled",children:"heroicons-outline:bell"}),(0,$.jsx)(He.Z,{className:"truncate",primary:"Reminders",disableTypography:!0})]}),(0,$.jsxs)(zn,{button:!0,component:On.Z,to:"/apps/notes/archive",activeClassName:"active",children:[(0,$.jsx)(X.Z,{className:"list-item-icon",color:"disabled",children:"heroicons-outline:archive"}),(0,$.jsx)(He.Z,{className:"truncate",primary:"Archive",disableTypography:!0})]}),t.map((function(e){return(0,$.jsxs)(zn,{button:!0,component:On.Z,to:"/apps/notes/labels/".concat(e.id),end:!0,activeClassName:"active",children:[(0,$.jsx)(X.Z,{className:"list-item-icon",color:"disabled",children:"heroicons-outline:tag"}),(0,$.jsx)(He.Z,{className:"truncate",primary:e.title,disableTypography:!0})]},e.id)})),(0,$.jsxs)(zn,{button:!0,onClick:function(e){return n(E())},children:[(0,$.jsx)(X.Z,{className:"list-item-icon",color:"disabled",children:"heroicons-outline:pencil"}),(0,$.jsx)(He.Z,{className:"truncate",primary:"Edit Labels",disableTypography:!0})]})]})})})},En=(0,t(9038).UY)({notes:we,labels:F}),Tn=(0,s.ZP)(m.Z)((function(e){e.theme;return{"& .FusePageCarded-header":{},"& .FusePageCarded-sidebar":{},"& .FusePageCarded-leftSidebar":{}}}));var Ln=(0,l.Z)("notesApp",En)((function(e){var n=(0,o.I0)(),t=(0,p.Z)((function(e){return e.breakpoints.down("lg")})),r=(0,i.useState)(!t),l=(0,a.Z)(r,2),s=l[0],m=l[1],f=(0,u.UO)();return(0,i.useEffect)((function(){n(oe(f)),n(w())}),[n,f]),(0,$.jsx)($.Fragment,{children:(0,$.jsx)(Tn,{header:(0,$.jsx)(In,{onSetSidebarOpen:m}),content:(0,$.jsxs)("div",{className:"flex flex-col w-full items-center p-24",children:[(0,$.jsxs)(d.Z,{className:"w-full rounded-16 border p-12 flex flex-col items-center",sx:{backgroundColor:function(e){return"light"===e.palette.mode?(0,c.$n)(e.palette.background.default,.4):(0,c.$n)(e.palette.background.default,.02)}},children:[(0,$.jsx)(ln,{}),(0,$.jsx)(Nn,{})]}),(0,$.jsx)(rn,{}),(0,$.jsx)(ae,{})]}),leftSidebarOpen:s,leftSidebarOnClose:function(){m(!1)},leftSidebarContent:(0,$.jsx)(Pn,{}),scroll:t?"normal":"content"})})}))}}]);