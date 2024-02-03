// import Image from "next/image";

import ParticlesAnimated from "@/components/ParticlesAnimated";
import { StyledLanding } from "@/components/StyledPages";

const Landing = () => {
  return (
    <StyledLanding>
      <div className="particles">
        <ParticlesAnimated />
      </div>
      <div className="shapes">dsfsdf</div>
    </StyledLanding>
  );
};

export default Landing;
