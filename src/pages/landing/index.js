import Image from "next/image";

import { StyledLanding } from "@/components/StyledPages";

const Landing = () => {
  return (
    <StyledLanding>
      <div className="hero">
        <div className="heroImages">
          <Image src="/images/heroSvg.svg" width={500} height={500} alt="" />
        </div>
        <div className="flex wrapper">
          <div></div>
        </div>
      </div>

      {/* section-1 */}
      <div className="section-1"></div>
    </StyledLanding>
  );
};

export default Landing;
