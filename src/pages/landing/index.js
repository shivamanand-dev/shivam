// import Image from "next/image";

import { MaskParticles, SimpleParticles } from "@/components/ParticlesAnimated";
import ShapesAnimated from "@/components/ShapesAnimated";
import { StyledLanding } from "@/components/StyledPages";

const Landing = () => {
  return (
    <StyledLanding>
      <div className="background">
        <div className="particles">
          <SimpleParticles />
          <div className="maskParticle">
            <MaskParticles />
          </div>
        </div>
        <div className="shapes">
          <ShapesAnimated />
        </div>
      </div>

      <div className="itsMe">
        <h1>Hey, I am</h1>
        <div className="shivamPic">
          <img src="/images/photo-shivam1.png" alt="" />
        </div>
      </div>
      <div className="body">
        <div className="hero"></div>

        <div className="section wrapper">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            in dolorem a sint ratione laborum nulla. Natus molestiae fugiat
            earum aperiam, tenetur accusantium, doloribus repudiandae optio
            magnam, eligendi quibusdam itaque.
          </p>
        </div>
      </div>
    </StyledLanding>
  );
};

export default Landing;
