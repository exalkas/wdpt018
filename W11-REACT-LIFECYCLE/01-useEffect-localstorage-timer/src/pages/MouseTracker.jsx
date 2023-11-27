import { useEffect, useState } from "react";

export default function MouseTracker() {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    // console.log("🚀 ~ e:", e.clientX, e.clientY);

    setCoordinates({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    // return does the cleanup of the effect
    return () => {
      console.log("CLEANUP is happening");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>MouseTracker</h1>
      <p>Move your mouse</p>
      <p>
        X:{coordinates.x} Y:{coordinates.y}
      </p>
    </div>
  );
}
