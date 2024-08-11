import * as React from "react";
import {
  Text,
  CodeDisplay,
  List,
  ListItem,
  Alert,
  Breadcrumbs,
  BreadcrumbsItem,
  SideBar,
  SideBarItem,
} from "stelios";
import {
  StyledMain,
  StyledSection,
  StyledSubsection,
  StyledTopicContent,
} from "../components/StyledInternalComponents/StyledInternalComponents";
import { IconExclamationCircleFilled } from "@tabler/icons-react";
import { useWindowSize } from "../helpers/helpers";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "basic-structure", title: "Basic Structure" },
  { id: "state-management", title: "State Management" },
  { id: "updating-state", title: "Updating State" },
  { id: "lifecycle-methods", title: "Lifecycle Methods" },
];

const ALERT_TITLE = "Do Not Use";
const ALERT_DESCRIPTION = (
  <>
    <Text noColor size="small">
      React recommends not to use class components. Please use function
      components instead.
    </Text>
    <Text noColor size="small">
      Before React 16.8, class components were the only way to create components
      with state and lifecycle methods. <br /> With the introduction of hooks,
      function components can now have state and lifecycle methods, making class
      components obsolete.
    </Text>
  </>
);

const INTRODUCTION_CONTENT = `A class component in React is a fundamental way to define components using ES6 class syntax. These components are more feature-rich compared to functional components, particularly before the introduction of hooks. Class components extend the React.Component base class, giving them access to various built-in features, such as state management and lifecycle methods.`;

const BASIC_STRUCTURE_CONTENT =
  "A class component is defined by a class that extends React.Component. The class must have a render method that returns the component's UI.";
const BASIC_STRUCTURE_EXAMPLE = `import React, { Component } from 'react';

class MyComponent extends Component {
  // Initializing state
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, World!'
    };
  }

  // Required render method
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>This is a basic class component.</p>
      </div>
    );
  }
}

export default MyComponent;
`;

const EXPLANATION_1 = `import React, { Component } from 'react';`;
const EXPLANATION_2 = `class MyComponent extends Component {`;
const EXPLANATION_3 = `constructor(props) {
  super(props);
  this.state = {
    message: 'Hello, World!'
  };
}`;

const INITIALIZATION_EXAMPLE = `import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return <h1>{this.state.count}</h1>;
  }

}`;

const UPDATING_EXAMPLE = `import React, { Component } from 'react';
              
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}`;

const ClassComponent = () => {
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
        className={isMounted ? "fade-in" : ""}
        style={{ width: mobile ? "100%" : "calc(100% - 12rem" }}
      >
        <StyledSection id="introduction">
          <StyledSubsection>
            <Breadcrumbs size="small" color="primary" delimiter="/">
              <BreadcrumbsItem title="Components" />
              <BreadcrumbsItem
                link="/components/class-component"
                title="Class Component"
              />
            </Breadcrumbs>
            <Alert
              color="danger"
              titleIcon={<IconExclamationCircleFilled />}
              title={ALERT_TITLE}
              description={ALERT_DESCRIPTION}
              style={{ marginTop: "1rem" }}
            ></Alert>
          </StyledSubsection>
          <StyledSubsection>
            <Text size="large">Introduction</Text>
            <Text variant="paragraph">{INTRODUCTION_CONTENT}</Text>
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="basic-structure">
          <StyledSubsection>
            <Text variant="paragraph" size="large">
              Basic Structure
            </Text>
            <Text variant="paragraph">{BASIC_STRUCTURE_CONTENT}</Text>
            <Text variant="paragraph" id="example">
              Example
            </Text>
            <CodeDisplay language="JSX" text={BASIC_STRUCTURE_EXAMPLE} />
          </StyledSubsection>
          <StyledSubsection>
            <Text variant="paragraph">Explanation</Text>
            <List>
              <ListItem>
                Importing React and Component:
                <CodeDisplay
                  style={{ margin: "0.75rem 0 0.75rem 0" }}
                  language="JSX"
                  text={EXPLANATION_1}
                />
                <Text>
                  This line imports React and the Component class from the React
                  library.
                </Text>
              </ListItem>
              <ListItem>
                Defining the Class Component:
                <CodeDisplay
                  style={{ margin: "0.75rem 0 1rem 0" }}
                  language="JSX"
                  text={EXPLANATION_2}
                />
                <Text>
                  This defines a new class component named MyComponent that
                  extends React.Component.
                </Text>
              </ListItem>
              <ListItem>
                Constructor and State Initialization:
                <CodeDisplay
                  style={{ margin: "0.75rem 0 1rem 0" }}
                  language="JSX"
                  text={EXPLANATION_3}
                />
                <Text>
                  The constructor is used to initialize the component's state.
                  Here, the state contains a single property message.
                </Text>
              </ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="state-management">
          <StyledSubsection>
            <Text size="large">State Management</Text>
            <Text variant="paragraph" size="large">
              Initializing State
            </Text>
            <Text variant="paragraph">
              State in a class component is typically initialized in the
              constructor.
            </Text>
            <Text variant="paragraph">Example</Text>
            <CodeDisplay language="JSX" text={INITIALIZATION_EXAMPLE} />
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="updating-state">
          <StyledSubsection style={{ marginTop: "0.5rem" }}>
            <Text variant="paragraph" size="large">
              Updating State
            </Text>
            <Text variant="paragraph">
              State is updated using the setState method, which merges the new
              state with the current state and triggers a re-render.
            </Text>
            <Text variant="paragraph">Example</Text>
            <CodeDisplay language="JSX" text={UPDATING_EXAMPLE} />
            <List title="Explanation">
              <ListItem>
                <Text>Increment Method:</Text>
                <Text style={{ marginTop: "0.25rem" }}>
                  The increment method is called when the button is clicked. It
                  updates the count state by incrementing it by 1.
                </Text>
              </ListItem>
              <ListItem style={{ marginTop: "0.5rem" }}>
                <Text>Button Element:</Text>
                <Text style={{ marginTop: "0.25rem" }}>
                  The button element has an onClick event handler that calls the
                  increment method when clicked.
                </Text>
              </ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="lifecycle-methods">
          <List
            title={
              <Text variant="paragraph" size="large">
                Lifecycle Methods
              </Text>
            }
          >
            <ListItem>
              <Text variant="paragraph">Mounting</Text>
              <Text variant="paragraph" style={{ marginTop: "0.25rem" }}>
                These methods are called when an instance of a component is
                being created and inserted into the DOM.
              </Text>
            </ListItem>

            <ListItem style={{ marginTop: "0.5rem" }}>
              <Text variant="paragraph">Updating</Text>
              <Text variant="paragraph" style={{ marginTop: "0.25rem" }}>
                These methods are called when a component is being re-rendered.
              </Text>
            </ListItem>

            <ListItem style={{ marginTop: "0.5rem" }}>
              <Text variant="paragraph">Unmounting</Text>
              <Text variant="paragraph" style={{ marginTop: "0.25rem" }}>
                This method is called when a component is being removed from the
                DOM.
              </Text>
            </ListItem>
          </List>
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

export default ClassComponent;
