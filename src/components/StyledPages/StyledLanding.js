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
    z-index: 1 !important;
    opacity: 1;
    background: transparent;
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
      /* opacity: 0.25 !important; */

      :hover {
        opacity: 1;
        display: none;
      }
    }
  }
  .itsMe {
    position: fixed;
    width: max-content;
    top: 10%;
    /* z-index: ${(props) => props.itsMeIndex}; */
    left: 50%;
    transform: translate(-50%);
    h1 {
      max-width: max-content;
      margin: 0 auto;
      margin-top: 10%;
      font-size: 8rem;
      color: #e0e1dd57;
      padding-top: 5rem;
    }
  }
  .body {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    color: #e0e1dd;
    z-index: 4;
    font-size: 3rem;
    overflow-x: hidden;
    overflow-y: scroll;
    .hero {
      height: 100vh;
      width: 100%;
    }

    p {
      text-align: justify;
    }
  }
`;
