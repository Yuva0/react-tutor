import * as React from "react";
import {
  StyledMain,
  StyledSection,
  StyledSubsection,
  StyledTopicContent,
} from "../components/StyledInternalComponents/StyledInternalComponents";
import {
  Alert,
  Breadcrumbs,
  BreadcrumbsItem,
  Text,
  CodeDisplay,
  List,
  ListItem,
  SideBar,
  SideBarItem,
} from "stelios";
import { IconInfoCircle } from "@tabler/icons-react";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "key-concepts", title: "Key Concepts" },
  { id: "features", title: "Features" },
  { id: "example", title: "Example" },
];

const COMPONENT_EXAMPLE = `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
`;
const ALERT_TITLE = (
  <Text size="large" noColor>
    Prerequisite of React
  </Text>
);
const ALERT_DESCRITPION_1 = `For learning React first you have a clear understanding of HTML, CSS and JavaScript. As React is a JavaScript library and uses most of its concept so you really have to understands the major concepts of it.`;
const ALERT_DESCRITPION = (
  <>
    <Text>{ALERT_DESCRITPION_1}</Text>
    <List>
      <ListItem>
        <Text noColor>HTML and CSS</Text>
      </ListItem>
      <ListItem>
        <Text noColor>JavaScript and ES6</Text>
      </ListItem>
      <ListItem>
        <Text noColor>JSX (Javascript XML) & Babel</Text>
      </ListItem>
      <ListItem>
        <Text noColor>Node+Npm</Text>
      </ListItem>
      <ListItem>
        <Text noColor>Git and CLI (Command Line Interface)</Text>
      </ListItem>
    </List>
  </>
);
const INTRODUCTION_1 = `React is a popular JavaScript library for building user interfaces (UIs) on the web. It is declarative and component-based, enabling developers to create reusable UI components. React employs a Virtual DOM (Document Object Model) approach to optimize rendering performance by minimizing direct DOM updates, making it fast and efficient. Additionally, React integrates seamlessly with other tools and libraries, providing flexibility and enhancing the development experience.`;
const JSX_EXAMPLE = `const element = <h1>Hello, world!</h1>;`;
const COMPONENTS_1 = `React is component-based. This means the UI is divided into small, reusable pieces called components.`;
const COMPONENTS_2 = `Each component encapsulates its own structure (HTML), style (CSS), and behavior (JavaScript).`;
const COMPONENTS_3 = `Components can be functional (simple functions) or class-based (ES6 classes).`;
const JSX_1 = `JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to HTML.`;
const JSX_2 = `JSX makes it easier to write and add HTML in React.`;
const VIRTUAL_DOM_1 = `React uses a virtual DOM, which is a lightweight representation of the actual DOM.`;
const VIRTUAL_DOM_2 = `When the state of an object changes, React updates the virtual DOM first, then compares it with the previous state, and only updates the actual DOM where changes have occurred.`;
const VIRTUAL_DOM_3 = `This process, called reconciliation, makes updates more efficient.`;
const STATE_PROPS_1 = `State: An object that holds data that may change over the lifetime of the component. State is managed within the component (usually in class components using this.state or in functional components using the useState hook).`;
const STATE_PROPS_2 = `Props: Short for properties, props are read-only data passed from parent components to child components.`;
const LIFECYCLE_METHODS_1 = `Class components have lifecycle methods that you can override to run code at specific times during a component's life (e.g., componentDidMount, shouldComponentUpdate, componentWillUnmount).`;
const LIFECYCLE_METHODS_2 = `Functional components use hooks like useEffect to manage side effects.`;
const DECLARATIVE_1 = `React allows you to describe what you want the UI to look like, and it handles the rendering.`;
const DECLARATIVE_2 = `This makes it easier to understand and debug the application.`;
const COMPONENT_ARCHITECTURE_1 = `Encourages code reusability by dividing the UI into independent, reusable components.`;
const COMPONENT_ARCHITECTURE_2 = `Helps in organizing the codebase, making it more maintainable and scalable.`;
const UNIDIRECTIONAL_FLOW_1 = `React follows a unidirectional data flow, meaning data flows from parent to child components.`;
const UNIDIRECTIONAL_FLOW_2 = `This makes it easier to debug and understand the state changes in the application.`;
const HOOKS_1 = `Introduced in React 16.8, hooks allow you to use state and other React features in functional components.`;
const HOOKS_2 = `Common hooks include useState, useEffect, useContext, useReducer, and custom hooks.`;
const ECOSYSTEM_TOOLS_1 = `React has a rich ecosystem of tools and libraries, such as React Router for routing, Redux for state management, and Next.js for server-side rendering.`;
const ECOSYSTEM_TOOLS_2 = `Developer tools like React Developer Tools (a browser extension) help in debugging and profiling React applications.`;
const REACT_NATIVE_1 = `React can be used to build mobile applications through React Native, allowing you to write cross-platform apps for iOS and Android using the same React principles.`;
const EXAMPLE_1 = `Here’s a simple example of a React component that displays a greeting message:`;
const EXAMPLE_EXAMPLE = `import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');

  return (
    <div>
      <h1>Hello, {name ? name : 'world'}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default Greeting;
`;
const EXAMPLE_2 = `We use the useState hook to manage the state of the name variable.`;
const EXAMPLE_3 = `The input field updates the state, and the greeting message changes accordingly.`;
const EXAMPLE_4 = `React’s ability to efficiently update and render just the right components when your data changes makes it a powerful tool for building dynamic and interactive user interfaces.`;

const UnderstandingReact: React.FunctionComponent = () => {
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
              <BreadcrumbsItem title="Guides" />
              <BreadcrumbsItem
                link="/hooks/understanding-react"
                title="Understanding React"
              />
            </Breadcrumbs>
          </StyledSubsection>
          <StyledSubsection id="introduction">
            <Text size="large">Introduction</Text>
            <Text>{INTRODUCTION_1}</Text>
            <Alert
              color="warning"
              title={ALERT_TITLE}
              titleIcon={<IconInfoCircle />}
              description={ALERT_DESCRITPION}
              style={{ marginTop: "0.5rem" }}
            />
          </StyledSubsection>
          <StyledSubsection id="key-concepts">
            <Text variant="paragraph" size="large">
              Key Concepts
            </Text>
            <List
              variant="ordered"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <ListItem>
                Components:
                <List variant="unordered">
                  <ListItem>{COMPONENTS_1}</ListItem>
                  <ListItem>{COMPONENTS_2}</ListItem>
                  <ListItem>{COMPONENTS_3}</ListItem>
                  <ListItem>
                    Example:
                    <CodeDisplay
                      style={{ marginTop: "0.75rem" }}
                      language="JSX"
                      text={COMPONENT_EXAMPLE}
                    />
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                JSX:
                <List variant="unordered">
                  <ListItem>{JSX_1}</ListItem>
                  <ListItem>{JSX_2}</ListItem>
                  <ListItem>
                    Example
                    <CodeDisplay
                      style={{ marginTop: "0.75rem" }}
                      language="JSX"
                      text={JSX_EXAMPLE}
                    />
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                Virtual DOM
                <List variant="unordered">
                  <ListItem>{VIRTUAL_DOM_1}</ListItem>
                  <ListItem>{VIRTUAL_DOM_2}</ListItem>
                  <ListItem>{VIRTUAL_DOM_3}</ListItem>
                </List>
              </ListItem>
              <ListItem>
                State and Props:
                <List variant="unordered">
                  <ListItem>{STATE_PROPS_1}</ListItem>
                  <ListItem>{STATE_PROPS_2}</ListItem>
                </List>
              </ListItem>
              <ListItem>
                Lifecycle Methods:
                <List
                  variant="unordered"
                  style={{ marginTop: "0.75rem", gap: "0.75rem" }}
                >
                  <ListItem>{LIFECYCLE_METHODS_1}</ListItem>
                  <ListItem>{LIFECYCLE_METHODS_2}</ListItem>
                </List>
              </ListItem>
            </List>
          </StyledSubsection>
          <StyledSubsection id="features">
            <Text variant="paragraph" size="large">
              Features
            </Text>
            <List variant="ordered">
              <ListItem>
                Declarative:
                <List variant="unordered">
                  <ListItem>{DECLARATIVE_1}</ListItem>
                  <ListItem>{DECLARATIVE_2}</ListItem>
                </List>
              </ListItem>
              <ListItem>
                Component Architecture:
                <List variant="unordered">
                  <ListItem>{COMPONENT_ARCHITECTURE_1}</ListItem>
                  <ListItem>{COMPONENT_ARCHITECTURE_2}</ListItem>
                </List>
              </ListItem>
              <ListItem>
                Unidirectional Data Flow:
                <List variant="unordered">
                  <ListItem>{UNIDIRECTIONAL_FLOW_1}</ListItem>
                  <ListItem>{UNIDIRECTIONAL_FLOW_2}</ListItem>
                </List>
              </ListItem>
              <ListItem>
                Hooks:
                <List variant="unordered">
                  <ListItem>{HOOKS_1}</ListItem>
                  <ListItem>{HOOKS_2}</ListItem>
                </List>
              </ListItem>
              <ListItem>
                Ecosystem Tools:
                <List variant="unordered">
                  <ListItem>{ECOSYSTEM_TOOLS_1}</ListItem>
                  <ListItem>{ECOSYSTEM_TOOLS_2}</ListItem>
                </List>
              </ListItem>
              <ListItem>
                React Native:
                <List variant="unordered">
                  <ListItem>{REACT_NATIVE_1}</ListItem>
                </List>
              </ListItem>
            </List>
          </StyledSubsection>
          <StyledSubsection id="example">
            <Text size="large">Example</Text>
            <Text>{EXAMPLE_1}</Text>
            <CodeDisplay language="jsx" text={EXAMPLE_EXAMPLE} />
            <Text>In this example:</Text>
            <List>
              <ListItem>{EXAMPLE_2}</ListItem>
              <ListItem>{EXAMPLE_3}</ListItem>
            </List>
            <Text>{EXAMPLE_4}</Text>
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

export default UnderstandingReact;
