import React, { useEffect, useState } from "react";
import topics from "../../assets/data/topics/topics.json";
import { TopicsProps } from "../../assets/data/topics/topics.types";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Text } from "stelios";

import Body from "../../components/Body/Body";
import SideBar from "../../components/SideBar/SideBar";
import styled from "styled-components";

const TOPICS: TopicsProps = topics;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const StyledSubsection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StyledSectionContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Topic = () => {
  const navigate = useNavigate();
  const { idTopic, idCategory } = useParams();
  const [topicData, setTopicData] = useState<TopicsProps[0] | null>(null);

  useEffect(() => {
    try {
      if (!idTopic || !idCategory)
        throw new Error("No topic or category selected");
      const content = TOPICS[idTopic];

      if (!content) throw new Error("No topic or category selected");
      setTopicData(content);
    } catch (e) {
      console.error(e);
      navigate("/404-not-found");
    }
  }, [idTopic, idCategory, navigate]);

  // if (!topicData || !topicData.content) return (
  //   <Navigate to="/404-not-found" />
  // )
  if (!topicData || !topicData.content) return (
    <Body>
      Error
    </Body>
  );
  const contentObj = topicData.content;
  const contentKeys = Object.keys(contentObj);

  const ContentElements = contentKeys.map((contentKey, index) => {
    if (!contentKey) return null;
    return (
      <StyledSection key={index}>
        <Text variant="h5">{contentObj[contentKey].title}</Text>
        <StyledSubsection>
        {contentObj[contentKey].content.map((contentItem: string, index: number) => (
          <Text key={index} variant="paragraph">{contentItem}</Text>
        ))}
        </StyledSubsection>
      </StyledSection>
    );
  });

  return (
    <Body>
      <SideBar />
      <div
        style={{
          padding: "2rem",
          textAlign: "justify",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        }}
      >
        <Text variant="h2">{topicData.title}</Text>
        <StyledSectionContainer>
          {ContentElements}
        </StyledSectionContainer>
      </div>
    </Body>
  );
};

export default Topic;
