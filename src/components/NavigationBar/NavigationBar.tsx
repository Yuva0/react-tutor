import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ComponentHighlight,
  NavigationBarGroup,
  NavigationBarGroupItem,
  NavigationBarItem,
  NavigationBar as NavigationBarUI,
  Text,
  useTheme,
} from "stelios";
import Topics from "../../content/Topics";

const NavigationBar = () => {
  const navigate = useNavigate();

  const { idTopic, idCategory } = useParams();
  const [_topicParam, setTopic] = React.useState<string | undefined>(idTopic);
  const [_categoryParam, setCategory] = React.useState<string | undefined>(idCategory);

  useEffect(() => {
    setTopic(idTopic);
    setCategory(idCategory);
  },[idTopic, idCategory]);

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
        expanded={_category === _categoryParam}
        onClick={(e) => e.preventDefault()}
      >
        {Object.keys(Topics[_category].content).map((_topic) => (
          <NavigationBarGroupItem
            key={_topic}
            value={_topic}
            selected={_topic === _topicParam}
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
        backgroundColor:
          colorPalette.primary.appearance === "light" ? "white" : "black",
      }}
    >
      {NavigationBarContent}
      <div style={{ margin: "1rem 1rem" }}>
        <ComponentHighlight
          style={{
            backgroundColor:
              colorPalette.primary.appearance === "light" ? "white" : "black",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.5rem 0",
              textAlign: "center",
            }}
          >
            <Text style={{ color: colorPalette.primary.accentScale[10] }}>
              <b>
                <u>Made using Stelios</u>
              </b>
            </Text>
            <Text size="small" style={{ lineHeight: "1.5rem" }}>
              Lightweight Responsive Component Design System
            </Text>
          </div>
        </ComponentHighlight>
      </div>
    </NavigationBarUI>
  );
};

export default NavigationBar;
