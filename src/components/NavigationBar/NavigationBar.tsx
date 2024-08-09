import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  NavigationBarGroup,
  NavigationBarGroupItem,
  NavigationBarItem,
  NavigationBar as NavigationBarUI,
  useTheme,
} from "stelios";
import Topics from "../../content/Topics";

const NavigationBar = () => {
  const navigate = useNavigate();


  const { idTopic, idCategory } = useParams();
  const colorPalette = useTheme().theme.colorPalette;

  const _onNavigateToTopic = (
    e: React.MouseEvent | React.KeyboardEvent,
    topic: string,
    category: string
  ) => {
    navigate(`/${category}/${topic}`);
  };

  const NavigationBarContent = Object.keys(Topics).map((_category) => {
    if (!Topics[_category].content)
      return (
        <NavigationBarItem key={_category} value={_category}>
          {Topics[_category].title}
        </NavigationBarItem>
      );

    return (
      <NavigationBarGroup
        title={Topics[_category].title}
        expanded={_category === idCategory}
      >
        {Object.keys(Topics[_category].content).map((_topic) => (
          <NavigationBarGroupItem
            key={_topic}
            value={_topic}
            selected={_topic === idTopic}
            onClick={(e) => _onNavigateToTopic(e, _topic, _category)}
          >
            {Topics[_category].content[_topic].title}
          </NavigationBarGroupItem>
        ))}
      </NavigationBarGroup>
    );
  });



  return (
    <NavigationBarUI
      className="navigation-bar"
      style={{
        top: "3.5rem",
        boxSizing: "border-box",
        height: "calc(100vh - 3.5rem)",
        padding: "0.5rem 0",
        // borderRight: 0,
        backgroundColor: colorPalette.primary.appearance === "light" ? "white" : "black",
      }}
    >
      {NavigationBarContent}
    </NavigationBarUI>
  );
};

export default NavigationBar;
