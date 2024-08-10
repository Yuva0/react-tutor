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
import { useWindowSize } from "../helpers/helpers";
const BASIC_USAGE_1 = `import React, { useState } from 'react';`;
const BASIC_USAGE_SYNTAX = `const [state, setState] = useState(initialState);`;
const BASIC_USAGE_EXAMPLE = `import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
`;
const INITIAL_STATE_1 = `const [state, setState] = useState(initialValue);`;
const INITIAL_STATE_2 = `const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation();
  return initialState;
});`;
const UPDATING_STATE = `// Updating state with a new value
setState(newValue);

// Updating state with a function
setState(prevState => {
  // Calculate new state based on prevState
  return newState;
});
`;

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "basic-usage", title: "Basic Usage" },
  { id: "syntax", title: "Syntax" },
  { id: "example", title: "Example" },
  { id: "explanation", title: "Explanation" },
  { id: "rules-of-hooks", title: "Rules of Hooks" },
  { id: "initial-state", title: "Initial State" },
  { id: "updating-state", title: "Updating State" },
];

const UseState: React.FunctionComponent = () => {
  const [sidebarSelected, setSidebarSelected] = React.useState("introduction");
  const [isMounted, setIsMounted] = React.useState(false);
  const { width } = useWindowSize();
  const mobile = width < 1200;

  const color = useTheme().theme.colorPalette.primary.accentScale[10];

  const Highlighted = ({ children }: { children: React.ReactNode }) => {
    return <span style={{ color: color }}>{children}</span>;
  };

  /* --------------------------------------------------------------------------------------
  |                            Data to be displayed                                       |
  -------------------------------------------------------------------------------------- */
  const EXPLANATION_1 = (
    <Text>
      The Counter component declares a state variable{" "}
      <Highlighted>count</Highlighted> using the useState Hook with an initial
      value of 0. It then renders a paragraph element that displays the current
      count value and a button that increments the count value when clicked.
    </Text>
  );
  const EXPLANATION_2 = (
    <Text>
      When the button is clicked, the setCount function is called with the{" "}
      <Highlighted>new count value as an argument</Highlighted>. This triggers a
      re-render of the component with the updated count value displayed in the
      paragraph element.
    </Text>
  );

  const INTRODUCTION_CONTENT = (
    <Text>
      The useState Hook is a fundamental part of the React Hooks API. It allows
      functional components to <Highlighted>have their own state</Highlighted>,
      a feature previously only available to class components. This capability
      enhances the flexibility and simplicity of functional components, enabling
      them to <Highlighted>manage their own state</Highlighted> without needing
      to convert them into class components.
    </Text>
  );

  /* ------------------------------------------------------------------------------------ */

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
      rootMargin: "0px",
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
      <StyledTopicContent
        style={{ width: mobile ? "100%" : "calc(100% - 12rem" }}
        className={isMounted ? "fade-in" : ""}
      >
        <StyledSection id="introduction">
          <StyledSubsection>
            <Breadcrumbs size="small" color="primary" delimiter="/">
              <BreadcrumbsItem title="Hooks" />
              <BreadcrumbsItem link="/hooks/use-state" title="useState" />
            </Breadcrumbs>
            <Alert
              titleIcon={<IconMoodSmileDizzy />}
              color="info"
              title="Fun Fact!"
              description="The useState Hook is the most commonly used Hook in React."
              style={{ marginTop: "0.5rem" }}
            />
            <Text size="large" style={{ marginTop: "0.5rem" }}>
              Introduction
            </Text>
            {INTRODUCTION_CONTENT}
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="basic-usage">
          <StyledSubsection>
            <Text size="large">Basic Usage</Text>
            <Text>
              To use the useState Hook, you need to import it from React:
            </Text>
            <CodeDisplay language="JSX" text={BASIC_USAGE_1} />
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="syntax">
          <StyledSubsection>
            <Text size="large">Syntax</Text>
            <List
              variant="ordered"
              title={
                <Text>
                  The useState Hook takes the initial state as an argument and
                  returns an array with two elements:
                </Text>
              }
            >
              <ListItem>
                <Text>
                  The first element is the{" "}
                  <Highlighted>current state value.</Highlighted>
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  The second element is a function that{" "}
                  <Highlighted>
                    allows you to update the state value.
                  </Highlighted>
                </Text>
              </ListItem>
            </List>
            <Text>Here's the syntax:</Text>
            <CodeDisplay language="JSX" text={BASIC_USAGE_SYNTAX} />
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="example">
          <Text size="large">Example</Text>
          <Text>
            Here's an example of a simple counter component that uses the
            useState Hook:
          </Text>
          <CodeDisplay language="JSX" text={BASIC_USAGE_EXAMPLE} />
        </StyledSection>
        <StyledSection id="explanation">
          <Text size="large">Explanation</Text>
          <StyledSubsection>
            {EXPLANATION_1}
            {EXPLANATION_2}
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="rules-of-hooks">
          <List title={<Text size="large">Rules of Hooks</Text>}>
            <ListItem>
              <Text>
                Hooks should only be called at{" "}
                <Highlighted>
                  the top level of a functional component or another custom
                  Hook.
                </Highlighted>
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                Hooks should not be called inside{" "}
                <Highlighted>
                  loops, conditions, or nested functions.
                </Highlighted>
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                Hooks should always be called in the{" "}
                <Highlighted>same order</Highlighted>, and they should not be
                called <Highlighted>conditionally</Highlighted>.
              </Text>
            </ListItem>
          </List>
        </StyledSection>
        <StyledSection id="initial-state">
          <Text size="large">Initial State</Text>
          <Text>The initial state can be a value or a function:</Text>
          <CodeDisplay language="JSX" text={INITIAL_STATE_1} />
          <Text style={{ marginTop: "1rem" }}>
            If the initial state is a function, it will be executed{" "}
            <Highlighted>only on the first render:</Highlighted>
          </Text>
          <CodeDisplay language="JSX" text={INITIAL_STATE_2} />
        </StyledSection>
        <StyledSection id="updating-state">
          <Text size="large">Updating State</Text>
          <Text>
            To update the state, you can call the function returned by the
            useState Hook with the new state value as an argument.
          </Text>
          <Text>
            Here's an example of updating the state in a counter component:
          </Text>
          <CodeDisplay language="JSX" text={UPDATING_STATE} />
        </StyledSection>
        <StyledSection>
          <StyledSubsection>
            <List variant="ordered" title={<Text size="large">Summary</Text>}>
              <ListItem>
                <Text>
                  The useState Hook allows functional components to{" "}
                  <Highlighted>have their own state.</Highlighted>
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  It takes the initial state as an argument and returns an array
                  with the <Highlighted>current state value</Highlighted> and a{" "}
                  <Highlighted>function to update the state</Highlighted>.
                </Text>
              </ListItem>
              <ListItem>
                The initial state can be a value or a function that returns the
                initial state value.
              </ListItem>
              <ListItem>
                To update the state, you can call the function returned by the
                useState Hook with the new state value or a function that
                calculates the new state value.
              </ListItem>
            </List>
            <Text style={{ marginTop: "0.5rem" }}>
              Using useState effectively allows you to manage state in
              functional components, providing more flexibility and simplifying
              your React code.
            </Text>
          </StyledSubsection>
        </StyledSection>
      </StyledTopicContent>
      {!mobile && (
        <SideBar top="6rem" right="4rem" style={{ background: "transparent" }}>
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

export default UseState;
