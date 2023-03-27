import styled from "styled-components";

export const StyledLanding = styled.section`
  .hero {
    height: 100vh;
    overflow: hidden;
    .circleIllustrator {
      height: 100vh;
      width: auto;
      animation: circle 15s linear infinite;
      position: absolute;
      right: -20%;
      top: -0%;
      z-index: -999999;
    }
  }

  .section-1 {
    height: 100vh;
    width: 100%;
    background: #0d1b2a;
  }
`;
