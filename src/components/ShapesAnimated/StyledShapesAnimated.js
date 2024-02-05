import styled from "styled-components";

export const StyledShapesAnimated = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  .triangle {
    position: absolute;
    left: 5%;
    padding-top: 5%;
    opacity: 0.75;
    animation: moveUpDown 30s infinite ease-in-out;
    z-index: 0;
  }

  .rectangle {
    position: absolute;
    top: 60%;
    left: 2%;
    z-index: 0;
    transform: rotate(45deg);
  }
  .cross {
    position: absolute;
    right: 5%;
    bottom: 15%;
    z-index: 0;
    animation: rotate 30s infinite linear;
  }
  .circle {
    position: absolute;
    right: -100px;
    top: 5%;
    z-index: 0;
    transform: rotate(270deg);
    opacity: 0.5;
    /* animation: rotate 30s infinite ease; */
  }

  @keyframes moveUpDown {
    0% {
      transform: translateY(100px);
    }
    50% {
      transform: translateY(-80px);
    }
    100% {
      transform: translateY(100px);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
