import React from "react";
import styled from "styled-components";
import { useTheme } from "stelios";
interface PaletteProps {
  $colorPalette: any;
}

const StyledHomepage = styled.div<PaletteProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.$colorPalette.primary.background};
  color: ${(props) => props.$colorPalette.primary.grayScale[11]};
  padding: 3.5rem 10rem 0 15rem;
`;

const Homepage = () => {
  const colorPalette = useTheme().theme.colorPalette;

  return <StyledHomepage $colorPalette={colorPalette}>Homepage</StyledHomepage>;
};

export default Homepage;
