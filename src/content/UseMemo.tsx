import * as React from "react";
import {
  StyledMain,
  StyledSection,
  StyledSubsection,
  StyledTopicContent,
} from "../components/StyledInternalComponents/StyledInternalComponents";
import {
  Breadcrumbs,
  BreadcrumbsItem,
  Text,
  CodeDisplay,
  List,
  ListItem,
  SideBar,
  SideBarItem,
} from "stelios";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "detailed-breakdown", title: "Detailed Breakdown" },
  { id: "practical-use-cases", title: "Practical Use Cases" },
  { id: "conclusion", title: "Conclusion" },
];

const INTRODUCTION_CONTENT = `\`useMemo\` is a hook in React that allows you to memoize the result of a computation, preventing unnecessary recalculations and improving performance. Here’s a detailed explanation:`;
const SYNTAX_EXAMPlE = `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
`;
const PURPOSE_CONTENT = `\`useMemo\` is used to optimize performance by avoiding expensive calculations on every render. If the dependencies have not changed since the last render, useMemo returns the previously computed value, effectively caching the result.`;
const PURPOSE_EXAMPLE = `import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ a, b }) {
  const expensiveCalculation = (a, b) => {
    console.log('Calculating...');
    return a + b;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(a, b), [a, b]);

  return <div>{memoizedValue}</div>;
}
`;
const FN_EXECUTION = `The function passed to useMemo is executed during the initial render and every subsequent render if any of the dependencies change. If none of the dependencies change, the previously returned value is used.`;
const DEPENDENCY_ARRAY = `The dependency array [a, b] determines when the memoized value should be recomputed. If a or b changes, the function is executed again; otherwise, the cached value is returned.`;
const MEMOIZATION = `Memoization is a performance optimization technique where the result of an expensive function call is stored, and the cached result is returned when the same inputs occur again.`;
const MEMOIZED_CALLBACK = `const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
`;
const COMPLEX_CALCULATION = `const sortedList = useMemo(() => {
  return list.sort((a, b) => a.value - b.value);
}, [list]);
`;
const MEMOIZED_OPTION = `const memoizedOptions = useMemo(() => {
  return [{ value: 1 }, { value: 2 }];
}, []);
`;
const COMP_PERFORMANCE = `const renderedItems = useMemo(() => {
  return items.map(item => <Item key={item.id} {...item} />);
}, [items]);
`;
const CONCLUSION = `useMemo is a powerful tool in React for optimizing performance by memoizing expensive calculations and ensuring referential equality of complex objects and arrays. By understanding and properly using useMemo, you can create more efficient React applications, especially when dealing with complex state and computational logic.`;

const UseMemo = () => {
  const [sidebarSelected, setSidebarSelected] = React.useState("introduction");

  React.useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setSidebarSelected(entry.target.id);
          break;
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1,
      rootMargin: "64px",
    });

    const _sections = sections.map((section) =>
      document.getElementById(section.id)
    );
    _sections.forEach((section) => {
      if (!section) return;
      return observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const onSideBarItemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <StyledMain>
      <StyledTopicContent>
        <StyledSection>
          <StyledSubsection>
            <Breadcrumbs size="small" delimiter="/">
              <BreadcrumbsItem title="Hooks" />
              <BreadcrumbsItem link="/hooks/use-memo" title="useMemo" />
            </Breadcrumbs>
          </StyledSubsection>
          <StyledSubsection id="introduction">
            <Text size="large">Introduction</Text>
            <Text>{INTRODUCTION_CONTENT}</Text>
          </StyledSubsection>
          <StyledSubsection>
            <Text size="large">Syntax</Text>
            <CodeDisplay text={SYNTAX_EXAMPlE} language="javascript" />
            <Text>`useMemo` takes two arguments:</Text>
            <List>
              <ListItem>A function that computes a value.</ListItem>
              <ListItem>
                A dependency array that lists variables which, when changed,
                cause the function to recompute the value.
              </ListItem>
            </List>
          </StyledSubsection>
          <StyledSubsection>
            <Text size="large">Purpose</Text>
            <Text>{PURPOSE_CONTENT}</Text>
            <Text>Example:</Text>
            <CodeDisplay text={PURPOSE_EXAMPLE} language="javascript" />
            <Text>In this example:</Text>
            <List>
              <ListItem>
                The `expensiveCalculation` function is only called when `a` or
                `b` changes.
              </ListItem>
              <ListItem>
                The memoized value is stored and returned if `a` and `b` remain
                the same.
              </ListItem>
            </List>
          </StyledSubsection>
          <StyledSubsection id="detailed-breakdown">
            <Text size="large">Detailed Breakdown</Text>
            <List>
              <ListItem>
                <Text>Function Execution</Text>
                <Text>{FN_EXECUTION}</Text>
              </ListItem>
              <ListItem>
                <Text>Dependency Array</Text>
                <Text>{DEPENDENCY_ARRAY}</Text>
              </ListItem>
              <ListItem>
                <Text>Memoization</Text>
                <Text>{MEMOIZATION}</Text>
              </ListItem>
              <ListItem>
                <Text>Caching Strategy</Text>
                <Text>
                  `useMemo` employs a caching strategy that ensures values are
                  recalculated only when necessary. This is particularly useful
                  for:
                </Text>
                <List variant="unordered">
                  <ListItem>
                    Expensive calculations: Computations that require
                    significant CPU resources.
                  </ListItem>
                  <ListItem>
                    Referential equality: Ensuring objects or arrays are only
                    recreated when dependencies change, preventing unnecessary
                    re-renders of child components.
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <Text>Comparison with useCallback</Text>
                <Text>
                  useCallback is similar to useMemo, but it memoizes a function
                  instead of a value:
                </Text>
                <CodeDisplay language="javascript" text={MEMOIZED_CALLBACK} />
                <Text>
                  Use useCallback when you need to memoize a function to avoid
                  passing new function references to child components, which can
                  prevent unnecessary re-renders.
                </Text>
              </ListItem>
            </List>
          </StyledSubsection>
          <StyledSubsection id="practical-use-cases">
            <Text size="large">Practical Use Cases</Text>
            <List variant="ordered">
              <ListItem>
                Complex Cases
                <CodeDisplay language="javascript" text={COMPLEX_CALCULATION} />
                <Text>
                  In this example, sortedList is only recalculated if list
                  changes.
                </Text>
              </ListItem>
              <ListItem>
                Avoiding Referential Equality Issues
                <CodeDisplay language="javascript" text={MEMOIZED_OPTION} />
                <Text>
                  Here, memoizedOptions ensures the same object reference is
                  used across renders, which can be important for dependency
                  checks or child component props.
                </Text>
              </ListItem>
              <ListItem>
                Component Performance
                <Text>
                  In components with heavy computations or expensive renders,
                  useMemo can significantly improve performance by minimizing
                  unnecessary calculations:
                </Text>
                <CodeDisplay language="javascript" text={COMP_PERFORMANCE} />
              </ListItem>
            </List>
          </StyledSubsection>
          <StyledSubsection id="conclusion">
            <Text size="large">Conclusion</Text>
            <Text>{CONCLUSION}</Text>
          </StyledSubsection>
        </StyledSection>
      </StyledTopicContent>
      <SideBar top="6rem" right="4rem">
        {sections.map((section) => (
          <SideBarItem
            size="small"
            key={section.id}
            selected={sidebarSelected === section.id}
            onClick={() => onSideBarItemClick(section.id)}
          >
            {section.title}
          </SideBarItem>
        ))}
      </SideBar>
    </StyledMain>
  );
};

export default UseMemo;
