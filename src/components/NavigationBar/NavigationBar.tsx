import React from "react";
import {
  NavigationBar as NavigationBarUI,
  NavigationBarGroup,
  // NavigationBarHeader,
  NavigationBarItem,
} from "stelios";

import content from "../../assets/data/topics/topics.json";
import { TopicsProps } from "../../assets/data/topics/topics.types";

const typedContent: TopicsProps = content;

const NavigationBar = () => {
  let [topics, setTopics] = React.useState<any>([]);

  React.useEffect(() => {
    setTopics(() => {
      if (!typedContent) return;
      let topicsComponents = [];
      for (let key in typedContent) {
        let topic = typedContent[key];
        let subtopics = topic.subtopics;
        let subtopicsComponents = [];
        if (subtopics) {
          for (let subkey in subtopics) {
            subtopicsComponents.push(
              <NavigationBarItem key={subkey}>
                {subtopics[subkey].title}
              </NavigationBarItem>
            );
          }
        }
        topicsComponents.push(
          <NavigationBarGroup key={key} title={topic.title}>
            {subtopicsComponents}
          </NavigationBarGroup>
        );
      }

      return topicsComponents;
    });
  }, []);

  return (
    <NavigationBarUI
      className="navigation-bar"
      style={{ top: "4rem", height: "calc(100vh - 4rem)" }}
    >
      {topics}
    </NavigationBarUI>
  );
};

export default NavigationBar;
