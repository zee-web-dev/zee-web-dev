"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[1779],{11779:function(t,e,n){n.r(e);var s=n(98655),a=n(61113),l=n(46417);e.default=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Z,{variant:"h4",className:"mb-40 font-700",children:"Changing default font"}),(0,l.jsx)(a.Z,{className:"mb-16",component:"p",children:"There is two way to inject font-family."}),(0,l.jsxs)("ul",{className:"list-decimal ml-16",children:[(0,l.jsxs)("li",{children:[(0,l.jsx)(a.Z,{className:"mb-24",children:"You can add the font link inside head of the public/index.html."}),(0,l.jsx)(s.Z,{component:"pre",className:"language-html mb-24",children:'\n                          <link href="https://fonts.googleapis.com/css?family=Roboto&amp;subset=vietnamese" rel="stylesheet">\n                        '})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)(a.Z,{className:"mb-24",children:"You can install typeface font package and import like we do at src/index.js"}),(0,l.jsx)(s.Z,{component:"pre",className:"language-jsx mb-24",children:"\n                            import 'typeface-roboto';\n                        "})]})]}),(0,l.jsxs)(a.Z,{className:"mt-16 mb-8",component:"p",children:["You need to add ",(0,l.jsx)("code",{children:"typography.fontFamily"})," values into the desired theme config at"," ",(0,l.jsx)("code",{children:"app/configs/themesConfig"})]}),(0,l.jsx)(s.Z,{component:"pre",className:"language-jsx mb-24",children:"\n\t\t\t\t\tdefault    : {\n\t\t\t\t\t  typography: {\n\t\t\t\t\t\tfontFamily: [\n\t\t\t\t\t\t\t'Roboto',\n\t\t\t\t\t\t\t'\"Helvetica\"',\n\t\t\t\t\t\t\t'Arial',\n\t\t\t\t\t\t\t'sans-serif'\n\t\t\t\t\t\t].join(','),\n\t\t\t\t"}),(0,l.jsxs)(a.Z,{className:"mt-16 mb-8",component:"p",children:["There is also font-family assignment at ",(0,l.jsx)("code",{children:"src/styles/app-base.css "})]}),(0,l.jsx)(s.Z,{component:"pre",className:"language-css mb-24",children:"\n\t\t\t\t\thtml {\n\t\t\t\t\t\tfont-size: 62.5%;\n            font-family: 'Inter var', Roboto, Helvetica Neue, Arial, sans-serif;\n            background-color: #121212;\n            -webkit-font-smoothing: antialiased;\n            text-size-adjust: 100%;\n\t\t\t\t\t}\n\t\t\t\t"})]})}}}]);