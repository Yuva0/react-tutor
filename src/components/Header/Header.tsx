import React from "react";
import {
  Header as HeaderUI,
  HeaderGroup,
  HeaderItem,
  IconButton,
  Input,
  useTheme,
} from "stelios";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconSearch,
} from "@tabler/icons-react";

import Settings from "./Settings";

const Header = () => {
  
  const colorPalette = useTheme().theme.colorPalette;

  return (
    <HeaderUI id="header" expandable={false} height="3.5rem" style={{outline:0}}>
      <HeaderGroup style={{ marginLeft: "4rem", height: "100%" }}>
        <HeaderItem style={{ height: "100%" }}>
          {/* <Text
            variant="h2"
            style={{ fontFamily: `"Playwrite HR Lijeva", cursive` }}
          >
            CSTutor
          </Text> */}
        </HeaderItem>
      </HeaderGroup>
      <HeaderGroup>
        <Input
          color="primary"
          leadingIcon={<IconSearch />}
          width="40rem"
          placeholder="Search..."
        />
      </HeaderGroup>
      <HeaderGroup style={{ marginRight: "4rem" }}>
        <HeaderItem>
          <IconButton
            size="small"
            variant="soft"
            color="primary"
            icon={<IconBrandGithub />}
            onClick={() => window.open("https://github.com/yuva0")}
          />
        </HeaderItem>
        <HeaderItem>
          <IconButton
            size="small"
            variant="soft"
            color="primary"
            icon={<IconBrandLinkedin />}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/tanuj-sengupta-872a05129/"
              )
            }
          />
        </HeaderItem>
        <HeaderItem>
          <Settings />
        </HeaderItem>
      </HeaderGroup>
    </HeaderUI>
  );
};

export default Header;
