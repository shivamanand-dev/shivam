// import Image from "next/image";

import ParticlesAnimated from "@/components/ParticlesAnimated";
import ShapesAnimated from "@/components/ShapesAnimated";
import { StyledLanding } from "@/components/StyledPages";

const Landing = () => {
  return (
    <StyledLanding>
      <div className="particles">
        <ParticlesAnimated />
      </div>
      <div className="shapes">
        <ShapesAnimated />
      </div>
    </StyledLanding>
  );
};

export default Landing;
