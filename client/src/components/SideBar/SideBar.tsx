import React, { useEffect, useState } from "react";
import topics from "../../assets/data/topics/topics.json";
import { TopicsProps } from "../../assets/data/topics/topics.types";
import { useParams } from "react-router-dom";
import { SideBar as SideBarStelios, SideBarItem } from "stelios";
import { makeFirstLetterCapital } from "../../helpers/helpers";

const TOPICS: TopicsProps = topics;

const SideBar = () => {
  const { idTopic, idCategory } = useParams();
  const [topicContent, setTopicContent] = useState<TopicsProps[0] | null>(null);

  useEffect(() => {
    try {
      if (!idTopic || !idCategory)
        throw new Error("No topic or category selected");
      const content = TOPICS[idTopic];

      if (!content) throw new Error("No topic or category selected");
      setTopicContent(content);
    } catch (e) {
      console.error(e);
    }
  }, [idTopic, idCategory]);

  if (!topicContent || !topicContent.content) return null;
  const contentIndex = Object.keys(topicContent.content);

  return (
    <SideBarStelios top="6rem">
      {contentIndex.map((item, index) => {
        return (
          <SideBarItem key={index}>{makeFirstLetterCapital(item)}</SideBarItem>
        );
      })}
    </SideBarStelios>
  );
};

export default SideBar;
