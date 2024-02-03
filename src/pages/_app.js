import "../styles/globals.css";

import AnimatedCursorPointer from "@/components/AnimatedCursorPointer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div>
        <AnimatedCursorPointer />
      </div>
      <Component {...pageProps} />
    </>
  );
}
