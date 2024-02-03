import AnimatedCursor from "react-animated-cursor";

export default function AnimatedCursorPointer() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#fff",
        }}
        outerStyle={{
          border: "3px solid #fff",
        }}
        showSystemCursor={false}
      />
    </div>
  );
}
