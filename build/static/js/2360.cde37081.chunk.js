"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[2360],{67921:function(e,s,n){n.d(s,{Z:function(){return u}});var a=n(29439),t=n(61113),c=n(83061),r=n(70816),l=n.n(r),i=n(47313),o=n(46417);function d(e){var s=e.onComplete,n=(0,i.useState)(l().isMoment(e.endDate)?e.endDate:l()(e.endDate)),r=(0,a.Z)(n,1)[0],d=(0,i.useState)({days:0,hours:0,minutes:0,seconds:0}),u=(0,a.Z)(d,2),m=u[0],x=u[1],h=(0,i.useRef)(),f=(0,i.useCallback)((function(){window.clearInterval(h.current),s&&s()}),[s]),j=(0,i.useCallback)((function(){var e=l()(),s=r.diff(e,"seconds");if(s<0)f();else{var n=l().duration(s,"seconds");x({days:n.asDays().toFixed(0),hours:n.hours(),minutes:n.minutes(),seconds:n.seconds()})}}),[f,r]);return(0,i.useEffect)((function(){return h.current=setInterval(j,1e3),function(){clearInterval(h.current)}}),[j]),(0,o.jsxs)("div",{className:(0,c.default)("flex items-center",e.className),children:[(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[(0,o.jsx)(t.Z,{variant:"h4",className:"mb-4",children:m.days}),(0,o.jsx)(t.Z,{variant:"caption",color:"text.secondary",children:"days"})]}),(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[(0,o.jsx)(t.Z,{variant:"h4",className:"mb-4",children:m.hours}),(0,o.jsx)(t.Z,{variant:"caption",color:"text.secondary",children:"hours"})]}),(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[(0,o.jsx)(t.Z,{variant:"h4",className:"mb-4",children:m.minutes}),(0,o.jsx)(t.Z,{variant:"caption",color:"text.secondary",children:"minutes"})]}),(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center px-12",children:[(0,o.jsx)(t.Z,{variant:"h4",className:"mb-4",children:m.seconds}),(0,o.jsx)(t.Z,{variant:"caption",color:"text.secondary",children:"seconds"})]})]})}d.defaultProps={endDate:l()().add(15,"days")};var u=(0,i.memo)(d)},2360:function(e,s,n){n.r(s);var a=n(67921),t=n(98655),c=n(61113),r=n(29466),l=n(46417);s.default=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{variant:"h4",className:"mb-40 font-700",children:"FuseCountdown"}),(0,l.jsxs)(c.Z,{className:"mb-16",component:"p",children:[(0,l.jsx)("code",{children:"FuseCountdown"})," is a custom-built Fuse component that allows you to create countdowns."]}),(0,l.jsx)(c.Z,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Usage"}),(0,l.jsx)(t.Z,{component:"pre",className:"language-jsx",children:'\n          <FuseCountdown endDate="2023-10-29" className="my-48"/>\n        '}),(0,l.jsx)(c.Z,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Preview"}),(0,l.jsx)(a.Z,{endDate:"2023-10-29",className:"my-48"}),(0,l.jsx)(c.Z,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Demos"}),(0,l.jsx)("ul",{children:(0,l.jsx)("li",{className:"mb-8",children:(0,l.jsx)(r.rU,{to:"/pages/coming-soon/classic",children:"Coming Soon"})})})]})}}}]);