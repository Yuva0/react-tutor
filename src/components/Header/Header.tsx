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
  IconSettings,
} from "@tabler/icons-react";

const Header = () => {
  return (
    <HeaderUI expandable={false} height="3.5rem">
      <HeaderGroup></HeaderGroup>
      <HeaderGroup>
        <Input leadingIcon={<IconSearch/>} width="40rem" placeholder="Search..." />
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
