import React from "react";
import { useParams } from "react-router-dom";
import ContentProvider from "../../helpers/ContentProvider";
import { useTheme } from "stelios";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import styled from "styled-components";

interface PaletteProps {
  $colorPalette: any;
}

const StyledDiv = styled.div<PaletteProps>`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  background-color: ${(props) =>
    props.$colorPalette.primary.appearance === "light" ? "white" : "black"};
  color: ${(props) => props.$colorPalette.primary.grayScale[11]};
  box-sizing: border-box;
`;

const Topic = () => {
  const { idTopic } = useParams();

  const colorPalette = useTheme().theme.colorPalette;

  return (
    <StyledDiv
      $colorPalette={colorPalette}
    >
      <NavigationBar />
      <ContentProvider component={idTopic} />
    </StyledDiv>
  );
};

export default Topic;
