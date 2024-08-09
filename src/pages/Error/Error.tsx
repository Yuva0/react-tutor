import { NotFound, useTheme } from "stelios";

const Error = () => {
  const colorPalette = useTheme().theme.colorPalette;

  return (
    <NotFound
      iconWidth="20rem"
      iconHeight="20rem"
      width="calc(100vw - 15rem)"
      style={{
        backgroundColor: `${
          colorPalette.primary.appearance === "light" ? "white" : "black"
        }`,
      }}
    />
  );
};

export default Error;
