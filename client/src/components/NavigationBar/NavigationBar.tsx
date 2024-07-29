import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../DataProvider/DataProvider";
import {
  NavigationBarGroup,
  NavigationBarGroupItem,
  NavigationBar as NavigationBarUI,
} from "stelios";
import Body from "../Body/Body";

const NavigationBar = () => {
  const data = useData();
  const { idTopic, idCategory } = useParams();
  const navigate = useNavigate();

  const [topics, setTopics] = useState<any>(data.topics);
  const [categories, setCategories] = useState<any>(data.categories);

  useEffect(() => {
    setTopics(data.topics);
    setCategories(data.categories);
  }, [data]);

  const _onTopicClick = useCallback(
    (e: React.MouseEvent, topic: string, category: string) => {
      const path = `/${category}/${topic}`;

      navigate(path);
    },
    [navigate]
  );

  if (!categories) return <Body>Loading</Body>;
  if (!topics) return <Body>Loading</Body>;

  const ChildrenElement = categories.map((category: any, index: number) => {
    return (
      <NavigationBarGroup
        key={index}
        title={category.category}
        expanded={idCategory === category.idCategory}
      >
        {category.topics.map((topic: string, index: number) => {
          const _topic = topics.find((t: any) => t.idTitle === topic);
          if (!_topic) return null;
          return (
            <NavigationBarGroupItem
              key={index}
              value={topic}
              selected={idTopic === topic}
              onClick={(e) => _onTopicClick(e, topic, category.idCategory)}
            >
              {_topic.title}
            </NavigationBarGroupItem>
          );
        })}
      </NavigationBarGroup>
    );
  });
  return (
    <NavigationBarUI
      className="navigation-bar"
      style={{
        top: "3.5rem",
        height: "calc(100vh - 3.5rem)",
        paddingTop: "0.5rem",
      }}
    >
      {ChildrenElement}
    </NavigationBarUI>
  );
};

export default NavigationBar;
