import React from "react";
import {
  Header as HeaderUI,
  HeaderGroup,
  HeaderItem,
  IconButton,
  Autocomplete,
  Text,
} from "stelios";
import {
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

import Settings from "./Settings";

const Header = () => {
  const navigate = useNavigate();

  const _onNavigateToTopic = (
    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent,
    { title, value }: { title: string; value: string }
  ) => {
    if (
      value === "understanding-react" ||
      value === "jsx" ||
      value === "virtual-dom"
    ) {
      navigate(`/guides/${value}`);
    } else if (
      value === "function-component" ||
      value === "class-component"
    ) {
      navigate(`/components/${value}`);
    } else if (
      value === "use-state" ||
      value === "use-effect" ||
      value === "use-memo" ||
      value === "use-callback" ||
      value === "use-ref" ||
      value === "use-context"
    ) {
      navigate(`/hooks/${value}`);
    }
  };

  return (
    <HeaderUI
      id="header"
      expandable={false}
      height="3.5rem"
      style={{ outline: 0 }}
    >
      <HeaderGroup style={{ marginLeft: "4rem", height: "100%" }}>
        <HeaderItem style={{ height: "100%", display:"flex", justifyContent:"center", alignItems:"center" }}>
          <Text
            variant="h4"
            style={{ fontFamily: `"Playwrite HR Lijeva", cursive` }}
          >
            React-Tutor
          </Text>
        </HeaderItem>
      </HeaderGroup>
      <HeaderGroup>
        <Autocomplete
          width="30rem"
          options={[
            { title: "Understanding React", value: "understanding-react" },
            { title: "JSX", value: "jsx" },
            { title: "Virtual DOM", value: "virtual-dom" },
            { title: "Function Component", value: "function-component" },
            { title: "Class Component", value: "class-component" },
            { title: "useState", value: "use-state" },
            { title: "useEffect", value: "use-effect" },
            { title: "useMemo", value: "use-memo" },
            { title: "useCallback", value: "use-callback" },
            { title: "useRef", value: "use-ref" },
            { title: "useContext", value: "use-context" },
          ]}
          onChange={_onNavigateToTopic}
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
