import React, { useCallback } from "react";
import {
  NavigationBar as NavigationBarStelios,
  NavigationBarGroup,
  NavigationBarGroupItem,
} from "stelios";
import { useParams, useNavigate } from "react-router-dom";

import content from "../../assets/data/categories/categories.json";
import { CategoriesProps } from "../../assets/data/categories/categories.types";

const CATEGORIES: CategoriesProps = content;

const NavigationBar = () => {
  let [categories, setCategories] = React.useState<any>([]);
  let { idTopic, idCategory } = useParams();

  const navigate = useNavigate();

  const _onTopicClick = useCallback(
    (e: React.MouseEvent, topic: string, category: string) => {
      const path = `/${category}/${topic}`;

      navigate(path);
    },
    [navigate]
  );

  React.useEffect(() => {
    setCategories(() => {
      if (!CATEGORIES) return;
      let categoriesComponents = [];

      for (let _category in CATEGORIES) {
        let _categoryData = CATEGORIES[_category];
        let _topics = _categoryData.topics;
        let topicsComponents = [];
        if (_topics) {
          for (let _topic in _topics) {
            topicsComponents.push(
              <NavigationBarGroupItem
                value={_topic}
                key={_topic}
                selected={_topic === idTopic}
                onClick={(e) => _onTopicClick(e, _topic, _category)}
              >
                {_topics[_topic].title}
              </NavigationBarGroupItem>
            );
          }
        }
        categoriesComponents.push(
          <NavigationBarGroup
            key={_category}
            title={_categoryData.title}
            expanded={idCategory === _category}
          >
            {topicsComponents}
          </NavigationBarGroup>
        );
      }

      return categoriesComponents;
    });
  }, [idTopic, idCategory, _onTopicClick]);

  return (
    <NavigationBarStelios
      className="navigation-bar"
      style={{
        top: "3.5rem",
        height: "calc(100vh - 3.5rem)",
        paddingTop: "0.5rem",
      }}
    >
      {categories}
    </NavigationBarStelios>
  );
};

export default NavigationBar;
