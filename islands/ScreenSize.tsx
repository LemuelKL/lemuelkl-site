/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

export default function ScreenSize() {
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    self.addEventListener("resize", detectSize);

    return () => {
      self.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <div>
      <p>
        Width: <strong>{windowDimension.winWidth}</strong>
      </p>
      <p>
        Height: <strong>{windowDimension.winHeight}</strong>
      </p>
    </div>
  );
}
