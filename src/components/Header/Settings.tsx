import React from "react";
import { IconMoon, IconSettings, IconSun } from "@tabler/icons-react";
import {
  Button,
  ColorPicker,
  Drawer,
  IconButton,
  Input,
  Text,
  ToggleButton,
  ToggleButtonGroup,
} from "stelios";
import styled from "styled-components";

const StyledDrawerChildren = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const StyledDrawerChildrenItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &.revert-button {
    margin-top: 2rem;
  }
`;

const Settings = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const _handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const _handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      <IconButton
        size="small"
        variant="outlined"
        icon={<IconSettings />}
        onClick={_handleDrawerOpen}
      />
      <Drawer
        open={drawerOpen}
        title="Settings"
        size="small"
        position="right"
        onClose={_handleDrawerClose}
      >
        <StyledDrawerChildren>
          <StyledDrawerChildrenItem>
            <Text variant="paragraph">Appearance</Text>
            <ToggleButtonGroup value="light" width="100%">
              <ToggleButton value="light">
                <IconSun />
                <Text variant="span">Light</Text>
              </ToggleButton>
              <ToggleButton value="dark">
                <IconMoon />
                <Text variant="span">Dark</Text>
              </ToggleButton>
            </ToggleButtonGroup>
          </StyledDrawerChildrenItem>

          <StyledDrawerChildrenItem>
            <ColorPicker
              label="Primary Color"
              width="100%"
              onChange={(color) => {
                console.log(color);
              }}
            />
          </StyledDrawerChildrenItem>

          <StyledDrawerChildrenItem className="revert-button">
            <Button variant="contained" color="danger">
              Revert to Default Settings
            </Button>
          </StyledDrawerChildrenItem>
        </StyledDrawerChildren>
      </Drawer>
    </>
  );
};

export default Settings;
