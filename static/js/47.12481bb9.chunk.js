"use strict";(self.webpackChunkcstutor=self.webpackChunkcstutor||[]).push([[47],{2047:(e,n,s)=>{s.r(n),s.d(n,{default:()=>o});var i=s(5043),r=s(1290),t=s(4306),a=s(7987),c=s(579);const l=[{id:"introduction",title:"Introduction"},{id:"detailed-breakdown",title:"Detailed Breakdown"},{id:"practical-use-cases",title:"Practical Use Cases"},{id:"conclusion",title:"Conclusion"}],o=()=>{const[e,n]=i.useState("introduction"),[s,o]=i.useState(!1),{width:d}=(0,a.lW)(),h=d<1200;i.useEffect((()=>{o(!0)}),[]),i.useEffect((()=>{const e=new IntersectionObserver((e=>{for(const s of e)if(s.isIntersecting){n(s.target.id);break}}),{threshold:1,rootMargin:"64px"});return l.map((e=>document.getElementById(e.id))).forEach((n=>{if(n)return e.observe(n)})),()=>{e.disconnect()}}));const u=(0,t.DP)().theme.colorPalette.primary.accentScale[10],m=e=>{let{children:n}=e;return(0,c.jsx)("span",{style:{color:u},children:n})},x=(0,c.jsxs)(t.EY,{children:["useMemo is a hook in React that allows you to memoize the result of a computation,"," ",(0,c.jsx)(m,{children:"preventing unnecessary recalculations and improving performance"}),". Here's a detailed explanation:"]}),p=(0,c.jsxs)(t.EY,{children:["useMemo is used to optimize performance by"," ",(0,c.jsx)(m,{children:"avoiding expensive calculations on every render"}),". If the dependencies have not changed since the last render, useMemo returns the previously computed value, effectively caching the result."]}),j=(0,c.jsxs)(t.EY,{children:["useMemo is a powerful tool in React for optimizing performance by memoizing expensive calculations and ensuring referential equality of complex objects and arrays. By understanding and properly using useMemo, you can create more efficient React applications,"," ",(0,c.jsx)(m,{children:"especially when dealing with complex state and computational logic."})]});return s?(0,c.jsxs)(r.Hk,{children:[(0,c.jsxs)(r._f,{style:{width:h?"100%":"calc(100% - 12rem"},className:s?"fade-in":"",children:[(0,c.jsx)(r.PZ,{id:"introduction",children:(0,c.jsxs)(r.db,{children:[(0,c.jsxs)(t.BI,{size:"small",color:"primary",delimiter:"/",children:[(0,c.jsx)(t.yd,{title:"Hooks"}),(0,c.jsx)(t.yd,{link:"/hooks/use-memo",title:"useMemo"})]}),(0,c.jsx)(t.EY,{size:"large",style:{marginTop:"1rem"},children:"Introduction"}),x]})}),(0,c.jsx)(r.PZ,{children:(0,c.jsxs)(r.db,{children:[(0,c.jsx)(t.EY,{size:"large",children:"Syntax"}),(0,c.jsx)(t.sY,{text:"const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n",language:"javascript"}),(0,c.jsxs)(t.B8,{title:(0,c.jsx)(t.EY,{style:{marginTop:"1rem"},children:"`useMemo` takes two arguments:"}),children:[(0,c.jsx)(t.ck,{children:(0,c.jsxs)(t.EY,{children:["A function that ",(0,c.jsx)(m,{children:"computes a value"})]})}),(0,c.jsx)(t.ck,{children:(0,c.jsxs)(t.EY,{children:["A dependency array that lists variables which, when changed, cause the"," ",(0,c.jsx)(m,{children:"function to recompute the value"})]})})]})]})}),(0,c.jsx)(r.PZ,{children:(0,c.jsxs)(r.db,{children:[(0,c.jsx)(t.EY,{size:"large",children:"Purpose"}),p,(0,c.jsx)(t.EY,{children:"Example:"}),(0,c.jsx)(t.sY,{text:"import React, { useState, useMemo } from 'react';\n\nfunction ExpensiveComponent({ a, b }) {\n  const expensiveCalculation = (a, b) => {\n    console.log('Calculating...');\n    return a + b;\n  };\n\n  const memoizedValue = useMemo(() => expensiveCalculation(a, b), [a, b]);\n\n  return <div>{memoizedValue}</div>;\n}\n",language:"javascript"}),(0,c.jsxs)(t.B8,{title:(0,c.jsx)(t.EY,{style:{marginTop:"1rem"},children:"In this example:"}),children:[(0,c.jsx)(t.ck,{children:(0,c.jsxs)(t.EY,{children:["The `expensiveCalculation` function is only called"," ",(0,c.jsx)(m,{children:"when `a` or `b` changes."})]})}),(0,c.jsx)(t.ck,{children:(0,c.jsxs)(t.EY,{children:["The memoized value is stored and returned if"," ",(0,c.jsx)(m,{children:"`a` and `b` remain the same."})]})})]})]})}),(0,c.jsx)(r.PZ,{id:"detailed-breakdown",children:(0,c.jsx)(r.db,{children:(0,c.jsxs)(t.B8,{title:(0,c.jsx)(t.EY,{size:"large",children:"Detailed Breakdown"}),children:[(0,c.jsxs)(t.ck,{children:[(0,c.jsx)(t.EY,{children:(0,c.jsx)(m,{children:"Function Execution"})}),(0,c.jsx)(t.EY,{style:{marginTop:"0.25rem"},children:"The function passed to useMemo is executed during the initial render and every subsequent render if any of the dependencies change. If none of the dependencies change, the previously returned value is used."})]}),(0,c.jsxs)(t.ck,{style:{marginTop:"0.5rem"},children:[(0,c.jsx)(t.EY,{children:(0,c.jsx)(m,{children:"Dependency Array"})}),(0,c.jsx)(t.EY,{style:{marginTop:"0.25rem"},children:"The dependency array [a, b] determines when the memoized value should be recomputed. If a or b changes, the function is executed again; otherwise, the cached value is returned."})]}),(0,c.jsxs)(t.ck,{style:{marginTop:"0.5rem"},children:[(0,c.jsx)(t.EY,{children:(0,c.jsx)(m,{children:"Memoization"})}),(0,c.jsx)(t.EY,{style:{marginTop:"0.25rem"},children:"Memoization is a performance optimization technique where the result of an expensive function call is stored, and the cached result is returned when the same inputs occur again."})]}),(0,c.jsxs)(t.ck,{style:{marginTop:"0.5rem"},children:[(0,c.jsx)(t.EY,{children:(0,c.jsx)(m,{children:"Caching Strategy"})}),(0,c.jsxs)(t.B8,{variant:"unordered",title:(0,c.jsx)(t.EY,{style:{marginTop:"0.25rem"},children:"`useMemo` employs a caching strategy that ensures values are recalculated only when necessary. This is particularly useful for:"}),children:[(0,c.jsx)(t.ck,{children:"Expensive calculations: Computations that require significant CPU resources."}),(0,c.jsx)(t.ck,{children:"Referential equality: Ensuring objects or arrays are only recreated when dependencies change, preventing unnecessary re-renders of child components."})]})]}),(0,c.jsxs)(t.ck,{style:{marginTop:"0.5rem"},children:[(0,c.jsx)(t.EY,{children:(0,c.jsx)(m,{children:"Comparison with useCallback"})}),(0,c.jsx)(t.EY,{style:{marginTop:"0.25rem"},children:"useCallback is similar to useMemo, but it memoizes a function instead of a value:"}),(0,c.jsx)(t.sY,{style:{marginTop:"0.5rem"},language:"javascript",text:"const memoizedCallback = useCallback(() => {\n  doSomething(a, b);\n}, [a, b]);\n"}),(0,c.jsx)(t.EY,{style:{marginTop:"1rem"},children:"Use useCallback when you need to memoize a function to avoid passing new function references to child components, which can prevent unnecessary re-renders."})]})]})})}),(0,c.jsx)(r.PZ,{id:"practical-use-cases",children:(0,c.jsx)(r.db,{children:(0,c.jsxs)(t.B8,{variant:"ordered",title:(0,c.jsx)(t.EY,{size:"large",children:"Practical Use Cases"}),children:[(0,c.jsxs)(t.ck,{children:[(0,c.jsx)(t.EY,{children:"Complex Cases"}),(0,c.jsx)(t.sY,{style:{marginTop:"0.5rem"},language:"javascript",text:"const sortedList = useMemo(() => {\n  return list.sort((a, b) => a.value - b.value);\n}, [list]);\n"}),(0,c.jsx)(t.EY,{style:{marginTop:"1rem"},children:"In this example, sortedList is only recalculated if list changes."})]}),(0,c.jsxs)(t.ck,{style:{marginTop:"0.5rem"},children:[(0,c.jsx)(t.EY,{children:"Avoiding Referential Equality Issues"}),(0,c.jsx)(t.sY,{style:{marginTop:"0.5rem"},language:"javascript",text:"const memoizedOptions = useMemo(() => {\n  return [{ value: 1 }, { value: 2 }];\n}, []);\n"}),(0,c.jsx)(t.EY,{style:{marginTop:"1rem"},children:"Here, memoizedOptions ensures the same object reference is used across renders, which can be important for dependency checks or child component props."})]}),(0,c.jsxs)(t.ck,{style:{marginTop:"0.5rem"},children:[(0,c.jsx)(t.EY,{children:"Component Performance"}),(0,c.jsxs)(t.EY,{style:{marginTop:"0.25rem"},children:["In components with heavy computations or expensive renders, useMemo can significantly"," ",(0,c.jsx)(m,{children:"improve performance by minimizing unnecessary calculations:"})]}),(0,c.jsx)(t.sY,{style:{marginTop:"0.5rem"},language:"javascript",text:"const renderedItems = useMemo(() => {\n  return items.map(item => <Item key={item.id} {...item} />);\n}, [items]);\n"})]})]})})}),(0,c.jsx)(r.PZ,{id:"conclusion",children:(0,c.jsxs)(r.db,{children:[(0,c.jsx)(t.EY,{size:"large",children:"Conclusion"}),(0,c.jsx)(t.EY,{children:j})]})})]}),!h&&(0,c.jsx)(t.Sr,{top:"6rem",right:"4rem",children:l.map((n=>(0,c.jsx)(t.WW,{size:"small",selected:e===n.id,onClick:()=>(e=>{const n=document.getElementById(e);n&&n.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})})(n.id),children:n.title},n.id)))})]}):(0,c.jsx)(r.Hk,{children:null})}}}]);
//# sourceMappingURL=47.12481bb9.chunk.js.map