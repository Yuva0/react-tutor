/*! For license information please see 566.63acfcd4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcstutor=self.webpackChunkcstutor||[]).push([[566],{6566:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var s=n(5043),a=n(1290),i=n(4306),l=n(7627),o=n(7987),r=n(579);const c=[{id:"introduction",title:"Introduction"},{id:"basic-usage",title:"Basic Usage"},{id:"syntax",title:"Syntax"},{id:"example",title:"Example"},{id:"explanation",title:"Explanation"},{id:"rules-of-hooks",title:"Rules of Hooks"},{id:"initial-state",title:"Initial State"},{id:"updating-state",title:"Updating State"}],d=()=>{const[e,t]=s.useState("introduction"),[n,d]=s.useState(!1),{width:h}=(0,o.lW)(),u=h<1200,x=(0,i.DP)().theme.colorPalette.primary.accentScale[10],j=e=>{let{children:t}=e;return(0,r.jsx)("span",{style:{color:x},children:t})},m=(0,r.jsxs)(i.EY,{children:["The Counter component declares a state variable"," ",(0,r.jsx)(j,{children:"count"})," using the useState Hook with an initial value of 0. It then renders a paragraph element that displays the current count value and a button that increments the count value when clicked."]}),p=(0,r.jsxs)(i.EY,{children:["When the button is clicked, the setCount function is called with the"," ",(0,r.jsx)(j,{children:"new count value as an argument"}),". This triggers a re-render of the component with the updated count value displayed in the paragraph element."]}),g=(0,r.jsxs)(i.EY,{children:["The useState Hook is a fundamental part of the React Hooks API. It allows functional components to ",(0,r.jsx)(j,{children:"have their own state"}),", a feature previously only available to class components. This capability enhances the flexibility and simplicity of functional components, enabling them to ",(0,r.jsx)(j,{children:"manage their own state"})," without needing to convert them into class components."]});s.useEffect((()=>{d(!0)}),[]),s.useEffect((()=>{const e=new IntersectionObserver((e=>{for(const n of e)if(n.isIntersecting){t(n.target.id);break}}),{threshold:1,rootMargin:"0px"});return c.map((e=>document.getElementById(e.id))).forEach((t=>{if(t)return e.observe(t)})),()=>{e.disconnect()}}));return n?(0,r.jsxs)(a.Hk,{children:[(0,r.jsxs)(a._f,{style:{width:u?"100%":"calc(100% - 12rem"},className:n?"fade-in":"",children:[(0,r.jsx)(a.PZ,{id:"introduction",children:(0,r.jsxs)(a.db,{children:[(0,r.jsxs)(i.BI,{size:"small",color:"primary",delimiter:"/",children:[(0,r.jsx)(i.yd,{title:"Hooks"}),(0,r.jsx)(i.yd,{link:"/hooks/use-state",title:"useState"})]}),(0,r.jsx)(i.Fc,{titleIcon:(0,r.jsx)(l.A,{}),color:"info",title:"Fun Fact!",description:"The useState Hook is the most commonly used Hook in React.",style:{marginTop:"0.5rem"}}),(0,r.jsx)(i.EY,{size:"large",style:{marginTop:"0.5rem"},children:"Introduction"}),g]})}),(0,r.jsx)(a.PZ,{id:"basic-usage",children:(0,r.jsxs)(a.db,{children:[(0,r.jsx)(i.EY,{size:"large",children:"Basic Usage"}),(0,r.jsx)(i.EY,{children:"To use the useState Hook, you need to import it from React:"}),(0,r.jsx)(i.sY,{language:"JSX",text:"import React, { useState } from 'react';"})]})}),(0,r.jsx)(a.PZ,{id:"syntax",children:(0,r.jsxs)(a.db,{children:[(0,r.jsx)(i.EY,{size:"large",children:"Syntax"}),(0,r.jsxs)(i.B8,{variant:"ordered",title:(0,r.jsx)(i.EY,{children:"The useState Hook takes the initial state as an argument and returns an array with two elements:"}),children:[(0,r.jsx)(i.ck,{children:(0,r.jsxs)(i.EY,{children:["The first element is the"," ",(0,r.jsx)(j,{children:"current state value."})]})}),(0,r.jsx)(i.ck,{children:(0,r.jsxs)(i.EY,{children:["The second element is a function that"," ",(0,r.jsx)(j,{children:"allows you to update the state value."})]})})]}),(0,r.jsx)(i.EY,{children:"Here's the syntax:"}),(0,r.jsx)(i.sY,{language:"JSX",text:"const [state, setState] = useState(initialState);"})]})}),(0,r.jsxs)(a.PZ,{id:"example",children:[(0,r.jsx)(i.EY,{size:"large",children:"Example"}),(0,r.jsx)(i.EY,{children:"Here's an example of a simple counter component that uses the useState Hook:"}),(0,r.jsx)(i.sY,{language:"JSX",text:"import React, { useState } from 'react';\n\nfunction Counter() {\n  // Declare a state variable 'count' with an initial value of 0\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n\nexport default Counter;\n"})]}),(0,r.jsxs)(a.PZ,{id:"explanation",children:[(0,r.jsx)(i.EY,{size:"large",children:"Explanation"}),(0,r.jsxs)(a.db,{children:[m,p]})]}),(0,r.jsx)(a.PZ,{id:"rules-of-hooks",children:(0,r.jsxs)(i.B8,{title:(0,r.jsx)(i.EY,{size:"large",children:"Rules of Hooks"}),children:[(0,r.jsx)(i.ck,{children:(0,r.jsxs)(i.EY,{children:["Hooks should only be called at"," ",(0,r.jsx)(j,{children:"the top level of a functional component or another custom Hook."})]})}),(0,r.jsx)(i.ck,{children:(0,r.jsxs)(i.EY,{children:["Hooks should not be called inside"," ",(0,r.jsx)(j,{children:"loops, conditions, or nested functions."})]})}),(0,r.jsx)(i.ck,{children:(0,r.jsxs)(i.EY,{children:["Hooks should always be called in the"," ",(0,r.jsx)(j,{children:"same order"}),", and they should not be called ",(0,r.jsx)(j,{children:"conditionally"}),"."]})})]})}),(0,r.jsxs)(a.PZ,{id:"initial-state",children:[(0,r.jsx)(i.EY,{size:"large",children:"Initial State"}),(0,r.jsx)(i.EY,{children:"The initial state can be a value or a function:"}),(0,r.jsx)(i.sY,{language:"JSX",text:"const [state, setState] = useState(initialValue);"}),(0,r.jsxs)(i.EY,{style:{marginTop:"1rem"},children:["If the initial state is a function, it will be executed"," ",(0,r.jsx)(j,{children:"only on the first render:"})]}),(0,r.jsx)(i.sY,{language:"JSX",text:"const [state, setState] = useState(() => {\n  const initialState = someExpensiveComputation();\n  return initialState;\n});"})]}),(0,r.jsxs)(a.PZ,{id:"updating-state",children:[(0,r.jsx)(i.EY,{size:"large",children:"Updating State"}),(0,r.jsx)(i.EY,{children:"To update the state, you can call the function returned by the useState Hook with the new state value as an argument."}),(0,r.jsx)(i.EY,{children:"Here's an example of updating the state in a counter component:"}),(0,r.jsx)(i.sY,{language:"JSX",text:"// Updating state with a new value\nsetState(newValue);\n\n// Updating state with a function\nsetState(prevState => {\n  // Calculate new state based on prevState\n  return newState;\n});\n"})]}),(0,r.jsx)(a.PZ,{children:(0,r.jsxs)(a.db,{children:[(0,r.jsxs)(i.B8,{variant:"ordered",title:(0,r.jsx)(i.EY,{size:"large",children:"Summary"}),children:[(0,r.jsx)(i.ck,{children:(0,r.jsxs)(i.EY,{children:["The useState Hook allows functional components to"," ",(0,r.jsx)(j,{children:"have their own state."})]})}),(0,r.jsx)(i.ck,{children:(0,r.jsxs)(i.EY,{children:["It takes the initial state as an argument and returns an array with the ",(0,r.jsx)(j,{children:"current state value"})," and a"," ",(0,r.jsx)(j,{children:"function to update the state"}),"."]})}),(0,r.jsx)(i.ck,{children:"The initial state can be a value or a function that returns the initial state value."}),(0,r.jsx)(i.ck,{children:"To update the state, you can call the function returned by the useState Hook with the new state value or a function that calculates the new state value."})]}),(0,r.jsx)(i.EY,{style:{marginTop:"0.5rem"},children:"Using useState effectively allows you to manage state in functional components, providing more flexibility and simplifying your React code."})]})})]}),!u&&(0,r.jsx)(i.Sr,{top:"6rem",right:"4rem",style:{background:"transparent"},children:c.map((t=>(0,r.jsx)(i.WW,{size:"small",selected:e===t.id,onClick:()=>(e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})})(t.id),children:t.title},t.id)))})]}):(0,r.jsx)(a.Hk,{children:null})}},7627:(e,t,n)=>{n.d(t,{A:()=>s});var s=(0,n(4648).A)("outline","mood-smile-dizzy","IconMoodSmileDizzy",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M14.5 15a3.5 3.5 0 0 1 -5 0",key:"svg-1"}],["path",{d:"M8 9l2 2",key:"svg-2"}],["path",{d:"M10 9l-2 2",key:"svg-3"}],["path",{d:"M14 9l2 2",key:"svg-4"}],["path",{d:"M16 9l-2 2",key:"svg-5"}]])}}]);
//# sourceMappingURL=566.63acfcd4.chunk.js.map