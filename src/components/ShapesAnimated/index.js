import Image from "next/image";

import { StyledShapesAnimated } from "./StyledShapesAnimated";

function ShapesAnimated() {
  return (
    <StyledShapesAnimated>
      <Image
        className="triangle"
        src="/images/triangle.svg"
        width={205}
        height={177.53}
        alt=""
      />
      <Image
        className="rectangle"
        src="/images/Rectangle.svg"
        width={205}
        height={177.53}
        alt=""
      />
    </StyledShapesAnimated>
  );
}

export default ShapesAnimated;
