import * as React from "react";
import {
  Text,
  CodeDisplay,
  List,
  ListItem,
  Breadcrumbs,
  BreadcrumbsItem,
} from "stelios";
import {
  StyledMain,
  StyledSection,
  StyledSubsection,
} from "../components/StyledInternalComponents/StyledInternalComponents";

const FunctionComponent = () => {
  return (
    <StyledMain>
      <StyledSection>
        <StyledSubsection>
          <Breadcrumbs size="small" color="primary" delimiter="/">
            <BreadcrumbsItem title="Guides" />
            <BreadcrumbsItem
              link="/components/function-component"
              title="Function Components"
            />
          </Breadcrumbs>
        </StyledSubsection>
      </StyledSection>
    </StyledMain>
  );
};

export default FunctionComponent;
