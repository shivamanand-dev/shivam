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
        width={150}
        height={150}
        alt=""
      />
      <Image
        className="cross"
        src="/images/cross.svg"
        width={100}
        height={100}
        alt=""
      />
      <Image
        className="circle"
        src="/images/circle.svg"
        width={200}
        height={200}
        alt=""
      />
    </StyledShapesAnimated>
  );
}

export default ShapesAnimated;
