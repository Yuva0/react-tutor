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
  Alert,
  useTheme,
} from "stelios";
import {
  StyledMain,
  StyledSection,
  StyledSubsection,
  StyledTopicContent,
} from "../components/StyledInternalComponents/StyledInternalComponents";
import { useWindowSize } from "../helpers/helpers";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "why-use-jsx", title: "Why use JSX?" },
  { id: "jsx-syntax", title: "JSX Syntax" },
  { id: "components-and-jsx", title: "Components and JSX" },
  { id: "jsx-differences", title: "JSX Differences" },
  { id: "jsx-expressions", title: "Javascript Expressions" },
];

const WHAT_IS_JSX_1 = `JSX is not a separate language but a syntax extension that looks similar to HTML or XML. It allows you to write HTML-like elements directly within JavaScript code.`;
const WHAT_IS_JSX_2 = `JSX code is transformed into JavaScript objects by tools like Babel before being executed by the browser. Under the hood, each JSX element is converted into a React.createElement() call.`;
const WHY_USE_JSX_TITLE = `Why Use JSX?`;
const WHY_USE_JSX_3 = `Component Structure: JSX makes it straightforward to define the structure and layout of React components.`;
const BASIC_SYNTAX_1 = `Tags: JSX uses tags similar to HTML. Tags can be self-closing (e.g., <input />) or have opening and closing tags (e.g., <div></div>).`;
const BASIC_SYNTAX_2 = `Embedding Expressions: You can embed JavaScript expressions within JSX using curly braces {}. For example, {2 + 2} or {user.name}.`;
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
const JSX_DIFFERENCES_2 = `camelCase for Attributes: Attributes in JSX are in camelCase (onClick, tabIndex) rather than lowercase.`;
const JSX_DIFFERENCES_3 = `JSX is JavaScript: Since JSX is closer to JavaScript, it follows JavaScript's rules. For example, you can't use if statements directly in JSX, but you can use ternary operators or logical &&.`;
const JSX_EXPRESSION_EXAMPLE = `const name = "John";
const element = <h1>Hello, {name}!</h1>;
`;
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
const CONCLUSION_1 = `JSX makes writing React components more intuitive by allowing you to describe the UI structure in a way that closely resembles HTML, while still being able to leverage JavaScript's power. It bridges the gap between markup and logic, providing a seamless way to build dynamic and interactive user interfaces.`;

const JSX: React.FunctionComponent = () => {
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

  const color = useTheme().theme.colorPalette.primary.accentScale[10];
  const Highlighted = ({ children }: { children: React.ReactNode }) => {
    return <span style={{ color: color }}>{children}</span>;
  };

  /* --------------------------------------------------------------------------------------
  |                            Data to be displayed                                       |
  -------------------------------------------------------------------------------------- */
  const INTRODUCTION_FIRST = (
    <Text>
      JSX (JavaScript XML) is a syntax extension for JavaScript commonly used
      with React, a popular JavaScript library for building user interfaces. JSX
      allows you to{" "}
      <Highlighted>
        write HTML-like code within JavaScript, making it easier to create and
        manage UI components.
      </Highlighted>{" "}
      Here's a detailed explanation:
    </Text>
  );
  const WHY_USE_JSX_1 = (
    <Text>
      Readability: JSX makes it easier to{" "}
      <Highlighted>visualize the structure of the UI</Highlighted> components
      because it closely resembles HTML.
    </Text>
  );
  const WHY_USE_JSX_2 = (
    <Text>
      Integration: It allows you to integrate HTML with{" "}
      <Highlighted>
        JavaScript seamlessly, enabling dynamic content creation.
      </Highlighted>
    </Text>
  );
  const BASIC_SYNTAX_3 = (
    <Text>
      Attributes: JSX supports HTML attributes like class, id, and style.{" "}
      <Highlighted>
        You can also use custom attributes and event handlers.
      </Highlighted>
    </Text>
  );
  const JSX_DIFFERENCES_1 = (
    <Text>
      className instead of class: In JSX,{" "}
      <Highlighted>
        className is used instead of class because class is a reserved keyword
        in JavaScript.
      </Highlighted>
    </Text>
  );
  const JSX_EXPRESSION_1 = (
    <Text>
      You can include any JavaScript expression within JSX using curly braces {}
      .{" "}
      <Highlighted>
        This includes variables, functions, or any valid JavaScript expression.
      </Highlighted>
    </Text>
  );
  const JSX_ELEMENTS_TYPESAFE = (
    <Text>
      JSX is type-safe, meaning it can catch errors during compilation. For
      instance, if you pass a{" "}
      <Highlighted>
        number to a component that expects a string, you may get a warning.
      </Highlighted>
    </Text>
  );
  const JSX_COMPILATION_1 = (
    <Text>
      Before JSX can be used in the browser,{" "}
      <Highlighted>
        it must be compiled to regular JavaScript. This is typically done using
        a tool like Babel, which transforms JSX into React.createElement()
        calls.
      </Highlighted>
    </Text>
  );

  /* ------------------------------------------------------------------------------------ */

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
              <BreadcrumbsItem title="Guides" />
              <BreadcrumbsItem link="/guides/jsx" title="JSX" />
            </Breadcrumbs>

            <Text
              variant="paragraph"
              size="large"
              style={{ marginTop: "1rem" }}
            >
              Introduction
            </Text>
            <Text>{INTRODUCTION_FIRST}</Text>
            <Alert
              style={{ marginTop: "0.5rem" }}
              color="success"
              title={
                <Text noColor size="large">
                  <b>What is JSX?</b>
                </Text>
              }
              description={
                <>
                  <Text noColor>{WHAT_IS_JSX_1}</Text>
                  <Text noColor>{WHAT_IS_JSX_2}</Text>
                </>
              }
            />
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="why-use-jsx">
          <Text size="large">{WHY_USE_JSX_TITLE}</Text>
          <StyledSubsection>
            <List variant="unordered" title="Here are some features of JSX -">
              <ListItem>{WHY_USE_JSX_1}</ListItem>
              <ListItem>{WHY_USE_JSX_2}</ListItem>
              <ListItem>{WHY_USE_JSX_3}</ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="jsx-syntax">
          <Text size="large">JSX Syntax</Text>
          <StyledSubsection>
            <List variant="unordered" title="Here is the syntax of JSX -">
              <ListItem>
                <Text>{BASIC_SYNTAX_1}</Text>
              </ListItem>
              <ListItem>
                <Text>{BASIC_SYNTAX_2}</Text>
              </ListItem>
              <ListItem>
                <Text>{BASIC_SYNTAX_3}</Text>
              </ListItem>
            </List>
            <CodeDisplay
              text={BASIC_SYNTAX_EXAMPLE}
              language="jsx"
              style={{ marginTop: "1rem" }}
            />
            <Text style={{ marginTop: "1rem" }}>{BASIC_SYNTAX_LAST}</Text>
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="components-and-jsx">
          <StyledSubsection>
            <Text size="large">Components and JSX</Text>
            <Text>{COMPONENTS_JSX_1}</Text>
            <CodeDisplay text={COMPONENTS_JSX_1_EXAMPLE} language="jsx" />
            <Text style={{ marginTop: "1rem" }}>{COMPONENTS_JSX_2}</Text>
            <CodeDisplay text={COMPONENTS_JSX_2_EXAMPLE} language="jsx" />
            <Text style={{ marginTop: "1rem" }}>{COMPONENTS_JSX_3}</Text>
            <CodeDisplay text={COMPONENTS_JSX_3_EXAMPLE} language="jsx" />
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="jsx-differences">
          <StyledSubsection>
            <Text size="large">JSX Differences from HTML</Text>
            <List variant="unordered">
              <ListItem>{JSX_DIFFERENCES_1}</ListItem>
              <ListItem>{JSX_DIFFERENCES_2}</ListItem>
              <ListItem>{JSX_DIFFERENCES_3}</ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="jsx-expressions">
          <StyledSubsection>
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
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <List
            variant="unordered"
            title={<Text size="large">JSX Features</Text>}
          >
            <ListItem>
              <Text>JSX is Type-Safe</Text>
              <Text style={{ marginTop: "0.5rem" }}>
                {JSX_ELEMENTS_TYPESAFE}
              </Text>
            </ListItem>
            <ListItem style={{ marginTop: "1rem" }}>
              <Text>Fragments in JSX</Text>
              <Text style={{ marginTop: "0.5rem" }}>{FRAGMENTS_1}</Text>
              <Text>{FRAGMENTS_EXAMPLE}</Text>
            </ListItem>
            <ListItem style={{ marginTop: "1rem" }}>
              <Text>Conditional Rendering</Text>
              <Text style={{ marginTop: "0.5rem" }}>
                {CONDITIONAL_RENDERING_1}
              </Text>
              <CodeDisplay
                text={CONDITIONAL_RENDERING_EXAMPLE}
                language="jsx"
                style={{ marginTop: "1rem" }}
              />
            </ListItem>
            <ListItem style={{ marginTop: "1rem" }}>
              <Text>Styling in JSX</Text>
              <Text style={{ marginTop: "0.5rem" }}>{STYLING_JSX_1}</Text>
              <CodeDisplay
                text={STYLING_JSX_EXAMPLE}
                language="jsx"
                style={{ marginTop: "1rem" }}
              />
            </ListItem>
            <ListItem style={{ marginTop: "1rem" }}>
              <Text>Event Handling</Text>
              <Text style={{ marginTop: "0.5rem" }}>{EVENT_HANDLING_1}</Text>
              <CodeDisplay
                text={EVENT_HANDLING_EXAMPLE}
                language="jsx"
                style={{ marginTop: "1rem" }}
              />
            </ListItem>
          </List>
        </StyledSection>
        <StyledSection id="key-points">
          <StyledSubsection>
            <List
              variant="unordered"
              title={<Text size="large">Key Points</Text>}
            >
              <ListItem>{KEY_POINTS_1}</ListItem>
              <ListItem>{KEY_POINTS_2}</ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection>
            <Text size="large">JSX Compilation</Text>
            <Text>{JSX_COMPILATION_1}</Text>
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="conclusion">
          <StyledSubsection>
            <Text size="large">Conclusion</Text>
            <Text>{CONCLUSION_1}</Text>
          </StyledSubsection>
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

export default JSX;
