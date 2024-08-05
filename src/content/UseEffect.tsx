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
  { id: "basic-usage", title: "Basic Usage" },
  { id: "examples", title: "Examples" },
  { id: "rules-of-hooks", title: "Rules of Hooks" },
  { id: "common-side-effect", title: "Common Side Effects" },
  { id: "tips-and-best-practices", title: "Tips and Best Practices" },
];

const INTRODUCTION_CONTENT = `useEffect is a Hook in React that allows you to perform side effects in function components. It serves a similar purpose to lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.`;
const BASIC_USAGE_1 = `useEffect(() => {
  // Side effect code here
  return () => {
    // Cleanup code here
  };
}, [dependencies]);
`;
const BASIC_USAGE_FN = `Function: This is the effect function where you write the side effect code. This function can optionally return a cleanup function, which is used to clean up the effect (like removing event listeners or canceling network requests) before the component is unmounted or before the effect runs again.`;
const BASIC_USAGE_DEP = `Dependency Array: This is an array of values that the effect depends on. The effect will only run when one or more of these values change. If you omit this array, the effect will run after every render. If you pass an empty array, the effect will run only once, similar to componentDidMount.`;
const BASIC_EXAMPLE_1 = `import React, { useEffect, useState } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
`;
const BASIC_EXAMPLE_1_TEXT = `In this example, the effect updates the document title whenever the count state changes.`;
const BASIC_EXAMPLE_2 = `import React, { useEffect, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []); // Empty array ensures the effect runs only once

  return <div>{count}</div>;
}
`;
const BASIC_EXAMPLE_2_TEXT = `Here, we start an interval that updates the count every second. The cleanup function (clearInterval) ensures the interval is cleared when the component unmounts, preventing memory leaks.`;

const BASIC_EXAMPLE_3 = `import React, { useEffect, useState } from 'react';

function FetchData() {
  const [data, setData] = useState(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [id]); // Fetch data only when \`id\` changes

  return (
    <div>
      <button onClick={() => setId(id + 1)}>Next Post</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
`;
const BASIC_EXAMPLE_3_TEXT = `This effect fetches data from an API whenever the id state changes. The dependency array [id] ensures the effect runs only when id changes.`;

const UseEffect: React.FunctionComponent = () => {
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
              <BreadcrumbsItem link="/hooks/use-effect" title="useEffect" />
            </Breadcrumbs>
          </StyledSubsection>
          <StyledSubsection id="introduction">
            <Text size="large">Introduction</Text>
            <Text>{INTRODUCTION_CONTENT}</Text>
          </StyledSubsection>
          <StyledSubsection id="basic-usage">
            <Text size="large">Basic Usage</Text>
            <Text>
              The useEffect hook takes two arguments: a function and a
              dependency array.
            </Text>
            <CodeDisplay language="JSX" text={BASIC_USAGE_1} />
            <List variant="unordered">
              <ListItem>{BASIC_USAGE_FN}</ListItem>
              <ListItem>{BASIC_USAGE_DEP}</ListItem>
            </List>
          </StyledSubsection>
          <StyledSubsection id="examples">
            <Text size="large">Examples</Text>
            <List variant="ordered">
              <ListItem>
                Basic Example:
                <CodeDisplay language="JSX" text={BASIC_EXAMPLE_1} />
                <Text>{BASIC_EXAMPLE_1_TEXT}</Text>
              </ListItem>
              <ListItem>
                Effect with Cleanup:
                <CodeDisplay language="JSX" text={BASIC_EXAMPLE_2} />
                <Text>{BASIC_EXAMPLE_2_TEXT}</Text>
              </ListItem>
              <ListItem>
                Conditional Effect:
                <CodeDisplay language="JSX" text={BASIC_EXAMPLE_3} />
                <Text>{BASIC_EXAMPLE_3_TEXT}</Text>
              </ListItem>
            </List>
          </StyledSubsection>
          <StyledSubsection id="rules-of-hooks">
            <Text size="large">Rules of Hooks</Text>
            <List variant="unordered">
              <ListItem>
                Call Hooks at the Top Level: Don't call hooks inside loops,
                conditions, or nested functions. Always use hooks at the top
                level of your React function so that the hooks are called in the
                same order each time a component renders.
              </ListItem>
              <ListItem>
                Call Hooks from React Functions: Only call hooks from React
                function components or custom hooks.
              </ListItem>
            </List>
          </StyledSubsection>
          <StyledSubsection id="common-side-effect">
            <Text size="large">Common Side Effects</Text>
            <List variant="unordered">
              <ListItem>Data fetching</ListItem>
              <ListItem>Setting up subscriptions</ListItem>
              <ListItem>Manually changing the DOM</ListItem>
              <ListItem>Timers (e.g., setTimeout and setInterval)</ListItem>
              <ListItem>Logging</ListItem>
            </List>
          </StyledSubsection>
          <StyledSubsection id="tips-and-best-practices">
            <Text size="large">Tips And Best Practices</Text>
            <List>
              <ListItem>
                Use the dependency array to control when the effect runs.
              </ListItem>
              <ListItem>
                Use cleanup functions to prevent memory leaks and clean up
                resources.
              </ListItem>
              <ListItem>
                Be mindful of the dependencies you include in the dependency
                array.
              </ListItem>
              <ListItem>
                Avoid using the dependency array as an optimization technique.
              </ListItem>
            </List>
          </StyledSubsection>
          <StyledSubsection>
            <Text>
              By understanding and using useEffect properly, you can manage side
              effects in your React components effectively and ensure they
              behave as expected throughout their lifecycle.
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

export default UseEffect;
