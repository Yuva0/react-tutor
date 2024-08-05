import styled from "styled-components";

export const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100vw - 15rem);
  gap: 1rem;
  padding: 2rem 3rem 3rem 3rem;
  box-sizing: border-box;
`;

export const StyledTopicContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: justify;
  width: calc(100% - 12rem);
  box-sizing: border-box;
`;

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  scroll-margin-top: 5rem;
`;
export const StyledSubsection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  scroll-margin-top: 5rem;
`;
