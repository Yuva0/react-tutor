import * as React from "react";
import {
  StyledMain,
  StyledSection,
  StyledSubsection,
  StyledTopicContent,
} from "../components/StyledInternalComponents/StyledInternalComponents";
import { Loader } from "stelios";

const getRandomInt = () => {
  return Math.random()*0.5;
};

const Loading: React.FunctionComponent = () => {
  return (
    <StyledMain>
      <StyledTopicContent>
        <StyledSection>
          <StyledSubsection>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Loader width="3rem" height="1.25rem" />
              <span style={{ margin: "0 0.5rem" }}>/</span>
              <Loader width="10rem" height="1.25rem" />
            </div>
            <Loader
              width="12rem"
              height="2rem"
              style={{ marginTop: "1rem" }}
              startTime={getRandomInt()}
            />
            <Loader width="100%" height="2rem" startTime={getRandomInt()} />
            <Loader width="100%" height="2rem" startTime={getRandomInt()} />
            <Loader width="100%" height="2rem" startTime={getRandomInt()} />
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection>
            <Loader
              width="12rem"
              height="2rem"
              style={{ marginTop: "1rem" }}
              startTime={getRandomInt()}
            />
            <Loader width="100%" height="2rem" startTime={getRandomInt()} />
            <Loader width="100%" height="2rem" startTime={getRandomInt()} />
            <Loader width="100%" height="2rem" startTime={getRandomInt()} />
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection>
            <Loader
              width="12rem"
              height="2rem"
              style={{ marginTop: "1rem" }}
              startTime={getRandomInt()}
            />
            <Loader width="100%" height="2rem" startTime={getRandomInt()} />
            <Loader width="100%" height="2rem" startTime={getRandomInt()} />
            <Loader width="100%" height="2rem" startTime={getRandomInt()} />
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection>
            <Loader
              width="12rem"
              height="2rem"
              style={{ marginTop: "1rem" }}
              startTime={getRandomInt()}
            />
            <Loader width="100%" height="2rem" startTime={getRandomInt()} />
            <Loader width="100%" height="2rem" startTime={getRandomInt()} />
            <Loader width="100%" height="2rem" startTime={getRandomInt()} />
          </StyledSubsection>
        </StyledSection>
        <StyledSection>
          <StyledSubsection>
            <Loader
              width="12rem"
              height="2rem"
              style={{ marginTop: "1rem" }}
              startTime={getRandomInt()}
            />
            <Loader width="100%" height="2rem" startTime={getRandomInt()} />
            <Loader width="100%" height="2rem" startTime={getRandomInt()} />
            <Loader width="100%" height="2rem" startTime={getRandomInt()} />
          </StyledSubsection>
        </StyledSection>
      </StyledTopicContent>
    </StyledMain>
  );
};

export default Loading;
