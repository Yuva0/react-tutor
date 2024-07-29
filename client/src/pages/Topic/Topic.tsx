import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Body from "../../components/Body/Body";
import SideBar from "../../components/SideBar/SideBar";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";
import { useData } from "../../components/DataProvider/DataProvider";
import { CodeDisplay, CodeEditor, List, ListItem, Text } from "stelios";

const StyledGradient = styled.div`
  position: fixed;
  width: 100%;
  height:30rem;
`;
const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem 2rem 5rem 2rem;
  text-align: justify;
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

const Topic = () => {
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
    if(!topic.idTitle) return null;
    console.log(topic.idTitle, idTopic);
    return topic.idTitle === idTopic;
  });

  return (
    <Body>
      <SideBar />
      <StyledMain>
        <Text variant="h3">{topicData.title}</Text>
        <Markdown
          children={topicData.content}
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

export default Topic;
