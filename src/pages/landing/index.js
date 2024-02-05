// import Image from "next/image";

import { MaskParticles, SimpleParticles } from "@/components/ParticlesAnimated";
import ShapesAnimated from "@/components/ShapesAnimated";
import { StyledLanding } from "@/components/StyledPages";

const Landing = () => {
  return (
    <StyledLanding>
      <div className="particles">
        <SimpleParticles />
        <MaskParticles />
      </div>
      {/* <div className="maskParticle"></div> */}
      <div className="shapes">
        <ShapesAnimated />
      </div>
    </StyledLanding>
  );
};

export default Landing;
