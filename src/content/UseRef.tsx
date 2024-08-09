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
  { id: "summary", title: "Summary" },
];

const INTRODUCTION_CONTENT = `useRef is a hook in React that provides a way to create a mutable object which persists for the lifetime of the component. It is often used for accessing and manipulating DOM elements directly, storing mutable values that do not cause re-renders when updated, and maintaining values across renders without triggering a component update.`;
const IMPORT_EXAMPLE = `import React, { useRef } from 'react';`;
const BASIC_USAGE_EXAMPlE = `const myRef = useRef(initialValue);`;
const ACCESS_DOM = `import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}
`;
const STORING_MUTABLE_EXAMPLE = `import React, { useRef, useState } from 'react';

function Counter() {
  const count = useRef(0);
  const [, setRender] = useState(0);

  const increment = () => {
    count.current++;
    console.log(count.current);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setRender(render => render + 1)}>Force Render</button>
    </div>
  );
}
`;
const VALUE_ACROSS_RERENDERS = `import React, { useRef, useEffect } from 'react';

function Timer() {
  const intervalId = useRef(null);
  const count = useRef(0);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      count.current++;
      console.log(count.current);
    }, 1000);

    return () => clearInterval(intervalId.current);
  }, []);

  return <div>Check the console for the count</div>;
}
`;

const UseRef: React.FC = () => {
  const [sidebarSelected, setSidebarSelected] = React.useState("introduction");
  const [isMounted, setIsMounted] = React.useState(false);

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
      <StyledTopicContent className={isMounted ? "fade-in" : ""}>
        <StyledSection>
          <StyledSubsection>
            <Breadcrumbs size="small" delimiter="/">
              <BreadcrumbsItem title="Hooks" />
              <BreadcrumbsItem link="/hooks/use-ref" title="useRef" />
            </Breadcrumbs>
          </StyledSubsection>
          <StyledSubsection id="introduction">
            <Text size="large">Introduction</Text>
            <Text>{INTRODUCTION_CONTENT}</Text>
          </StyledSubsection>
          <StyledSubsection id="detailed-breakdown">
            <Text size="large">Detailed Breakdown of useRef</Text>
            <Text>Importing useRef </Text>
            <Text>To use useRef, you need to import it from React:</Text>
            <CodeDisplay language="javascript" text={IMPORT_EXAMPLE} />
            <Text>Basic Usage</Text>
            <Text>
              useRef returns a mutable object that persists for the lifetime of
              the component. It accepts an optional initial value as an
              argument.
            </Text>
            <CodeDisplay language="javascript" text={BASIC_USAGE_EXAMPlE} />
            <Text>Example Usage</Text>
            <List>
              <ListItem>
                Accessing DOM Elements:
                <Text>
                  useRef is commonly used to access DOM elements directly.
                </Text>
                <CodeDisplay language="javascript" text={ACCESS_DOM} />
                <List variant="unordered">
                  <ListItem>
                    inputRef is created using useRef(null), initializing it with
                    null.
                  </ListItem>
                  <ListItem>
                    The ref attribute of the input element is set to inputRef,
                    connecting the DOM element to the ref.
                  </ListItem>
                  <ListItem>
                    In the useEffect hook, inputRef.current gives direct access
                    to the DOM element, allowing us to call the focus method on
                    it.
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                Storing Mutable Values
                <Text>
                  useRef can store values that persist across renders without
                  causing re-renders.
                </Text>
                <CodeDisplay
                  language="javascript"
                  text={STORING_MUTABLE_EXAMPLE}
                />
                <List>
                  <ListItem>
                    count is created using useRef(0), initializing it with 0.
                  </ListItem>
                  <ListItem>
                    count.current is incremented in the increment function
                    without causing a re-render.
                  </ListItem>
                  <ListItem>
                    The Force Render button uses setRender to force a re-render,
                    demonstrating that count.current retains its value across
                    renders.
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                Persisting Values Across Renders:
                <Text>
                  useRef can be used to keep track of values that need to
                  persist across renders but do not require re-rendering when
                  updated.
                </Text>
                <CodeDisplay
                  language="javascript"
                  text={VALUE_ACROSS_RERENDERS}
                />
                <List>
                  <ListItem>
                    intervalId is created using useRef(null), initializing it
                    with null.
                  </ListItem>
                  <ListItem>
                    count is created using useRef(0), initializing it with 0.
                  </ListItem>
                  <ListItem>
                    In the useEffect hook, intervalId.current stores the ID of
                    the interval, and count.current is incremented every second.
                  </ListItem>
                  <ListItem>
                    The cleanup function clears the interval using
                    intervalId.current.
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </StyledSubsection>
          <StyledSubsection id="summary">
            <Text size="large">Summary</Text>
            <List>
              <ListItem>
                Initialization: useRef(initialValue) returns a ref object with a
                current property set to initialValue.
              </ListItem>
              <ListItem>
                DOM Access: Attach the ref to a DOM element using the ref
                attribute. Access the element via ref.current.
              </ListItem>
              <ListItem>
                Mutable Values: Store mutable values that persist across renders
                without causing re-renders.
              </ListItem>
              <ListItem>
                Persistent Values: Maintain values across renders without
                causing re-renders, suitable for storing interval IDs, timers,
                and other values.
              </ListItem>
            </List>
          </StyledSubsection>
          <StyledSubsection>
            <Text>
              useRef is a versatile hook that helps manage mutable values and
              direct DOM manipulations in functional components, making it a
              crucial tool for complex React applications.
            </Text>
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

export default UseRef;
