import React from "react";
import {
  Header as HeaderUI,
  HeaderGroup,
  HeaderItem,
  IconButton,
  Input,
  Button,
  Text,
} from "stelios";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react";

import cstutor from "../../assets/images/CSTutor_logo.png";

const Header = () => {
  return (
    <HeaderUI expandable={false} height="3.5rem">
      <HeaderGroup style={{ marginLeft: "4rem" }}>
        <HeaderItem>
          <img
            style={{ width: "4rem", height: "4rem" }}
            src={cstutor}
            alt="CS Tutor"
          />
        </HeaderItem>
        <HeaderItem>
          <Text variant="h2" color="#d18800">CSTutor</Text>
        </HeaderItem>
      </HeaderGroup>
      <HeaderGroup>
        <Input
          leadingIcon={<IconSearch />}
          width="40rem"
          placeholder="Search..."
        />
      </HeaderGroup>
      <HeaderGroup>
        <HeaderItem>
          <IconButton
            size="small"
            variant="outlined"
            color="primary"
            icon={<IconSettings />}
          />
        </HeaderItem>
        <HeaderItem>
          <IconButton
            size="small"
            variant="outlined"
            color="primary"
            icon={<IconBrandGithub />}
          />
        </HeaderItem>
        <HeaderItem>
          <IconButton
            size="small"
            variant="outlined"
            color="primary"
            icon={<IconBrandLinkedin />}
          />
        </HeaderItem>
      </HeaderGroup>
    </HeaderUI>
  );
};

export default Header;
