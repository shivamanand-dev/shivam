// import Image from "next/image";

// eslint-disable-next-line simple-import-sort/imports
import { MaskParticles, SimpleParticles } from "@/components/ParticlesAnimated";
import ShapesAnimated from "@/components/ShapesAnimated";
import { StyledLanding } from "@/components/StyledPages";
import { useState } from "react";

const Landing = () => {
  const [itsMeIndex, setItsMeIndex] = useState(5);
  const onFocusSection = () => {
    // console.log("onFocusSection");
    setItsMeIndex(1);
  };
  return (
    <StyledLanding itsMeIndex={itsMeIndex}>
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

        <div className="section" onFocus={onFocusSection}>
          <div className="wrapper">
            <h2>Who am I?</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              voluptatem officia excepturi fugiat cupiditate quaerat, adipisci
              perspiciatis, impedit eaque odit optio at vitae iure, quasi odio
              similique. Error, veniam dolorem?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              voluptatem officia excepturi fugiat cupiditate quaerat, adipisci
              perspiciatis, impedit eaque odit optio at vitae iure, quasi odio
              similique. Error, veniam dolorem?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              voluptatem officia excepturi fugiat cupiditate quaerat, adipisci
              perspiciatis, impedit eaque odit optio at vitae iure, quasi odio
              similique. Error, veniam dolorem?
            </p>{" "}
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              voluptatem officia excepturi fugiat cupiditate quaerat, adipisci
              perspiciatis, impedit eaque odit optio at vitae iure, quasi odio
              similique. Error, veniam dolorem?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              voluptatem officia excepturi fugiat cupiditate quaerat, adipisci
              perspiciatis, impedit eaque odit optio at vitae iure, quasi odio
              similique. Error, veniam dolorem?
            </p>
            <p>
              <img src="/images/Polygon.svg" alt="" />
            </p>
          </div>
        </div>
      </div>
    </StyledLanding>
  );
};

export default Landing;
