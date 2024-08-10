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
  Alert,
} from "stelios";
import { IconMoodSmileDizzy } from "@tabler/icons-react";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "basic-usage", title: "Basic Usage" },
  { id: "examples", title: "Examples" },
  { id: "rules-of-hooks", title: "Rules of Hooks" },
  { id: "common-side-effect", title: "Common Side Effects" },
  { id: "tips-and-best-practices", title: "Tips and Best Practices" },
];

const BASIC_USAGE_1 = `useEffect(() => {
  // Side effect code here
  return () => {
    // Cleanup code here
  };
}, [dependencies]);
`;
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
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const color = useTheme().theme.colorPalette.primary.accentScale[10];
  const infoColor = useTheme().theme.colorPalette.info.accentScale[10];
  const Highlighted = ({ children }: { children: React.ReactNode }) => {
    return <span style={{ color: color }}>{children}</span>;
  };

  /* --------------------------------------------------------------------------------------
  |                            Data to be displayed                                       |
  -------------------------------------------------------------------------------------- */
  const INTRODUCTION_CONTENT = (
    <Text>
      useEffect is a Hook in React that allows you to{" "}
      <Highlighted>perform side effects in function components</Highlighted>. It
      serves a similar purpose to lifecycle methods like componentDidMount,
      componentDidUpdate, and componentWillUnmount in class components.
    </Text>
  );
  const BASIC_USAGE_FN = (
    <Text>
      <Highlighted>Function:</Highlighted> This is the effect function where you
      write the side effect code. This function can optionally return a cleanup
      function, which is used to clean up the effect (like removing event
      listeners or canceling network requests) before the component is unmounted
      or before the effect runs again.`;
    </Text>
  );
  const BASIC_USAGE_DEP = (
    <Text>
      <Highlighted>Dependency Array:</Highlighted> This is an array of values
      that the effect depends on. The effect will only run when one or more of
      these values change. If you omit this array, the effect will run after
      every render. If you pass an empty array, the effect will run only once,
      similar to componentDidMount.
    </Text>
  );
  const SUBSCRIPTIONS_EXAMPLE = `useEffect(() => {
  const socket = new WebSocket('wss://example.com/socket');

  socket.addEventListener('message', (event) => {
    setMessage(event.data); // Handle incoming data
  });

  return () => {
    socket.close(); // Clean up the subscription
  };
}, []); // Empty array means this effect runs only on mount and unmount
`;

  const ALERT_DESCRIPTION = (
    <Text noColor>
      useEffect is inspired by React's class component lifecycle methods,
      specifically componentDidMount, componentDidUpdate, and
      componentWillUnmount. <br />
      <br />
      However, unlike class components, useEffect merges these three lifecycle
      phases into a single, versatile hook that can handle side effects before
      and after renders.
      <br />
      This means with useEffect, you can manage side effects in one place,
      making functional components more powerful and concise than class
      components, which required separate methods for these tasks. This is why
      useEffect is often referred to as the{" "}
      <span style={{ color: infoColor }}>Swiss Army knife</span> of React hooks!
    </Text>
  );

  /* ------------------------------------------------------------------------------------ */

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
      <StyledTopicContent className={isMounted ? "fade-in" : ""}>
        <StyledSection>
          <StyledSubsection id="introduction">
            <Breadcrumbs size="small" color="primary" delimiter="/">
              <BreadcrumbsItem title="Hooks" />
              <BreadcrumbsItem link="/hooks/use-effect" title="useEffect" />
            </Breadcrumbs>
            <Alert
              color="info"
              titleIcon={<IconMoodSmileDizzy />}
              title="Fun Fact"
              description={ALERT_DESCRIPTION}
              style={{marginTop:"0.5rem"}}
            />
            <Text size="large" style={{ marginTop: "0.5rem" }}>
              Introduction
            </Text>
            {INTRODUCTION_CONTENT}
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection id="basic-usage">
            <Text size="large">Basic Usage</Text>
            <Text>
              The useEffect hook takes two arguments:{" "}
              <Highlighted>a function and a dependency array</Highlighted>.
            </Text>
            <CodeDisplay language="JSX" text={BASIC_USAGE_1} />
            <List variant="unordered">
              <ListItem>{BASIC_USAGE_FN}</ListItem>
              <ListItem>{BASIC_USAGE_DEP}</ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection id="examples">
            <List variant="ordered" title={<Text size="large">Examples:</Text>}>
              <ListItem>
                <Text>Basic Example:</Text>
                <CodeDisplay
                  style={{ marginTop: "0.5rem" }}
                  language="JSX"
                  text={BASIC_EXAMPLE_1}
                />
                <Text style={{ marginTop: "1rem" }}>
                  {BASIC_EXAMPLE_1_TEXT}
                </Text>
              </ListItem>
              <ListItem style={{ marginTop: "0.5rem" }}>
                <Text>Effect with Cleanup:</Text>
                <CodeDisplay
                  style={{ marginTop: "0.5rem" }}
                  language="JSX"
                  text={BASIC_EXAMPLE_2}
                />
                <Text style={{ marginTop: "1rem" }}>
                  {BASIC_EXAMPLE_2_TEXT}
                </Text>
              </ListItem>
              <ListItem style={{ marginTop: "0.5rem" }}>
                <Text>Conditional Effect:</Text>
                <CodeDisplay
                  style={{ marginTop: "0.5rem" }}
                  language="JSX"
                  text={BASIC_EXAMPLE_3}
                />
                <Text style={{ marginTop: "1rem" }}>
                  {BASIC_EXAMPLE_3_TEXT}
                </Text>
              </ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection id="rules-of-hooks">
            <List
              variant="unordered"
              title={<Text size="large">Rules of Hooks</Text>}
            >
              <ListItem>
                <Text>
                  <Highlighted>Call Hooks at the Top Level:</Highlighted> Don't
                  call hooks inside loops, conditions, or nested functions.
                  Always use hooks at the top level of your React function so
                  that the hooks are called in the same order each time a
                  component renders.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  <Highlighted>Call Hooks from React Functions:</Highlighted>{" "}
                  Only call hooks from React function components or custom
                  hooks.
                </Text>
              </ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection id="common-side-effect">
            <List
              variant="unordered"
              title={<Text size="large">Common Side Effects</Text>}
            >
              <ListItem>
                <Text>Data fetching</Text>
                <Text>
                  Typically, you want to{" "}
                  <Highlighted>fetch data from an API</Highlighted> and update
                  the state with the fetched data.
                </Text>
              </ListItem>
              <ListItem>
                <Text>Setting up subscriptions</Text>
                <Text>
                  You can create a connection or subscription{" "}
                  <Highlighted>
                    (like a WebSocket, event listener, or data stream)
                  </Highlighted>{" "}
                  when a component mounts and cleaning it up when the component
                  unmounts or dependencies change
                </Text>
                <List title="Steps:" containerStyle={{ marginTop: "0.5rem" }}>
                  <ListItem>
                    <Text>
                      <Highlighted>Initialize the Subscription:</Highlighted>{" "}
                      Inside the useEffect, set up the subscription, such as
                      opening a WebSocket connection or adding an event
                      listener.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      <Highlighted>Handle Data/Updates:</Highlighted> Define a
                      function within the useEffect to handle incoming data or
                      events, updating the component's state accordingly.
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      <Highlighted>Clean Up:</Highlighted> Return a cleanup
                      function from useEffect to close the connection or remove
                      the event listener when the component unmounts or when
                      dependencies change.
                    </Text>
                    <CodeDisplay
                      style={{ marginTop: "0.5rem" }}
                      text={SUBSCRIPTIONS_EXAMPLE}
                      language="javascript"
                    />
                  </ListItem>
                </List>
              </ListItem>
              <ListItem style={{ marginTop: "0.25rem" }}>
                <Text>Manually changing the DOM</Text>
              </ListItem>
              <ListItem>Timers (e.g., setTimeout and setInterval)</ListItem>
              <ListItem>Logging</ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection id="tips-and-best-practices">
            <List title={<Text size="large">Tips And Best Practices</Text>}>
              <ListItem>
                <Text>
                  Use the <Highlighted>dependency array</Highlighted> to control
                  when the effect runs.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Use <Highlighted>cleanup functions</Highlighted> to prevent
                  memory leaks and clean up resources.
                </Text>
              </ListItem>
              <ListItem>
                Be mindful of the dependencies you include in the dependency
                array.
              </ListItem>
              <ListItem>
                <Text>
                  Avoid using the dependency array as an{" "}
                  <Highlighted>optimization technique.</Highlighted>
                </Text>
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
