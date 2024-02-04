import styled from "styled-components";

export const StyledShapesAnimated = styled.section`
  .triangle {
    position: relative;
    left: 5%;
    padding-top: 5%;
    animation: moveUpDown 12s infinite ease-in-out;
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
`;
