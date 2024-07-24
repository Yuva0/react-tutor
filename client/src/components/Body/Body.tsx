import React from "react";
import styled from "styled-components";
import { useTheme } from "stelios";

interface paletteProps {
  $colorPalette: any;
}

const StyledBody = styled.div<paletteProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.$colorPalette.primary.background};
  color: ${(props) => props.$colorPalette.primary.grayScale[11]};
  padding: 3.5rem 10rem 0 15rem;
`;

const Body = ({
  children,
}: {
  children: React.ReactNode | [React.ReactNode];
}) => {
  const colorPalette = useTheme().theme.colorPalette;

  return <StyledBody $colorPalette={colorPalette}>{children}</StyledBody>;
};

export default Body;
