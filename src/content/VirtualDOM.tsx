import * as React from "react";
import {
  Breadcrumbs,
  BreadcrumbsItem,
  SideBar,
  SideBarItem,
  Text,
  List,
  ListItem,
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
  { id: "tradition-dom", title: "Traditional DOM" },
  { id: "what-is-the-virtual-dom", title: "What is the Virtual DOM?" },
  { id: "benefits-of-the-virtual-dom", title: "Benefits of the Virtual DOM" },
  { id: "conclusion", title: "Conclusion" },
];

const VirtualDOM: React.FunctionComponent = () => {
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
  const INTRODUCTION_CONTENT = (
    <Text>
      The Virtual DOM (VDOM) is a core concept in React that plays a{" "}
      <Highlighted>
        significant role in how React efficiently updates the user interface
        (UI).
      </Highlighted>{" "}
      Understanding the Virtual DOM requires a basic grasp of how traditional
      DOM (Document Object Model) manipulation works in web development.
    </Text>
  );
  /* ----------------------------------------------------------------------------------- */

  return (
    <StyledMain>
      <StyledTopicContent
        className={isMounted ? "fade-in" : ""}
        style={{ width: mobile ? "100%" : "calc(100% - 12rem" }}
      >
        <StyledSection id="introduction">
          <StyledSubsection>
            <Breadcrumbs size="small" delimiter="/">
              <BreadcrumbsItem title="Guides" />
              <BreadcrumbsItem link="/guides/virtual-dom" title="Virtual DOM" />
            </Breadcrumbs>
            <Text size="large" style={{ marginTop: "1rem" }}>
              Introduction
            </Text>
            {INTRODUCTION_CONTENT}
            <Text>
              When a component's state changes, the Virtual DOM is updated to
              reflect the new state. The Virtual DOM is then compared to the
              actual DOM, and only the differences are applied to the actual
              DOM. This process is known as reconciliation.
            </Text>
            <Text>
              The Virtual DOM is used by libraries like React to efficiently
              update the DOM without the need for manual DOM manipulation.
            </Text>
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="traditional-dom">
          <Text size="large">Traditional DOM</Text>
          <StyledSubsection>
            <Text>
              The DOM is a{" "}
              <Highlighted>
                programming interface for web documents,
              </Highlighted>{" "}
              representing the page's structure as a tree of objects. Each
              element on the page is a node in this tree. Manipulating the DOM,
              such as changing an element's content, style, or structure,
              involves interacting with this tree.
            </Text>
            <Text>
              However, directly manipulating the DOM is slow and inefficient,
              particularly when dealing with complex UIs or frequent updates.
              Each change to the DOM triggers a series of steps in the browser,{" "}
              <Highlighted>
                including recalculating styles, updating the layout, and
                repainting the page, which can lead to performance bottlenecks.{" "}
              </Highlighted>
            </Text>
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="what-is-the-virtual-dom">
          <Text size="large">What is the Virtual DOM?</Text>
          <StyledSubsection>
            <Text>
              The Virtual DOM is an in-memory representation of the real DOM
              elements generated by React components. It is a lightweight copy
              of the real DOM, keeping track of the elements and their
              attributes as a JavaScript object.{" "}
              <Highlighted>
                The key difference is that the Virtual DOM does not directly
                interact with the browser.
              </Highlighted>
            </Text>
            <List title="Initial Rendering" variant="unordered">
              <ListItem>
                <Text>
                  When a React application renders for the first time, React
                  creates a Virtual DOM tree that represents the current state
                  of the UI.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  React components are converted into Virtual DOM nodes, and
                  this tree is compared with the real DOM to update the
                  browser's UI.
                </Text>
              </ListItem>
            </List>
            <List title="Updating the UI:">
              <ListItem>
                <Text>
                  When the state or props of a component change,{" "}
                  <Highlighted>
                    React creates a new Virtual DOM tree representing the
                    updated UI.
                  </Highlighted>
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  React then compares this new Virtual DOM tree with the
                  previous one.{" "}
                  <Highlighted>
                    This process is known as "reconciliation."
                  </Highlighted>
                </Text>
              </ListItem>
            </List>
            <List title="Reconciliation">
              <ListItem>
                <Text>
                  React uses a highly efficient algorithm to compare the new{" "}
                  <Highlighted>Virtual DOM with the previous one.</Highlighted>{" "}
                  This algorithm is known as the "diffing algorithm."
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Instead of re-rendering the entire UI, React identifies the
                  specific parts of the Virtual DOM that have changed.
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  Once React has identified the changes, it updates only those
                  specific parts of the real DOM, making the update process
                  <Highlighted>faster and more efficient.</Highlighted>
                </Text>
              </ListItem>
            </List>
            <List title="Batching and Optimization:">
              <ListItem>
                <Text>
                  React batches updates to reduce the number of changes made to
                  the DOM. Multiple state updates occurring in a short period
                  are batched together, leading to{" "}
                  <Highlighted>fewer DOM manipulations.</Highlighted>
                </Text>
              </ListItem>
              <ListItem>
                <Text>
                  React's reconciliation process also uses a heuristic called
                  “keying” to optimize the update process further. When
                  rendering lists of elements, adding a unique key prop helps
                  React identify which items have changed, been added, or
                  removed, allowing for more efficient updates.
                </Text>
              </ListItem>
            </List>
          </StyledSubsection>
        </StyledSection>
        <StyledSection id="benefits-of-the-virtual-dom">
          <Text size="large">Benefits of the Virtual DOM</Text>
          <List title="Here are the benefits">
            <ListItem>
              <Text>
                Performance: By minimizing direct interactions with the real
                DOM,{" "}
                <Highlighted>
                  React can perform updates much more quickly, leading to
                  smoother user experiences,
                </Highlighted>{" "}
                especially in dynamic applications with frequent updates.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                Abstraction: The Virtual DOM abstracts the complexity of manual
                DOM manipulation, allowing developers to focus on building
                components and managing state{" "}
                <Highlighted>
                  without worrying about the underlying DOM operations.
                </Highlighted>
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                Cross-Browser Compatibility: Since React handles the Virtual DOM
                internally, it also manages differences in how various browsers
                interact with the DOM,{" "}
                <Highlighted>
                  making your code more consistent across different
                  environments.
                </Highlighted>
              </Text>
            </ListItem>
          </List>
        </StyledSection>
        <StyledSection id="conclusion">
          <Text size="large">Conclusion</Text>
          <StyledSubsection>
            <Text>
              The Virtual DOM is a powerful concept that allows React to update
              the UI efficiently without the need for direct, frequent
              interactions with the real DOM. By comparing Virtual DOM trees and
              updating only the parts that change,{" "}
              <Highlighted>
                React ensures that applications remain responsive and performant
              </Highlighted>{" "}
              , even as they grow in complexity.
            </Text>
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

export default VirtualDOM;
