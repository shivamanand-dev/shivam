import Image from "next/image";

import { StyledLanding } from "@/components/StyledPages";

const Landing = () => {
  return (
    <StyledLanding>
      <div className="hero">
        <Image
          className="circleIllustrator"
          src="/images/heroSvg.svg"
          width={160}
          height={500}
          alt=""
        />
        <div className="wrapper">
          <div
            className="flex"
            style={{ height: "100vh", justifyContent: "space-between" }}
          >
            <div>
              <h1>
                Turning <br />
                <span style={{ color: "#ffb703" }}> Ideas</span>
                <br /> into code
              </h1>
            </div>
            <div>
              <Image src="/images/model.svg" width={560} height={500} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* section-1 */}
      <div className="section-1"></div>
    </StyledLanding>
  );
};

export default Landing;
