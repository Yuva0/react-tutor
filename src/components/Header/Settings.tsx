import React from "react";
import { IconMoon, IconSettings, IconSun } from "@tabler/icons-react";
import {
  Accordion,
  AccordionItem,
  Button,
  ColorPicker,
  Drawer,
  IconButton,
  Text,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
  useUpdateTheme,
} from "stelios";
import styled from "styled-components";
import colors from "../../tokens/colors.json";

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
  const colorPalette = useTheme().theme.colorPalette;
  const [appearance, setAppearance] = React.useState<"light" | "dark">(
    colorPalette.primary.appearance
  );
  const [primaryColor, setPrimaryColor] = React.useState(
    colorPalette.primary.main
  );
  const [secondaryColor, setSecondaryColor] = React.useState(
    colorPalette.secondary.main
  );
  const [dangerColor, setDangerColor] = React.useState(
    colorPalette.danger.main
  );
  const [warningColor, setWarningColor] = React.useState(
    colorPalette.warning.main
  );
  const [successColor, setSuccessColor] = React.useState(
    colorPalette.success.main
  );
  const [infoColor, setInfoColor] = React.useState(colorPalette.info.main);
  const updateTheme = useUpdateTheme();

  const _handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const _handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const _handleAppearanceChange = (e: React.MouseEvent, value?: string) => {
    if (!value || (value !== "light" && value !== "dark")) return;

    setAppearance(value);
    updateTheme({
      appearance: value,
      accent: {
        primary: primaryColor,
        secondary: secondaryColor,
        danger: dangerColor,
        warning: warningColor,
        success: successColor,
        info: infoColor,
      },
    });
  };

  const _handlePrimaryColorChange = (color?: string) => {
    if (!color) return;
    setPrimaryColor(color);
    updateTheme({
      appearance,
      accent: {
        primary: color,
        secondary: secondaryColor,
        danger: dangerColor,
        warning: warningColor,
        success: successColor,
        info: infoColor,
      },
    });
  };
  const _handleSecondaryColorChange = (color?: string) => {
    if (!color) return;
    setSecondaryColor(color);
    updateTheme({
      appearance,
      accent: {
        primary: primaryColor,
        secondary: color,
        danger: dangerColor,
        warning: warningColor,
        success: successColor,
        info: infoColor,
      },
    });
  };
  const _handleDangerColorChange = (color?: string) => {
    if (!color) return;
    setDangerColor(color);
    updateTheme({
      appearance,
      accent: {
        primary: primaryColor,
        secondary: secondaryColor,
        danger: color,
        warning: warningColor,
        success: successColor,
        info: infoColor,
      },
    });
  };
  const _handleWarningColorChange = (color?: string) => {
    if (!color) return;
    setWarningColor(color);
    updateTheme({
      appearance,
      accent: {
        primary: primaryColor,
        secondary: secondaryColor,
        danger: dangerColor,
        warning: color,
        success: successColor,
        info: infoColor,
      },
    });
  };
  const _handleSuccessColorChange = (color?: string) => {
    if (!color) return;
    setSuccessColor(color);
    updateTheme({
      appearance,
      accent: {
        primary: primaryColor,
        secondary: secondaryColor,
        danger: dangerColor,
        warning: warningColor,
        success: color,
        info: infoColor,
      },
    });
  };
  const _handleInfoColorChange = (color?: string) => {
    if (!color) return;
    setInfoColor(color);
    updateTheme({
      appearance,
      accent: {
        primary: primaryColor,
        secondary: secondaryColor,
        danger: dangerColor,
        warning: warningColor,
        success: successColor,
        info: color,
      },
    });
  };

  const _onClickRevert = () => {
    setAppearance(colors.appearance as "light" | "dark");
    setPrimaryColor(colors.accent.primary);
    setSecondaryColor(colors.accent.secondary);
    setDangerColor(colors.accent.danger);
    setWarningColor(colors.accent.warning);
    setSuccessColor(colors.accent.success);
    setInfoColor(colors.accent.info);
    updateTheme({
      appearance: colors.appearance as "light" | "dark",
      accent: {
        primary: colors.accent.primary,
        secondary: colors.accent.secondary,
        danger: colors.accent.danger,
        warning: colors.accent.warning,
        success: colors.accent.success,
        info: colors.accent.info,
      },
    });
  };

  return (
    <>
      <IconButton
        size="small"
        variant="soft"
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
            <ToggleButtonGroup
              value={appearance}
              width="100%"
              onClick={_handleAppearanceChange}
            >
              <ToggleButton value="light">
                <IconSun />
                <Text noColor variant="span">
                  Light
                </Text>
              </ToggleButton>
              <ToggleButton value="dark">
                <IconMoon />
                <Text noColor variant="span">
                  Dark
                </Text>
              </ToggleButton>
            </ToggleButtonGroup>
          </StyledDrawerChildrenItem>

          <StyledDrawerChildrenItem>
            <ColorPicker
              label="Primary Color"
              color={primaryColor}
              width="100%"
              onChange={_handlePrimaryColorChange}
            />
          </StyledDrawerChildrenItem>

          <Accordion width="100%">
            <AccordionItem title="Additional Settings">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginTop: "0.5rem",
                }}
              >
                <ColorPicker
                  label="Secondary Color"
                  color={secondaryColor}
                  width="100%"
                  onChange={_handleSecondaryColorChange}
                />

                <ColorPicker
                  label="Danger Color"
                  color={dangerColor}
                  width="100%"
                  onChange={_handleDangerColorChange}
                />

                <ColorPicker
                  label="Warning Color"
                  color={warningColor}
                  width="100%"
                  onChange={_handleWarningColorChange}
                />

                <ColorPicker
                  label="Success Color"
                  color={successColor}
                  width="100%"
                  onChange={_handleSuccessColorChange}
                />

                <ColorPicker
                  label="Info Color"
                  color={infoColor}
                  width="100%"
                  onChange={_handleInfoColorChange}
                />
              </div>
            </AccordionItem>
          </Accordion>

          <StyledDrawerChildrenItem className="revert-button">
            <Button variant="contained" color="danger" onClick={_onClickRevert}>
              Revert to Default Settings
            </Button>
          </StyledDrawerChildrenItem>
        </StyledDrawerChildren>
      </Drawer>
    </>
  );
};

export default Settings;
