/* eslint-disable no-console */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/all";
import { useRef } from "react";

import BodySection from "@/components/BodySection";
import { MaskParticles, SimpleParticles } from "@/components/ParticlesAnimated";
import ShapesAnimated from "@/components/ShapesAnimated";
import { StyledLanding } from "@/components/StyledPages";

const Landing = () => {
  const bodyContainer = useRef(null);
  const bodyContent = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (bodyContainer.current) {
        // let introHeight = bodyContainer.current.clientHeight;
        // let offset = window.innerHeight - introHeight;
        // setupSTs(offset);

        ScrollTrigger.create({
          trigger: bodyContent.current,
          start: "top+=2 bottom",
          onToggle: (self) => console.log("toggled, isActive:", self.isActive),
          onUpdate: (self) => {
            console.log(
              "progress:",
              self.progress.toFixed(3),
              "direction:",
              self.direction,
              "velocity",
              self.getVelocity()
            );
          },
          onEnter: () => console.log("enjkter"),
          // pin: bodyContent.current,
        });
      }

      console.log("gv");
    }
    // {
    //   scope: bodyContent,
    // }
  ); // defaults to an empty dependency array '[]' and no scoping.

  return (
    <StyledLanding ref={bodyContainer}>
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
      </div>

      <div className="body">
        <div className="hero"></div>

        <div className="section" ref={bodyContent}>
          <BodySection />
        </div>
      </div>
    </StyledLanding>
  );
};

export default Landing;
