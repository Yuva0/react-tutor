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
  useTheme,
} from "stelios";
import { useWindowSize } from "../helpers/helpers";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "detailed-breakdown", title: "Detailed Breakdown" },
  { id: "practical-use-cases", title: "Practical Use Cases" },
  { id: "conclusion", title: "Conclusion" },
];

const SYNTAX_EXAMPlE = `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
`;
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

const UseMemo = () => {
  const [sidebarSelected, setSidebarSelected] = React.useState("introduction");
  const [isMounted, setIsMounted] = React.useState(false);
  const { width } = useWindowSize();
  const mobile = width < 1200;

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
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
  });

  const color = useTheme().theme.colorPalette.primary.accentScale[10];
  const Highlighted = ({ children }: { children: React.ReactNode }) => {
    return <span style={{ color: color }}>{children}</span>;
  };

  /* --------------------------------------------------------------------------------------
    |                            Data to be displayed                                       |
    -------------------------------------------------------------------------------------- */
  const INTRODUCTION_CONTENT = (
    <Text>
      useMemo is a hook in React that allows you to memoize the result of a
      computation,{" "}
      <Highlighted>
        preventing unnecessary recalculations and improving performance
      </Highlighted>
      . Here's a detailed explanation:
    </Text>
  );
  const PURPOSE_CONTENT = (
    <Text>
      useMemo is used to optimize performance by{" "}
      <Highlighted>avoiding expensive calculations on every render</Highlighted>
      . If the dependencies have not changed since the last render, useMemo
      returns the previously computed value, effectively caching the result.
    </Text>
  );
  const CONCLUSION = (
    <Text>
      useMemo is a powerful tool in React for optimizing performance by
      memoizing expensive calculations and ensuring referential equality of
      complex objects and arrays. By understanding and properly using useMemo,
      you can create more efficient React applications,{" "}
      <Highlighted>
        especially when dealing with complex state and computational logic.
      </Highlighted>
    </Text>
  );

  /* ------------------------------------------------------------------------------------ */

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

  if (!isMounted) return <StyledMain>{null}</StyledMain>;
  return (
    <StyledMain>
      <StyledTopicContent
        style={{ width: mobile ? "100%" : "calc(100% - 12rem" }}
        className={isMounted ? "fade-in" : ""}
      >
        <StyledSection id="introduction">
          <StyledSubsection>
            <Breadcrumbs size="small" color="primary" delimiter="/">
              <BreadcrumbsItem title="Hooks" />
              <BreadcrumbsItem link="/hooks/use-memo" title="useMemo" />
            </Breadcrumbs>
            <Text size="large" style={{ marginTop: "1rem" }}>
              Introduction
            </Text>
            {INTRODUCTION_CONTENT}
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection>
            <Text size="large">Syntax</Text>
            <CodeDisplay text={SYNTAX_EXAMPlE} language="javascript" />
            <List
              title={
                <Text style={{ marginTop: "1rem" }}>
                  `useMemo` takes two arguments:
                </Text>
              }
            >
              <ListItem>
                <Text>
                  A function that <Highlighted>computes a value</Highlighted>
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  A dependency array that lists variables which, when changed,
                  cause the{" "}
                  <Highlighted>function to recompute the value</Highlighted>
                </Text>
              </ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection>
            <Text size="large">Purpose</Text>
            {PURPOSE_CONTENT}
            <Text>Example:</Text>
            <CodeDisplay text={PURPOSE_EXAMPLE} language="javascript" />
            <List
              title={
                <Text style={{ marginTop: "1rem" }}>In this example:</Text>
              }
            >
              <ListItem>
                <Text>
                  The `expensiveCalculation` function is only called{" "}
                  <Highlighted>when `a` or `b` changes.</Highlighted>
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  The memoized value is stored and returned if{" "}
                  <Highlighted>`a` and `b` remain the same.</Highlighted>
                </Text>
              </ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="detailed-breakdown">
          <StyledSubsection>
            <List title={<Text size="large">Detailed Breakdown</Text>}>
              <ListItem>
                <Text>
                  <Highlighted>Function Execution</Highlighted>
                </Text>
                <Text style={{ marginTop: "0.25rem" }}>{FN_EXECUTION}</Text>
              </ListItem>
              <ListItem style={{ marginTop: "0.5rem" }}>
                <Text>
                  <Highlighted>Dependency Array</Highlighted>
                </Text>
                <Text style={{ marginTop: "0.25rem" }}>{DEPENDENCY_ARRAY}</Text>
              </ListItem>
              <ListItem style={{ marginTop: "0.5rem" }}>
                <Text>
                  <Highlighted>Memoization</Highlighted>
                </Text>
                <Text style={{ marginTop: "0.25rem" }}>{MEMOIZATION}</Text>
              </ListItem>
              <ListItem style={{ marginTop: "0.5rem" }}>
                <Text>
                  <Highlighted>Caching Strategy</Highlighted>
                </Text>
                <List
                  variant="unordered"
                  title={
                    <Text style={{ marginTop: "0.25rem" }}>
                      `useMemo` employs a caching strategy that ensures values
                      are recalculated only when necessary. This is particularly
                      useful for:
                    </Text>
                  }
                >
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
              <ListItem style={{ marginTop: "0.5rem" }}>
                <Text>
                  <Highlighted>Comparison with useCallback</Highlighted>
                </Text>
                <Text style={{ marginTop: "0.25rem" }}>
                  useCallback is similar to useMemo, but it memoizes a function
                  instead of a value:
                </Text>
                <CodeDisplay
                  style={{ marginTop: "0.5rem" }}
                  language="javascript"
                  text={MEMOIZED_CALLBACK}
                />
                <Text style={{ marginTop: "1rem" }}>
                  Use useCallback when you need to memoize a function to avoid
                  passing new function references to child components, which can
                  prevent unnecessary re-renders.
                </Text>
              </ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="practical-use-cases">
          <StyledSubsection>
            <List
              variant="ordered"
              title={<Text size="large">Practical Use Cases</Text>}
            >
              <ListItem>
                <Text>Complex Cases</Text>
                <CodeDisplay
                  style={{ marginTop: "0.5rem" }}
                  language="javascript"
                  text={COMPLEX_CALCULATION}
                />
                <Text style={{ marginTop: "1rem" }}>
                  In this example, sortedList is only recalculated if list
                  changes.
                </Text>
              </ListItem>
              <ListItem style={{ marginTop: "0.5rem" }}>
                <Text>Avoiding Referential Equality Issues</Text>
                <CodeDisplay
                  style={{ marginTop: "0.5rem" }}
                  language="javascript"
                  text={MEMOIZED_OPTION}
                />
                <Text style={{ marginTop: "1rem" }}>
                  Here, memoizedOptions ensures the same object reference is
                  used across renders, which can be important for dependency
                  checks or child component props.
                </Text>
              </ListItem>
              <ListItem style={{ marginTop: "0.5rem" }}>
                <Text>Component Performance</Text>
                <Text style={{ marginTop: "0.25rem" }}>
                  In components with heavy computations or expensive renders,
                  useMemo can significantly{" "}
                  <Highlighted>
                    improve performance by minimizing unnecessary calculations:
                  </Highlighted>
                </Text>
                <CodeDisplay
                  style={{ marginTop: "0.5rem" }}
                  language="javascript"
                  text={COMP_PERFORMANCE}
                />
              </ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="conclusion">
          <StyledSubsection>
            <Text size="large">Conclusion</Text>
            <Text>{CONCLUSION}</Text>
          </StyledSubsection>
        </StyledSection>
      </StyledTopicContent>
      {!mobile && (
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
      )}
    </StyledMain>
  );
};

export default UseMemo;
