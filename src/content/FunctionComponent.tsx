import * as React from "react";
import {
  Breadcrumbs,
  BreadcrumbsItem,
  SideBar,
  SideBarGroup,
  SideBarGroupItem,
  SideBarItem,
  Text,
  CodeDisplay,
  List,
  ListItem,
} from "stelios";
import {
  StyledMain,
  StyledSection,
  StyledSubsection,
  StyledTopicContent,
} from "../components/StyledInternalComponents/StyledInternalComponents";

const INTRODUCTION = `In React, a FunctionComponent (also known as a functional component) is a simpler way to write components using JavaScript functions. Unlike class components, which are defined using ES6 classes, functional components are defined as plain JavaScript functions.`;
const DEFINITION = `A FunctionComponent is defined as a JavaScript function that takes props as an argument and returns React elements (JSX). Here is an example of a basic functional component:`;
const PROPS = `Props are passed to a FunctionComponent as an argument. The props object contains all the data passed from the parent component. You can access these props and use them within your component:`;
const STATELESS_VS_STATEFUL = `Functional components are also known as stateless components because they do not have state or lifecycle methods. Before the introduction of hooks, functional components were limited to rendering UI based on props passed to them. With the introduction of hooks, functional components can now have state and lifecycle methods, making them more powerful and versatile.`;
const DEFINITION_EXAMPLE = `import React from 'react';

function MyComponent(props) {
  return <div> Hello, {props.name}! </div>;
}

export default MyComponent;
`;
const PROPS_EXAMPLE = `function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
`;
const PROPS_DESTRUCTURING = `You can also use destructuring to directly access specific props:`;
const PROPS_DESTRUCTURING_EXAMPLE = `function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
`;
const USING_HOOKS = (
  <>
    <Text variant="paragraph">
      React Hooks allow functional components to have state and other features
      previously available only in class components. Here are some common hooks:
    </Text>
    <List>
      <ListItem>
        <b>useState:</b> Adds state to a functional component.
      </ListItem>
      <ListItem>
        <b>useEffect:</b> Performs side effects in functional components
      </ListItem>
    </List>
  </>
);
const USE_STATE_EXAMPLE = `import React, { useState } from 'react';

function Counter() {
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
`;
const USE_EFFECT_EXAMPLE = `import React, { useEffect } from 'react';

function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);

    // Cleanup function
    return () => clearInterval(timer);
  }, []); // Empty array means this effect runs once after the initial render

  return <div>Check the console for ticks.</div>;
}
`;
const PROPS_HOOKS_EXAMPLE = `import React, { useState } from 'react';

function UserProfile({ userName }) {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h1>{userName}'s Profile</h1>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
    </div>
  );
}

export default UserProfile;
`;
const PROPS_HOOKS_1 = `In this example, UserProfile is a functional component that takes userName as a prop and manages the likes state using the useState hook.`;
const PROPS_HOOKS_2 = `In summary, FunctionComponents in React are a more modern and concise way to define components. With the addition of hooks, they can handle complex logic and state management, making them a versatile choice for building React applications.`;

const FunctionComponent = () => {
  const [sidebarSelected, setSidebarSelected] = React.useState("introduction");

  React.useEffect(() => {
    const handleIntersection = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.isIntersecting) {
          setSidebarSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1,
      
    });

    const sections = document.querySelectorAll('[id]');
    sections.forEach((section) => observer.observe(section));

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
    <StyledMain id="styled-main">
      <StyledTopicContent id="styled-topic-content">
        <StyledSection>
          <StyledSubsection>
            <Breadcrumbs size="small" color="primary" delimiter="/">
              <BreadcrumbsItem title="Components" />
              <BreadcrumbsItem
                link="/components/function-component"
                title="Function Components"
              />
            </Breadcrumbs>
          </StyledSubsection>
          <StyledSubsection id="introduction">
            <Text variant="paragraph" size="large">
              Introduction
            </Text>
            <Text>{INTRODUCTION}</Text>
          </StyledSubsection>
          <StyledSubsection id="definition">
            <Text variant="paragraph" size="large">
              Definition
            </Text>
            <Text>{DEFINITION}</Text>
            <CodeDisplay language="JSX" text={DEFINITION_EXAMPLE} />
          </StyledSubsection>
          <StyledSubsection id="props">
            <Text variant="paragraph" size="large">
              Props
            </Text>
            <Text>{PROPS}</Text>
            <CodeDisplay language="JSX" text={PROPS_EXAMPLE} />
            <Text style={{ marginTop: "0.5rem" }}>{PROPS_DESTRUCTURING}</Text>
            <CodeDisplay language="JSX" text={PROPS_DESTRUCTURING_EXAMPLE} />
          </StyledSubsection>
          <StyledSubsection id="stateless-vs-stateful">
            <Text variant="paragraph" size="large">
              Stateless vs Stateful
            </Text>
            <Text>{STATELESS_VS_STATEFUL}</Text>
          </StyledSubsection>
          <StyledSubsection id="using-hooks">
            <Text variant="paragraph" size="large">
              Using Hooks
            </Text>
            {USING_HOOKS}
            <Text
              variant="paragraph"
              style={{ marginTop: "0.5rem", scrollMarginTop: "4rem" }}
              id="use-state-example"
            >
              useState Example
            </Text>
            <CodeDisplay language="JSX" text={USE_STATE_EXAMPLE} />
            <Text
              variant="paragraph"
              style={{ marginTop: "0.75rem", scrollMarginTop: "4rem" }}
              id="use-effect-example"
            >
              useEffect Example
            </Text>
            <CodeDisplay language="JSX" text={USE_EFFECT_EXAMPLE} />
            <Text
              variant="paragraph"
              size="large"
              style={{ marginTop: "0.75rem", scrollMarginTop:"4rem" }}
              id="advantages"
            >
              Advantages
            </Text>
            <List variant="unordered">
              <ListItem>
                <b>Simplicity:</b> Functional components are simpler and easier
                to read and test.
              </ListItem>
              <ListItem>
                <b>Performance:</b> They can be more performant because they
                avoid the overhead associated with class components.
              </ListItem>
              <ListItem>
                <b>Hooks:</b> With hooks, functional components can now manage
                state and side effects, making them powerful and flexible.
              </ListItem>
            </List>
          </StyledSubsection>
          <StyledSubsection id="props-and-hooks">
            <Text variant="paragraph" size="large">
              Example with Props and Hooks
            </Text>
            <CodeDisplay language="JSX" text={PROPS_HOOKS_EXAMPLE} />
            <Text variant="paragraph" style={{ marginTop: "0.75rem" }}>
              {PROPS_HOOKS_1}
            </Text>
            <Text variant="paragraph">{PROPS_HOOKS_2}</Text>
          </StyledSubsection>
        </StyledSection>
      </StyledTopicContent>
      <SideBar top="6rem" right="4rem" style={{ background: "transparent", position:"fixed" }}>
        <SideBarItem
          size="small"
          selected={sidebarSelected === "introduction"}
          onClick={() => {
            onSideBarItemClick("introduction");
          }}
        >
          Introduction
        </SideBarItem>
        <SideBarItem
          size="small"
          selected={sidebarSelected === "definition"}
          onClick={() => {
            onSideBarItemClick("definition");
          }}
        >
          Definition
        </SideBarItem>
        <SideBarItem
          size="small"
          selected={sidebarSelected === "props"}
          onClick={() => {
            onSideBarItemClick("props");
          }}
        >
          Props
        </SideBarItem>
        <SideBarItem
          size="small"
          selected={sidebarSelected === "stateless-vs-stateful"}
          onClick={() => {
            onSideBarItemClick("stateless-vs-stateful");
          }}
        >
          Stateless vs Stateful
        </SideBarItem>
        <SideBarGroup title="Using Hooks" size="small" onClick={() => onSideBarItemClick("using-hooks")}>
          <SideBarGroupItem
            size="small"
            onClick={() => {
              onSideBarItemClick("use-state-example");
            }}
          >
            useState Example
          </SideBarGroupItem>
          <SideBarGroupItem size="small" onClick={() => {
              onSideBarItemClick("use-effect-example");
            }}>useEffect Example</SideBarGroupItem>
          <SideBarGroupItem size="small" onClick={() => {
              onSideBarItemClick("advantages");
            }}>Advantages</SideBarGroupItem>
        </SideBarGroup>
        <SideBarItem size="small" onClick={() => {
              onSideBarItemClick("props-and-hooks");
            }}>Props and Hooks</SideBarItem>
      </SideBar>
    </StyledMain>
  );
};

export default FunctionComponent;
