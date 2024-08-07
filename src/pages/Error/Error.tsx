import { NotFound, useTheme } from "stelios";
import styled from "styled-components";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

interface PaletteProps {
  $colorPalette: any;
}

const StyledDiv = styled.div<PaletteProps>`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) =>
    props.$colorPalette.primary.appearance === "light" ? "white" : "black"};
  color: ${(props) => props.$colorPalette.primary.grayScale[11]};
  box-sizing: border-box;
`;

const Error = () => {
  const colorPalette = useTheme().theme.colorPalette;

  return (
    <StyledDiv $colorPalette={colorPalette}>
      <NavigationBar />
      <NotFound
        iconWidth="20rem"
        iconHeight="20rem"
        width="calc(100vw - 15rem)"
        style={{
          // width: "calc(100vw - 15rem)",
          backgroundColor: `${
            colorPalette.primary.appearance === "light" ? "white" : "black"
          }`,
        }}
      />
    </StyledDiv>
  );
};

export default Error;
