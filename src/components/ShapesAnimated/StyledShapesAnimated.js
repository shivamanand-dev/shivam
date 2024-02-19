import styled from "styled-components";

export const StyledShapesAnimated = styled.section`
  position: relative;
  width: 100vw;
  background-color: transparent;
  height: 100vh;
  .triangle {
    position: absolute;
    left: 5%;
    padding-top: 5%;
    z-index: 0;
    opacity: 0.75;
    animation: moveUpDown 30s infinite ease-in-out;
  }

  .rectangle {
    top: 60%;
    position: absolute;
    left: 2%;
    z-index: 0;
    transform: rotate(45deg);
  }
  .cross {
    right: 5%;
    position: absolute;
    bottom: 15%;
    z-index: 0;
    animation: rotate 30s infinite linear;
  }
  .circle {
    position: absolute;
    top: 5%;
    right: -100px;
    z-index: 0;
    transform: rotate(270deg);
    /* animation: rotate 30s infinite ease; */
    opacity: 0.5;
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
