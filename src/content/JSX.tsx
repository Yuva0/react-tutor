import * as React from "react";
import {
  Breadcrumbs,
  BreadcrumbsItem,
  SideBar,
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

const sections = [
  { id: "introduction", title: "Introduction" },
];

const INTRODUCTION_FIRST = `JSX (JavaScript XML) is a syntax extension for JavaScript commonly used with React, a popular JavaScript library for building user interfaces. JSX allows you to write HTML-like code within JavaScript, making it easier to create and manage UI components. Here's a detailed explanation:`;
const WHAT_IS_JSX_1 = `JSX is not a separate language but a syntax extension that looks similar to HTML or XML. It allows you to write HTML-like elements directly within JavaScript code.`;
const WHAT_IS_JSX_2 = `JSX code is transformed into JavaScript objects by tools like Babel before being executed by the browser. Under the hood, each JSX element is converted into a React.createElement() call.`;
const WHY_USE_JSX_1 = `Readability: JSX makes it easier to visualize the structure of the UI components because it closely resembles HTML.`;
const WHY_USE_JSX_2 = `Integration: It allows you to integrate HTML with JavaScript seamlessly, enabling dynamic content creation.`;
const WHY_USE_JSX_3 = `Component Structure: JSX makes it straightforward to define the structure and layout of React components.`;
const BASIC_SYNTAX_1 = `Tags: JSX uses tags similar to HTML. Tags can be self-closing (e.g., <input />) or have opening and closing tags (e.g., <div></div>).`;
const BASIC_SYNTAX_2 = `Embedding Expressions: You can embed JavaScript expressions within JSX using curly braces {}. For example, {2 + 2} or {user.name}.`;
const BASIC_SYNTAX_3 = `Attributes: JSX supports HTML attributes like class, id, and style. You can also use custom attributes and event handlers.`;
const BASIC_SYNTAX_EXAMPLE = `const element = <h1>Hello, {user.name}!</h1>;`;
const BASIC_SYNTAX_LAST = `This JSX code will render an h1 element with the text "Hello, [user's name]!"`;
const COMPONENTS_JSX_1 = `Function Components: You can create components as functions that return JSX.`;
const COMPONENTS_JSX_1_EXAMPLE = `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`;
const COMPONENTS_JSX_2 = `Class Components: Class-based components also return JSX from their render method.`;
const COMPONENTS_JSX_2_EXAMPLE = `class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
`;
const COMPONENTS_JSX_3 = `Composing Components: You can compose components together by including one component inside another.`;
const COMPONENTS_JSX_3_EXAMPLE = `function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}
`;
const JSX_DIFFERENCES_1 = `className instead of class: In JSX, className is used instead of class because class is a reserved keyword in JavaScript.`;
const JSX_DIFFERENCES_2 = `camelCase for Attributes: Attributes in JSX are in camelCase (onClick, tabIndex) rather than lowercase.`;
const JSX_DIFFERENCES_3 = `JSX is JavaScript: Since JSX is closer to JavaScript, it follows JavaScript's rules. For example, you can't use if statements directly in JSX, but you can use ternary operators or logical &&.`;
const JSX_EXPRESSION_1 = `You can include any JavaScript expression within JSX using curly braces {}. This includes variables, functions, or any valid JavaScript expression.`;
const JSX_EXPRESSION_EXAMPLE = `const name = "John";
const element = <h1>Hello, {name}!</h1>;
`;
const JSX_ELEMENTS_REACT_1 = `JSX Elements: Simple JSX elements represent HTML tags and are transformed into React elements.`;
const JSX_ELEMENTS_REACT_2 = `React Components: If the tag name starts with an uppercase letter, JSX treats it as a React component.`;
const JSX_ELEMENTS_TYPESAFE = `JSX is type-safe, meaning it can catch errors during compilation. For instance, if you pass a number to a component that expects a string, you may get a warning.`;
const FRAGMENTS_1 = `React Fragments: Sometimes you need to return multiple elements from a component, but they need to be wrapped in a single parent. React fragments (<React.Fragment> or <> </>) allow you to do this without adding an extra DOM node.`;
const FRAGMENTS_EXAMPLE = `function List() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
    </>
  );
}
`;
const CONDITIONAL_RENDERING_1 = `JSX allows conditional rendering using JavaScript expressions like ternary operators or logical operators.`;
const CONDITIONAL_RENDERING_EXAMPLE = `const isLoggedIn = true;
const element = isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>;
`;
const STYLING_JSX_1 = `Inline styles in JSX are specified as an object, with camelCase properties.`;
const STYLING_JSX_EXAMPLE = `const style = { backgroundColor: 'blue', color: 'white' };
const element = <h1 style={style}>Hello, world!</h1>;
`;
const EVENT_HANDLING_1 = `Event handlers in JSX are similar to those in HTML but are written in camelCase, and the value is a JavaScript function.`;
const EVENT_HANDLING_EXAMPLE = `function handleClick() {
  alert('Button clicked!');
}

const element = <button onClick={handleClick}>Click Me</button>;
`;
const KEY_POINTS_1 = `JSX Must Have a Single Parent Element: JSX expressions must return a single element. If you have multiple elements, wrap them in a parent element or a fragment.`;
const KEY_POINTS_2 = `JSX is not required: While JSX is commonly used in React, it's not required. You can use regular JavaScript to create elements using React.createElement(), but JSX is more concise and readable.`;
const JSX_COMPILATION_1 = `Before JSX can be used in the browser, it must be compiled to regular JavaScript. This is typically done using a tool like Babel, which transforms JSX into React.createElement() calls.`;
const CONCLUSION_1 = `JSX makes writing React components more intuitive by allowing you to describe the UI structure in a way that closely resembles HTML, while still being able to leverage JavaScript's power. It bridges the gap between markup and logic, providing a seamless way to build dynamic and interactive user interfaces.`;

const JSX: React.FunctionComponent = () => {
  const [sidebarSelected, setSidebarSelected] = React.useState("introduction");
  const [isMounted, setIsMounted] = React.useState(false);

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
              <BreadcrumbsItem title="Components" />
              <BreadcrumbsItem link="/guides/jsx" title="JSX" />
            </Breadcrumbs>
          </StyledSubsection>

          <StyledSubsection id="introduction">
            <Text variant="paragraph" size="large">
              Introduction
            </Text>
            <Text>{INTRODUCTION_FIRST}</Text>
            <List
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <ListItem>
                <Text size="large">What is JSX?</Text>
                <List variant="unordered">
                  <ListItem>
                    <Text style={{ marginTop: "0.5rem" }}>{WHAT_IS_JSX_1}</Text>
                  </ListItem>
                  <ListItem>
                    <Text style={{ marginTop: "0.5rem" }}>{WHAT_IS_JSX_2}</Text>
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <Text size="large">Why Use JSX?</Text>
                <List variant="unordered">
                  <ListItem>
                    <Text style={{ marginTop: "0.5rem" }}>{WHY_USE_JSX_1}</Text>
                  </ListItem>
                  <ListItem>
                    <Text style={{ marginTop: "0.5rem" }}>{WHY_USE_JSX_2}</Text>
                  </ListItem>
                  <ListItem>
                    <Text style={{ marginTop: "0.5rem" }}>{WHY_USE_JSX_3}</Text>
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <Text size="large">Basic Syntax</Text>
                <List variant="unordered">
                  <ListItem>
                    <Text style={{ marginTop: "0.5rem" }}>
                      {BASIC_SYNTAX_1}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text style={{ marginTop: "0.5rem" }}>
                      {BASIC_SYNTAX_2}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text style={{ marginTop: "0.5rem" }}>
                      {BASIC_SYNTAX_3}
                    </Text>
                  </ListItem>
                </List>
                <CodeDisplay
                  text={BASIC_SYNTAX_EXAMPLE}
                  language="jsx"
                  style={{ marginTop: "1rem" }}
                />
                <Text style={{ marginTop: "1rem" }}>{BASIC_SYNTAX_LAST}</Text>
              </ListItem>
              <ListItem>
                <Text size="large">Components and JSX</Text>
                <Text style={{ marginTop: "0.5rem" }}>{COMPONENTS_JSX_1}</Text>
                <CodeDisplay
                  text={COMPONENTS_JSX_1_EXAMPLE}
                  language="jsx"
                  style={{ marginTop: "0.5rem" }}
                />
                <Text style={{ marginTop: "1rem" }}>{COMPONENTS_JSX_2}</Text>
                <CodeDisplay
                  text={COMPONENTS_JSX_2_EXAMPLE}
                  language="jsx"
                  style={{ marginTop: "0.5rem" }}
                />
                <Text style={{ marginTop: "1rem" }}>{COMPONENTS_JSX_3}</Text>
                <CodeDisplay
                  text={COMPONENTS_JSX_3_EXAMPLE}
                  language="jsx"
                  style={{ marginTop: "0.5rem" }}
                />
              </ListItem>
              <ListItem>
                <Text size="large">JSX Differences from HTML</Text>
                <List variant="unordered">
                  <ListItem>{JSX_DIFFERENCES_1}</ListItem>
                  <ListItem>{JSX_DIFFERENCES_2}</ListItem>
                  <ListItem>{JSX_DIFFERENCES_3}</ListItem>
                </List>
              </ListItem>
              <ListItem>
                <Text size="large">Javascript Expressions in JSX</Text>
                <List variant="unordered">
                  <ListItem>
                    <Text>{JSX_EXPRESSION_1}</Text>
                    <CodeDisplay
                      text={JSX_EXPRESSION_EXAMPLE}
                      language="jsx"
                      style={{ marginTop: "1rem" }}
                    />
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <Text size="large">JSX is Type-Safe</Text>
                <Text>{JSX_ELEMENTS_TYPESAFE}</Text>
              </ListItem>
              <ListItem>
                <Text size="large">Fragments in JSX</Text>
                <Text>{FRAGMENTS_1}</Text>
                <Text>{FRAGMENTS_EXAMPLE}</Text>
              </ListItem>
              <ListItem>
                <Text size="large">Conditional Rendering</Text>
                <Text>{CONDITIONAL_RENDERING_1}</Text>
                <CodeDisplay
                  text={CONDITIONAL_RENDERING_EXAMPLE}
                  language="jsx"
                  style={{ marginTop: "1rem" }}
                />
              </ListItem>
              <ListItem>
                <Text size="large">Styling in JSX</Text>
                <Text>{STYLING_JSX_1}</Text>
                <CodeDisplay
                  text={STYLING_JSX_EXAMPLE}
                  language="jsx"
                  style={{ marginTop: "1rem" }}
                />
              </ListItem>
              <ListItem>
                <Text size="large">Event Handling</Text>
                <Text>{EVENT_HANDLING_1}</Text>
                <CodeDisplay
                  text={EVENT_HANDLING_EXAMPLE}
                  language="jsx"
                  style={{ marginTop: "1rem" }}
                />
              </ListItem>
              <ListItem>
                <Text size="large">Key Points</Text>
                <List variant="unordered">
                  <ListItem>{KEY_POINTS_1}</ListItem>
                  <ListItem>{KEY_POINTS_2}</ListItem>
                </List>
              </ListItem>
              <ListItem>
                <Text size="large">JSX Compilation</Text>
                <Text>{JSX_COMPILATION_1}</Text>
              </ListItem>
            </List>
          </StyledSubsection>
          <StyledSubsection>
            <Text size="large">Conclusion</Text>
            <Text>{CONCLUSION_1}</Text>
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

export default JSX;
