import styled from "styled-components";

export const StyledLanding = styled.section`
  .hero {
    height: 100vh;
    overflow: hidden;
    .heroImages {
      height: 150vh;
      width: 50vw;
      overflow: hidden;
      position: absolute;
      right: 0;
      top: -25%;
      z-index: -999999;
      img {
        height: 100% !important;
        width: auto;
        position: relative;
        z-index: -99999;
        animation: circle 15s linear infinite;
      }
    }
  }

  .section-1 {
    height: 100vh;
    width: 100%;
    background: #0d1b2a;
  }
`;
