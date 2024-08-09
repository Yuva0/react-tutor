import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100vw - 15rem);
  gap: 1rem;
  padding: 2rem 3rem 3rem 3rem;
  box-sizing: border-box;
  min-height: 100vh;
  &.fade-in {
    animation: ${fadeIn} 0.2s ease-in-out;
  }
`;

export const StyledTopicContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: justify;
  width: calc(100% - 12rem);
  box-sizing: border-box;
   &.fade-in {
    animation: ${fadeIn} 0.2s ease-in-out;
  }
`;

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  scroll-margin-top: 5rem;
   &.fade-in {
    animation: ${fadeIn} 0.2s ease-in-out;
  }
`;
export const StyledSubsection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  scroll-margin-top: 5rem;
   &.fade-in {
    animation: ${fadeIn} 0.2s ease-in-out;
  }
`;
