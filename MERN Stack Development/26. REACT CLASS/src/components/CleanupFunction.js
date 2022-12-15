import React, { useEffect, useState } from "react";

function CleanupFunction() {
  const [widthCount, setWidthCount] = useState(window.screen.width);
  const [heightCount, setHeightCount] = useState(window.screen.height);

  const actualSize = () => {
    setWidthCount(window.innerWidth);
    setHeightCount(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", actualSize);
    return () => {
      window.removeEventListener("resize", actualSize);
    };
  });

  return (
    <div className="wind">
      <p>⬇️The actual inner size of the window is⬇️</p>
      <h1>➡️Width: {widthCount}</h1>
      <h1>➡️Height: {heightCount}</h1>
    </div>
  );
}

export default CleanupFunction;
