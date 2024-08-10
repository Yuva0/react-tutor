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
  { id: "what-is-context", title: "What is Context?" },
  { id: "creating-context", title: "Creating Context" },
  { id: "using-the-context", title: "Using the context with useContext" },
  { id: "how-use-context-works", title: "How useContext works?" },
  { id: "best-practices", title: "Best Practices" },
  {
    id: "examples-with-multiple-contexts",
    title: "Examples with Multiple Contexts",
  },
  { id: "context-vs-props", title: "Context vs Props" },
];

const INTRODUCTION_CONTENT = `In React, the Context API is a mechanism for passing data through the component tree without having to pass props down manually at every level. It's useful for sharing global data such as user information, themes, or settings that many components might need.`;
const CREATING_CONTEXT_EXAMPLE = `import React, { createContext, useState } from 'react';

// Create a Context with a default value
const MyContext = createContext(defaultValue);

const MyProvider = ({ children }) => {
  const [value, setValue] = useState('some value');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};
`;
const USE_CONTEXT_SYNTAX = `const contextValue = useContext(MyContext);`;
const USE_CONTEXT_EXAMPLE = `import React, { useContext } from 'react';
import MyContext from './MyContext'; // Import the context object

const MyComponent = () => {
  // Access the context value
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>Value from context: {value}</p>
      <button onClick={() => setValue('new value')}>Change Value</button>
    </div>
  );
};
`;
const EXAMPLE_MULTIPLE_CONTEXT = `const UserContext = createContext(null);
const ThemeContext = createContext('light');

const App = () => {
  return (
    <UserContext.Provider value={/* user data */}>
      <ThemeContext.Provider value={/* theme data */}>
        <MyComponent />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

const MyComponent = () => {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <div style={{ color: theme === 'dark' ? 'white' : 'black' }}>
      {user ? \`Hello, \${user.name}\` : 'Please log in'}
    </div>
  );
};
`;

const UseContext: React.FC = () => {
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

  if (!isMounted) return <StyledMain>{null}</StyledMain>;
  return (
    <StyledMain>
      <StyledTopicContent className={isMounted ? "fade-in" : ""}>
        <StyledSection>
          <StyledSubsection id="what-is-context">
            <Breadcrumbs size="small" color="primary" delimiter="/">
              <BreadcrumbsItem title="Hooks" />
              <BreadcrumbsItem link="/hooks/use-context" title="useContext" />
            </Breadcrumbs>
            <Text size="large" style={{ marginTop: "1rem" }}>
              What is context?
            </Text>
            <Text>{INTRODUCTION_CONTENT}</Text>
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection id="creating-context">
            <Text size="large">Creating Context</Text>
            <List
              title={
                <Text>
                  Before you can use the useContext hook, you need to create a
                  Context object using React.createContext. This object will
                  include two key components:
                </Text>
              }
            >
              <ListItem>
                Provider: A component that holds the context's value and
                provides it to its descendant components.
              </ListItem>
              <ListItem>
                Consumer: A component that subscribes to context changes and
                uses the context value.
              </ListItem>
            </List>
            <Text>Example</Text>
            <CodeDisplay
              language="javascript"
              text={CREATING_CONTEXT_EXAMPLE}
            />
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection id="using-the-context">
            <Text size="large">Using the Context with useContext</Text>
            <Text>
              The useContext hook allows you to access the context value from
              the nearest Provider component in the component tree.
            </Text>
            <Text>Syntax</Text>
            <CodeDisplay language="javascript" text={USE_CONTEXT_SYNTAX} />
            <Text>Example</Text>
            <CodeDisplay language="javascript" text={USE_CONTEXT_EXAMPLE} />
          </StyledSubsection>
          <StyledSubsection id="how-use-context-works">
            <Text size="large">How useContext works?</Text>
            <Text>
              When you call useContext(MyContext) in a component, it reads the
              context value from the nearest Provider component in the component
              tree. The useContext hook will re-render the component when the
              context value changes.
            </Text>
            <List>
              <ListItem>
                Context Creation: First, you create a Context object using
                createContext. This provides a Provider and a Consumer.
              </ListItem>
              <ListItem>
                Provider Component: You wrap your component tree with the
                Provider component from the context. The value prop on the
                Provider specifies the value that will be available to all
                descendants.
              </ListItem>
              <ListItem>
                Using useContext: Within a descendant component, you use the
                useContext hook to access the context's value. This hook will
                return the current context value.
              </ListItem>
              <ListItem>
                Reactivity: When the value provided by the Provider changes, all
                components using useContext will automatically re-render to
                reflect the updated value.
              </ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection id="best-practices">
            <List
              title={<Text size="large">Best Practices</Text>}
              variant="unordered"
            >
              <ListItem>
                Default Values: Provide a default value when creating the
                context to ensure that your components have a fallback if
                they're used outside of a Provider.
              </ListItem>
              <ListItem>
                Minimal State in Context: Only put the minimal required state in
                context to avoid unnecessary re-renders. For more complex state
                management, consider using state management libraries.
              </ListItem>
              <ListItem>
                Separate Contexts: Create separate contexts for different pieces
                of state or different parts of your application to maintain
                clarity and modularity.
              </ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection id="examples-with-multiple-contexts">
            <Text size="large">Examples with Multiple Contexts</Text>
            <Text>
              You can use multiple contexts in a single component by nesting
              multiple Provider components. Each Provider will provide a
              different context value to its descendants.
            </Text>
            <CodeDisplay
              style={{ marginTop: "0.25rem" }}
              language="javascript"
              text={EXAMPLE_MULTIPLE_CONTEXT}
            />
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection id="context-vs-props">
            <Text size="large">Context vs Props</Text>
            <List
              title={
                <Text>
                  Context is useful for passing data that is needed by many
                  components in your application. It's a way to avoid prop
                  drilling and make your code cleaner and more maintainable.
                </Text>
              }
            >
              <ListItem>
                Context: Use context when you have data that needs to be
                accessed by many components at different levels of the component
                tree.
              </ListItem>
              <ListItem>
                Props: Use props when you have data that is only needed by a
                single component or a few components.
              </ListItem>
            </List>
            <Text style={{marginTop:"0.5rem"}}>
              By using useContext, you simplify the process of accessing and
              managing global state in your React applications.
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

export default UseContext;
