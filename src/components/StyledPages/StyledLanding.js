import styled from "styled-components";

export const StyledLanding = styled.section`
  position: relative;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  .shapes {
    height: 100vh;
    width: 100vw;
    color: #fff;
    position: relative;
    z-index: 0 !important;
    opacity: 1;
  }
  .particles {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 2;
    opacity: 0.75;
  }
  .maskParticle #tsparticlesd {
    position: relative;
    top: 0;
    /* height: 50vh !important;
    width: 50vw !important; */
    z-index: 3;
    canvas {
      opacity: 0.25 !important;

      :hover {
        opacity: 1;
        display: none;
      }
    }
  }
`;
