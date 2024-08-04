import * as React from "react";
import { Text, CodeDisplay, List, ListItem } from "stelios";
import {
  StyledMain,
  StyledSection,
  StyledSubsection,
} from "../components/StyledInternalComponents/StyledInternalComponents";

const FunctionComponent = () => {
  return (
    <StyledMain>
      <StyledSection>
        <StyledSubsection>
          <Text variant="h4">Introduction</Text>
          <Text variant="paragraph">
            Class components are the original way to create components in React.
            They are ES6 classes that extend from React.Component and can have
            state and lifecycle methods.
          </Text>
        </StyledSubsection>
        <StyledSubsection>
          <Text variant="paragraph" size="large">
            Basic Structure
          </Text>
          <Text variant="paragraph">
            A class component is defined by a class that extends
            React.Component. The class must have a render method that returns
            the component's UI.
          </Text>
        </StyledSubsection>
        <StyledSubsection>
          <Text variant="paragraph">Example</Text>
          <CodeDisplay
            language="JSX"
            text={`import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
  
export default Greeting;`}
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
          <Text variant="paragraph" size="large">
            Initializing State
          </Text>
          <Text variant="paragraph">
            State in a class component is typically initialized in the
            constructor.
          </Text>
        </StyledSubsection>
        <StyledSubsection>
          <Text variant="paragraph">Example</Text>
          <CodeDisplay
            language="JSX"
            text="import React, { Component } from 'react';
      class Counter extends Component {
        constructor(props) {
          super(props);
          this.state = { count: 0 };
        }
        render() {
          return <h1>{this.state.count}</h1>;
        }
      }"
          />
        </StyledSubsection>
        <StyledSubsection>
          <Text variant="paragraph" size="large">
            Updating State
          </Text>
          <Text variant="paragraph">
            State is updated using the setState method, which merges the new
            state with the current state and triggers a re-render.
          </Text>
        </StyledSubsection>
        <StyledSubsection>
          <Text variant="paragraph">Example</Text>
          <CodeDisplay
            language="JSX"
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
        "
          />
        </StyledSubsection>
      </StyledSection>
      <StyledSection>
        <StyledSubsection>
          <Text variant="h4">Lifecycle Methods</Text>
          <Text variant="paragraph" size="large">
            Mounting
          </Text>
          <Text variant="paragraph">
            These methods are called when an instance of a component is being
            created and inserted into the DOM.
          </Text>
        </StyledSubsection>
        <StyledSubsection>
          <Text variant="paragraph" size="large">
            Updating
          </Text>
          <Text variant="paragraph">
            These methods are called when a component is being re-rendered.
          </Text>
        </StyledSubsection>
        <StyledSubsection>
          <Text variant="paragraph" size="large">
            Unmounting
          </Text>
          <Text variant="paragraph">
            This method is called when a component is being removed from the
            DOM.
          </Text>
        </StyledSubsection>
      </StyledSection>
    </StyledMain>
  );
};

export default FunctionComponent;
