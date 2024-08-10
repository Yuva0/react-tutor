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
  { id: "practical-example", title: "Practical Example" },
  { id: "summary", title: "Summary" },
];

const INTRODUCTION_CONTENT = `\`useCallback\` is a hook provided by React that allows you to memoize a function. Memoization is a process where you cache the result of an expensive computation so that it doesn't have to be recalculated every time it's needed. useCallback is used to optimize the performance of React components by preventing unnecessary re-creation of functions on every render.`;
const BASIC_USAGE_1 = `Here's the basic syntax of useCallback:`;
const BASIC_USAGE_EXAMPLE = `const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
`;
const BASIC_USAGE_2 = `In this example, useCallback will return a memoized version of the doSomething function that only changes if a or b change. The dependencies are specified in the dependency array [a, b].`;

const FUNCTION_DEFINITION = `When you define a function inside a React component, that function gets re-created on every render. This can be problematic if you pass that function as a prop to a child component, causing the child component to re-render unnecessarily.`;
const FUNCTION_DEFINITION_EXAMPLE = `const MyComponent = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return <button onClick={handleClick}>Click Me</button>;
};
`;
const FUNCTION_DEFINITION_EXPLANATION = `In this example, the handleClick function is re-created on every render of MyComponent. If MyComponent is a parent component and handleClick is passed as a prop to a child component, the child component will re-render every time MyComponent re-renders, even if handleClick hasn't changed.`;

const MEMOIZATION_USE_CALLBACK = `const MyComponent = () => {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return <button onClick={handleClick}>Click Me</button>;
};
`;
const MEMOIZATION_USE_CALLBACK_EXPLANATION = `By using useCallback to memoize the handleClick function, the function is only created once and will not change on subsequent renders. This prevents unnecessary re-renders of child components that depend on handleClick.`;

const DEPENDENCIES = `The dependency array is crucial for useCallback. It tells React when to re-create the memoized function. If you don't include the correct dependencies, you might end up with stale values.`;
const DEPENDENCIES_EXAMPLE = `const MyComponent = ({ a, b }) => {
  const handleClick = useCallback(() => {
    console.log(a, b);
  }, [a, b]);

  return <button onClick={handleClick}>Click Me</button>;
};
`;
const DEPENDENCIES_EXPLANATION = `In this example, the handleClick function depends on the values of a and b. By including [a, b] in the dependency array, React will re-create the memoized function whenever a or b changes.`;

const PERFORMANCE_CONSIDERATION = `While useCallback can help with performance by preventing unnecessary re-creations of functions, it's essential to use it judiciously. Overusing useCallback can lead to overly complex dependency arrays and make the code harder to read and maintain. Additionally, memoization itself has a cost, so it's only beneficial if the memoized function is expensive to re-create or if it causes unnecessary re-renders.`;

const PRACTICAL_EXAMPLE_1 = `Consider a scenario where you have a parent component and a child component. The child component receives a callback as a prop.`;
const PRACTICAL_EG_WO_CALLBACK = `const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const ChildComponent = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});
`;
const PRACTICAL_EG_WITH_CALLBACK = `const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const ChildComponent = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});
`;

const UseCallback = () => {
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
          <StyledSubsection id="introduction">
            <Breadcrumbs size="small" color="primary" delimiter="/">
              <BreadcrumbsItem title="Hooks" />
              <BreadcrumbsItem link="/hooks/use-callback" title="useCallback" />
            </Breadcrumbs>
            <Text size="large" style={{ marginTop: "1rem" }}>
              Introduction
            </Text>
            <Text>{INTRODUCTION_CONTENT}</Text>
            <Text size="large">Basic Usage</Text>
            <Text>{BASIC_USAGE_1}</Text>
            <CodeDisplay text={BASIC_USAGE_EXAMPLE} language="javascript" />
            <Text style={{ marginTop: "0.5rem" }}>{BASIC_USAGE_2}</Text>
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection id="detailed-breakdown">
            <List title={<Text size="large">Detailed Breakdown</Text>}>
              <ListItem>
                <Text>Function Definition</Text>
                <Text style={{ marginTop: "0.25rem" }}>
                  {FUNCTION_DEFINITION}
                </Text>
                <Text style={{ marginTop: "0.5rem" }}>
                  Example without `useCallback`:
                </Text>
                <CodeDisplay
                  text={FUNCTION_DEFINITION_EXAMPLE}
                  language="javascript"
                  style={{ marginTop: "0.5rem" }}
                />
                <Text style={{ marginTop: "1rem" }}>
                  {FUNCTION_DEFINITION_EXPLANATION}
                </Text>
              </ListItem>
              <ListItem style={{ marginTop: "1rem" }}>
                <Text>Memoization with `useCallback`</Text>
                <Text style={{ marginTop: "0.5rem" }}>
                  To prevent this, you can use useCallback to memoize the
                  function:
                </Text>
                <CodeDisplay
                  text={MEMOIZATION_USE_CALLBACK}
                  language="javascript"
                  style={{ marginTop: "0.5rem" }}
                />
                <Text style={{ marginTop: "1rem" }}>
                  {MEMOIZATION_USE_CALLBACK_EXPLANATION}
                </Text>
              </ListItem>
              <ListItem style={{ marginTop: "1rem" }}>
                <Text>Dependencies</Text>
                <Text style={{ marginTop: "0.5rem" }}>{DEPENDENCIES}</Text>
                <CodeDisplay
                  style={{ marginTop: "0.5rem" }}
                  text={DEPENDENCIES_EXAMPLE}
                  language="javascript"
                />
                <Text style={{ marginTop: "1rem" }}>
                  {DEPENDENCIES_EXPLANATION}
                </Text>
              </ListItem>
              <ListItem style={{ marginTop: "1rem" }}>
                <Text>Performance Considerations</Text>
                <Text style={{ marginTop: "0.5rem" }}>
                  {PERFORMANCE_CONSIDERATION}
                </Text>
              </ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection id="practical-example">
            <Text size="large">Practical Example</Text>
            <Text>{PRACTICAL_EXAMPLE_1}</Text>
            <Text>Without useCallback:</Text>
            <CodeDisplay
              text={PRACTICAL_EG_WO_CALLBACK}
              language="javascript"
            />
            <Text style={{ marginTop: "0.5rem" }}>
              In this example, every time ParentComponent re-renders,
              handleClick is re-created, causing ChildComponent to re-render
              even though it doesn't need to.
            </Text>
            <Text style={{ marginTop: "0.5rem" }}>With useCallback:</Text>
            <CodeDisplay
              text={PRACTICAL_EG_WITH_CALLBACK}
              language="javascript"
            />
            <Text style={{ marginTop: "0.5rem" }}>
              By using useCallback to memoize handleClick, the function is only
              created once and will not change on subsequent renders. This
              prevents unnecessary re-renders of ChildComponent.
            </Text>
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection id="summary">
            <Text size="large">Summary</Text>
            <List variant="unordered" title={<Text>Key Takeaways:</Text>}>
              <ListItem>
                useCallback memoizes functions to prevent unnecessary
                re-creations.
              </ListItem>
              <ListItem>
                It accepts two arguments: the function to memoize and a
                dependency array.
              </ListItem>
              <ListItem>
                The function is only re-created if one of the dependencies
                changes.
              </ListItem>
              <ListItem>
                Using useCallback can optimize performance but should be used
                judiciously to avoid overly complex dependency arrays and
                unnecessary memoization overhead.
              </ListItem>
            </List>
            <Text style={{ marginTop: "0.5rem" }}>
              In summary, useCallback is a powerful tool for optimizing
              performance in React applications by controlling when functions
              are re-created and preventing unnecessary re-renders.
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

export default UseCallback;
