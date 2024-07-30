import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Body from "../../components/ContentContainer/ContentContainer";
import SideBar from "../../components/SideBar/SideBar";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";
import { useData } from "../../components/DataProvider/DataProvider";
import { CodeDisplay, CodeEditor, List, ListItem, Text } from "stelios";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 2rem 5rem 2rem;
  text-align: justify;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledSubsection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  gap: 0.5rem;
`;

const TopicTest = () => {
  const data = useData();
  const { idTopic, idCategory } = useParams();

  const [topics, setTopics] = useState<any>(data.topics);
  const [categories, setCategories] = useState<any>(data.categories);

  useEffect(() => {
    setTopics(data.topics);
    setCategories(data.categories);
  }, [data]);

  if (!topics) return <Body>Loading</Body>;
  if (!categories) return <Body>Loading</Body>;

  const topicData = topics.find((topic: any) => {
    if (!topic.idTitle) return null;
    console.log(topic.idTitle, idTopic);
    return topic.idTitle === idTopic;
  });

  const ChildrenElement = `
  <StyledContainer>
    <StyledSection>
      <StyledSubsection>
        <Text variant="h4">Introduction</Text>
        <Text variant="paragraph">
          Class components are the original way to create components in React. They are ES6 classes that extend from React.Component and can have state and lifecycle methods.
        </Text>
      </StyledSubsection>
      <StyledSubsection>
        <Text variant="paragraph" size="large">Basic Structure</Text>
        <Text variant="paragraph">
          A class component is defined by a class that extends React.Component. The class must have a render method that returns the component's UI.
          </Text>
      </StyledSubsection>
      <StyledSubsection>
        <Text variant="paragraph">Example</Text>
        <CodeDisplay language="jsx" 
            text="import React, { Component } from 'react';
        class Greeting extends Component {
          render() {
            return <h1>Hello, {this.props.name}!</h1>;
          }
        }
        export default Greeting;"
          />
      </StyledSubsection>
      <StyledSubsection>
        <List title="Use Case" variant="unordered">
          <ListItem>Components that need to manage their own state.</ListItem>
          <ListItem>Components that need to use lifecycle methods.</ListItem>
        </List>
      </StyledSubsection>
    </StyledSection>
    <StyledSection>
      <StyledSubsection>
        <Text variant="h4">State Management</Text>
        <Text variant="paragraph" size="large">Initializing State</Text>
        <Text variant="paragraph">State in a class component is typically initialized in the constructor.</Text>
      </StyledSubsection>
      <StyledSubsection>
        <Text variant="paragraph">Example</Text>
        <CodeDisplay language="jsx" 
        text="import React, { Component } from 'react';
        class Counter extends Component {
          constructor(props) {
            super(props);
            this.state = { count: 0 };
          }
          render() {
            return <h1>{this.state.count}</h1>;
          }
        }"/>
      </StyledSubsection>
      <StyledSubsection>
        <Text variant="paragraph" size="large">Updating State</Text>
        <Text variant="paragraph">State is updated using the setState method, which merges the new state with the current state and triggers a re-render.</Text>
      </StyledSubsection>
      <StyledSubsection>
        <Text varaint="paragraph">Example</Text>
        <CodeDisplay language="jsx"
          text="Example:
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
            }
          "/>
      </StyledSubsection>
    </StyledSection>
    <StyledSection>
      <StyledSubsection>
        <Text variant="h4">Lifecycle Methods</Text>
        <Text variant="paragraph" size="large">Mounting</Text>
        <Text variant="paragraph">These methods are called when an instance of a component is being created and inserted into the DOM.</Text>
      </StyledSubsection>
      <StyledSubsection>
        <Text variant="paragraph" size="large">Updating</Text>
        <Text variant="paragraph">These methods are called when a component is being re-rendered.</Text>
      </StyledSubsection>
      <StyledSubsection>
        <Text variant="paragraph" size="large">Unmounting</Text>
        <Text variant="paragraph">This method is called when a component is being removed from the DOM.</Text>
      </StyledSubsection>
    </StyledSection>
  </StyledContainer>
  `;

  return (
    <Body>
      <SideBar />
      <StyledMain>
        <Text variant="h3">Class Components</Text>
        <Markdown
          children={ChildrenElement}
          options={{
            overrides: {
              Text: {
                component: ({ children, ...props }) => (
                  <Text {...props}>{children}</Text>
                ),
              },
              StyledSubsection: {
                component: ({ children, ...props }) => (
                  <StyledSubsection {...props}>{children}</StyledSubsection>
                ),
              },
              StyledSection: {
                component: ({ children, ...props }) => (
                  <StyledSection {...props}>{children}</StyledSection>
                ),
              },
              StyledContainer: {
                component: ({ children, ...props }) => (
                  <StyledContainer {...props}>{children}</StyledContainer>
                ),
              },
              CodeEditor: {
                component: ({ children, ...props }) => (
                  <CodeEditor {...props}>{children}</CodeEditor>
                ),
              },
              CodeDisplay: {
                component: ({ children, ...props }) => (
                  <CodeDisplay {...props}>{children}</CodeDisplay>
                ),
              },
              List: {
                component: ({ children, ...props }) => (
                  <List {...props}>{children}</List>
                ),
              },
              ListItem: {
                component: ({ children, ...props }) => (
                  <ListItem {...props}>{children}</ListItem>
                ),
              },
            },
          }}
        />
      </StyledMain>
    </Body>
  );
};

export default TopicTest;
