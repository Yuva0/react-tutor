import React from "react";
import {
  Header as HeaderUI,
  HeaderGroup,
  HeaderItem,
  IconButton,
  Input,
} from "stelios";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconSearch,
} from "@tabler/icons-react";

import Settings from "./Settings";

const Header = () => {
  return (
    <HeaderUI expandable={false} height="3.5rem">
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
          leadingIcon={<IconSearch />}
          width="40rem"
          placeholder="Search..."
        />
      </HeaderGroup>
      <HeaderGroup style={{ marginRight: "4rem" }}>
        <HeaderItem>
          <IconButton
            size="small"
            variant="outlined"
            color="primary"
            icon={<IconBrandGithub />}
            onClick={() => window.open("https://github.com/yuva0")}
          />
        </HeaderItem>
        <HeaderItem>
          <IconButton
            size="small"
            variant="outlined"
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
