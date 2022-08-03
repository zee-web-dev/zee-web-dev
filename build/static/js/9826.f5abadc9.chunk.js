"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[9826],{49826:function(e,s,r){r.r(s);var a=r(1413),l=r(14790),i=r(75627),t=r(24193),n=r(44758),o=r(1550),d=r(83929),c=r(24631),m=r(61113),u=r(29466),x=r(28089),h=r(58970),p=r(82295),f=r(76017),v=r(63585),g=r(9506),j=r(15480),w=r(46417),y=x.Ry().shape({name:x.Z_().required("You must enter your name"),email:x.Z_().email("You must enter a valid email").required("You must enter a email"),password:x.Z_().required("Please enter your password.").min(8,"Password is too short - should be 8 chars minimum."),passwordConfirm:x.Z_().oneOf([x.iH("password"),null],"Passwords must match"),acceptTermsConditions:x.O7().oneOf([!0],"The terms and conditions must be accepted.")}),Z={name:"",email:"",password:"",passwordConfirm:"",acceptTermsConditions:!1};s.default=function(){var e=(0,i.cI)({mode:"onChange",defaultValues:Z,resolver:(0,l.X)(y)}),s=e.control,r=e.formState,x=e.handleSubmit,b=e.reset,N=r.isValid,C=r.dirtyFields,k=r.errors;return(0,w.jsx)("div",{className:"flex flex-col flex-auto items-center sm:justify-center min-w-0 md:p-32",children:(0,w.jsxs)(p.Z,{className:"flex w-full sm:w-auto min-h-full sm:min-h-auto md:w-full md:max-w-6xl rounded-0 sm:rounded-2xl sm:shadow overflow-hidden",children:[(0,w.jsxs)(g.Z,{className:"relative hidden md:flex flex-auto items-center justify-center h-full p-64 lg:px-112 overflow-hidden",sx:{backgroundColor:"primary.main"},children:[(0,w.jsx)("svg",{className:"absolute inset-0 pointer-events-none",viewBox:"0 0 960 540",width:"100%",height:"100%",preserveAspectRatio:"xMidYMax slice",xmlns:"http://www.w3.org/2000/svg",children:(0,w.jsxs)(g.Z,{component:"g",sx:{color:"primary.light"},className:"opacity-20",fill:"none",stroke:"currentColor",strokeWidth:"100",children:[(0,w.jsx)("circle",{r:"234",cx:"196",cy:"23"}),(0,w.jsx)("circle",{r:"234",cx:"790",cy:"491"})]})}),(0,w.jsxs)(g.Z,{component:"svg",className:"absolute -top-64 -right-64 opacity-20",sx:{color:"primary.light"},viewBox:"0 0 220 192",width:"220px",height:"192px",fill:"none",children:[(0,w.jsx)("defs",{children:(0,w.jsx)("pattern",{id:"837c3e70-6c3a-44e6-8854-cc48c737b659",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:(0,w.jsx)("rect",{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"})})}),(0,w.jsx)("rect",{width:"220",height:"192",fill:"url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"})]}),(0,w.jsxs)("div",{className:"z-10 relative w-full max-w-2xl",children:[(0,w.jsxs)("div",{className:"text-7xl font-bold leading-none text-gray-100",children:[(0,w.jsx)("div",{children:"Welcome to"}),(0,w.jsx)("div",{children:"our community"})]}),(0,w.jsx)("div",{className:"mt-24 text-lg tracking-tight leading-6 text-gray-400",children:"Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today."}),(0,w.jsxs)("div",{className:"flex items-center mt-32",children:[(0,w.jsxs)(f.Z,{sx:{"& .MuiAvatar-root":{borderColor:"primary.main"}},children:[(0,w.jsx)(v.Z,{src:"assets/images/avatars/female-18.jpg"}),(0,w.jsx)(v.Z,{src:"assets/images/avatars/female-11.jpg"}),(0,w.jsx)(v.Z,{src:"assets/images/avatars/male-09.jpg"}),(0,w.jsx)(v.Z,{src:"assets/images/avatars/male-16.jpg"})]}),(0,w.jsx)("div",{className:"ml-16 font-medium tracking-tight text-gray-400",children:"More than 17k people joined us, it's your turn"})]})]})]}),(0,w.jsx)("div",{className:"w-full sm:w-auto py-32 px-16 sm:p-48 md:p-64 rtl:border-r-1 ltr:border-l-1",children:(0,w.jsxs)("div",{className:"w-full max-w-320 sm:w-320 mx-auto sm:mx-0",children:[(0,w.jsx)("img",{className:"w-48",src:"assets/images/logo/logo.svg",alt:"logo"}),(0,w.jsx)(m.Z,{className:"mt-32 text-4xl font-extrabold tracking-tight leading-tight",children:"Sign up"}),(0,w.jsxs)("div",{className:"flex items-baseline mt-2 font-medium",children:[(0,w.jsx)(m.Z,{children:"Already have an account?"}),(0,w.jsx)(u.rU,{className:"ml-4",to:"/sign-in",children:"Sign in"})]}),(0,w.jsxs)("form",{name:"registerForm",noValidate:!0,className:"flex flex-col justify-center w-full mt-32",onSubmit:x((function(){b(Z)})),children:[(0,w.jsx)(i.Qr,{name:"name",control:s,render:function(e){var s,r=e.field;return(0,w.jsx)(c.Z,(0,a.Z)((0,a.Z)({},r),{},{className:"mb-24",label:"Name",autoFocus:!0,type:"name",error:!!k.name,helperText:null===k||void 0===k||null===(s=k.name)||void 0===s?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0}))}}),(0,w.jsx)(i.Qr,{name:"email",control:s,render:function(e){var s,r=e.field;return(0,w.jsx)(c.Z,(0,a.Z)((0,a.Z)({},r),{},{className:"mb-24",label:"Email",type:"email",error:!!k.email,helperText:null===k||void 0===k||null===(s=k.email)||void 0===s?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0}))}}),(0,w.jsx)(i.Qr,{name:"password",control:s,render:function(e){var s,r=e.field;return(0,w.jsx)(c.Z,(0,a.Z)((0,a.Z)({},r),{},{className:"mb-24",label:"Password",type:"password",error:!!k.password,helperText:null===k||void 0===k||null===(s=k.password)||void 0===s?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0}))}}),(0,w.jsx)(i.Qr,{name:"passwordConfirm",control:s,render:function(e){var s,r=e.field;return(0,w.jsx)(c.Z,(0,a.Z)((0,a.Z)({},r),{},{className:"mb-24",label:"Password (Confirm)",type:"password",error:!!k.passwordConfirm,helperText:null===k||void 0===k||null===(s=k.passwordConfirm)||void 0===s?void 0:s.message,variant:"outlined",required:!0,fullWidth:!0}))}}),(0,w.jsx)(i.Qr,{name:"acceptTermsConditions",control:s,render:function(e){var s,r=e.field;return(0,w.jsxs)(o.Z,{className:"items-center",error:!!k.acceptTermsConditions,children:[(0,w.jsx)(d.Z,{label:"I agree to the Terms of Service and Privacy Policy",control:(0,w.jsx)(n.Z,(0,a.Z)({size:"small"},r))}),(0,w.jsx)(j.Z,{children:null===k||void 0===k||null===(s=k.acceptTermsConditions)||void 0===s?void 0:s.message})]})}}),(0,w.jsx)(t.Z,{variant:"contained",color:"secondary",className:" w-full mt-24","aria-label":"Register",disabled:h.Z.isEmpty(C)||!N,type:"submit",size:"large",children:"Create your free account"})]})]})})]})})}}}]);