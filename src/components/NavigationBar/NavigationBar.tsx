import React from "react";
import {
  NavigationBar as NavigationBarUI,
  NavigationBarGroup,
  NavigationBarGroupItem,
} from "stelios";
import { useParams } from "react-router-dom";

import content from "../../assets/data/categories/categories.json";
import { CategoriesProps } from "../../assets/data/categories/categories.types";

const CATEGORIES: CategoriesProps = content;

const NavigationBar = () => {
  let [categories, setCategories] = React.useState<any>([]);
  let params = useParams();
  const [topic, setTopic] = React.useState(params.idTopic);
  const [category, setCategory] = React.useState(params.idCategory);

  console.log(params);

  React.useEffect(() => {
    setTopic(params.idTopic);
    setCategory(params.idCategory);
  }, [params.idTopic, params.idCategory]);

  React.useEffect(() => {
    setCategories(() => {
      if (!CATEGORIES) return;
      let categoriesComponents = [];

      for (let key in CATEGORIES) {
        let category = CATEGORIES[key];
        let _topics = category.topics;
        let topicsComponents = [];
        if (_topics) {
          for (let subkey in _topics) {
            console.log(subkey, topic)
            topicsComponents.push(
              <NavigationBarGroupItem value={subkey} key={subkey} selected={subkey === topic}>
                {_topics[subkey].title}
              </NavigationBarGroupItem>
            );
          }
        }
        categoriesComponents.push(
          <NavigationBarGroup key={key} title={category.title}>
            {topicsComponents}
          </NavigationBarGroup>
        );
      }

      return categoriesComponents;
    });
  }, []);

  return (
    <NavigationBarUI
      className="navigation-bar"
      style={{
        top: "3.5rem",
        height: "calc(100vh - 3.5rem)",
        paddingTop: "0.5rem",
      }}
      onChange={(e) => {
        console.log(e);
      }}
    >
      {categories}
    </NavigationBarUI>
  );
};

export default NavigationBar;
