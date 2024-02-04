import styled from "styled-components";

export const StyledShapesAnimated = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  .triangle {
    position: absolute;
    left: 5%;
    padding-top: 5%;
    z-index: 0;
    animation: moveUpDown 30s infinite ease-in-out;
  }

  .rectangle {
    position: absolute;
    right: 5%;
    top: 25%;
    z-index: 0;
    animation: rotate 30s infinite ease;
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
