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

const INTRODUCTION_CONTENT =
  "The useState Hook is a fundamental part of the React Hooks API. It allows functional components to have their own state, a feature previously only available to class components. This capability enhances the flexibility and simplicity of functional components, enabling them to manage their own state without needing to convert them into class components.";
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
const EXPLANATION_1 = `The Counter component declares a state variable 'count' using the useState Hook with an initial value of 0. It then renders a paragraph element that displays the current count value and a button that increments the count value when clicked.`;
const EXPLANATION_2 = `When the button is clicked, the setCount function is called with the new count value as an argument. This triggers a re-render of the component with the updated count value displayed in the paragraph element.`;
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
            <Breadcrumbs size="small" color="primary" delimiter="/">
              <BreadcrumbsItem title="Hooks" />
              <BreadcrumbsItem link="/hooks/use-state" title="useState" />
            </Breadcrumbs>
          </StyledSubsection>
          <StyledSubsection id="introduction">
            <Text size="large">Introduction</Text>
            <Text variant="paragraph">{INTRODUCTION_CONTENT}</Text>
          </StyledSubsection>
          <StyledSubsection id="basic-usage">
            <Text size="large">Basic Usage</Text>
            <Text>
              To use the useState Hook, you need to import it from React:
            </Text>
            <CodeDisplay language="JSX" text={BASIC_USAGE_1} />
          </StyledSubsection>
          <StyledSubsection id="syntax">
            <Text size="large">Syntax</Text>
            <Text>
              The useState Hook takes the initial state as an argument and
              returns an array with two elements:
            </Text>
            <List variant="ordered">
              <ListItem>The first element is the current state value.</ListItem>
              <ListItem>
                The second element is a function that allows you to update the
                state value.
              </ListItem>
            </List>
            <Text>Here's the syntax:</Text>
            <CodeDisplay language="JSX" text={BASIC_USAGE_SYNTAX} />
          </StyledSubsection>
          <StyledSubsection id="example">
            <Text size="large">Example</Text>
            <Text>
              Here's an example of a simple counter component that uses the
              useState Hook:
            </Text>
            <CodeDisplay language="JSX" text={BASIC_USAGE_EXAMPLE} />
          </StyledSubsection>
          <StyledSubsection id="explanation">
            <Text size="large">Explanation</Text>
            <Text>{EXPLANATION_1}</Text>
            <Text>{EXPLANATION_2}</Text>
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection id="rules-of-hooks">
            <Text size="large">Rules of Hooks</Text>
            <List>
              <ListItem>
                Hooks should only be called at the top level of a functional
                component or another custom Hook.
              </ListItem>
              <ListItem>
                Hooks should not be called inside loops, conditions, or nested
                functions.
              </ListItem>
              <ListItem>
                Hooks should always be called in the same order, and they should
                not be called conditionally.
              </ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection id="initial-state">
            <Text size="large">Initial State</Text>
            <Text>The initial state can be a value or a function:</Text>
            <CodeDisplay language="JSX" text={INITIAL_STATE_1} />
            <Text>
              If the initial state is a function, it will be executed only on
              the first render:
            </Text>
            <CodeDisplay language="JSX" text={INITIAL_STATE_2} />
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection id="updating-state">
            <Text size="large">Updating State</Text>
            <Text>
              To update the state, you can call the function returned by the
              useState Hook with the new state value as an argument.
            </Text>
            <Text>
              Here's an example of updating the state in a counter component:
            </Text>
            <CodeDisplay language="JSX" text={UPDATING_STATE} />
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection>
            <Text size="large">Summary</Text>
            <List variant="ordered">
              <ListItem>
                The useState Hook allows functional components to have their own
                state.
              </ListItem>
              <ListItem>
                It takes the initial state as an argument and returns an array
                with the current state value and a function to update the state.
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
            <Text>
              Using useState effectively allows you to manage state in
              functional components, providing more flexibility and simplifying
              your React code.
            </Text>
          </StyledSubsection>
        </StyledSection>
      </StyledTopicContent>
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
    </StyledMain>
  );
};

export default UseState;
